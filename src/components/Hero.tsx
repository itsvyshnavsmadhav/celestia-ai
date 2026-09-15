"use client";

import React, { useRef, useState, useEffect } from "react";

import Image from "next/image";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
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
            activeIndex === 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
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
            activeIndex === 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
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
            activeIndex === 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
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
          {/* Optimized Poster Image for instant LCP on mobile */}
          <Image 
            src="/hero-poster.jpg" 
            alt="Hero Background" 
            fill 
            priority
            quality={60}
            className="object-cover object-center z-0" 
            sizes="100vw"
          />
          {/* Video Layer that fades in once ready */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover object-center z-10 opacity-0 transition-opacity duration-1000"
            onCanPlay={(e) => { e.currentTarget.style.opacity = '1'; }}
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
      </div>
    </section>
  );
}
