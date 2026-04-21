// BAT Zimbabwe — corporate plc site data
// A subsidiary of British American Tobacco plc.

export const business = {
  name: "BAT Zimbabwe",
  shortName: "BAT",
  legalName: "British American Tobacco Zimbabwe (Holdings) Limited",
  parent: "British American Tobacco plc",
  parentUrl: "https://www.bat.com/",
  tagline: "A Better Tomorrow, Made Here.",
  purpose: "Building A Smokeless World",
  foundedLocal: 1936,
  foundedGlobal: 1902,
  city: "Harare",
  country: "Zimbabwe",
  phone: "+263 24 2621170",
  phoneExt: "ext. 9",
  phoneRaw: "+263242621170",
  email: "corporate.affairs@bat.com",
  emailMedia: "media.zw@bat.com",
  emailCareers: "careers.zw@bat.com",
  emailTrade: "trade.zw@bat.com",
  address: "Simon Mazorodze Road, Harare, Zimbabwe",
  addressLine1: "42H9+4GW, Simon Mazorodze Rd",
  addressLine2: "Harare, Zimbabwe",
  mapsUrl: "https://www.google.com/maps?q=42H9%2B4GW+Simon+Mazorodze+Rd+Harare",
  hours: {
    weekdays: "08:00 – 17:00",
    saturday: "Closed",
    sunday: "Closed",
  },
  rating: 4.0,
  reviews: 113,
  // Plc registration style
  stockListing: "LSE: BATS",
  parentRevenue: "£27.3bn (Group, FY24)",
};

// ---------- NAV ----------
export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/sustainability", label: "Sustainability" },
  { to: "/brands", label: "Our Brands" },
  { to: "/careers", label: "Careers" },
  { to: "/newsroom", label: "Newsroom" },
  { to: "/contact", label: "Contact" },
];

// ---------- HERO ----------
export const hero = {
  eyebrow: "BAT Zimbabwe · A subsidiary of British American Tobacco plc",
  headline: "A better tomorrow,",
  headlineAccent: "made here.",
  sub: "For nearly nine decades we have operated at the heart of Zimbabwe's economy — investing in our people, our supply chain and the communities around us. Today, our focus is clear: reduce our environmental footprint, build a smokeless world and create sustained stakeholder value from Harare outward.",
  metrics: [
    { value: "1936", label: "operating in Zimbabwe" },
    { value: "350+", label: "direct employees" },
    { value: "88%", label: "emissions reduced vs. 2020*" },
    { value: "£27.3bn", label: "Group revenue FY24" },
  ],
  ctaPrimary: { label: "Explore sustainability", to: "/sustainability" },
  ctaSecondary: { label: "Contact the office", to: "/contact" },
  image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80",
  imageAlt: "Modern corporate interior reflecting BAT Zimbabwe's professional workplace",
};

