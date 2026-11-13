"use client";
import { useCallback, useState } from "react";
import Lightbox, { img } from "./Lightbox";

export type Project = { cover: string; title: string; kind: string; desc: string; tag: string; album: [string, string][] };

export default function ProjectCards({ projects }: { projects: Project[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const project = open === null ? null : projects[open];

  const close = useCallback(() => setOpen(null), []);

  const show = (p: number) => setOpen(p);

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

      {project && <Lightbox key={open} title={project.title} album={project.album} onClose={close} />}
    </>
  );
}
