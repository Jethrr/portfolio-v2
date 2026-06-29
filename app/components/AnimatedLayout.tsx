"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface AnimatedLayoutProps {
  children: React.ReactNode;
}

function typewriter(el: HTMLElement, text: string) {
  el.textContent = "";
  let i = 0;
  const cursor = document.createElement("span");
  cursor.className = "cursor-blink text-accent";
  cursor.textContent = "▋";
  cursor.setAttribute("aria-hidden", "true");

  const tick = () => {
    if (i < text.length) {
      el.textContent = text.slice(0, i + 1);
      el.appendChild(cursor);
      i += 1;
      gsap.delayedCall(0.03, tick);
    } else {
      cursor.remove();
    }
  };
  tick();
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

      const heroNameEl = root.querySelector<HTMLElement>(".gsap-hero-name");
      if (heroNameEl) {
        const original = heroNameEl.textContent ?? "";
        heroNameEl.textContent = "";
        gsap.delayedCall(0.5, () => typewriter(heroNameEl, original));
      }

      const heroExtras = root.querySelectorAll<HTMLElement>(
        ".gsap-hero-role, .gsap-hero-ascii, .gsap-hero-avatar, .gsap-hero-link",
      );
      if (heroExtras.length) {
        gsap.from(heroExtras, {
          autoAlpha: 0,
          y: 8,
          stagger: 0.08,
          duration: 0.4,
          ease: "power2.out",
          delay: 0.7,
        });
      }
    },
    { scope: ref },
  );

  return <div ref={ref}>{children}</div>;
}
