import React from "react";
import Vent from "../Vent";
import SecurityRoom from "./SecurityRoom";
import Project from "./Project";
import {Triangle} from "lucide-react"
import {
  AnchorImage1,
    AnchorImage2,
    AnchorImage3,

    AddaxImage1,
    AddaxImage2,
    AddaxImage3,

    KnowmoImage1,
    KnowmoImage2,
    // KnowmoImage3,

    WalletImage1,
    WalletImage2
} from "../../assets/projects/ProjectImages"
import MappedProjects from "./MappedProjects";

const projectsArray = [
  {
    name: "KnowMo",
    content:
      "KnowMo is a community-driven learning platform for Chitkara University students to discover and share notes, study materials, guides, and academic resources contributed by fellow students.",
    link: "https://knowmo.vercel.app/",
    githubLink:
      "https://github.com/abhishekkksharma/KnowMo",
    tech: ["MERN"],
    images: [KnowmoImage1, KnowmoImage2]
  },
  {
    name: "Addax",
    content:
      "Addax is an AI-powered learning assistant for YouTube videos that helps users understand video content through retrieval-augmented generation, authentication, and an interactive learning experience.",
    link: "https://addaxx.vercel.app/",
    githubLink:
      "https://github.com/abhishekkksharma/",
    tech: ["MERN", "RAG", "OAuth", "JWT"],
    images: [AddaxImage1, AddaxImage2, AddaxImage3]
  },
  {
    name: "Anchor",
    content:
      "Anchor is a developer community platform built for learning, collaboration, and connecting with people around you through real-time communication, content sharing, and location-based discovery.",
    link: "https://anchor-ten-pi.vercel.app/about",
    githubLink:
      "https://github.com/abhishekkksharma/Anchor",
    tech: ["MERN","Paginations","Map Integration","Web Sockets"],
    images: [AnchorImage2, AnchorImage1, AnchorImage3]
  },
  {
    name: "Wallet",
    content:
      "Wallet is a secure digital ID manager that lets users store, organize, and retrieve important documents online using authentication, encrypted storage, and a responsive interface for easy access.",
    link: "https://wallet-chi-five.vercel.app/",
    githubLink:
      "https://github.com/abhishekkksharma/Wallet",
    tech: ["React", "Redux Toolkit", "Supabase"],
    images: [WalletImage1, WalletImage2]
  }
];

function ProjectsMain() {
  return (
    <main className="among-font min-h-screen w-full">
      <Vent path="/skills" side="right" open={true} className="w-15 h-15"/>

      <div className="flex flex-col items-center pt-10">
        <p className="text-6xl">Projects</p>
      </div>
      
      {/* Responsive layout: row on desktop, column on mobile */}
      <div className="flex flex-col lg:flex-row w-full items-center gap-8 lg:gap-16 pr-0 lg:pr-12">
        <div className="flex-shrink-0">
          <SecurityRoom/>
        </div>
        <div className="flex-1 flex justify-center py-4 lg:py-10 w-full">
          <MappedProjects projects={projectsArray}/>
        </div>
      </div>
    </main>
  );
}

export default ProjectsMain;