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

export function GuidedTour({ path }) {
  const [playing, setPlaying] = useState(false);
  const startedAt = useRef(0);

  useEffect(() => {
    if (!playing) return undefined;

    const stopForManualControl = (event) => {
      if (Date.now() - startedAt.current < 1000) return;
      if (event.type === "keydown" && !["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)) return;
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

  useEffect(() => {
    if (!playing) return undefined;

    const timer = window.setInterval(() => {
      const scrollableHeight = document.documentElement.scrollHeight;
      const atBottom = window.scrollY + window.innerHeight >= scrollableHeight - 100;

      if (!atBottom) {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({
          top: Math.min(window.scrollY + window.innerHeight * 0.78, scrollableHeight),
          behavior: reduceMotion ? "auto" : "smooth",
        });
        return;
      }

      const currentIndex = tourRoutes.findIndex((route) => route.path === normalizePath(path));
      const nextRoute = tourRoutes[currentIndex + 1];
      if (!nextRoute) {
        setPlaying(false);
        return;
      }

      history.pushState({}, "", BASE_PATH + nextRoute.path);
      window.dispatchEvent(new PopStateEvent("popstate"));
    }, 5200);

    return () => window.clearInterval(timer);
  }, [playing, path]);

  const toggleTour = () => {
    if (playing) {
      setPlaying(false);
      return;
    }
    startedAt.current = Date.now();
    setPlaying(true);
  };

  return (
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
        {playing ? "Auto-advancing · move your cursor to take control" : "A hands-free portfolio walkthrough"}
      </span>
    </div>
  );
}
