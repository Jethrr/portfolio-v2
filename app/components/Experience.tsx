import { experience } from "../data";
import { Card, CardBody, CardEyebrow } from "./Card";
import { ArrowUpRightIcon } from "./Icons";

export function Experience() {
  return (
    <Card className="col-span-12">
      <CardEyebrow>Experience</CardEyebrow>
      <CardBody className="gap-0">
        <ol className="relative flex flex-col">
          {experience.map((exp, i) => (
            <li
              key={exp.company}
              className={[
                "gsap-exp-item grid grid-cols-1 gap-4 py-5 md:grid-cols-[180px_1fr]",
                i !== experience.length - 1 ? "border-b border-[var(--border)]" : "",
              ].join(" ")}
            >
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                  {exp.period}
                </span>
                <span className="text-xs text-neutral-500">{exp.location}</span>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <h3 className="text-base font-medium text-neutral-100">
                    {exp.role}
                  </h3>
                  <span className="text-neutral-600">·</span>
                  {exp.link ? (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/co inline-flex items-center gap-1 text-base text-amber-200 hover:text-amber-100"
                    >
                      {exp.company}
                      <ArrowUpRightIcon className="h-3 w-3 opacity-60 transition-opacity group-hover/co:opacity-100" />
                    </a>
                  ) : (
                    <span className="text-base text-amber-200">{exp.company}</span>
                  )}
                </div>

                <ul className="flex flex-col gap-1.5 text-sm leading-relaxed text-neutral-400">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span aria-hidden className="mt-2 h-1 w-1 flex-none rounded-full bg-neutral-600" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>


      </CardBody>
    </Card>
  );
}
