"use client";

import TextWithCharacter from "@/components/Texts/TextWithCharacter";
import HomeMain from "@/components/Homepage/HomeMain";
import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false); 

  useEffect(() => {
    setIsMounted(true); 

    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");

    if (hasSeenIntro) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasSeenIntro", "true");
      }, 7800);

      return () => clearTimeout(timer);
    }
  }, []);

  // Show a blank background (matching your main wrapper) until mounted 
  // to prevent the split-second flash of the wrong component.
  if (!isMounted) {
    return <main className="relative min-h-screen overflow-hidden bg-transparent" />;
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent">
      {/* Content */}
      <div className="relative z-10 min-h-screen font-mono">
        {loading ? (
          <div className="min-h-screen flex justify-center items-center w-full text-lg">
            <TextWithCharacter />
          </div>
        ) : (
          <HomeMain />
        )}
      </div>
    </main>
  );
}