import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DietPlansSection from "@/components/sections/DietPlansSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export const metadata: Metadata = {
  title: "Diet Plans | LION FITNESS • BANGALORE",
  description: "Personalized Weight Loss Plan (₹99) and Weight Gain Plan (₹129) designed to support your fitness and nutrition goals at LION FITNESS.",
};

export default function DietPlansPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#07080A] text-white selection:bg-[#FF5500] selection:text-white">
      <Navbar />
      <main className="flex-1 pt-12 sm:pt-16">
        <DietPlansSection isStandalonePage={true} />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
