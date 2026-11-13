export function LogoMark({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="mph-gold" x1="8" y1="6" x2="40" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F3D48A" />
          <stop offset="1" stopColor="#C8982A" />
        </linearGradient>
        <linearGradient id="mph-navy" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1E4D7B" />
          <stop offset="1" stopColor="#0C1E35" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="13" fill="url(#mph-navy)" />
      <path d="M12 36V19l12 10 12-10v17" stroke="url(#mph-gold)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 13.5 24 8l7 5.5" stroke="url(#mph-gold)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 41h24" stroke="url(#mph-gold)" strokeWidth="2" strokeLinecap="round" opacity=".6" />
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
