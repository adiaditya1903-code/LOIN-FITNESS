"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DIET_PLANS, DietPlan } from "@/data/diet-plans";
import { MockDb, DietPlanRequest } from "@/lib/mock-db";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import {
  Utensils,
  CheckCircle2,
  Flame,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Phone,
  User,
  HeartPulse,
  Leaf,
  Beef,
  AlertCircle,
  Clock,
  Send,
  HelpCircle,
  Apple,
  Salad
} from "lucide-react";
import confetti from "canvas-confetti";

interface DietPlansSectionProps {
  isStandalonePage?: boolean;
}

export default function DietPlansSection({ isStandalonePage = false }: DietPlansSectionProps) {
  const [selectedPlan, setSelectedPlan] = useState<DietPlan | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    fitnessGoal: "Weight Loss & Fat Reduction",
    dietaryPreference: "Vegetarian" as "Vegetarian" | "Non-Vegetarian",
    foodAllergies: "",
    contactNumber: "",
  });

  // Validation & Submission State
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<DietPlanRequest | null>(null);

  const openPlanModal = (plan: DietPlan) => {
    setSelectedPlan(plan);
    setErrors({});
    setSubmittedData(null);
    setFormData((prev) => ({
      ...prev,
      fitnessGoal: plan.id === "weight-loss" ? "Weight Loss & Fat Reduction" : "Weight Gain & Muscle Mass",
    }));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
    setSubmittedData(null);
    setErrors({});
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    const ageNum = parseInt(formData.age, 10);
    if (!formData.age || isNaN(ageNum) || ageNum < 12 || ageNum > 90) {
      newErrors.age = "Please enter a valid age (12 - 90)";
    }

    if (!formData.fitnessGoal.trim()) {
      newErrors.fitnessGoal = "Please select or describe your fitness goal";
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact number is required";
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.contactNumber.trim())) {
      newErrors.contactNumber = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm() || !selectedPlan) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const created = MockDb.addDietRequest({
        fullName: formData.fullName.trim(),
        age: parseInt(formData.age, 10),
        fitnessGoal: formData.fitnessGoal.trim(),
        dietaryPreference: formData.dietaryPreference,
        foodAllergies: formData.foodAllergies.trim() || "None specified",
        contactNumber: formData.contactNumber.trim(),
        planId: selectedPlan.id,
        planName: selectedPlan.name,
        price: selectedPlan.price,
        formattedPrice: selectedPlan.formattedPrice,
      });

      setIsSubmitting(false);
      setSubmittedData(created);

      confetti({
        particleCount: 110,
        spread: 80,
        origin: { y: 0.6 },
      });
    }, 450);
  };

  return (
    <section id="diet-plans" className="py-24 sm:py-28 bg-[#07080A] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-[#FF5500]/[0.06] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 mb-4 backdrop-blur-md shadow-[0_2px_15px_rgba(0,0,0,0.5)]">
            <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse" />
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#FF5500]">
              FOREVER FITNESS • ALMATTI TO BAGALKOT
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-space mb-4 leading-[1.05]">
            FUEL YOUR <span className="text-[#FF5500] orange-glow">FITNESS</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl font-medium text-slate-200 mb-3 font-space">
            Nutrition plans designed around your goals.
          </p>

          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Science-backed, Indian-kitchen-friendly meal blueprints formulated with precision macro calculations. No exotic ingredients, no starvation — real food designed to power your transformation.
          </p>
        </div>

        {/* Feature Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0E121B] mb-16 sm:mb-20 shadow-2xl group">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-7 p-8 sm:p-12 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/30 text-[#FF5500] text-xs font-bold uppercase tracking-wider mb-4">
                <Utensils className="w-3.5 h-3.5" />
                <span>NUTRITION SANCTUARY</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white font-space mb-4">
                70% OF RESULTS ARE BUILT IN THE KITCHEN.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl mb-6">
                Training without optimal fueling is spinning your wheels. Whether your target is dropping belly fat or adding solid muscle mass, our FOREVER FITNESS nutrition team provides complete daily meal structures customized to your lifestyle.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 border-t border-white/10 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0" />
                  <span>Affordable Foods</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0" />
                  <span>Veg & Non-Veg</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0" />
                  <span>Daily Meal Cadence</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-full min-h-[300px] overflow-hidden">
              <Image
                src="/diet-hero-banner.jpg"
                alt="FOREVER FITNESS Healthy Meal Prep and Sports Nutrition"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0E121B] via-transparent to-transparent z-[1]" />
            </div>

          </div>
        </div>

        {/* PRICING CARDS SECTION */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF5500] block mb-2">
              SELECT YOUR BLUEPRINT
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-space">
              PERSONALIZED NUTRITION TIERS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
            {DIET_PLANS.map((plan) => {
              const isPopular = plan.popular;

              return (
                <div
                  key={plan.id}
                  className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 ${
                    isPopular
                      ? "bg-gradient-to-b from-[#151A27] via-[#0E121B] to-[#0A0D14] border-2 border-[#FF5500] shadow-[0_15px_45px_rgba(255,85,0,0.22)]"
                      : "bg-[#0E121B] border border-white/10 hover:border-white/20 shadow-xl"
                  }`}
                >
                  {/* Popular Ribbon */}
                  {isPopular && (
                    <div className="absolute -top-3.5 right-6">
                      <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FF5500] to-[#FF3D00] text-white text-[11px] font-black uppercase tracking-widest shadow-lg shadow-[#FF5500]/40 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>MOST POPULAR</span>
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="mb-6">
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF5500] block mb-2">
                        {plan.badge}
                      </span>
                      <h4 className="text-2xl sm:text-3xl font-black uppercase text-white font-space tracking-tight">
                        {plan.name}
                      </h4>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                        {plan.tagline}
                      </p>
                    </div>

                    {/* Price Display: Exactly ₹99 and ₹129 */}
                    <div className="py-6 px-6 rounded-2xl bg-black/40 border border-white/5 mb-8">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl sm:text-5xl font-black text-white font-space tracking-tight">
                          {plan.formattedPrice}
                        </span>
                        <span className="text-xs uppercase text-slate-400 font-bold tracking-wider">
                          / ONE-TIME PLAN
                        </span>
                      </div>
                      <p className="text-[11px] text-[#FF5500] font-semibold mt-1">
                        Complete personalized meal blueprint delivered directly to you.
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3.5 mb-10">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        Included in this blueprint:
                      </span>
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                          <div className="w-5 h-5 rounded-full bg-[#FF5500]/15 border border-[#FF5500]/40 text-[#FF5500] flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                          </div>
                          <span className="leading-snug">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div>
                    <Button
                      type="button"
                      variant="primary"
                      size="lg"
                      glow={isPopular}
                      onClick={() => openPlanModal(plan)}
                      className="w-full text-xs sm:text-sm uppercase tracking-wider font-black py-4 cursor-pointer"
                    >
                      <span>{plan.buttonText}</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="text-[10px] text-slate-400 text-center mt-3">
                      ✓ Instant dietary preference questionnaire • Customized for you
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* 3-STEP PROCESS BREAKDOWN */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0E121B] border border-white/10 mb-16 shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF5500] block mb-2">
              SIMPLE & FAST WORKFLOW
            </span>
            <h4 className="text-xl sm:text-2xl font-black uppercase text-white font-space">
              HOW YOUR DIET PLAN WORKS
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#12151F] border border-white/5 relative">
              <span className="text-3xl font-black text-[#FF5500]/30 font-space absolute top-4 right-4">
                01
              </span>
              <div className="w-10 h-10 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/30 text-[#FF5500] flex items-center justify-center mb-4">
                <User className="w-5 h-5" />
              </div>
              <h5 className="text-base font-bold text-white font-space uppercase mb-2">
                1. Share Your Profile
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                Select your preferred plan, tell us your age, fitness goal, dietary preference (Veg / Non-Veg), and food allergies.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#12151F] border border-white/5 relative">
              <span className="text-3xl font-black text-[#FF5500]/30 font-space absolute top-4 right-4">
                02
              </span>
              <div className="w-10 h-10 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/30 text-[#FF5500] flex items-center justify-center mb-4">
                <Flame className="w-5 h-5" />
              </div>
              <h5 className="text-base font-bold text-white font-space uppercase mb-2">
                2. Calorie & Macro Target
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our certified coach designs daily meal timings, portion guidance, and simple food recommendations tailored to your routine.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#12151F] border border-white/5 relative">
              <span className="text-3xl font-black text-[#FF5500]/30 font-space absolute top-4 right-4">
                03
              </span>
              <div className="w-10 h-10 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/30 text-[#FF5500] flex items-center justify-center mb-4">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h5 className="text-base font-bold text-white font-space uppercase mb-2">
                3. Direct Coach Delivery
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                Receive your complete meal plan blueprint with phone consultation support to ensure you stay consistent and succeed.
              </p>
            </div>
          </div>
        </div>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF5500] block mb-2">
              GOT QUESTIONS?
            </span>
            <h4 className="text-xl sm:text-2xl font-black uppercase text-white font-space">
              NUTRITION FAQ
            </h4>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-[#0E121B] border border-white/5">
              <h5 className="text-sm font-bold text-white font-space mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#FF5500]" />
                <span>Can I follow this plan if I am strictly Vegetarian?</span>
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed pl-6">
                Absolutely. Both our Weight Loss and Weight Gain plans have dedicated vegetarian frameworks featuring paneer, lentils, sprouts, curd, tofu, oats, and dairy sources for complete protein adequacy.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0E121B] border border-white/5">
              <h5 className="text-sm font-bold text-white font-space mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#FF5500]" />
                <span>Do I need to buy expensive supplements or imported foods?</span>
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed pl-6">
                No. Our philosophy emphasizes simple, affordable, easily available home-cooked foods found in every local Indian grocery market.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0E121B] border border-white/5">
              <h5 className="text-sm font-bold text-white font-space mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#FF5500]" />
                <span>Are there recurring or subscription charges?</span>
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed pl-6">
                No recurring fees whatsoever. The Weight Loss Plan is ₹99 and the Weight Gain Plan is ₹129 as a one-time personalized blueprint.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* INTERACTIVE PLAN REQUEST MODAL */}
      {isModalOpen && selectedPlan && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={submittedData ? "REQUEST CONFIRMATION" : `ENROLL IN ${selectedPlan.name}`}
          maxWidth="lg"
        >
          {submittedData ? (
            /* SUCCESS STATE */
            <div className="py-4 space-y-6 text-center">
              <div className="w-16 h-16 rounded-full bg-[#FF5500]/20 border border-[#FF5500] text-[#FF5500] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(255,85,0,0.35)] animate-bounce">
                <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF5500] block mb-1">
                  PLAN REQUEST RECEIVED
                </span>
                <h4 className="text-2xl font-black text-white font-space uppercase">
                  Thank you, {submittedData.fullName}!
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mt-2 leading-relaxed">
                  Your customized inquiry for the <strong className="text-white">{submittedData.planName}</strong> ({submittedData.formattedPrice}) has been registered with our nutrition department.
                </p>
              </div>

              {/* Order Summary Card */}
              <div className="p-4 rounded-2xl bg-[#08090D] border border-white/10 text-left space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Selected Plan:</span>
                  <span className="text-white font-bold">{submittedData.planName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Plan Price:</span>
                  <span className="text-[#FF5500] font-black">{submittedData.formattedPrice}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Contact Number:</span>
                  <span className="text-white font-medium">{submittedData.contactNumber}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Dietary Preference:</span>
                  <span className="text-white font-medium">{submittedData.dietaryPreference}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Fitness Goal:</span>
                  <span className="text-white font-medium">{submittedData.fitnessGoal}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Allergies:</span>
                  <span className="text-slate-200">{submittedData.foodAllergies}</span>
                </div>
              </div>

              {/* Explicit Disclaimer: No payment processed yet */}
              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-[11px] text-slate-300 text-left flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Next Steps & Payment Notice:</strong>
                  <span>
                    No payment has been deducted. Our FOREVER FITNESS head coach will call you on <strong className="text-white">{submittedData.contactNumber}</strong> within 2–4 business hours to finalize your dietary preferences and provide your payment & digital blueprint link.
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Button
                  type="button"
                  variant="primary"
                  className="flex-1"
                  onClick={closeModal}
                >
                  Done & Close
                </Button>
                <Link href="/#contact" className="flex-1" onClick={closeModal}>
                  <Button type="button" variant="outline" className="w-full">
                    Visit Gym Location
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            /* ENROLLMENT FORM */
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Selected Plan Callout Banner */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#FF5500]/15 to-[#FF5500]/5 border border-[#FF5500]/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#FF5500] block">
                    Selected Nutrition Blueprint
                  </span>
                  <h5 className="text-base font-black text-white font-space">
                    {selectedPlan.name}
                  </h5>
                </div>
                <div className="text-right">
                  <span className="text-xl font-black text-white font-space">
                    {selectedPlan.formattedPrice}
                  </span>
                  <span className="text-[10px] text-slate-400 block -mt-1">
                    One-time fee
                  </span>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1 font-space">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Kulkarni"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#08090D] border text-white placeholder:text-neutral-500 text-xs sm:text-sm focus:outline-none transition-colors ${
                    errors.fullName ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-[#FF5500]"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Age and Contact Number Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1 font-space">
                    Age *
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 25"
                    min={12}
                    max={90}
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#08090D] border text-white placeholder:text-neutral-500 text-xs sm:text-sm focus:outline-none transition-colors ${
                      errors.age ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-[#FF5500]"
                    }`}
                  />
                  {errors.age && (
                    <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.age}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1 font-space">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.contactNumber}
                    onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#08090D] border text-white placeholder:text-neutral-500 text-xs sm:text-sm focus:outline-none transition-colors ${
                      errors.contactNumber ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-[#FF5500]"
                    }`}
                  />
                  {errors.contactNumber && (
                    <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.contactNumber}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Dietary Preference (Vegetarian / Non-Vegetarian) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-space">
                  Dietary Preference *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, dietaryPreference: "Vegetarian" })}
                    className={`py-2.5 px-4 rounded-xl border flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      formData.dietaryPreference === "Vegetarian"
                        ? "bg-[#10B981]/15 border-[#10B981] text-[#10B981] shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                        : "bg-[#08090D] border-white/10 text-slate-400 hover:text-white"
                    }`}
                  >
                    <Leaf className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase">Vegetarian</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, dietaryPreference: "Non-Vegetarian" })}
                    className={`py-2.5 px-4 rounded-xl border flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      formData.dietaryPreference === "Non-Vegetarian"
                        ? "bg-[#FF5500]/15 border-[#FF5500] text-[#FF5500] shadow-[0_0_15px_rgba(255,85,0,0.2)]"
                        : "bg-[#08090D] border-white/10 text-slate-400 hover:text-white"
                    }`}
                  >
                    <Beef className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase">Non-Vegetarian</span>
                  </button>
                </div>
              </div>

              {/* Fitness Goal */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1 font-space">
                  Fitness Goal *
                </label>
                <select
                  value={formData.fitnessGoal}
                  onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#08090D] border border-white/10 text-white text-xs sm:text-sm focus:border-[#FF5500] focus:outline-none cursor-pointer"
                >
                  <option value="Weight Loss & Fat Reduction">Weight Loss & Fat Reduction</option>
                  <option value="Weight Gain & Muscle Mass">Weight Gain & Muscle Mass</option>
                  <option value="Lean Athletic Conditioning">Lean Athletic Conditioning</option>
                  <option value="Body Recomposition (Fat Loss + Muscle Gain)">Body Recomposition (Fat Loss + Muscle Gain)</option>
                  <option value="General Health & Metabolic Energy">General Health & Metabolic Energy</option>
                </select>
              </div>

              {/* Food Allergies */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1 font-space">
                  Food Allergies or Restrictions
                </label>
                <input
                  type="text"
                  placeholder="e.g. None, Lactose, Peanuts, Gluten..."
                  value={formData.foodAllergies}
                  onChange={(e) => setFormData({ ...formData, foodAllergies: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#08090D] border border-white/10 text-white placeholder:text-neutral-500 text-xs sm:text-sm focus:border-[#FF5500] focus:outline-none"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">
                  Leave blank if no allergies or intolerances.
                </span>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  glow
                  disabled={isSubmitting}
                  className="w-full uppercase font-black tracking-wider text-xs sm:text-sm py-3.5 cursor-pointer"
                >
                  <span>
                    {isSubmitting ? "Submitting Plan Request..." : `Confirm ${selectedPlan.name} Request (${selectedPlan.formattedPrice})`}
                  </span>
                  <Send className="w-4 h-4 ml-1" />
                </Button>
              </div>

              <p className="text-[10px] text-slate-400 text-center pt-1">
                🔒 Your health data is kept strictly confidential. Our team responds within 2-4 hours.
              </p>
            </form>
          )}
        </Modal>
      )}
    </section>
  );
}
