export interface MembershipPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  yearlyPrice: number;
  badge?: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
  colorTheme?: string;
}

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "starter",
    name: "LION STARTER",
    tagline: "Essential access for consistent lifters",
    monthlyPrice: 999,
    yearlyPrice: 9990, // ~17% savings (2 months free)
    badge: "FOUNDATION",
    features: [
      "Full gym floor access",
      "High-performance strength & cardio gear",
      "Standard locker & shower facilities",
      "Initial 1-on-1 fitness assessment",
      "LION mobile workout pass",
    ],
    ctaText: "GET STARTED",
  },
  {
    id: "pro",
    name: "LION PRO",
    tagline: "High-performance program for serious progress",
    monthlyPrice: 1999,
    yearlyPrice: 19990,
    badge: "MOST POPULAR",
    isPopular: true,
    features: [
      "Unlimited 24/7 club access",
      "Personalized progressive workout plan",
      "Comprehensive fitness & posture assessment",
      "Customized diet & macronutrient guidance",
      "Bi-weekly performance tracking in LION App",
      "Access to all functional group classes",
    ],
    ctaText: "CLAIM LION PRO",
  },
  {
    id: "elite",
    name: "LION ELITE",
    tagline: "VIP dedicated coaching & comprehensive transformation",
    monthlyPrice: 3499,
    yearlyPrice: 34990,
    badge: "MAXIMUM RESULTS",
    features: [
      "All LION PRO features included",
      "Dedicated personal trainer (weekly sessions)",
      "Bespoke athletic workout programming",
      "Tailored clinical nutrition & supplementation protocol",
      "Monthly 3D DEXA-style body composition analysis",
      "Recovery zone access (Cryo + Infrared Sauna)",
      "Priority VIP booking & dedicated locker",
    ],
    ctaText: "GO ELITE",
  },
];
