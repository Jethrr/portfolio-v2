"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { type Project } from "../data";
import { ArrowUpRightIcon } from "../components/Icons";
import { Pill } from "../components/Pill";

const PLACEHOLDER_GRADIENTS = [
  "from-violet-900/40 to-neutral-900",
  "from-emerald-900/40 to-neutral-900",
  "from-green-900/40 to-neutral-900",
  "from-purple-900/40 to-neutral-900",
  "from-teal-900/40 to-neutral-900",
];

function projectPerms(index: number) {
  return index % 2 === 0 ? "drwxr-xr-x" : "-rw-r--r--";
}

function ProjectPlaceholder({ name, index }: { name: string; index: number }) {
  const initials = name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const gradient = PLACEHOLDER_GRADIENTS[index % PLACEHOLDER_GRADIENTS.length];

  return (
    <div
      className={`flex h-16 w-16 flex-none items-center justify-center bg-gradient-to-br ${gradient} border border-[var(--border)] sm:h-20 sm:w-20`}
    >
      <span className="font-mono text-lg font-bold text-neutral-400 sm:text-xl">
        {initials}
      </span>
    </div>
  );
}

export function ProjectsList({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? projects.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()) ||
          p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase())),
      )
    : projects;

  return (
    <div className="flex flex-col gap-4 font-mono text-sm">
      <div className="flex flex-col gap-1">
        <label htmlFor="project-grep" className="text-[11px] text-neutral-500">
          $ grep -i &quot;query&quot; ~/projects/*
        </label>
        <input
          id="project-grep"
          type="text"
          placeholder="search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border border-[var(--border)] bg-[var(--card-soft)] px-3 py-2 text-sm text-neutral-200 placeholder:text-neutral-600 focus:border-accent/40 focus:outline-none"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="py-8 text-center text-neutral-600">
          grep: no matches for &quot;{query}&quot;
        </p>
      ) : (
        <ul className="flex flex-col gap-2">
          <li className="text-neutral-500">total {filtered.length}</li>
          {filtered.map((p, i) => (
            <li key={p.slug}>
              <Link
                href={`/projects/${p.slug}`}
                className="group/proj flex flex-col gap-3 border border-[var(--border)] p-3 transition-colors hover:border-accent/30 hover:bg-[var(--surface-subtle)] sm:flex-row sm:items-center"
              >
                {p.image ? (
                  <div className="flex h-16 w-16 flex-none items-center justify-center overflow-hidden border border-[var(--border)] sm:h-20 sm:w-20">
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <ProjectPlaceholder name={p.name} index={i} />
                )}

                <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-neutral-500">
                    <span>{projectPerms(i)}</span>
                    <span>1.{i}</span>
                    <span>dev staff</span>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-col gap-1">
                      {p.status ? (
                        <span className="text-[10px] text-accent-header">
                          [{p.status}]
                        </span>
                      ) : null}
                      <h2 className="text-base font-bold text-neutral-50 group-hover/proj:text-accent sm:text-lg">
                        {p.slug}/
                      </h2>
                    </div>
                    <ArrowUpRightIcon className="h-4 w-4 flex-none text-neutral-600 transition-all group-hover/proj:text-accent" />
                  </div>
                  <p className="line-clamp-2 text-xs leading-relaxed text-neutral-400">
                    {p.description}
                  </p>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {p.tags.slice(0, 3).map((t) => (
                      <Pill key={t} variant="muted">
                        {t}
                      </Pill>
                    ))}
                    {p.tags.length > 3 ? (
                      <span className="text-[10px] text-neutral-600">
                        +{p.tags.length - 3}
                      </span>
                    ) : null}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
