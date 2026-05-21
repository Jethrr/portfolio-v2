import type { Metadata } from "next";
import Link from "next/link";
import { profile, projects } from "../data";
import { ArrowLeftIcon } from "../components/Icons";
import { ProjectsList } from "./ProjectsList";

export const metadata: Metadata = {
  title: `Projects — ${profile.name}`,
  description: `A complete list of projects and case studies by ${profile.name}.`,
};

export default function ProjectsPage() {
  return (
    <main className="relative mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="flex flex-col gap-10">
        <Link
          href="/"
          className="group/back inline-flex w-fit items-center gap-2 font-mono text-xs text-neutral-400 transition-colors hover:text-amber-200"
        >
          <ArrowLeftIcon className="h-3.5 w-3.5 transition-transform group-hover/back:-translate-x-0.5" />
          <span className="uppercase tracking-[0.18em]">Back to home</span>
        </Link>

        <header className="flex flex-col gap-3">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
            <span className="inline-block h-[1px] w-4 bg-neutral-700" />
            Projects
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-neutral-50 sm:text-5xl">
            Things I&apos;ve built
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-400">
            A selection of projects across full-stack web, mobile, and applied
            AI — from research to production. Each one taught me something
            different about shipping software that holds up.
          </p>
        </header>

        <ProjectsList projects={projects} />
      </div>
    </main>
  );
}
