import type { Metadata } from "next";
import { Reveal } from "../../components/animations/Reveal";
import { ServicesGrid } from "../../components/services/ServicesGrid";
import { siteUrl } from "../../data/content";

export const metadata: Metadata = {
  title: "Services — Swetank Pandey",
  description: "Custom web development, data & analytics, automation, and software work — built around your actual problem, not a fixed package.",
  alternates: { canonical: `${siteUrl}/services` },
  openGraph: {
    title: "Services — Swetank Pandey",
    description: "Custom web development, data & analytics, automation, and software work.",
    type: "website",
    url: `${siteUrl}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="section services-hero">
        <Reveal>
          <p className="eyebrow">SERVICES</p>
          <span className="heading-line" />
          <h1>WHAT I CAN<br /><em>BUILD FOR YOU.</em></h1>
          <p className="services-intro">
            I take on a limited number of outside projects alongside coursework — real
            problems, not templates. Every quote is discussed privately once I understand
            what you actually need, so there&apos;s nothing to compare against a price list here.
          </p>
        </Reveal>
      </section>
      <section className="section section-alt">
        <ServicesGrid />
      </section>
    </>
  );
}
