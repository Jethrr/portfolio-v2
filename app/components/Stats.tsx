import { stats } from "../data";

export function Stats() {
  return (
    <div className="border border-[var(--border)] bg-[var(--card-soft)] p-4 font-mono text-xs">
      <p className="mb-3 text-accent-header">$ neofetch</p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="gsap-block-item flex flex-col gap-1">
            <span className="text-2xl font-bold text-accent">{s.value}</span>
            <span className="text-neutral-300">{s.label}</span>
            <span className="text-[10px] text-neutral-500">{s.hint}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
