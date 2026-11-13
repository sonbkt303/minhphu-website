"use client";

import { useEffect } from "react";

const fmt = (n: number) => n.toLocaleString("vi-VN");

// Scroll-driven effects: progress bar, hero parallax, timeline fill, reveals, counters.
export default function Effects() {
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const bar = document.getElementById("progress")!;
    const bg = document.getElementById("heroBg")!;
    const tl = document.getElementById("tl")!;
    const fill = document.getElementById("tlFill")!;

    const onScroll = () => {
      const y = scrollY;
      const h = document.documentElement.scrollHeight - innerHeight;
      bar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
      if (!reduce && y < innerHeight) bg.style.transform = `translateY(${y * 0.25}px)`;
      const r = tl.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (innerHeight * 0.7 - r.top) / r.height));
      fill.style.height = p * 100 + "%";
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const count = (el: HTMLElement) => {
      const target = Number(el.dataset.count);
      if (reduce) return void (el.textContent = fmt(target));
      const t0 = performance.now();
      const step = (t: number) => {
        const k = Math.min(1, (t - t0) / 1800);
        el.textContent = fmt(Math.round(target * (1 - Math.pow(1 - k, 3))));
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("in");
          io.unobserve(e.target);
        }),
      { threshold: 0.15 },
    );
    document.querySelectorAll(".reveal, .head, .tl-item").forEach((el, i) => {
      if (el.classList.contains("card")) (el as HTMLElement).style.transitionDelay = (i % 4) * 0.1 + "s";
      io.observe(el);
    });

    const cio = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            count(e.target as HTMLElement);
            cio.unobserve(e.target);
          }
        }),
      { threshold: 0.5 },
    );
    document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => cio.observe(el));

    return () => {
      removeEventListener("scroll", onScroll);
      io.disconnect();
      cio.disconnect();
    };
  }, []);

  return null;
}
