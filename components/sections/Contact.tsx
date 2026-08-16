import { Reveal } from "../animations/Reveal";
import { contact, profile } from "../../data/content";

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <Reveal className="section-heading">
        <p className="eyebrow">{contact.eyebrow}</p>
        <span className="heading-line" />
      </Reveal>
      <Reveal delay={100}>
        <h2>{contact.heading[0]}<br /><em>{contact.heading[1]}</em></h2>
        <p>{contact.body}</p>
        <div className="contact-actions">
          <a className="button primary" href={`mailto:${profile.email}`}>EMAIL ME</a>
          <a className="button" href={profile.linkedin} target="_blank" rel="noreferrer">LINKEDIN ↗</a>
          {profile.resumeAvailable ? (
            <a className="button" href="/assets/swetank-pandey-resume.pdf" target="_blank" rel="noreferrer">RESUME ↗</a>
          ) : (
            <span className="button unavailable" aria-disabled="true" title="Resume PDF not yet provided">RESUME PENDING</span>
          )}
        </div>
        <small className="notice">Resume download will be enabled once a PDF is added to the project.</small>
      </Reveal>
    </section>
  );
}
