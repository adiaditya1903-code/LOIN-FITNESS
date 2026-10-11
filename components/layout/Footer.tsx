"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Phone, Clock, ShieldCheck, FileText, CheckCircle2, AlertTriangle } from "lucide-react";
import { InstagramIcon, YoutubeIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

type LegalTab = "privacy" | "terms" | "safety" | null;

export default function Footer() {
  const [legalModalTab, setLegalModalTab] = useState<LegalTab>(null);

  return (
    <footer className="bg-[#06070A] border-t border-white/[0.08] relative overflow-hidden">
      {/* Ambient gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/[0.06]">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4AF37]/70 shadow-[0_0_20px_rgba(212,175,55,0.4)] bg-black shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/lion-fitness-logo.jpg"
                  alt="Lion Fitness Logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-wider text-white font-space leading-none uppercase">
                  LION <span className="text-[#FF5500]">FITNESS</span>
                </span>
                <span className="text-[10px] tracking-[0.24em] text-[#D4AF37] uppercase font-bold mt-1">
                  UNLEASH YOUR STRENGTH
                </span>
              </div>
            </Link>
            <p className="text-lg font-black tracking-tight text-slate-100 font-space uppercase mt-1">
              BUILD STRENGTH. TRANSFORM YOURSELF.
            </p>
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              LION FITNESS is dedicated to helping people build strength, improve fitness, and develop healthier habits with accessible, personalized fitness and nutrition guidance in Bangalore.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#FF5500] hover:border-[#FF5500]/40 hover:bg-[#FF5500]/5 transition-all cursor-pointer"
                aria-label="Follow LION FITNESS on Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#FF5500] hover:border-[#FF5500]/40 hover:bg-[#FF5500]/5 transition-all cursor-pointer"
                aria-label="Subscribe to LION FITNESS on YouTube"
              >
                <YoutubeIcon className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#FF5500] hover:border-[#FF5500]/40 hover:bg-[#FF5500]/5 transition-all cursor-pointer"
                aria-label="Follow LION FITNESS on Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5500] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About LION FITNESS
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">
                  Training Goals
                </a>
              </li>
              <li>
                <a href="#membership" className="hover:text-white transition-colors">
                  Membership Plans
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  Plan & BMI Calculator
                </a>
              </li>
              <li>
                <Link href="/diet-plans" className="hover:text-white transition-colors">
                  Diet Plans
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Location & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Utilities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5500] mb-4">
              Member Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="/member" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Athlete Dashboard</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5500]" />
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition-colors">
                  Athlete Sign In
                </Link>
              </li>
              <li>
                <Link href="/login?tab=register" className="hover:text-white transition-colors">
                  New Membership
                </Link>
              </li>
              <li>
                <Link href="/diet-plans" className="hover:text-white transition-colors">
                  Diet Plans & Nutrition
                </Link>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  Biometric Assessment
                </a>
              </li>
              <li>
                <Link href="/admin" className="hover:text-white transition-colors text-slate-400">
                  Staff Admin Console
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Location & Operating Hours */}
          <div className="lg:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5500] mb-4">
              Club Location & Contact
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium uppercase">BANGALORE</p>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF5500] shrink-0" />
                <a href="tel:+916363561751" className="text-white hover:text-[#FF5500] transition-colors">
                  +91 63635 61751
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <InstagramIcon className="w-4 h-4 text-[#FF5500] shrink-0" />
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#FF5500] transition-colors"
                >
                  Instagram: @lionfitness
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Mon – Sat: 5:30 AM – 11:00 PM</p>
                  <p className="text-slate-400">Sunday: 6:00 AM – 9:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 LION FITNESS. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button 
              type="button"
              onClick={() => setLegalModalTab("privacy")} 
              className="hover:text-[#FF5500] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              type="button"
              onClick={() => setLegalModalTab("terms")} 
              className="hover:text-[#FF5500] transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <button 
              type="button"
              onClick={() => setLegalModalTab("safety")} 
              className="hover:text-[#FF5500] transition-colors cursor-pointer"
            >
              Safety Guidelines
            </button>
          </div>
        </div>
      </div>

      {/* Legal Modals */}
      {legalModalTab && (
        <Modal
          isOpen={!!legalModalTab}
          onClose={() => setLegalModalTab(null)}
          title={
            legalModalTab === "privacy"
              ? "LION FITNESS PRIVACY POLICY"
              : legalModalTab === "terms"
              ? "TERMS & CONDITIONS"
              : "CLUB SAFETY & BIOMECHANICAL GUIDELINES"
          }
          maxWidth="2xl"
        >
          <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-h-[65vh] overflow-y-auto pr-1">
            {legalModalTab === "privacy" && (
              <>
                <div className="flex items-center gap-2 text-white font-bold text-base mb-2">
                  <ShieldCheck className="w-5 h-5 text-[#FF5500]" />
                  <span>Member Data Telemetry & Privacy Standards</span>
                </div>
                <p>
                  At LION FITNESS Bangalore, we respect your privacy and safeguard all digital biometrics, workout logs, and attendance records.
                </p>
                <h5 className="font-bold text-white text-xs uppercase tracking-wider text-[#FF5500]">1. Information We Collect</h5>
                <p>
                  We collect account credentials, contact numbers, biometric screener values (height, weight, body mass index), workout logs, and digital RFID door-entry tokens to deliver personalized fitness experiences.
                </p>
                <h5 className="font-bold text-white text-xs uppercase tracking-wider text-[#FF5500]">2. Data Usage & Security</h5>
                <p>
                  Your information is solely utilized to track progression, provision access passes, and schedule consultations. We never sell, lease, or monetize your personal health data to third-party brokers.
                </p>
                <h5 className="font-bold text-white text-xs uppercase tracking-wider text-[#FF5500]">3. Contact & Opt-Out</h5>
                <p>
                  You may inspect, modify, or purge your profile data at any time through your Athlete Dashboard or by contacting the club front desk at +91 63635 61751.
                </p>
              </>
            )}

            {legalModalTab === "terms" && (
              <>
                <div className="flex items-center gap-2 text-white font-bold text-base mb-2">
                  <FileText className="w-5 h-5 text-[#FF5500]" />
                  <span>Membership Agreement & Facility Terms</span>
                </div>
                <h5 className="font-bold text-white text-xs uppercase tracking-wider text-[#FF5500]">1. Access Privileges</h5>
                <p>
                  Active membership passes grant unmetered access during standard operating hours (5:30 AM – 11:00 PM Monday through Saturday; 6:00 AM – 9:00 PM Sunday). Members must authenticate using their digital pass or RFID card at entrance gates.
                </p>
                <h5 className="font-bold text-white text-xs uppercase tracking-wider text-[#FF5500]">2. Billing & Renewals</h5>
                <p>
                  Subscriptions are billed on a monthly or yearly cycle according to selected tiers (STARTER, PRO, ELITE). You may pause or cancel membership through the athlete portal with 7 business days notice before renewal billing.
                </p>
                <h5 className="font-bold text-white text-xs uppercase tracking-wider text-[#FF5500]">3. Code of Conduct</h5>
                <p>
                  Proper athletic attire and indoor training footwear are mandatory. Dropping calibrated competition barbells outside deadlift lifting platforms without bumper plates is strictly prohibited.
                </p>
              </>
            )}

            {legalModalTab === "safety" && (
              <>
                <div className="flex items-center gap-2 text-white font-bold text-base mb-2">
                  <AlertTriangle className="w-5 h-5 text-[#FF5500]" />
                  <span>Gym Floor Safety & Equipment Protocols</span>
                </div>
                <h5 className="font-bold text-white text-xs uppercase tracking-wider text-[#FF5500]">1. Barbell & Collar Rules</h5>
                <p>
                  Always secure barbell sleeves with locking safety collars on all working sets above 40 kg. Use safety spotter arms on power cages when bench pressing or squatting without a designated spotter.
                </p>
                <h5 className="font-bold text-white text-xs uppercase tracking-wider text-[#FF5500]">2. Equipment Re-Racking</h5>
                <p>
                  For the safety and hygiene of all club members, re-rack all dumbbells, calibrated plates, and attachments to their corresponding labeled storage racks immediately upon set conclusion.
                </p>
                <h5 className="font-bold text-white text-xs uppercase tracking-wider text-[#FF5500]">3. Hydration & Emergency Response</h5>
                <p>
                  Emergency stop cords must be affixed when operating high-speed treadmills. First aid kits and automated external defibrillators (AED) are located at the main coaching desk.
                </p>
              </>
            )}

            <div className="pt-4 flex justify-end">
              <Button size="sm" variant="primary" onClick={() => setLegalModalTab(null)}>
                Close & Return
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </footer>
  );
}
