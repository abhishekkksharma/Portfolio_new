"use client";

import Image from "next/image";
import { useFloatingCharacters } from "@/hooks/useFloatingCharacters";
import My_Photo from "../../assets/my_photo2.png";

const AMONG_US_IMAGES = [
  "/characters/among-us_blue_char.svg",
  "/characters/among-us_green_char.svg",
  "/characters/among-us_purple.svg",
  "/characters/Pink_among_us.svg",
  "/characters/red-among-us.svg",
  // "/characters/yellow-among-us.svg",
];

function Page() {
  const floatingCharacters = useFloatingCharacters(AMONG_US_IMAGES, 10);

  return (
    <main className="min-h-screen w-full bg-transparent text-white px-5 sm:px-8 lg:px-16 py-10 lg:py-16">
      {/* Floating Among Us Characters */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {floatingCharacters}
      </div>

      {/* Header */}
      <header className="max-w-7xl mx-auto flex items-center justify-between mb-14 lg:mb-20 pt-6 lg:pt-0">
        <div>
          <p className="among-font text-4xl sm:text-5xl lg:text-6xl">HIRE ME</p>

          <p className="text-xs sm:text-sm tracking-[0.3em] text-white/40 mt-2">
            PLAYER PROFILE // 001
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/60 uppercase tracking-widest">
            Available
          </span>
        </div>
      </header>

      {/* Main */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">
        {/* PHOTO */}
        <div className="relative flex justify-center lg:justify-start pt-10">
          <p className="absolute -top-2 left-0 among-font text-6xl sm:text-8xl lg:text-9xl text-white/70 select-none">
            CREWMATE
          </p>

          <div className="relative justify-center w-[180px] sm:w-[240px] lg:w-[280px] ">
            <Image
              src={My_Photo}
              alt="Abhishek Sharma"
              priority
              className="w-full h-auto grayscale-20"
            />

            {/* Image status */}
            <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
              <span className="bg-black/70 px-2.5 py-1 text-[9px] sm:text-xs tracking-[0.15em]">
                ABHISHEK_SHARMA
              </span>

              <span className="bg-black/70 px-2.5 py-1 text-[9px] sm:text-xs tracking-widest">
                ONLINE
              </span>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="space-y-10">
          {/* INTRO */}
          <div>
            <p className="among-font text-lg sm:text-xl text-white/50 mb-3">
              PERSONAL
            </p>

            <h1 className="among-font text-5xl sm:text-6xl lg:text-8xl leading-[0.85]">
              BUILD.
              <br />
              SOLVE.
              <br />
              SHIP.
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed">
              I'm Abhishek Sharma, a Computer Science Engineering student and
              full-stack developer who enjoys turning ideas into useful,
              responsive and interactive digital experiences.
            </p>
          </div>

          {/* PLAYER STATS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 border-y border-white/20 py-7">
            <div>
              <p className="among-font text-3xl sm:text-4xl">9.29</p>

              <p className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest mt-1">
                CGPA
              </p>
            </div>

            <div>
              <p className="font-mono text-2xl sm:text-3xl">350+</p>

              <p className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest mt-1">
                LeetCode
              </p>
            </div>

            <div>
              <p className="font-mono text-2xl sm:text-3xl">5+</p>

              <p className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest mt-1">
                Projects
              </p>
            </div>

            <div>
              <p className="among-font text-3xl sm:text-4xl">CSE</p>

              <p className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest mt-1">
                Student
              </p>
            </div>
          </div>

          {/* SKILLS */}
          <div>
            <p className="among-font text-xl sm:text-2xl text-white/50 mb-5">
              MY TASKS
            </p>

            <div className="flex flex-wrap gap-2.5">
              {[
                "React.js",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Supabase",
                "Tailwind CSS",
                "C++",
                "Java",
                "Python",
                "DSA",
              ].map((skill) => (
                <span
                  key={skill}
                  className="
                    border border-white/20
                    px-3 py-2
                    text-xs sm:text-sm
                    text-white/80
                    hover:bg-white
                    hover:text-black
                    hover:border-white
                    transition-all duration-300
                  "
                >
                  {skill}
                </span>
              ))}
              <div className="flex font-sans text-sm justify-center items-center">
                <a
                  href="/profile"
                  className="font-sans text-sm text-zinc-400 hover:text-zinc-200 transition-colors underline underline-offset-4"
                >
                  See more
                </a>
              </div>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div>
            <p className="among-font text-xl sm:text-2xl text-white/50 mb-5">
              EXPERIENCE
            </p>

            <div className="border-l border-white/30 pl-5">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <p className="text-lg sm:text-xl font-medium">
                  Concentrix Daksh
                </p>

                <p className="text-xs text-white/40">APR 2024 — SEP 2024</p>
              </div>

              <p className="text-sm text-white/50 mt-1">Advisor // Full-time</p>

              <p className="text-sm sm:text-base text-white/60 mt-4 leading-relaxed">
                Resolved 50+ daily customer inquiries while maintaining strong
                service quality, collaborating with cross-functional teams and
                providing accurate product support.
              </p>
            </div>
          </div>

          {/* PROJECTS */}
          <div>
            <p className="among-font text-xl sm:text-2xl text-white/50 mb-5">
              COMPLETED TASKS
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {/* ATOM */}
              <div className="border border-white/20 p-5 hover:border-white/60 transition-all duration-300">
                <p className="among-font text-2xl">ATOM</p>

                <p className="text-xs text-white/40 mt-2">
                  MENTAL HEALTH PLATFORM
                </p>

                <p className="text-sm text-white/60 mt-4 leading-relaxed">
                  React + Supabase platform featuring self-assessments,
                  therapist discovery, AI chat, mood tracking and wellness
                  tools.
                </p>
              </div>

              {/* ANCHOR */}
              <div className="border border-white/20 p-5 hover:border-white/60 transition-all duration-300">
                <p className="among-font text-2xl">ANCHOR</p>

                <p className="text-xs text-white/40 mt-2">
                  MERN NETWORKING PLATFORM
                </p>

                <p className="text-sm text-white/60 mt-4 leading-relaxed">
                  Full-stack networking platform with JWT authentication,
                  Socket.io messaging, geolocation search and dynamic profiles.
                </p>
              </div>

              {/* WALLET */}
              <div className="border border-white/20 p-5 hover:border-white/60 transition-all duration-300">
                <p className="among-font text-2xl">WALLET</p>

                <p className="text-xs text-white/40 mt-2">DIGITAL ID MANAGER</p>

                <p className="text-sm text-white/60 mt-4 leading-relaxed">
                  Secure digital ID management system built with React, Redux
                  Toolkit and Supabase.
                </p>
              </div>
            </div>
            <div className="flex justify-end py-2">
              <a
                href="/projects"
                className="font-sans text-sm text-zinc-400 hover:text-zinc-200 transition-colors underline underline-offset-4"
              >
                See More
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="mailto:abhisheksharma7340733@gmail.com"
              className="
                group
                flex items-center justify-center gap-4
                bg-white text-black
                border border-white
                px-8 py-4
                uppercase tracking-[0.2em]
                text-sm
                overflow-hidden
                relative
              "
            >
              <span className="relative z-10">Start Task</span>

              <span className="relative z-10 group-hover:translate-x-2 transition-transform">
                →
              </span>

              <span
                className="
                  absolute inset-0
                  bg-transparent
                  translate-y-full
                  group-hover:translate-y-0
                  transition-transform duration-300
                "
              />
            </a>

            <a
              href="https://github.com/abhishekkksharma"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center
                border border-white/30
                px-8 py-4
                uppercase tracking-[0.2em]
                text-sm
                hover:border-white
                transition-all duration-300
              "
            >
              GitHub
            </a>

            <a
              href="/Abhishek-Sharma-Resume.pdf"
              download="Abhishek-Sharma-Resume.pdf"
              className="
                flex items-center justify-center
                border border-white/30
                px-8 py-4
                uppercase tracking-[0.2em]
                text-sm
                hover:border-white
                transition-all duration-300
              "
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="
          max-w-7xl mx-auto
          mt-20 lg:mt-28
          pt-6
          border-t border-white/10
          flex flex-col sm:flex-row
          justify-between
          gap-3
          text-[10px] sm:text-xs
          text-white/30
          uppercase
          tracking-[0.2em]
        "
      >
        <span>Emergency Meeting // Available for opportunities</span>

        <span>Chitkara University // CSE</span>
      </footer>
    </main>
  );
}

export default Page;
