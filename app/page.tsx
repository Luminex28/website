import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { FeaturedWork } from "../components/sections/FeaturedWork";
import { OtherWork } from "../components/sections/OtherWork";
import { ServicesPreview } from "../components/sections/ServicesPreview";
import { Experience } from "../components/sections/Experience";
import { Education } from "../components/sections/Education";
import { Skills } from "../components/sections/Skills";
import { ContactCTA } from "../components/sections/ContactCTA";
import { PersonalNumber } from "../components/motifs/PersonalNumber";

export default function Home() {
  return (
    <>
      <PersonalNumber />
      <Hero />
      <About />
      <FeaturedWork />
      <OtherWork />
      <ServicesPreview />
      <Experience />
      <Education />
      <Skills />
      <ContactCTA />
    </>
  );
}
