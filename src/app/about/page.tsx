import Image from "next/image";
import GlobalTextReveal from "@/components/GlobalTextReveal";
import Header from "@/components/Header";
import AboutIntro from "@/components/AboutIntro";
import TeamProfiles from "@/components/TeamProfiles";
import OurWork from "@/components/OurWork";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <GlobalTextReveal />
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section with Background Image */}
        <div id="hero" className="p-4 md:p-6 w-full h-screen min-h-[500px]">
          <div className="relative w-full h-full rounded-[32px] md:rounded-[48px] overflow-hidden flex flex-col justify-center items-center">
            <div className="absolute inset-0 z-0">
              <Image 
                src="/images/about-hero-bg.png" 
                alt="About Celestia AI Background" 
                fill
                sizes="100vw"
                className="object-cover object-center" 
                priority
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            
            <div className="relative z-10 w-full max-w-container-max mx-auto px-6 md:px-12 text-center pt-20">
              <h1 className="font-hanken text-[48px] md:text-[72px] lg:text-[96px] font-light leading-none tracking-tight text-white uppercase">
                ABOUT US
              </h1>
            </div>
          </div>
        </div>

        {/* Intro Section */}
        <AboutIntro />

        {/* Team Profiles Section */}
        <TeamProfiles />

        {/* Our Work Section */}
        <OurWork />

      </main>
      <Footer />
    </>
  );
}
