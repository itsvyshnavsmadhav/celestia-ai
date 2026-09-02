"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  hideUntilScroll?: boolean;
}

export default function Header({ hideUntilScroll = false }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(!hideUntilScroll);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (hideUntilScroll && currentScrollY < 50) {
        setIsVisible(false);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false); // Hide on scroll down
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);  // Show on scroll up
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hideUntilScroll]);

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && window.location.pathname === "/about") {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <header 
        className={`fixed top-4 left-0 right-0 w-full z-[110] transition-all duration-700 ease-out flex justify-center px-4 md:px-8
        ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-[150%] opacity-0 pointer-events-none"}
        `}
      >
        {/* Navbar Container - Pill Shape */}
        <div className="relative flex justify-between items-center w-full max-w-5xl mx-auto px-6 py-3 bg-background/80 backdrop-blur-2xl rounded-full border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] cinematic-glow">
          
          {/* Logo */}
          <div className="flex items-center z-20">
            <Link href="/" className="flex items-center group">
              <Image 
                src="/logo.webp" 
                alt="Celestia AI Logo" 
                width={200} 
                height={80} 
                className="w-auto h-8 md:h-10 object-contain transition-transform duration-500 group-hover:scale-[1.05]" 
                priority 
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              className="relative font-inter text-[13px] font-medium tracking-wider uppercase text-on-surface/70 hover:text-white transition-all duration-300 px-6 py-2.5 rounded-full hover:bg-white/[0.03] group overflow-hidden"
              href="/"
            >
              <span className="relative z-10 drop-shadow-md">HOME</span>
              <span className="absolute inset-x-4 bottom-1 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Link>
            <Link
              onClick={handleAboutClick}
              className="relative font-inter text-[13px] font-medium tracking-wider uppercase text-on-surface/70 hover:text-white transition-all duration-300 px-6 py-2.5 rounded-full hover:bg-white/[0.03] group overflow-hidden"
              href="/about"
            >
              <span className="relative z-10 drop-shadow-md">ABOUT US</span>
              <span className="absolute inset-x-4 bottom-1 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Link>
            <Link
              className="relative font-inter text-[13px] font-medium tracking-wider uppercase text-on-surface/70 hover:text-white transition-all duration-300 px-6 py-2.5 rounded-full hover:bg-white/[0.03] group overflow-hidden"
              href="/contact"
            >
              <span className="relative z-10 drop-shadow-md">CONTACT US</span>
              <span className="absolute inset-x-4 bottom-1 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-[120] flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span className={`block w-5 h-[1.5px] bg-[#d4af37] transition-all duration-500 ${isOpen ? "rotate-45 translate-y-[7.5px]" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-[#d4af37] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-[#d4af37] transition-all duration-500 ${isOpen ? "-rotate-45 -translate-y-[7.5px]" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 z-[100] bg-background/95 backdrop-blur-3xl transition-all duration-700 ease-in-out md:hidden flex flex-col items-center justify-center ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className={`flex flex-col items-center justify-center gap-12 transition-all duration-700 delay-150 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <Link
            onClick={() => setIsOpen(false)}
            className="font-hanken text-[24px] font-light uppercase tracking-[0.2em] text-white/70 hover:text-[#d4af37] transition-colors"
            href="/"
          >
            HOME
          </Link>
          <Link
            onClick={(e) => {
              if (typeof window !== "undefined" && window.location.pathname === "/about") {
                handleAboutClick(e);
              } else {
                setIsOpen(false);
              }
            }}
            className="font-hanken text-[24px] font-light uppercase tracking-[0.2em] text-white/70 hover:text-[#d4af37] transition-colors"
            href="/about"
          >
            ABOUT US
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            className="font-hanken text-[24px] font-light uppercase tracking-[0.2em] text-white/70 hover:text-[#d4af37] transition-colors"
            href="/contact"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </>
  );
}
