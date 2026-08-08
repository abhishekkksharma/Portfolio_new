"use client";

import React, { useState } from "react";
import Computer from "@/components/Skills/ChamberWithComputer";
import AboutWindow from "@/components/about/AboutWindow";
import MyInfo from "@/components/about/MyInfo";

function Page() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <Computer onClick={() => setIsAboutOpen(true)} />

      <AboutWindow
        open={isAboutOpen}
        title="About Me"
        onClose={() => setIsAboutOpen(false)}
      >
        <MyInfo/>
      </AboutWindow>
    </div>
  );
}

export default Page;