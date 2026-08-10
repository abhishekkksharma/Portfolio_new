"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import GhostGIF from "../../assets/Fall Ghost Sticker.gif";

function Ghost({ onClick }: { onClick?: () => void }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [facingLeft, setFacingLeft] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [knobOffset, setKnobOffset] = useState({ x: 0, y: 0 });

  const ghostRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef({ x: 0, y: 0 });
  const activeDrag = useRef(false);

  const keys = useRef({
    left: false,
    right: false,
    up: false,
    down: false,
  });

  useEffect(() => {
    const ghostSize = 88;
    const containerHeight = window.innerHeight;
    const containerWidth = containerHeight * (11 / 6);

    setPosition({
      x: (containerWidth - ghostSize) / 2,
      y: (containerHeight - ghostSize) / 2,
    });
    
    const isMobileUA = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isMobileWidth = window.innerWidth < 1024;
    setIsMobile(isMobileUA || isMobileWidth);
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

    const handleResize = () => {
      const isMobileUA = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      const isMobileWidth = window.innerWidth < 1024;
      setIsMobile(isMobileUA || isMobileWidth);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("resize", handleResize);

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

        const currentHeight = window.innerHeight;
        const currentWidth = currentHeight * (11 / 6);
        const maxX = currentWidth - ghostSize;
        const maxY = currentHeight - ghostSize;

        x = Math.max(0, Math.min(x, maxX));
        y = Math.max(0, Math.min(y, maxY));

        // Camera follow horizontal scroll logic on mobile viewports
        if (ghostRef.current) {
          const isMobileViewport = window.innerWidth < 1024 || /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
          if (isMobileViewport) {
            const scrollContainer = ghostRef.current.parentElement?.parentElement;
            if (scrollContainer) {
              const targetScrollLeft = x + (ghostSize / 2) - (window.innerWidth / 2);
              scrollContainer.scrollLeft = targetScrollLeft;
            }
          }
        }

        return { x, y };
      });

      animationFrame = requestAnimationFrame(move);
    };

    animationFrame = requestAnimationFrame(move);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  // Joystick Drag Event Handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    activeDrag.current = true;
    dragStart.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!activeDrag.current) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxRadius = 35;
    
    let knobX = dx;
    let knobY = dy;
    if (dist > maxRadius) {
      knobX = (dx / dist) * maxRadius;
      knobY = (dy / dist) * maxRadius;
    }
    
    setKnobOffset({ x: knobX, y: knobY });

    // Directional thresholds
    const threshold = 10;
    
    // Horizontal direction
    if (knobX < -threshold) {
      keys.current.left = true;
      keys.current.right = false;
      setFacingLeft(true);
    } else if (knobX > threshold) {
      keys.current.right = true;
      keys.current.left = false;
      setFacingLeft(false);
    } else {
      keys.current.left = false;
      keys.current.right = false;
    }

    // Vertical direction
    if (knobY < -threshold) {
      keys.current.up = true;
      keys.current.down = false;
    } else if (knobY > threshold) {
      keys.current.down = true;
      keys.current.up = false;
    } else {
      keys.current.up = false;
      keys.current.down = false;
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    activeDrag.current = false;
    setKnobOffset({ x: 0, y: 0 });
    keys.current.left = false;
    keys.current.right = false;
    keys.current.up = false;
    keys.current.down = false;
  };

  if (!isMounted) return null;

  return (
    <>
      <div
        ref={ghostRef}
        className="absolute left-0 top-0 z-20 opacity-80 group cursor-pointer"
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

      {/* Virtual Joystick for Mobile and Desktop users */}
      <div className="fixed bottom-6 right-6 lg:right-15 z-50 p-2 select-none bg-transparent">
        <div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="w-28 h-28 rounded-full bg-black/60 border-4 border-white relative flex items-center justify-center pointer-events-auto touch-none select-none cursor-grab active:cursor-grabbing shadow-2xl"
        >
          {/* Knob */}
          <div
            className="w-14 h-14 rounded-full bg-gradient-to-br from-white via-gray-100 to-gray-300 shadow-[inset_-3px_-3px_8px_rgba(0,0,0,0.35),0_6px_12px_rgba(0,0,0,0.5)] border-2 border-black/40 absolute"
            style={{
              transform: `translate(${knobOffset.x}px, ${knobOffset.y}px)`,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Ghost;