import { Reveal } from "../animations/Reveal";
import { ProjectVisual } from "../motifs/ProjectVisual";
import { ProjectHero } from "./ProjectHero";
import { ProjectGallery, type GalleryImage } from "./ProjectGallery";
import { ProjectNavigation } from "./ProjectNavigation";
import type { Project } from "../../data/content";

export function ProjectCaseStudy({
  project,
  prev,
  next,
  gallery = [],
}: {
  project: Project;
  prev: Project;
  next: Project;
  gallery?: GalleryImage[];
}) {
  return (
    <>
      <ProjectHero project={project} />

      <section className="section">
        <Reveal className="section-heading">
          <p className="eyebrow">OVERVIEW</p>
          <span className="heading-line" />
        </Reveal>
        <div className="case-study-columns">
          <Reveal>
            <small>WHAT IT IS</small>
            <p>{project.what}</p>
          </Reveal>
          <Reveal delay={90}>
            <small>WHY I BUILT IT</small>
            <p>{project.why}</p>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <Reveal className="section-heading">
          <p className="eyebrow">WHAT I BUILT</p>
          <span className="heading-line" />
        </Reveal>
        <Reveal><p className="case-study-lead">{project.how}</p></Reveal>
      </section>

      <section className="section">
        <Reveal className="section-heading">
          <p className="eyebrow">TECHNICAL ARCHITECTURE</p>
          <span className="heading-line" />
        </Reveal>
        <Reveal className="showcase-visual" style={{ marginBottom: 32 }}>
          <ProjectVisual
            variant={project.accentMotif}
            image={
              project.slug === "lumin"
                ? "/assets/photos/projects/lumin/Lumin 1.png"
                : project.slug === "taskl"
                  ? "/assets/photos/projects/TaskL/TaskL.png"
                  : undefined
  }
  alt={`${project.name} project preview`}
/>
        </Reveal>
        <Reveal delay={80}><p className="case-study-lead">{project.architectureNote}</p></Reveal>
      </section>

      <section className="section section-alt">
        <Reveal className="section-heading">
          <p className="eyebrow">KEY TECHNICAL DECISIONS</p>
          <span className="heading-line" />
        </Reveal>
        <ul className="decision-list">
          {project.keyDecisions.map((d, i) => (
            <Reveal key={d} delay={i * 60}>
              <li>{d}</li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="section">
        <Reveal className="section-heading">
          <p className="eyebrow">VISUAL SHOWCASE</p>
          <span className="heading-line" />
        </Reveal>
        <Reveal><ProjectGallery images={gallery} /></Reveal>
      </section>

      <ProjectNavigation prev={prev} next={next} />
    </>
  );
}
