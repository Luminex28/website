import { Reveal } from "../animations/Reveal";
import { education } from "../../data/content";

export function Education() {
  return (
    <section className="section education" id="education">
      <Reveal className="section-heading">
        <p className="eyebrow">{education.eyebrow}</p>
        <span className="heading-line" />
      </Reveal>
      <Reveal delay={100}>
        <article className="education-card">
          <div className="edu-number"><small>{education.dates}</small></div>
          <div>
            <small>{education.institution.toUpperCase()}</small>
            <h2>{education.degree}</h2>
          </div>
          <div className="edu-note">
            Certifications<br />
            <b>{education.certifications.join(", ")}</b>
          </div>
        </article>
      </Reveal>
    </section>
  );
}