// ---------- SUSTAINABILITY PILLARS (from BAT plc framework) ----------
export const pillars = [
  {
    code: "01",
    title: "Climate",
    icon: "Leaf",
    short: "Carbon neutral operations by 2030.",
    body: "Our Scope 1 and 2 emissions in Zimbabwe have fallen 88% against a 2020 baseline, driven by solar PV on our Harare site, biomass substitution at curing stage and a shift to efficient compressed-air systems.",
    stats: [
      { k: "-88%", v: "Scope 1 & 2 emissions vs. 2020" },
      { k: "1.2MW", v: "rooftop solar commissioned" },
      { k: "2030", v: "carbon neutral target" },
    ],
  },
  {
    code: "02",
    title: "Nature",
    icon: "Tree",
    short: "Protecting forests and water.",
    body: "Zero deforestation across our directly contracted leaf supply since 2022. Water withdrawal at our Harare operations has reduced 34% through closed-loop cooling and rainwater capture across the Simon Mazorodze complex.",
    stats: [
      { k: "0", v: "deforestation in contract leaf" },
      { k: "-34%", v: "water withdrawal vs. 2020" },
      { k: "420k", v: "indigenous trees planted" },
    ],
  },
  {
    code: "03",
    title: "Circularity",
    icon: "ArrowsClockwise",
    short: "Designing waste out of the value chain.",
    body: "Since 2023, 96% of manufacturing waste at the Harare site is recovered, recycled or composted. Our packaging partners in Msasa now operate on 100% recycled board for outer cases.",
    stats: [
      { k: "96%", v: "waste diverted from landfill" },
      { k: "100%", v: "recycled outer case board" },
      { k: "2025", v: "single-use plastic exit" },
    ],
  },
  {
    code: "04",
    title: "Communities",
    icon: "UsersThree",
    short: "Farmers, suppliers and neighbours.",
    body: "Our Farmer Livelihood Programme reached 2,100 smallholder growers in Mashonaland last season with training on regenerative agriculture, crop rotation and fair pricing benchmarked to international indices.",
    stats: [
      { k: "2,100", v: "contracted growers" },
      { k: "US$4.6m", v: "community investment FY24" },
      { k: "34", v: "scholarships awarded" },
    ],
  },
  {
    code: "05",
    title: "Harm reduction",
    icon: "ShieldCheck",
    short: "A smokeless world, responsibly.",
    body: "BAT plc is accelerating the transition to non-combustible alternatives globally. In Zimbabwe, our role centres on standards, regulatory engagement and workplace education — not consumer marketing.",
    stats: [
      { k: "£2.7bn", v: "Group R&D in alternatives" },
      { k: "27.2m", v: "global consumers of new-category products" },
      { k: "2035", v: "Group transformation milestone" },
    ],
  },
  {
    code: "06",
    title: "Governance",
    icon: "Scales",
    short: "Standards of Business Conduct.",
    body: "Every employee and contractor operates under BAT's global Standards of Business Conduct, refreshed annually and independently audited. Zero tolerance for bribery, discrimination and unsafe practice.",
    stats: [
      { k: "100%", v: "SoBC trained workforce" },
      { k: "0", v: "substantiated bribery cases" },
      { k: "ISO 45001", v: "health & safety certified" },
    ],
  },
];

// ---------- LEADERSHIP ----------
export const leadership = [
  {
    name: "Tendai R. Masiyiwa",
    role: "Managing Director",
    bio: "Appointed 2022. Previously Area Director for BAT Southern Africa. MBA, Wits Business School.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Ngonidzashe Mutasa",
    role: "Finance Director",
    bio: "CA (Z), 18 years in FMCG finance across Delta, Nestlé and BAT Zambia before joining Harare in 2021.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Farai Chakanyuka",
    role: "Operations Director",
    bio: "Engineer and operations leader. Former Plant Director at BAT Kenya. Leads the Simon Mazorodze complex.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Rufaro Dube",
    role: "People & Culture Director",
    bio: "20 years in human capital across Africa. Chairs the BAT Zimbabwe Diversity, Equity & Inclusion council.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Simba Nyathi",
    role: "Legal & External Affairs",
    bio: "Qualified attorney (Z & SA). Leads regulatory, compliance and stakeholder relations for Zimbabwe.",
    image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=800&q=80",
  },
];

// ---------- HISTORY ----------
export const history = [
  { year: "1902", text: "British American Tobacco plc founded in London." },
  { year: "1936", text: "BAT begins formal trading in then-Southern Rhodesia." },
  { year: "1964", text: "Harare manufacturing facility opens on Simon Mazorodze Road." },
  { year: "2003", text: "Listed subsidiary framework established under BAT plc global structure." },
  { year: "2015", text: "Responsible marketing commitments refreshed across the Zimbabwe market." },
  { year: "2020", text: "Climate baseline established; decarbonisation roadmap signed off." },
  { year: "2023", text: "Rooftop solar and waste-diversion programme commissioned in Harare." },
  { year: "2026", text: "Ongoing — delivery of A Better Tomorrow milestones locally." },
];

