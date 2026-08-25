import type { MetadataRoute } from "next";
import { sectors } from "@/lib/content";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const ranked: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/sectors", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { path: "/partners", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/skill-training", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/workforce-solutions", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/action-learning", priority: 0.7, changeFrequency: "monthly" },
    { path: "/services/apprenticeship", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about/centres", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about/mission", priority: 0.6, changeFrequency: "yearly" },
    { path: "/about/leadership", priority: 0.6, changeFrequency: "yearly" },
    { path: "/about/trainers", priority: 0.6, changeFrequency: "yearly" },
    { path: "/recognition/awards", priority: 0.6, changeFrequency: "yearly" },
    { path: "/recognition/success-stories", priority: 0.7, changeFrequency: "monthly" },
    { path: "/careers", priority: 0.6, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
    ...sectors.map((s) => ({
      path: `/sectors/${s.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
  ];

  return ranked.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
