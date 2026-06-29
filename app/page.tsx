"use client";

import { useEffect, useState } from "react";
import { TabbedTerminal } from "./components/terminal/TabbedTerminal";
import { BootSequence } from "./components/terminal/BootSequence";
import { AnimatedLayout } from "./components/AnimatedLayout";

const BOOT_KEY = "jeth-boot-seen";

export default function Home() {
  const [showBoot, setShowBoot] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem(BOOT_KEY);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reducedMotion) {
      setShowBoot(false);
    }
  }, []);

  return (
    <div className="terminal-wallpaper flex min-h-screen flex-col">
      {showBoot ? (
        <BootSequence onComplete={() => setShowBoot(false)} />
      ) : null}
      <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-8 pb-6 sm:px-6 sm:py-12 lg:px-8">
        <AnimatedLayout>
          <TabbedTerminal />
        </AnimatedLayout>
      </main>
    </div>
  );
}
