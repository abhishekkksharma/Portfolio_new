import React from "react";
import BgImage from "../../assets/profile/profile_bg.png";
import {
  Maroon_Character,
  Batman_Character,
} from "../../public/characters/Characters";
import Image from "next/image";

function ProfileCard() {
  return (
    <div className="relative max-w-3xl py-4 sm:py-6 rounded-3xl sm:rounded-4xl overflow-hidden border-[3px] sm:border-4 border-white mx-4 sm:mx-auto">
      {/* Background Image */}
      <Image
        src={BgImage}
        alt="Profile Background"
        fill
        className="object-cover sm:aspect-video"
        priority
      />

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-zinc-600/10"></div>

      {/* Content */}
      <div className="flex flex-col relative p-3 py-2 sm:p-4  sm:pb-0 sm:pr-8 gap-2">
        {/* Added items-center for mobile so the smaller image aligns well with the text block */}
        <div className="flex gap-3 sm:gap-4 items-center sm:items-start">
          {/* Image */}
          {/* Reduced padding and border size for mobile */}
          <div className="group p-2 sm:p-4 my-1 sm:my-2 bg-gray-200 border-2 sm:border-4 border-white rounded-xl sm:rounded-2xl shrink-0 z-10">
            {/* Scaled down to w-24 (96px) for mobile, kept your exact w-42 (10.5rem) for desktop */}
            <div className="relative w-24 h-24 sm:w-42 sm:h-42">
              {/* Default Character */}
              <Image
                src={Maroon_Character}
                alt="Maroon Character"
                className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
              />

              {/* Batman Character */}
              <Image
                src={Batman_Character}
                alt="Batman Character"
                className="absolute inset-0 w-38 h-44 object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-1 sm:gap-2 font-sans min-w-0 z-10">
            <div>
              <p className="text-zinc-500 text-[10px] sm:text-base leading-tight">
                EMAIL
              </p>
              {/* truncate keeps the long email on one line for mobile */}
              <p className="text-black font-bold text-xs sm:text-base truncate">
                abhisheksharma7340733@gmail.com
              </p>
            </div>

            <div>
              <p className="text-zinc-500 text-[10px] sm:text-base leading-tight">
                USERNAME
              </p>
              <p className="text-black font-semibold text-sm sm:text-xl leading-tight">
                abhishek sharma
              </p>
            </div>

            <div>
              <p className="text-zinc-500 text-[10px] sm:text-base leading-tight">
                ROLE
              </p>
              <p className="text-black font-semibold text-sm sm:text-xl leading-tight">
                software engineer
              </p>
            </div>

            <div>
              <p className="text-zinc-500 text-[10px] sm:text-base leading-tight">
                EDUCATION
              </p>
              <p className="text-black font-semibold text-sm sm:text-xl leading-tight">
                b.e cse
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center z-10">
          <button className="bg-black text-white text-sm sm:text-xl px-3 sm:px-4 py-1.5 sm:py-0 border-2 sm:border-[3px] border-white rounded-md tracking-widest">
            Connect
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
