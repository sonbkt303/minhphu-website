/** Biểu tượng (không kèm chữ) — cắt từ PDF chính thức, nền trong suốt. */
const EMBLEM = { src: "/logo/minh-phu-hung-emblem.png", w: 1756, h: 1045 };

export default function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const alt = tone === "light" ? "Minh Phú Hưng – Đầu tư bất động sản" : "";

  return (
    <span className={`brand ${tone} brand-row`}>
      <span className="brand-icon-wrap">
        {/* img thuần — tránh wrapper Next/Image giới hạn khung gây cắt logo */}
        <img
          className="brand-icon"
          src={EMBLEM.src}
          width={EMBLEM.w}
          height={EMBLEM.h}
          alt={alt}
          decoding="async"
          fetchPriority="high"
        />
      </span>
      <span className="brand-word">Minh Phú Hưng</span>
    </span>
  );
}