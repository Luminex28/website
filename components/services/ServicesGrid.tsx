import { ServiceCard } from "./ServiceCard";
import { services } from "../../data/content";

export function ServicesGrid() {
  return (
    <div className="services-grid">
      {services.map((service, i) => (
        <ServiceCard key={service.slug} service={service} index={i} />
      ))}
    </div>
  );
}
