"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Using basic SVG strings for the icons in the snapshot (box, monitor, edit/tools, shield)
const expertiseCards = [
  {
    title: "WE PARTNER ON HIGH IMPACT TOPICS",
    image: "/Celestia_AI(1080p).mp4",
    description: "We help our clients solve some of their most pressing business challenges across a broad range of topics ranging from Commercial Excellence to Procurement, Operational Excellence and Human Resources - in doing so, we primarily focus on margin improvement.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
  },
  {
    title: "WE BUILD CUSTOM AI SOLUTIONS",
    image: "/Celestia_AI(1080p).mp4",
    description: "We develop custom AI tools and AI agents from first principles, to match your specific workflows and design requirements. We do not force-fit existing solutions, instead we design your visual interface and underlying logic for your use-case.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
  },
  {
    title: "WE DESIGN, DEPLOY & DEMONSTRATE",
    image: "/Celestia_AI(1080p).mp4",
    description: "Our team owns your entire AI tool journey, starting from structuring your problem statement to designing the solution, deploying it within your existing architecture and demonstrating impact. We handhold your users to ensure full adoption and value capture.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 3.82-13.78v0a2 2 0 0 1 2.37.19l.79.8a2 2 0 0 1 .18 2.37v0A22 22 0 0 1 12 15Z"></path><path d="m15 12 3 3a22 22 0 0 1-13.78 3.82v0a2 2 0 0 1-.19-2.37l-.8-.79a2 2 0 0 1 2.37-.18v0A22 22 0 0 1 15 12Z"></path></svg>
  },
  {
    title: "WE ENSURE RISK-FREE COMMERCIALS",
    image: "/Celestia_AI(1080p).mp4",
    description: "Our operating model is fully satisfaction-based. This means that we only invoice you after complete delivery of project and only if it solves your specific business problem. This ensures that you have a risk-free commercial arrangement.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
  },
];

