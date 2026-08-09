"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import GhostGIF from "../../assets/Fall Ghost Sticker.gif";

function Ghost({ onClick }: { onClick?: () => void }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [facingLeft, setFacingLeft] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const keys = useRef({
    left: false,
    right: false,
    up: false,
    down: false,
  });

  useEffect(() => {
    const ghostSize = 88;

    setPosition({
      x: (window.innerWidth - ghostSize) / 2,
      y: (window.innerHeight - ghostSize) / 2,
    });
    setIsMounted(true);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        keys.current.left = true;
        setFacingLeft(true);
      }

      if (e.key === "ArrowRight") {
        keys.current.right = true;
        setFacingLeft(false);
      }

      if (e.key === "ArrowUp") {
        keys.current.up = true;
      }

      if (e.key === "ArrowDown") {
        keys.current.down = true;
      }

      if (
        ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)
      ) {
        e.preventDefault();
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") keys.current.left = false;
      if (e.key === "ArrowRight") keys.current.right = false;
      if (e.key === "ArrowUp") keys.current.up = false;
      if (e.key === "ArrowDown") keys.current.down = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    let animationFrame: number;

    const move = () => {
      setPosition((prev) => {
        const speed = 3;

        let x = prev.x;
        let y = prev.y;

        if (keys.current.left) x -= speed;
        if (keys.current.right) x += speed;
        if (keys.current.up) y -= speed;
        if (keys.current.down) y += speed;

        const maxX = window.innerWidth - ghostSize;
        const maxY = window.innerHeight - ghostSize;

        x = Math.max(0, Math.min(x, maxX));
        y = Math.max(0, Math.min(y, maxY));

        return { x, y };
      });

      animationFrame = requestAnimationFrame(move);
    };

    animationFrame = requestAnimationFrame(move);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className="fixed left-0 top-0 z-10 opacity-80 group cursor-pointer"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onClick={onClick}
    >
      {/* Navigation Tooltip */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none drop-shadow-md">
        <div className="flex justify-center w-full">
          <div className="border-[3px] border-[#333333] rounded-md bg-[#f5f5f5] p-1">
            <ArrowUp className="w-5 h-5 text-[#333333] stroke-[3]" />
          </div>
        </div>
        <div className="flex gap-1">
          <div className="border-[3px] border-[#333333] rounded-md bg-[#f5f5f5] p-1">
            <ArrowLeft className="w-5 h-5 text-[#333333] stroke-[3]" />
          </div>
          <div className="border-[3px] border-[#333333] rounded-md bg-[#f5f5f5] p-1">
            <ArrowDown className="w-5 h-5 text-[#333333] stroke-[3]" />
          </div>
          <div className="border-[3px] border-[#333333] rounded-md bg-[#f5f5f5] p-1">
            <ArrowRight className="w-5 h-5 text-[#333333] stroke-[3]" />
          </div>
        </div>
      </div>

      <Image
        src={GhostGIF}
        alt="Among Us Ghost"
        width={88}
        height={88}
        className={`transition-transform duration-100 ${
          facingLeft ? "scale-x-[-1]" : "scale-x-100"
        }`}
      />
    </div>
  );
}

export default Ghost;