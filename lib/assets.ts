/**
 * Every image on the site, in one place.
 *
 * Assets are pre-generated at 2x their display size and converted to
 * WebP by scripts/build-assets.sh, so the Next image optimiser stays
 * off. Dimensions are recorded here to reserve layout space and avoid
 * content shift while images load.
 *
 * Swapping a photograph means changing one line here.
 */

export type Img = { src: string; w: number; h: number; alt: string };

export const brand = {
  lockup: {
    src: "/images/logo-gram-tarang.webp",
    w: 141,
    h: 96,
    alt: "Gram Tarang Employability Training Services",
  } satisfies Img,
  mark: { src: "/images/logo-mark.png", w: 512, h: 512, alt: "Gram Tarang" } satisfies Img,
};

export const home = {
  hero: {
    src: "/images/hero-workshop.webp",
    w: 1800,
    h: 820,
    alt: "Trainees working at machines on a Gram Tarang training floor",
  } satisfies Img,
  training: {
    src: "/images/home-training.webp",
    w: 1200,
    h: 900,
    alt: "A trainer supervising practical work in the workshop",
  } satisfies Img,
  classroom: {
    src: "/images/home-classroom.webp",
    w: 1200,
    h: 900,
    alt: "A classroom session at a Gram Tarang centre",
  } satisfies Img,
};

export const sectorImages: Record<string, Img> = {
  manufacturing: {
    src: "/images/sectors/manufacturing.webp",
    w: 1400,
    h: 900,
    alt: "Trainees on production machines in the manufacturing workshop",
  },
  "apparel-textiles": {
    src: "/images/sectors/apparel-textiles.webp",
    w: 1400,
    h: 900,
    alt: "A trainee at an industrial sewing machine",
  },
  automotive: {
    src: "/images/sectors/automotive.webp",
    w: 1400,
    h: 900,
    alt: "Two-wheeler service technicians working on a vehicle",
  },
  "retail-hospitality": {
    src: "/images/sectors/retail-hospitality.webp",
    w: 1400,
    h: 900,
    alt: "Trainees in a customer service session",
  },
  healthcare: {
    src: "/images/sectors/healthcare.webp",
    w: 1400,
    h: 900,
    alt: "Trainees in a practical healthcare technician class",
  },
  agriculture: {
    src: "/images/sectors/agriculture.webp",
    w: 1400,
    h: 900,
    alt: "Agricultural skills assessment under the Agri RPL project",
  },
};

/** Keyed by the leader's name in lib/content.ts. */
export const leaderPortraits: Record<string, Img> = {
  "Prof. Mukti Mishra": {
    src: "/images/leaders/mukti-mishra.webp",
    w: 520,
    h: 520,
    alt: "Prof. Mukti Mishra",
  },
  "Prof. D.N. Rao": {
    src: "/images/leaders/dn-rao.webp",
    w: 520,
    h: 520,
    alt: "Prof. D.N. Rao",
  },
  "Abhinav Madan": {
    src: "/images/leaders/abhinav-madan.webp",
    w: 520,
    h: 520,
    alt: "Abhinav Madan",
  },
  "Swagatika Mohapatra": {
    src: "/images/leaders/swagatika-mohapatra.webp",
    w: 520,
    h: 520,
    alt: "Swagatika Mohapatra",
  },
  "Parthasarathi Mohanty": {
    src: "/images/leaders/parthasarathi-mohanty.webp",
    w: 520,
    h: 520,
    alt: "Parthasarathi Mohanty",
  },
  "Debasish Panda": {
    src: "/images/leaders/debasish-panda.webp",
    w: 520,
    h: 520,
    alt: "Debasish Panda",
  },
  "Sadat Ali": {
    src: "/images/leaders/sadat-ali.webp",
    w: 520,
    h: 520,
    alt: "Sadat Ali",
  },
  "Aditya Saikia": {
    src: "/images/leaders/aditya-saikia.webp",
    w: 520,
    h: 520,
    alt: "Aditya Saikia",
  },
};

/**
 * Only three of the six people in the success stories had a photograph
 * in the media library. The rest render an initials monogram rather
 * than borrow someone else's face.
 */
export const storyPortraits: Record<string, Img> = {
  "Ranjeet Paricha": {
    src: "/images/stories/ranjeet-paricha.webp",
    w: 420,
    h: 420,
    alt: "Ranjeet Paricha",
  },
  "Bibhu Prasad Bachha": {
    src: "/images/stories/bibhu-prasad-bachha.webp",
    w: 420,
    h: 420,
    alt: "Bibhu Prasad Bachha",
  },
  "Hadibandhu Badaseth": {
    src: "/images/stories/hadibandhu-badaseth.webp",
    w: 420,
    h: 420,
    alt: "Hadibandhu Badaseth",
  },
};

export const awardImages: Img[] = [1, 2, 3, 4, 5, 6].map((n) => ({
  src: `/images/awards/award-${n}.webp`,
  w: 760,
  h: 510,
  alt: `Gram Tarang award certificate ${n}`,
}));

