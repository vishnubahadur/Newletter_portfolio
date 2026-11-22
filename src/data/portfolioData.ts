export interface ExhibitSpec {
  label: string;
  value: string;
}

export interface ExhibitItem {
  id: string;
  code: string;
  categoryLabel: string;
  sourceDomain: string;
  title: string;
  caseHeadline: string;
  summary: string;
  deck: string;
  figureCaption: string;
  dateLabel: string;
  roleLabel: string;
  tags: string[];
  featured?: boolean;
  externalUrl: string;
  externalLabel: string;
  artworkKey: 'socially' | 'civicpulse' | 'startuped';
  articleParagraphs: string[];
  pullQuote: string;
  closingParagraphs: string[];
  specs: ExhibitSpec[];
  relatedIds: string[];
}

export interface LabReportRow {
  substance: string;
  code: string;
  detected: string;
  finding: 'Primary tool' | 'In use';
  tilt: string;
}

export interface LedgerEntry {
  period: string;
  title: string;
  organization: string;
  summary: string;
}

export const RESUME_PDF_PATH = '/assets/aistudio/VISHNU-BAHADUR_b62ecfb0.pdf';

export const PROFILE = {
  fullName: 'Vishnu Bahadur Budhathoki',
  mastheadName: 'Vishnu Bahadur',
  paperTitle: 'The Vishnu Bahadur Times',
  subtitle: 'The Personal Record of a Full-Stack Developer',
  locationShort: 'Gurgaon, India',
  locationFull: 'Gurgaon & Hissar, India',
  editionLabel: 'The Investigation Edition',
  established: 'Est. 2021',
  volume: 'Vol. III',
  editionTagline: 'Selected Works & Notes',
  price: 'Price: One Coffee',
  caseNumber: 'Case No. 01',
  email: 'vishnubahadur788@gmail.com',
  phone: '8826965612',
  phoneHref: 'tel:+918826965612',
  portfolioUrl: 'https://vishnubahadur.netlify.app',
  githubUrl: 'https://github.com/vishnubahadur',
  githubDisplay: 'github.com/vishnubahadur',
  linkedinUrl: 'https://www.linkedin.com/in/vishnu-bahadur-b25687184',
  linkedinDisplay: 'linkedin.com/in/vishnu-bahadur-b25687184',
  heroHeadlineStart: 'A full-stack web developer who likes building things — ',
  heroHeadlineItalic: 'front to back.',
  heroDeck:
    'Computer science graduate and MERN stack engineer: production experience at Startup Ed, real-time WebSocket systems, geospatial civic tools, and responsive React interfaces.',
  bylineLocation: 'Reporting from Gurgaon, across React, Node.js, and MongoDB',
  frontPageFacts: [
    { value: 'B. Tech', label: 'CSE · GJU S&T, Hissar' },
    { value: 'MERN', label: 'React · Node · Express · Mongo' },
    { value: 'Gurgaon', label: 'India · IST · Remote-ready' },
    { value: 'Open', label: 'Full-time & select roles' },
  ],
  bioParagraphs: [
    'The evidence puts the subject at both ends of the web stack — from responsive React interfaces animated with Tailwind CSS, GSAP, and Framer Motion to Node.js and Express REST services wired into MongoDB and Amazon RDS.',
    'At Startup Ed in Gurgaon, the brief spanned full-stack engineering: form handling, validation, CRUD workflows, JWT security middleware, AWS SDK integration for Amazon RDS, and modular DRY React components backed by Zustand stores.',
    'A B. Tech Computer Science and Engineering graduate from Guru Jambheshwar University of Science and Technology with a 6-month MERN program from DhruvOn Academy, he brings a solid foundation across web development, testing, and digital marketing — comfortable moving quickly in technology-driven environments.',
  ],
};

