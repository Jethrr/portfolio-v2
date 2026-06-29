import Image from "next/image";
import { profile } from "../data";
import { OutputBlock } from "./terminal/OutputBlock";
import { AsciiBanner } from "./terminal/AsciiBanner";
import { Stats } from "./Stats";

const LOCATION_MAPS_URL = `https://maps.google.com/?q=${encodeURIComponent(
  profile.location,
)}`;

export function HeroPanel() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <h1 className="gsap-hero-name text-lg font-bold text-accent sm:text-xl">
          {profile.name}
        </h1>
        <p className="gsap-hero-role text-sm text-neutral-300">{profile.tagline}</p>
        <OutputBlock className="!pl-0 text-xs sm:text-sm">{profile.role}</OutputBlock>
        <OutputBlock className="!pl-0 text-xs sm:text-sm">
          Location: {profile.location}
        </OutputBlock>
        <OutputBlock className="!pl-0 text-xs text-accent/80 sm:text-sm">
          Status: {profile.status}
        </OutputBlock>
      </div>

      <div className="gsap-hero-ascii">
        <AsciiBanner />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] sm:text-xs">
          <ContactCommand href={profile.githubUrl} label={profile.github} />
          <ContactCommand href={`mailto:${profile.email}`} label={profile.email} />
          <ContactCommand href={profile.websiteUrl} label={profile.website} />
          <ContactCommand href={LOCATION_MAPS_URL} label={profile.location} />
        </div>

        <div className="gsap-hero-avatar flex-shrink-0 overflow-hidden border border-[var(--border)]">
          <div className="relative h-20 w-20 sm:h-24 sm:w-24">
            <Image
              src="/profile.webp"
              alt={`${profile.name} — profile photo`}
              fill
              priority
              sizes="96px"
              className="object-cover"
            />
          </div>
          <p className="border-t border-[var(--border)] bg-[var(--card-soft)] px-2 py-0.5 text-center text-[9px] text-neutral-600">
            avatar.png
          </p>
        </div>
      </div>

      <Stats />
    </div>
  );
}

function ContactCommand({ href, label }: { href: string; label: string }) {
  const isMail = href.startsWith("mailto:");
  return (
    <a
      href={href}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noopener noreferrer"}
      className="gsap-hero-link text-neutral-400 transition-colors hover:text-accent"
    >
      {label}
    </a>
  );
}

/* @deprecated — use TabbedTerminal */
export function Hero() {
  return <HeroPanel />;
}
