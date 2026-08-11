import React from "react";
import Image from "next/image";

interface Skill {
  skill: string;
  icon?: any;
  className?: string;
}

function SkillsCard({ skill, icon, className }: Skill) {
  return (
    <div className="flex flex-row justify-center items-center gap-2.5 px-4 py-2 rounded-xl bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700/80 hover:bg-zinc-900/40 hover:scale-[1.05] transition-all duration-200 cursor-default">
      {icon && (
        <Image 
          src={icon} 
          className={`w-5 h-5 object-contain select-none pointer-events-none ${className || ""}`} 
          alt={skill} 
        />
      )}
      <span className="text-sm font-mono tracking-wide text-zinc-300 font-medium select-none">{skill}</span>
    </div>
  );
}

export default SkillsCard;