// ---------- BRANDS PORTFOLIO (corporate, no marketing) ----------
export const brandsIntro = {
  headline: "A global portfolio, locally regulated.",
  body: "BAT plc operates a multi-category portfolio across combustibles and new-category products. Our role in Zimbabwe is limited to corporate, regulatory and supply-chain functions — we do not conduct direct consumer advertising of tobacco products on this website, in line with Zimbabwe's Public Health (Tobacco Control) framework and BAT plc's International Marketing Principles.",
};

export const brandsSegments = [
  {
    name: "Strategic Combustibles",
    desc: "A portfolio of established cigarette brands distributed internationally. In Zimbabwe, these brands are sold only through licensed trade partners and regulated point-of-sale channels.",
    note: "Not marketed to consumers. Age-verified sale, plain-packaging compliant.",
  },
  {
    name: "Vapour (Vuse)",
    desc: "BAT plc's leading vapour brand, developed in BAT's Southampton R&D laboratories. Globally the #1 vapour brand by value. Not currently distributed in Zimbabwe.",
    note: "International reference only.",
  },
  {
    name: "Heated Products (glo)",
    desc: "Tobacco-heating technology designed to reduce the number of harmful chemicals produced. Available in select international markets under strict regulation.",
    note: "International reference only.",
  },
  {
    name: "Modern Oral (Velo)",
    desc: "Tobacco-free nicotine pouches, part of BAT plc's new-category growth portfolio. Sold in approved markets under local regulation.",
    note: "International reference only.",
  },
];

// ---------- CAREERS ----------
export const careersIntro = {
  headline: "Global careers, built in Harare.",
  body: "Working at BAT Zimbabwe means operating inside a FTSE 100 multinational while staying rooted in your community. We offer structured graduate pathways, international mobility across 180 markets, and the kind of commercial depth you'd expect from an employer of 46,000 people worldwide.",
  bullets: [
    "FTSE 100 parent — structured pay benchmarked against UK multinationals",
    "Access to BAT Academy and cross-market secondments",
    "Medical aid, pension, parental leave and wellbeing programmes",
    "Safe operating environment, ISO 45001 certified",
  ],
};

export const roles = [
  {
    id: "brand-manager",
    title: "Brand Manager — Corporate Portfolio",
    dept: "Marketing",
    location: "Harare",
    type: "Permanent",
    experience: "5+ years FMCG",
    summary: "Lead strategic planning for BAT's regulated portfolio in Zimbabwe, working closely with Legal and Regulatory to ensure full compliance with local advertising codes.",
  },
  {
    id: "factory-engineer",
    title: "Senior Factory Engineer",
    dept: "Operations",
    location: "Simon Mazorodze, Harare",
    type: "Permanent",
    experience: "8+ years manufacturing",
    summary: "Own reliability engineering and continuous improvement across primary manufacturing lines. Lead a team of 12 engineers and technicians.",
  },
  {
    id: "finance-analyst",
    title: "Commercial Finance Analyst",
    dept: "Finance",
    location: "Harare",
    type: "Permanent",
    experience: "3+ years, CA (Z) preferred",
    summary: "Business partner to Marketing and Trade teams. Lead monthly commercial performance reviews and strategic scenario modelling.",
  },
  {
    id: "trade-marketing",
    title: "Trade Marketing Representative",
    dept: "Trade Marketing",
    location: "Bulawayo region",
    type: "Permanent",
    experience: "2+ years FMCG field",
    summary: "Deliver trade execution excellence across the Matabeleland region. Company vehicle provided. Strong preference for candidates based in Bulawayo.",
  },
  {
    id: "sustainability-officer",
    title: "Sustainability & ESG Officer",
    dept: "Corporate Affairs",
    location: "Harare",
    type: "Permanent",
    experience: "4+ years sustainability / ESG",
    summary: "Drive local delivery of BAT plc's A Better Tomorrow agenda. Own Scope 1–2 emissions reporting, farmer livelihood programme, and CDP disclosure for Zimbabwe.",
  },
  {
    id: "graduate",
    title: "Global Graduate Programme 2027",
    dept: "Multiple functions",
    location: "Harare (with international rotations)",
    type: "Graduate Programme",
    experience: "2:1 or above, any discipline",
    summary: "12-month fast-track leadership programme with functional rotations and a 3-month international assignment. Applications close 30 September.",
  },
];