export const methodImages: Record<string, Img> = {
  "Teach me": {
    src: "/images/method/teach-me.webp",
    w: 880,
    h: 588,
    alt: "A trainer teaching trade fundamentals in the classroom",
  },
  "Show me": {
    src: "/images/method/show-me.webp",
    w: 880,
    h: 588,
    alt: "A trainer demonstrating a task in the workshop",
  },
  "Let me practise": {
    src: "/images/method/let-me-practise.webp",
    w: 880,
    h: 588,
    alt: "Trainees practising on production machines",
  },
  "Assess me": {
    src: "/images/method/assess-me.webp",
    w: 880,
    h: 588,
    alt: "A trainee's work being assessed",
  },
};

export const sixDimensionsDiagram: Img = {
  src: "/images/method/six-dimensions.webp",
  w: 1400,
  h: 697,
  alt: "Diagram of the six dimensions of skill Gram Tarang develops and assesses",
};

export const centreImages: Img[] = [1, 3, 4, 5, 6].map((n) => ({
  src: `/images/centres/centre-${n}.webp`,
  w: 700,
  h: 540,
  alt: "A Gram Tarang training centre",
}));

export const workforceImages = {
  recruitment: {
    src: "/images/workforce/recruitment.webp",
    w: 1400,
    h: 790,
    alt: "Workforce solutions — end-to-end recruitment",
  } satisfies Img,
  staffing: {
    src: "/images/workforce/staffing.webp",
    w: 1400,
    h: 790,
    alt: "Workforce solutions — staffing and deployment",
  } satisfies Img,
  payroll: {
    src: "/images/workforce/payroll.webp",
    w: 1400,
    h: 790,
    alt: "Workforce solutions — payrolling and statutory compliance",
  } satisfies Img,
};

export const facilityImages = {
  mtrtc: [1, 2, 3, 4, 5].map((n) => ({
    src: `/images/facilities/mtrtc-${n}.webp`,
    w: 900,
    h: 700,
    alt: "The Mini Tool Room & Training Centre",
  })) satisfies Img[],
  trainingFloor: {
    src: "/images/facilities/training-floor.webp",
    w: 900,
    h: 700,
    alt: "A live production training floor",
  } satisfies Img,
  ashokLeyland: {
    src: "/images/facilities/ashok-leyland.webp",
    w: 1200,
    h: 880,
    alt: "Technicians training at the Ashok Leyland programme",
  } satisfies Img,
};

/** Partner logos, keyed by the slug used in lib/content.ts. */
export const partnerLogos: Record<string, Img> = {
  "msde-pmkvy": { src: "/images/logos/msde.webp", w: 77, h: 120, alt: "MSDE, Government of India" },
  "mord-ddu-gky": { src: "/images/logos/ddu-gky.webp", w: 256, h: 120, alt: "DDU-GKY" },
  nsdc: { src: "/images/logos/nsdc.webp", w: 225, h: 120, alt: "National Skill Development Corporation" },
  odisha: { src: "/images/logos/odisha.webp", w: 110, h: 120, alt: "Government of Odisha" },
  "andhra-pradesh": { src: "/images/logos/andhra-pradesh.webp", w: 110, h: 120, alt: "Government of Andhra Pradesh" },
  jharkhand: { src: "/images/logos/jharkhand.webp", w: 110, h: 120, alt: "Government of Jharkhand" },
  chhattisgarh: { src: "/images/logos/chhattisgarh.webp", w: 120, h: 120, alt: "Government of Chhattisgarh" },
  "ashok-leyland": { src: "/images/logos/ashok-leyland.webp", w: 400, h: 120, alt: "Ashok Leyland" },
  "tata-motors": { src: "/images/logos/tata-motors.webp", w: 1159, h: 120, alt: "Tata Motors" },
  hyundai: { src: "/images/logos/hyundai.webp", w: 274, h: 120, alt: "Hyundai" },
  yamaha: { src: "/images/logos/yamaha.webp", w: 267, h: 120, alt: "Yamaha" },
  "volvo-eicher": { src: "/images/logos/volvo-eicher.webp", w: 120, h: 120, alt: "Volvo Eicher" },
  "cafe-coffee-day": { src: "/images/logos/cafe-coffee-day.webp", w: 160, h: 120, alt: "Café Coffee Day" },
  "godrej-boyce": { src: "/images/logos/godrej-boyce.webp", w: 280, h: 120, alt: "Godrej & Boyce" },
  seda: { src: "/images/logos/seda.webp", w: 352, h: 120, alt: "SEDA" },
};

export const ecosystemLogos: Record<string, Img> = {
  "MSDE, Government of India": {
    src: "/images/logos/msde.webp",
    w: 77,
    h: 120,
    alt: "MSDE, Government of India",
  },
  "Centurion University": {
    src: "/images/logos/centurion-university.webp",
    w: 98,
    h: 120,
    alt: "Centurion University of Technology and Management",
  },
  "Gram Tarang": {
    src: "/images/logo-mark.png",
    w: 512,
    h: 512,
    alt: "Gram Tarang",
  },
};

export const docs = {
  wellCatalogue: "/docs/well-catalogue.pdf",
};
