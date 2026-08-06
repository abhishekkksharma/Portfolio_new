"use client";

import Galaxy from "@/components/Galaxy";
import TextWithCharacter from "@/components/Texts/TextWithCharacter";
import HomeMain from "@/components/Homepage/HomeMain";
import { useFloatingCharacters } from "@/hooks/useFloatingCharacters";
import { useState } from "react";

const AMONG_US_IMAGES = [
  "/characters/among-us_blue_char.svg",
  "/characters/among-us_green_char.svg",
  "/characters/among-us_purple.svg",
  "/characters/Pink_among_us.svg",
  "/characters/red-among-us.svg",
  "/characters/yellow-among-us.svg",
];

export default function Home() {
  const floatingCharacters = useFloatingCharacters(AMONG_US_IMAGES, 15);
  const [charactersBG, setCharactersBG] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Galaxy Background */}
      <div className="fixed inset-0 z-0">
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

      {/* Floating Characters Background */}
      {charactersBG && (
        <div className="fixed inset-0 z-[1] pointer-events-none">
          {floatingCharacters}
        </div>
      )}

      {/* --------------------------------Content----------------------------------- */}
      <div className="relative z-10 min-h-screen font-mono">
        {loading && (
          <div className="min-h-screen flex justify-center items-center w-full text-lg">
            <TextWithCharacter />
          </div>
        )}
        {/* <HomeMain /> */}
      </div>
    </main>
  );
}
