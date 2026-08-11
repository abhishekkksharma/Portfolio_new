"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { SquareArrowUpRight, Link2 } from "lucide-react";
import GithubSVG from "../../assets/github.svg";

export interface ProjectProps {
  name: string;
  content: string;
  link: string;
  githubLink: string;
  tech?: readonly string[] | string[];
  images: (StaticImageData | string)[];
}

function Project({
  name,
  content,
  link,
  githubLink,
  tech = [],
  images,
}: ProjectProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (images.length === 0) return;
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    if (images.length === 0) return;
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-row justify-between bg-transparent p-4 rounded-md">
      <div className="bg-transparent  rounded-md p-2 overflow-hidden">
        <div className="rounded-2xl p-1 shadow-inner">
          <div className="rounded-xl p-1">
            {/* Single image with arrows */}
            <div className="relative">
              <Link href={link} target="_blank" rel="noopener noreferrer">
                <SquareArrowUpRight className="w-6 h-6 m-2 absolute text-black hover:text-gray-600 right-0" />
                {images && images.length > 0 ? (
                  <Image
                    src={images[currentImageIndex]}
                    className="w-full h-auto rounded-xl bg-gray-100 aspect-video"
                    alt={`${name.toLowerCase()}-project-image`}
                  />
                ) : (
                  <div className="w-full h-[30vh] bg-black/20 flex items-center justify-center text-gray-500 font-mono">
                    No Images
                  </div>
                )}
              </Link>

              {/* Navigation Arrows */}
              {images && images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm border border-white/20 z-10"
                    aria-label="Previous image"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm border border-white/20 z-10"
                    aria-label="Next image"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  {/* Dot indicators */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentImageIndex
                            ? "bg-white w-6"
                            : "bg-white/50 hover:bg-white/70"
                          }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-0 mt-3 px-4">
          <div className="flex justify-between">
            <p className="font-bold text-white/90 text-2xl drop-shadow-sm tracking-widest">
              {name}
            </p>
            <div className="flex gap-6 px-4">
              <Link href={link} target="_blank" rel="noopener noreferrer">
                <Link2 className="w-6 h-6 text-gray-200 hover:text-gray-600" />
              </Link>
              <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                <Image src={GithubSVG} className="w-6 h-6 invert hover:bg-gray-200 rounded-full hover:invert-0" alt="github" />
              </Link>
            </div>
          </div>
          {tech && tech.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2 mb-3">
              {tech.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 text-xs font-mono bg-zinc-950/60 border border-zinc-800/80 text-zinc-300 rounded-md tracking-wider select-none hover:bg-zinc-900/40 hover:border-zinc-700/80 hover:text-white transition-all duration-200 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <p className="text-sm text-white mt-1 leading-relaxed font-mono">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
