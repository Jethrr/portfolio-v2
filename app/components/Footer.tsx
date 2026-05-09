import { profile } from "../data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="col-span-12 flex flex-col items-center justify-between gap-2 px-1 pt-2 pb-6 text-xs text-neutral-500 sm:flex-row">
      <span className="font-mono">
        © {year} {profile.name}. All rights reserved.
      </span>
      <span className="font-mono">{profile.location}</span>
    </footer>
  );
}
