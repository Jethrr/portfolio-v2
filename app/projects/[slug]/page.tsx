import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { profile, projects } from "../../data";
import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  GitHubIcon,
  GlobeIcon,
} from "../../components/Icons";
import { Pill } from "../../components/Pill";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${profile.name}`,
    description: project.description,
  };
}

function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:v=|youtu\.be\/)([^&?/]+)/);
  return match ? match[1] : null;
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const videoId = project.videoUrl ? getYouTubeId(project.videoUrl) : null;

  return (
    <main className="relative mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      {/* Back */}
      <Link
        href="/projects"
        className="group/back mb-10 inline-flex items-center gap-2 font-mono text-xs text-neutral-400 transition-colors hover:text-amber-200"
      >
        <ArrowLeftIcon className="h-3.5 w-3.5 transition-transform group-hover/back:-translate-x-0.5" />
        <span className="uppercase tracking-[0.18em]">All projects</span>
      </Link>

      {/* Header */}
      <div className="mb-10 flex flex-col gap-4">
        {project.status ? (
          <span className="w-fit rounded-full border border-amber-300/20 bg-amber-300/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-amber-200">
            {project.status}
          </span>
        ) : null}
        <h1 className="text-4xl font-bold tracking-tight text-neutral-50 sm:text-5xl">
          {project.name}
        </h1>
        <p className="font-mono text-sm text-neutral-500">{project.blurb}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>
      </div>

      {/* Video / Preview */}
      <div className="mb-8 overflow-hidden rounded-2xl border border-[var(--border)] bg-neutral-900">
        {videoId ? (
          <div className="aspect-video w-full">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`${project.name} demo video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        ) : (
          <div className="flex aspect-video w-full items-center justify-center">
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-white/[0.03]">
                <GlobeIcon className="h-5 w-5 text-neutral-600" />
              </div>
              <span className="font-mono text-xs text-neutral-600">
                No video preview — visit the live demo
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Action buttons */}
      <div className="mb-12 flex flex-wrap items-center gap-3">
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-strong)] bg-white/[0.03] px-4 py-2.5 font-mono text-xs font-medium text-neutral-200 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-neutral-100"
          >
            <GlobeIcon className="h-3.5 w-3.5" />
            Live Demo
            <ArrowUpRightIcon className="h-3 w-3 opacity-60" />
          </a>
        ) : null}
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-strong)] bg-white/[0.03] px-4 py-2.5 font-mono text-xs font-medium text-neutral-200 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-neutral-100"
          >
            <GitHubIcon className="h-3.5 w-3.5" />
            Source Code
          </a>
        ) : null}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-10 border-t border-[var(--border)] pt-10">
        <div className="flex flex-col gap-4">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
            About
          </h2>
          <p className="text-base leading-relaxed text-neutral-300">
            {project.description}
          </p>
        </div>

        {project.highlights.length > 0 ? (
          <div className="flex flex-col gap-4">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
              Highlights
            </h2>
            <ul className="flex flex-col gap-3">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 text-sm text-neutral-400"
                >
                  <span
                    aria-hidden
                    className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-amber-300/60"
                  />
                  <span className="font-mono">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </main>
  );
}
