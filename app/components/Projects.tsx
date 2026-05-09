import Link from "next/link";
import { projects, type Project } from "../data";
import { Card, CardEyebrow, CardBody } from "./Card";
import { ArrowUpRightIcon } from "./Icons";

export function Projects() {
  return (
    <Card className="col-span-12 lg:col-span-7">
      <CardEyebrow
        action={
          <Link
            href="/projects"
            className="group/view inline-flex items-center gap-1 rounded-full px-1 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-400 transition-colors hover:text-amber-200"
          >
            View all
            <ArrowUpRightIcon className="h-3 w-3 transition-transform group-hover/view:-translate-y-0.5 group-hover/view:translate-x-0.5" />
          </Link>
        }
      >
        Projects
      </CardEyebrow>
      <CardBody className="gap-2">
        {projects.slice(0, 3).map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </CardBody>
    </Card>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const Wrapper: React.ElementType = project.href ? "a" : "div";
  const wrapperProps = project.href
    ? { href: project.href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group/proj flex flex-col gap-1 rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 py-4 transition-colors hover:border-[var(--border-strong)]"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-neutral-50">
          {project.name}
        </h3>
        {project.href ? (
          <ArrowUpRightIcon className="h-4 w-4 flex-none text-neutral-600 transition-all group-hover/proj:-translate-y-0.5 group-hover/proj:translate-x-0.5 group-hover/proj:text-amber-200" />
        ) : null}
      </div>
      <p className="text-sm leading-relaxed text-neutral-400">
        {project.description}
      </p>
    </Wrapper>
  );
}
