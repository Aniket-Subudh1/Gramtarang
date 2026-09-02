/**
 * Every piece of copy on the public site lives here.
 * Content was transcribed from the original WordPress site so that
 * editors can change wording without touching layout code.
 */

export const org = {
  name: "Gram Tarang Employability Training Services Pvt. Ltd.",
  shortName: "Gram Tarang",
  legalName: "Gram Tarang Employability Training Services Pvt. Ltd.",
  tagline: "Shaping lives, empowering communities",
  founded: 2006,
  about:
    "Gram Tarang Employability Training Services Pvt. Ltd. is a social entrepreneurial initiative in skill training working in largely underdeveloped regions of the country. We are committed to providing young people with high quality vocational education and skill training, relevant and recognised certifications, resulting in meaningful employment and successful careers in the organised sector.",
  aboutShort:
    "A social enterprise that trains young people in India's least-served districts for real jobs in the organised sector — and stays with them after placement.",
  phone: "+91 94386 03040",
  phoneHref: "+919438603040",
  email: "info@gramtarang.org.in",
  registeredOffice: {
    line1: "c/o Centurion University of Technology and Management",
    line2: "At Ramchandrapur, PO Jatni",
    line3: "Khordha, Odisha 752050, India",
  },
  feePaymentUrl: "http://m.p-y.tm/gtets_web",
  wellCatalogueUrl: "/docs/well-catalogue.pdf",
  incubatorUrl: "http://gramtarang.in/incubator.html",
  wistaUrl: "http://gramtarang.in/index.html",
};

/* ------------------------------------------------------------------ */
/* Hero + headline numbers                                             */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: "Social enterprise · Skilling since 2006",
  headline: ["Skills that hold", "where jobs don't reach."],
  lede: "We train young people from India's least-served districts for real work in the organised sector — then place them, and stay with them after they start.",
  primaryCta: { label: "Start an inquiry", href: "/contact" },
  secondaryCta: { label: "See what we teach", href: "/sectors" },
};

/**
 * Enrolments by financial year, 2006-07 to 2026-27.
 * Source: GTET year-on-year enrolment workbook (August 2026).
 * The 2019-20 peak is the Agri RPL project in Odisha, which certified
 * 70,805 farming households in a single year.
 */
export const enrolmentSeries: { fy: string; total: number; note?: string }[] = [
  { fy: "2006-07", total: 263, note: "First machinist batch at Paralakhemundi" },
  { fy: "2007-08", total: 467 },
  { fy: "2008-09", total: 1355 },
  { fy: "2009-10", total: 2864 },
  { fy: "2010-11", total: 4598, note: "NSDC's second-ever training partner" },
  { fy: "2011-12", total: 8334 },
  { fy: "2012-13", total: 9675 },
  { fy: "2013-14", total: 10140 },
  { fy: "2014-15", total: 15774 },
  { fy: "2015-16", total: 19855, note: "NAAC 'A' grade; World Youth Skills Day address" },
  { fy: "2016-17", total: 29028 },
  { fy: "2017-18", total: 43942 },
  { fy: "2018-19", total: 53108 },
  { fy: "2019-20", total: 140510, note: "Agri RPL certifies 70,805 farming households" },
  { fy: "2020-21", total: 67246, note: "Covid year; in-situ school programmes carry the load" },
  { fy: "2021-22", total: 82658 },
  { fy: "2022-23", total: 88361 },
  { fy: "2023-24", total: 98267 },
  { fy: "2024-25", total: 96802 },
  { fy: "2025-26", total: 122208 },
  { fy: "2026-27", total: 118768, note: "Year to date" },
];

export const enrolmentTotal = 1014223;

/** Life-to-date enrolments by delivery model. */
export const verticalTotals = [
  { name: "In-situ NSQF schools", total: 617602 },
  { name: "Work-integrated training & apprenticeships", total: 124048 },
  { name: "Short-term skilling", total: 172978 },
  { name: "Agriculture skilling", total: 86930 },
  { name: "Long-term TVET (ITI & diploma)", total: 12665 },
];

export const stats = [
  { value: "10.1 lakh", label: "Enrolments since 2006", note: "1,014,223 life-to-date" },
  { value: "80%", label: "Placement offers", note: "Across all verticals" },
  { value: "1.19 lakh", label: "Enrolled in 2026-27", note: "Against 263 in our first year" },
  { value: "11", label: "Skill verticals", note: "From ITI trades to agriculture" },
];

