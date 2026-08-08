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
  React
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
  React,
};

type AsteroidProps = {
  skill: keyof typeof skillIcons;
};

function Asteroid({ skill }: AsteroidProps) {
  const SkillIcon = skillIcons[skill];

  return (
    <div className="relative w-28 h-28">
      <Image
        src={AsteroidImage}
        fill
        className="object-contain animate-[spin_30s_linear_infinite] "
        alt="asteroid"
      />

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
    </div>
  );
}

export default Asteroid;