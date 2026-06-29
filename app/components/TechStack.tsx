import { stack } from "../data";
import { Pill } from "./Pill";

export function TechStackPanel() {
  return (
    <div className="flex flex-col gap-4 font-mono text-sm">
      <p className="text-neutral-500">portfolio@1.0.0</p>
      {stack.map((group) => (
        <div key={group.label} className="gsap-block-item">
          <p className="text-accent">
            ├── {group.label.toLowerCase().replace(/\s+/g, "-")}@
          </p>
          <div className="ml-4 mt-2 flex flex-wrap gap-1.5">
            {group.items.map((item) => (
              <Pill key={item} variant="accent">
                {item}
              </Pill>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function TechStack() {
  return <TechStackPanel />;
}