export const EXHIBITS: ExhibitItem[] = [
  {
    id: 'socially',
    code: 'Exhibit A',
    categoryLabel: 'Project · MERN · Real-Time Messaging',
    sourceDomain: 'github.com/vishnubahadur',
    title: 'Socially',
    caseHeadline: 'Real-time chat wired with image detection',
    summary:
      'A full-stack real-time chat application built on MongoDB, Express.js, React.js, and Node.js with Socket.IO for instant bidirectional messaging, live online/offline presence, JWT authentication, and Cloudinary media pipelines.',
    deck:
      'Bidirectional WebSocket messaging, live user presence, protected JWT sessions, and Cloudinary image handling with image detection. Engineered across the full MERN stack and tested end to end for reliability.',
    figureCaption: 'Fig. 1 — real-time chat workspace with Socket.IO presence and image detection overlay.',
    dateLabel: 'MERN · Full-Stack',
    roleLabel: 'Solo Build',
    tags: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Socket.IO',
      'JWT',
      'Cloudinary',
      'Zustand',
      'Tailwind CSS',
    ],
    featured: true,
    externalUrl: 'https://github.com/vishnubahadur',
    externalLabel: 'Inspect on GitHub',
    artworkKey: 'socially',
    articleParagraphs: [
      'Instant messaging leaves no margin for lag or dropped state. Socially was engineered on the MERN stack — MongoDB, Express.js, React.js, and Node.js — with Socket.IO driving bidirectional communication so messages and online/offline status transitions land across connected clients without polling.',
      'Access control sits at the center of the architecture. The subject designed and integrated JWT-based authentication and authorization paired with bcryptjs password hashing, cookie-parser session management, CORS controls, and protected client and server routes.',
      'Media exchange runs through Cloudinary for optimized uploads, storage, and secure image delivery, paired with image detection capabilities inside the conversation flow.',
    ],
    pullQuote:
      '“Bidirectional sockets on the wire, indexed MongoDB schemas underneath, and Cloudinary carrying the media.”',
    closingParagraphs: [
      'On the data layer, structured Mongoose schemas and MongoDB indexing keep message histories, user profiles, and chat metadata responsive under concurrent read and write traffic. Client-side navigation and state stay clean through React Router, Axios, and Zustand.',
      'Both REST endpoints and live WebSocket channels were tested thoroughly to verify session security, real-time delivery order, and resilient user experience across states.',
    ],
    specs: [
      { label: 'Front-end', value: 'React · Tailwind CSS · React Router · Zustand · Axios' },
      { label: 'Back-end', value: 'Node.js · Express · CORS · Cookie-parser' },
      { label: 'Real-time', value: 'Socket.IO · WebSockets · Presence tracking' },
      { label: 'Data', value: 'MongoDB · Mongoose · Indexed schemas' },
      { label: 'Auth & Security', value: 'JWT · bcryptjs · Protected routes' },
      { label: 'Media', value: 'Cloudinary · Image detection pipeline' },
      { label: 'Version Control', value: 'Git' },
      { label: 'Category', value: 'Full-Stack Web Application' },
    ],
    relatedIds: ['civicpulse', 'startup-ed'],
  },
  {
    id: 'civicpulse',
    code: 'Exhibit B',
    categoryLabel: 'Project · GeoSpatial · Civic Tech',
    sourceDomain: 'github.com/vishnubahadur',
    title: 'CivicPulse',
    caseHeadline: 'Crowd-sourced civic issue reporting on the map',
    summary:
      'A production-ready MERN stack platform for crowd-sourced civic issue reporting and resolution — pairing interactive Mapbox views with GeoSpatial indexing, RBAC, JWT authentication, and MongoDB aggregation pipelines.',
    deck:
      'Interactive map-based reporting backed by MongoDB GeoSpatial indexing, role-based access control, aggregation pipelines, and paginated REST APIs built for speed at scale.',
    figureCaption: 'Fig. 1 — geospatial incident map, citizen reports, and role-based resolution desk.',
    dateLabel: 'MERN · GeoSpatial',
    roleLabel: 'Full-Stack',
    tags: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'Mapbox',
      'JWT',
      'RBAC',
      'Cloudinary',
      'Tailwind CSS',
    ],
    externalUrl: 'https://github.com/vishnubahadur',
    externalLabel: 'Inspect on GitHub',
    artworkKey: 'civicpulse',
    articleParagraphs: [
      'Civic problems are inherently spatial: a pothole, broken streetlight, or drainage failure means little without exact coordinates and local context. CivicPulse puts an interactive Mapbox interface directly in front of residents so reports can be pinned, photographed, and tracked in the open.',
      'Under the hood, the Node.js and Express REST API implements MongoDB GeoSpatial indexing and aggregation pipelines to query nearby incidents, group regional issue metrics, and serve fast filtered feeds.',
      'Role-Based Access Control (RBAC) layered over JWT authentication separates citizen reporters from municipal responders and moderators, keeping issue status transitions auditable and protected.',
    ],
    pullQuote:
      '“GeoSpatial indexing, RBAC permissions, and paginated pipelines — built so every street report stays findable.”',
    closingParagraphs: [
      'Cloudinary manages uploaded field photography cleanly without bloating API payloads, while backend indexing and cursor-friendly pagination maintain crisp query performance as report volume grows.',
      'On the front end, React and Tailwind CSS deliver responsive map controls and clear reporting workflows built for everyday usability across desktop and mobile screens.',
    ],
    specs: [
      { label: 'Front-end', value: 'React · Tailwind CSS · Mapbox interactive maps' },
      { label: 'Back-end', value: 'Node.js · Express.js · REST APIs' },
      { label: 'Database', value: 'MongoDB · GeoSpatial indexing · Aggregation pipelines' },
      { label: 'Access Control', value: 'RBAC · JWT authentication' },
      { label: 'Media', value: 'Cloudinary image uploads' },
      { label: 'Performance', value: 'Database indexing · API pagination' },
      { label: 'Scope', value: 'Crowd-sourced civic reporting & resolution' },
    ],
    relatedIds: ['socially', 'startup-ed'],
  },
  {
    id: 'startup-ed',
    code: 'Exhibit C',
    categoryLabel: 'Startup Ed · Gurgaon, India',
    sourceDomain: 'vishnubahadur.netlify.app',
    title: 'Startup Ed Platform',
    caseHeadline: 'Logic-driven React tools & AWS-backed APIs',
    summary:
      'Production software engineering at Startup Ed: React logic-driven tools with Zustand state management, Node.js/Express CRUD & validation APIs, JWT security middleware, Amazon RDS via AWS SDK, and motion-rich UI.',
    deck:
      'Fourteen months on the engineering desk in Gurgaon — shipping modular React applications, Express REST services, JWT auth middleware, and Amazon RDS integrations in a fast-paced team.',
    figureCaption: 'Fig. 1 — modular React workspace, JWT middleware pipeline, and Amazon RDS data flow.',
    dateLabel: 'Jan 2021 — Mar 2022',
    roleLabel: 'Software Engineer',
    tags: [
      'React',
      'Node.js',
      'Express',
      'AWS SDK · RDS',
      'JWT',
      'Zustand',
      'Tailwind CSS',
      'Material UI',
      'GSAP',
      'Framer Motion',
    ],
    externalUrl: 'https://vishnubahadur.netlify.app',
    externalLabel: 'Visit Portfolio Site',
    artworkKey: 'startuped',
    articleParagraphs: [
      'From January 2021 through March 2022, the subject served as a Software Engineer at Startup Ed in Gurgaon, India — working across the full stack to ship dependable web applications and interactive tools.',
      'On the server side, he managed form handling, server-side validation, and CRUD operations over Node.js and Express REST APIs, integrating Amazon RDS through the AWS SDK for JavaScript and hardening routes with neatly structured JWT authentication middleware and controllers.',
      'On the client side, he adhered strictly to DRY engineering principles in React — architecting reusable components with dynamic props and lightweight Zustand stores to keep complex logic-driven tools predictable and maintainable.',
    ],
    pullQuote:
      '“DRY React components, disciplined JWT middleware, and relational data wired straight to Amazon RDS.”',
    closingParagraphs: [
      'Visual craft and responsiveness stayed first-class priorities: interfaces were crafted with Tailwind CSS and Material UI, elevated with purposeful motion via Framer Motion and GSAP across desktop and mobile viewports.',
      'Day-to-day delivery ran on Git version control and Jira sprint workflows in a collaborative, fast-moving engineering environment.',
    ],
    specs: [
      { label: 'Role', value: 'Software Engineer · Startup Ed' },
      { label: 'Tenure', value: 'January 2021 — March 2022' },
      { label: 'Location', value: 'Gurgaon, India' },
      { label: 'Front-end', value: 'JavaScript · React · HTML5 · CSS3 · Tailwind · Material UI' },
      { label: 'State & Motion', value: 'Zustand · Framer Motion · GSAP' },
      { label: 'Back-end', value: 'Node.js · Express · REST APIs · JWT middleware' },
      { label: 'Cloud & Data', value: 'Amazon RDS · AWS SDK for JS · JSON' },
      { label: 'Workflow', value: 'Git · Jira · DRY Architecture' },
    ],
    relatedIds: ['socially', 'civicpulse'],
  },
];

