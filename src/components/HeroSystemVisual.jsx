export function HeroSystemVisual() {
  return (
    <div className="hero-system-visual" aria-hidden="true">
      <div className="hero-system-meta">
        <span>SYS / 01</span>
        <span>CONNECTED SYSTEMS</span>
      </div>
      <svg className="hero-system-svg" viewBox="0 0 560 560" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="system-stroke" x1="112" y1="95" x2="443" y2="467" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7DD3FC" stopOpacity=".82" />
            <stop offset="1" stopColor="#7DD3FC" stopOpacity=".12" />
          </linearGradient>
          <radialGradient id="system-core" cx="0" cy="0" r="1" gradientTransform="translate(280 280) rotate(90) scale(112)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7DD3FC" stopOpacity=".18" />
            <stop offset="1" stopColor="#7DD3FC" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="280" cy="280" r="224" stroke="#9BB8CF" strokeOpacity=".12" />
        <circle cx="280" cy="280" r="178" stroke="#9BB8CF" strokeOpacity=".16" strokeDasharray="2 9" />
        <circle cx="280" cy="280" r="126" stroke="#7DD3FC" strokeOpacity=".2" />
        <ellipse className="hero-orbit hero-orbit-one" cx="280" cy="280" rx="222" ry="104" transform="rotate(-34 280 280)" stroke="url(#system-stroke)" strokeWidth="1.2" />
        <ellipse className="hero-orbit hero-orbit-two" cx="280" cy="280" rx="212" ry="84" transform="rotate(48 280 280)" stroke="#7DD3FC" strokeOpacity=".34" strokeDasharray="4 7" />
        <path d="M104 205 194 232 280 280 376 204 454 239" stroke="url(#system-stroke)" strokeWidth="1.2" />
        <path d="M145 386 220 337 280 280 352 358 425 326" stroke="#7DD3FC" strokeOpacity=".42" strokeWidth="1.2" />
        <path d="M280 112V202M280 358V448M112 280H202M358 280H448" stroke="#7DD3FC" strokeOpacity=".24" />
        <circle cx="280" cy="280" r="112" fill="url(#system-core)" />
        <path d="m280 220 52 30v60l-52 30-52-30v-60l52-30Z" stroke="#7DD3FC" strokeOpacity=".7" strokeWidth="1.2" />
        <path d="m280 239 35 20v41l-35 20-35-20v-41l35-20Z" fill="#0A1520" stroke="#7DD3FC" strokeOpacity=".85" />
        <path d="m280 256 20 12v23l-20 12-20-12v-23l20-12Z" fill="#7DD3FC" fillOpacity=".14" stroke="#A5E7FF" strokeOpacity=".8" />
        <circle cx="104" cy="205" r="5" fill="#7DD3FC" />
        <circle cx="194" cy="232" r="3.5" fill="#D5F4FF" />
        <circle cx="376" cy="204" r="5" fill="#7DD3FC" />
        <circle cx="454" cy="239" r="3.5" fill="#D5F4FF" />
        <circle cx="145" cy="386" r="4" fill="#7DD3FC" />
        <circle cx="220" cy="337" r="3" fill="#D5F4FF" />
        <circle cx="352" cy="358" r="4.5" fill="#7DD3FC" />
        <circle cx="425" cy="326" r="3" fill="#D5F4FF" />
        <circle cx="280" cy="112" r="3" fill="#7DD3FC" />
        <circle cx="448" cy="280" r="3" fill="#7DD3FC" />
        <circle cx="280" cy="448" r="3" fill="#7DD3FC" />
        <circle cx="112" cy="280" r="3" fill="#7DD3FC" />
        <path d="M63 151h46m-46 0v10M450 407h46m0 0v-10M392 77h42m-42 0v10M115 457h42m-42 0v-10" stroke="#7DD3FC" strokeOpacity=".45" />
        <g fill="#91A2B3" fontFamily="monospace" fontSize="9" letterSpacing="1.5">
          <text x="62" y="139">INPUT</text>
          <text x="451" y="425">SIGNAL</text>
          <text x="392" y="65">PROCESS</text>
          <text x="115" y="475">ITERATE</text>
        </g>
      </svg>
      <div className="hero-system-footer">
        <span><i /> MODULAR BY DESIGN</span>
        <span>01 — 04</span>
      </div>
    </div>
  );
}
