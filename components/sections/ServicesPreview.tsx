import Link from "next/link";
import { Reveal } from "../animations/Reveal";
import { services } from "../../data/content";

export function ServicesPreview() {
  return (
    <section className="section section-alt">
      <Reveal className="section-heading">
        <p className="eyebrow">WHAT I CAN BUILD</p>
        <span className="heading-line" />
      </Reveal>
      <div className="services-preview-grid">
        {services.slice(0, 4).map((service, i) => (
          <Reveal key={service.slug} delay={i * 70}>
            <span className="services-preview-item">{service.name}</span>
          </Reveal>
        ))}
      </div>
      <Reveal delay={280}>
        <div className="actions">
          <Link className="button" href="/services">Explore services <span className="arrow">↗</span></Link>
        </div>
      </Reveal>
    </section>
  );
}
