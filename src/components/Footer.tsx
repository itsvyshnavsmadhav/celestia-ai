import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full pt-10 pb-6 border-t border-outline/10">
      <div className="flex flex-col gap-6 px-6 md:px-section-padding-h max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <Link href="/">
            <Image 
              src="/images/brand/footer-logo-transparent.png" 
              alt="Celestia AI" 
              width={400} 
              height={80} 
              className="w-[200px] md:w-[300px] lg:w-[400px] h-auto object-contain" 
            />
          </Link>
        </div>
        <div className="pt-4 border-t border-outline/10">
          <p className="font-inter text-[12px] md:text-[13px] leading-relaxed text-on-surface-variant/80 text-center">
            Registered Office: Celestia AI (Enviroworld Consultancy), Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United Arab Emirates, Dubai Trade License No. 66089
          </p>
        </div>
      </div>
    </footer>
  );
}
