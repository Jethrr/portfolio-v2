"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface AnimatedLayoutProps {
  children: React.ReactNode;
}

export function AnimatedLayout({ children }: AnimatedLayoutProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const root = ref.current;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reducedMotion) return;

      const terminal = root.querySelector<HTMLElement>(".gsap-terminal");
      if (terminal) {
        gsap.from(terminal, {
          autoAlpha: 0,
          y: 20,
          duration: 0.6,
          ease: "power2.out",
        });
      }
    },
    { scope: ref },
  );

  return <div ref={ref}>{children}</div>;
}
