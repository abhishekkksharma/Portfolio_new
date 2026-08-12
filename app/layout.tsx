import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Galaxy from "@/components/Galaxy";
import Back from "@/components/Back";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhishek's Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white relative">
        {/* Galaxy Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Galaxy
            mouseRepulsion={false}
            mouseInteraction={false}
            density={3}
            glowIntensity={0.1}
            saturation={0}
            hueShift={140}
            twinkleIntensity={0.5}
            rotationSpeed={0.05}
            repulsionStrength={0}
            autoCenterRepulsion={0}
            starSpeed={0}
            speed={1}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex-grow flex flex-col">
          <Back />
          {children}
        </div>
      </body>
    </html>
  );
}
