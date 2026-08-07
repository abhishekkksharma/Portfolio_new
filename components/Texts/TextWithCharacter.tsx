"use client";

import { useState, useEffect } from "react";
import TypedText from "./TypedText";
import Image from "next/image";
import RedCharacter from "../../assets/red-among-us.svg";
import { cn } from "@/lib/utils";

import { playTypingSound } from "@/hooks/useClickSound";

interface TextWithCharacterProps {
  texts?: string[];
  className?: string;
}

function TextWithCharacter({
  texts = [
    "Welcome to Abhishek's Portfolio!",
    // "Please wait while we load the app!",
    ":)",
  ],
  className = "",
}: TextWithCharacterProps) {
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    if (startTyping) {
      playTypingSound();
    }
  }, [startTyping]);

  return (
    <div className={cn("flex justify-center items-center gap-3", className)}>
      {/* Text on LEFT */}
      <div className="min-w-[400px] text-right">
        {startTyping && (
          <TypedText
            texts={texts}
            className="text-lg font-sans text-gray-100"
          />
        )}
      </div>

      {/* Character on RIGHT */}
      <div
        className="character-enter"
        onAnimationEnd={() => setStartTyping(true)}
      >
        <div className="character-bob">
          <Image
            src={RedCharacter}
            className="w-12 h-12 transform rotate-15"
            alt="Red Among Us character"
          />
        </div>
      </div>
    </div>
  );
}

export default TextWithCharacter;