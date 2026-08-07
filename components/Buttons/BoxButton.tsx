"use client";

import Link from "next/link";
import useClickSound from "@/hooks/useClickSound";

interface BoxButtonI {
  text: string;
  path: string;
  small?: boolean;
}

export default function BoxButton({
  text,
  path,
  small = false,
}: BoxButtonI) {
  const playClick = useClickSound();

  return (
    <Link
      href={path}
      onClick={playClick}
      className={`
        w-full
        flex items-center justify-center
        text-center
        bg-transparent
        text-white
        border-[3px] border-white
        rounded-2xl
        cursor-pointer
        transition-all duration-150
        hover:bg-white hover:text-black
        active:scale-95
        ${small ? "h-[55px] text-3xl" : "h-[75px] text-4xl"}
      `}
    >
      {text}
    </Link>
  );
}