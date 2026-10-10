"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  MapPin,
  X,
  Dumbbell,
  User,
  ArrowRight,
  Flame,
  ShieldCheck,
  Utensils
} from "lucide-react";
import { InstagramIcon, YoutubeIcon, FacebookIcon } from "@/components/ui/SocialIcons";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDietPage = pathname === "/diet-plans";

  const navLinks = [
    { name: "HOME", href: isDietPage ? "/#home" : "#home", active: !isDietPage && pathname === "/" },
    { name: "ABOUT", href: isDietPage ? "/#about" : "#about", active: false },
    { name: "DIET PLANS", href: "/diet-plans", active: isDietPage },
    { name: "MEMBERSHIP", href: isDietPage ? "/#membership" : "#membership", active: false },
    { name: "CONTACT", href: isDietPage ? "/#contact" : "#contact", active: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Official Contact Bar */}
      <div
        className={`w-full bg-[#07080B]/95 border-b border-white/[0.08] text-[11px] text-slate-300 transition-all duration-300 ${isScrolled ? "h-0 py-0 opacity-0 overflow-hidden border-none" : "py-2 px-4 sm:px-8 opacity-100"
          }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Left: Official FOREVER FITNESS Contact Details */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-slate-300">
            <a
              href="tel:+916363561751"
              className="flex items-center gap-1.5 hover:text-[#FF5500] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF5500]" />
              <span className="tracking-wide font-medium">+91 63635 61751</span>
            </a>

            <span className="hidden sm:inline text-white/20">|</span>

            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
              <span className="tracking-wide uppercase font-semibold text-slate-200">
                ALMATTI TO BAGALKOT
              </span>
            </div>

            <span className="hidden lg:inline text-white/20">|</span>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hidden lg:flex items-center gap-1.5 hover:text-[#FF5500] transition-colors text-slate-300"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-[#FF5500]" />
              <span className="tracking-wide font-medium">@foreverfitness</span>
            </a>
          </div>

          {/* Right Social Icons */}
          <div className="flex items-center gap-4 text-slate-400">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FF5500] transition-colors"
              aria-label="Instagram @foreverfitness"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FF5500] transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FF5500] transition-colors"
              aria-label="YouTube"
            >
              <YoutubeIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${isScrolled
            ? "bg-[#07080A]/95 backdrop-blur-xl border-b border-white/[0.08] py-3 shadow-[0_12px_40px_rgba(0,0,0,0.85)]"
            : "bg-[#07080A]/70 backdrop-blur-md border-b border-white/[0.06] py-4"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Brand Logo & Location Indicator */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/"
              className="flex items-center gap-3 select-none group"
              aria-label="FOREVER FITNESS Homepage"
            >
              {/* Orange Athletic Emblem */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF5500] to-[#E53E00] flex items-center justify-center shadow-[0_0_20px_rgba(255,85,0,0.45)] group-hover:scale-105 transition-transform duration-300 border border-white/20">
                <Dumbbell className="w-5 h-5 text-white rotate-45" />
              </div>

              {/* Logo Typography */}
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-wider text-white uppercase leading-none font-space">
                  FOREVER
                </span>
                <span className="text-[11px] sm:text-xs font-black tracking-[0.24em] text-[#FF5500] uppercase leading-none mt-1">
                  FITNESS
                </span>
              </div>
            </Link>

            {/* Location Tag from reference design */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
              <span className="font-bold tracking-wide uppercase text-[11px] text-slate-200">
                TO BAGALKOT
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[13px] font-bold tracking-widest uppercase transition-all duration-200 py-1 relative group ${link.active
                    ? "text-[#FF5500]"
                    : "text-slate-200 hover:text-[#FF5500]"
                  }`}
              >
                {link.name}
                {/* Active Indicator */}
                {link.active ? (
                  <span className="absolute -bottom-1.5 left-0 w-full h-[2.5px] bg-[#FF5500] shadow-[0_0_10px_rgba(255,85,0,0.8)]" />
                ) : (
                  <span className="absolute -bottom-1.5 left-0 w-0 h-[2.5px] bg-[#FF5500] transition-all duration-300 group-hover:w-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/member">
              <button
                type="button"
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer border border-white/10"
              >
                <User className="w-3.5 h-3.5 text-[#FF5500]" />
                <span className="tracking-wider uppercase">Portal</span>
              </button>
            </Link>

            <a href="#membership">
              <button
                type="button"
                className="px-6 py-2.5 bg-[#FF5500] hover:bg-[#FF3D00] text-white font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(255,85,0,0.45)] hover:shadow-[0_0_30px_rgba(255,85,0,0.7)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer rounded-xl border-t border-white/20"
              >
                JOIN CLUB
              </button>
            </a>

            <Link href="/admin">
              <button
                type="button"
                className="p-2.5 rounded-xl text-slate-400 hover:text-[#FF5500] hover:bg-white/5 transition-all cursor-pointer border border-white/10"
                title="Staff Admin Console"
                aria-label="Staff Admin"
              >
                <ShieldCheck className="w-4 h-4" />
              </button>
            </Link>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <Link href="/member">
              <button
                type="button"
                className="p-2 rounded-xl bg-white/5 text-slate-300 hover:text-white border border-white/10 text-xs"
                aria-label="Member Portal"
              >
                <User className="w-4 h-4 text-[#FF5500]" />
              </button>
            </Link>

            <a href="#membership">
              <button
                type="button"
                className="px-3.5 py-2 bg-[#FF5500] text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md"
              >
                JOIN
              </button>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 bg-[#FF5500] rounded-xl flex items-center justify-center text-white focus:outline-none cursor-pointer shadow-md"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <div className="flex flex-col gap-1 items-center">
                  <span className="w-4 h-[2px] bg-white block" />
                  <span className="w-4 h-[2px] bg-white block" />
                  <span className="w-4 h-[2px] bg-white block" />
                </div>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07080A]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all duration-300 shadow-2xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold tracking-widest uppercase text-slate-200 hover:text-[#FF5500] py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FF5500]" />
              </Link>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="/member"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-center text-xs font-bold uppercase tracking-wider text-white flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4 text-[#FF5500]" />
                <span>Athlete Portal</span>
              </Link>

              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-center text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                <span>Staff Admin</span>
              </Link>
            </div>

            {/* Mobile Contact Quick Bar */}
            <div className="mt-4 pt-4 border-t border-white/10 text-xs text-slate-400 space-y-2">
              <a href="tel:+916363561751" className="flex items-center gap-2 hover:text-[#FF5500]">
                <Phone className="w-3.5 h-3.5 text-[#FF5500]" />
                <span>+91 63635 61751</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FF5500] shrink-0 mt-0.5" />
                <span className="uppercase font-semibold text-slate-200">ALMATTI TO BAGALKOT</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
