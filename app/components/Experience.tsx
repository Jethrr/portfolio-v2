import { experience } from "../data";
import { ArrowUpRightIcon } from "./Icons";

function fakeHash(company: string, index: number) {
  const base = company.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  return ((base + index * 17) % 0xffffff).toString(16).padStart(6, "0").slice(0, 7);
}

export function ExperiencePanel() {
  return (
    <ol className="relative flex flex-col font-mono text-sm">
      {experience.map((exp, i) => (
        <li
          key={exp.company}
          className={[
            "gsap-exp-item flex flex-col gap-3 py-4 md:flex-row md:gap-6",
            i !== experience.length - 1 ? "border-b border-[var(--border)]" : "",
          ].join(" ")}
        >
          <div className="flex flex-none flex-col gap-1 md:w-44">
            <span className="text-accent">{fakeHash(exp.company, i)}</span>
            <span className="text-[11px] text-neutral-500">{exp.period}</span>
            <span className="text-[11px] text-neutral-600">{exp.location}</span>
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-2">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
              <h3 className="font-medium text-neutral-100">{exp.role}</h3>
              <span className="text-neutral-600">—</span>
              {exp.link ? (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/co inline-flex items-center gap-1 text-accent hover:text-accent/80"
                >
                  {exp.company}
                  <ArrowUpRightIcon className="h-3 w-3 opacity-60 transition-opacity group-hover/co:opacity-100" />
                </a>
              ) : (
                <span className="text-accent">{exp.company}</span>
              )}
            </div>

            <ul className="flex flex-col gap-1.5 border-l border-[var(--border)] pl-3 text-xs leading-relaxed text-neutral-400">
              {exp.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-neutral-600" aria-hidden>
                    │
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Experience() {
  return <ExperiencePanel />;
}
