import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { JsonLd } from "@/components/json-ld";
import { organizationJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { rootMetadata } from "@/lib/seo";
import "./globals.css";

/**
 * Font is self-hosted from /public/fonts rather than fetched from a
 * CDN: one less third-party request, no external dependency at build
 * time, and nothing leaks to a third party on page load.
 */

const geo231 = localFont({
  src: [
    {
      path: "../public/fonts/Geo231Rm.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-geo231",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  themeColor: "#14204a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={geo231.variable} data-scroll-behavior="smooth">
      <body>
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        {children}
      </body>
    </html>
  );
}
