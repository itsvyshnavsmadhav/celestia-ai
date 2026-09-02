"use client";
import { useEffect } from "react";
import { gsap } from "@/lib/gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function GlobalTextReveal() {
  useEffect(() => {
    // A small timeout ensures all DOM nodes are rendered before batching
    const ctx = gsap.context(() => {
      const targets = "h1:not(.no-reveal), h2:not(.no-reveal), h3:not(.no-reveal), h4:not(.no-reveal), h5:not(.no-reveal), h6:not(.no-reveal), p:not(.no-reveal), li:not(.no-reveal), .reveal-text";
      
      // Initially hide all targeted text elements
      gsap.set(targets, { opacity: 0, y: 30 });

      setTimeout(() => {
        ScrollTrigger.batch(targets, {
          onEnter: (batch) => {
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              stagger: 0.15, // Staggering effect
              duration: 1.2,
              delay: 0.2, // Delay appearing effect
              ease: "power3.out",
              overwrite: "auto",
            });
          },
          once: true,
        });
      }, 100);
    });
    return () => ctx.revert();
  }, []);

  return null;
}
