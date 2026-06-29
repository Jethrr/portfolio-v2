"use client";

import { achievements, certifications } from "../data";
import { TypewriterSequence, TypewriterText, useIsTabActive } from "./terminal/Typewriter";

export function HighlightsPanel() {
  const active = useIsTabActive("highlights");

  return (
    <div className="flex flex-col gap-6 font-mono text-sm">
      <section>
        <p className="mb-3 text-[10px] uppercase tracking-wider text-neutral-500">
          <TypewriterText
            active={active}
            text="@achievements"
            charMs={45}
            className="text-neutral-500"
          />
        </p>
        <TypewriterSequence
          active={active}
          charMs={32}
          linePauseMs={350}
          lines={achievements.map((a) => ({
            text: a.title,
            as: "p" as const,
            className: "text-neutral-100",
            prefix: "★",
          }))}
        />
      </section>

      <section className="border-t border-[var(--border)] pt-5">
        <p className="mb-3 text-[10px] uppercase tracking-wider text-neutral-500">
          <TypewriterText
            active={active}
            text="@certifications"
            charMs={45}
            startDelay={achievements.length * 400}
            className="text-neutral-500"
          />
        </p>
        <TypewriterSequence
          active={active}
          charMs={30}
          linePauseMs={320}
          lines={certifications.map((c) => ({
            text: c,
            as: "p" as const,
            className: "text-neutral-200",
            prefix: "▸",
          }))}
        />
      </section>
    </div>
  );
}

export function Now() {
  return <HighlightsPanel />;
}
