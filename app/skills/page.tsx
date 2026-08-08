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
] as const;

function Page() {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div>
            <p className="among-font text-6xl text-gray-100">Skills</p>
        </div>
        <div className="relative w-[850px] h-[550px] flex items-center justify-center">
          {/* Character (larger and floating) */}
          <Image
            src={Red_Character}
            alt="character"
            className="relative z-10 w-52 h-52 object-contain character-bob"
          />

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
