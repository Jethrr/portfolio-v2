"use client";

import { profile } from "../data";
import { MailIcon, ArrowUpRightIcon } from "./Icons";
import { TypewriterSequence, TypewriterText, useIsTabActive } from "./terminal/Typewriter";

export function ContactPanel() {
  const active = useIsTabActive("contact");

  return (
    <div className="flex flex-col gap-4">
      <TypewriterSequence
        active={active}
        lines={[
          {
            text: "I'm currently open to full-time roles and selective freelance work. The fastest way to reach me is email — I usually reply within a day.",
            as: "p",
            className: "text-sm text-neutral-300",
            charMs: 28,
          },
        ]}
      />

      <a
        href={`mailto:${profile.email}`}
        className="group inline-flex w-fit items-center gap-2 border border-accent/30 bg-[var(--accent-soft)] px-4 py-2 font-mono text-xs text-accent transition-colors hover:border-accent/50 hover:bg-accent/15"
      >
        <MailIcon className="h-3.5 w-3.5" />
        <TypewriterText
          active={active}
          text={`mailto:${profile.email}`}
          charMs={40}
          startDelay={1200}
        />
        <ArrowUpRightIcon className="h-3 w-3 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}

export function Contact() {
  return <ContactPanel />;
}
