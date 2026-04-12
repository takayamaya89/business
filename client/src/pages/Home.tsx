import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Pain from "@/components/sections/Pain";
import AboutEvent from "@/components/sections/AboutEvent";
import Protocol from "@/components/sections/Protocol";
import Speaker from "@/components/sections/Speaker";
import Results from "@/components/sections/Results";
import Testimonials from "@/components/sections/Testimonials";
import Assets from "@/components/sections/Assets";
import Format from "@/components/sections/Format";
import Pricing from "@/components/sections/Pricing";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <Navigation />
      <main className="flex-1 relative z-10">
        <Hero />
        <Pain />
        <AboutEvent />
        <Protocol />
        <Speaker />
        <Results />
        <Testimonials />
        <Assets />
        <Format />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
