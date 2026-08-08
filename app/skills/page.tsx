import React from "react";
import Asteroid from "@/components/Skills/Asteroid";
import { Red_Character } from "@/public/characters/Characters";
import Image from "next/image";

const skills = [
  "HTML",
  "CSS3",
  "JavaScript",
  "React",
  "NextJS",
  "NodeJS",
  "Express",
  "MongoDB",
  "MySQL",
  "Bootstrap",
  "Git",
  "GitHub",
  "Java",
  "Linux",
  "Tailwind",
] as const;

function Page() {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="mb-6">
            <p className="among-font text-6xl text-gray-100">Skills</p>
        </div>
        <div className="relative w-[1050px] h-[650px] flex items-center justify-center">
          
          {/* Saturn Rings - Outer Thin Solid Line & Inner Dashed Line */}
          {/* Back Rings (behind character, z-index 4 & 5) */}
          {/* <div
            className="absolute w-[860px] h-[280px] border border-white/10 rounded-full pointer-events-none"
            style={{
              transform: 'rotate(-12deg)',
              clipPath: 'inset(0% 0% 50% 0%)',
              zIndex: 4,
            }}
          /> */}
          {/* <div
            className="absolute w-[840px] h-[270px] border-2 border-dashed border-white/20 rounded-full pointer-events-none shadow-[0_0_15px_rgba(255,255,255,0.05)_inset]"
            style={{
              transform: 'rotate(-12deg)',
              clipPath: 'inset(0% 0% 50% 0%)',
              zIndex: 5,
            }}
          /> */}

          {/* Character (larger and floating) */}
          <Image
            src={Red_Character}
            alt="character"
            className="relative z-10 w-52 h-52 object-contain character-bob"
          />

          {/* Front Rings (in front of character, z-index 11 & 12) */}
          {/* <div
            className="absolute w-[860px] h-[280px] border border-white/10 rounded-full pointer-events-none"
            style={{
              transform: 'rotate(-12deg)',
              clipPath: 'inset(50% 0% 0% 0%)',
              zIndex: 11,
            }}
          />
          <div
            className="absolute w-[840px] h-[270px] border-2 border-dashed border-white/20 rounded-full pointer-events-none shadow-[0_0_15px_rgba(255,255,255,0.05)_inset]"
            style={{
              transform: 'rotate(-12deg)',
              clipPath: 'inset(50% 0% 0% 0%)',
              zIndex: 12,
            }}
          /> */}

          {/* Orbiting Asteroids */}
          {skills.map((skill, index) => {
            const delay = -(index * 30) / skills.length;
            return (
              <div
                key={skill}
                className="absolute left-1/2 top-1/2 animate-orbit"
                style={{
                  animationDelay: `${delay}s`,
                }}
              >
                <Asteroid skill={skill} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Page;
