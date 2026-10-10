import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import AboutSection from "@/components/sections/AboutSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import MembershipSection from "@/components/sections/MembershipSection";
import CalculatorSection from "@/components/sections/CalculatorSection";
import DietPlansSection from "@/components/sections/DietPlansSection";
import ProgressSection from "@/components/sections/ProgressSection";
import ContactSection from "@/components/sections/ContactSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#07080A] text-white selection:bg-[#FF5500] selection:text-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ProgramsSection />
        <MembershipSection />
        <CalculatorSection />
        <DietPlansSection />
        <ProgressSection />
        <ContactSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
