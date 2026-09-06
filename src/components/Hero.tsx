"use client";

import React, { useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const [showThirdText, setShowThirdText] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 0px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            start: "top top",
            end: "+=100%",
            scrub: true,
          },
        });

        tl.fromTo(scrollIndicatorRef.current,
          { scaleY: 0 },
          { scaleY: 1, ease: "none" }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
  
  return (
    <section ref={containerRef} className="relative w-full h-screen z-0">
      <div 
        ref={stickyRef}
        className="relative w-full h-full overflow-hidden flex items-center justify-center bg-[#09090b]"
      >
        {/* Dynamic Video-driven Text Overlay 1 */}
        <div 
          className={`absolute z-50 left-[5%] md:left-[8%] bottom-[15%] max-w-4xl pointer-events-none transition-all duration-700 ease-in-out flex flex-col gap-4 ${
            showFirstText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h1 className="font-serif text-[32px] sm:text-[42px] lg:text-[64px] font-bold leading-[1.1] tracking-tight text-white drop-shadow-md">
            Fully custom-built AI tools for enterprises
          </h1>
          <p className="text-white/90 font-inter text-base md:text-xl max-w-3xl leading-relaxed drop-shadow-md">
            We develop custom AI tools & agents from first principles, to match your specific workflows and design requirements.
          </p>
        </div>

        {/* Dynamic Video-driven Text Overlay 2 */}
        <div 
          className={`absolute z-50 left-[5%] md:left-[8%] bottom-[15%] max-w-4xl pointer-events-none transition-all duration-700 ease-in-out flex flex-col gap-4 ${
            showSecondText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h1 className="font-serif text-[32px] sm:text-[42px] lg:text-[64px] font-bold leading-[1.1] tracking-tight text-white drop-shadow-md">
            Prototype ready on Day 0. Go-live in 5 to 6 weeks
          </h1>
          <p className="text-white/90 font-inter text-base md:text-xl max-w-3xl leading-relaxed drop-shadow-md">
            We accelerate your value capture journey from years to weeks, through rapid prototyping, deployment, training and scale-up.
          </p>
        </div>

        {/* Dynamic Video-driven Text Overlay 3 */}
        <div 
          className={`absolute z-50 left-[5%] md:left-[8%] bottom-[15%] max-w-4xl pointer-events-none transition-all duration-700 ease-in-out flex flex-col gap-4 ${
            showThirdText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h1 className="font-serif text-[32px] sm:text-[42px] lg:text-[64px] font-bold leading-[1.1] tracking-tight text-white drop-shadow-md">
            Risk-free commercial arrangement
          </h1>
          <p className="text-white/90 font-inter text-base md:text-xl max-w-3xl leading-relaxed drop-shadow-md">
            Our AI-first technology backend delivers projects at a fraction of market costs. One-time flat fee (no recurring fees), invoiced only after project delivery.
          </p>
        </div>

        {/* Main Video Layer */}
        <div 
          className="absolute inset-0 w-full h-full bg-[#000] overflow-hidden flex items-center justify-center z-10"
        >
           <video
             autoPlay
             loop
             muted
             playsInline
             preload="auto"
             poster="/hero-poster.jpg"
             className="absolute inset-0 w-full h-full object-cover object-center z-0"
             onTimeUpdate={(e) => {
               // We modulo 8 so it repeats every 8 seconds if the video is longer
               const time = e.currentTarget.currentTime % 8;
               
               // First text: 0s to 2s
               if (time >= 0 && time < 2.0) {
                 if (!showFirstText) setShowFirstText(true);
               } else {
                 if (showFirstText) setShowFirstText(false);
               }

               // Second text: 3s to 5s
               if (time >= 3.0 && time < 5.0) {
                 if (!showSecondText) setShowSecondText(true);
               } else {
                 if (showSecondText) setShowSecondText(false);
               }

               // Third text: 6s to 8s
               if (time >= 6.0 && time < 8.0) {
                 if (!showThirdText) setShowThirdText(true);
               } else {
                 if (showThirdText) setShowThirdText(false);
               }
             }}
           >
             <source src="/VN20260831_225301.mp4" type="video/mp4" />
           </video>
        </div>

        {/* Layer 1 (Clear Glass Panel) */}
        <div 
          className="absolute inset-0 w-full h-full border border-white/20 pointer-events-none z-20 shadow-[0_0_15px_rgba(255,255,255,0.02)]"
        >
        </div>

        {/* Layer 2 (Glass Panel) */}
        <div 
          className="absolute inset-0 w-full h-full border border-white/10 pointer-events-none z-30 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
        >
        </div>

        {/* Scroll Progress Indicator */}
        <div className="absolute right-4 md:right-8 top-[30%] bottom-[30%] w-[3px] bg-white/10 z-50 rounded-full overflow-hidden pointer-events-none hidden sm:block">
          <div 
            ref={scrollIndicatorRef}
            className="w-full h-full bg-white/60 origin-top"
            style={{ transform: "scaleY(0)" }}
          />
        </div>
      </div>
    </section>
  );
}
