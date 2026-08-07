"use client";

import TextWithCharacter from "@/components/Texts/TextWithCharacter";
import HomeMain from "@/components/Homepage/HomeMain";
import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7800);

    return () => clearTimeout(timer);
  }, []);

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