import type { Metadata } from "next";
import { Reveal } from "../../components/animations/Reveal";
import { ContactForm } from "../../components/contact/ContactForm";
import { services, siteUrl, profile } from "../../data/content";

export const metadata: Metadata = {
  title: "Contact — Swetank Pandey",
  description: "Tell me what you're trying to build — I'll get back to you after reviewing the details.",
  alternates: { canonical: `${siteUrl}/contact` },
  openGraph: {
    title: "Contact — Swetank Pandey",
    description: "Tell me what you're trying to build.",
    type: "website",
    url: `${siteUrl}/contact`,
  },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const params = await searchParams;
  const initialService = params.service && services.some((s) => s.slug === params.service) ? params.service : undefined;

  return (
    <section className="section contact-page">
      <Reveal>
        <p className="eyebrow">CONTACT</p>
        <span className="heading-line" />
        <h1>LET&apos;S BUILD<br /><em>SOMETHING USEFUL.</em></h1>
        <p className="services-intro">
          Tell me what you&apos;re trying to build — I&apos;ll get back to you after reviewing the details.
        </p>
        <p className="contact-direct-email">
          Prefer email? Reach me directly at{" "}
          <a href={`mailto:${profile.contactEmail}`}>{profile.contactEmail}</a>
        </p>
      </Reveal>
      <Reveal delay={100}>
        <ContactForm initialService={initialService} />
      </Reveal>
    </section>
  );
}
