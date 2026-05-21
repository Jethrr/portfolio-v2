import type { Metadata } from "next";
import Link from "next/link";
import { profile, stack } from "../data";
import { ArrowLeftIcon } from "../components/Icons";
import { Pill } from "../components/Pill";

export const metadata: Metadata = {
  title: `Tech Stack — ${profile.name}`,
  description: `Tools and technologies used by ${profile.name}.`,
};

export default function StackPage() {
  return (
    <main className="relative mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
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
            Tech Stack
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-neutral-50 sm:text-5xl">
            Tools I work with
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-neutral-400">
            Technologies across the full stack — from frontend to cloud and ML.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {stack.map((group) => (
            <div
              key={group.label}
              className="flex flex-col gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Pill key={item} variant="accent">
                    {item}
                  </Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
