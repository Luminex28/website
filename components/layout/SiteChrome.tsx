"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { Cursor } from "../animations/Cursor";
import { PageLoader } from "../animations/PageLoader";
import { SiteNav } from "./SiteNav";
import { Footer } from "../sections/Footer";

export function SiteChrome({ children }: { children: ReactNode }) {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const completeLoading = useCallback(() => setLoaded(true), []);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={loaded ? "site-ready" : "site-loading"}>
      <PageLoader onComplete={completeLoading} />
      <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
      <Cursor />
      <div className="cursor-glow" aria-hidden="true" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <SiteNav open={menuOpen} setOpen={setMenuOpen} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
