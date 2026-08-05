/**
 * Every image on the site, in one place.
 *
 * Each entry records where the file is used on gramtarang.org.in, so the
 * mapping can be checked rather than taken on trust. Assets are
 * pre-generated at 2x display size and converted to WebP by
 * scripts/build-assets.sh; dimensions are recorded here to reserve
 * layout space while they load.
 */

export type Img = { src: string; w: number; h: number; alt: string };

export const brand = {
  lockup: {
    src: "/images/logo-gram-tarang.webp",
    w: 184,
    h: 120,
    alt: "Gram Tarang Employability Training Services",
  } satisfies Img,
  mark: { src: "/images/logo-mark.png", w: 512, h: 512, alt: "Gram Tarang" } satisfies Img,
};

/**
 * The home page carousel. Each slide on the original site pairs a
 * photograph with one programme, so the pairing is preserved here.
 */
export const heroSlides: (Img & { caption: string; href: string })[] = [
  {
    src: "/images/hero/cnc-operator.webp",
    w: 1800,
    h: 820,
    alt: "Trainees working on CNC lathe and milling machines",
    caption: "CNC Operator — over 1,000 technicians a year for the auto component industry",
    href: "/sectors/manufacturing",
  },
  {
    src: "/images/hero/sewing-operator.webp",
    w: 1800,
    h: 820,
    alt: "Trainees at industrial sewing machines on a production line",
    caption: "Sewing Machine Operator — a three-month residential course with employment assurance",
    href: "/sectors/apparel-textiles",
  },
  {
    src: "/images/hero/ashok-leyland.webp",
    w: 1800,
    h: 820,
    alt: "Service technicians training on commercial vehicles",
    caption: "Ashok Leyland Service Technician — our first industry partnership",
    href: "/sectors/automotive",
  },
];

export const heroPrimary: Img = {
  src: "/images/hero/intro.webp",
  w: 1800,
  h: 820,
  alt: "Trainees and instructors on a Gram Tarang workshop floor",
};

/** Bhanu, from Khorda, placed at Shahi Exports in Bangalore. */
export const bhanu: Img = {
  src: "/images/hero/bhanu.webp",
  w: 1800,
  h: 820,
  alt: "Bhanu, who trained as a sewing machine operator and was placed at Shahi Exports",
};

export const sectorImages: Record<string, Img> = {
  manufacturing: {
    src: "/images/sectors/manufacturing.webp",
    w: 1400,
    h: 900,
    alt: "CNC lathe and milling machines in the manufacturing workshop",
  },
  "apparel-textiles": {
    src: "/images/sectors/apparel-textiles.webp",
    w: 1400,
    h: 900,
    alt: "An industrial sewing line under the DDU-GKY programme",
  },
  automotive: {
    src: "/images/sectors/automotive.webp",
    w: 1400,
    h: 900,
    alt: "Two-wheeler service technicians working on a motorcycle",
  },
  "retail-hospitality": {
    src: "/images/sectors/retail-hospitality.webp",
    w: 1400,
    h: 900,
    alt: "A Gram Tarang trainee preparing coffee as a Café Coffee Day brewmaster",
  },
  // healthcare, bfsi and beauty-wellness are deliberately absent: the media
  // library has no photograph of them, and the sector cards render a
  // typographic panel rather than borrow an unrelated image.
  agriculture: {
    src: "/images/sectors/agriculture.webp",
    w: 1400,
    h: 900,
    alt: "Field assessment under the Agri RPL project in Odisha",
  },
};

/** /index.php/training-methodology-philosophy/ */
export const logistics: Img = {
  src: "/images/sectors/logistics.webp",
  w: 1400,
  h: 900,
  alt: "Forklift operator training on the yard",
};

export const mobilisation: Img = {
  src: "/images/mobilisation.webp",
  w: 1400,
  h: 900,
  alt: "A village mobilisation meeting, where most trainees are first recruited",
};

export const methodDiagrams = {
  threePhases: {
    src: "/images/method/three-phases.webp",
    w: 1040,
    h: 1194,
    alt: "The three phases of learning: traditional, applied and action learning",
  } satisfies Img,
  sixDimensions: {
    src: "/images/method/six-dimensions.webp",
    w: 960,
    h: 866,
    alt: "The six dimensions of skill Gram Tarang develops and assesses",
  } satisfies Img,
  careerPathing: {
    src: "/images/method/career-pathing.webp",
    w: 400,
    h: 470,
    alt: "Career pathing from a foundation course into on-the-job training",
  } satisfies Img,
  workIntegrated: {
    src: "/images/method/work-integrated.webp",
    w: 1300,
    h: 468,
    alt: "The work-integrated learning pathway",
  } satisfies Img,
};

/** /index.php/trainers-pedagogy/ — "Pedagogy: theory, practice & production" */
export const pedagogyProduction: Img[] = [
  {
    src: "/images/pedagogy/production-1.webp",
    w: 870,
    h: 580,
    alt: "Machined components produced by trainees",
  },
  {
    src: "/images/pedagogy/production-2.webp",
    w: 870,
    h: 580,
    alt: "A fabricated steel bed frame produced in the welding workshop",
  },
  {
    src: "/images/pedagogy/production-3.webp",
    w: 870,
    h: 580,
    alt: "Precision turned parts laid out for inspection",
  },
  {
    src: "/images/pedagogy/production-4.webp",
    w: 870,
    h: 580,
    alt: "A live garment production line run by trainees",
  },
];

