"use client";

import React, { useState } from "react";
import Project from "./Project";
import { Triangle } from "lucide-react";
import useClickSound from "@/hooks/useClickSound";

interface ProjectData {
  name: string;
  content: string;
  link: string;
  githubLink: string;
  tech: string[];
  images: any[];
}

interface ProjectsI {
  projects: ProjectData[];
}

function MappedProjects({ projects }: ProjectsI) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const playClick = useClickSound();

  const prevProject = () => {
    if (!projects || projects.length === 0) return;
    playClick();
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextProject = () => {
    if (!projects || projects.length === 0) return;
    playClick();
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  if (!projects || projects.length === 0) {
    return (
      <div className="flex justify-center items-center text-gray-400 font-mono">
        No projects available
      </div>
    );
  }

  const activeProject = projects[currentIndex];

  return (
    <div className="flex justify-center flex-col gap-3 sm:gap-4 px-2 sm:px-4 md:px-8 lg:px-20 w-full">
      <Project
        key={activeProject.name}
        name={activeProject.name}
        content={activeProject.content}
        link={activeProject.link}
        githubLink={activeProject.githubLink}
        images={activeProject.images}
        tech={activeProject.tech}
      />
      <div className="flex justify-between items-center gap-8 sm:gap-12 md:gap-16 px-4 sm:px-8 md:px-22">
        <Triangle
          onClick={prevProject}
          className="w-8 h-8 sm:w-10 sm:h-10 rotate-90 scale-y-[-1] fill-gray-400 text-gray-700 hover:fill-[#3df260] hover:text-[#3df260] transition-colors duration-200 cursor-pointer flex-shrink-0"
        />
        {/* Project counter */}
        {/* <span className="text-gray-400 font-mono text-xs sm:text-sm">
          {currentIndex + 1} / {projects.length}
        </span> */}
        <Triangle
          onClick={nextProject}
          className="w-8 h-8 sm:w-10 sm:h-10 rotate-90 fill-gray-400 text-gray-700 hover:fill-[#3df260] hover:text-[#3df260] transition-colors duration-200 cursor-pointer flex-shrink-0"
        />
      </div>
    </div>
  );
}

export default MappedProjects;