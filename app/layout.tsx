import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "FOREVER FITNESS | BUILD YOUR BEST SELF",
  description: "Train harder, get stronger, and transform your lifestyle with expert coaching and personalized fitness and diet programs at FOREVER FITNESS Bagalkot.",
  keywords: ["FOREVER FITNESS", "Forever Fitness Gym", "Bagalkot Gym", "Almatti to Bagalkot", "fitness", "bodybuilding", "strength training", "personal trainer", "Karnataka gym"],
  openGraph: {
    title: "FOREVER FITNESS | BUILD YOUR BEST SELF",
    description: "Train harder, get stronger, and transform your lifestyle with expert coaching and personalized fitness programs at FOREVER FITNESS Bagalkot.",
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
