import React from "react";
import Chamber from "../../assets/skills/chamber2.png";
import Image from "next/image";
import Vent from "../Vent";
import ComputerImage from "../../assets/computer.png";

interface ComputerProps {
  onClick?: () => void;
}

function Computer({ onClick }: ComputerProps) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <Image
        src={Chamber}
        fill
        className="object-cover z-0"
        alt="chamber"
        priority
      />

      {/* Computer with subtle hover glow */}
      <div
        onClick={onClick}
        className="group absolute cursor-pointer z-10"
        style={{ top: "42.29%", left: "35.68%" }}
      >
        <div
          className="
            absolute inset-0 scale-110 rounded-full
            bg-white/15 blur-xl
            transition-all duration-500
            group-hover:scale-125
            group-hover:bg-white/30
            group-hover:blur-2xl
          "
        />

        <Image
          src={ComputerImage}
          className="
            relative z-10 w-30 h-30
            drop-shadow-[0_0_8px_rgba(210,210,210,1)]
            transition-all duration-100
            group-hover:drop-shadow-[0_0_10px_rgba(240,240,240,1)]
          "
          alt="computer"
        />
      </div>

      <Vent
        path="/projects"
        side="right"
        open={true}
        className="h-15 w-15 among-font right-[15.37%] bottom-0 z-10"
      />
    </div>
  );
}

export default Computer;