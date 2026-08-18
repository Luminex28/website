import Link from "next/link";
import type { Project } from "../../data/content";

export function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="section project-hero">
      <Link href="/#work" className="back-link">← Back to projects</Link>
      <div className="showcase-top" style={{ marginTop: 28 }}>
        <span className="showcase-index">{project.index}</span>
        <span className="showcase-status">{project.currentState}</span>
      </div>
      <h1 className="showcase-name" style={{ fontSize: "clamp(3.4rem, 9vw, 7.5rem)" }}>{project.name}</h1>
      <p className="showcase-tagline">{project.tagline}</p>
      <div className="showcase-tech" style={{ marginBottom: 28 }}>
        {project.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
      </div>
      <div className="showcase-links">
        {project.repoUrl ? (
          <a className="button primary" href={project.repoUrl} target="_blank" rel="noreferrer">View source ↗</a>
        ) : (
          <span className="button unavailable" aria-disabled="true" title="Repository link pending">SOURCE LINK PENDING</span>
        )}
        {project.demoUrl && <a className="button" href={project.demoUrl} target="_blank" rel="noreferrer">Live demo ↗</a>}
      </div>
    </section>
  );
}
