import type { Metadata } from "next";
import { org, sectors, type Sector } from "./content";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://gramtarang.org.in";

const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Gram Tarang — vocational skill training and placement",
};

const defaultTitle = `${org.shortName} — vocational skill training and placement in Odisha`;
const defaultDescription = org.aboutShort;

export function pageMeta({
  title,
  description,
  path,
  keywords = [],
  image,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: { url: string; width: number; height: number; alt: string };
}): Metadata {
  const url = path === "/" ? siteUrl : `${siteUrl}${path}`;
  const isHome = path === "/";
  const ogTitle = isHome ? defaultTitle : `${title} · ${org.shortName}`;
  const card = image ?? ogImage;

  return {
    title: isHome ? { absolute: defaultTitle } : title,
    description,
    keywords: [
      org.shortName,
      "Gram Tarang Employability Training",
      "skill training Odisha",
      "vocational training India",
      ...keywords,
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: org.name,
      title: ogTitle,
      description,
      url,
      images: [card],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [card.url],
    },
    robots: { index: true, follow: true },
  };
}

export function sectorMeta(sector: Sector): Metadata {
  const trained = sector.enrolments
    ? `${sector.enrolments.toLocaleString("en-IN")} trained`
    : null;
  const placed = sector.placement ? `${sector.placement} placement offers` : null;
  const extra = [trained, placed].filter(Boolean).join(". ");

  return pageMeta({
    title: `${sector.name} skill training`,
    description: extra
      ? `${sector.blurb} ${extra}.`
      : sector.blurb,
    path: `/sectors/${sector.slug}`,
    keywords: [
      sector.name,
      ...sector.trades.slice(0, 4),
      "NSQF",
      "skill development",
    ],
    image: {
      url: `/og/sectors/${sector.slug}.png`,
      width: 1200,
      height: 630,
      alt: `${sector.name} skill training at Gram Tarang`,
    },
  });
}

export const pages = {
  home: pageMeta({
    title: defaultTitle,
    description: defaultDescription,
    path: "/",
    keywords: [
      "NSDC training partner",
      "DDU-GKY",
      "rural youth employment",
      "placement after training",
    ],
  }),
  about: pageMeta({
    title: "About us",
    description:
      "How Gram Tarang works: a ministry, a university and an operator training rural youth in Odisha, Andhra Pradesh, Assam and Jharkhand since 2006.",
    path: "/about",
    keywords: ["about Gram Tarang", "NSDC", "Centurion University", "GTET"],
  }),
  mission: pageMeta({
    title: "Mission, vision & values",
    description:
      "To be a globally accredited human resource centre of excellence catalysing sustainable livelihoods in less developed markets.",
    path: "/about/mission",
  }),
  leadership: pageMeta({
    title: "Leadership",
    description:
      "The co-founders and executive team behind Gram Tarang Employability Training Services and Centurion University.",
    path: "/about/leadership",
    keywords: ["Mukti Mishra", "Abhinav Madan", "Centurion University"],
  }),
  trainers: pageMeta({
    title: "Trainers & pedagogy",
    description:
      "Two hundred trainers, a shared curriculum, and independent third-party assessment at the end of every Gram Tarang programme.",
    path: "/about/trainers",
  }),
  centres: pageMeta({
    title: "Training centres",
    description:
      "Gram Tarang skill training centres across Odisha, Andhra Pradesh, Telangana, Jharkhand and Assam.",
    path: "/about/centres",
    keywords: ["Jatni", "Paralakhemundi", "skill centre Odisha"],
  }),
  services: pageMeta({
    title: "Services",
    description:
      "Skill training, workforce solutions, production and action learning, and work-integrated apprenticeships from Gram Tarang.",
    path: "/services",
  }),
  skillTraining: pageMeta({
    title: "Skill training methodology",
    description:
      "Gram Tarang's training philosophy: three phases, six steps and six dimensions of skill, assessed by sector skill councils, NCVT or Centurion University.",
    path: "/services/skill-training",
    keywords: ["NSQF", "NCVT", "action learning"],
  }),
  workforce: pageMeta({
    title: "Workforce solutions",
    description:
      "End-to-end recruitment, payrolling and statutory compliance for employers hiring skilled workers trained by Gram Tarang across India.",
    path: "/services/workforce-solutions",
    keywords: ["recruitment", "payrolling", "contract staffing"],
  }),
  actionLearning: pageMeta({
    title: "Production & action learning",
    description:
      "Trainees learn by producing goods with real buyers and deadlines — including aero engine components at an HAL-empanelled tool room.",
    path: "/services/action-learning",
    keywords: ["MTRTC", "Mini Tool Room", "HAL"],
  }),
  apprenticeship: pageMeta({
    title: "Apprenticeship & work-integrated training",
    description:
      "Earn while you learn: paid work combined with contact classes, e-learning and formal DGT or university certification.",
    path: "/services/apprenticeship",
    keywords: ["DGT", "apprenticeship India", "earn while you learn"],
  }),
  sectors: pageMeta({
    title: "Sectors & trades",
    description:
      "Every vocational trade Gram Tarang runs — manufacturing, apparel, automotive, retail, healthcare, agriculture, BFSI and beauty & wellness.",
    path: "/sectors",
    keywords: sectors.map((s) => s.name),
  }),
  partners: pageMeta({
    title: "Partners",
    description:
      "Government and industry partners: MSDE, NSDC, MoRD, state governments, Ashok Leyland, Tata Motors, Hyundai, Café Coffee Day and more.",
    path: "/partners",
    keywords: ["NSDC", "MSDE", "Ashok Leyland", "DDU-GKY"],
  }),
  awards: pageMeta({
    title: "Awards & recognition",
    description:
      "NAAC 'A' grade, NSDC best performer, FICCI Skills Champion of India, and other recognition for Gram Tarang.",
    path: "/recognition/awards",
    keywords: ["NSDC award", "FICCI", "NAAC"],
  }),
  stories: pageMeta({
    title: "Success stories",
    description:
      "What happened to people who trained with Gram Tarang — from Mayurbhanj, Cuttack, Bokaro and other districts — after placement.",
    path: "/recognition/success-stories",
  }),
  careers: pageMeta({
    title: "Careers",
    description:
      "Jobs at Gram Tarang for trainers, mobilisers, placement officers and centre managers across Odisha, Andhra Pradesh, Assam and Jharkhand.",
    path: "/careers",
    keywords: ["jobs Odisha", "trainer jobs", "skill sector careers"],
  }),
  contact: pageMeta({
    title: "Contact us",
    description:
      "Inquire about a course, hiring, a partnership or a job at Gram Tarang. Call +91 94386 03040 or write to info@gramtarang.org.in.",
    path: "/contact",
    keywords: ["Gram Tarang contact", "Jatni", "Khordha"],
  }),
  privacy: pageMeta({
    title: "Privacy",
    description:
      "How Gram Tarang uses the details you send through the inquiry form, and how long we keep them.",
    path: "/privacy",
  }),
};

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s · ${org.shortName}`,
  },
  description: defaultDescription,
  applicationName: org.shortName,
  authors: [{ name: org.legalName, url: siteUrl }],
  creator: org.legalName,
  publisher: org.legalName,
  category: "education",
  referrer: "strict-origin-when-cross-origin",
  formatDetection: { telephone: true, email: true, address: true },
  keywords: [
    "Gram Tarang",
    "Gram Tarang Employability Training Services",
    "skill training Odisha",
    "vocational training",
    "NSDC",
    "DDU-GKY",
    "rural youth employment",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: org.name,
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
};
