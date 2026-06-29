import type { ComponentType } from "react";
import { HeroPanel } from "../Hero";
import { AboutPanel } from "../About";
import { ExperiencePanel } from "../Experience";
import { ProjectsPanel } from "../Projects";
import { TechStackPanel } from "../TechStack";
import { HighlightsPanel } from "../Now";
import { PublicationsPanel } from "../Publications";
import { EducationPanel } from "../Education";
import { ContactPanel } from "../Contact";

export type SectionDef = {
  id: string;
  label: string;
  navLabel: string;
  command: string;
  Panel: ComponentType;
};

export const SECTIONS: SectionDef[] = [
  { id: "profile", label: "index.ts", navLabel: "Profile", command: "whoami", Panel: HeroPanel },
  { id: "about", label: "about.txt", navLabel: "About", command: "cat about.txt", Panel: AboutPanel },
  { id: "experience", label: "experience.log", navLabel: "Experience", command: "git log --oneline experience", Panel: ExperiencePanel },
  { id: "projects", label: "projects/", navLabel: "Projects", command: "ls -la ~/projects", Panel: ProjectsPanel },
  { id: "stack", label: "package.json", navLabel: "Stack", command: "npm list --depth=0", Panel: TechStackPanel },
  { id: "highlights", label: "achievements.log", navLabel: "Highlights", command: "tail -f achievements.log", Panel: HighlightsPanel },
  { id: "publications", label: "papers.bib", navLabel: "Publications", command: "cat papers.bib", Panel: PublicationsPanel },
  { id: "education", label: "education.json", navLabel: "Education", command: "cat education.json", Panel: EducationPanel },
  { id: "contact", label: "contact.sh", navLabel: "Contact", command: "curl -X POST /contact", Panel: ContactPanel },
];

export const SECTION_MAP = Object.fromEntries(
  SECTIONS.map((s) => [s.id, s]),
) as Record<string, SectionDef>;

export const DEFAULT_TAB_ID = "profile";
