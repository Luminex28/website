"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav, externalLinks, profile } from "../../data/content";

export function SiteNav({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const pathname = usePathname();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      firstLinkRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) { setOpen(false); toggleRef.current?.focus(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  const close = () => setOpen(false);
  const isProjectsActive = pathname.startsWith("/projects");
  const isTopActive = (href: string) => (href.startsWith("/#") ? false : pathname === href);

  return (
    <>
      <div className="topbar">
        <button
          ref={toggleRef}
          className={`menu-toggle ${open ? "menu-toggle-open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="site-nav-overlay"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span /><span /><span />
        </button>
        <Link className="brand" href="/" aria-label="Swetank Pandey home">
          <span>SP</span><i>SWETANK</i>
        </Link>
        <Link className="button primary topbar-cta" href="/contact">Discuss a project</Link>
      </div>

      <div
        id="site-nav-overlay"
        className={`nav-overlay ${open ? "nav-overlay-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!open}
      >
        <nav className="nav-overlay-list">
          {primaryNav.map((item, i) => (
            <div key={item.label} className="nav-overlay-group">
              {item.external ? (
                <a
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={close}
                  tabIndex={open ? 0 : -1}
                >
                  {item.label} ↗
                </a>
              ) : (
                <Link
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  onClick={close}
                  className={isTopActive(item.href) || (item.label === "Projects" && isProjectsActive) ? "active" : ""}
                  tabIndex={open ? 0 : -1}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="nav-overlay-external">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>LinkedIn ↗</a>
          {externalLinks.github ? (
            <a href={externalLinks.github} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>GitHub ↗</a>
          ) : (
            <span className="unavailable" aria-disabled="true">GitHub — pending</span>
          )}
        </div>
      </div>
      {open && <button className="nav-overlay-backdrop" aria-label="Close menu" onClick={close} tabIndex={-1} />}
    </>
  );
}
