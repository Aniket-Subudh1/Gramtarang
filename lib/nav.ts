import { sectors } from "./content";

export type NavLink = { label: string; href: string; note?: string; external?: boolean };
export type NavGroup = { label: string; href?: string; children?: NavLink[] };

export const primaryNav: NavGroup[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "At a glance", href: "/about", note: "The model, in one page" },
      { label: "Mission, vision & values", href: "/about/mission" },
      { label: "Executive leadership", href: "/about/leadership" },
      { label: "Trainers & pedagogy", href: "/about/trainers" },
      { label: "Our centres", href: "/about/centres", note: "13 across 5 states" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Skill training", href: "/services/skill-training" },
      { label: "Workforce solutions", href: "/services/workforce-solutions" },
      { label: "Production & action learning", href: "/services/action-learning" },
      {
        label: "Work-integrated training & apprenticeship",
        href: "/services/apprenticeship",
      },
    ],
  },
  {
    label: "Sectors",
    href: "/sectors",
    children: sectors.map((s) => ({
      label: s.name,
      href: `/sectors/${s.slug}`,
      note: `${s.trades.length} trades`,
    })),
  },
  { label: "Partners", href: "/partners" },
  {
    label: "Recognition",
    href: "/recognition/awards",
    children: [
      { label: "Awards", href: "/recognition/awards" },
      { label: "Success stories", href: "/recognition/success-stories" },
    ],
  },
  { label: "Careers", href: "/careers" },
];

export const footerNav = [
  {
    heading: "About",
    links: [
      { label: "At a glance", href: "/about" },
      { label: "Mission, vision & values", href: "/about/mission" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Trainers & pedagogy", href: "/about/trainers" },
      { label: "Our centres", href: "/about/centres" },
    ],
  },
  {
    heading: "What we do",
    links: [
      { label: "Skill training", href: "/services/skill-training" },
      { label: "Workforce solutions", href: "/services/workforce-solutions" },
      { label: "Production & action learning", href: "/services/action-learning" },
      { label: "Apprenticeships", href: "/services/apprenticeship" },
    ],
  },
  {
    heading: "Sectors",
    links: sectors.map((s) => ({ label: s.name, href: `/sectors/${s.slug}` })),
  },
  {
    heading: "More",
    links: [
      { label: "Partners", href: "/partners" },
      { label: "Awards", href: "/recognition/awards" },
      { label: "Success stories", href: "/recognition/success-stories" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