/** /index.php/awards-recognition/awards/ */
export const awardImages = {
  nsdc: {
    src: "/images/awards/nsdc-recognition.webp",
    w: 1200,
    h: 483,
    alt: "NSDC best performing centre recognition",
  } satisfies Img,
  ficci: {
    src: "/images/awards/ficci-summit.webp",
    w: 880,
    h: 585,
    alt: "FICCI Global Skills Summit award",
  } satisfies Img,
  naac: {
    src: "/images/awards/naac-and-niti.webp",
    w: 900,
    h: 616,
    alt: "NAAC accreditation and NITI Aayog recognition",
  } satisfies Img,
};

/** Keyed by the person's name in lib/content.ts. */
export const leaderPortraits: Record<string, Img> = {
  "Prof. Mukti Mishra": { src: "/images/leaders/mukti-mishra.webp", w: 520, h: 520, alt: "Prof. Mukti Mishra" },
  "Prof. D.N. Rao": { src: "/images/leaders/dn-rao.webp", w: 520, h: 520, alt: "Prof. D.N. Rao" },
  "Abhinav Madan": { src: "/images/leaders/abhinav-madan.webp", w: 520, h: 520, alt: "Abhinav Madan" },
  "Swagatika Mohapatra": { src: "/images/leaders/swagatika-mohapatra.webp", w: 520, h: 520, alt: "Swagatika Mohapatra" },
  "Parthasarathi Mohanty": { src: "/images/leaders/parthasarathi-mohanty.webp", w: 520, h: 520, alt: "Parthasarathi Mohanty" },
  "Debasish Panda": { src: "/images/leaders/debasish-panda.webp", w: 520, h: 520, alt: "Debasish Panda" },
  "Sadat Ali": { src: "/images/leaders/sadat-ali.webp", w: 520, h: 520, alt: "Sadat Ali" },
  "Aditya Saikia": { src: "/images/leaders/aditya-saikia.webp", w: 520, h: 520, alt: "Aditya Saikia" },
};

/** Every person on the success stories page has their own photograph. */
export const storyPortraits: Record<string, Img> = {
  "Ranjeet Paricha": { src: "/images/stories/ranjeet-paricha.webp", w: 420, h: 420, alt: "Ranjeet Paricha" },
  "Hadibandhu Badaseth": { src: "/images/stories/hadibandhu-badaseth.webp", w: 420, h: 420, alt: "Hadibandhu Badaseth" },
  "Bibhu Prasad Bachha": { src: "/images/stories/bibhu-prasad-bachha.webp", w: 420, h: 420, alt: "Bibhu Prasad Bachha" },
  "Sagar Naik": { src: "/images/stories/sagar-naik.webp", w: 420, h: 420, alt: "Sagar Naik" },
  "Pushpanjali Mallick": { src: "/images/stories/pushpanjali-mallick.webp", w: 420, h: 420, alt: "Pushpanjali Mallick" },
  "Pritisudha Panda": { src: "/images/stories/pritisudha-panda.webp", w: 420, h: 420, alt: "Pritisudha Panda" },
  "Ajit Mandal": { src: "/images/stories/ajit-mandal.webp", w: 420, h: 420, alt: "Ajit Mandal" },
  "Sk Nakir": { src: "/images/stories/sk-nakir.webp", w: 420, h: 420, alt: "Sk Nakir" },
  "Gurudev Hansdah": { src: "/images/stories/gurudev-hansdah.webp", w: 420, h: 420, alt: "Gurudev Hansdah" },
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
    alt: "The Ashok Leyland zonal training centre at Bhubaneswar",
  } satisfies Img,
};

export const workforceImages = {
  recruitment: { src: "/images/workforce/recruitment.webp", w: 1400, h: 790, alt: "End-to-end recruitment" },
  staffing: { src: "/images/workforce/staffing.webp", w: 1400, h: 790, alt: "Staffing and deployment" },
  payroll: { src: "/images/workforce/payroll.webp", w: 1400, h: 790, alt: "Payrolling and statutory compliance" },
};

/** Keyed by the slug in lib/content.ts. */
export const partnerLogos: Record<string, Img> = {
  "msde-pmkvy": { src: "/images/logos/msde.webp", w: 77, h: 120, alt: "MSDE, Government of India" },
  "mord-ddu-gky": { src: "/images/logos/ddu-gky.webp", w: 256, h: 120, alt: "MoRD — DDU-GKY" },
  nsdc: { src: "/images/logos/nsdc.webp", w: 225, h: 120, alt: "National Skill Development Corporation" },
  odisha: { src: "/images/logos/odisha.webp", w: 110, h: 120, alt: "Government of Odisha" },
  "andhra-pradesh": { src: "/images/logos/andhra-pradesh.webp", w: 110, h: 120, alt: "Government of Andhra Pradesh" },
  jharkhand: { src: "/images/logos/jharkhand.webp", w: 110, h: 120, alt: "Government of Jharkhand" },
  chhattisgarh: { src: "/images/logos/chhattisgarh.webp", w: 120, h: 120, alt: "Government of Chhattisgarh" },
  "himachal-pradesh": { src: "/images/logos/himachal-pradesh.webp", w: 163, h: 120, alt: "Government of Himachal Pradesh" },
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
  "MSDE, Government of India": { src: "/images/logos/msde.webp", w: 77, h: 120, alt: "MSDE, Government of India" },
  "Centurion University": { src: "/images/logos/centurion-university.webp", w: 98, h: 120, alt: "Centurion University" },
  "Gram Tarang": { src: "/images/logo-mark.png", w: 512, h: 512, alt: "Gram Tarang" },
};

export const docs = { wellCatalogue: "/docs/well-catalogue.pdf" };
