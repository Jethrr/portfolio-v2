import type { Metadata } from "next";
import Link from "next/link";
import { profile, projects } from "../data";
import { ArrowLeftIcon } from "../components/Icons";
import { ProjectsList } from "./ProjectsList";
import { TerminalWindow } from "../components/terminal/TerminalWindow";
import { PromptLine } from "../components/terminal/PromptLine";

export const metadata: Metadata = {
  title: `Projects — ${profile.name}`,
  description: `A complete list of projects and case studies by ${profile.name}.`,
};

export default function ProjectsPage() {
  return (
    <div className="terminal-wallpaper min-h-screen pb-16">
      <main className="relative mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="flex flex-col gap-6">
          <Link
            href="/"
            className="group/back inline-flex w-fit items-center gap-2 font-mono text-xs text-neutral-400 transition-colors hover:text-accent"
          >
            <ArrowLeftIcon className="h-3.5 w-3.5 transition-transform group-hover/back:-translate-x-0.5" />
            <span>cd ~</span>
          </Link>

          <TerminalWindow title="~/projects">
            <div className="border-b border-[var(--border)] px-4 py-3">
              <PromptLine command="ls -la ~/projects" />
            </div>
            <div className="px-4 py-4 sm:px-5 sm:py-5">
              <p className="mb-4 text-sm text-neutral-400">
                A selection of projects across full-stack web, mobile, and applied AI.
              </p>
              <ProjectsList projects={projects} />
            </div>
          </TerminalWindow>
        </div>
      </main>
    </div>
  );
}
