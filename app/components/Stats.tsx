import { stats } from "../data";

export function Stats() {
  return (
    <section className="col-span-12 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:col-span-4 lg:grid-cols-1 lg:grid-rows-3 lg:gap-3">
      {stats.map((s) => (
        <div
          key={s.label}
          className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 transition-colors hover:border-[var(--border-strong)]"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
            {s.hint}
          </span>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-display text-5xl leading-none tracking-tight text-neutral-50">
              {s.value}
            </span>
            <span className="text-sm text-neutral-400">{s.label}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
