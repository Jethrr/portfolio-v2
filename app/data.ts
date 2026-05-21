export const profile = {
  name: "Jether Omictin",
  role: "Just a dev who likes building stuff",
  location: "Philippines",
  email: "jethomictin@gmail.com",
  phone: "+63 945 495 1546",
  github: "github.com/Jethrr",
  githubUrl: "https://github.com/Jethrr",
  website: "jeth.me",
  websiteUrl: "https://jeth.me",
  status: "Available for full-time roles & freelance",
  tagline:
    "Full-stack developer & AI enthusiast — shipping scalable web and mobile apps end-to-end.",
  summary:
    "Hi, I'm Jether. I build practical, production-ready web and mobile, automation solutions end to end — focused on clean architecture, fast iteration, and shipping things that actually work in production.",
} as const;

export const stats = [
  { value: "2+", label: "Years experience", hint: "Freelance & internship" },
  { value: "8+", label: "Projects shipped", hint: "Web · Mobile · AI" },
  { value: "20+", label: "Tools & languages", hint: "Across the stack" },
] as const;

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  link?: string;
  bullets: string[];
  
};

export const experience: Experience[] = [
  {
    company: "Freelance | Independent Contractor",
    role: "Software Developer | Automation Specialist",
    period: "Oct 2023 — Present",
    location: "Remote",
    bullets: [
      "Developed a localized Rental Management SaaS that replaced manual paper ledgers with an automated billing engine, generating recurring invoices for 20+ units and reducing administrative workload by 70%.",
      "Engineered PDF-based automation pipelines for a US client to extract consultant commission data, reducing manual processing time by 60%.",
      "Designed and shipped production-grade web apps and automation solutions for clients and businesses.",
    ],
  },
  {
    company: "MPS Deped Region 10",
    role: "Full Stack Developer",
    period: "Nov 2025 — Present",
    location: "Remote",
    link: "https://depedmps.com/",
    bullets: [
      "Built a DepEd MPS monitoring platform that streamlined division-office workflows by centralizing performance data across schools and districts, reducing manual processing and improving data accessibility.",
      "Implemented CI/CD pipelines to improved deployment process using Coolify, Docker and Github Actions.",
      "Optimized database queries to improve data retrieval for analytics endpoints across 17 districts and 300+ schools and 1 million scores row by 66% (1min to 20s).",
    ],
  },
  {
    company: "Symph",
    role: "Software Engineer Intern",
    period: "May 2025 — Dec 2025",
    location: "Remote",
    link: "https://www.symph.co/",
    bullets: [
      "Delivered and maintained secure, cross-platform digital solutions for startups and businesses, improving scalability and development efficiency using NextJS, React Native, and NestJS with cloud services such as GCP, Supabase, and Firebase.",
      "Worked with 2 startups and 2 client projects leveraging AI-augmented workflows, REST APIs, and CI pipelines, improving delivery efficiency and contributing to up to 10% revenue growth.",
      "Collaborated with cross-functional teams (product managers, designers, and developers) in an Agile Scrum environment, improving workflow coordination and delivery efficiency using ClickUp.",
    ],
  },
  
];

export type Organization = {
  name: string;
  role: string;
  period?: string;
  link?: string;
  description?: string;
};

export const organizations: Organization[] = [
  {
    name: "Google Developer Group on Campus",
    role: "Resource Engagement Officer",
    description:
      "Drove partnerships, and event resources for a student community focused on Google technologies — coordinating workshops, study jams, and developer events at CIT-U.",
  },
  {
    name: "CITU Robotics Society",
    role: "Member",
    description:
      "Collaborated on robotics projects and competitions — exploring embedded systems, mechatronics, and applied automation alongside fellow CIT-U engineering students.",
  },
];

