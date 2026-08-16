"use client";

import { useCallback, useEffect, useState } from "react";
import { Cursor } from "../components/animations/Cursor";
import { PageLoader } from "../components/animations/PageLoader";
import { Nav } from "../components/sections/Nav";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { FeaturedWork } from "../components/sections/FeaturedWork";
import { OtherWork } from "../components/sections/OtherWork";
import { Experience } from "../components/sections/Experience";
import { Education } from "../components/sections/Education";
import { Skills } from "../components/sections/Skills";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/sections/Footer";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("home");
  const completeLoading = useCallback(() => setLoaded(true), []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = [...document.querySelectorAll<HTMLElement>("main [id]")];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); }),
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  return (
    <main className={loaded ? "site-ready" : "site-loading"}>
      <PageLoader onComplete={completeLoading} />
      <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
      <Cursor />
      <div className="cursor-glow" aria-hidden="true" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <Nav scrolled={scrolled} active={active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <About />
      <FeaturedWork />
      <OtherWork />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
