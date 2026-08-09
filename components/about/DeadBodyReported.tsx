"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import DeadBodyReportedImage from "../../assets/deadBodyReported.png";

function DeadBodyReported() {
  useEffect(() => {
    const audio = new Audio("/sounds/among-us-dead-body-reported-sound-effect_BsczDVE.mp3");
    
    // audio.play() returns a Promise. We need to store it to handle it properly.
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        // This handles cases where the browser blocks autoplay
        console.warn("Audio playback was prevented:", error);
      });
    }

    return () => {
      // Cleanup: Only pause the audio IF the play promise has resolved
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            audio.pause();
            audio.currentTime = 0;
          })
          .catch(() => {
            // Silently catch the AbortError during rapid unmounting (React Strict Mode)
          });
      }
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes screenFlash {
          0% { background-color: rgba(255, 0, 0, 0.7); }
          10% { background-color: rgba(255, 0, 0, 0.9); }
          100% { background-color: transparent; }
        }
        .animate-flash {
          animation: screenFlash 1.5s ease-out forwards;
        }
      `}} />

      <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none animate-flash">
        {/* Relative wrapper to contain the blurred background layer */}
        <div className="relative flex items-center justify-center">
          
          {/* Blurred white glowing background */}
          <div className="absolute w-[30%] h-[20%] bg-white/60 blur-[100px] rounded-[100%] scale-150 -z-10" />
          
          <Image 
            src={DeadBodyReportedImage} 
            alt="Dead Body Reported" 
            className="w-[80vw] max-w-[1000px] h-auto drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </>
  );
}

export default DeadBodyReported;