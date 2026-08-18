"use client";

import { useEffect, useRef } from "react";

// Depth layers stacked along the Z axis to fake a 3D extrusion out of a
// flat numeral — each one a fainter copy sitting slightly further back.
const LAYERS = Array.from({ length: 10 }, (_, i) => i);

/**
 * A fixed, full-viewport watermark: the personal reference number "28"
 * (also inscribed on the Dial) rendered as an extruded outline that spins
 * slowly on its vertical axis as the page scrolls. Purely decorative
 * background texture — kept faint and behind all content, on the
 * homepage only.
 */
export function PersonalNumber() {
  const rotorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
        // One full left-to-right turn over the height of the page.
        const angle = progress * 360;
        if (rotorRef.current) rotorRef.current.style.transform = `rotateY(${angle}deg)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="personal-number-stage" aria-hidden="true">
      <div className="personal-number" ref={rotorRef}>
        {LAYERS.map((i) => (
          <span
            key={i}
            className="personal-number-layer"
            style={{
              transform: `translate(-50%, -50%) translateZ(${-i * 4}px)`,
              opacity: 1 - i * 0.08,
            }}
          >
            28
          </span>
        ))}
      </div>
    </div>
  );
}
