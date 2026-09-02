/**
 * Every image on the site, in one place.
 *
 * Photographs under /photos/ are converted from
 * public/Gram Tarang New Website Photos/ by scripts/import-photos.py.
 * Portraits, awards, method diagrams and partner logos still come from
 * the original WordPress library via scripts/build-assets.sh.
 * Dimensions are recorded here to reserve layout space while they load.
 */

export type Img = { src: string; w: number; h: number; alt: string };

const photo = (src: string, w: number, h: number, alt: string): Img => ({
  src,
  w,
  h,
  alt,
});

export const brand = {
  lockup: {
    src: "/gtet-logo.png",
    w: 382,
    h: 304,
    alt: "Gram Tarang Employability Training Services Pvt. Ltd.",
  } satisfies Img,
  mark: {
    src: "/gtet-logo.png",
    w: 382,
    h: 304,
    alt: "Gram Tarang Employability Training Services Pvt. Ltd.",
  } satisfies Img,
  centurion: {
    src: "/cutm-logo.png",
    w: 657,
    h: 1024,
    alt: "Centurion University",
  } satisfies Img,
};

/**
 * The home page carousel. Each slide pairs a photograph with one programme.
 */
export const heroSlides: (Img & { caption: string; href: string })[] = [
  {
    ...photo(
      "/photos/hero/cnc.webp",
      1800,
      1200,
      "A CNC mill cutting metal, with a Renishaw probe on the machine bed",
    ),
    caption: "CNC Operator — over 1,000 technicians a year for the auto component industry",
    href: "/sectors/manufacturing",
  },
  {
    ...photo(
      "/photos/hero/sewing.webp",
      1800,
      1200,
      "A trainee sewing on a JUKI industrial machine in the apparel centre",
    ),
    caption: "Sewing Machine Operator — a three-month residential course with employment assurance",
    href: "/sectors/apparel-textiles",
  },
  {
    ...photo(
      "/photos/hero/ashok-leyland.webp",
      1800,
      1200,
      "Cutaway commercial-vehicle engines in the Ashok Leyland zonal training centre",
    ),
    caption: "Ashok Leyland Service Technician — our first industry partnership",
    href: "/sectors/automotive",
  },
];

export const heroPrimary: Img = photo(
  "/photos/hero/workshop.webp",
  1800,
  1200,
  "Trainees in Centurion ITI uniforms working on a live electrical circuit",
);

/** Atmospheric photograph for the home-page story panel. Not a portrait of a named person. */
export const storyAtmosphere: Img = photo(
  "/photos/stories/cafe-counter.webp",
  1400,
  1090,
  "A brewmaster at work on a café espresso bar",
);

/** Bhanu, from Khorda, placed at Shahi Exports in Bangalore. */
export const bhanu: Img = {
  src: "/images/hero/bhanu.webp",
  w: 1800,
  h: 820,
  alt: "Bhanu, who trained as a sewing machine operator and was placed at Shahi Exports",
};

export const sectorImages: Record<string, Img> = {
  manufacturing: photo(
    "/photos/sectors/manufacturing.webp",
    1600,
    1068,
    "A Jyoti five-axis machining centre on the Mini Tool Room floor",
  ),
  "apparel-textiles": photo(
    "/photos/sectors/apparel-textiles.webp",
    1600,
    1068,
    "Trainees spreading fabric on the cutting table in the apparel centre",
  ),
  automotive: photo(
    "/photos/sectors/automotive.webp",
    1600,
    1067,
    "Yamaha service technicians training on motorcycle engines",
  ),
  "retail-hospitality": photo(
    "/photos/sectors/retail-hospitality.webp",
    1600,
    1246,
    "A brewmaster trainee steaming milk at a café training bar",
  ),
  healthcare: photo(
    "/photos/sectors/healthcare.webp",
    1600,
    1068,
    "The emergency medicine technology lab, with hospital beds and training mannequins",
  ),
  agriculture: photo(
    "/photos/sectors/agriculture.webp",
    1280,
    720,
    "A practical agriculture assessment with trainees in the field",
  ),
  bfsi: {
    src: "/images/sectors/bfsi-2026.webp",
    w: 1536,
    h: 1024,
    alt: "A business correspondent helping a customer in a rural banking kiosk",
  },
  "beauty-wellness": photo(
    "/photos/sectors/beauty-wellness.webp",
    1600,
    900,
    "Trainees in a yoga and wellness session",
  ),
};

