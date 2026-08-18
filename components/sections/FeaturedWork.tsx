import Link from "next/link";
import { Reveal } from "../animations/Reveal";
import { ProjectVisual } from "../motifs/ProjectVisual";
import { featuredProjects, type Project } from "../../data/content";

function ProjectShowcase({ project }: { project: Project }) {
  return (
    <article className="showcase" id={project.slug}>
      <Reveal className="showcase-top">
        <span className="showcase-index">{project.index}</span>
        <span className="showcase-status">{project.status}</span>
      </Reveal>
      <Reveal delay={70}>
        <Link href={`/projects/${project.slug}`} className="showcase-name-link">
          <h3 className="showcase-name">{project.name}</h3>
        </Link>
        <p className="showcase-tagline">{project.tagline}</p>
      </Reveal>
      <Reveal delay={120} className="showcase-visual">
        <Link href={`/projects/${project.slug}`} aria-label={`View ${project.name} case study`}>
          <ProjectVisual variant={project.accentMotif} />
        </Link>
      </Reveal>
      <div className="showcase-body">
        <Reveal className="showcase-field" delay={60}>
          <small>WHAT IT IS</small>
          <p>{project.what}</p>
        </Reveal>
        <Reveal className="showcase-field" delay={130}>
          <small>WHY I BUILT IT</small>
          <p>{project.why}</p>
        </Reveal>
        <Reveal className="showcase-field" delay={200}>
          <small>HOW IT WORKS</small>
          <p>{project.how}</p>
        </Reveal>
      </div>
      <Reveal className="showcase-foot" delay={90}>
        <div className="showcase-tech">
          {project.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
        </div>
        <div className="showcase-links">
          <Link className="button primary" href={`/projects/${project.slug}`}>View case study <span className="arrow">↗</span></Link>
          {project.repoUrl ? (
            <a className="button" href={project.repoUrl} target="_blank" rel="noreferrer">View source ↗</a>
          ) : (
            <span className="button unavailable" aria-disabled="true" title="Repository link pending">
              SOURCE LINK PENDING
            </span>
          )}
        </div>
      </Reveal>
    </article>
  );
}

export function FeaturedWork() {
  return (
    <div id="work">
      {featuredProjects.map((project) => (
        <ProjectShowcase key={project.slug} project={project} />
      ))}
    </div>
  );
}
