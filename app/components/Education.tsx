import { education } from "../data";

export function EducationPanel() {
  const eduJson = JSON.stringify(
    {
      degree: education.degree,
      school: education.school,
      location: education.location,
      period: education.period,
      gpa: education.gpa,
    },
    null,
    2,
  );

  return (
    <pre className="gsap-block-item overflow-x-auto text-[11px] leading-relaxed text-neutral-300 sm:text-xs">
      <code>{eduJson}</code>
    </pre>
  );
}

export function Education() {
  return <EducationPanel />;
}