export const LAB_REPORT: LabReportRow[] = [
  { substance: 'React', code: 'RCT', detected: 'Front-end · Daily', finding: 'Primary tool', tilt: '-rotate-[1.5deg]' },
  { substance: 'JavaScript (ES6+)', code: 'JS', detected: 'Full-stack · Core', finding: 'Primary tool', tilt: 'rotate-[1deg]' },
  { substance: 'Node.js', code: 'NODE', detected: 'Back-end · Runtime', finding: 'Primary tool', tilt: '-rotate-[1deg]' },
  { substance: 'Express.js', code: 'EXP', detected: 'Back-end · REST APIs', finding: 'Primary tool', tilt: 'rotate-[1.5deg]' },
  { substance: 'MongoDB & Mongoose', code: 'MDB', detected: 'Database · GeoSpatial', finding: 'Primary tool', tilt: '-rotate-[1.5deg]' },
  { substance: 'Tailwind CSS', code: 'TWX', detected: 'Styling · Responsive', finding: 'Primary tool', tilt: 'rotate-[1deg]' },
  { substance: 'HTML5 & CSS3', code: 'WEB', detected: 'Front-end · Semantics', finding: 'In use', tilt: '-rotate-[1deg]' },
  { substance: 'GSAP & Framer Motion', code: 'MOT', detected: 'UI Motion · Animation', finding: 'In use', tilt: 'rotate-[1deg]' },
  { substance: 'SQL & Amazon RDS', code: 'SQL', detected: 'Relational · AWS SDK', finding: 'In use', tilt: '-rotate-[1deg]' },
  { substance: 'Socket.IO & JWT', code: 'AUTH', detected: 'WebSockets · Security', finding: 'In use', tilt: 'rotate-[1deg]' },
  { substance: 'Zustand & Material UI', code: 'UI', detected: 'State · Components', finding: 'In use', tilt: '-rotate-[1deg]' },
  { substance: 'Git, Windows & Linux', code: 'OPS', detected: 'Version control · OS', finding: 'In use', tilt: 'rotate-[1deg]' },
];

export const CAREER_LEDGER: LedgerEntry[] = [
  {
    period: 'Jan 2021 — Mar 2022',
    title: 'Software Engineer',
    organization: 'Startup Ed · Gurgaon, India',
    summary:
      'Engineered JavaScript and React logic-driven tools, Node.js/Express REST APIs for form validation and CRUD workflows, JWT security middleware, and Amazon RDS integrations via AWS SDK. Built DRY component libraries with Zustand, Tailwind CSS, Material UI, Framer Motion, and GSAP.',
  },
  {
    period: '6 Months · Cert.',
    title: 'Full Stack Web Development Program (MERN)',
    organization: 'DhruvOn Academy',
    summary:
      'Completed an intensive 6-month MERN stack certification program focused on MongoDB, Express.js, React, and Node.js — building end-to-end full-stack web applications, REST architectures, and authentication flows.',
  },
  {
    period: 'B. Tech Degree',
    title: 'B. Tech in Computer Science & Engineering',
    organization: 'Guru Jambheshwar University of Science & Technology, Hissar, Haryana',
    summary:
      'Undergraduate computer science and engineering degree laying the technical foundation in software engineering, web development, testing, databases, and digital systems.',
  },
];
