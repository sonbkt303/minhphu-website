export default function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span className={`brand ${tone}`}>
      <img
        className="brand-img"
        src={tone === "light" ? "/logo/ngang-trang.png" : "/logo/ngang-navy.png"}
        alt="Minh Phú Hưng – Đầu tư bất động sản"
        width={1000}
        height={212}
      />
    </span>
  );
}