export type Project = {
  slug: string;
  name: string;
  blurb: string;
  description: string;
  href?: string;
  githubUrl?: string;
  videoUrl?: string;
  status?: "Live" | "Featured" | "Case study";
  highlights: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "uatt",
    name: "UATT",
    status: "Featured",
    blurb: "AI sepsis prediction · undergrad thesis",
    description:
      "An AI-based system for early sepsis prediction that augments patient risk assessment in clinical settings. Presented at the 26th Philippine Computing Science Congress in Davao City.",
    href: "https://sepsis-transformer.vercel.app/",
    highlights: [
      "Presented at 26th PCSC, Davao",
      "End-to-end model + product",
    ],
    tags: ["Python", "ML", "Healthcare"],
  },
  {
    slug: "cropnoses",
    name: "Cropnoses",
    status: "Live",
    blurb: "AI hydroponics mobile app",
    description:
      "A mobile app with intelligent plant health analysis improving lettuce crop monitoring efficiency with an accuracy of 85% using React Native, Expo, ExpressJS, MongoDB and MobileNet architecture",
    videoUrl: "https://www.youtube.com/watch?v=f44aBTyZoLU",
    highlights: ["CNN disease detection · 71% acc", "Real-time monitoring"],
    tags: ["React Native", "Express", "MongoDB", "TensorFlow"],
  },
  {
    slug: "kwentech",
    name: "KwenTech",
    status: "Live",
    blurb: "PH rental management platform",
    description:
      "A rental management platform built for Philippine landlords — properties, tenants, reminders, and invoices in one app.",
    href: "https://kwentech.jeth-tech.click/",
    highlights: ["Multi-tenant SaaS", "PH-localized billing"],
    tags: ["Next.js", "PostgreSQL", "SaaS"],
  },
  {
    slug: "tihik",
    name: "Tihik",
    status: "Live",
    blurb: "Budget tracker app",
    description:
      "A budget tracker app built for personal finance management and expense tracking.",
    href: "https://tihik.vercel.app/",
    highlights: ["Personal finance management", "Expense tracking"],
    tags: ["Next.js", "PostgreSQL", "TailwindCSS"],
  },
  {
    slug: "moodlequest",
    name: "MoodleQuest",
    status: "Live",
    blurb: "Gamified engagement platform for Moodle",
    description:
      "An external gamified engagement platform built for moodleLMS, allowing students to earn badges and points for completing activities and quizzes.",
    href: "https://moodlequest.vercel.app/",
    highlights: ["Gamified engagement", "Asynchronous learning"],
    tags: ["Next.js", "PostgreSQL", "TailwindCSS"],
  },
];

export type Publication = {
  title: string;
  venue: string;

};

export const publications: Publication[] = [
  {
    title: "Uncertainty-Aware Temporal Transformer for Early Sepsis Risk Stratification",
    venue: "PCSC (2026)",
  },
  {
    title: "MoodleQuest: Gamified Engagement for Asynchronous Learning ",
    venue: "ICETT (2026)",
  },
];

export type StackGroup = {
  label: string;
  items: string[];
};

export const stack: StackGroup[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "React Native", "TailwindCSS", "Tanstack Query", "Orval"],
  },
  {
    label: "Backend",
    items: ["NestJS", "Express", "FastAPI", ".NET", "REST APIs", "OpenAPI", "Nx"],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "Supabase", "MongoDB", "Firebase"],
  },
  {
    label: "Cloud & DevOps",
    items: ["Docker", "Coolify", "Dokploy", "Cloudflare", "GitHub Actions"],
  },
  {
    label: "ML / AI",
    items: ["TensorFlow", "Keras", "YOLO", "NumPy", "Pandas"],
  },
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C#", "SQL"],
  },
  {
    label: "CRM & CMS",
    items: ["Airtable", "HubSpot", "WordPress", "Contentful"],
  },
  {
    label: "Automation",
    items: ["N8N", "Zapier", "Make.com", "OpenClaw", "GHL"],
  },
];

export const education = {
  degree: "B.S. Computer Science",
  school: "Cebu Institute of Technology — University",
  location: "Cebu, Philippines",
  period: "Graduated",
  gpa: "GPA 4.3 / 5",
};

export const certifications = [
  "AWS Cloud Academy Graduate — Cloud Architect",
  "AWS Cloud Academy Graduate — Cloud Foundations",
  "TOPCIT Level III — Industry Standard (Korea)",
  "N8N Intermediate Level 2",
];

export const achievements = [
  {
    title: "3rd Place Southeast Asia Division Contest of China International College Students’ Innovation Competition 2025  ",
    detail: "Xiamen University Malaysia",
  },
  {
    title: "Top 10 Philippine Agri Aqua Innovation Challange Finalist",
    detail: "Department of Science and Technology",
  }, 
 
  {
    title: "26th Philippine Computing Science Congress Researcher",
    detail: "Computing Society of the Philippines",
  },

] as const;
