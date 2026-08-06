"use client"
import React from "react";
import useClickSound from "@/hooks/useClickSound";


function Main() {
  const playClick = useClickSound();
  return (
    <>
      <div className="text-white font-sans min-h-screen justify-center items-center">
        {/* top among us */}
        <div>
          <p>Abhishek</p>
        </div>

        <div>
          {/* large buttons */}
          
        </div>

        <div>
          {/* small icon buttons */}
          <button
      onClick={() => {
        playClick();
        console.log("Clicked!");
      }}
    >
      Click Me
    </button>
        </div>
      </div>
    </>
  );
}

export default Main;
