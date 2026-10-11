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
    targetIndex.current = 0;

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

      // Park outside the target's content box. Prefer its right edge; use the left gutter when needed.
      const rightSpace = window.innerWidth - rect.right;
      const leftSpace = rect.left;
      const hasRightGutter = rightSpace >= 34;
      const hasLeftGutter = leftSpace >= 34;
      const x = hasRightGutter
        ? rect.right + 18
        : hasLeftGutter
          ? rect.left - 18
          : Math.min(window.innerWidth - 18, Math.max(18, rect.left + 20));
      // Wide targets may have no horizontal gutter, so park just above/below rather than over text.
      const y = hasRightGutter || hasLeftGutter
        ? Math.min(window.innerHeight - 24, Math.max(24, rect.top + Math.min(rect.height / 2, 42)))
        : rect.top > 48
          ? rect.top - 18
          : Math.min(window.innerHeight - 24, rect.bottom + 18);
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

    const getCandidates = () => Array.from(document.querySelectorAll(TARGET_SELECTOR)).filter((element) => {
      if (element.closest(".guided-tour") || element.closest("[aria-hidden='true']")) return false;
      const rect = element.getBoundingClientRect();
      const style = window.getComputedStyle(element);
      return rect.width > 0 && rect.height > 0 && style.visibility !== "hidden" && style.display !== "none";
    });

    const runTour = async () => {
      while (!cancelled) {
        const candidates = getCandidates();
        if (!candidates.length) {
          await wait(500);
          continue;
        }

        if (targetIndex.current >= candidates.length) {
          await scrollToPosition(document.documentElement.scrollHeight);
          if (cancelled) break;
          const currentIndex = tourRoutes.findIndex((route) => route.path === normalizePath(path));
          const nextRoute = tourRoutes[currentIndex + 1];
          if (!nextRoute) {
            setPlaying(false);
            break;
          }
          history.pushState({}, "", BASE_PATH + nextRoute.path);
          window.dispatchEvent(new PopStateEvent("popstate"));
          // Route change remounts the tour effect and resets the target index for the new page.
          await wait(900);
          continue;
        }

        const target = candidates[targetIndex.current];
        targetIndex.current += 1;
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

        const freshRect = target.getBoundingClientRect();
        if (freshRect.bottom > window.innerHeight - 118) {
          await scrollToPosition(window.scrollY + window.innerHeight * 0.48);
        } else {
          await wait(300);
        }
      }
    };

    runTour();
    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(timeoutId);
      highlighted?.classList.remove("guided-tour-highlight");
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
    };
  }, [playing, path]);

  // Any real user input immediately hands control back; the visual cursor never captures input.
  useEffect(() => {
    if (!playing) return undefined;
    const stopForManualControl = () => {
      if (Date.now() - startedAt.current < 1100) return;
      setPlaying(false);
    };
    window.addEventListener("pointermove", stopForManualControl, { passive: true });
    window.addEventListener("wheel", stopForManualControl, { passive: true });
    window.addEventListener("touchstart", stopForManualControl, { passive: true });
    window.addEventListener("keydown", stopForManualControl);
    return () => {
      window.removeEventListener("pointermove", stopForManualControl);
      window.removeEventListener("wheel", stopForManualControl);
      window.removeEventListener("touchstart", stopForManualControl);
      window.removeEventListener("keydown", stopForManualControl);
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
            <span className="guided-tour-hint" aria-live="polite">Portfolio walkthrough · move, scroll, or press any key to take control</span>
            <button className="guided-tour-stop" type="button" onClick={stopTour}>Stop walkthrough <span aria-hidden="true">×</span></button>
          </div>
        </>
      )}
    </>
  );
}
