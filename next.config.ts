import type { NextConfig } from "next";

/**
 * Legacy WordPress URLs → new routes.
 * The old site indexed hundreds of /index.php/... paths. Redirecting
 * them permanently keeps existing search rankings and inbound links.
 */
const legacyRedirects: { from: string; to: string }[] = [
  { from: "/index.php/at-a-glance", to: "/about" },
  { from: "/index.php/mission-vision-values", to: "/about/mission" },
  { from: "/index.php/leadership", to: "/about/leadership" },
  { from: "/index.php/leadership-2", to: "/about/leadership" },
  { from: "/index.php/trainers-pedagogy", to: "/about/trainers" },
  { from: "/index.php/our-centers", to: "/about/centres" },
  { from: "/index.php/governance", to: "/about" },
  { from: "/index.php/why", to: "/about" },

  { from: "/index.php/workforce-solutions", to: "/services/workforce-solutions" },
  { from: "/index.php/recruitment", to: "/services/workforce-solutions" },
  { from: "/index.php/training-methodology-philosophy", to: "/services/skill-training" },
  { from: "/index.php/action-learning", to: "/services/action-learning" },
  { from: "/index.php/mtrtc", to: "/services/action-learning" },
  { from: "/index.php/manufacturing/sky-rider-auto", to: "/services/action-learning" },
  {
    from: "/index.php/work-integrated-skills-training-apprenticeship",
    to: "/services/apprenticeship",
  },

  { from: "/index.php/manufacturing", to: "/sectors/manufacturing" },
  { from: "/index.php/manufacturing/machining", to: "/sectors/manufacturing" },
  { from: "/index.php/manufacturing/automotive-2", to: "/sectors/automotive" },
  { from: "/index.php/apparel-textiles", to: "/sectors/apparel-textiles" },
  { from: "/index.php/automotive", to: "/sectors/automotive" },
  { from: "/index.php/healthcare", to: "/sectors/healthcare" },
  { from: "/index.php/hospitality", to: "/sectors/retail-hospitality" },
  { from: "/index.php/energy", to: "/sectors" },
  { from: "/index.php/agri-rpl-project-in-odisha", to: "/sectors/agriculture" },

  { from: "/index.php/partners", to: "/partners" },
  { from: "/index.php/awards-recognition/awards", to: "/recognition/awards" },
  {
    from: "/index.php/awards-recognition/success-stories-2",
    to: "/recognition/success-stories",
  },
  { from: "/index.php/openings", to: "/careers" },
  { from: "/index.php/gallery", to: "/" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,

  // The site is typographic and ships no bitmap images, so the image
  // optimiser is switched off entirely. That removes a whole class of
  // reported issues (optimiser DoS, cache confusion, unbounded cache
  // growth, content injection) rather than patching around them. If you
  // later add photography, turn this back on and list only the exact
  // hostnames you serve from.
  images: { unoptimized: true },

  async redirects() {
    return [
      // Next.js strips the trailing slash before matching, so one
      // entry per path covers both /foo and /foo/.
      ...legacyRedirects.map(({ from, to }) => ({
        source: from,
        destination: to,
        permanent: true,
      })),
      // Every remaining government/ and industry/ partner page.
      { source: "/index.php/government/:slug*", destination: "/partners", permanent: true },
      { source: "/index.php/industry/:slug*", destination: "/partners", permanent: true },
      // The old contact page was a query-string permalink that now 404s.
      { source: "/index.php/contact-us", destination: "/contact", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
      {
        // The console must never be indexed, whichever host serves it.
        source: "/admin/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/fonts/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
