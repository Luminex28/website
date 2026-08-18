"use client";

import { useEffect, useRef } from "react";

/**
 * The site's signature element: an instrument-panel dial, echoing both
 * sides of the brief — reading data (gauges, dashboards) and building
 * systems (the kind of hardware-adjacent aesthetic a Linux/Hyprland setup
 * lives in). The needle rotates gently with scroll position. Everything
 * else on the site stays quiet so this can be the one memorable visual.
 */
export function Dial({ className = "" }: { className?: string }) {
  const needleRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const progress = Math.min(1, window.scrollY / (window.innerHeight * 0.9));
        const angle = -42 + progress * 84; // sweeps within the gauge's arc
        if (needleRef.current) needleRef.current.style.transform = `rotate(${angle}deg)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); };
  }, []);

  // 28 ticks around the arc — a deliberate nod to a personal reference
  // number, inscribed again below as "Nº 28" the way an instrument or
  // watch face carries a reference/serial mark.
  const ticks = Array.from({ length: 28 }, (_, i) => i);
  // Round to 2dp — SSR/client libm implementations of sin/cos can differ in
  // their last bit, which otherwise trips a hydration mismatch on this SVG.
  const r = (n: number) => Math.round(n * 100) / 100;

  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" aria-hidden="true">
      <circle cx="200" cy="200" r="176" stroke="var(--line-strong)" strokeWidth="1" />
      <circle cx="200" cy="200" r="140" stroke="var(--line)" strokeWidth="1" />
      {ticks.map((i) => {
        const angle = -132 + i * (264 / (ticks.length - 1));
        const major = i % 7 === 0;
        const r1 = major ? 152 : 160;
        const r2 = 176;
        const rad = (angle * Math.PI) / 180;
        const x1 = r(200 + r1 * Math.sin(rad));
        const y1 = r(200 - r1 * Math.cos(rad));
        const x2 = r(200 + r2 * Math.sin(rad));
        const y2 = r(200 - r2 * Math.cos(rad));
        return (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={major ? "var(--muted)" : "var(--line-strong)"}
            strokeWidth={major ? 1.5 : 1}
          />
        );
      })}
      <g ref={needleRef} style={{ transformOrigin: "200px 200px", transform: "rotate(-42deg)", transition: "transform 0.15s linear" }}>
        <line x1="200" y1="200" x2="200" y2="70" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="200" cy="200" r="7" fill="var(--accent)" />
      </g>
      <text
        x="200" y="256" textAnchor="middle"
        fill="var(--muted)" fontSize="12" letterSpacing="3"
        fontFamily="var(--font-mono)"
      >
        Nº 28
      </text>
      <circle cx="200" cy="200" r="3" fill="var(--bg)" />
    </svg>
  );
}
