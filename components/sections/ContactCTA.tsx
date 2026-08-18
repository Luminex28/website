import Link from "next/link";
import { Reveal } from "../animations/Reveal";
import { profile } from "../../data/content";

export function ContactCTA() {
  return (
    <section className="section contact">
      <Reveal>
        <p className="eyebrow">GOT SOMETHING TO BUILD?</p>
        <span className="heading-line" />
        <h2>HAVE A PROBLEM<br /><em>WORTH SOLVING?</em></h2>
        <p>Open to internships, collaboration, and custom project work — tell me what you're trying to build.</p>
        <div className="contact-actions">
          <Link className="button primary" href="/contact">Discuss a project <span className="arrow">↗</span></Link>
          <a className="button" href={`mailto:${profile.contactEmail}`}>Email me <span className="arrow">↗</span></a>
        </div>
      </Reveal>
    </section>
  );
}
