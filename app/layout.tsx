import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#07080A",
};

export const metadata: Metadata = {
  title: "LION FITNESS | Build Strength. Transform Yourself.",
  description: "LION FITNESS offers fitness guidance, affordable diet plans, and nutrition support to help you work toward your fitness goals.",
  keywords: ["LION FITNESS", "Lion Fitness Gym", "Bangalore Gym", "Bangalore", "fitness", "bodybuilding", "strength training", "personal trainer", "diet plans", "weight loss", "weight gain", "Karnataka gym"],
  openGraph: {
    title: "LION FITNESS | Build Strength. Transform Yourself.",
    description: "LION FITNESS offers fitness guidance, affordable diet plans, and nutrition support to help you work toward your fitness goals.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#07080A] text-[#F8FAFC] font-sans antialiased selection:bg-[#FF5500] selection:text-white">
        {children}
      </body>
    </html>
  );
}
