import Link from "next/link";
import type { Project } from "../../data/content";

export function ProjectNavigation({ prev, next }: { prev: Project; next: Project }) {
  return (
    <nav className="project-nav" aria-label="Other projects">
      <Link href={`/projects/${prev.slug}`} className="project-nav-link project-nav-prev">
        <small>PREVIOUS PROJECT</small>
        <span>{prev.name}</span>
      </Link>
      <Link href={`/projects/${next.slug}`} className="project-nav-link project-nav-next">
        <small>NEXT PROJECT</small>
        <span>{next.name}</span>
      </Link>
    </nav>
  );
}
