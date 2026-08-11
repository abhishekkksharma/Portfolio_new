"use client"
import React, { useState } from "react";
import Image from "next/image";
import AsteroidImage from "../../assets/asteroids/asteroid1.png";

import {
  Bootstrap,
  CSS3,
  Git,
  GitHub,
  Html5,
  Java,
  JavaScript,
  Linux,
  MongoDB,
  MySQL,
  NextJS,
  NodeJS,
  Express,
  ReactI as ReactIcon,
  Tailwind
} from "../../assets/tech-icons/tech-icons";

const skillIcons = {
  Bootstrap,
  CSS3,
  Git,
  GitHub,
  HTML: Html5,
  Java,
  JavaScript,
  Linux,
  MongoDB,
  MySQL,
  NextJS,
  NodeJS,
  Express,
  React: ReactIcon,
  Tailwind
};

type AsteroidProps = {
  skill: keyof typeof skillIcons;
};

function Asteroid({ skill }: AsteroidProps) {
  // 1. State to track if the main asteroid image has finished loading
  const [isLoaded, setIsLoaded] = useState(false);
  const SkillIcon = skillIcons[skill];

  return (
    // This acts as the empty placeholder div maintaining the layout structure
    <div className="relative w-30 h-30">
      
      {/* We keep the image in the DOM so it actually loads, 
          but hide it visually using opacity until isLoaded is true */}
      <Image
        src={AsteroidImage}
        fill
        className={`object-contain animate-[spin_30s_linear_infinite] transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        alt="asteroid"
        onLoad={() => setIsLoaded(true)}
      />

      {/* Conditionally render the icon and text ONLY after the background is loaded */}
      {isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image
            src={SkillIcon}
            width={28}
            height={28}
            alt={skill}
            className="object-contain"
          />

          <p className="text-[10px] font-medium text-white">
            {skill}
          </p>
        </div>
      )}
    </div>
  );
}

export default Asteroid;