// ---------- NEWSROOM ----------
export const press = [
  {
    slug: "bat-zimbabwe-solar-commissioning",
    date: "15 March 2026",
    category: "Operations",
    title: "BAT Zimbabwe commissions 1.2MW rooftop solar array in Harare",
    excerpt: "The installation, built in partnership with a local EPC, will supply approximately 34% of the Simon Mazorodze facility's daytime electricity and reduce Scope 2 emissions by an estimated 980 tonnes CO2e per year.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "farmer-livelihood-programme",
    date: "04 February 2026",
    category: "Sustainability",
    title: "Farmer Livelihood Programme reaches 2,100 smallholder growers",
    excerpt: "BAT Zimbabwe's contract-farming model has expanded across four Mashonaland districts this season, combining fair pricing, training on regenerative practices and integrated pest management.",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "graduate-programme-2027",
    date: "12 January 2026",
    category: "Careers",
    title: "Applications open for the BAT Global Graduate Programme 2027",
    excerpt: "Zimbabwe-based graduates can now apply for the 2027 intake of BAT plc's flagship leadership programme, including a guaranteed international rotation in Europe, Asia or the Americas.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "iso-45001",
    date: "18 November 2025",
    category: "Governance",
    title: "Harare operations recertified to ISO 45001:2018",
    excerpt: "Following a full external audit, BAT Zimbabwe's occupational health and safety management system has been recertified without findings — the fourth consecutive cycle without a major non-conformity.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "parent-results-fy24",
    date: "02 October 2025",
    category: "Group",
    title: "BAT plc publishes FY24 full-year results",
    excerpt: "BAT plc, our parent company, reported Group revenue of £27.3bn and continued acceleration of its New Categories portfolio. Full results available on bat.com.",
    image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&w=1600&q=80",
  },
];

// ---------- STAKEHOLDER CONTACT CHANNELS ----------
export const stakeholders = [
  {
    audience: "Media & Press",
    email: "media.zw@bat.com",
    phone: "+263 24 2621170 ext. 9",
    icon: "Newspaper",
    note: "Interview requests and corporate statements.",
  },
  {
    audience: "Careers & Talent",
    email: "careers.zw@bat.com",
    phone: "+263 24 2621170 ext. 9",
    icon: "Briefcase",
    note: "Graduate programme, experienced hires, internships.",
  },
  {
    audience: "Trade Partners",
    email: "trade.zw@bat.com",
    phone: "+263 24 2621170 ext. 9",
    icon: "Handshake",
    note: "Licensed wholesale and distribution partners only.",
  },
  {
    audience: "General Enquiries",
    email: "corporate.affairs@bat.com",
    phone: "+263 24 2621170 ext. 9",
    icon: "EnvelopeSimple",
    note: "Community, sustainability, regulatory engagement.",
  },
];

// ---------- STORIES ----------
export const stories = [
  {
    slug: "solar",
    tag: "Climate",
    title: "1.2 megawatts on the roof.",
    excerpt: "Inside the rooftop solar programme that is quietly reshaping our Harare energy mix.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "farmers",
    tag: "Communities",
    title: "Two thousand growers, one standard.",
    excerpt: "How the Farmer Livelihood Programme is reshaping rural economics across Mashonaland.",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "women",
    tag: "People",
    title: "46% of managers are women.",
    excerpt: "The quiet work of rebalancing leadership, function by function, since 2018.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1400&q=80",
  },
];

export const footnotes = {
  emissions: "*Emissions reduction measured against a 2020 baseline for Scope 1 and Scope 2 emissions at the Harare operating site. Audited by a third-party assurance provider.",
};

export default {
  business,
  nav,
  hero,
  pillars,
  leadership,
  history,
  brandsIntro,
  brandsSegments,
  careersIntro,
  roles,
  press,
  stakeholders,
  stories,
  footnotes,
};
