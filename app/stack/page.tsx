import type { Metadata } from "next";
import Link from "next/link";
import { profile, stack } from "../data";
import { ArrowLeftIcon } from "../components/Icons";
import { Pill } from "../components/Pill";
import { TerminalWindow } from "../components/terminal/TerminalWindow";
import { PromptLine } from "../components/terminal/PromptLine";

export const metadata: Metadata = {
  title: `Tech Stack — ${profile.name}`,
  description: `Tools and technologies used by ${profile.name}.`,
};

export default function StackPage() {
  return (
    <div className="terminal-wallpaper min-h-screen pb-16">
      <main className="relative mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="flex flex-col gap-6">
          <Link
            href="/"
            className="group/back inline-flex w-fit items-center gap-2 font-mono text-xs text-neutral-400 transition-colors hover:text-accent"
          >
            <ArrowLeftIcon className="h-3.5 w-3.5 transition-transform group-hover/back:-translate-x-0.5" />
            <span>cd ~</span>
          </Link>

          <TerminalWindow title="node_modules/">
            <div className="border-b border-[var(--border)] px-4 py-3">
              <PromptLine command="npm list --depth=0" />
            </div>
            <div className="flex flex-col gap-6 px-4 py-5 sm:px-5">
              <p className="text-sm text-neutral-400">
                Technologies across the full stack — from frontend to cloud and ML.
              </p>
              <p className="font-mono text-sm text-neutral-500">portfolio@1.0.0</p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {stack.map((group) => (
                  <div
                    key={group.label}
                    className="border border-[var(--border)] p-4"
                  >
                    <p className="mb-3 font-mono text-xs text-accent">
                      ├── {group.label.toLowerCase().replace(/\s+/g, "-")}@
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <Pill key={item} variant="accent">
                          {item}
                        </Pill>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TerminalWindow>
        </div>
      </main>
    </div>
  );
}
