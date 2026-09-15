export default function CallToAction() {
  return (
    <section className="relative bg-background py-10 md:py-16 overflow-hidden z-10 border-t border-outline/20">
      {/* Decorative Wavy Background */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none overflow-hidden">
        <svg 
          className="absolute w-[150%] md:w-full h-full left-1/2 -translate-x-1/2 top-0" 
          viewBox="0 0 1440 600" 
          fill="none" 
          preserveAspectRatio="none"
        >
          <path d="M-200 600C200 600 400 300 800 300C1200 300 1400 600 1800 600" stroke="#B88D5E" strokeWidth="1" strokeLinecap="round" />
          <path d="M-200 620C200 620 400 320 800 320C1200 320 1400 620 1800 620" stroke="#B88D5E" strokeWidth="0.5" strokeLinecap="round" />
          <path d="M-200 580C200 580 400 280 800 280C1200 280 1400 580 1800 580" stroke="#B88D5E" strokeWidth="0.5" strokeLinecap="round" />
          <path d="M-200 640C200 640 400 340 800 340C1200 340 1400 640 1800 640" stroke="#B88D5E" strokeWidth="0.25" strokeLinecap="round" />
        </svg>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-start gap-8 max-w-4xl">
          <h2 className="font-hanken text-[32px] sm:text-[36px] md:text-[48px] lg:text-[56px] text-on-surface font-medium leading-[1.1] tracking-tight">
            Ready to solve problems<br />
            that deliver value?
          </h2>
          
          <a 
            href="/contact" 
            className="inline-flex items-center gap-3 bg-[#B88D5E] text-white px-8 py-4 rounded-full font-hanken text-[14px] font-bold tracking-widest uppercase hover:bg-[#A17A4D] transition-colors"
          >
            LET&apos;S TALK
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
