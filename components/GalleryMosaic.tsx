"use client";
import { useCallback, useState } from "react";
import Lightbox, { img } from "./Lightbox";

export default function GalleryMosaic({ items }: { items: [string, string, string][] }) {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const album = items.map(([id, cap]) => [id, cap] as [string, string]);

  return (
    <>
      <div className="mosaic">
        {items.map(([id, cap, cls], i) => (
          <figure className={`reveal ${cls}`} key={cls} role="button" tabIndex={0} aria-label={`Phóng to ${cap}`}
            onClick={() => setOpen(i)} onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setOpen(i)}>
            <img src={img(id, 900)} alt={cap} loading="lazy" />
            <figcaption>{cap}</figcaption>
            <span className="zoom-ico" aria-hidden>⤢</span>
          </figure>
        ))}
      </div>
      {open !== null && <Lightbox title="Không gian sống" album={album} start={open} onClose={close} />}
    </>
  );
}
