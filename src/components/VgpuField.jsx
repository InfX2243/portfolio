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
    let stop = () => {};

    async function boot() {
      if (!("gpu" in navigator) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      try {
        const { init, effect, frameLoop, surface, clock } = await import("vgpu");
        if (disposed || !ref.current) return;
        const gpu = await init();
        const target = surface(gpu, ref.current, { dpr: [1, 1.25] });
        const field = effect(gpu, shader, { set: { time: 0 } });
        const time = clock(gpu);
        stop = frameLoop(gpu, (frame) => {
          field.set({ time: time.time });
          frame.pass(target, field);
        });
      } catch {
        // WebGPU is an enhancement; the HTML/canvas layers remain the fallback.
      }
    }

    boot();
    return () => {
      disposed = true;
      try { stop(); } catch {}
    };
  }, []);

  return <canvas ref={ref} className="gpu-field" aria-hidden="true" />;
}
