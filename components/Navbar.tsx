"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo";

const links = [
  ["#about", "Giới thiệu"],
  ["#philosophy", "Triết lý"],
  ["#projects", "Dự án"],
  ["#why", "Năng lực"],
  ["#timeline", "Tiến độ"],
  ["#news", "Tin tức"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 40);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <a href="#home" aria-label="Minh Phú Hưng Land"><Logo tone={scrolled || open ? "dark" : "light"} /></a>
      <button className="burger" aria-label="Mở menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>
      <nav className={open ? "open" : ""}>
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a href="#contact" className="btn btn-sm" onClick={() => setOpen(false)}>Nhận tư vấn</a>
      </nav>
    </header>
  );
}
