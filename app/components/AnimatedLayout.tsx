"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface AnimatedLayoutProps {
  children: React.ReactNode;
  className?: string;
}

function splitChars(el: HTMLElement) {
  const text = el.textContent ?? "";
  el.innerHTML = text
    .split("")
    .map((c) =>
      c === " "
        ? '<span style="display:inline-block;white-space:pre"> </span>'
        : `<span style="display:inline-block">${c}</span>`,
    )
    .join("");
  return Array.from(el.children) as HTMLElement[];
}

function splitWords(el: HTMLElement) {
  const text = el.textContent ?? "";
  el.innerHTML = text
    .split(" ")
    .map((w) => `<span style="display:inline-block;margin-right:0.3em">${w}</span>`)
    .join("");
  return Array.from(el.children) as HTMLElement[];
}

export function AnimatedLayout({ children, className }: AnimatedLayoutProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const root = ref.current;

      // ── Hero section: slide in from above ─────────────────
      const sections = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll(":scope > *"),
      );
      const [heroSection, ...restSections] = sections;

      if (heroSection) {
        gsap.from(heroSection, {
          autoAlpha: 0,
          y: -18,
          duration: 0.75,
          ease: "power3.out",
        });
      }

      // ── Hero name: character-by-character 3D flip ─────────
      const heroNameEl = root.querySelector<HTMLElement>(".gsap-hero-name");
      if (heroNameEl) {
        const chars = splitChars(heroNameEl);
        gsap.set(heroNameEl, { perspective: 600 });
        gsap.from(chars, {
          y: 80,
          autoAlpha: 0,
          rotateX: -90,
          transformOrigin: "center bottom",
          stagger: 0.022,
          duration: 0.55,
          ease: "back.out(2)",
          delay: 0.12,
        });
      }

      // ── Hero role: word-by-word slide up ──────────────────
      const heroRoleEl = root.querySelector<HTMLElement>(".gsap-hero-role");
      if (heroRoleEl) {
        const words = splitWords(heroRoleEl);
        gsap.from(words, {
          y: 18,
          autoAlpha: 0,
          stagger: 0.055,
          duration: 0.45,
          ease: "power3.out",
          delay: 0.55,
        });
      }

      // ── Hero links: stagger from below ────────────────────
      const heroLinks = root.querySelectorAll<HTMLElement>(".gsap-hero-link");
      if (heroLinks.length) {
        gsap.from(heroLinks, {
          y: 14,
          autoAlpha: 0,
          stagger: 0.07,
          duration: 0.45,
          ease: "power3.out",
          delay: 0.8,
        });
      }

      // ── Hero avatar: scale + blur in, then float ──────────
      const avatar = root.querySelector<HTMLElement>(".gsap-hero-avatar");
      if (avatar) {
        gsap.from(avatar, {
          scale: 0.72,
          autoAlpha: 0,
          filter: "blur(8px)",
          duration: 0.9,
          ease: "expo.out",
          delay: 0.2,
          onComplete: () => {
            // Float loop after entrance
            gsap.to(avatar, {
              y: -9,
              duration: 3.5,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
            });
          },
        });
        // Parallax drift on scroll
        gsap.to(avatar, {
          y: -28,
          ease: "none",
          scrollTrigger: {
            trigger: heroSection,
            start: "top top",
            end: "+=500",
            scrub: 1.8,
          },
        });
      }

      // ── Eyebrow lines: scale-x expand on scroll ───────────
      const eyebrowLines =
        root.querySelectorAll<HTMLElement>(".gsap-eyebrow-line");
      if (eyebrowLines.length) {
        ScrollTrigger.batch(eyebrowLines, {
          onEnter: (batch) => {
            gsap.from(batch, {
              scaleX: 0,
              transformOrigin: "left center",
              duration: 0.55,
              stagger: 0.06,
              ease: "power3.inOut",
            });
          },
          start: "top 92%",
          once: true,
        });
      }

      // ── Remaining sections: 3D perspective reveal ─────────
      if (restSections.length) {
        gsap.set(restSections, { autoAlpha: 0, y: 55 });

        ScrollTrigger.batch(restSections, {
          onEnter: (batch) => {
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: 0.78,
              stagger: 0.1,
              ease: "power3.out",
              overwrite: true,
            });

            // Stagger text lines/items inside each entering section
            batch.forEach((section) => {
              // experience timeline rows
              const expItems =
                section.querySelectorAll<HTMLElement>(".gsap-exp-item");
              if (expItems.length) {
                gsap.from(expItems, {
                  x: -28,
                  autoAlpha: 0,
                  stagger: 0.1,
                  duration: 0.6,
                  ease: "power3.out",
                  delay: 0.25,
                });
              }

              // generic block children (About text, stack items, etc.)
              const blockChildren = section.querySelectorAll<HTMLElement>(
                "p, li:not(.gsap-exp-item), .gsap-block-item",
              );
              if (blockChildren.length && !expItems.length) {
                gsap.from(blockChildren, {
                  y: 12,
                  autoAlpha: 0,
                  stagger: 0.04,
                  duration: 0.45,
                  ease: "power3.out",
                  delay: 0.3,
                });
              }
            });
          },
          start: "top 90%",
          once: true,
        });
      }
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
