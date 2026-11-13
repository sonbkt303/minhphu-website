export function LogoMark({ size = 44 }: { size?: number }) {
  return (
    <svg className="logo-mark" width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="mph-bg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1E4D7B" />
          <stop offset="1" stopColor="#0A1829" />
        </linearGradient>
        <linearGradient id="mph-sun" x1="24" y1="8" x2="24" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE9A8" />
          <stop offset="1" stopColor="#C8982A" />
        </linearGradient>
        <linearGradient id="mph-tower" x1="0" y1="14" x2="0" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#B9CBE0" />
        </linearGradient>
        <clipPath id="mph-clip"><rect width="48" height="48" rx="13" /></clipPath>
      </defs>
      <rect width="48" height="48" rx="13" fill="url(#mph-bg)" />
      <g clipPath="url(#mph-clip)">
        <g className="logo-rays" stroke="#E4B84A" strokeWidth="1.4" strokeLinecap="round" opacity=".55">
          <path d="M24 3v4M10 8l2.6 3M38 8l-2.6 3M3 21h4M41 21h4" />
        </g>
        <circle className="logo-sun" cx="24" cy="21" r="10.5" fill="url(#mph-sun)" />
        <path d="M9 40V30a1.5 1.5 0 0 1 1.5-1.5h5A1.5 1.5 0 0 1 17 30v10z" fill="url(#mph-tower)" />
        <path d="M19.5 40V23a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5v17z" fill="url(#mph-tower)" />
        <path d="M31 40V16.5A1.5 1.5 0 0 1 32.5 15h5a1.5 1.5 0 0 1 1.5 1.5V40z" fill="url(#mph-tower)" />
        <path d="M22.5 26h3M22.5 30h3M22.5 34h3M34 20h1.5M34 24h1.5M34 28h1.5M34 32h1.5" stroke="#1E4D7B" strokeWidth="1.2" strokeLinecap="round" opacity=".55" />
        <path d="M6 41h36" stroke="#E4B84A" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export default function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span className={`brand ${tone}`}>
      <LogoMark />
      <span className="brand-text">
        <b>Minh Phú Hưng</b>
        <small>Land · Real Estate</small>
      </span>
    </span>
  );
}
