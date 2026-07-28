import type { Metadata } from "next";
import localFont from "next/font/local";
import { org } from "@/lib/content";
import "./globals.css";

/**
 * Fonts are self-hosted from /public/fonts rather than fetched from
 * Google's CDN: one less third-party request, no external dependency at
 * build time, and nothing leaks to a third party on page load.
 * All three are Open Font License; the licences sit beside the files.
 */

const archivo = localFont({
  src: [
    {
      path: "../public/fonts/archivo-latin-wght-normal.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-archivo",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const sourceSerif = localFont({
  src: [
    {
      path: "../public/fonts/source-serif-4-latin-wght-normal.woff2",
      weight: "200 900",
      style: "normal",
    },
    {
      path: "../public/fonts/source-serif-4-latin-wght-italic.woff2",
      weight: "200 900",
      style: "italic",
    },
  ],
  variable: "--font-source-serif",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

const plexMono = localFont({
  src: [
    {
      path: "../public/fonts/ibm-plex-mono-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/ibm-plex-mono-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-plex-mono",
  display: "swap",
  fallback: ["ui-monospace", "monospace"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gramtarang.org.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${org.shortName} — vocational skill training and placement`,
    template: `%s · ${org.shortName}`,
  },
  description: org.aboutShort,
  openGraph: {
    type: "website",
    siteName: org.name,
    title: `${org.shortName} — vocational skill training and placement`,
    description: org.aboutShort,
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: org.legalName,
  alternateName: org.shortName,
  url: siteUrl,
  description: org.about,
  foundingDate: String(org.founded),
  address: {
    "@type": "PostalAddress",
    streetAddress: org.registeredOffice.line2,
    addressLocality: "Jatni",
    addressRegion: "Odisha",
    postalCode: "752050",
    addressCountry: "IN",
  },
  telephone: org.phoneHref,
  email: org.email,
  logo: `${siteUrl}/images/logo-mark.png`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-IN"
      className={`${archivo.variable} ${sourceSerif.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
