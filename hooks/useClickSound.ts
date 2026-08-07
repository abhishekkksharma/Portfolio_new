"use client";

import { useCallback, useEffect, useState } from "react";

// Global cache for the Audio objects to prevent recreating them and reduce lag.
let cachedClickAudio: HTMLAudioElement | null = null;
let cachedTypingAudio: HTMLAudioElement | null = null;

// Global state for sound muted status.
// We initialize it from localStorage if available, defaulting to false (sound is ON).
let isMutedGlobal = false;

// Array of listeners to notify when the mute state changes (specifically for SoundButton to re-render)
const listeners = new Set<(muted: boolean) => void>();

function updateMuteState(muted: boolean) {
  isMutedGlobal = muted;
  if (typeof window !== "undefined") {
    localStorage.setItem("soundMuted", String(muted));
  }
  listeners.forEach((listener) => listener(muted));
}

// Initialize on client side
if (typeof window !== "undefined") {
  cachedClickAudio = new Audio("/sounds/ui-click.mp3");
  cachedClickAudio.preload = "auto";

  cachedTypingAudio = new Audio("/sounds/among-us-typing.mp3");
  cachedTypingAudio.preload = "auto";
  
  // Read initial mute state from localStorage
  const savedMuted = localStorage.getItem("soundMuted");
  isMutedGlobal = savedMuted === "true";
}

// Hook to get and toggle the global mute state (used by SoundButton)
export function useSoundMute() {
  const [muted, setMuted] = useState(isMutedGlobal);

  useEffect(() => {
    const handleChange = (newMuted: boolean) => {
      setMuted(newMuted);
    };
    listeners.add(handleChange);
    return () => {
      listeners.delete(handleChange);
    };
  }, []);

  const toggleMute = useCallback(() => {
    updateMuteState(!isMutedGlobal);
  }, []);

  return [muted, toggleMute] as const;
}

// Helper to check if sound is muted
export function getIsMuted() {
  return isMutedGlobal;
}

// Function to play the typing sound, respecting the mute state
export function playTypingSound(volume = 0.5) {
  if (!cachedTypingAudio || isMutedGlobal) return;

  cachedTypingAudio.volume = volume;
  cachedTypingAudio.currentTime = 0;
  cachedTypingAudio.play().catch(() => {
    // Ignore autoplay/user gesture errors
  });
}

export default function useClickSound(volume = 0.5) {
  const play = useCallback(() => {
    if (!cachedClickAudio || isMutedGlobal) return;

    // Apply the dynamic volume level
    cachedClickAudio.volume = volume;

    // Reset the audio playhead to the beginning to allow rapid sequential clicks
    cachedClickAudio.currentTime = 0;

    // Play the sound
    cachedClickAudio.play().catch(() => {
      // Ignore autoplay/user gesture errors
    });
  }, [volume]);

  return play;
}