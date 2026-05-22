"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { type Project } from "../data";
import { ArrowUpRightIcon } from "../components/Icons";

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

const PLACEHOLDER_GRADIENTS = [
  "from-amber-900/40 to-neutral-900",
  "from-blue-900/40 to-neutral-900",
  "from-emerald-900/40 to-neutral-900",
  "from-violet-900/40 to-neutral-900",
  "from-rose-900/40 to-neutral-900",
];

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
      className={`flex h-20 w-20 flex-none items-center justify-center rounded-xl bg-gradient-to-br ${gradient} border border-[var(--border)] sm:h-24 sm:w-24`}
    >
      <span className="font-mono text-xl font-bold text-neutral-400 sm:text-2xl">
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
    <div className="flex flex-col gap-6">
      {/* Search */}
      <div className="relative">
        <SearchIcon className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
        <input
          type="text"
          placeholder="Search projects…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] py-3 pl-10 pr-4 font-mono text-sm text-neutral-200 placeholder:text-neutral-600 transition-colors focus:border-[var(--border-strong)] focus:outline-none"
        />
      </div>

      {/* List */}
      {filtered.length === 0 ? (
        <p className="py-10 text-center font-mono text-sm text-neutral-600">
          No projects match &ldquo;{query}&rdquo;
        </p>
      ) : (
        <ul className="flex flex-col gap-3">
          {filtered.map((p, i) => (
            <li key={p.slug}>
              <Link
                href={`/projects/${p.slug}`}
                className="group/proj flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 transition-all hover:border-amber-300/30 hover:bg-white/[0.02] sm:gap-5 sm:p-5"
              >
                {p.image ? (
                  <div className="flex h-20 w-20 flex-none items-center justify-center rounded-xl border border-[var(--border)] overflow-hidden sm:h-24 sm:w-24">
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <ProjectPlaceholder name={p.name} index={i} />
                )}

                <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-col gap-1">
                      {p.status ? (
                        <span className="w-fit rounded-full border border-amber-300/20 bg-amber-300/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber-200">
                          {p.status}
                        </span>
                      ) : null}
                      <h2 className="text-lg font-bold tracking-tight text-neutral-50 sm:text-xl">
                        {p.name}
                      </h2>
                    </div>
                    <ArrowUpRightIcon className="h-4 w-4 flex-none text-neutral-600 transition-all group-hover/proj:-translate-y-0.5 group-hover/proj:translate-x-0.5 group-hover/proj:text-amber-200" />
                  </div>
                  <p className="line-clamp-2 text-sm leading-relaxed text-neutral-400">
                    {p.description}
                  </p>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {p.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--border-strong)] px-2 py-0.5 font-mono text-[10px] text-neutral-500"
                      >
                        {t}
                      </span>
                    ))}
                    {p.tags.length > 3 ? (
                      <span className="font-mono text-[10px] text-neutral-600">
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
