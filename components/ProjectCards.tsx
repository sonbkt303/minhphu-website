"use client";
import { useCallback, useEffect, useRef, useState } from "react";

export type Project = { cover: string; title: string; kind: string; desc: string; tag: string; album: [string, string][] };

const img = (id: string, w: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

export default function ProjectCards({ projects }: { projects: Project[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const touch = useRef(0);
  const thumbs = useRef<HTMLDivElement>(null);
  const project = open === null ? null : projects[open];
  const len = project?.album.length ?? 0;

  const go = useCallback((d: number) => {
    if (!len) return;
    setDir(d);
    setIdx((i) => (i + d + len) % len);
  }, [len]);

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, go, close]);

  useEffect(() => {
    const box = thumbs.current;
    const on = box?.querySelector<HTMLElement>(".on");
    if (box && on) box.scrollTo({ left: on.offsetLeft - (box.clientWidth - on.offsetWidth) / 2, behavior: "smooth" });
  }, [idx, open]);

  const show = (p: number) => { setIdx(0); setDir(1); setOpen(p); };

  return (
    <>
      <div className="cards">
        {projects.map((p, i) => (
          <div className="tilt reveal" key={p.title}>
            <article className="pcard" role="button" tabIndex={0} aria-label={`Xem ảnh ${p.title}`}
              onClick={() => show(i)} onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && show(i)}>
              <img src={img(p.cover, 900)} alt={`${p.title} – ${p.kind}`} loading="lazy" />
              <span className="pcard-view">Xem {p.album.length} ảnh</span>
              <div className="pcard-body">
                <span className="chip">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.kind}</p>
                <small>{p.desc}</small>
              </div>
            </article>
          </div>
        ))}
      </div>

      {project && (
        <div className="lb" role="dialog" aria-modal="true" aria-label={project.title} onClick={close}
          onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
          onTouchEnd={(e) => { const dx = e.changedTouches[0].clientX - touch.current; if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1); }}>
          <div className="lb-bg" style={{ backgroundImage: `url(${img(project.album[idx][0], 200)})` }} />
          <div className="lb-top" onClick={(e) => e.stopPropagation()}>
            <div><b>{project.title}</b><span>{project.album[idx][1]}</span></div>
            <em>{idx + 1} / {len}</em>
            <button className="lb-x" onClick={close} aria-label="Đóng">✕</button>
          </div>
          <button className="lb-nav prev" aria-label="Ảnh trước" onClick={(e) => { e.stopPropagation(); go(-1); }}>‹</button>
          <button className="lb-nav next" aria-label="Ảnh sau" onClick={(e) => { e.stopPropagation(); go(1); }}>›</button>
          <div className="lb-stage" onClick={(e) => e.stopPropagation()}>
            <div className={`lb-slide ${dir > 0 ? "fwd" : "back"}`} key={`${open}-${idx}`}>
              <img src={img(project.album[idx][0], 1600)} alt={project.album[idx][1]} />
              <i className="lb-shine" />
            </div>
          </div>
          <div className="lb-thumbs" ref={thumbs} onClick={(e) => e.stopPropagation()}>
            {project.album.map(([id, cap], i) => (
              <button key={id} className={i === idx ? "on" : ""} onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }} aria-label={cap}>
                <img src={img(id, 200)} alt="" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
