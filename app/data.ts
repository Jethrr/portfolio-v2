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
    company: "Sanct",
    role: "Software Developer",
    period: "Nov 2025 — Present",
    location: "Remote",
    link: "https://depedmps.com/",
    bullets: [
      "Developed a full-stack MPS monitoring platform, centralizing performance data across 17 districts and 300+ schools, replacing fragmented manual workflows.",
      "Implemented CI/CD pipelines using GitHub Actions, Docker, and Coolify, reducing deployment time and improving release reliability.",
      "Optimized PostgreSQL database queries for analytics endpoints handling over 1 million score records, improving data retrieval speed by 66% (from 60s to 20s).",
    ],
  },
  {
    company: "Symph",
    role: "Software Engineer Intern",
    period: "May 2025 — Nov 2025",
    location: "Remote",
    link: "https://www.symph.co/",
    bullets: [
      "Delivered and maintained cross-platform digital solutions for startups and businesses using Next.js, React Native, and NestJS, integrated with GCP, Supabase, and Firebase cloud services.",
      "Resolved 200+ tickets spanning bug fixes, feature development, and REST API integrations across 4 client projects in Agile Scrum sprints using ClickUp, leveraging AI-augmented workflows for automation, development and decision making.",
      "Defined and enforced backend engineering standards for architecture, API design, code structure, documentation, and security, reducing onboarding time and improving codebase consistency across different teams.",
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
  features: string[];
  tags: string[];
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "kwentech",
    name: "KwenTech",
    status: "Live",
    blurb: "A rental management SaaS built for PH landlords that replaced manual paper ledgers with an automated billing engine, automated invoice generators and more.",
    description:
      "A rental management platform built for Philippine landlords — properties, tenants, follow up reminders, and  automated invoices in one app. This uses a multi-tenant SaaS architecture with PostgreSQL and Next.js .",
    href: "https://kwentech.jeth-tech.click/",
    features: ["Multi-tenant SaaS", "Property Management", "Tenant Management", "Follow Up Reminders", "Automated Invoice Management"],
    tags: ["Next.js", "PostgreSQL", "SaaS"],
    image: "/projects-images/kwentech.png",
  },
  {
    slug: "uatt",
    name: "UATT",
    status: "Featured",
    blurb: "An AI-based early sepsis prediction system for clinical decision support. My undergrad thesis.",
    description:
      "An AI-based system for early sepsis prediction that augments patient risk assessment in clinical settings. This uses a Temporal Transformer model architecure to predict sepsis in real-time. The proposed framework incorporates masked self-attention to handle variable-length and irregular sequences, along with explicit missingness encoding to preserve informative absence patterns in clinical measurements. Predictive uncertainty estimation is integrated to improve reliability in high-risk clinical decision support. Presented at the 26th Philippine Computing Science Congress in Davao City.",
    href: "https://sepsis-transformer.vercel.app/",
    features: [
      "Early sepsis prediction",
      "Real-time monitoring",
      "71% accuracy",
    ],
    videoUrl: "https://drive.google.com/file/d/16Ki20hg6AxTsDCyVYwdHVHMRGrBY1ow1/view?usp=sharing",
    tags: ["Python", "ML", "Healthcare"],
    image: "/projects-images/sepsis.webp",
  },
  {
    slug: "cropnoses",
    name: "Cropnoses",
    status: "Live",
    blurb: "An all in one hydroponics management mobile app with intelligent plant health analysis feature.",
    description:
      "All in one hydroponics management mobile app with intelligent plant health analysis feature improving lettuce crop monitoring efficiency with an accuracy of 85% using React Native, Expo, ExpressJS, MongoDB and MobileNet architecture",
    videoUrl: "https://www.youtube.com/watch?v=f44aBTyZoLU",
    features: ["Intelligent Plant Health Analysis · AI Based Insights Recommendations", "Hydroponics Management · Automated Water Management"],
    tags: ["React Native", "Express", "MongoDB", "TensorFlow"],
    image: "/projects-images/cropnoses.webp",
  },
  {

    slug: "Capstone Generator",
    name: "Capstone Generator",
    status: "Live",
    blurb: "A capstone project generator for students",
    description:
      "A capstone project generator for students, allowing them to generate capstone projects based on their course and semester.",
    href: "https://capstone-generator-sandy.vercel.app/generate",
    features: ["Capstone project generator", "Course and semester selection"],
    tags: ["Next.js", "PostgreSQL", "TailwindCSS", "AI"],
    image: "/projects-images/capstone.png",
  },
  
  {
    slug: "tihik",
    name: "Tihik",
    status: "Live",
    blurb: "Budget tracker app",
    description:
      "A budget tracker app built for personal finance management and expense tracking.",
    href: "https://tihik.vercel.app/",
    features: ["Personal finance management", "Expense tracking"],
    tags: ["Next.js", "PostgreSQL", "TailwindCSS"],
    image: "/projects-images/tihik.png",
  },
  {
    slug: "moodlequest",
    name: "MoodleQuest",
    status: "Live",
    blurb: "Gamified engagement platform for Moodle",
    description:
      "An external gamified engagement platform built for moodleLMS, allowing students to earn badges and points for completing activities and quizzes.",
    href: "https://moodlequest.vercel.app/",
    features: ["Gamified engagement", "Asynchronous learning"],
    tags: ["Next.js", "PostgreSQL", "TailwindCSS"],
    image: "/projects-images/moodlequest.png",
  },
  {
    slug: "TeknoLost",
    name: "TeknoLost",
    status: "Featured",
    blurb: "A lost and found app for campus students in CIT-U",
    description:
      "A lost and found app for campus students in CIT-U, allowing students to post and find lost and found items on the campus.",
    href: "https://teknolost.vercel.app/",
    features: ["Lost and found", "Campus students"],
    tags: ["React Native", "Expo", "TailwindCSS", "Firebase"],
    image: "/projects-images/tekno.png",
  },
  {
    slug: "GymChum",
    name: "GymChum",
    status: "Featured",
    blurb: "A gym management app for gyms to manage their members, bookings, and payments",
    description:
      "A gym management app for gyms, allowing gyms to manage their members, bookings, and payments.",
    href: "https://gymchum.vercel.app/",
    features: ["Gym management", "Member management", "Booking management", "Payment management"],
    tags: ["PHP", "MySQL", "Laravel", "Next.js"],
    image: "/projects-images/gymchum.png",
  },
  {
    slug: "Lersch Grossman Algorthm Visualizer",
    name: "Lersch Grossman Algorthm Visualizer",
    status: "Featured",
    blurb: "A visualizer for the Lersch Grossman algorithm",
    description:
      "A visualizer for the Lersch Grossman algorithm, allowing users to visualize the algorithm step by step.",
    href: "https://lersch-grossman-algorithm-visualizer.vercel.app/",
    features: ["Lersch Grossman algorithm", "Visualization"],
    tags: ["Java", "JavaFX", "Algorithms"],
    image: "/projects-images/lersch.png",
  }
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
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "C#", "C++", "PHP", "MySQL"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Vue.js", "React Native", "Expo", "TailwindCSS", "TanStack Query", "Orval", "GSAP"],
  },
  {
    label: "Backend",
    items: ["Node.js", "NestJS", "Express", "FastAPI", "ASP.NET", "Laravel", "Nx"],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "MySQL", "SQLite", "Supabase", "Firebase", "NoSQL"],
  },
  {
    label: "Cloud & DevOps",
    items: ["GitHub Actions", "Docker", "VPS", "Coolify", "Dokploy", "Vercel", "Nginx", "Cloudflare"],
  },
  {
    label: "ML / AI",
    items: ["TensorFlow", "Keras", "YOLO", "NumPy", "Pandas"],
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
  "Zuitt Learning Institute Incorporated — Javascript Elective Course",
  "Korea Test of Practical Competency in ICT (TOPCIT) — Level III Industry Standard",
  "Top 10 Philippine Agri Aqua Innovation Challenge Finalists",
  "3rd Prize SEA China International College Students' Innovation Competition",
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
