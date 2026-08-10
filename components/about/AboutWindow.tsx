"use client"

import React, {useEffect, useRef} from "react";
import Red_AmongUS_Face from "../../assets/faceIcons/red.png"
import Image from "next/image";
import useClickSound from "@/hooks/useClickSound";

interface AboutWindowProps {
  children: React.ReactNode;
  title?: string;
  open: boolean;
  onClose: () => void;
}

function AboutWindow({
  children,
  title = "About - Notepad",
  open,
  onClose,
}: AboutWindowProps) {
  const playsound = useClickSound();
  const hasPlayed = useRef(false);

  useEffect(() => {
    // Only play sound when component opens and hasn't played yet
    if (open) {
      if (!hasPlayed.current) {
        playsound();
        hasPlayed.current = true;
      }
    } else {
      hasPlayed.current = false;
    }
  }, [open, playsound]);

  if (!open) return null;
  

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 p-10 backdrop-blur-sm">
      <div className="relative flex h-[90vh] w-[75vw] flex-col overflow-hidden border-2 border-black/70 bg-gray-400/20 shadow-2xl">

        {/* Title bar */}
        <div className="flex h-9 shrink-0 items-center justify-between border-b-2 border-black/70 bg-[#000080] px-2">
          <div className="flex items-center gap-2">
            <Image src={Red_AmongUS_Face} alt="" className="h-5 w-5 border border-black" />

            <span className="text-sm font-bold text-white">
              {title}
            </span>
          </div>

          {/* Window buttons */}
          <div className="flex gap-1">
            {/* <button
              type="button"
              className="flex h-6 w-6 items-center justify-center border-2 border-white border-b-black border-r-black bg-[#c0c0c0] text-xs font-bold text-black"
            >
              _
            </button>

            <button
              type="button"
              className="flex h-6 w-6 items-center justify-center border-2 border-white border-b-black border-r-black bg-[#c0c0c0] text-xs font-bold text-black"
            >
              □
            </button> */}

            <button
              type="button"
              onClick={onClose}
              className="flex h-6 w-6 items-center justify-center border-2 border-white border-b-black border-r-black bg-[#c0c0c0] text-xs font-bold text-black"
            >
              ×
            </button>
          </div>
        </div>

        {/* Menu */}
        <div className="flex h-7 shrink-0 items-center gap-5 border-b border-black/50 bg-[#c0c0c0] px-3 text-sm text-black">
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Help</span>
        </div>

        {/* Content */}
        <div className="relative flex-1 overflow-auto bg-white p-8 select-text">
          {children}
        </div>

        {/* Status bar */}
        <div className="flex h-6 shrink-0 items-center border-t border-black/50 bg-[#c0c0c0] px-2 text-xs text-black">
          Ready
        </div>
      </div>
    </div>
  );
}

export default AboutWindow;