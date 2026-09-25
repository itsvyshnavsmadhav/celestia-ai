"use client";

import React from "react";

const phases = [
  {
    num: "WEEK 0:",
    title: "Build day-0 prototype",
    description: <>We build a <strong className="font-bold">first prototype before project kick-off, tailored to your problem, and iterate it together</strong> as we define the scope.</>,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B88D5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
  },
  {
    num: "WEEK 1-2:",
    title: "Develop visual interface",
    description: <>We <strong className="font-bold">gather and enrich your data</strong> while working closely with key stakeholders to <strong className="font-bold">design the user experience and interface</strong> through a rapid, iterative collaboration.</>,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B88D5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
  },
  {
    num: "WEEK 3-4:",
    title: "Build underlying logic",
    description: <>This is the <strong className="font-bold">intelligence heavy-lifting phase, where we develop the core functional logic</strong> - e.g., applying <strong className="font-bold">machine learning to identify customer willingness to pay</strong> in a B2B pricing tool.</>,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B88D5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
  },
  {
    num: "WEEK 5-6:",
    title: "Go-live with tool",
    description: <>The final phase focuses on <strong className="font-bold">deployment, security, user acceptance, and training, with hands-on user support</strong> to ensure smooth transition, adoption, and new ways of working.</>,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B88D5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
  }
];

export default function ProjectTimeline() {
  return (
    <div className="bg-background py-12 md:py-16 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="mb-12 md:mb-16 flex flex-col items-start">
          <h2 className="font-hanken text-[32px] sm:text-[36px] md:text-[48px] lg:text-[56px] text-on-surface font-medium leading-[1.1] tracking-tight">
            We build, iterate and go-live in 5-6 weeks
          </h2>
        </div>

        {/* Timeline Grid */}
        <div className="relative mt-8 lg:mt-12">
          


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-5 relative z-10">
            {phases.map((phase, i) => (
              <div key={i} className="bg-surface-container rounded-[1.5rem] p-6 lg:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.2)] flex flex-col items-start text-left relative mt-8 lg:mt-0">
                

                {/* Card Content */}
                <div className="mt-6 flex flex-col items-start flex-1 w-full">
                  
                  {/* Icon Wrapper */}
                  <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center mb-5 relative">
                    {/* Dashed ring effect */}
                    <div className="absolute inset-0 border border-dashed border-[#B88D5E]/40 rounded-full animate-[spin_10s_linear_infinite]" />
                    <div className="text-[#B88D5E] opacity-90 scale-90">
                      {phase.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-hanken text-[17px] md:text-[18px] font-bold text-on-surface mb-3">
                    {phase.title}
                  </h3>
                  
                  {/* Sub-label for Week */}
                  <div className="text-[11px] font-bold text-[#B88D5E] tracking-wider uppercase mb-2 bg-[#B88D5E]/10 px-3 py-1 rounded-full">
                    {phase.num.replace(':', '')}
                  </div>
                  
                  {/* Description */}
                  <p className="font-inter text-[13px] leading-relaxed text-on-surface-variant text-left w-full min-h-[96px] md:min-h-[110px]">
                    {phase.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
