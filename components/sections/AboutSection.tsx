"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Compass, Lightbulb, Dumbbell, Apple, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

export default function AboutSection() {
  const [modalOpen, setModalOpen] = useState(false);

  const pillars = [
    {
      icon: Compass,
      title: "Our Mission",
      description:
        "To make structured fitness coaching and personalized nutrition guidance accessible, affordable, and practical for everyone.",
    },
    {
      icon: Lightbulb,
      title: "Our Fitness Philosophy",
      description:
        "Consistency, proper exercise form, and sustainable lifestyle habits build long-term strength and transform your physique.",
    },
    {
      icon: Dumbbell,
      title: "Strength and Conditioning",
      description:
        "Time-tested compound training and quality resistance equipment engineered to improve muscular endurance, power, and functional mobility.",
    },
    {
      icon: Apple,
      title: "Nutrition Guidance",
      description:
        "Affordable daily meal planning, wholesome food suggestions, and balanced macronutrient targets that fuel your goals.",
    },
  ];

  return (
    <section id="about" className="relative py-28 bg-[#08090D] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#D4AF37]/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF5500]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Gym Image & Official Lion Logo Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/30 bg-[#0B0E14] shadow-[0_20px_50px_rgba(0,0,0,0.8)] aspect-[4/5] group">
              <Image
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
                alt="LION FITNESS high-performance gym facility"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover filter contrast-110 brightness-[0.75] group-hover:scale-105 transition-transform duration-700"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-[#08090D]/60 to-transparent" />

              {/* Lion Logo Showcase Badge in center */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-[0_0_35px_rgba(212,175,55,0.45)] bg-black mb-4">
                  <Image
                    src="/lion-fitness-logo.jpg"
                    alt="Lion Fitness Logo"
                    fill
                    sizes="176px"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-space tracking-wider drop-shadow-md">
                  LION FITNESS
                </h3>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#D4AF37] mt-1 drop-shadow-md">
                  UNLEASH YOUR STRENGTH
                </p>
              </div>
            </div>

            {/* Decorative Corner Accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37] rounded-tl-xl pointer-events-none" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37] rounded-br-xl pointer-events-none" />
          </div>

          {/* Right Column: Heading, Mission, and 4 Core Sections */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-[#D4AF37]/40 mb-3 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#D4AF37]">
                ABOUT LION FITNESS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[1.05] text-white font-space mb-4">
              ABOUT <span className="text-[#D4AF37]">LION FITNESS</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              LION FITNESS is dedicated to helping people build strength, improve fitness, and develop healthier habits. Our goal is to make fitness and nutrition guidance accessible and affordable.
            </p>

            {/* 4 Pillars: Mission, Philosophy, Strength & Conditioning, Nutrition */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0E121B] border border-white/[0.08] hover:border-[#D4AF37]/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-[0_10px_25px_rgba(212,175,55,0.1)]"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-3 group-hover:scale-110 transition-transform">
                    <pillar.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5 font-space uppercase tracking-wide group-hover:text-[#D4AF37] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Button
                size="lg"
                variant="primary"
                glow
                className="w-full sm:w-auto"
                onClick={() => setModalOpen(true)}
              >
                <span>OUR CORE VALUES</span>
                <ArrowRight className="w-5 h-5" />
              </Button>

              <Link href="/diet-plans" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <span>EXPLORE DIET PLANS</span>
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Philosophy Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="ABOUT LION FITNESS"
        maxWidth="2xl"
      >
        <div className="space-y-6 text-slate-300 text-sm">
          <p className="leading-relaxed">
            LION FITNESS is dedicated to helping people build strength, improve fitness, and develop healthier habits. Our goal is to make fitness and nutrition guidance accessible and affordable.
          </p>

          <div className="space-y-3">
            <h4 className="text-white font-bold text-base flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
              The Core Pillars of LION FITNESS
            </h4>
            <ul className="space-y-2.5 pl-7 list-disc text-slate-300">
              <li>
                <strong className="text-white">Our Mission:</strong> To provide accessible, results-oriented training and affordable nutrition guidance to every lifter.
              </li>
              <li>
                <strong className="text-white">Our Fitness Philosophy:</strong> Sustainable habits, compound strength, and progressive overload over quick fixes.
              </li>
              <li>
                <strong className="text-white">Strength & Conditioning:</strong> Real weights, proper technique, and focused workouts tailored to your individual capacity.
              </li>
              <li>
                <strong className="text-white">Nutrition Guidance:</strong> Clear, budget-friendly meal structures designed to support your weight loss or weight gain goals.
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.04] border border-[#D4AF37]/30 flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#D4AF37]/60 bg-black shrink-0">
              <Image
                src="/lion-fitness-logo.jpg"
                alt="Lion Fitness Logo"
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase font-space">LION FITNESS • BANGALORE</p>
              <p className="text-xs text-slate-400">Build strength. Transform yourself.</p>
            </div>
          </div>

          <div className="pt-2 flex justify-end gap-3">
            <a href="#membership" onClick={() => setModalOpen(false)}>
              <Button size="md" variant="primary">
                View Membership Plans
              </Button>
            </a>
          </div>
        </div>
      </Modal>
    </section>
  );
}