export const impactDetail = [
  {
    heading: "Scale",
    points: [
      "1,014,223 enrolments life-to-date across eleven verticals",
      "617,602 of those through in-situ NSQF programmes in schools",
      "124,048 through work-integrated training and apprenticeships",
    ],
  },
  {
    heading: "Who we reach",
    points: [
      "School dropouts, SC/ST households and first-generation earners",
      "In apparel, 70% of trainees are women and 80% are the first earner in their family",
      "Over 350 employees, including 200 trainers and 60 field mobilisation staff",
    ],
  },
  {
    heading: "What happens after",
    points: [
      "80% placement offers overall; 95% in industrial sewing, 85% in ITI trades",
      "In apparel, 42,102 of 52,628 trainees are in work, a 75% retention rate",
      "Household income up around 40% where we have measured it",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Sectors and trades                                                  */
/* ------------------------------------------------------------------ */

export type Sector = {
  slug: string;
  code: string;
  name: string;
  blurb: string;
  trades: string[];
  detail: string[];
  employers?: string[];
  /** Life-to-date enrolments, from the year-on-year workbook. */
  enrolments?: number;
  /** Share of trainees receiving a placement offer. */
  placement?: string;
};

export const sectors: Sector[] = [
  {
    slug: "manufacturing",
    enrolments: 52432,
    placement: "72%",
    code: "MFG",
    name: "Manufacturing",
    blurb:
      "Machining, fitting and electrical trades taught on production machines, not mock-ups.",
    trades: [
      "Industrial Fitter",
      "Industrial Electrician",
      "Machinist",
      "CNC Operator",
      "CNC Programmer",
      "Robotics & Mechatronics",
      "Diploma in Manufacturing",
      "Electrical",
    ],
    detail: [
      "CNC operation is one of the most sought-after courses among ITI graduates and 12th-pass youth. Gram Tarang prepares over 1,000 young technicians a year for the auto component industry, working on CNC lathe and milling production machines.",
      "Trainees are deployed with employers in Chennai, Pune and Noida. Gram Tarang also operates an HAL-empanelled Mini Tool Room producing aero engine components for the MiG and Sukhoi divisions.",
    ],
    employers: ["TVS", "Yazaki", "Motherson", "Graziano", "Samsung"],
  },
  {
    slug: "apparel-textiles",
    enrolments: 52628,
    placement: "95%",
    code: "APP",
    name: "Apparel & textiles",
    blurb:
      "A three-month residential route into the garment export industry, with an employment assurance.",
    trades: [
      "Industrial Sewing Machine Operator",
      "Line Supervisor",
      "Quality Checker",
      "Tailor",
      "Diploma in Apparel Manufacturing",
    ],
    detail: [
      "The Sewing Machine Operator course is a three-month residential programme offering employment assurance to young people with little or no formal educational qualification, feeding the garment export industry in Bangalore, Chennai and Tirupur.",
      "It is typically free for trainees through government schemes such as Aajeevika, OSEMS and OSFDC. Gram Tarang trains and places over 2,000 operators a year.",
    ],
    employers: ["Shahi Exports", "Raymond", "Texport", "Aquarelle"],
  },
  {
    slug: "automotive",
    enrolments: 26829,
    placement: undefined,
    code: "AUT",
    name: "Automotive",
    blurb:
      "Service technicians for dealerships and fleets, built with the manufacturers themselves.",
    trades: [
      "Two Wheeler Service Technician",
      "Motor Mechanic",
      "Commercial Vehicle Technician",
      "Commercial Vehicle Driver",
      "Forklift Operator",
      "Forklift Technician",
    ],
    detail: [
      "Ashok Leyland was Gram Tarang's first industry partner. The association runs a four-month residential programme for fresh ITI recruits who are then deployed as service technicians across Ashok Leyland dealerships in India.",
      "The Bhubaneswar centre doubles as the zonal training centre for skill upgradation of existing mechanics from dealerships across East and North East India.",
    ],
    employers: ["Ashok Leyland", "Tata Motors", "Hyundai", "Yamaha", "Volvo Eicher"],
  },
  {
    slug: "retail-hospitality",
    enrolments: 25136,
    placement: "78%",
    code: "RET",
    name: "Retail & hospitality",
    blurb:
      "Café and quick-service roles, including the brewmaster line built with Café Coffee Day.",
    trades: [
      "QSR Associate",
      "Café Brewmaster",
      "Diploma (Hospitality & Retail)",
      "B.Voc (Hospitality & Retail)",
    ],
    detail: [
      "The Café Coffee Day lab at the Jatni centre trains brewmasters and café associates who are deployed across cafés nationally. Several graduates have gone on to be named employee of the month at their outlets and to reach the finals of the company's national coffee competition.",
    ],
    employers: ["Café Coffee Day"],
  },
  {
    slug: "healthcare",
    enrolments: 1300,
    placement: undefined,
    code: "HLT",
    name: "Healthcare",
    blurb: "Diagnostic and theatre technician roles for district hospitals and labs.",
    trades: [
      "Medical Lab Technician",
      "OT Technician",
      "Optometry Technician",
      "X-Ray Technician",
    ],
    detail: [
      "Healthcare technician programmes are run with clinical placement partners so that trainees complete supervised hours in working labs and theatres before certification.",
    ],
  },
  {
    slug: "agriculture",
    enrolments: 86930,
    placement: "100%",
    code: "AGR",
    name: "Agriculture",
    blurb:
      "Recognition of prior learning for farmers already doing the work, plus allied trades.",
    trades: [
      "Recognition of Prior Learning (RPL)",
      "Agricultural machinery operation",
      "Allied agri-processing trades",
    ],
    detail: [
      "The Agri RPL project in Odisha certifies the skills farming households already hold, opening access to formal credit, schemes and employment that require documented competence.",
    ],
  },
  {
    slug: "bfsi",
    enrolments: 13572,
    placement: "100%",
    code: "BFS",
    name: "Banking & financial services",
    blurb:
      "Sales and service roles for banks, insurers and micro-finance lenders, with a full placement record.",
    trades: [
      "Business Correspondent / Business Facilitator",
      "Micro-finance executive",
      "Banking sales executive",
      "Insurance agent",
    ],
    detail: [
      "The BFSI programme has enrolled 13,572 people since 2010-11, and every batch assessed has received placement offers. It suits candidates with stronger literacy and numeracy who want an office-based route out of casual work.",
    ],
  },
  {
    slug: "beauty-wellness",
    enrolments: 2381,
    placement: "100%",
    code: "BWL",
    name: "Beauty & wellness",
    blurb:
      "Our newest vertical, opened in 2024-25, and almost entirely taken up by women.",
    trades: ["Beauty therapist", "Hair stylist", "Assistant spa therapist"],
    detail: [
      "Beauty and wellness opened in 2024-25 with 2,080 enrolments in its first year. It is the fastest vertical we have ever stood up, and the one with the clearest route to self-employment: many graduates open a salon rather than join one.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Method                                                              */
/* ------------------------------------------------------------------ */

export const methodPhases = [
  {
    phase: "Phase I",
    name: "Traditional learning",
    steps: [
      {
        n: 1,
        title: "Teach me",
        body: "Trade-specific knowledge, literacy, numeracy and technical fundamentals for the course.",
      },
      {
        n: 2,
        title: "Show me",
        body: "Practical demonstration in the workshop or work environment. Trainees observe tasks and procedures being completed, take notes, and learn the standard operating procedures.",
      },
    ],
  },
  {
    phase: "Phase II",
    name: "Applied learning",
    steps: [
      {
        n: 3,
        title: "Let me practise",
        body: "Industry-specification machines in a production environment, so hands-on practice happens on the equipment the job actually uses.",
      },
    ],
  },
  {
    phase: "Phase III",
    name: "Action learning",
    steps: [
      {
        n: 4,
        title: "Assess me",
        body: "Assessment is continuous. Practical learning is measured daily on accuracy, process and time taken.",
      },
      {
        n: 5,
        title: "Let me show you",
        body: "Trainees work independently in a live production environment, producing a good or service of real economic value.",
      },
      {
        n: 6,
        title: "Recognise me",
        body: "A skill championship recognises the top performers of each batch. Final certification is by independent third-party assessment through sector skill councils or NCVT.",
      },
    ],
  },
];

export const sixDimensions = [
  {
    n: 1,
    name: "Numeracy",
    body: "Using mathematical understanding to solve problems on the job — workshop measurement, calculation, basic arithmetic.",
  },
  {
    n: 2,
    name: "Literacy",
    body: "Reading and understanding the forms of communication the trade requires: spoken language, printed text, digital media.",
  },
  {
    n: 3,
    name: "Technical domain",
    body: "The trade-specific core knowledge and practical skill that constitutes expertise.",
  },
  {
    n: 4,
    name: "Professional",
    body: "The behaviours that build a career: ethics, integrity, teamwork, communication, planning, time management, leadership.",
  },
  {
    n: 5,
    name: "Life skills",
    body: "Adaptive behaviour for the demands of working life — IT literacy, financial planning, health, hygiene and sanitation.",
  },
  {
    n: 6,
    name: "Entrepreneurial",
    body: "Live production experience and incubation support for those who want to become nano, mini or micro entrepreneurs.",
  },
];

export const careerPathing = {
  heading: "Career pathing through lifelong learning",
  body: [
    "Tenth-pass youth mobilised from rural areas start on a foundation course, followed by an on-the-job training opportunity with an industry partner. For those who did not pass class ten, NIOS provides an alternate pathway.",
  ],
  workIntegrated: [
    "Contact classes in a training room inside the factory or near the hostel",
    "E-learning and self-study through content developed by Gram Tarang Employability Training Services Pvt. Ltd.",
    "Practical job work in the workshop or a nearby ITI identified by Gram Tarang Employability Training Services Pvt. Ltd.",
    "Assignments and presentations",
    "On-the-job training and job appraisal",
  ],
  assessment: [
    "DGT for ITI level (Level 3 and Level 4)",
    "Centurion University for Diploma, Advanced Diploma and B.Voc, under UGC guidelines through the DDU Kaushal Kendra scheme",
  ],
};

/* ------------------------------------------------------------------ */
/* The ecosystem — three-part model                                    */
/* ------------------------------------------------------------------ */

export const ecosystem = [
  {
    name: "MSDE, Government of India",
    role: "Policy and funding",
    points: [
      "Seed funding from the National Skill Development Corporation",
      "Granted affiliation for NCVT ITIs and implementing PMKVY",
      "Flexi MoU for the Work Integrated ITI",
      "Third-party aggregator for the DGT apprenticeship programme",
    ],
  },
  {
    name: "Centurion University",
    role: "Qualifications and certification",
    points: [
      "Provides the qualifications framework aligned to the National Skill Qualifications Framework",
      "Knowledge support through its schools of engineering, agriculture and management",
      "Accreditation and training of trainers for diploma level and above",
      "Assessment and certification",
    ],
  },
  {
    name: "Gram Tarang Employability Training Services Pvt. Ltd.",
    role: "Delivery",
    points: [
      "Implementing agency for all skill programmes across India",
      "Brings in industry partnerships for joint skill programmes and placements",
      "QP/NOS alignment with sector skill councils and skills integration with the university",
      "Mobilisation, centre setup, training, placement and post-placement support",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export const services = [
  {
    slug: "skill-training",
    name: "Skill training",
    summary:
      "Full-time and residential vocational programmes across six sectors, certified by sector skill councils, NCVT or Centurion University.",
    href: "/services/skill-training",
  },
  {
    slug: "workforce-solutions",
    name: "Workforce solutions",
    summary:
      "End-to-end recruitment, payrolling and statutory payroll compliance for employers hiring at scale.",
    href: "/services/workforce-solutions",
  },
  {
    slug: "action-learning",
    name: "Production & action learning",
    summary:
      "Trainees learn by producing goods of real economic value in live production units, including the HAL-empanelled Mini Tool Room.",
    href: "/services/action-learning",
  },
  {
    slug: "apprenticeship",
    name: "Work-integrated training & apprenticeship",
    summary:
      "Earn-while-you-learn pathways that combine paid work with contact classes, e-learning and formal certification.",
    href: "/services/apprenticeship",
  },
];

export const workforceSolutions = {
  intro:
    "We staff industries across India. Because we also train the workforce, we can source, certify, deploy and pay a team from a single relationship.",
  offerings: [
    {
      name: "End-to-end recruitment",
      body: "Sourcing from our own trainee pipeline and our field network across rural Odisha, Andhra Pradesh, Assam and Jharkhand — candidates who are already certified against the standard your role needs.",
    },
    {
      name: "Payrolling",
      body: "We hold the employment relationship, run the payroll and manage attendance, so you can scale a plant or a season without adding headcount to your own books.",
    },
    {
      name: "Statutory compliance",
      body: "PF, ESI, professional tax, minimum wage and contract labour compliance handled and documented, with audit-ready records.",
    },
  ],
};

export const actionLearning = {
  intro:
    "The final phase of every programme puts trainees into a working production unit. What they make has a buyer, a tolerance and a deadline — which is what makes the learning stick.",
  units: [
    {
      name: "Mini Tool Room & Training Centre (MTRTC)",
      body: "Set up in partnership with the Government of Odisha. The tool room is HAL-empanelled and produces aero engine components for the MiG and Sukhoi divisions alongside training precision machinists.",
    },
    {
      name: "WEL Lab",
      body: "A work-experience laboratory catalogue of production-grade equipment and job work available for training partnerships.",
    },
    {
      name: "Sky Rider Auto",
      body: "A live automotive service operation where technicians train on customer vehicles under supervision.",
    },
    {
      name: "Apparel production lines",
      body: "Full sewing lines running export-standard orders, where operators reach production speed before they are placed.",
    },
  ],
};

export const apprenticeship = {
  intro:
    "Work-integrated skill training and apprenticeship lets a young person hold a paid job and a formal qualification at the same time. Gram Tarang is a third-party aggregator for the DGT apprenticeship programme and holds a Flexi MoU with MSDE for the Work Integrated ITI.",
  howItWorks: [
    "A candidate is placed with an employer and starts earning from month one",
    "Contact classes run in a training room inside the factory or near the hostel",
    "Practical job work happens in the workshop or a nearby ITI we identify",
    "Assessment and certification follow the DGT or university route, depending on level",
  ],
};

/* ------------------------------------------------------------------ */
/* Leadership                                                          */
/* ------------------------------------------------------------------ */

export type Leader = {
  name: string;
  role: string;
  credentials: string;
  bio: string[];
  memoriam?: boolean;
};

export const leadership: Leader[] = [
  {
    name: "Prof. Mukti Mishra",
    role: "Co-founder & Chairman",
    credentials:
      "MA, MBA, PhD (Victoria, Melbourne). Adjunct Professor at Victoria University Melbourne, MDI Gurugram and XLRI Jamshedpur.",
    bio: [
      "Twenty-five years of experience across the oil industry, teaching, training, research and consultancy.",
      "Chairman and co-founder of Centurion University and Gram Tarang, Prof. Mishra is recognised nationally and internationally in the skills ecosystem. His work drives the design and implementation of the Centurion–Gram Tarang model, recognised by the Ministry of Skill Development as a Centre of Excellence.",
    ],
  },
  {
    name: "Prof. D.N. Rao",
    role: "Co-founder & Vice President",
    credentials:
      "BE (Civil), PGDM (IIM Calcutta), British Chevening Scholar. Founder of the consultancy wing at Xavier Institute of Management Bhubaneswar.",
    bio: [
      "Consultant to international and national agencies including DFID, HIVOS, GTZ, the Ministry of Power and several state governments, with years of grassroots work in Odisha's most remote districts. A key figure at XIMB, he led flagship projects for CENDRET.",
      "As co-founder, Prof. Rao keeps both institutions at the edge of technology and relevant to industry with Industry 4.0 skills, and drives partnerships including Dassault and Unity.",
    ],
  },
  {
    name: "Abhinav Madan",
    role: "Co-founder & Managing Director",
    credentials:
      "BSc Physics (St Stephen's College), MBA Finance. Seven years with GE and HP in Bangalore and Amsterdam.",
    bio: [
      "Worked across financial planning, asset management, project management, business intelligence and analytics before co-founding Gram Tarang with his two professors in 2009 and moving to Bhubaneswar to build the organisation from scratch.",
      "He brings an analytics background to delivery and operations, keeping the team focused on the metrics that have held Gram Tarang on a sustainable growth path since 2010.",
    ],
  },
  {
    name: "Swagatika Mohapatra",
    role: "Deputy Managing Director",
    credentials:
      "International Masters in Human Resource Management, Western Sydney University. A decade of corporate experience across Australia and India.",
    bio: [
      "Joined Gram Tarang in 2014. Her focus is team performance and a culture of continuous learning, empowering teams across multiple business units and mentoring young leaders towards greater organisational impact.",
    ],
  },
  {
    name: "Parthasarathi Mohanty",
    role: "Chief Operating Officer",
    credentials:
      "Twenty-eight years across manufacturing setup, skill development and operational excellence. Commercial pilot with 600 hours of solo flying.",
    bio: [
      "Established six manufacturing units for Samsung Corporation in various countries and led the garments quality team at Li & Fung. As a senior consultant with the Ministry of Textiles he implemented skill development programmes with government schemes and partners.",
      "Since joining Gram Tarang he has led multiple skill development projects and established manufacturing setups. As COO he oversees production and quality assurance, and is developing SMART manufacturing units.",
    ],
  },
  {
    name: "Debasish Panda",
    role: "Director — Finance & Operations",
    credentials:
      "BE Computer Science, MBA Finance. Fourteen years with PwC and IBM across Australia, Singapore, Europe, the USA and India.",
    bio: [
      "Joined Gram Tarang in 2016. As Director of Finance and Operations he brings project management and mentoring to the organisation, with a focus on collaboration and on new frontiers in India's skilling ecosystem.",
    ],
  },
  {
    name: "Sadat Ali",
    role: "Technical Director",
    credentials:
      "BTech, MTech (IIT Kharagpur). Faculty of Mechanical Engineering and Dean, School of Vocational Training, Centurion University.",
    bio: [
      "One of Gram Tarang's first employees, Sadat set up training operations at the Paralakhemundi campus. He leads curriculum development, pedagogy and training of trainers for technical trades, and the implementation of the Mini Tool Room project with the Government of Odisha.",
    ],
  },
  {
    name: "Aditya Saikia",
    role: "Director, Strategy & Growth (1980–2021)",
    credentials:
      "Economics, St Stephen's College Delhi. PGD International Business, ABS Netherlands. Eleven years in investment banking with Rothschild.",
    bio: [
      "Aditya joined Gram Tarang after six years as an equity capital markets and M&A banker in London, then Rothschild India in Mumbai and Delhi. Based in Guwahati, he led the rollout of Assam and North East operations, now five centres, then set up the Delhi office and led the pan-India NSQF Schools project and the Punjab centres.",
      "During Covid he scaled up the work-integrated skill training and apprenticeship programme, and became CEO of the edtech startup Lernern. He was lost to Covid in the second wave in May 2021, and is missed by colleagues and by the thousands of students he taught.",
    ],
    memoriam: true,
  },
];

/* ------------------------------------------------------------------ */
/* Centres                                                             */
/* ------------------------------------------------------------------ */

export type Centre = {
  city: string;
  state: string;
  district?: string;
  address: string[];
  contactPerson?: string;
  phone?: string[];
};

export const centreGroups: { region: string; centres: Centre[] }[] = [
  {
    region: "Odisha",
    centres: [
      {
        city: "Bhubaneswar",
        state: "Odisha",
        district: "Khordha",
        address: [
          "c/o Centurion University of Technology and Management",
          "At Ramchandrapur, PO Jatni",
          "Khordha 752050",
        ],
        contactPerson: "Ajay Kumar Rout",
        phone: ["+91 94386 03040", "+91 94381 56006"],
      },
      {
        city: "Paralakhemundi",
        state: "Odisha",
        district: "Gajapati",
        address: [
          "c/o Jagannath Institute for Technology and Management",
          "Post Seethapur, via Uppalada",
          "Paralakhemundi 761211",
        ],
        contactPerson: "Mir Sadat Ali",
        phone: ["+91 94376 19974"],
      },
      {
        city: "Keonjhar",
        state: "Odisha",
        district: "Keonjhar",
        address: ["Near Residential Govt. High School", "Main Highway at Narayanpur"],
        contactPerson: "Patel Mohanta",
        phone: ["+91 94374 48395"],
      },
      {
        city: "Bolangir",
        state: "Odisha",
        district: "Bolangir",
        address: ["Plot No 5818582, Mamulli", "PO Durgapalli, PS Bolangir Sadar"],
        contactPerson: "Pradeep Sarangi",
        phone: ["+91 94370 37148"],
      },
      {
        city: "Koraput",
        state: "Odisha",
        district: "Koraput",
        address: [
          "c/o Centre for Analytical Tribal Studies (COATS)",
          "DNK Road, Sabara Srikhetra",
          "Koraput 764020",
        ],
        contactPerson: "Durga Padhy",
        phone: ["+91 94376 18075"],
      },
      {
        city: "Balasore",
        state: "Odisha",
        district: "Balasore",
        address: ["c/o Talent +2 Science College", "Sahadevkhunta"],
        contactPerson: "Dhruba Charan Sahoo",
        phone: ["+91 93381 98340"],
      },
      {
        city: "Rayagada",
        state: "Odisha",
        district: "Rayagada",
        address: ["At Khaliguda, PO Kotepeta", "Block Rayagada, Rayagada 765001"],
        contactPerson: "Rajesh Padhy",
        phone: ["+91 94370 95990"],
      },
    ],
  },
  {
    region: "Andhra Pradesh & Telangana",
    centres: [
      {
        city: "Visakhapatnam",
        state: "Andhra Pradesh",
        district: "Visakhapatnam",
        address: ["Gidijal Junction, Padmanavam Road", "Anandapuram Mandal"],
        contactPerson: "Lokshankar Nag",
        phone: ["+91 92485 48854"],
      },
      {
        city: "Vijayawada",
        state: "Andhra Pradesh",
        district: "Krishna",
        address: [
          "Rajiv Yuva Kiranalu, Nagarjuna Nagar",
          "Opposite New Govt. Hospital",
        ],
        phone: ["+91 99898 85659", "+91 80190 11909"],
      },
      {
        city: "Hyderabad",
        state: "Telangana",
        district: "Hyderabad",
        address: [
          "c/o Khadi Gramudhyog Mahavidhyalaya",
          "Opposite Andhra Bank, Rajendra Nagar",
          "Hyderabad 500030",
        ],
        contactPerson: "P. Avinash",
        phone: ["+91 98854 73337"],
      },
    ],
  },
  {
    region: "East & North East",
    centres: [
      {
        city: "Jamshedpur",
        state: "Jharkhand",
        district: "East Singhbhum",
        address: ["c/o Govt. ITI Barmamines", "Near Masjid, Jamshedpur 831007"],
        contactPerson: "Alok Ranjan",
      },
      {
        city: "Guwahati",
        state: "Assam",
        address: ["House No. 17, KK Bhatta Road", "Chenikuthi, Guwahati 781003"],
      },
      {
        city: "Jorhat",
        state: "Assam",
        address: ["Kaziranga University", "Koraikhowa NH-37, Jorhat 785006"],
        phone: ["+91 94352 39614"],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Partners                                                            */
/* ------------------------------------------------------------------ */

export const governmentPartners = [
  { name: "MSDE — PMKVY", slug: "msde-pmkvy" },
  { name: "MoRD — DDU-GKY", slug: "mord-ddu-gky" },
  { name: "National Skill Development Corporation", slug: "nsdc" },
  { name: "Government of Odisha", slug: "odisha" },
  { name: "Government of Assam", slug: "assam" },
  { name: "Government of Punjab", slug: "punjab" },
  { name: "Government of Andhra Pradesh", slug: "andhra-pradesh" },
  { name: "Government of Jharkhand", slug: "jharkhand" },
  { name: "Government of Chhattisgarh", slug: "chhattisgarh" },
  { name: "Government of Himachal Pradesh", slug: "himachal-pradesh" },
];

export const industryPartners = [
  { name: "Ashok Leyland", slug: "ashok-leyland" },
  { name: "Tata Motors", slug: "tata-motors" },
  { name: "Hyundai", slug: "hyundai" },
  { name: "Yamaha", slug: "yamaha" },
  { name: "Volvo Eicher", slug: "volvo-eicher" },
  { name: "Café Coffee Day", slug: "cafe-coffee-day" },
  { name: "GAP P.A.C.E.", slug: "gap-pace" },
  { name: "Godrej & Boyce", slug: "godrej-boyce" },
  { name: "Garment Export Industry", slug: "garment-export-industry" },
  { name: "SEDA", slug: "seda" },
];

export const partnerNote =
  "Our consultants bring sector-specific experience and a clear view of what training a role actually needs, so the programme produces the workforce you are short of.";

/* ------------------------------------------------------------------ */
/* Recognition                                                         */
/* ------------------------------------------------------------------ */

export const awards = [
  {
    year: "2015",
    title: "NAAC accreditation, grade 'A'",
    body: "Centurion University became the youngest university in India to achieve it. The accreditation team and UGC specifically noted the skill development initiatives and skills integration.",
  },
  {
    year: "2015",
    title: "World Youth Skills Day address",
    body: "The only university invited by the Prime Minister to address the nation on World Youth Skills Day, 15 July 2015, when the National Skill Mission was launched.",
  },
  {
    year: "2013–14",
    title: "Best Performing Centre — NSDC",
    body: "The Bhubaneswar centre was named best performing centre by the National Skill Development Corporation.",
  },
  {
    year: "2012–13",
    title: "Skills Champion of India — FICCI",
    body: "Awarded at the FICCI Global Skills Summit.",
  },
  {
    year: "2011–12",
    title: "Overall Best Performer — NSDC",
    body: "Adjudged overall best performer in skill development. Also received 'Honour Roll — Skills Champion: Emerging Warrior' at the Global Skills Summit.",
  },
  {
    year: "2010",
    title: "Best Skills Project in a Rural Community",
    body: "Awarded by FICCI and the UK–India Business Council.",
  },
];

export const recognitionNotes = [
  "Recognised in Australia as a Class I university, among the top 30 universities in India.",
  "The Prime Minister's sub-group of Chief Ministers on skill development, hosted by NITI Aayog, described the Centurion model of integrating skill with higher education as ensuring appropriateness and relevance of education.",
  "Special mention by the World Bank, UNESCO, McKinsey, the British Council and the Economist in various reports.",
];

export type Story = {
  name: string;
  from: string;
  trade: string;
  quote: string;
  body: string;
};

export const stories: Story[] = [
  {
    name: "Gurudev Hansdah",
    from: "Mayurbhanj, Odisha",
    trade: "Café brewmaster",
    quote: "He had a spark in his eyes. The rest is history.",
    body: "An eighteen-year-old from Mayurbhanj walked into the Café Coffee Day lab at the Jatni centre to ask about the course and check his eligibility. He was rejected at first — he has one hand, and a customer-facing role looked unworkable. After deliberation and special approvals he was admitted on the condition that he work only in the coffee area. He went on to win the Gram Tarang Barista Championship. The area manager for Odisha and the lead coffee trainer for Café Coffee Day East were impressed enough to want him in Odisha. He now works as a brewmaster at the Richmond Road café in Bangalore, one of the company's highest-volume outlets.",
  },
  {
    name: "Pushpanjali Mallick",
    from: "Cuttack, Odisha",
    trade: "Café brewmaster",
    quote: "Problems are common, but attitude makes the difference.",
    body: "A shy girl from Cuttack who knew very little Hindi, Pushpanjali was told after her interview that she had been waitlisted. She turned up on the day of admission anyway and asked for one opportunity to prove herself. She became the best in customer service, flunked her brewmaster assessment, challenged herself and passed. She has since been named employee of the month twice — for Café in June and for Coffee Day Square in September — and was one of twelve finalists in the coffee competition.",
  },
  {
    name: "Pritisudha Panda",
    from: "Cuttack, Odisha",
    trade: "Café associate",
    quote: "She took the right decision at the right time.",
    body: "Initially a shy girl from Cuttack, Pritisudha worked in Chennai for two months before falling ill with jaundice. Her parents insisted she come home and then did not want her to go back. She convinced them, sought their blessings and returned to Chennai. She was named employee of the month for August. Her managers and her parents are proud of her, and she now faces the world with confidence.",
  },
  {
    name: "Ajit Mandal",
    from: "Bokaro, Jharkhand",
    trade: "Café associate",
    quote: "He decided to stay and face it.",
    body: "Ajit came from Batch 4 with a stammer and little confidence. He was deployed in Bangalore, a big city for a shy boy from Bokaro, and the café was far from where he lived. Coming back from a closing shift he was robbed and threatened. The colleague working with him ran away and never came back. Ajit spoke to his café manager and HR and carried on at the same café. He was named employee of the month for September.",
  },
  {
    name: "Sk Nakir",
    from: "West Bengal",
    trade: "Café associate",
    quote: "Success is a journey, not a destination.",
    body: "Nakir came from Batch 7 and a family that had never had a salaried earner — he is the first in his generation to be employed. He wanted to live life on his own terms, and through sheer work was chosen as one of the finalists of the Gram Tarang Barista Championship. He was first deployed in Mumbai, at a café on Bandstand, then transferred to Pune.",
  },
  {
    name: "Ranjeet Paricha",
    from: "Odisha",
    trade: "Data entry operator",
    quote: "He is able to support his family.",
    body: "Ranjeet's father farms and his mother keeps the house. Money problems meant he was advised to drop out of higher studies, and after his intermediate he took up farming to help his father. In July 2012 he joined a government-sponsored placement-linked programme. He was selected in the campus interviews of Hinduja Global Solutions and joined in January 2013 as a customer service associate on ₹8,743 a month. After a six-month probation he was promoted to team leader; he now works in the HGS HR team on ₹17,000 a month.",
  },
  {
    name: "Bibhu Prasad Bachha",
    from: "Kalahandi, Odisha",
    trade: "Data entry operator",
    quote: "He is supporting his younger brother through college.",
    body: "Bibhu's family income was ₹25,000 a year. He was advised to drop out of higher studies, and in June 2014 joined a government-sponsored placement-linked programme. He was selected by Aegis in Kolkata and joined that September as a customer care executive on ₹7,000 a month. Nine months later he was promoted to senior CCE on ₹10,000 and recognised as one of the best employees.",
  },
  {
    name: "Sagar Naik",
    from: "Puri, Odisha",
    trade: "BPO associate",
    quote: "The house went up within a year of the job.",
    body: "Sagar comes from a BPL family in Puri district. He went through BPO associate training under a government-sponsored placement-linked programme and was selected by Minacs in Kolkata, joining in March 2015 as a customer care executive on ₹7,000 a month. After probation he was promoted to senior CCE on ₹13,000. Construction of his family home had stalled for lack of money; he resumed and finished it within a year of starting the job, and supports his younger brother and sisters through their studies.",
  },
  {
    name: "Hadibandhu Badaseth",
    from: "Kandhamal, Odisha",
    trade: "Data entry operator",
    quote: "Deaf since childhood, employed since 2012.",
    body: "Hadibandhu is deaf, and comes from Kandhamal district. In July 2012 he joined a government-sponsored placement-linked programme as a data entry operator. He was selected by Computer Lab, Bhubaneswar as a back office executive on ₹4,000 a month. After a six-month probation he was promoted, and now works at the Cuttack branch on ₹6,000 a month.",
  },
];

/* ------------------------------------------------------------------ */
/* Careers                                                             */
/* ------------------------------------------------------------------ */

export const careers = {
  intro:
    "We hire trainers, mobilisers, placement officers, centre managers and support staff across every state we work in. Most of our senior people started at a centre.",
  whyJoin: [
    {
      title: "The work is legible",
      body: "You can see who you trained and where they are working. Nobody has to explain the point of the job.",
    },
    {
      title: "Centres run like small businesses",
      body: "A centre manager owns mobilisation, delivery, placement and cost. It is the fastest general management training we know of.",
    },
    {
      title: "We train the trainers",
      body: "Curriculum, pedagogy and technical upgradation run continuously through Centurion University's School of Vocational Training.",
    },
  ],
  roleFamilies: [
    "Trade trainers — machining, welding, sewing, automotive, healthcare",
    "Soft skills and English trainers",
    "Mobilisation and community outreach officers",
    "Placement and employer relationship managers",
    "Centre managers and operations leads",
    "Finance, compliance and MIS",
  ],
  howToApply:
    "Send a CV with the role family and the state you want to work in. We reply to every application, and we keep CVs on file for six months.",
};

/* ------------------------------------------------------------------ */
/* Inquiry form options                                                */
/* ------------------------------------------------------------------ */

export const inquiryTypes = [
  {
    value: "training",
    label: "I want to train",
    hint: "Courses, fees, hostel, eligibility",
  },
  {
    value: "hiring",
    label: "I want to hire",
    hint: "Recruitment, payrolling, compliance",
  },
  {
    value: "partnership",
    label: "Partnership or CSR",
    hint: "Government, industry, funder",
  },
  { value: "careers", label: "Working at Gram Tarang Employability Training Services Pvt. Ltd.", hint: "Roles and applications" },
  { value: "other", label: "Something else", hint: "" },
];

export const indianStates = [
  "Odisha",
  "Andhra Pradesh",
  "Telangana",
  "Assam",
  "Jharkhand",
  "Chhattisgarh",
  "Bihar",
  "West Bengal",
  "Punjab",
  "Himachal Pradesh",
  "Karnataka",
  "Tamil Nadu",
  "Maharashtra",
  "Delhi NCR",
  "Other",
];
