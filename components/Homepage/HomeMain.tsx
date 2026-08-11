"use client";

import React from "react";
import { Settings, FileUser, UserRound } from "lucide-react";

import { useFloatingCharacters } from "@/hooks/useFloatingCharacters";

import CircleButton from "../Buttons/CircleButton";
import BoxButton from "../Buttons/BoxButton";
import SoundButton from "../Buttons/SoundButton";
import LinkedInLogo from "../../assets/linkedin.svg";
import GithubLogo from "../../assets/github.svg";
import Image from "next/image";

const AMONG_US_IMAGES = [
  "/characters/among-us_blue_char.svg",
  "/characters/among-us_green_char.svg",
  "/characters/among-us_purple.svg",
  "/characters/Pink_among_us.svg",
  "/characters/red-among-us.svg",
  "/characters/yellow-among-us.svg",
];

function Main() {
  const floatingCharacters = useFloatingCharacters(AMONG_US_IMAGES, 15);

  const handleClick = (name: string) => {
    console.log(`${name} clicked`);
  };

  return (
    <main
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        text-white
      "
    >
      {/* Floating Among Us Characters */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {floatingCharacters}
      </div>

      {/* Main Content */}
      <div
        className="
          relative
          z-10
          min-h-screen
          w-full
          flex
          items-center
          justify-center
          px-5
        "
      >
        <div className="among-font w-full flex flex-col items-center">
          {/* Heading */}
          <h1
            className="
              text-center
              text-5xl
              sm:text-6xl
              md:text-7xl
              tracking-[2px]
              scale-x-[1.15]
              mb-16
            "
          >
            ABHISHEK SHARMA
          </h1>

          {/* Menu */}
          <div className="w-full max-w-[650px]">
            {/* Main Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <BoxButton text="PROJECTS" path="/projects" />

              <BoxButton text="ABOUT ME" path="/about" />

              <BoxButton text="SKILLS" path="/skills" small />

              <BoxButton text="CONTACT" path="/contact" small />
            </div>

            {/* Circle Buttons */}
            <div
              className="
                flex
                items-center
                justify-center
                gap-5
                mt-7
                flex-wrap
              "
            >
              <SoundButton />

              <CircleButton
                label="Hire Me"
                href="/hire-me"
              >
                <FileUser size={36} />
              </CircleButton>

              <CircleButton label="Profile" href="/profile">
                <UserRound size={34} />
              </CircleButton>

              <CircleButton
                label="Github"
                css=""
                href="https://github.com/abhishekkksharma"
              >
                <Image
                  src={GithubLogo}
                  alt="Github Logo"
                  className="w-9 invert hover:invert-0"
                />
              </CircleButton>

              <CircleButton
                label="LinkedIn"
                href="https://www.linkedin.com/in/abhish3k-sharma/"
              >
                <Image src={LinkedInLogo} alt="LinkedIn Logo" className="w-9" />
              </CircleButton>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
