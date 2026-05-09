import type { Metadata } from "next";
import Link from "next/link";
import { profile, projects, type Project } from "../data";
import { ArrowLeftIcon, ArrowUpRightIcon } from "../components/Icons";
import { Pill } from "../components/Pill";

export const metadata: Metadata = {
  title: `Projects — ${profile.name}`,
  description: `A complete list of projects and case studies by ${profile.name}.`,
};

export default function ProjectsPage() {
  return (
    <main className="relative mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
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

        <ul className="reveal-children grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li key={p.name} className="h-full">
              <ProjectShowcase project={p} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

function ProjectShowcase({ project }: { project: Project }) {
  const Wrapper: React.ElementType = project.href ? "a" : "div";
  const wrapperProps = project.href
    ? { href: project.href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group/proj flex h-full flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-colors hover:border-[var(--border-strong)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-2">
          {project.status ? (
            <span className="w-fit rounded-full border border-amber-300/20 bg-amber-300/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber-200">
              {project.status}
            </span>
          ) : null}
          <h2 className="text-2xl font-bold tracking-tight text-neutral-50 sm:text-3xl">
            {project.name}
          </h2>
          <p className="font-mono text-xs text-neutral-500">{project.blurb}</p>
        </div>
        {project.href ? (
          <ArrowUpRightIcon className="h-5 w-5 flex-none text-neutral-600 transition-all group-hover/proj:-translate-y-0.5 group-hover/proj:translate-x-0.5 group-hover/proj:text-amber-200" />
        ) : null}
      </div>

      <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">
        {project.description}
      </p>

      {project.highlights.length > 0 ? (
        <ul className="flex flex-col gap-1.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-xs text-neutral-400">
              <span aria-hidden className="h-1 w-1 flex-none rounded-full bg-amber-300/60" />
              <span className="font-mono">{h}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {project.tags.length > 0 ? (
        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>
      ) : null}
    </Wrapper>
  );
}
