import { publications, organizations, type Publication } from "../data";
import { ArrowUpRightIcon } from "./Icons";

export function PublicationsPanel() {
  return (
    <div className="flex flex-col gap-3 font-mono text-sm">
       <p className="mt-2 border-t border-[var(--border)] pt-3 text-[10px] uppercase tracking-wider text-neutral-500">
        @Papers 
      </p>
      {publications.map((p) => (
        <PublicationEntry key={p.title} publication={p} />
      ))}

      <p className="mt-2 border-t border-[var(--border)] pt-3 text-[10px] uppercase tracking-wider text-neutral-500">
        @organizations
      </p>

      <ul className="flex flex-col gap-2">
        {organizations.map((org) => (
          <li
            key={org.name}
            className="gsap-block-item border border-[var(--border)] px-3 py-3"
          >
            <div className="flex flex-wrap items-baseline gap-x-1.5">
              <span className="text-neutral-200">{org.role}</span>
              <span className="text-neutral-600">·</span>
              {org.link ? (
                <a
                  href={org.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/co inline-flex items-center gap-1 text-accent hover:text-accent/80"
                >
                  {org.name}
                  <ArrowUpRightIcon className="h-3 w-3 opacity-60 transition-opacity group-hover/co:opacity-100" />
                </a>
              ) : (
                <span className="text-accent">{org.name}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PublicationEntry({ publication }: { publication: Publication }) {
  return (
    <div className="gsap-block-item border-l-2 border-accent/40 pl-3">
      <h3 className="text-sm font-medium leading-snug text-neutral-50">
        {publication.title}
      </h3>
      <p className="mt-1 text-xs text-neutral-500">{publication.venue}</p>
    </div>
  );
}

export function Publications() {
  return <PublicationsPanel />;
}
