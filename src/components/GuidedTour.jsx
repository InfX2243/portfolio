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
  const [playing, setPlaying] = useState(false);
  const startedAt = useRef(0);
  const cursorRef = useRef(null);
  const targetIndex = useRef(0);

  // A single cancellable animation loop avoids overlapping native smooth-scroll requests.
  useEffect(() => {
    if (!playing) return undefined;

    let cancelled = false;
    let frameId = 0;
    let timeoutId = 0;
    let highlighted = null;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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
      await animateValue(start, Math.max(0, Math.min(top, maxTop)), 1750, (value) => {
        window.scrollTo(0, value);
      });
    };

    const moveCursorTo = async (element) => {
      const rect = element.getBoundingClientRect();
      const x = Math.min(window.innerWidth - 22, Math.max(18, rect.left + Math.min(rect.width * 0.72, rect.width - 12)));
      const y = Math.min(window.innerHeight - 22, Math.max(18, rect.top + Math.min(rect.height * 0.5, rect.height - 12)));
      const cursor = cursorRef.current;
      if (!cursor) return;
      const current = cursor.dataset.position?.split(",").map(Number) || [window.innerWidth * 0.72, window.innerHeight * 0.55];
      const [startX, startY] = current;
      await new Promise((resolve) => {
        const duration = reduceMotion ? 0 : 680;
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

    const runTour = async () => {
      while (!cancelled) {
        const candidates = Array.from(document.querySelectorAll(TARGET_SELECTOR)).filter((element) => {
          if (element.closest(".guided-tour") || element.closest("[aria-hidden='true']")) return false;
          const rect = element.getBoundingClientRect();
          const style = window.getComputedStyle(element);
          return rect.width > 0 && rect.height > 0 && style.visibility !== "hidden" && style.display !== "none";
        });

        if (!candidates.length) {
          await wait(1200);
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
          await wait(900);
          continue;
        }

        const target = candidates[targetIndex.current];
        targetIndex.current += 1;
        const rect = target.getBoundingClientRect();
        const visible = rect.top >= 92 && rect.bottom <= window.innerHeight - 90;
        if (!visible) {
          const desiredTop = window.scrollY + rect.top - Math.max(110, (window.innerHeight - Math.min(rect.height, 360)) / 2);
          await scrollToPosition(desiredTop);
          if (cancelled) break;
        }

        await moveCursorTo(target);
        if (cancelled) break;
        highlighted?.classList.remove("guided-tour-highlight");
        highlighted = target;
        target.classList.add("guided-tour-highlight");
        await wait(reduceMotion ? 350 : 1050);
        if (cancelled) break;

        // Give the viewer a brief pause between highlighted items before continuing down the page.
        const freshRect = target.getBoundingClientRect();
        if (freshRect.bottom > window.innerHeight - 120) {
          await scrollToPosition(window.scrollY + window.innerHeight * 0.54);
        } else {
          await wait(450);
        }
      }
    };

    runTour();
    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(timeoutId);
      highlighted?.classList.remove("guided-tour-highlight");
    };
  }, [playing, path]);

  // Any real viewer input immediately returns control. The decorative cursor never emits pointer events.
  useEffect(() => {
    if (!playing) return undefined;
    const stopForManualControl = () => {
      if (Date.now() - startedAt.current < 900) return;
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

  const toggleTour = () => {
    if (playing) {
      setPlaying(false);
      return;
    }
    startedAt.current = Date.now();
    targetIndex.current = 0;
    setPlaying(true);
  };

  return (
    <>
      {playing && (
        <div className="guided-tour-cursor" ref={cursorRef} aria-hidden="true">
          <span className="guided-tour-cursor-dot" />
          <span className="guided-tour-cursor-ring" />
        </div>
      )}
      <div className="guided-tour" aria-label="Portfolio guided tour">
        <button
          className={playing ? "guided-tour-button is-playing" : "guided-tour-button"}
          type="button"
          onClick={toggleTour}
          aria-pressed={playing}
          title={playing ? "Stop guided tour and take control" : "Automatically tour the portfolio; move your cursor or use any control to stop"}
        >
          <span className="guided-tour-indicator" aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>
          <span>{playing ? "Stop tour" : "Guided tour"}</span>
        </button>
        <span className="guided-tour-hint" aria-live="polite">
          {playing ? "Auto-browsing · move your cursor to take control" : "A hands-free portfolio walkthrough"}
        </span>
      </div>
    </>
  );
}
