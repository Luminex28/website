import { Reveal } from "../animations/Reveal";
import { experience } from "../../data/content";

export function Experience() {
  return (
    <section className="section" id="experience">
      <Reveal className="section-heading">
        <p className="eyebrow">{experience.eyebrow}</p>
        <span className="heading-line" />
      </Reveal>
      <Reveal delay={100}>
        <article className="experience-card">
          <div className="experience-role">
            <small>{experience.company.toUpperCase()} · {experience.location.toUpperCase()}</small>
            <h2>{experience.role}</h2>
            <p className="experience-meta">{experience.dates}</p>
          </div>
          <ul className="experience-bullets">
            {experience.bullets.map((b) => <li key={b}>{b}</li>)}
          </ul>
          <div className="experience-duration">{experience.duration}</div>
        </article>
      </Reveal>
    </section>
  );
}
