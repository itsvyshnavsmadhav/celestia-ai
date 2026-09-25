"use client";

import React, { useEffect, useRef, useState } from "react";

const pillars = [
  {
    number: "",
    title: "WE TACKLE HIGH IMPACT PROBLEMS OF B2B BUSINESSES..",
    description: <>We help our clients solve their <strong className="font-bold">critical business challenges</strong> across Commercial Excellence, Procurement, Operational Excellence, and HR, with a primary focus on <strong className="font-bold">margin improvement</strong>.</>,
    image: "/images/methodology/business_problems.png"
  },
  {
    number: "",
    title: "BY BUILDING CUSTOM TOOLS..",
    description: <>We build <strong className="font-bold">custom AI tools and agents</strong> from first principles, tailored to your <strong className="font-bold">workflows, requirements, and use cases</strong> - instead of force-fitting off-the-shelf solutions.</>,
    image: "/images/methodology/custom_ai_tools.png"
  },
  {
    number: "",
    title: "THAT WE JOINTLY DESIGN AND DEPLOY, TO CAPTURE IMPACT..",
    description: <>We own the <strong className="font-bold">end-to-end AI journey—from problem definition and solution design to deployment, user adoption, and value capture</strong>.</>,
    image: "/images/methodology/joint_deployment.png"
  },
  {
    number: "",
    title: "WHILE ENSURING RISK-FREE COMMERCIALS FOR YOU..",
    description: <>Our <strong className="font-bold">satisfaction-based model</strong> means you pay <strong className="font-bold">only after successful delivery</strong> and once the solution addresses your specific business problem - offering a <strong className="font-bold">risk-free engagement</strong>.</>,
    image: "/images/methodology/risk_free.png"
  },
];

type Pillar = {
  number: string;
  title: string;
  description: React.ReactNode;
  image: string;
};

function MethodologyStep({ pillar }: { pillar: Pillar }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Trigger reveal when 25% of the section is visible
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.25,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div 
      ref={containerRef}
      className="relative flex flex-col items-start justify-center w-full py-16 overflow-hidden"
    >


      {/* Text Reveal */}
      <div 
        ref={textRef}
        className="flex flex-col items-start justify-center w-full max-w-4xl"
      >
        {pillar.number && (
          <span className="reveal-text opacity-0 translate-y-8 font-mono text-xl md:text-2xl text-white/40 font-semibold tracking-[0.2em] mb-4 uppercase">
            Phase {pillar.number}
          </span>
        )}
        <h2 className="reveal-text opacity-0 translate-y-8 font-hanken text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold leading-[1.2] tracking-tight text-white drop-shadow-sm mb-6 w-full text-left">
          {pillar.title}
        </h2>
        <p className="reveal-text opacity-0 translate-y-8 font-inter text-[16px] md:text-[18px] leading-relaxed text-white/80 w-full font-light text-left min-h-[80px] md:min-h-[100px]">
          {pillar.description}
        </p>
      </div>


    </div>
  );
}

export default function Methodology() {
  return (
    <section 
      className="relative bg-surface flex flex-col items-center py-24 overflow-hidden border-y border-outline/10 px-6 md:px-12"
      id="methodology"
    >
      <div className="w-full max-w-container-max mx-auto relative p-8 md:p-12 z-20 pb-24">
        <div className="absolute inset-0 bg-surface-container-low rounded-[32px] md:rounded-[48px] overflow-hidden" />
        
        <div className="relative z-10 w-full flex flex-col items-center">
          {/* Intro Text */}
          <div className="flex flex-col items-center justify-center text-center px-4 mb-24 pt-12">
            <h2 className="reveal-text opacity-0 translate-y-8 font-hanken text-[48px] sm:text-[64px] md:text-[96px] font-light leading-none tracking-tight text-white uppercase">
              WHAT WE DO
            </h2>
          </div>

          <div className="relative w-full max-w-5xl mx-auto flex flex-col">
            {/* Vertical Timeline Line */}
            <div className="absolute top-16 bottom-16 left-[20px] md:left-[40px] w-[2px] bg-white/20 z-0" />

            {pillars.map((pillar, i) => (
              <div key={i} className="relative z-10 w-full flex items-center">
                {/* Node Circle */}
                <div className="absolute left-[20px] md:left-[40px] top-1/2 -translate-x-[calc(50%-1px)] -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.6)] z-20" />
                
                {/* Step Content */}
                <div className="pl-16 md:pl-28 w-full">
                  <MethodologyStep pillar={pillar} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
