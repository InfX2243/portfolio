import{r as v,j,_ as k}from"./index-DmdujxMK.js";const O=`
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
`;function D(){const t=v.useRef(null);return v.useEffect(()=>{let o=!1,s=!1,n=null,e=null,i=null;const m=window.matchMedia("(prefers-reduced-motion: reduce)"),p=window.matchMedia("(max-width: 700px)"),h=window.matchMedia("(pointer: coarse)"),a=navigator.connection||navigator.mozConnection||navigator.webkitConnection,w=navigator.hardwareConcurrency>0&&navigator.hardwareConcurrency<=4||!!(a!=null&&a.saveData);if(!("gpu"in navigator)||m.matches||p.matches||h.matches||w||!t.current)return;const u=()=>{if(n){try{n()}catch{}n=null}},f=()=>{o||!e||n||!s||document.hidden||(n=e.frameLoop(e.gpu,r=>{e.field.set({time:e.time.time}),r.pass(e.target,e.field)}))},d=()=>{document.hidden?u():f()};document.addEventListener("visibilitychange",d),"IntersectionObserver"in window?(i=new IntersectionObserver(r=>{s=r.some(l=>l.isIntersecting),s?f():u()},{threshold:.01}),i.observe(t.current)):s=!0;async function g(){try{const{init:r,effect:l,frameLoop:b,surface:x,clock:y}=await k(async()=>{const{init:C,effect:V,frameLoop:I,surface:M,clock:P}=await import("./index-DbvoFdgk.js");return{init:C,effect:V,frameLoop:I,surface:M,clock:P}},[]);if(o||!t.current)return;const c=await r();if(o)return;const _=x(c,t.current,{dpr:[1,1.25]}),E=l(c,O,{set:{time:0}}),L=y(c);e={gpu:c,target:_,field:E,time:L,frameLoop:b},f()}catch{}}return g(),()=>{o=!0,u(),i==null||i.disconnect(),document.removeEventListener("visibilitychange",d)}},[]),j.jsx("canvas",{ref:t,className:"gpu-field","aria-hidden":"true"})}export{D as VgpuField};
