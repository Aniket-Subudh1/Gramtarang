/**
 * Every piece of copy on the public site lives here.
 * Content was transcribed from the original WordPress site so that
 * editors can change wording without touching layout code.
 */

export const org = {
  name: "Gram Tarang Employability Training Services",
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
  wellCatalogueUrl:
    "https://gramtarang.org.in/wp-content/uploads/2021/08/WELL-Catalogue-LR.pdf",
  incubatorUrl: "http://gramtarang.in/incubator.html",
  wistaUrl: "http://gramtarang.in/index.html",
};

/* ------------------------------------------------------------------ */
/* Hero + headline numbers                                             */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: "Social enterprise · Skilling since 2006",
  headline: ["Skills that hold,", "in the places", "jobs don't reach."],
  lede: "We train school dropouts, tribal youth and first-generation earners from rural Odisha, Andhra Pradesh, Assam and Jharkhand for skilled work in manufacturing, apparel, automotive and healthcare — then place them, and keep in touch after they start.",
  primaryCta: { label: "Start an inquiry", href: "/contact" },
  secondaryCta: { label: "See what we teach", href: "/sectors" },
};

/** The hero scale bar: one tick per 1,000 people trained. */
export const scaleBar = {
  totalThousands: 70,
  unit: "1 mark = 1,000 people trained",
  milestones: [
    { at: 1, year: "2006", note: "First machinist batch, Paralakhemundi" },
    { at: 12, year: "2010", note: "NSDC's second-ever training partner" },
    { at: 30, year: "2015", note: "NAAC 'A' grade; 16,034 trained that year" },
    { at: 52, year: "2019", note: "Pan-India, 30+ centres" },
    { at: 70, year: "Today", note: "70,000+ trained, 80% placed" },
  ],
};

export const stats = [
  { value: "70,000+", label: "Young people trained", note: "Across every sector we run" },
  { value: "80%", label: "Average placement rate", note: "Into organised-sector jobs" },
  { value: "60%", label: "From SC/ST households", note: "Largely tribal communities" },
  { value: "50%+", label: "Women", note: "Of everyone we train" },
];

export const impactDetail = [
  {
    heading: "Training capability",
    points: [
      "Over 350 employees, including 200 trainers and 60 field mobilisation staff",
      "Training across automotive, manufacturing, apparel, retail and hospitality, ITES and BFSI",
    ],
  },
  {
    heading: "Who we reach",
    points: [
      "40% of those trained are school dropouts",
      "60% come from SC/ST households, mainly tribal communities",
      "Over half are women",
    ],
  },
  {
    heading: "Track record",
    points: [
      "Five-year compound growth of 70%",
      "16,034 people trained in FY 2014–15 alone",
      "Placement record averaging 80%",
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
};

export const sectors: Sector[] = [
  {
    slug: "manufacturing",
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
    "E-learning and self-study through content developed by Gram Tarang",
    "Practical job work in the workshop or a nearby ITI identified by Gram Tarang",
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
    name: "Gram Tarang",
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
    body: "An eighteen-year-old from Mayurbhanj walked into the Café Coffee Day lab at Jatni to ask about the course. He was turned down at first — he has one hand, and a customer-facing role looked unworkable. After deliberation and special approvals he was admitted on the condition that he work only in the coffee area. He went on to win the Gram Tarang Barista Championship. The area manager and lead coffee trainer for Café Coffee Day East were impressed enough to want him in Odisha. He now works as a brewmaster at one of the company's highest-volume cafés on Richmond Road, Bangalore.",
  },
  {
    name: "Pushpanjali Mallick",
    from: "Cuttack, Odisha",
    trade: "Café brewmaster",
    quote: "Problems are common, but attitude makes the difference.",
    body: "A shy girl from Cuttack who spoke very little Hindi, Pushpanjali was waitlisted after her interview. She turned up on the day of admission anyway and asked for one chance to prove herself. She became the best in customer service, failed her first brewmaster assessment, and challenged herself again. She has since been named employee of the month twice and was one of twelve finalists in the national coffee competition.",
  },
  {
    name: "Ranjeet Paricha",
    from: "Odisha",
    trade: "Data entry operator",
    quote: "He is able to support his family.",
    body: "Ranjeet's father farms and his mother keeps the house. Money problems meant he was advised to drop out of higher studies, and after his intermediate he took up farming too. In July 2012 he joined a government-sponsored placement-linked programme. He was selected in campus interviews by Hinduja Global Solutions and joined in January 2013 as a customer service associate on ₹8,743 a month. After probation he was promoted to team leader; he now works in the HGS HR team on ₹17,000 a month.",
  },
  {
    name: "Bibhu Prasad Bachha",
    from: "Kalahandi, Odisha",
    trade: "Data entry operator",
    quote: "He is supporting his younger brother through college.",
    body: "Bibhu's family income was ₹25,000 a year. He joined a government-sponsored placement-linked programme in June 2014 and was selected by Aegis in Kolkata, joining that September as a customer care executive on ₹7,000 a month. Nine months later he was promoted to senior CCE on ₹10,000 and recognised as one of the best employees.",
  },
  {
    name: "Ajit Mandal",
    from: "Bokaro, Jharkhand",
    trade: "Café associate",
    quote: "He decided to stay and face it.",
    body: "Ajit stammered and had little confidence when he arrived. Deployed in Bangalore, far from his residence, he was robbed and threatened on the way back from a closing shift. His colleague left and never returned; Ajit spoke to his café manager and HR and stayed in the same café. He was named employee of the month that September.",
  },
  {
    name: "Hadibandhu Badaseth",
    from: "Kandhamal, Odisha",
    trade: "Data entry operator",
    quote: "Deaf since childhood, employed since 2012.",
    body: "Hadibandhu joined a government-sponsored placement-linked programme in July 2012 and was hired by Computer Lab, Bhubaneswar as a back office executive. After probation he was promoted, and now works at the Cuttack branch.",
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
  { value: "careers", label: "Working at Gram Tarang", hint: "Roles and applications" },
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
