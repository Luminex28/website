import type { Metadata } from "next";
import { ProjectCaseStudy } from "../../../components/projects/ProjectCaseStudy";
import { featuredProjects, siteUrl } from "../../../data/content";

const project = featuredProjects.find((p) => p.slug === "taskl")!;
const other = featuredProjects.find((p) => p.slug === "lumin")!;

export const metadata: Metadata = {
  title: `${project.name} — Swetank Pandey`,
  description: project.tagline,
  alternates: { canonical: `${siteUrl}/projects/taskl` },
  openGraph: {
    title: `${project.name} — Swetank Pandey`,
    description: project.tagline,
    type: "article",
    url: `${siteUrl}/projects/taskl`,
  },
};

export default function TaskLPage() {
  return <ProjectCaseStudy project={project} prev={other} next={other} />;
}
