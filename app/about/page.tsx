"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Computer from "@/components/Skills/ChamberWithComputer";
import AboutWindow from "@/components/about/AboutWindow";
import MyInfo from "@/components/about/MyInfo";
import Ghost from "@/components/about/Ghost";
import WhiteDeadBodyCharacter from "@/components/about/WhiteDeadBodyCharacter";
import DeadBodyReported from "@/components/about/DeadBodyReported";

function Page() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isReported, setIsReported] = useState(false);
  const router = useRouter();

  const handleReport = () => {
    setIsReported(true);
    setTimeout(() => {
      router.push("/contact");
    }, 5000);
  };

  if (isReported) {
    return (
      <div className="relative min-h-screen">
        <DeadBodyReported />
      </div>
    );
  }

  return (
    <div className="relative h-screen w-screen overflow-x-auto overflow-y-hidden select-none bg-transparent no-scrollbar flex items-center justify-start">
      {/* 11:6 aspect-ratio room layout that scales to full screen height */}
      <div className="relative h-full aspect-[11/6] flex-shrink-0">
        <Computer onClick={() => setIsAboutOpen(true)} />
        <WhiteDeadBodyCharacter onClick={handleReport} />
        {/* Render Ghost inside the room container so it scrolls together */}
        <Ghost onClick={handleReport} />
      </div>

      <AboutWindow
        open={isAboutOpen}
        title="About Me"
        onClose={() => setIsAboutOpen(false)}
      >
        <MyInfo />
      </AboutWindow>
    </div>
  );
}

export default Page;