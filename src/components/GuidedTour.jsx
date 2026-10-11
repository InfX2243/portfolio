import { useEffect, useRef, useState } from "react";
import { BASE_PATH, normalizePath } from "../app/basePath";

const tourRoutes = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Selected work" },
  { path: "/research", label: "Research" },
  { path: "/experience", label: "Experience" },
  { path: "/achievements", label: "Credentials" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const TARGET_SELECTOR = [
  "main h1", "main h2", "main h3", "main a[href]", "main button",
  "main article", "main .polished-project-card", "main .polished-research-card",
  "main .experience-timeline-main", "main .polished-contact-link",
].join(", ");

const easeInOutCubic = (value) =>
  value < 0.5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2;

export function GuidedTour({ path }) {
  const [playing, setPlaying] = useState(() => !window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const startedAt = useRef(Date.now());
  const cursorRef = useRef(null);
  const targetIndex = useRef(0);
  const routeRef = useRef(normalizePath(path));
  const expectedTourRoute = useRef(null);

  useEffect(() => {
    if (!playing) return undefined;

    let cancelled = false;
    let frameId = 0;
    let timeoutId = 0;
    let highlighted = null;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    // The tween owns every scroll frame. CSS smooth scrolling would queue competing animations.
    document.documentElement.style.scrollBehavior = "auto";
    // Preserve the reading position when paused; reset only when the tour changes routes.
    if (routeRef.current !== normalizePath(path)) {
      routeRef.current = normalizePath(path);
      if (expectedTourRoute.current === routeRef.current) {
        targetIndex.current = 0;
        expectedTourRoute.current = null;
      } else {
        targetIndex.current = -1;
        expectedTourRoute.current = null;
      }
    }

    const wait = (ms) => new Promise((resolve) => {
      timeoutId = window.setTimeout(resolve, ms);
    });

    const animateValue = (from, to, duration, update) => new Promise((resolve) => {
      if (cancelled) { resolve(); return; }
      if (reduceMotion) { update(to); resolve(); return; }
      const start = performance.now();
      const tick = (now) => {
        if (cancelled) { resolve(); return; }
        const progress = Math.min(1, (now - start) / duration);
        update(from + (to - from) * easeInOutCubic(progress));
        if (progress < 1) frameId = window.requestAnimationFrame(tick);
        else resolve();
      };
      frameId = window.requestAnimationFrame(tick);
    });

    const scrollToPosition = async (top) => {
      const start = window.scrollY;
      const maxTop = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const destination = Math.max(0, Math.min(top, maxTop));
      await animateValue(start, destination, 1450, (value) => window.scrollTo(0, value));
      // Let layout and scroll-linked elements settle before reading target coordinates.
      await wait(90);
    };

    const moveCursorBeside = async (element) => {
      const rect = element.getBoundingClientRect();
      const cursor = cursorRef.current;
      if (!cursor) return;

      // Let the visual pointer kiss the target’s right edge, like a reader tracking a line.
      // Wide cards use their rightmost content edge; cramped mobile layouts use the left edge.
      const hasRightGutter = window.innerWidth - rect.right >= 2;
      const hasLeftGutter = rect.left >= 18;
      const x = hasRightGutter
        ? rect.right - 1
        : hasLeftGutter
          ? rect.left - 2
          : Math.min(window.innerWidth - 3, Math.max(3, rect.right - 2));
      const y = Math.min(window.innerHeight - 8, Math.max(8, rect.top + Math.min(rect.height / 2, 24)));
      const current = cursor.dataset.position?.split(",").map(Number) || [window.innerWidth - 24, 100];
      const [startX, startY] = current;

      await new Promise((resolve) => {
        const duration = reduceMotion ? 0 : 520;
        const start = performance.now();
        const tick = (now) => {
          if (cancelled) { resolve(); return; }
          const progress = duration === 0 ? 1 : Math.min(1, (now - start) / duration);
          const eased = easeInOutCubic(progress);
          const nextX = startX + (x - startX) * eased;
          const nextY = startY + (y - startY) * eased;
          cursor.style.transform = `translate3d(${nextX}px, ${nextY}px, 0)`;
          cursor.dataset.position = `${nextX},${nextY}`;
          if (progress < 1) frameId = window.requestAnimationFrame(tick);
          else resolve();
        };
        frameId = window.requestAnimationFrame(tick);
      });
    };

    const getCandidates = () => {
      const candidates = Array.from(document.querySelectorAll(TARGET_SELECTOR)).filter((element) => {
        if (element.closest(".guided-tour") || element.closest("[aria-hidden='true']")) return false;
        const rect = element.getBoundingClientRect();
        const style = window.getComputedStyle(element);
        return rect.width > 0 && rect.height > 0 && style.visibility !== "hidden" && style.display !== "none";
      });
      // A project/research/experience card is one stop. Don't revisit its nested heading and links.
      const targetCards = candidates.filter((element) => element.matches("article, .polished-project-card, .polished-research-card, .experience-timeline-main, .polished-contact-link"));
      return candidates.filter((element) => !targetCards.some((card) => card !== element && card.contains(element)));
    };

    const runTour = async () => {
      while (!cancelled) {
        const candidates = getCandidates();
        if (!candidates.length) {
          await wait(500);
          continue;
        }

        if (targetIndex.current < 0) {
          // Resume from the current viewport instead of replaying a stale checkpoint.
          const readingLine = Math.max(112, Math.min(window.innerHeight * 0.38, window.innerHeight - 120));
          const currentTarget = candidates.findIndex((element) => {
            const rect = element.getBoundingClientRect();
            return rect.bottom > readingLine && rect.top < window.innerHeight - 72;
          });
          targetIndex.current = currentTarget >= 0 ? currentTarget : 0;
        }

        if (targetIndex.current >= candidates.length) {
          if (cancelled) break;
          const currentIndex = tourRoutes.findIndex((route) => route.path === normalizePath(path));
          const nextRoute = tourRoutes[currentIndex + 1];
          if (!nextRoute) {
            setPlaying(false);
            break;
          }

          // Close each section deliberately: return to the top, find its real navigation
          // link, move the visual cursor to it, then activate that link rather than
          // changing routes behind the visitor's back.
          await scrollToPosition(0);
          if (cancelled) break;
          await wait(180);

          const expectedPath = normalizePath(BASE_PATH + nextRoute.path);
          const findVisibleNavLink = () => Array.from(document.querySelectorAll("a[href]")).find((link) => {
            if (link.closest("main") || link.closest(".guided-tour") ||
                link.closest('[aria-hidden="true"]') || link.closest("[inert]")) return false;
            const url = new URL(link.href, window.location.href);
            const style = window.getComputedStyle(link);
            return normalizePath(url.pathname) === expectedPath &&
              link.getClientRects().length > 0 &&
              style.display !== "none" && style.visibility === "visible";
          });

          let navLink = findVisibleNavLink();
          if (!navLink) {
            // Mobile layouts hide the desktop links behind a real menu-toggle button.
            const menuButton = document.querySelector(".mobile-nav-toggle");
            if (!menuButton || menuButton.getClientRects().length === 0) {
              setPlaying(false);
              break;
            }
            const menuRect = menuButton.getBoundingClientRect();
            const cursor = cursorRef.current;
            if (cursor) {
              const current = cursor.dataset.position?.split(",").map(Number) ||
                [window.innerWidth - 24, 100];
              const [startX, startY] = current;
              const x = menuRect.left + menuRect.width / 2;
              const y = menuRect.top + menuRect.height / 2;
              await new Promise((resolve) => {
                const duration = reduceMotion ? 0 : 420;
                const start = performance.now();
                const tick = (now) => {
                  if (cancelled) { resolve(); return; }
                  const progress = duration === 0 ? 1 : Math.min(1, (now - start) / duration);
                  const eased = easeInOutCubic(progress);
                  const nextX = startX + (x - startX) * eased;
                  const nextY = startY + (y - startY) * eased;
                  cursor.style.transform = `translate3d(${nextX}px, ${nextY}px, 0)`;
                  cursor.dataset.position = `${nextX},${nextY}`;
                  if (progress < 1) frameId = window.requestAnimationFrame(tick);
                  else resolve();
                };
                frameId = window.requestAnimationFrame(tick);
              });
            }
            if (cancelled) break;
            menuButton.click();
            await wait(reduceMotion ? 80 : 220);
            navLink = findVisibleNavLink();
          }

          if (!navLink) {
            // Fail safely if a route is not represented in the visible navigation.
            setPlaying(false);
            break;
          }

          const rect = navLink.getBoundingClientRect();
          const cursor = cursorRef.current;
          if (cursor) {
            const current = cursor.dataset.position?.split(",").map(Number) ||
              [window.innerWidth - 24, 100];
            const [startX, startY] = current;
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            await new Promise((resolve) => {
              const duration = reduceMotion ? 0 : 520;
              const start = performance.now();
              const tick = (now) => {
                if (cancelled) { resolve(); return; }
                const progress = duration === 0 ? 1 : Math.min(1, (now - start) / duration);
                const eased = easeInOutCubic(progress);
                const nextX = startX + (x - startX) * eased;
                const nextY = startY + (y - startY) * eased;
                cursor.style.transform = `translate3d(${nextX}px, ${nextY}px, 0)`;
                cursor.dataset.position = `${nextX},${nextY}`;
                if (progress < 1) frameId = window.requestAnimationFrame(tick);
                else resolve();
              };
              frameId = window.requestAnimationFrame(tick);
            });
          }
          if (cancelled) break;
          await wait(reduceMotion ? 80 : 220);
          if (cancelled) break;

          expectedTourRoute.current = normalizePath(nextRoute.path);
          // This is a genuine click on the matching navigation control.
          navLink.click();
          await wait(900);
          continue;
        }

        const target = candidates[targetIndex.current];
        let rect = target.getBoundingClientRect();
        const visible = rect.top >= 112 && rect.bottom <= window.innerHeight - 96;
        if (!visible) {
          const desiredTop = window.scrollY + rect.top - Math.max(120, (window.innerHeight - Math.min(rect.height, 300)) / 2);
          await scrollToPosition(desiredTop);
          if (cancelled) break;
          // Re-measure after scroll; never move toward a pre-scroll/stale rectangle.
          rect = target.getBoundingClientRect();
        }

        await moveCursorBeside(target);
        if (cancelled) break;
        highlighted?.classList.remove("guided-tour-highlight");
        highlighted = target;
        target.classList.add("guided-tour-highlight");
        await wait(reduceMotion ? 250 : 850);
        if (cancelled) break;

        // Commit progress only after this target has been read; pausing mid-scroll resumes it.
        await wait(250);
        targetIndex.current += 1;
      }
    };

    runTour();
    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(timeoutId);
      highlighted?.classList.remove("guided-tour-highlight", "guided-tour-reading");
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
    };
  }, [playing, path]);

  // Moving the visitor’s pointer is not an interruption. Pause only for deliberate navigation input.
  useEffect(() => {
    if (!playing) return undefined;
    const pauseForIntent = (event) => {
      if (Date.now() - startedAt.current < 1100) return;
      if (event.type === "keydown" && !["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)) return;
      targetIndex.current = -1;
      setPlaying(false);
    };
    window.addEventListener("wheel", pauseForIntent, { passive: true });
    window.addEventListener("touchstart", pauseForIntent, { passive: true });
    window.addEventListener("keydown", pauseForIntent);
    window.addEventListener("pointerdown", pauseForIntent, { passive: true });
    return () => {
      window.removeEventListener("wheel", pauseForIntent);
      window.removeEventListener("touchstart", pauseForIntent);
      window.removeEventListener("keydown", pauseForIntent);
      window.removeEventListener("pointerdown", pauseForIntent);
    };
  }, [playing]);

  const stopTour = () => setPlaying(false);

  return (
    <>
      {playing && (
        <>
          <div className="guided-tour-cursor" ref={cursorRef} aria-hidden="true">
            <span className="guided-tour-cursor-dot" />
            <span className="guided-tour-cursor-ring" />
          </div>
          <div className="guided-tour" aria-label="Automated portfolio walkthrough">
            <span className="guided-tour-hint" aria-live="polite">Guided read-through · scroll or interact to pause; continue whenever you like</span>
            <button className="guided-tour-stop" type="button" onClick={stopTour}>Stop walkthrough <span aria-hidden="true">×</span></button>
          </div>
        </>
      )}
      {!playing && (
        <div className="guided-tour guided-tour-idle">
          <button className="guided-tour-replay" type="button" onClick={() => { startedAt.current = Date.now(); targetIndex.current = -1; setPlaying(true); }}>Continue walkthrough <span aria-hidden="true">→</span></button>
        </div>
      )}
    </>
  );
}
