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
    tagline: "Nutrition plan designed to support healthy, sustainable weight loss.",
    price: 99,
    formattedPrice: "₹99",
    badge: "FAT LOSS & LEAN DEFINITION",
    popular: false,
    accentColor: "#D4AF37",
    summary: "Calorie-deficit meal structure focused on nutritious, satisfying, and affordable daily meals.",
    features: [
      "Weight-loss-focused meal suggestions",
      "Breakfast, lunch, and dinner planning",
      "Healthy snack recommendations",
      "Basic nutrition guidance",
      "Affordable food options",
      "Daily meal suggestions",
    ],
    buttonText: "GET WEIGHT LOSS PLAN",
  },
  {
    id: "weight-gain",
    name: "WEIGHT GAIN PLAN",
    tagline: "Nutrition plan designed to support healthy weight gain and muscle development.",
    price: 129,
    formattedPrice: "₹129",
    badge: "STRENGTH & MUSCLE MASS",
    popular: true,
    accentColor: "#F59E0B",
    summary: "Calorie-rich meal structure loaded with wholesome complex carbohydrates and balanced protein.",
    features: [
      "Weight-gain-focused meal suggestions",
      "Healthy calorie-rich food recommendations",
      "Breakfast, lunch, and dinner planning",
      "Healthy snack recommendations",
      "Basic nutrition guidance",
      "Daily meal suggestions",
    ],
    buttonText: "GET WEIGHT GAIN PLAN",
  },
];
