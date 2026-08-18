import type { MetadataRoute } from "next";
import { siteUrl } from "../data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: siteUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/projects/lumin`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/projects/taskl`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];
}
