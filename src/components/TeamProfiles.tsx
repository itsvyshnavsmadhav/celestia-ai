"use client";
import React from "react";
import Image from "next/image";

export default function TeamProfiles() {
  const team = [
    {
      name: "Jimmy Joy",
      title: "Co-founder",
      image: "/images/founders/founder1_new.webp",
      linkedin: "https://www.linkedin.com/in/jimmyjoy88/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BY1qnEdTmR6mFfxSJJeusbw%3D%3D",
      bullets: [
        "Formerly <strong>Associate Partner</strong> at <strong>McKinsey & Company</strong>, Jimmy is a co-founder of Celestia AI and leads technology innovation.",
        "At McKinsey, Jimmy worked closely with CXOs of Fortune-100 companies, driving large global <strong>commercial excellence programs</strong> via tech enablement.",
        "Prior to McKinsey, he led various sales and strategy roles at <strong>AI, health-tech and media</strong> companies.",
        "Jimmy is also an <strong>advisor at Venture One / AI71</strong> (UAE's government-owned AI enterprise).",
      ],
    },
    {
      name: "Imane Ajebli",
      title: "Co-founder",
      image: "/images/founders/founder2_new.webp",
      linkedin: "https://www.linkedin.com/in/imane-ajebli-3b78075a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Box5uqHa3QYGzKkzEvHfIew%3D%3D",
      bullets: [
        "Formerly <strong>Senior Engagement Manager at McKinsey & Company</strong>, Imane is a <strong>co-founder</strong> of Celestia AI and leads client delivery and operations.",
        "At McKinsey, Imane drove large <strong>commercial growth and transformation programs</strong> across industries, with CXOs of leading companies, as well as governments.",
        "Prior to McKinsey, she worked in the <strong>S&OP team of Apple</strong>, in the UK.",
        "Imane is also a <strong>Professor of Strategy Consulting</strong> for Masters students at <strong>SKEMA Business School.</strong>",
      ],
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-8 md:pt-12 md:pb-12 mb-8 md:mb-12 relative z-10">
      
      <div className="mb-16 flex justify-center">
        <span className="font-hanken text-[14px] md:text-[16px] font-bold tracking-[0.15em] text-on-surface uppercase text-center">
          THE TEAM
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
        {team.map((member, index) => {
          return (
            <div key={index} className="flex flex-col sm:flex-row bg-surface-container rounded-2xl border border-outline/20 shadow-[0_4px_20px_rgba(0,0,0,0.2)] p-4 sm:p-5 gap-6">
              
              {/* Left Image */}
              <div className="w-full sm:w-[40%] aspect-[3/4] rounded-xl overflow-hidden shrink-0 relative bg-surface-container-low">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top"
                />
              </div>
              
              {/* Right Content */}
              <div className="w-full sm:w-[60%] flex flex-col py-2 pr-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-[26px] md:text-[28px] text-on-surface leading-none mb-1">
                      {member.name}
                    </h3>
                    <p className="font-inter text-[14px] text-[#B88D5E] font-medium mb-4">
                      {member.title}
                    </p>
                  </div>
                </div>
                
                <div className="w-8 h-px bg-outline/40 mb-4"></div>
                
                {/* Content always visible */}
                <div className="flex flex-col flex-grow">
                  <div className="flex flex-col gap-4 mb-6 pt-2">
                    {member.bullets.map((bullet, i) => (
                      <p 
                        key={i}
                        className="font-inter text-[13px] text-on-surface-variant leading-[1.6]"
                        dangerouslySetInnerHTML={{ __html: bullet }}
                      />
                    ))}
                  </div>
                  <a 
                    href={member.linkedin}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[14px] text-on-surface hover:text-[#B88D5E] font-medium transition-colors mt-auto pt-4 border-t border-outline/20"
                  >
                    <span>Connect on LinkedIn</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
              
            </div>
          );
        })}
      </div>
    </section>
  );
}
