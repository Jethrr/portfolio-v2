import Link from "next/link";
import { projects, type Project } from "../data";
import { ArrowUpRightIcon } from "./Icons";

function projectPerms(index: number) {
  return index % 2 === 0 ? "drwxr-xr-x" : "-rw-r--r--";
}

export function ProjectsPanel() {
  return (
    <div className="flex flex-col font-mono text-xs">
      <div className="mb-4 flex items-center justify-between border-b border-[var(--border)] pb-2">
        <p className="text-neutral-500">total {projects.length}</p>
        <Link
          href="/projects"
          className="group/view inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-neutral-400 transition-colors hover:text-accent"
        >
          ls -la
          <ArrowUpRightIcon className="h-3 w-3 transition-transform group-hover/view:-translate-y-0.5 group-hover/view:translate-x-0.5" />
        </Link>
      </div>

      <div className="flex flex-col divide-y divide-[var(--border)]">
        {projects.map((p, i) => (
          <ProjectRow key={p.slug} project={p} index={i} />
        ))}
      </div>
    </div>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const slug = project.slug.replace(/\s+/g, "-").toLowerCase();

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group/proj block px-1 py-3 transition-colors hover:bg-[var(--surface-subtle)] sm:px-2"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[11px]">
            <span className="shrink-0 text-neutral-500">{projectPerms(index)}</span>
            <span className="shrink-0 text-neutral-500">1.{index}</span>
            <span className="shrink-0 text-neutral-600">dev staff</span>
            <span className="font-medium text-neutral-100 group-hover/proj:text-accent">
              {slug}/
            </span>
            {project.status ? (
              <span className="shrink-0 text-[10px] text-accent-header">
                [{project.status}]
              </span>
            ) : null}
          </div>

          <p className="mt-2 text-[11px] leading-relaxed text-neutral-400">
            {project.blurb}
          </p>
        </div>

        <ArrowUpRightIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-neutral-600 transition-colors group-hover/proj:text-accent" />
      </div>
    </Link>
  );
}

export function Projects() {
  return <ProjectsPanel />;
}
