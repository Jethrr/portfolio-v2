import { profile } from "../data";
import { PromptLine } from "./terminal/PromptLine";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="col-span-12 px-1 pt-2 pb-16 font-mono text-xs text-neutral-500">
      <PromptLine command="exit" className="mb-3 text-[11px]" />
      <div className="flex flex-col items-center justify-between gap-2 pl-4 sm:flex-row">
        <span>
          session active since {year} · built with Next.js · © {profile.name}
        </span>
        <span className="text-neutral-600">{profile.location}</span>
      </div>
    </footer>
  );
}
