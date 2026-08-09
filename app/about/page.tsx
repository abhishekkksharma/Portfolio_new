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
    <div className="relative min-h-screen">
      <Computer onClick={() => setIsAboutOpen(true)} />
      <Ghost onClick={handleReport} />
      <WhiteDeadBodyCharacter onClick={handleReport} />
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