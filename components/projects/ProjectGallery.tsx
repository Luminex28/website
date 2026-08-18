"use client";

import { useState } from "react";

export type GalleryImage = { src: string; caption?: string };

export function ProjectGallery({ images }: { images: GalleryImage[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (images.length === 0) {
    return (
      <div className="gallery-empty">
        <p>Screenshots aren&apos;t up yet — this section is ready to receive them as the project progresses.</p>
      </div>
    );
  }

  return (
    <>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <button key={img.src} className={`gallery-item ${i === 0 ? "gallery-item-primary" : ""}`} onClick={() => setLightbox(i)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.src} alt={img.caption ?? ""} loading="lazy" />
            {img.caption && <span className="gallery-caption">{img.caption}</span>}
          </button>
        ))}
      </div>
      {lightbox !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setLightbox(null)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={images[lightbox].src} alt={images[lightbox].caption ?? ""} />
          <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">✕</button>
        </div>
      )}
    </>
  );
}
