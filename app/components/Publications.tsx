import { publications, organizations, type Publication } from "../data";
import { Card, CardBody, CardEyebrow } from "./Card";
import { ArrowUpRightIcon } from "./Icons";

export function Publications() {
  return (
    <Card className="col-span-12 lg:col-span-5">
      <CardEyebrow>Publications</CardEyebrow>
      <CardBody className="gap-2">
        {publications.map((p) => (
          <PublicationCard key={p.title} publication={p} />
        ))}

        <div className="mt-2 flex items-center gap-2 pb-1 pt-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
          <span className="inline-block h-[1px] w-4 bg-neutral-700" />
          Organizations
        </div>

        <ul className="flex flex-col gap-2">
          {organizations.map((org) => (
            <li
              key={org.name}
              className="flex flex-col gap-0.5 rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 py-4"
            >
              <div className="flex flex-wrap items-baseline gap-x-1.5">
                <span className="text-sm font-medium text-neutral-200">
                  {org.role}
                </span>
                <span className="text-neutral-600">·</span>
                {org.link ? (
                  <a
                    href={org.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/co inline-flex items-center gap-1 text-sm text-amber-200 hover:text-amber-100"
                  >
                    {org.name}
                    <ArrowUpRightIcon className="h-3 w-3 opacity-60 transition-opacity group-hover/co:opacity-100" />
                  </a>
                ) : (
                  <span className="text-sm text-amber-200">{org.name}</span>
                )}
              </div>
             
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}

function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <div className="group/pub flex flex-col gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 py-4 transition-colors hover:border-[var(--border-strong)]">
      <h3 className="text-sm font-semibold leading-snug text-neutral-50">
        {publication.title}
      </h3>
      <p className="text-xs leading-relaxed text-neutral-400">
        {publication.venue}
      </p>
    </div>
  );
}
