"use client";

import { useEffect, useRef } from "react";
import { MagneticLink } from "../animations/MagneticLink";
import { Dial } from "../motifs/Dial";
import { hero, profile } from "../../data/content";

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = sectionRef.current;
        if (!el) return;
        // Cross-fades the hero out as the next section scrolls up to meet
        // it, so the handoff between sections reads as one continuous
        // motion rather than a hard cut. No blur here — a live blur filter
        // tied to scroll position looks janky on text, so this sticks to
        // opacity + a small drift/scale, which reads just as smooth.
        const progress = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.75)));
        el.style.opacity = `${1 - progress * 0.85}`;
        el.style.transform = `translate3d(0, ${progress * -40}px, 0) scale(${1 - progress * 0.04})`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <section className="hero section" id="home" ref={sectionRef}>
      <Dial className="hero-dial" />
      <p className="eyebrow hero-item hero-status">{hero.eyebrow}</p>
      <div className="hero-grid">
        <div>
          <h1 className="hero-item hero-name">
            {profile.firstName.toUpperCase()}<br /><em>{profile.lastName.toUpperCase()}</em>
          </h1>
          <p className="hero-copy hero-item hero-copy-motion">{hero.sub}</p>
          <div className="actions hero-item hero-actions">
            <MagneticLink className="button primary" href="#work">See the work <Arrow /></MagneticLink>
            <MagneticLink className="button" href="#contact">Get in touch <Arrow /></MagneticLink>
          </div>
        </div>
        <aside className="terminal hero-item hero-terminal" aria-label="Profile summary">
          <div className="terminal-head"><span /><span /><span /><b>profile.sh</b></div>
          <div className="terminal-body">
            {hero.terminal.map((row, i) => (
              <p key={row.k}>
                <b>$ {row.k}</b><br />
                {i === hero.terminal.length - 1 ? <mark>{row.v}</mark> : row.v}
              </p>
            ))}
          </div>
        </aside>
      </div>
      <div className="hero-footer hero-item hero-footer-motion">
        <span>SCROLL TO DISCOVER</span><span className="line" /><span>2026</span>
      </div>
    </section>
  );
}
