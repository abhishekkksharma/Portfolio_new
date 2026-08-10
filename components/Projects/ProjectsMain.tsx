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
    KnowmoImage3,

    WalletImage1
} from "../../assets/projects/ProjectImages"
import MappedProjects from "./MappedProjects";

const projectsArray = [
  {
    name: "KwnowMo",
    content: "KnowMo is a community-driven learning platform built for Chitkara University students. It provides a single place to discover and share notes, study materials, guides, and resources contributed by students who have already walked the same academic path.",
    link: "https://knowmo.vercel.app/",
    githubLink: "https://github.com/abhishekkksharma/KnowMo",
    tech:["NextJs","MongoDB","Nodejs","ExpressJs"],
    images:[KnowmoImage1,KnowmoImage2,KnowmoImage3]
  },
  {
    name: "Addax",
    content: "Addax — an AI-powered learning assistant for YouTube videos.",
    link: "https://addaxx.vercel.app/",
    githubLink: "https://github.com/abhishekkksharma/",
    tech:["MERN","RAG","OAuth","JWT"],
    images:[AddaxImage1,AddaxImage2,AddaxImage3]
  },
  {
    name: "Anchor",
    content: "Anchor is a Developer Community platform build for learning, collaboration and connecting to people around you.",
    link: "https://anchor-ten-pi.vercel.app/about",
    githubLink: "https://github.com/abhishekkksharma/Anchor",
    tech:["MERN","OAuth","JWT"],
    images:[AnchorImage1,AnchorImage2,AnchorImage3]
  },
  {
    name: "Wallet",
    content: "Wallet is a personal document-management web app that lets you store all your important cards online, so you don’t need to carry them physically. You can even open the camera and add a new card instantly by just capturing it.",
    link: "https://wallet-chi-five.vercel.app/",
    githubLink: "https://github.com/abhishekkksharma/Wallet",
    tech:["ReactJs","Supabase"],
    images:[WalletImage1],
  },
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