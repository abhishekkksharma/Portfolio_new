"use client"
import React from "react";
import Image from "next/image";
import Open_Vent from "../assets/vents/open-vent.png";
import Closed_Vent from "../assets/vents/closed-vent.png";
import Link from "next/link";
import useClickSound from "@/hooks/useClickSound";

interface VentProps {
  path: string;
  open: boolean;
  side: "left" | "right";
  className?: string;
}

const paths = {
  Home: "/",
  About: "/about",
  Profile: "/profile",
  Skills: "/skills",
  Projects: "/projects",
} as const;

function Vent({ path, open, side, className = "" }: VentProps) {
  const label =
    Object.entries(paths).find(([, value]) => value === path)?.[0] ?? "Home";
  const playClick = useClickSound();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    playClick();
    // The Link component will handle navigation automatically
  };

  return (
    <Link
      href={path}
      onClick={handleClick}
      className={`group absolute bottom-0 right-4 ${
        side === "left" ? "left-0" : "right-0"
      } ${className}`}
    >
      <Image
        src={open ? Open_Vent : Closed_Vent}
        alt={open ? "Open vent" : "Closed vent"}
      />

      <span
        className={`pointer-events-none absolute bottom-full mb-2 whitespace-nowrap rounded-md bg-black/80 px-3 py-1 text-md text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${
          side === "left" ? "left-0" : "right-0"
        }`}
      >
        Vent to {label}
      </span>
    </Link>
  );
}

export default Vent;