"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

const projects = [
  {
    client: "Global Logistics Firm",
    title: "Dynamic Pricing Engine",
    date: "March 2026",
    description: "Helping the world’s largest airport infrastructure technology company on developing and deploying machine-learning based pricing transformation program to generate 3-5% EBITDA margin improvement.",
    image: "/images/cases/CASE 1.webp"
  },
  {
    client: "Healthcare Provider",
    title: "Integrated Planning Engine",
    date: "July 2026",
    description: "Building an operational excellence tool to optimize Sales and Operations planning (S&OP) for a USD 1 bn company, by streamlining commercial, operational and procurement decisions to mitigate planning volatility in an increasingly interconnected global supply chain.",
    image: "/images/cases/CASE 2.webp"
  },
  {
    client: "Energy Sector Leader",
    title: "RFP Automation Engine",
    date: "June 2026",
    description: "Building an RFP automation engine to help 200+ sales team members of a European B2B industrial player, to save 10-15% of their working time by agentic pre-filling of client RFP compliance documents that often run into thousands of line items per RFP, by basing it on knowledge bases connected to custom internal client data repositories and internal Product Information portals.",
    image: "/images/cases/CASE 3.webp"
  },
  {
    client: "Retail Giant",
    title: "Resource Optimization Engine",
    date: "April 2026",
    description: "Building a price engine for a UK-based sustainability consulting client by optimizing 30+ key variables like team skills, staffing availability, rate cards, topic expertise, client budget etc. to propose ideal team configurations that maximize client delivery impact and profitability.",
    image: "/images/cases/CASE 4.webp"
  },
  {
    client: "Global Bank",
    title: "Commercial Excellence Engine",
    date: "July 2026",
    description: "Developing a commercial excellence engine for an iconic PE-owned French kitchen appliances brand for their B2B business to improve profit margins.",
    image: "/images/cases/CASE 5.webp"
  }
];

export default function OurWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapRef = useRef<HTMLDivElement>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // We removed the GSAP effect to use pure CSS keyframes for a smoother infinite marquee

  return (
    <div className="our-work-wrapper">
      <section className="relative h-[100vh] w-full bg-background overflow-hidden flex flex-col justify-center z-30" ref={containerRef}>
        {/* Header - Normal flow */}
        <div className="w-full max-w-7xl mx-auto px-6 z-30 pointer-events-none shrink-0 pt-16 md:pt-24 mb-12">
          <div className="flex flex-col gap-6 pointer-events-auto max-w-4xl">
            <span className="font-hanken text-[14px] md:text-[16px] font-bold tracking-[0.15em] text-on-surface uppercase">
              OUR WORK
            </span>
            <h2 className="font-hanken text-[40px] md:text-[56px] lg:text-[64px] font-medium text-on-surface leading-[1.1] tracking-tight">
              Real impact with measurable outcomes.
            </h2>
          </div>
        </div>

        {/* Horizontal Scroll Wrapper */}
        <div className="relative w-full flex-1 flex flex-col justify-start min-h-0 overflow-x-auto md:overflow-x-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style>{`
            .relative.w-full::-webkit-scrollbar { display: none; }
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            @media (min-width: 768px) {
              .animate-marquee {
                animation: marquee 35s linear infinite;
              }
              .animate-marquee:hover {
                animation-play-state: paused;
              }
            }
          `}</style>
          
          <div 
            ref={scrollWrapRef}
            className="flex flex-row w-max h-[60vh] md:h-[65vh] items-center relative z-20 animate-marquee"
          >
            {/* First Set */}
            <div className="flex flex-row h-full items-center gap-6 px-3">
              {projects.map((project, i) => (
                <ProjectCard 
                  key={`set1-${i}`} 
                  project={project} 
                  index={i} 
                  expandedIndex={expandedIndex} 
                  setExpandedIndex={setExpandedIndex} 
                />
              ))}
            </div>
            
            {/* Second Set for Loop */}
            <div className="flex flex-row h-full items-center gap-6 px-3">
              {projects.map((project, i) => (
                <ProjectCard 
                  key={`set2-${i}`} 
                  project={project} 
                  index={i + projects.length} 
                  expandedIndex={expandedIndex} 
                  setExpandedIndex={setExpandedIndex} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

type Project = {
  client: string;
  title: string;
  date: string;
  description: string;
  image: string;
};

function ProjectCard({ project, index, expandedIndex, setExpandedIndex }: { project: Project, index: number, expandedIndex: number | null, setExpandedIndex: (i: number | null) => void }) {
  return (
    <div 
      className="w-[85vw] md:w-[40vw] lg:w-[35vw] h-full relative shrink-0 group perspective-1000"
    >
      <div className="w-full h-full relative rounded-[2rem] overflow-hidden shadow-lg transition-transform duration-500 bg-black cursor-pointer" onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}>
        {/* Background Image */}
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          sizes="(max-width: 768px) 85vw, 40vw"
          className={`object-cover transition-all duration-700 ${expandedIndex === index ? 'scale-110 opacity-30' : 'group-hover:scale-105 opacity-80'}`}
        />
        
        {/* Default state overlay (gradient at bottom) */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 ${expandedIndex === index ? 'opacity-0' : 'opacity-100'}`}></div>

        {/* Pill Tag (Top Left) */}
        <div className="absolute top-6 left-6 z-20">
          <div className="px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center gap-2">
            <span className="text-white text-[13px] md:text-[14px] font-medium tracking-wide">
              {project.date}
            </span>
          </div>
        </div>

        {/* Plus/Close Button (Top Right) */}
        <div 
          className="absolute top-6 right-6 z-30 w-12 h-12 rounded-full bg-white/10 group-hover:bg-white/20 text-white flex justify-center items-center shadow-lg transition-transform group-hover:scale-110"
        >
          {expandedIndex === index ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          )}
        </div>

        {/* Default State Content (Bottom) */}
        <div className={`absolute bottom-8 left-8 right-8 z-20 transition-all duration-500 ${expandedIndex === index ? 'opacity-0 translate-y-8 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
          <h3 className="font-hanken text-[24px] md:text-[32px] text-white font-medium leading-[1.2] mb-2 tracking-tight">
            {project.title}
          </h3>
        </div>

        {/* Expanded State Content */}
        <div className={`absolute inset-0 p-8 md:p-12 z-20 flex flex-col justify-center transition-all duration-700 bg-black/50 backdrop-blur-sm ${expandedIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
          <span className="font-inter text-[14px] font-medium tracking-wide text-[#B88D5E] mb-4 uppercase">
            {project.date}
          </span>
          <h3 className="font-hanken text-[28px] md:text-[40px] text-white font-medium leading-[1.1] mb-6 tracking-tight">
            {project.title}
          </h3>
          <p className="font-inter text-[16px] md:text-[18px] text-white/90 leading-relaxed font-light">
            {project.description}
          </p>
        </div>

      </div>
    </div>
  );
}
