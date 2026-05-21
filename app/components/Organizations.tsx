import { organizations } from "../data";
import { Card, CardBody, CardEyebrow } from "./Card";
import { ArrowUpRightIcon } from "./Icons";

export function Organizations() {
  return (
    <Card className="col-span-12">
      <CardEyebrow>Organizations</CardEyebrow>
      <CardBody className="gap-0">
        <ul className="flex flex-col">
          {organizations.map((org, i) => (
            <li
              key={org.name}
              className={[
                "grid grid-cols-1 gap-4 py-3.5 md:grid-cols-[180px_1fr]",
                i !== organizations.length - 1
                  ? "border-b border-[var(--border)]"
                  : "",
              ].join(" ")}
            >
             

              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <h3 className="text-base font-medium text-neutral-100">
                    {org.role}
                  </h3>
                  <span className="text-neutral-600">·</span>
                  {org.link ? (
                    <a
                      href={org.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/co inline-flex items-center gap-1 text-base text-amber-200 hover:text-amber-100"
                    >
                      {org.name}
                      <ArrowUpRightIcon className="h-3 w-3 opacity-60 transition-opacity group-hover/co:opacity-100" />
                    </a>
                  ) : (
                    <span className="text-base text-amber-200">{org.name}</span>
                  )}
                </div>

                {org.description ? (
                  <p className="text-sm leading-relaxed text-neutral-400">
                    {org.description}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}
