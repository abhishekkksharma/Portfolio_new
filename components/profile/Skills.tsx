import Image from "next/image";
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
  ReactI,
  NextJS,
  NodeJS,
  Express,
  Tailwind,
  TypeScript,
  CPP,
  AWS,
  Postman
} from "../../assets/tech-icons/tech-icons";

import {
  Blue_Character,
  Green_Character,
  Purple_Character,
  Yellow_Character,
  Pink_Character,
} from "../../public/characters/Characters";
import SkillsCard from "./SkillsCard";

const skillCategories = [
  {
    title: "Frontend Development",
    character: Blue_Character,
    borderColor: "hover:border-cyan-500/50 hover:shadow-cyan-500/10",
    textColor: "text-cyan-400",
    glowColor: "bg-cyan-500/10",
    className: "lg:col-span-3 md:col-span-2 col-span-1",
    skills: [
      { name: "NextJS", icon: NextJS, className: "invert" },
      { name: "ReactJS", icon: ReactI },
      { name: "HTML5", icon: Html5 },
      { name: "CSS3", icon: CSS3 },
      { name: "Tailwind CSS", icon: Tailwind },
      { name: "Bootstrap", icon: Bootstrap },
    ],
  },
  {
    title: "Backend & Databases",
    character: Green_Character,
    borderColor: "hover:border-emerald-500/50 hover:shadow-emerald-500/10",
    textColor: "text-emerald-400",
    glowColor: "bg-emerald-500/10",
    className: "lg:col-span-3 md:col-span-2 col-span-1",
    skills: [
      { name: "NodeJS", icon: NodeJS },
      { name: "Express", icon: Express, className: "invert"},
      { name: "MongoDB", icon: MongoDB },
      { name: "MySQL", icon: MySQL },
    ],
  },
  {
    title: "Programming Languages",
    character: Purple_Character,
    borderColor: "hover:border-purple-500/50 hover:shadow-purple-500/10",
    textColor: "text-purple-400",
    glowColor: "bg-purple-500/10",
    className: "lg:col-span-2 md:col-span-1 col-span-1",
    skills: [
      { name: "Java", icon: Java },
      { name: "JavaScript", icon: JavaScript },
      { name: "TypeScript", icon: TypeScript },
      { name: "C++", icon: CPP },
    ],
  },
  {
    title: "Tools & Environments",
    character: Yellow_Character,
    borderColor: "hover:border-amber-500/50 hover:shadow-amber-500/10",
    textColor: "text-amber-400",
    glowColor: "bg-amber-500/10",
    className: "lg:col-span-2 md:col-span-1 col-span-1",
    skills: [
      { name: "Git", icon: Git },
      { name: "GitHub", icon: GitHub, className: "invert" },
      { name: "Linux", icon: Linux },
      { name: "AWS EC2", icon: AWS },
      { name: "Postman", icon: Postman },
    ],
  },
  {
    title: "Core Concepts",
    character: Pink_Character,
    borderColor: "hover:border-rose-500/50 hover:shadow-rose-500/10",
    textColor: "text-rose-400",
    glowColor: "bg-rose-500/10",
    className: "lg:col-span-2 md:col-span-2 col-span-1",
    skills: [
      { name: "DSA" },
      { name: "OOP" },
      { name: "DBMS" },
      { name: "Operating Systems" },
      { name: "Computer Networks" },
    ],
  },
];

function Skills() {
  return (
    <section className="w-full text-white px-4 sm:px-6 md:px-10 lg:px-16 py-8 md:py-16">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="relative flex flex-col items-center justify-center mb-12 sm:mb-16">
          <h2 className="among-font text-4xl sm:text-5xl md:text-6xl tracking-widest text-zinc-100 relative z-10 text-center">
            Skills
          </h2>
          <div className="absolute w-48 h-10 bg-red-600/10 blur-2xl rounded-full pointer-events-none" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`group relative border border-zinc-900 rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl ${category.borderColor} ${category.className}`}
            >
              {/* Glow background on hover */}
              <div
                className={`absolute -top-16 -right-16 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${category.glowColor}`}
              />

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <h3
                    className={`font-mono text-xl sm:text-2xl font-bold tracking-wide transition-colors duration-200 ${category.textColor}`}
                  >
                    {category.title}
                  </h3>
                  <div className="relative w-14 h-14 transform -rotate-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 shrink-0">
                    <Image
                      src={category.character}
                      alt={category.title}
                      fill
                      className="object-contain pointer-events-none select-none"
                    />
                  </div>
                </div>

                <hr className="border-zinc-800/80 mb-6 group-hover:border-zinc-700/50 transition-colors duration-300" />

                {/* Badges */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <SkillsCard
                      key={skill.name}
                      skill={skill.name}
                      icon={"icon" in skill ? skill.icon : undefined}
                      className={
                        "className" in skill ? skill.className : undefined
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
