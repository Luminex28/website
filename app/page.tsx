"use client";

import { useCallback, useEffect, useState } from "react";
import { Cursor } from "../components/animations/Cursor";
import { MagneticLink } from "../components/animations/MagneticLink";
import { PageLoader } from "../components/animations/PageLoader";
import { Reveal } from "../components/animations/Reveal";

const navigation = ["About", "Skills", "Education", "Contact"];
const skills = [
  { label: "Data & Business", items: ["Data Analytics", "Business Intelligence", "Data Visualization", "Statistics"] },
  { label: "Core Tools", items: ["SQL", "Python"] },
  { label: "Exploration", items: ["AI / Machine Learning", "Linux", "Technology"] },
];
function Arrow() { return <span className="arrow" aria-hidden="true">↗</span>; }

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const completeLoading = useCallback(() => setLoaded(true), []);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    const sections = [...document.querySelectorAll<HTMLElement>("main section[id]")];
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) setActive(entry.target.id);
    }), { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
    sections.forEach((section) => observer.observe(section));
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);
  return <main className={loaded ? "site-ready" : "site-loading"}>
    <PageLoader onComplete={completeLoading} /><Cursor />
    <div className="cursor-glow" aria-hidden="true" /><div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`} aria-label="Primary navigation">
      <a className="brand" href="#home" aria-label="Swetank Pandey home"><span>SP</span><i>SWETANK</i></a>
      <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="nav-links">Menu</button>
      <div id="nav-links" className={`nav-links ${menuOpen ? "open" : ""}`}>{navigation.map((item) => <a key={item} className={active === item.toLowerCase() ? "active" : ""} onClick={() => setMenuOpen(false)} href={`#${item.toLowerCase()}`}>{item}</a>)}</div>
    </nav>
    <section className="hero section" id="home">
      <p className="eyebrow hero-item hero-status">01 / BUSINESS ANALYTICS</p>
      <div className="hero-grid"><div>
        <h1 className="hero-item hero-name">SWETANK<br /><em>PANDEY</em></h1>
        <p className="hero-copy hero-item hero-copy-motion">A Business Analytics student turning curiosity about data, business, and technology into practical analytical thinking.</p>
        <div className="actions hero-item hero-actions"><MagneticLink className="button primary" href="#skills">Explore my focus <Arrow /></MagneticLink><MagneticLink className="button" href="#contact">Get in touch <Arrow /></MagneticLink></div>
      </div><aside className="terminal hero-item hero-terminal" aria-label="Profile summary"><div className="terminal-head"><span /><span /><span /><b>profile.sh</b></div><div className="terminal-body"><p><b>$ whoami</b><br />swetank@portfolio</p><p><b>$ role</b><br />Business Analytics Student</p><p><b>$ focus</b><br />Data · Business · Technology</p><p><b>$ status</b><br /><mark>LEARNING & BUILDING</mark></p></div></aside></div>
      <div className="hero-footer hero-item hero-footer-motion"><span>SCROLL TO DISCOVER</span><span className="line" /><span>2026</span></div>
    </section>
    <section className="section split" id="about"><Reveal className="section-heading"><p className="eyebrow">02 / ABOUT</p><span className="heading-line" /><h2>INSIGHT IS A<br /><em>PRACTICE.</em></h2></Reveal><Reveal className="about-content" delay={110}><p className="lead">I’m Swetank Pandey, studying BBA Business Analytics (H) at KR Mangalam University. I’m drawn to the space where evidence, clear communication, and thoughtful technology meet.</p><p>I’m building my foundations across analytics, business intelligence, SQL, Python, visualization, and statistics—with a continuing interest in AI, machine learning, Linux, and technical projects.</p><div className="facts"><div><small>EDUCATION</small><b>BBA Business Analytics (H)</b></div><div><small>INSTITUTION</small><b>KR Mangalam University</b></div><div><small>FIELD</small><b>Business Analytics</b></div><div><small>INTERESTS</small><b>Data · Business · Technology</b></div></div></Reveal></section>
    <section className="section" id="skills"><Reveal className="section-heading"><p className="eyebrow">03 / CAPABILITIES</p><span className="heading-line" /></Reveal><div className="section-top"><Reveal><h2>THE <em>TOOLKIT</em><br />I’M GROWING.</h2></Reveal><Reveal delay={100}><p>Focused on the methods and tools that help make complex information useful.</p></Reveal></div><div className="skill-grid">{skills.map((group, index) => <Reveal key={group.label} delay={index * 90}><article className="skill-card"><span>0{index + 1}</span><h3>{group.label}</h3><ul>{group.items.map((item) => <li key={item}>{item}<i>↗</i></li>)}</ul></article></Reveal>)}</div></section>
    <section className="section education" id="education"><Reveal className="section-heading"><p className="eyebrow">04 / EDUCATION</p><span className="heading-line" /></Reveal><Reveal delay={100}><article className="education-card"><div className="edu-number">01</div><div><small>KR MANGALAM UNIVERSITY</small><h2>BBA BUSINESS<br /><em>ANALYTICS (H)</em></h2></div><div className="edu-note">Academic focus<br /><b>Data, business & analytical decision-making</b></div></article></Reveal></section>
    <section className="section contact" id="contact"><Reveal className="section-heading"><p className="eyebrow">05 / CONTACT</p><span className="heading-line" /></Reveal><Reveal delay={100}><h2>LET’S BUILD<br />SOMETHING <em>USEFUL.</em></h2><p>For collaboration, internships, and data-focused opportunities, reach out when contact details are available.</p><div className="contact-actions"><a className="button primary unavailable" aria-disabled="true" title="Email details are not present in the supplied resume">EMAIL DETAILS PENDING</a><a className="button unavailable" aria-disabled="true" title="A resume PDF was not provided">RESUME PDF PENDING</a></div><small className="notice">Contact links and resume download will be enabled once verified details are added to the project.</small></Reveal></section>
    <footer><span>© {new Date().getFullYear()} SWETANK PANDEY</span><span>DATA · BUSINESS · TECHNOLOGY</span></footer>
  </main>;
}
