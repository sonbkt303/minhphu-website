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

    const cleanups: (() => void)[] = [];
    const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;

    // Gold sparkles drifting up in the hero
    const cv = document.getElementById("sparkles") as HTMLCanvasElement | null;
    if (cv && !reduce) {
      const ctx = cv.getContext("2d")!;
      const dpr = Math.min(devicePixelRatio, 2);
      let w = 0, h = 0, raf = 0;
      const resize = () => {
        w = cv.clientWidth; h = cv.clientHeight;
        cv.width = w * dpr; cv.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      };
      resize();
      const mk = () => ({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.8 + 0.4, v: Math.random() * 0.35 + 0.1, p: Math.random() * 6.28, s: Math.random() * 0.03 + 0.01 });
      const dots = Array.from({ length: 70 }, mk);
      const draw = () => {
        ctx.clearRect(0, 0, w, h);
        for (const d of dots) {
          d.y -= d.v; d.p += d.s; d.x += Math.sin(d.p) * 0.25;
          if (d.y < -10) { d.y = h + 10; d.x = Math.random() * w; }
          const a = 0.35 + 0.65 * Math.abs(Math.sin(d.p));
          const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r * 5);
          g.addColorStop(0, `rgba(255,226,140,${a})`);
          g.addColorStop(1, "rgba(255,226,140,0)");
          ctx.fillStyle = g;
          ctx.beginPath(); ctx.arc(d.x, d.y, d.r * 5, 0, 6.28); ctx.fill();
        }
        raf = requestAnimationFrame(draw);
      };
      draw();
      addEventListener("resize", resize);
      cleanups.push(() => { cancelAnimationFrame(raf); removeEventListener("resize", resize); });
    }

    // Parallax on [data-speed] images
    const par = Array.from(document.querySelectorAll<HTMLElement>("[data-speed]"));
    const onPar = () => {
      if (reduce) return;
      for (const el of par) {
        const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > innerHeight) continue;
        const c = r.top + r.height / 2 - innerHeight / 2;
        el.style.translate = `0 ${c * Number(el.dataset.speed) * -1}px`;
      }
    };
    addEventListener("scroll", onPar, { passive: true });
    onPar();
    cleanups.push(() => removeEventListener("scroll", onPar));

    if (fine && !reduce) {
      // Cursor glow
      const glow = document.getElementById("glow");
      let gx = innerWidth / 2, gy = innerHeight / 2, tx = gx, ty = gy, gr = 0;
      const mm = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; glow?.classList.add("on"); };
      const loop = () => {
        gx += (tx - gx) * 0.12; gy += (ty - gy) * 0.12;
        if (glow) glow.style.transform = `translate(${gx - 200}px,${gy - 200}px)`;
        gr = requestAnimationFrame(loop);
      };
      loop();
      addEventListener("mousemove", mm);
      cleanups.push(() => { cancelAnimationFrame(gr); removeEventListener("mousemove", mm); });

      // 3D tilt with glare on project cards
      document.querySelectorAll<HTMLElement>(".tilt").forEach((el) => {
        const card = el.firstElementChild as HTMLElement;
        const move = (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
          card.style.setProperty("--ry", `${(px - 0.5) * 12}deg`);
          card.style.setProperty("--rx", `${(0.5 - py) * 12}deg`);
          card.style.setProperty("--mx", `${px * 100}%`);
          card.style.setProperty("--my", `${py * 100}%`);
        };
        const leave = () => { card.style.setProperty("--ry", "0deg"); card.style.setProperty("--rx", "0deg"); };
        el.addEventListener("mousemove", move);
        el.addEventListener("mouseleave", leave);
      });

      // Magnetic buttons
      document.querySelectorAll<HTMLElement>(".btn").forEach((b) => {
        b.addEventListener("mousemove", (e) => {
          const r = b.getBoundingClientRect();
          b.style.setProperty("--tx", `${(e.clientX - r.left - r.width / 2) * 0.25}px`);
          b.style.setProperty("--ty", `${(e.clientY - r.top - r.height / 2) * 0.35}px`);
        });
        b.addEventListener("mouseleave", () => { b.style.setProperty("--tx", "0px"); b.style.setProperty("--ty", "0px"); });
      });
    }

    return () => {
      cleanups.forEach((f) => f());
      removeEventListener("scroll", onScroll);
      io.disconnect();
      cio.disconnect();
    };
  }, []);

  return null;
}
