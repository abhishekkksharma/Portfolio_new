import React from "react";
import Vent from "../Vent";

function ProjectsMain() {
  return (
    <main className="among-font min-h-screen w-full px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center pt-10">
        <p className="text-6xl">Projects</p>
        <Vent path="/skills" side="right" open={true} className="w-15 h-15"/>
      </div>
    </main>
  );
}

export default ProjectsMain;