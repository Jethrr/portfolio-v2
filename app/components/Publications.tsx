import { publications, type Publication } from "../data";
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
      </CardBody>
    </Card>
  );
}

function PublicationCard({ publication }: { publication: Publication }) {

  return (
    <div
      className="group/pub flex flex-col gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 py-4 transition-colors hover:border-[var(--border-strong)]"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-semibold leading-snug text-neutral-50">
          {publication.title}
        </h3>
      </div>
      <p className="text-xs leading-relaxed text-neutral-400">
        {publication.venue}
      </p>
    </div>
  );
}
