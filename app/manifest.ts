import type { MetadataRoute } from "next";
import { org } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: org.legalName,
    short_name: org.shortName,
    description: org.aboutShort,
    start_url: "/",
    display: "browser",
    background_color: "#eef1f5",
    theme_color: "#14204a",
    lang: "en-IN",
    icons: [
      { src: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
