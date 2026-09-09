"use client";

import React from "react";

const phases = [
  {
    num: "WEEK 0:",
    title: "Build day-0 prototype",
    description: "We develop a first prototype of your tool or solution even ahead of project kick-off, designed to address your specific problem. This first prototype is developed based on our understanding of your problem statement and iterated as we jointly craft overall scope of work.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B88D5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
  },
  {
    num: "WEEK 1-2:",
    title: "Develop visual interface",
    description: "Initial focus is on gathering your specific data and enriching it with additional data. In parallel, we collaborate closely with your key stakeholders to design visual interface of tool. We align on user experience and functionality through a fast, iterative process.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B88D5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
  },
  {
    num: "WEEK 3-4:",
    title: "Build underlying logic",
    description: "Think of this as the intelligence heavy-lifting phase, where we develop core functional logic. For example, for a B2B pricing tool, this could involve deploying machine-learning algorithms (e.g., XG Boost) on structured data to identify the price your customer is willing to pay.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B88D5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
  },
  {
    num: "WEEK 5-6:",
    title: "Go-live with tool",
    description: "Focus of final weeks of the project is on go-live of the tool, training and onboarding of all end-users. During this phase, we collaborate closely with end-users in a hyper care model, to ensure full adoption, smooth transition and clear alignment on new ways of working.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B88D5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
  }
];

export default function ProjectTimeline() {
  return (
    <div className="bg-background py-16 md:py-20 lg:py-24 relative overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="mb-12 md:mb-16 flex flex-col items-center">
          <h2 className="font-serif text-[32px] md:text-[42px] lg:text-[48px] text-on-surface leading-tight tracking-tight text-center max-w-4xl mx-auto">
            WE BUILD, ITERATE AND GO-LIVE IN 5 TO 6 WEEKS
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
                  <p className="font-inter text-[13px] leading-relaxed text-on-surface-variant text-left w-full">
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
