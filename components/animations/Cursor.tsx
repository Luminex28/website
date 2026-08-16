"use client";

import { useEffect } from "react";

export function Cursor() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const dot = document.querySelector<HTMLElement>(".cursor-dot");
    const ring = document.querySelector<HTMLElement>(".cursor-ring");
    if (!dot || !ring) return;
    let frame = 0;
    const move = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        dot.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
        ring.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
        document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
        document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
      });
    };
    const target = (event: PointerEvent) => Boolean((event.target as Element).closest("a, button, .skill-card"));
    const over = (event: PointerEvent) => document.body.classList.toggle("cursor-active", target(event));
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener("pointermove", move); window.removeEventListener("pointerover", over); document.body.classList.remove("cursor-active"); };
  }, []);
  return <><span className="cursor-dot" aria-hidden="true" /><span className="cursor-ring" aria-hidden="true" /></>;
}
