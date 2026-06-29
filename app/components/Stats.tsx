"use client";

import { stats } from "../data";
import { TypewriterSequence, TypewriterText, useIsTabActive } from "./terminal/Typewriter";

type StatsProps = {
  active?: boolean;
};

export function Stats({ active: activeProp }: StatsProps = {}) {
  const tabActive = useIsTabActive("profile");
  const active = activeProp ?? tabActive;

  return (
    <div className="border border-[var(--border)] bg-[var(--card-soft)] p-4 font-mono text-xs">
      <p className="mb-3 text-accent-header">
        <TypewriterText
          active={active}
          text="$ neofetch"
          charMs={55}
          cursorClassName="text-accent-header"
        />
      </p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-1">
            <TypewriterSequence
              active={active}
              charMs={42}
              linePauseMs={180}
              lines={[
                {
                  text: s.value,
                  as: "span",
                  className: "text-2xl font-bold text-accent",
                  charMs: 65,
                },
                {
                  text: s.label,
                  as: "span",
                  className: "text-neutral-300",
                },
                {
                  text: s.hint,
                  as: "span",
                  className: "text-[10px] text-neutral-500",
                  charMs: 35,
                },
              ]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