/** Extra photographs shown on each sector page and the sectors index. */
export const sectorGalleries: Record<string, Img[]> = {
  manufacturing: [
    photo("/photos/gallery/manufacturing-1.webp", 1400, 935, "Five-axis CNC machining centre"),
    photo("/photos/gallery/manufacturing-2.webp", 1400, 933, "CNC mill in a cutting cycle"),
    photo("/photos/gallery/manufacturing-3.webp", 1400, 933, "Electrical trainees at a live circuit board"),
    photo("/photos/gallery/manufacturing-4.webp", 1400, 935, "Wood engineering production centre"),
    photo("/photos/gallery/manufacturing-5.webp", 1400, 933, "NABL transformer laboratory"),
    photo("/photos/gallery/manufacturing-6.webp", 1400, 933, "Printing laboratory"),
  ],
  "apparel-textiles": [
    photo("/photos/gallery/apparel-1.webp", 1400, 933, "Sewing machine operator on a JUKI industrial machine"),
    photo("/photos/gallery/apparel-2.webp", 1400, 935, "Cutting table in the apparel centre"),
    photo("/photos/gallery/apparel-3.webp", 1400, 935, "Finished garments from the production line"),
    photo("/photos/gallery/apparel-4.webp", 1400, 935, "The Advance Centre of Excellence for Apparel & Textile"),
  ],
  automotive: [
    photo("/photos/gallery/automotive-1.webp", 1400, 933, "Yamaha two-wheeler service lab"),
    photo("/photos/gallery/automotive-2.webp", 1400, 933, "Ashok Leyland commercial vehicle training centre"),
    photo("/photos/gallery/automotive-3.webp", 1400, 935, "Sky Rider Auto e-rickshaw production"),
    photo("/photos/gallery/automotive-4.webp", 1400, 933, "Hyundai four-wheel service laboratory"),
    photo("/photos/gallery/automotive-5.webp", 1400, 933, "Volvo Eicher commercial vehicle training"),
  ],
  "retail-hospitality": [
    photo("/photos/gallery/retail-1.webp", 1400, 1090, "Café brewmaster training"),
  ],
  healthcare: [
    photo("/photos/gallery/healthcare-1.webp", 1400, 935, "Emergency medicine technology laboratory"),
    photo("/photos/gallery/healthcare-2.webp", 1400, 788, "Physiotherapy laboratory with suspension therapy equipment"),
    photo("/photos/gallery/healthcare-3.webp", 1400, 935, "Clinical skills practice in the healthcare lab"),
    photo("/photos/gallery/healthcare-4.webp", 1400, 788, "Rehabilitation equipment in the physiotherapy lab"),
  ],
  agriculture: [
    photo("/photos/gallery/agriculture-1.webp", 1280, 720, "Agriculture practical session"),
    photo("/photos/gallery/agriculture-2.webp", 1280, 720, "Field practical with agriculture trainees"),
    photo("/photos/gallery/agriculture-3.webp", 1400, 1050, "Village mobilisation practical group"),
    photo("/photos/gallery/agriculture-4.webp", 1400, 933, "Compost preparation in an agriculture practical"),
  ],
  "beauty-wellness": [
    photo("/photos/gallery/beauty-1.webp", 1400, 788, "Yoga and wellness training session"),
    photo("/photos/gallery/beauty-2.webp", 1400, 933, "A campus wellness session at Centurion University"),
    photo("/photos/gallery/beauty-3.webp", 1400, 788, "Group yoga practice in the wellness hall"),
    photo("/photos/gallery/beauty-4.webp", 1400, 933, "Beauty and wellness training"),
  ],
};

