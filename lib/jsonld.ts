import { org, sectors } from "./content";
import { siteUrl } from "./seo";

const orgId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": orgId,
    name: org.legalName,
    legalName: org.legalName,
    alternateName: [org.shortName, "GTET", "Gram Tarang Employability Training"],
    url: siteUrl,
    logo: `${siteUrl}/images/logo-mark.png`,
    image: `${siteUrl}/og.png`,
    description: org.about,
    slogan: org.tagline,
    foundingDate: String(org.founded),
    email: org.email,
    telephone: org.phoneHref,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${org.registeredOffice.line1}, ${org.registeredOffice.line2}`,
      addressLocality: "Jatni",
      addressRegion: "Odisha",
      postalCode: "752050",
      addressCountry: "IN",
    },
    areaServed: ["IN", "Odisha", "Andhra Pradesh", "Jharkhand", "Assam", "Telangana"],
    knowsAbout: sectors.map((s) => s.name),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: siteUrl,
    name: org.shortName,
    description: org.aboutShort,
    inLanguage: "en-IN",
    publisher: { "@id": orgId },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.path === "/" ? siteUrl : `${siteUrl}${item.path}`,
    })),
  };
}

export function sectorJsonLd(slug: string) {
  const sector = sectors.find((s) => s.slug === slug);
  if (!sector) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${sector.name} skill training`,
    description: sector.blurb,
    provider: { "@id": orgId },
    url: `${siteUrl}/sectors/${sector.slug}`,
    educationalLevel: "Vocational",
    occupationalCredentialAwarded: "NSQF / NCVT / university certification",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "onsite",
      location: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressRegion: "Odisha",
          addressCountry: "IN",
        },
      },
    },
  };
}
