export const profile = {
  name: "Jether Omictin",
  role: "Full Stack Developer",
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
    "Hi, I'm Jether. I build practical, production-ready web and mobile systems end to end — focused on clean architecture, fast iteration, and shipping things that actually work in production.",
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
    role: "Web Developer | Automation Specialist",
    period: "Oct 2023 — Present",
    location: "Remote",
    bullets: [
      "Developed a localized Rental Management SaaS that replaced manual paper ledgers with an automated billing engine, generating recurring invoices for 20+ units and reducing administrative workload by 50%.",
      "Engineered PDF-based automation pipelines for a US client to extract consultant commission data, reducing manual processing time by 60%.",
      "Designed and shipped production-grade app solutions for clients and businesses",
    ],
  },
  {
    company: "MPS Deped Region 10",
    role: "Full Stack Developer",
    period: "Oct 2024 — Present",
    location: "Remote",
    link: "https://depedmps.com/",
    bullets: [
      "Designed and developed a DepEd MPS monitoring platform that consolidates performance data across schools and districts, automating manual division-office workflows.",
      "Implemented CI/CD pipelines to improved deployment process using Coolify, Docker and Github Actions",
      "Optimized database queries to improve data retrieval for analytics handling across 17+ districts and 100+ schools and 30k+ scores row.",
    ],
  },
  {
    company: "Symph",
    role: "Software Engineer Intern",
    period: "May 2025 — Dec 2025",
    location: "Remote",
    link: "https://www.symph.co/",
    bullets: [
      "Led development of b1gplay, enabling 100+ recruiter–student connections and increasing athlete visibility.",
      "Optimized findmyshots disbursement queries, cutting load times by 83% (3 min → 30 s).",
      "Built core modules (enrollment, attendance, automated Time-In/Out) for SOTG, integrating Semaphore SMS for real-time parent notifications.",
      "Resolved PayMongo payment integration and shipped a VAT breakdown UI for clearer checkout pricing.",
      "Authored NestJS engineering standards covering modular architecture, conventions, and API design.",
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
  name: string;
  blurb: string;
  description: string;
  href?: string;
  hrefLabel?: string;
  status?: "Live" | "Featured" | "Case study";
  highlights: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
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
    name: "Cropnoses",
    status: "Live",
    blurb: "AI hydroponics mobile app",
    description:
      "AI-powered hydroponics app with intelligent plant health analysis, CNN-based disease detection at 71% accuracy, and a real-time monitoring dashboard.",
    href: "https://www.youtube.com/watch?v=f44aBTyZoLU&feature=youtu.be",
    highlights: ["CNN disease detection · 71% acc", "Real-time monitoring"],
    tags: ["React Native", "Express", "MongoDB", "TensorFlow"],
  },
  {
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
    name: "MoodleQuest",
    status: "Live",
    blurb: "Gamified engagement platform for Moodle",
    description:
      "A external gamified engagement platform built for moodleLMS, allowing students to earn badges and points for completing activities and quizzes.",
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
    title: "26th Philippine Computing Science Congress",
    detail: "Computing Society of the Philippines",
  },

] as const;
