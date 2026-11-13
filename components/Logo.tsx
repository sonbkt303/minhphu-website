// Huy hiệu tròn cổ điển: Minh = mặt trời mọc, Phú = vòng lúa/nguyệt quế, Hưng = ba bậc đi lên.
const LEAVES: [number, number, number][] = [
  [17.6, 39.8, -22], [13.8, 37.6, -37], [10.6, 34.5, -52], [8.4, 30.6, -67], [7.2, 26.4, -82], [7.1, 21.9, -97],
  [30.4, 39.8, 22], [34.2, 37.6, 37], [37.4, 34.5, 52], [39.6, 30.6, 67], [40.8, 26.4, 82], [40.9, 21.9, 97],
];

export function LogoMark({ size = 48 }: { size?: number }) {
  return (
    <svg className="logo-mark" width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="mph-bg" cx="50%" cy="35%" r="75%">
          <stop stopColor="#1E4D7B" />
          <stop offset="1" stopColor="#081423" />
        </radialGradient>
        <linearGradient id="mph-gold" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE9A8" />
          <stop offset=".5" stopColor="#D9A93A" />
          <stop offset="1" stopColor="#9C7120" />
        </linearGradient>
        <linearGradient id="mph-step" x1="0" y1="22" x2="0" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#B9CBE0" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="23" fill="url(#mph-bg)" />
      <circle cx="24" cy="24" r="21.6" stroke="url(#mph-gold)" strokeWidth=".9" />
      <circle cx="24" cy="24" r="19.8" stroke="#E4B84A" strokeWidth=".4" opacity=".6" />
      <g fill="url(#mph-gold)">
        {LEAVES.map(([x, y, r], i) => (
          <ellipse key={i} cx={x} cy={y} rx="3.1" ry="1.4" transform={`rotate(${r} ${x} ${y})`} />
        ))}
      </g>
      <g className="logo-rays" stroke="#E4B84A" strokeWidth="1" strokeLinecap="round" opacity=".8">
        <path d="M24 10v2.6M16 13.2l1.8 1.8M32 13.2l-1.8 1.8M12.5 21h2.6M32.9 21h2.6" />
      </g>
      <circle className="logo-sun" cx="24" cy="21" r="6.2" fill="url(#mph-gold)" />
      <circle cx="24" cy="21" r="3.2" stroke="#081423" strokeWidth=".6" opacity=".55" />
      <circle cx="24" cy="21" r="1.2" fill="#081423" opacity=".55" />
      <path d="M15 36V31h5.2v5zM21 36V27h5.2v9zM27 36V23h5.2v13z" fill="url(#mph-step)" />
      <path d="M13 37h22" stroke="url(#mph-gold)" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span className={`brand ${tone}`}>
      <LogoMark />
      <span className="brand-text">
        <b>Minh Phú Hưng</b>
        <small>Minh bạch · Phú quý · Hưng thịnh</small>
      </span>
    </span>
  );
}
