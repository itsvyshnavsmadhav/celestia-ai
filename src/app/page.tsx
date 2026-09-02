import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectTimeline from "@/components/ProjectTimeline";
import Footer from "@/components/Footer";
import Expertise from "@/components/Expertise";
import GlobalTextReveal from "@/components/GlobalTextReveal";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <GlobalTextReveal />
      <Header hideUntilScroll={true} />
      <main>
        <Hero />
        <div className="relative z-10">
          <Expertise />
          <ProjectTimeline />
          <CallToAction />
        </div>
      </main>
      <Footer />
    </>
  );
}
