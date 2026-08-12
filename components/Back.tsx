"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import useClickSound from "@/hooks/useClickSound";

function Back() {
  const router = useRouter();
  const pathname = usePathname();
  const playClick = useClickSound();

  // Don't show on homepage
  if (pathname === "/") {
    return null;
  }

  const handleClick = () => {
    playClick();
    router.back();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Go back"
      className="absolute left-2 top-2 z-50 sm:left-5 sm:top-5 fixed"
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 transition-transform duration-200 hover:scale-105 sm:h-16 sm:w-16"
      >
        <path
          d="M14 28.5L42 12.5C46 10.2 51 13.1 51 17.7V46.3C51 50.9 46 53.8 42 51.5L14 35.5C10 33.2 10 30.8 14 28.5Z"
          fill="#9CA3AF"
          stroke="#374151"
          strokeWidth="5"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default Back;