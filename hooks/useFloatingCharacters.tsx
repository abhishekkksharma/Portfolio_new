import { useState, useEffect } from 'react';
import Image from 'next/image';
import React from 'react';

export interface FloatingChar {
  id: number;
  src: string;
  size: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  duration: number;
  delay: number;
  startRot: number;
  rotSpeed: number;
}

export const useFloatingCharacters = (images: string[], count: number = 10) => {
  const [characters, setCharacters] = useState<FloatingChar[]>([]);

  useEffect(() => {
    const generateCharacters = () => {
      return Array.from({ length: count }).map((_, i) => {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        
        return {
          id: i,
          src: randomImage,
          // Random size between 40px and 90px
          size: Math.random() * 50 + 40,
          // Start and end positions in viewport width/height (vw/vh)
          // Extending from -20 to 120 so they drift completely off-screen
          startX: Math.random() * 140 - 20, 
          startY: Math.random() * 140 - 20,
          endX: Math.random() * 140 - 20,
          endY: Math.random() * 140 - 20,
          // Float duration between 20 and 50 seconds
          duration: Math.random() * 30 + 20,
          // Stagger the starts so they don't spawn all at once
          delay: Math.random() * -30, 
          // Random initial rotation
          startRot: Math.random() * 360,
          // How much they tumble during their flight
          rotSpeed: (Math.random() - 0.5) * 720, 
        };
      });
    };

    setCharacters(generateCharacters());
  }, [images, count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {characters.map((char) => (
        <div
          key={char.id}
          className="absolute top-0 left-0 animate-space-float"
          style={{
            width: `${char.size}px`,
            height: `${char.size}px`,
            '--startX': char.startX,
            '--startY': char.startY,
            '--endX': char.endX,
            '--endY': char.endY,
            '--startRot': char.startRot,
            '--rotSpeed': char.rotSpeed,
            '--duration': `${char.duration}s`,
            '--delay': `${char.delay}s`,
          } as React.CSSProperties}
        >
          <Image
            src={char.src}
            alt="Ejected character"
            fill
            className="object-contain"
            priority={false}
          />
        </div>
      ))}
    </div>
  );
};
