import { Reveal } from "../animations/Reveal";
import { about } from "../../data/content";
import Image from "next/image";

export function About() {
  return (
    <section className="section split" id="about">
      <Reveal className="section-heading">
        <p className="eyebrow">{about.eyebrow}</p>
        <span className="heading-line" />
        <h2>{about.heading[0]}<br />{about.heading[1]}<br /><em>{about.heading[2]}</em></h2>
      </Reveal>
      <Reveal className="about-content" delay={110}>
        <p className="lead">{about.lead}</p>
        {about.body.map((p) => <p key={p}>{p}</p>)}
        <div className="facts">
          {about.facts.map((fact) => (
            <div key={fact.label}>
              <small>{fact.label}</small>
              <b>{fact.value}</b>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
