import { achievements, certifications } from "../data";

export function HighlightsPanel() {
  return (
    <div className="flex flex-col gap-6 font-mono text-sm">
      <section>
        <p className="mb-3 text-[10px] uppercase tracking-wider text-neutral-500">
          @achievements
        </p>
        <ul className="flex flex-col gap-2 text-neutral-300">
          {achievements.map((a) => (
            <li key={a.title} className="gsap-block-item flex items-start gap-2">
              <span className="text-accent" aria-hidden="true">
                ★
              </span>
              <span className="text-neutral-100">{a.title}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-[var(--border)] pt-5">
        <p className="mb-3 text-[10px] uppercase tracking-wider text-neutral-500">
          @certifications
        </p>
        <ul className="flex flex-col gap-2 text-neutral-300">
          {certifications.map((c) => (
            <li key={c} className="gsap-block-item flex items-start gap-2">
              <span className="text-accent-header" aria-hidden="true">
                ▸
              </span>
              <span className="text-neutral-200">{c}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export function Now() {
  return <HighlightsPanel />;
}
