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
    <div
      className={cn(
        "flex justify-center items-center gap-2 sm:gap-4 w-full",
        className,
      )}
    >
      {/* Text on LEFT */}
      {/* Using a fixed width (240px mobile, 400px desktop) ensures the typing text doesn't shift the layout, while staying centered with the character */}
      <div className="w-[240px] sm:w-[400px] flex justify-end">
        {startTyping && (
          <TypedText
            texts={texts}
            className="text-sm sm:text-lg font-sans text-gray-100 text-right"
          />
        )}
      </div>

      {/* Character on RIGHT */}
      <div
        className="character-enter shrink-0"
        onAnimationEnd={() => setStartTyping(true)}
      >
        <div className="character-bob">
          <Image
            src={RedCharacter}
            className="w-18 h-18 transform rotate-12 sm:rotate-15"
            alt="Red Among Us character"
          />
        </div>
      </div>
    </div>
  );
}

export default TextWithCharacter;
