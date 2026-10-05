import { useRef } from "react";

export function SpotlightCard({ children, className = "" }) {
  const ref = useRef(null);

  const move = (event) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${event.clientX - r.left}px`);
    el.style.setProperty("--spot-y", `${event.clientY - r.top}px`);
  };

  return <article ref={ref} onPointerMove={move} className={`spot-card ${className}`}>{children}</article>;
}
