"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { profile } from "../data";
import { JETHER_ASCII } from "../lib/ascii";
import { Stats } from "./Stats";
import {
  TypewriterSequence,
  TypewriterText,
  useIsTabActive,
  type TypewriterLine,
} from "./terminal/Typewriter";

const LOCATION_MAPS_URL = `https://maps.google.com/?q=${encodeURIComponent(
  profile.location,
)}`;

const HERO_LINES: TypewriterLine[] = [
  {
    text: profile.name,
    as: "h1",
    className: "text-lg font-bold text-accent sm:text-xl",
  },
  {
    text: profile.tagline,
    as: "p",
    className: "text-sm text-neutral-300",
  },
  {
    text: profile.role,
    as: "span",
    className: "text-xs sm:text-sm",
    prefix: ">",
  },
  {
    text: `Location: ${profile.location}`,
    as: "span",
    className: "text-xs sm:text-sm",
    prefix: ">",
  },
  {
    text: `Status: ${profile.status}`,
    as: "span",
    className: "text-xs text-accent/80 sm:text-sm",
    prefix: ">",
    cursorClassName: "text-accent/80",
  },
];

const CONTACT_LINKS = [
  { href: profile.githubUrl, label: profile.github },
  { href: `mailto:${profile.email}`, label: profile.email },
  { href: profile.websiteUrl, label: profile.website },
  { href: LOCATION_MAPS_URL, label: profile.location },
];

export function HeroPanel() {
  const active = useIsTabActive("profile");
  const [introDone, setIntroDone] = useState(false);
  const [asciiDone, setAsciiDone] = useState(false);

  useEffect(() => {
    if (!active) {
      setIntroDone(false);
      setAsciiDone(false);
    }
  }, [active]);

  return (
    <div className="flex flex-col gap-4">
      <TypewriterSequence
        active={active}
        lines={HERO_LINES}
        onComplete={() => setIntroDone(true)}
      />

      {introDone ? (
        <TypewriterSequence
          active={active}
          lines={[
            {
              text: JETHER_ASCII,
              as: "pre",
              className: "ascii-art overflow-x-auto",
              charMs: 6,
            },
          ]}
          linePauseMs={200}
          onComplete={() => setAsciiDone(true)}
        />
      ) : null}

      {asciiDone ? (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] sm:text-xs">
            {CONTACT_LINKS.map((link, i) => (
              <ContactLink key={link.label} {...link} active={active} index={i} />
            ))}
          </div>

          <div className="flex-shrink-0 overflow-hidden border border-[var(--border)]">
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
            <p className="border-t border-[var(--border)] bg-[var(--card-soft)] px-2 py-0.5 text-center text-[9px]">
              <TypewriterText
                active={active}
                text="avatar.png"
                charMs={55}
                className="text-neutral-600"
              />
            </p>
          </div>
        </div>
      ) : null}

      {asciiDone ? <Stats active={active} /> : null}
    </div>
  );
}

function ContactLink({
  href,
  label,
  active,
  index,
}: {
  href: string;
  label: string;
  active: boolean;
  index: number;
}) {
  const isMail = href.startsWith("mailto:");
  return (
    <a
      href={href}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noopener noreferrer"}
      className="text-neutral-400 transition-colors hover:text-accent"
    >
      <TypewriterText
        active={active}
        text={label}
        charMs={38}
        startDelay={index * 320}
      />
    </a>
  );
}

export function Hero() {
  return <HeroPanel />;
}