export const serviceImages: Record<string, Img> = {
  "skill-training": sectorImages.manufacturing,
  "workforce-solutions": photo(
    "/photos/workforce/staffing.webp",
    1400,
    935,
    "Apparel trainees on a live production floor",
  ),
  "action-learning": photo(
    "/photos/facilities/mtrtc-1.webp",
    1400,
    935,
    "Five-axis machining centre in the Mini Tool Room",
  ),
  apprenticeship: photo(
    "/photos/facilities/ashok-leyland.webp",
    1600,
    1067,
    "The Ashok Leyland zonal training centre at Bhubaneswar",
  ),
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
  photo("/photos/pedagogy/production-1.webp", 1200, 801, "A five-axis machining centre used in production training"),
  photo("/photos/pedagogy/production-2.webp", 1200, 801, "Furniture production on an industrial panel saw"),
  photo("/photos/pedagogy/production-3.webp", 1200, 800, "A printed mug produced in the printing laboratory"),
  photo("/photos/pedagogy/production-4.webp", 1200, 801, "Finished garments packed on the apparel production line"),
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
  mtrtc: [
    photo("/photos/facilities/mtrtc-1.webp", 1400, 935, "Five-axis machining centre in the Mini Tool Room"),
    photo("/photos/facilities/mtrtc-2.webp", 1400, 933, "Precision machining on the Mini Tool Room floor"),
    photo("/photos/facilities/mtrtc-3.webp", 1400, 933, "Transformer testing in the NABL-accredited laboratory"),
    photo("/photos/facilities/mtrtc-4.webp", 1400, 933, "The printing laboratory production floor"),
    photo("/photos/facilities/mtrtc-5.webp", 1400, 933, "Live CNC cutting in the tool room"),
  ],
  trainingFloor: photo(
    "/photos/facilities/training-floor.webp",
    1600,
    1068,
    "An instructor and trainee operating a Felder panel saw in the wood engineering centre",
  ),
  ashokLeyland: photo(
    "/photos/facilities/ashok-leyland.webp",
    1600,
    1067,
    "The Ashok Leyland zonal training centre at Bhubaneswar",
  ),
  skyy: photo(
    "/photos/facilities/skyy.webp",
    1600,
    1068,
    "E-rickshaw assembly at Sky Rider Auto, a live production unit",
  ),
  apparelLine: photo(
    "/photos/facilities/apparel-line.webp",
    1600,
    1067,
    "A live garment production line run by trainees",
  ),
};

/** One photograph per action-learning unit, in the same order as lib/content.ts. */
export const actionLearningPhotos: Img[] = [
  facilityImages.mtrtc[0],
  facilityImages.mtrtc[2],
  facilityImages.skyy,
  facilityImages.apparelLine,
];

export const workforceImages = {
  recruitment: photo("/photos/workforce/recruitment.webp", 1400, 933, "Technicians trained and ready for dealership deployment"),
  staffing: photo("/photos/workforce/staffing.webp", 1400, 935, "Apparel trainees on a live production floor"),
  payroll: photo("/photos/workforce/payroll.webp", 1400, 933, "Electrical trainees on the workshop floor"),
};

/** Mixed workshop photographs for pages that are not sector-specific. */
export const campusGallery: Img[] = [
  heroPrimary,
  sectorImages["apparel-textiles"],
  sectorImages.automotive,
  facilityImages.trainingFloor,
  sectorImages.healthcare,
  storyAtmosphere,
];

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
  "Centurion University": {
    src: "/cutm-logo.png",
    w: 657,
    h: 1024,
    alt: "Centurion University",
  },
  "Gram Tarang Employability Training Services Pvt. Ltd.": {
    src: "/gtet-logo.png",
    w: 382,
    h: 304,
    alt: "Gram Tarang Employability Training Services Pvt. Ltd.",
  },
};

export const docs = { wellCatalogue: "/docs/well-catalogue.pdf" };
