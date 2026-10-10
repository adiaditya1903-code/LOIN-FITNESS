import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DietPlansSection from "@/components/sections/DietPlansSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export const metadata: Metadata = {
  title: "Diet Plans | FOREVER FITNESS • ALMATTI TO BAGALKOT",
  description: "Personalized Weight Loss (₹99) and Weight Gain (₹129) diet blueprints customized for your fitness journey at FOREVER FITNESS.",
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
