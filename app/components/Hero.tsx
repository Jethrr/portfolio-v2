import Image from "next/image";
import { profile } from "../data";
import {
  ArrowUpRightIcon,
  GitHubIcon,
  MailIcon,
  PinIcon,
} from "./Icons";

const PROFILE_IMAGE_SRC = "/profile.webp";
const LOCATION_MAPS_URL = `https://maps.google.com/?q=${encodeURIComponent(
  profile.location,
)}`;

export function Hero() {
  return (
    <section className="col-span-12 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-5 py-5 sm:px-9 sm:py-7">
      <div className="flex flex-row items-center justify-between gap-4 sm:gap-6">
        <div className="flex min-w-0 flex-1 flex-col gap-3 sm:gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold leading-[1.1] tracking-tight text-neutral-50 sm:text-4xl lg:text-5xl">
              {profile.name}
            </h1>
            <p className="text-xs text-neutral-400 sm:text-base">
              {profile.role}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <ContactLink
              href={LOCATION_MAPS_URL}
              icon={<PinIcon className="h-3.5 w-3.5" />}
              label={profile.location}
              alwaysShowLabel
            />
            <ContactLink
              href={profile.githubUrl}
              icon={<GitHubIcon className="h-4 w-4 sm:h-3.5 sm:w-3.5" />}
              label={profile.github}
            />
            <ContactLink
              href={`mailto:${profile.email}`}
              icon={<MailIcon className="h-4 w-4 sm:h-3.5 sm:w-3.5" />}
              label={profile.email}
            />
          </div>
        </div>

        <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border border-[var(--border-strong)] bg-neutral-900 ring-1 ring-white/5 sm:h-32 sm:w-32">
          <Image
            src={PROFILE_IMAGE_SRC}
            alt={`${profile.name} — profile photo`}
            fill
            priority
            sizes="(min-width: 640px) 128px, 80px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  icon,
  label,
  alwaysShowLabel = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  alwaysShowLabel?: boolean;
}) {
  const isMail = href.startsWith("mailto:");

  if (alwaysShowLabel) {
    return (
      <a
        href={href}
        target={isMail ? undefined : "_blank"}
        rel={isMail ? undefined : "noopener noreferrer"}
        aria-label={label}
        title={label}
        className="group/link inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[var(--border-strong)] bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] font-medium text-neutral-200 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-neutral-100 sm:gap-2 sm:px-3.5 sm:text-xs"
      >
        {icon}
        <span>{label}</span>
        <ArrowUpRightIcon className="hidden h-3 w-3 -translate-x-0.5 opacity-0 transition-all group-hover/link:translate-x-0 group-hover/link:opacity-100 sm:inline-block" />
      </a>
    );
  }

  return (
    <a
      href={href}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noopener noreferrer"}
      aria-label={label}
      title={label}
      className="group/link inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-strong)] bg-white/[0.03] text-neutral-300 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-neutral-100 sm:h-auto sm:w-auto sm:gap-2 sm:px-3.5 sm:py-1.5 sm:font-mono sm:text-xs sm:font-medium sm:text-neutral-200"
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
      <ArrowUpRightIcon className="hidden h-3 w-3 -translate-x-0.5 opacity-0 transition-all group-hover/link:translate-x-0 group-hover/link:opacity-100 sm:inline-block" />
    </a>
  );
}
