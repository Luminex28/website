import Link from "next/link";
import { Reveal } from "../animations/Reveal";
import type { Service } from "../../data/content";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Reveal delay={index * 80}>
      <article className="service-card">
        <span className="service-card-number">0{index + 1}</span>
        <h3>{service.name}</h3>
        <p className="service-summary">{service.summary}</p>
        <div className="service-help">
          <small>WHAT I CAN HELP WITH</small>
          <ul>
            {service.helpWith.map((h) => <li key={h}>{h}</li>)}
          </ul>
        </div>
        <div className="service-detail">{service.detail}</div>
        <Link className="button primary service-cta" href={`/contact?service=${service.slug}`}>
          Discuss a project <span className="arrow">↗</span>
        </Link>
      </article>
    </Reveal>
  );
}
