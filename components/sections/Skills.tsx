import { Reveal } from "../animations/Reveal";
import { skillGroups } from "../../data/content";

export function Skills() {
  return (
    <section className="section section-alt">
      <Reveal className="section-heading">
        <p className="eyebrow">TOOLKIT</p>
        <span className="heading-line" />
      </Reveal>
      <div className="section-top">
        <Reveal><h2>WHAT I'M<br /><em>WORKING WITH.</em></h2></Reveal>
        <Reveal delay={100}><p>Split roughly the way I split my time — analysis on one side, systems on the other.</p></Reveal>
      </div>
      <div className="skill-grid">
        {skillGroups.map((group, index) => (
          <Reveal key={group.label} delay={index * 90}>
            <article className="skill-card">
              <span>0{index + 1}</span>
              <h3>{group.label}</h3>
              <ul>
                {group.items.map((item) => <li key={item}>{item}<i>↗</i></li>)}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
