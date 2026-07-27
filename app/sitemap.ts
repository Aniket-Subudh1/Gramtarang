import type { MetadataRoute } from "next";
import { sectors } from "@/lib/content";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gramtarang.org.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/about/mission",
    "/about/leadership",
    "/about/trainers",
    "/about/centres",
    "/services",
    "/services/skill-training",
    "/services/workforce-solutions",
    "/services/action-learning",
    "/services/apprenticeship",
    "/sectors",
    "/partners",
    "/recognition/awards",
    "/recognition/success-stories",
    "/careers",
    "/contact",
    "/privacy",
    ...sectors.map((s) => `/sectors/${s.slug}`),
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
