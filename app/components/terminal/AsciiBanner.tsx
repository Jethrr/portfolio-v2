import { JETHER_ASCII } from "../../lib/ascii";

export function AsciiBanner({ className = "" }: { className?: string }) {
  return (
    <pre
      className={["ascii-art overflow-x-auto", className].join(" ")}
      aria-label="JETHER ASCII art"
    >
      {JETHER_ASCII}
    </pre>
  );
}
