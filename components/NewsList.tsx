"use client";
import { useEffect, useState } from "react";
import { img } from "./Lightbox";

export type Article = {
  img: string;
  tag: string;
  title: string;
  excerpt: string;
  read: string;
  lead: string;
  body: string[];
  points: string[];
};

export default function NewsList({ items }: { items: Article[] }) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const a = open !== null ? items[open] : null;

  return (
    <>
      <div className="cards">
        {items.map((n, i) => (
          <article className="ncard reveal" key={n.title} role="button" tabIndex={0}
            onClick={() => setOpen(i)} onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setOpen(i)}>
            <img src={img(n.img, 800)} alt={n.title} loading="lazy" />
            <div><span className="chip">{n.tag}</span><h3>{n.title}</h3><p>{n.excerpt}</p><span className="more">Đọc bài viết →</span></div>
          </article>
        ))}
      </div>
      {a && open !== null && (
        <div className="nw" onClick={() => setOpen(null)}>
          <div className="nw-box" key={open} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={a.title}>
            <button className="nw-x" onClick={() => setOpen(null)} aria-label="Đóng">✕</button>
            <div className="nw-main">
              <div className="nw-cover"><img src={img(a.img, 1400)} alt={a.title} /></div>
              <div className="nw-text">
                <div className="nw-meta"><span className="chip">{a.tag}</span><span>Minh Phú Hưng Land</span><span>· {a.read} đọc</span></div>
                <h2>{a.title}</h2>
                <p className="nw-lead">{a.lead}</p>
                {a.body.map((p, k) => <p key={k}>{p}</p>)}
                <h4>Điểm nhấn</h4>
                <ul>{a.points.map((p) => <li key={p}>{p}</li>)}</ul>
                <a href="#contact" className="btn" onClick={() => setOpen(null)}>Nhận tư vấn chi tiết</a>
              </div>
            </div>
            <aside className="nw-side">
              <h4>Tin liên quan</h4>
              {items.map((n, i) => i !== open && (
                <button key={n.title} className="nw-rel" onClick={() => setOpen(i)}>
                  <img src={img(n.img, 300)} alt="" />
                  <span><em>{n.tag}</em>{n.title}</span>
                </button>
              ))}
            </aside>
          </div>
        </div>
      )}
    </>
  );
}
