"use client";

import { useEffect } from "react";

/**
 * Tracks pointer position only to drive the faint ambient light glow
 * (`.cursor-glow` in globals.css) that follows the cursor at low opacity —
 * a subtle depth cue, not a literal cursor replacement. No dot/ring visuals.
 */
export function Cursor() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let frame = 0;
    const move = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
        document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
      });
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener("pointermove", move); };
  }, []);
  return null;
}
