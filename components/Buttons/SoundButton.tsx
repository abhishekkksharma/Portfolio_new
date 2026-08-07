"use client";

import { Volume2, VolumeOff } from "lucide-react";
import useClickSound, { useSoundMute } from "@/hooks/useClickSound";

export default function SoundButton() {
  const [muted, toggleMute] = useSoundMute();
  const playClick = useClickSound();

  const handleSoundToggle = () => {
    if (!muted) {
      // Sound is currently ON. Play the click first, then mute it.
      playClick();
      toggleMute();
    } else {
      // Sound is currently OFF. Unmute first, then play the click sound to confirm.
      toggleMute();
      // Since toggleMute updates the global variable synchronously,
      // we can play the sound immediately after.
      setTimeout(() => {
        playClick();
      }, 0);
    }
  };

  return (
    <button
      onClick={handleSoundToggle}
      aria-label={muted ? "Turn sound on" : "Turn sound off"}
      className="
        w-[68px]
        h-[68px]
        shrink-0
        rounded-full
        bg-transparent
        border-[4px]
        border-[#bcbcbc]
        text-white
        flex
        items-center
        justify-center
        shadow-[inset_0_0_0_2px_#555]
        hover:bg-white
        hover:text-black
        hover:scale-105
        active:scale-95
        transition-all
        duration-150
        cursor-pointer
      "
    >
      {!muted ? (
        <Volume2 size={34} />
      ) : (
        <VolumeOff size={34} />
      )}
    </button>
  );
}