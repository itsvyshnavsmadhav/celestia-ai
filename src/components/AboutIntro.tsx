import React from "react";
import Image from "next/image";

export default function AboutIntro() {
  return (
    <section className="relative px-6 md:px-12 py-8 md:py-12 max-w-7xl mx-auto z-10">

      <div className="mb-8 flex justify-start pl-4 md:pl-8">
        <h3 className="font-hanken text-[24px] md:text-[28px] font-bold text-on-surface tracking-tight">
          CELESTIA AI story
        </h3>
      </div>

      {/* White Card: Our Story / Our Purpose */}
      <div className="relative mx-auto bg-surface-container rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-outline/20 p-6 md:p-12 lg:p-16 z-20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Our Story */}
          <div className="flex flex-col gap-6 relative z-10">
            <div className="w-8 h-1 bg-[#B88D5E] opacity-50 rounded-full mb-2"></div>
            <div className="flex flex-col gap-4 font-hanken text-[16px] md:text-[18px] text-on-surface-variant leading-relaxed font-light">
              <p>
                Celestia AI has its founding roots in the bustling European capital of Brussels, in Belgium, where a couple of <strong>ex-McKinsey & Company Partners</strong> and Managers came together in the summer of 2025 with a simple mission - a mission to deliver <strong>fast, impactful AI solutions</strong> that are fully <strong>custom-built</strong> for B2B enterprises.
              </p>
              <p>
                Our experience working with <strong>CXOs</strong> of large <strong>Fortune-500 B2B enterprises</strong> has been that there is a lot of conviction, but just a shortage of clarity on where can AI really deliver <strong>performance impact</strong> in the world of B2B. There are solid use-cases across the board (think Service Agents for customer care, or KYC automation in Banking etc.). However, one area that we find particularly exciting is in developing tools that need to be used at <strong>scale</strong> (e.g., pricing solutions).
              </p>
              <p>
                Thanks to AI, we can now develop and deploy <strong>custom tools</strong> at a <strong>fraction of the cost</strong> and in a matter of <strong>weeks</strong> to rapidly help our clients capture <strong>bottom line impact</strong>! Our founding team and network of experts has extensive experience on Commercial Excellence, Operational Excellence, Procurement and Human Relations topics - both in the industry and as management consultants to CXOs globally. And we&apos;re excited to partner with you on this journey!
              </p>
            </div>
          </div>

          {/* Casual Image on the Right */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-outline/10 transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <Image 
              src="/images/brussels_map.png"
              alt="Watercolor map of Brussels"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

    </section>
  );
}
