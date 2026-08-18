import type { Metadata } from "next";
import { ProjectCaseStudy } from "../../../components/projects/ProjectCaseStudy";
import { featuredProjects, siteUrl } from "../../../data/content";

const project = featuredProjects.find((p) => p.slug === "lumin")!;
const other = featuredProjects.find((p) => p.slug === "taskl")!;

export const metadata: Metadata = {
  title: `${project.name} — Swetank Pandey`,
  description: project.tagline,
  alternates: { canonical: `${siteUrl}/projects/lumin` },
  openGraph: {
    title: `${project.name} — Swetank Pandey`,
    description: project.tagline,
    type: "article",
    url: `${siteUrl}/projects/lumin`,
  },
};

export default function LuminPage() {
  return <ProjectCaseStudy project={project} prev={other} next={other} />;
}
