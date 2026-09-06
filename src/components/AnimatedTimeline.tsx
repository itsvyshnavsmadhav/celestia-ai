/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function AnimatedTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  // Refs for the 4 card elements (Desktop)
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);

  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const img3Ref = useRef<HTMLDivElement>(null);
  const img4Ref = useRef<HTMLDivElement>(null);

  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    // Wait for the SVG to render and calculate path length
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);

      const ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

        // DESKTOP ANIMATION
        mm.add("(min-width: 768px)", () => {
          gsap.set(pathRef.current, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });

          // 1. Animate the line drawing
          gsap.to(pathRef.current, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom bottom",
              scrub: true,
            },
          });

          // 2. Animate the cards and images revealing when the line reaches them
          const sections = [
            { cardRef: card1Ref, imgRef: img1Ref, yPos: 350 },
            { cardRef: card2Ref, imgRef: img2Ref, yPos: 850 },
            { cardRef: card3Ref, imgRef: img3Ref, yPos: 1350 },
            { cardRef: card4Ref, imgRef: img4Ref, yPos: 1850 },
          ];

          sections.forEach((section) => {
            gsap.fromTo(
              section.cardRef.current,
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: containerRef.current,
                  start: `top+=${section.yPos} 70%`,
                  toggleActions: "play none none reverse",
                },
              }
            );
            
            gsap.fromTo(
              section.imgRef.current,
              {
                opacity: 0,
                rotationX: 90,
                rotationY: 90,
                scale: 0.2,
                transformPerspective: 1200,
                transformOrigin: "center center"
              },
              {
                keyframes: [
                  { opacity: 1, rotationX: 75, rotationY: 0, scale: 0.6, duration: 0.5, ease: "power2.out" },
                  { rotationX: 0, rotationY: 0, scale: 1, duration: 0.7, ease: "back.out(1.2)" }
                ],
                delay: 0.15,
                scrollTrigger: {
                  trigger: containerRef.current,
                  start: `top+=${section.yPos} 70%`,
                  toggleActions: "play none none reverse",
                },
              }
            );
          });
        });

        // MOBILE ANIMATION
        mm.add("(max-width: 767px)", () => {
          const mobileCards = gsap.utils.toArray(".mobile-timeline-card") as Element[];
          mobileCards.forEach((card: Element) => {
            gsap.fromTo(card, 
              { opacity: 0, y: 50 },
              {
                opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 85%",
                  toggleActions: "play none none reverse"
                }
              }
            );
          });
        });

      }, containerRef);

      return () => ctx.revert();
    }
  }, [pathLength]);

  const timelineData = [
    {
      text: "Formerly <strong>Senior Engagement Manager at McKinsey & Company</strong>, Imane is a <strong>co-founder</strong> of Celestia AI and leads client delivery and operations.",
      img: "/images/side-handles-imane/firstdot.webp"
    },
    {
      text: "At McKinsey, Imane drove large <strong>commercial growth and transformation programs</strong> across industries, with CXOs of leading companies, as well as governments.",
      img: "/images/side-handles-imane/seconddot.webp"
    },
    {
      text: "Prior to McKinsey, she worked in the <strong>S&OP team of Apple</strong>, in the UK.",
      img: "/images/side-handles-imane/thirddot.webp"
    },
    {
      text: "Imane is also a <strong>Professor of Strategy Consulting</strong> for Masters students at <strong>SKEMA Business School.</strong>",
      img: "/images/side-handles-imane/fourthdot.webp",
      hasLink: true
    }
  ];

  return (
    <div ref={containerRef} className="relative w-full max-w-[1200px] mx-auto my-16 md:my-32 px-4 md:px-12">

      {/* MOBILE LAYOUT (Stack) */}
      <div className="block md:hidden relative w-full pt-12 pb-8">
        {/* Profile Head */}
        <div className="flex flex-col items-center mb-12">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-surface shadow-lg relative">
            <Image src="/images/founders/IMANE AJEBLI.webp" alt="Imane Ajebli" fill className="object-cover" />
          </div>
          <h3 className="font-hanken text-[20px] tracking-tight font-medium text-on-surface uppercase mt-4">
            Imane Ajebli
          </h3>
        </div>

        {/* Vertical Line */}
        <div className="absolute left-[36px] top-[180px] bottom-12 w-0.5 bg-on-surface/20 z-0"></div>

        {/* Timeline Items */}
        <div className="flex flex-col gap-12 relative z-10 pl-[70px]">
          {timelineData.map((item, i) => (
            <div key={i} className="mobile-timeline-card relative">
              {/* Dot */}
              <div className="absolute -left-[40px] top-4 w-3 h-3 rounded-full bg-on-surface border-2 border-surface shadow-sm"></div>
              
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm mb-4 relative">
                <Image src={item.img} alt={`Milestone ${i+1}`} fill className="object-cover" />
              </div>
              <div className="p-6 border border-outline/20 bg-surface shadow-sm rounded-xl">
                <p className="font-inter text-[15px] leading-relaxed text-on-surface" dangerouslySetInnerHTML={{ __html: item.text }}></p>
                {item.hasLink && (
                  <a href="https://www.linkedin.com/in/imaneajebli/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 border border-on-surface px-5 py-2 rounded-full font-medium text-sm hover:bg-on-surface hover:text-surface transition-colors">
                    Connect on LinkedIn
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* DESKTOP LAYOUT (SVG Curve) */}
      <div className="hidden md:block relative w-full h-[2200px]">
        {/* Imane's Profile Picture */}
        <div className="absolute top-0 left-[240px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
          <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-surface shadow-lg relative">
            <Image src="/images/founders/IMANE AJEBLI.webp" alt="Imane Ajebli" fill className="object-cover" />
          </div>
          <h3 className="font-hanken text-[20px] tracking-tight font-medium text-on-surface uppercase mt-4">
            Imane Ajebli
          </h3>
        </div>

        {/* SVG Timeline Path */}
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 1200 2200" preserveAspectRatio="xMidYMin slice">
          <path ref={pathRef} d="M 240,0 C 240,50 600,50 600,100 C 900,225 900,475 600,600 C 300,725 300,975 600,1100 C 900,1225 900,1475 600,1600 C 450,1662.5 375,1756.25 375,1850" fill="none" stroke="var(--color-on-surface)" strokeWidth="2" strokeLinecap="round" className="opacity-40" />
          <circle cx="825" cy="350" r="6" fill="var(--color-on-surface)" />
          <circle cx="825" cy="1350" r="6" fill="var(--color-on-surface)" />
          <circle cx="375" cy="850" r="6" fill="var(--color-on-surface)" />
          <circle cx="375" cy="1850" r="6" fill="var(--color-on-surface)" />
        </svg>

        {/* Sections... */}
        <div ref={card1Ref} className="absolute top-[200px] left-[100px] w-[450px] p-8 border border-outline/20 bg-surface shadow-sm rounded-xl">
          <p className="font-inter text-[18px] leading-relaxed text-on-surface" dangerouslySetInnerHTML={{ __html: timelineData[0].text }}></p>
        </div>
        <div ref={img1Ref} className="absolute top-[200px] right-[50px] w-[280px] aspect-[4/3] rounded-xl overflow-hidden shadow-sm relative">
          <Image src={timelineData[0].img} alt="Milestone 1" fill className="object-cover" />
        </div>

        <div ref={card2Ref} className="absolute top-[700px] right-[100px] w-[450px] p-8 border border-outline/20 bg-surface shadow-sm rounded-xl">
          <p className="font-inter text-[18px] leading-relaxed text-on-surface" dangerouslySetInnerHTML={{ __html: timelineData[1].text }}></p>
        </div>
        <div ref={img2Ref} className="absolute top-[700px] left-[50px] w-[280px] aspect-[4/3] rounded-xl overflow-hidden shadow-sm relative">
          <Image src={timelineData[1].img} alt="Milestone 2" fill className="object-cover" />
        </div>

        <div ref={card3Ref} className="absolute top-[1200px] left-[100px] w-[450px] p-8 border border-outline/20 bg-surface shadow-sm rounded-xl">
          <p className="font-inter text-[18px] leading-relaxed text-on-surface" dangerouslySetInnerHTML={{ __html: timelineData[2].text }}></p>
        </div>
        <div ref={img3Ref} className="absolute top-[1200px] right-[50px] w-[280px] aspect-[4/3] rounded-xl overflow-hidden shadow-sm relative">
          <Image src={timelineData[2].img} alt="Milestone 3" fill className="object-cover" />
        </div>

        <div ref={card4Ref} className="absolute top-[1700px] right-[100px] w-[450px] p-8 border border-outline/20 bg-surface shadow-sm rounded-xl flex flex-col gap-6">
          <p className="font-inter text-[18px] leading-relaxed text-on-surface" dangerouslySetInnerHTML={{ __html: timelineData[3].text }}></p>
          <a href="https://www.linkedin.com/in/imaneajebli/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-on-surface px-6 py-3 rounded-full font-medium hover:bg-on-surface hover:text-surface transition-colors w-max">
            Connect on LinkedIn
          </a>
        </div>
        <div ref={img4Ref} className="absolute top-[1700px] left-[50px] w-[280px] aspect-[4/3] rounded-xl overflow-hidden shadow-sm relative">
          <Image src={timelineData[3].img} alt="Milestone 4" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}
