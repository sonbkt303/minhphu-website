"use client";
import { useCallback, useEffect, useRef, useState } from "react";

export const img = (id: string, w: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

export default function Lightbox({ title, album, start = 0, onClose }: { title: string; album: [string, string][]; start?: number; onClose: () => void }) {
  const [idx, setIdx] = useState(start);
  const [dir, setDir] = useState(1);
  const touch = useRef(0);
  const thumbs = useRef<HTMLDivElement>(null);
  const len = album.length;

  const go = useCallback((d: number) => {
    setDir(d);
    setIdx((i) => (i + d + len) % len);
  }, [len]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [go, onClose]);

  useEffect(() => {
    const box = thumbs.current;
    const on = box?.querySelector<HTMLElement>(".on");
    if (box && on) box.scrollTo({ left: on.offsetLeft - (box.clientWidth - on.offsetWidth) / 2, behavior: "smooth" });
  }, [idx]);

  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={title} onClick={onClose}
      onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
      onTouchEnd={(e) => { const dx = e.changedTouches[0].clientX - touch.current; if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1); }}>
      <div className="lb-bg" style={{ backgroundImage: `url(${img(album[idx][0], 200)})` }} />
      <div className="lb-top" onClick={(e) => e.stopPropagation()}>
        <div><b>{title}</b><span>{album[idx][1]}</span></div>
        <em>{idx + 1} / {len}</em>
        <button className="lb-x" onClick={onClose} aria-label="Đóng">✕</button>
      </div>
      <button className="lb-nav prev" aria-label="Ảnh trước" onClick={(e) => { e.stopPropagation(); go(-1); }}>‹</button>
      <button className="lb-nav next" aria-label="Ảnh sau" onClick={(e) => { e.stopPropagation(); go(1); }}>›</button>
      <div className="lb-stage" onClick={(e) => e.stopPropagation()}>
        <div className={`lb-slide ${dir > 0 ? "fwd" : "back"}`} key={idx}>
          <img src={img(album[idx][0], 1600)} alt={album[idx][1]} />
          <i className="lb-shine" />
        </div>
      </div>
      <div className="lb-thumbs" ref={thumbs} onClick={(e) => e.stopPropagation()}>
        {album.map(([id, cap], i) => (
          <button key={id} className={i === idx ? "on" : ""} onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }} aria-label={cap}>
            <img src={img(id, 200)} alt="" />
          </button>
        ))}
      </div>
    </div>
  );
}
