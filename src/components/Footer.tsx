import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full pt-4 pb-4 border-t border-outline/10">
      <div className="flex flex-col gap-3 px-6 md:px-section-padding-h max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-end gap-2">
          <Link href="/">
            <Image 
              src="/images/brand/footer-logo-transparent.png" 
              alt="Celestia AI" 
              width={250} 
              height={50} 
              className="w-[150px] md:w-[200px] lg:w-[250px] h-auto object-contain" 
            />
          </Link>
        </div>
        <div className="pt-3 border-t border-outline/10">
          <p className="font-inter text-[12px] md:text-[13px] leading-relaxed text-on-surface-variant/80 text-center">
            Registered Office: Celestia AI (Enviroworld Consultancy), Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United Arab Emirates, Dubai Trade License No. 66089
          </p>
        </div>
      </div>
    </footer>
  );
}
