import { Reveal } from "../animations/Reveal";
import { secondaryProjects, otherExperiments } from "../../data/content";

export function OtherWork() {
  return (
    <section className="section section-alt">
      <Reveal className="section-heading">
        <p className="eyebrow">OTHER WORK</p>
        <span className="heading-line" />
        <h2>SMALLER BUILDS,<br /><em>SAME HABIT.</em></h2>
      </Reveal>
      <div className="other-grid">
        {secondaryProjects.map((project, i) => (
          <Reveal key={project.name} delay={i * 90}>
            <article className="other-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="showcase-tech" style={{ marginBottom: 16 }}>
                {project.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
              </div>
              <span className="other-status">{project.status}</span>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal delay={180}>
        <p className="other-note">{otherExperiments}</p>
      </Reveal>
    </section>
  );
}
