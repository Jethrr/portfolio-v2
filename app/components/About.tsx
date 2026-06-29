"use client";

import { profile } from "../data";
import { TypewriterSequence, useIsTabActive } from "./terminal/Typewriter";

export function AboutPanel() {
  const active = useIsTabActive("about");

  return (
    <TypewriterSequence
      active={active}
      lines={[
        {
          text: profile.summary,
          as: "p",
          className: "text-sm leading-relaxed text-neutral-300 sm:text-base",
        },
      ]}
    />
  );
}

export function About() {
  return <AboutPanel />;
}
