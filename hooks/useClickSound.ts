"use client";

import { useCallback, useEffect, useRef } from "react";

export default function useClickSound(volume = 0.5) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/sounds/ui-click.mp3");
    audio.preload = "auto";
    audio.volume = volume;

    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [volume]);

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = 0;
    audio.play().catch(() => {
      // Ignore autoplay/user gesture errors
    });
  }, []);

  return play;
}