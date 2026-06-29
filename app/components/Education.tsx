"use client";

import { certifications, education } from "../data";
import { TypewriterText, useIsTabActive } from "./terminal/Typewriter";

export function EducationPanel() {
  const active = useIsTabActive("education");

  const eduJson = JSON.stringify(
    {
      degree: education.degree,
      school: education.school,
      location: education.location,
      period: education.period,
      gpa: education.gpa,
      certifications,
    },
    null,
    2,
  );

  return (
    <pre className="overflow-x-auto text-[11px] leading-relaxed text-neutral-300 sm:text-xs">
      <code>
        <TypewriterText
          active={active}
          text={eduJson}
          as="span"
          charMs={8}
          className="text-neutral-300"
        />
      </code>
    </pre>
  );
}

export function Education() {
  return <EducationPanel />;
}
