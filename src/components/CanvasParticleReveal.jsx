import { useEffect, useRef } from "react";

export function CanvasParticleReveal({ className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = window.matchMedia("(pointer: coarse)");
    let frame = 0;
    let raf = 0;
    let visible = true;
    let pointer = { x: -9999, y: -9999 };
    let particles = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = coarse.matches ? 55 : 90;
      particles = Array.from({ length: count }, (_, i) => ({
        x: (i * 47) % Math.max(rect.width, 1),
        y: (i * 83) % Math.max(rect.height, 1),
        vx: 0,
        vy: 0,
        seed: i * 1.37,
      }));
    };

    const onPointer = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top };
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !reduceMotion.matches) tick();
    }, { threshold: 0.05 });
    observer.observe(canvas);

    const tick = () => {
      if (!visible || reduceMotion.matches) return;
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      for (const p of particles) {
        const dx = pointer.x - p.x;
        const dy = pointer.y - p.y;
        const dist = Math.hypot(dx, dy) || 1;
        const force = Math.max(0, 1 - dist / 180) * 0.16;
        p.vx += (dx / dist) * force;
        p.vy += (dy / dist) * force;
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.x += p.vx + Math.sin(frame * 0.004 + p.seed) * 0.08;
        p.y += p.vy + Math.cos(frame * 0.003 + p.seed) * 0.08;
        if (p.x < 0) p.x = rect.width;
        if (p.x > rect.width) p.x = 0;
        if (p.y < 0) p.y = rect.height;
        if (p.y > rect.height) p.y = 0;
        ctx.fillStyle = "rgba(125, 211, 252, 0.55)";
        ctx.fillRect(p.x, p.y, 1, 1);
      }
      frame += 1;
      raf = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", onPointer, { passive: true });
    if (!reduceMotion.matches) tick();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onPointer);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
