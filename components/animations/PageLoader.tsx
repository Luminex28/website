"use client";

import { useEffect, useState } from "react";
import { profile } from "../../data/content";

export function PageLoader({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const alreadySeen = window.sessionStorage.getItem("swetank-loader-seen");
    if (alreadySeen || reducedMotion) {
      onComplete();
      return;
    }
    setVisible(true);
    const done = window.setTimeout(() => {
      window.sessionStorage.setItem("swetank-loader-seen", "true");
      setVisible(false);
      window.setTimeout(onComplete, 340);
    }, 1100);
    return () => window.clearTimeout(done);
  }, [onComplete]);

  if (!visible) return null;
  return <div className="page-loader" role="status" aria-label="Loading portfolio">
    <div className="loader-content">
      <p>INITIALIZING <span className="loader-dot">●</span></p>
      <div className="loader-name">{profile.firstName.toUpperCase()}<br /><em>{profile.lastName.toUpperCase()}</em></div>
      <small>BUSINESS ANALYTICS · SYSTEMS</small>
      <div className="loader-track"><i /></div>
      <p className="loader-ready">SYSTEM READY</p>
    </div>
  </div>;
}
