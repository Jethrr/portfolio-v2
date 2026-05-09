"use client";
import { profile } from "../data";
import {
  ArrowUpRightIcon,
  GitHubIcon,
  GlobeIcon,
  MailIcon,
} from "./Icons";

export function Contact() {
  return (
    <section className="col-span-12 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 sm:p-9">
      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto]">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
            Get in touch
          </span>
          <h2 className="font-display text-3xl leading-tight tracking-tight text-neutral-50 sm:text-4xl">
            Let&apos;s build something
            <span className="italic text-neutral-400"> great</span> together.
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-neutral-400">
            I&apos;m currently open to full-time roles and selective freelance work.
            The fastest way to reach me is email — I usually reply within a day.
          </p>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-5 py-2.5 text-sm font-medium text-amber-100 transition-colors hover:bg-amber-300/15 hover:border-amber-300/50"
          >
            <MailIcon className="h-4 w-4" />
            <span onClick={() => window.location.href = `mailto:${profile.email}`}>Send me an email</span>
            <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          
        </div>
      </div>
    </section>
  );
}
