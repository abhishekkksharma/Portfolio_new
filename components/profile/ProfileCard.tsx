import React from "react";
import BgImage from "../../assets/profile/profile_bg.png";
import {
  Maroon_Character,
  Batman_Character,
} from "../../public/characters/Characters";
import Image from "next/image";

function ProfileCard() {
  return (
    <div className="relative max-w-2xl py-3 sm:py-4 rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-3 border-white mx-3 sm:mx-auto">

      {/* Background */}
      <Image
        src={BgImage}
        alt="Profile Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-zinc-600/10" />

      {/* Content */}
      <div className="relative p-2.5 sm:p-3 flex flex-col gap-2">

        {/* Profile Info */}
        <div className="flex gap-2 sm:gap-3 items-center">

          {/* Character */}
          <div className="group p-1.5 sm:p-2.5 bg-gray-200 border-2 sm:border-3 border-white rounded-lg sm:rounded-xl shrink-0 z-10">
            <div className="relative w-20 h-20 sm:w-32 sm:h-32">

              {/* Maroon */}
              <Image
                src={Maroon_Character}
                alt="Maroon Character"
                className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
              />

              {/* Batman */}
              <Image
                src={Batman_Character}
                alt="Batman Character"
                className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-1 sm:gap-1.5 font-sans min-w-0 z-10">

            <div>
              <p className="text-zinc-500 text-[9px] sm:text-xs leading-none">
                EMAIL
              </p>
              <p className="text-black font-bold text-[10px] sm:text-sm truncate">
                abhisheksharma7340733@gmail.com
              </p>
            </div>

            <div>
              <p className="text-zinc-500 text-[9px] sm:text-xs leading-none">
                USERNAME
              </p>
              <p className="text-black font-semibold text-xs sm:text-base leading-tight">
                abhishek sharma
              </p>
            </div>

            <div>
              <p className="text-zinc-500 text-[9px] sm:text-xs leading-none">
                ROLE
              </p>
              <p className="text-black font-semibold text-xs sm:text-base leading-tight">
                software engineer
              </p>
            </div>

            <div>
              <p className="text-zinc-500 text-[9px] sm:text-xs leading-none">
                EDUCATION
              </p>
              <p className="text-black font-semibold text-xs sm:text-base leading-tight">
                b.e cse
              </p>
            </div>

          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center z-10">
          <a  href="https://www.linkedin.com/in/abhish3k-sharma/"
            target="_blank"
            className="
              bg-black
              text-white
              text-xs
              sm:text-base
              px-3
              sm:px-4
              py-1
              border-2
              border-white
              rounded-md
              tracking-widest
              hover:bg-zinc-800
              transition-colors
            "
          >
            Connect
          </a>
        </div>

      </div>
    </div>
  );
}

export default ProfileCard;