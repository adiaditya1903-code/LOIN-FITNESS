"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-32 sm:pt-36 lg:pt-28 pb-16 overflow-hidden bg-[#07080A]"
    >
      {/* 1. REALISTIC ATHLETES COMMERCIAL PHOTOGRAPHY BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Real photographic athletes in modern dark gym */}
        <div className="relative w-full h-full">
          <Image
            src="/lion-hero-athletes.jpg"
            alt="LION FITNESS Professional Male and Female Athletes Training in Modern Gym"
            fill
            priority
            quality={75}
            className="object-cover object-right md:object-[right_center] scale-100 transition-transform duration-1000 ease-out"
          />

          {/* Left-side subtle dark gradient for text readability while keeping athletes clear on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07080A] via-[#07080A]/95 sm:via-[#07080A]/85 lg:via-[#07080A]/55 via-45% to-transparent z-[1]" />

          {/* Top vignette to blend cleanly with navbar */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#07080A] via-[#07080A]/70 to-transparent z-[1]" />

          {/* Bottom vignette to seamlessly transition to the next section */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#07080A] via-[#07080A]/80 to-transparent z-[1]" />
        </div>
      </div>

      {/* 2. MAIN HERO CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Editorial Column: Left-aligned and balanced against the athletes on the right */}
          <div className="lg:col-span-8 xl:col-span-7 flex flex-col items-start text-left">
            
            {/* Small Upper Location Badge with Gold Accent */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/60 border border-[#D4AF37]/40 mb-4 backdrop-blur-md shadow-lg shadow-black/60">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.25em] text-[#D4AF37]">
                LION FITNESS • BANGALORE
              </span>
            </div>

            {/* Main Headline: LION FITNESS */}
            <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-black uppercase tracking-tight leading-[0.92] text-white font-space mb-3 italic select-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)] animate-in fade-in slide-in-from-bottom-2 duration-500">
              LION FITNESS
            </h1>

            {/* Compelling Fitness Slogan: BUILD STRENGTH. TRANSFORM YOURSELF. */}
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[1.05] font-space mb-5 animate-in fade-in slide-in-from-bottom-3 duration-600">
              <span className="text-white block drop-shadow-md">
                BUILD STRENGTH.
              </span>
              <span className="text-[#FF5500] block orange-glow drop-shadow-[0_0_30px_rgba(255,85,0,0.5)]">
                TRANSFORM YOURSELF.
              </span>
            </div>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-xl font-normal leading-relaxed mb-8 drop-shadow-md animate-in fade-in slide-in-from-bottom-4 duration-700">
              Welcome to LION FITNESS. Build strength, improve your fitness, and work toward your goals with personalized fitness and nutrition guidance.
            </p>

            {/* Interactive Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8 animate-in fade-in slide-in-from-bottom-5 duration-800">
              {/* Primary Button: START YOUR JOURNEY */}
              <a href="#membership" className="w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto px-8 sm:px-9 py-4 bg-[#FF5500] hover:bg-[#FF3D00] text-white font-black text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_4px_25px_rgba(255,85,0,0.5)] hover:shadow-[0_8px_35px_rgba(255,85,0,0.75)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer rounded-xl border border-white/20"
                >
                  <span>START YOUR JOURNEY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </a>

              {/* Secondary Button: EXPLORE DIET PLANS */}
              <Link href="/diet-plans" className="w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto px-7 sm:px-8 py-4 bg-black/60 hover:bg-white/10 text-white font-black text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 border border-[#D4AF37]/50 hover:border-[#D4AF37] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md rounded-xl"
                >
                  <span>EXPLORE DIET PLANS</span>
                </button>
              </Link>
            </div>

            {/* Trust Indicator: STRENGTH • FITNESS • TRANSFORMATION */}
            <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-4 select-none">
              <span className="hidden sm:inline-block h-[2px] w-8 sm:w-16 bg-[#D4AF37]" />
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs md:text-sm font-black tracking-[0.16em] sm:tracking-[0.22em] uppercase text-white">
                <span>STRENGTH</span>
                <span className="text-[#D4AF37]">•</span>
                <span>FITNESS</span>
                <span className="text-[#FF5500]">•</span>
                <span>TRANSFORMATION</span>
              </div>
              <span className="hidden sm:inline-block h-[2px] w-8 sm:w-16 bg-[#D4AF37]" />
            </div>

          </div>

          {/* Spacer Column: Leaves the right-side athletes visually prominent and clear on large screens */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-5 pointer-events-none" />

        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center text-xs text-slate-400 hover:text-[#FF5500] transition-colors group cursor-pointer"
            aria-label="Scroll down to explore"
          >
            <span className="uppercase tracking-[0.25em] font-bold mb-1 text-[10px] text-slate-400 group-hover:text-white transition-colors">
              SCROLL TO EXPLORE
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#FF5500]" />
          </a>
        </div>
      </div>
    </section>
  );
}
