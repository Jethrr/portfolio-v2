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
import { TerminalWindow } from "../../components/terminal/TerminalWindow";
import { PromptLine } from "../../components/terminal/PromptLine";

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

type VideoEmbed =
  | { type: "youtube"; id: string }
  | { type: "gdrive"; id: string }
  | { type: "video"; url: string }
  | { type: "iframe"; url: string };

function resolveVideo(url: string): VideoEmbed | null {
  if (!url) return null;

  const ytMatch = url.match(/(?:v=|youtu\.be\/)([^&?/]+)/);
  if (ytMatch) return { type: "youtube", id: ytMatch[1] };

  const gdMatch = url.match(/drive\.google\.com\/file\/d\/([^/?]+)/);
  if (gdMatch) return { type: "gdrive", id: gdMatch[1] };
  const gdOpenMatch = url.match(/drive\.google\.com\/open\?id=([^&]+)/);
  if (gdOpenMatch) return { type: "gdrive", id: gdOpenMatch[1] };

  if (/\.(mp4|webm|mov|ogg)(\?|$)/i.test(url)) return { type: "video", url };

  return { type: "iframe", url };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const videoEmbed = project.videoUrl ? resolveVideo(project.videoUrl) : null;
  const readmePath = `projects/${project.slug}/README.md`;

  return (
    <div className="terminal-wallpaper min-h-screen pb-16">
      <main className="relative mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <Link
          href="/projects"
          className="group/back mb-6 inline-flex items-center gap-2 font-mono text-xs text-neutral-400 transition-colors hover:text-accent"
        >
          <ArrowLeftIcon className="h-3.5 w-3.5 transition-transform group-hover/back:-translate-x-0.5" />
          <span>cd ../projects</span>
        </Link>

        <TerminalWindow title={readmePath}>
          <div className="border-b border-[var(--border)] px-4 py-3">
            <PromptLine command={`cat ${readmePath}`} />
          </div>

          <div className="flex flex-col gap-6 px-4 py-5 sm:px-5">
            {project.status ? (
              <span className="w-fit font-mono text-[10px] text-accent-header">
                [{project.status}]
              </span>
            ) : null}
            <h1 className="text-2xl font-bold text-neutral-50 sm:text-3xl">
              # {project.name}
            </h1>
            <p className="font-mono text-sm text-neutral-500">{project.blurb}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>

            <div className="overflow-hidden border border-[var(--border)] bg-neutral-900">
              {videoEmbed?.type === "youtube" ? (
                <div className="aspect-video w-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoEmbed.id}`}
                    title={`${project.name} demo video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
              ) : videoEmbed?.type === "gdrive" ? (
                <div className="aspect-video w-full">
                  <iframe
                    src={`https://drive.google.com/file/d/${videoEmbed.id}/preview`}
                    title={`${project.name} demo video`}
                    allow="autoplay"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
              ) : videoEmbed?.type === "video" ? (
                <div className="aspect-video w-full">
                  <video
                    src={videoEmbed.url}
                    controls
                    className="h-full w-full"
                    title={`${project.name} demo video`}
                  />
                </div>
              ) : videoEmbed?.type === "iframe" ? (
                <div className="aspect-video w-full">
                  <iframe
                    src={videoEmbed.url}
                    title={`${project.name} demo video`}
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
              ) : (
                <div className="flex aspect-video w-full items-center justify-center">
                  <div className="flex flex-col items-center gap-3 text-center">
                    <GlobeIcon className="h-5 w-5 text-neutral-600" />
                    <span className="font-mono text-xs text-neutral-600">
                      no preview — run ./run-demo.sh
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-accent/30 bg-[var(--accent-soft)] px-4 py-2 font-mono text-xs text-accent transition-colors hover:border-accent/50"
                >
                  <GlobeIcon className="h-3.5 w-3.5" />
                  ./run-demo.sh
                  <ArrowUpRightIcon className="h-3 w-3 opacity-60" />
                </a>
              ) : null}
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[var(--border-strong)] bg-[var(--surface-subtle)] px-4 py-2 font-mono text-xs text-neutral-200 transition-colors hover:border-accent/30 hover:text-accent"
                >
                  <GitHubIcon className="h-3.5 w-3.5" />
                  git clone
                </a>
              ) : null}
            </div>

            <div className="flex flex-col gap-4 border-t border-[var(--border)] pt-6">
              <h2 className="font-mono text-xs text-accent-header">## About</h2>
              <p className="text-sm leading-relaxed text-neutral-300">
                {project.description}
              </p>
            </div>

            {project.features.length > 0 ? (
              <div className="flex flex-col gap-3">
                <h2 className="font-mono text-xs text-accent-header">## Features</h2>
                <ul className="flex flex-col gap-2 font-mono text-sm text-neutral-400">
                  {project.features.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="text-accent" aria-hidden>
                        *
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </TerminalWindow>
      </main>
    </div>
  );
}
