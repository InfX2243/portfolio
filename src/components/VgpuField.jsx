import { useEffect, useRef } from "react";

const shader = `
struct Uniforms { time: f32 }
@group(0) @binding(0) var<uniform> u: Uniforms;

@vertex
fn vs(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {
  var p = array<vec2f, 3>(
    vec2f(-1.0, -3.0),
    vec2f( 3.0,  1.0),
    vec2f(-1.0,  1.0)
  );
  return vec4f(p[i], 0.0, 1.0);
}

@fragment
fn fs(@builtin(position) pos: vec4f) -> @location(0) vec4f {
  let uv = pos.xy / vec2f(1280.0, 720.0);
  let wave = sin((uv.x + u.time * 0.025) * 9.0) * 0.025;
  let line = smoothstep(0.004, 0.0, abs(fract((uv.y + wave) * 18.0) - 0.5));
  return vec4f(0.15 * line, 0.42 * line, 0.65 * line, 0.18);
}
`;

export function VgpuField() {
  const ref = useRef(null);

  useEffect(() => {
    let disposed = false;
    let isVisible = false;
    let stopLoop = null;
    let resources = null;
    let observer = null;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const smallViewport = window.matchMedia("(max-width: 700px)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const lowPower = (navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 4) ||
      Boolean(connection?.saveData);

    // The SVG hero is the complete visual fallback. GPU work is desktop-only enhancement.
    if (
      !("gpu" in navigator) ||
      reducedMotion.matches ||
      smallViewport.matches ||
      coarsePointer.matches ||
      lowPower ||
      !ref.current
    ) {
      return undefined;
    }

    const pause = () => {
      if (!stopLoop) return;
      try { stopLoop(); } catch {}
      stopLoop = null;
    };

    const start = () => {
      if (disposed || !resources || stopLoop || !isVisible || document.hidden) return;
      stopLoop = resources.frameLoop(resources.gpu, (frame) => {
        resources.field.set({ time: resources.time.time });
        frame.pass(resources.target, resources.field);
      });
    };

    const onVisibilityChange = () => {
      if (document.hidden) pause();
      else start();
    };

    document.addEventListener("visibilitychange", onVisibilityChange);

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver((entries) => {
        isVisible = entries.some((entry) => entry.isIntersecting);
        if (isVisible) start();
        else pause();
      }, { threshold: 0.01 });
      observer.observe(ref.current);
    } else {
      isVisible = true;
    }

    async function boot() {
      try {
        const { init, effect, frameLoop, surface, clock } = await import("vgpu");
        if (disposed || !ref.current) return;
        const gpu = await init();
        if (disposed) return;
        const target = surface(gpu, ref.current, { dpr: [1, 1.25] });
        const field = effect(gpu, shader, { set: { time: 0 } });
        const time = clock(gpu);
        resources = { gpu, target, field, time, frameLoop };
        start();
      } catch {
        // WebGPU is an enhancement; the HTML/SVG layers remain the fallback.
      }
    }

    boot();
    return () => {
      disposed = true;
      pause();
      observer?.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return <canvas ref={ref} className="gpu-field" aria-hidden="true" />;
}
