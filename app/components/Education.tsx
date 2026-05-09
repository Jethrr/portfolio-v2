import { certifications, education } from "../data";
import { Card, CardBody, CardEyebrow } from "./Card";

export function Education() {
  return (
    <Card className="col-span-12 lg:col-span-4">
      <CardEyebrow>Education &amp; Credentials</CardEyebrow>
      <CardBody className="gap-5">
        <div className="flex flex-col gap-1">
          <h3 className="font-display text-xl leading-tight text-neutral-50">
            {education.degree}
          </h3>
          <span className="text-sm text-neutral-300">{education.school}</span>
          <div className="mt-1 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-neutral-500">
            <span>{education.location}</span>
            <span className="h-1 w-1 rounded-full bg-neutral-700" />
            <span className="text-amber-200/80">{education.gpa}</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
            Certifications
          </span>
          <ul className="flex flex-col gap-1.5 text-sm text-neutral-300">
            {certifications.map((c) => (
              <li key={c} className="flex items-start gap-2">
                <span aria-hidden className="mt-2 h-1 w-1 flex-none rounded-full bg-amber-300/60" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardBody>
    </Card>
  );
}