export default function Expertise() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMuted(false);
          if (videoRef.current) {
            videoRef.current.muted = false;
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
              playPromise.then(() => {
                setIsPlaying(true);
              }).catch(() => {
                // Autoplay with sound blocked by browser. 
                // We do NOT fallback to muted, as requested by user.
                // It will remain paused with the play button visible.
                setIsPlaying(false);
              });
            }
          }
        } else {
          // Pause when out of view to save resources
          if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);



  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section ref={sectionRef} className="min-h-[100dvh] py-12 md:py-16 bg-background relative z-10 flex flex-col justify-center">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col items-center mb-16 md:mb-20">
          <span className="font-hanken text-[14px] md:text-[16px] font-bold tracking-[0.15em] text-on-surface uppercase text-center mb-4">
            EXPERTISE
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch mt-6 md:mt-8">
          
          {/* Left: Square Video Placeholder */}
          <div className="w-full lg:w-[55%] flex justify-center">
            <div className="w-full max-w-[600px] lg:max-w-none h-full min-h-[300px] md:min-h-[400px] bg-surface-container-low rounded-[2rem] overflow-hidden relative shadow-md group">
                <motion.div 
                  layout
                  transition={{ type: "spring", bounce: 0, duration: 0.7 }}
                  className={
                    isExpanded
                      ? "fixed inset-0 z-[999] flex items-center justify-center bg-black/95 p-4 md:p-12"
                      : "absolute inset-0 z-10 pointer-events-auto"
                  }
                >
                    <motion.div 
                      layout
                      className={`relative w-full h-full overflow-hidden ${
                        isExpanded ? "max-w-7xl aspect-video rounded-[2rem] shadow-2xl" : ""
                      }`}
                    >
                      <video 
                        id="expertise-video"
                        ref={videoRef}
                        src="/celestia_ai.mp4"
                        poster="/thumbnail.png"
                        loop
                        preload="none"
                        muted={isMuted}
                        playsInline
                        className={`w-full h-full cursor-pointer ${isExpanded ? "object-contain bg-black" : "object-cover"}`}
                        onClick={togglePlay}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        onTimeUpdate={(e) => {
                          const v = e.currentTarget;
                          if (v.duration) {
                            setProgress((v.currentTime / v.duration) * 100);
                          }
                        }}
                      />
                      
                      {/* YouTube-style Progress Bar */}
                      {isExpanded && (
                        <div 
                          className="absolute bottom-6 left-6 right-6 h-2 md:h-3 bg-white/40 rounded-full hover:h-3 md:hover:h-4 transition-all cursor-pointer z-30 group/progress shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (videoRef.current && videoRef.current.duration) {
                              const rect = e.currentTarget.getBoundingClientRect();
                              const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                              videoRef.current.currentTime = pos * videoRef.current.duration;
                            }
                          }}
                        >
                          <div 
                            className="h-full bg-[#D4A373] relative rounded-full"
                            style={{ width: `${progress}%` }}
                          >
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 md:w-5 md:h-5 bg-white rounded-full shadow-[0_0_10px_rgba(0,0,0,0.8)] transition-transform scale-100 group-hover/progress:scale-125" />
                          </div>
                        </div>
                      )}
                      
                      {/* Big Play Button Overlay */}
                      {!isPlaying && (
                        <button 
                          onClick={togglePlay}
                          className="absolute inset-0 m-auto w-16 h-16 bg-black/40 hover:bg-black/60 text-white flex justify-center items-center rounded-full transition-colors backdrop-blur-sm z-20"
                          aria-label="Play Video"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
                        </button>
                      )}
                      
                      {/* Mute/Unmute Button */}
                      {!isExpanded && (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsMuted(!isMuted);
                          }}
                          className="absolute top-4 right-16 bg-black/40 hover:bg-black/60 text-white p-2 rounded-lg opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm z-20"
                          aria-label={isMuted ? "Unmute Video" : "Mute Video"}
                        >
                          {isMuted ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                          )}
                        </button>
                      )}

                      {/* Fullscreen Expand Button */}
                      {!isExpanded ? (
                        <button 
                          onClick={() => setIsExpanded(true)}
                          className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white p-2 rounded-lg opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm z-20"
                          aria-label="Expand Video"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
                        </button>
                      ) : (
                        <button 
                          onClick={() => setIsExpanded(false)}
                          className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors z-50 backdrop-blur-md"
                          aria-label="Close Video"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                      )}
                    </motion.div>
                </motion.div>
            </div>
          </div>

          {/* Right: Description List */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center gap-3">
            {expertiseCards.map((card, index) => {
              const isActive = index === activeIndex;
              return (
                <div 
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                  }}
                  className={`cursor-pointer transition-all duration-300 rounded-2xl p-4 md:p-5 border ${
                    isActive 
                      ? "bg-surface-container border-[#B88D5E]/20 shadow-md" 
                      : "bg-transparent border-transparent hover:bg-surface-container/40"
                  }`}
                >
                  <div className="flex items-center gap-4 md:gap-5">
                    {/* Icon */}
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex justify-center items-center shrink-0 transition-colors duration-300 ${
                      isActive ? "bg-surface-container-highest shadow-md text-[#B88D5E]" : "bg-surface-container-low border border-outline/10 text-on-surface"
                    }`}>
                      {card.icon}
                    </div>
                    
                    {/* Title */}
                    <h4 className={`font-hanken text-[15px] md:text-[17px] font-bold uppercase tracking-wide transition-colors duration-300 ${
                      isActive ? "text-on-surface" : "text-on-surface-variant/50"
                    }`}>
                      {card.title}
                    </h4>
                  </div>
                  
                  {/* Expandable Description */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out pl-[56px] md:pl-[68px] ${
                      isActive ? "grid-rows-[1fr] opacity-100 mt-3 md:mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
                    } grid`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-inter text-[14px] md:text-[15px] text-on-surface-variant leading-[1.6] font-light pb-2">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-3 mt-8">
          {expertiseCards.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex 
                  ? "w-8 h-2 bg-[#B88D5E]" 
                  : "w-2 h-2 bg-[#B88D5E]/30 hover:bg-[#B88D5E]/60"
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
