export interface DietPlan {
  id: string;
  name: string;
  tagline: string;
  price: number;
  formattedPrice: string;
  badge: string;
  popular?: boolean;
  accentColor: string;
  features: string[];
  buttonText: string;
  summary: string;
}

export const DIET_PLANS: DietPlan[] = [
  {
    id: "weight-loss",
    name: "WEIGHT LOSS PLAN",
    tagline: "Shed stubborn fat while preserving lean muscle mass.",
    price: 99,
    formattedPrice: "₹99",
    badge: "FAT LOSS & TONING",
    popular: false,
    accentColor: "#FF5500",
    summary: "Calorie-deficit meal structure focused on clean protein, high satiety, and sustained metabolic rate.",
    features: [
      "Weight-loss-focused meal suggestions.",
      "Breakfast, lunch, dinner, and snack suggestions.",
      "Daily meal planning.",
      "Basic nutrition guidance.",
      "Simple, affordable food recommendations.",
    ],
    buttonText: "GET WEIGHT LOSS PLAN",
  },
  {
    id: "weight-gain",
    name: "WEIGHT GAIN PLAN",
    tagline: "Build clean mass, size, and athletic strength without excess fat.",
    price: 129,
    formattedPrice: "₹129",
    badge: "MOST POPULAR • BULKING & STRENGTH",
    popular: true,
    accentColor: "#FF7700",
    summary: "Nutrient-dense, calorie-surplus roadmap loaded with wholesome complex carbs and progressive protein.",
    features: [
      "Weight-gain-focused meal suggestions.",
      "Healthy calorie-rich food recommendations.",
      "Breakfast, lunch, dinner, and snack suggestions.",
      "Daily meal planning.",
      "Basic nutrition guidance.",
    ],
    buttonText: "GET WEIGHT GAIN PLAN",
  },
];
