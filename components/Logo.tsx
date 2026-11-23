import Image from "next/image";

/** Raster từ PDF in chính thức (~300 DPI), nền trong suốt. */
const MARK = { src: "/logo/minh-phu-hung-mark.png", w: 2150, h: 1364 };
const FULL = { src: "/logo/minh-phu-hung-hd.png", w: 2288, h: 2200 };

export default function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const { src, w, h } = tone === "light" ? MARK : FULL;

  return (
    <span className={`brand ${tone}`}>
      <Image
        className="brand-img"
        src={src}
        alt="Minh Phú Hưng – Đầu tư bất động sản"
        width={w}
        height={h}
        sizes="(max-width: 820px) 140px, 220px"
        quality={100}
        priority
      />
    </span>
  );
}