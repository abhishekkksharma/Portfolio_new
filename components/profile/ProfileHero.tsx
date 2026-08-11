import React from "react";
import Image from "next/image";

import AvatarBoy from "../../assets/avatarBoyy.png";
import GithubImage from "../../assets/github.svg";
import LinkedInImage from "../../assets/linkedin.svg";
import Leetcodeimage from "../../assets/leetcode.svg";
import PinterestImage from "../../assets/pinterest.svg";

function ProfileHero() {
  return (
    <section className="w-full text-white px-4 sm:px-6 md:px-10 lg:px-16 py-8 md:py-12">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-8 lg:gap-12">
        
        {/* Left - Image */}
        <div className="shrink-0">
          <Image
            src={AvatarBoy}
            alt="Profile image"
            className="
              w-30
              sm:w-48
              md:w-52
              lg:w-52
              h-auto
              object-contain
              rounded-xl
            "
          />
        </div>

        {/* Right - Info */}
        <div className="w-full max-w-3xl flex flex-col gap-8">
          
          {/* Name + Socials */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <h1
                className="
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                  xl:text-8xl
                  tracking-widest
                  among-font
                  leading-tight
                  break-words
                  pt-10
                "
              >
                Abhishek Sharma
              </h1>

              <p className="text-base sm:text-lg md:text-xl font-light font-mono">
                Software Developer
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="https://github.com/abhishekkksharma" target="_blank" aria-label="GitHub">
                <Image
                  src={GithubImage}
                  className="
                    w-5 h-5
                    invert
                    hover:invert-0
                    hover:bg-zinc-100
                    rounded-full
                    hover:border
                    hover:border-zinc-100
                    transition-all
                    duration-200
                  "
                  alt="GitHub"
                />
              </a>

              <a href="https://www.linkedin.com/in/abhish3k-sharma/" target="_blank" aria-label="LinkedIn">
                <Image
                  src={LinkedInImage}
                  className="
                    w-5 h-5
                    hover:bg-zinc-100
                    hover:rounded-xs
                    transition-all
                    duration-200
                  "
                  alt="LinkedIn"
                />
              </a>

              <a href="https://leetcode.com/u/Abhish3kkkkk/" target="_blank" aria-label="LeetCode">
                <Image
                  src={Leetcodeimage}
                  className="
                    w-5 h-5
                    p-0.5
                    bg-zinc-100
                    rounded-xs
                    transition-transform
                    duration-200
                    hover:scale-110
                  "
                  alt="LeetCode"
                />
              </a>

              <a href="https://in.pinterest.com/abhish3kkkkk/" target="_blank" aria-label="Pinterest">
                <Image
                  src={PinterestImage}
                  className="
                    w-5 h-5
                    bg-zinc-100
                    rounded-full
                    transition-transform
                    duration-200
                    hover:scale-110
                  "
                  alt="Pinterest"
                />
              </a>
            </div>
          </div>

          {/* About */}
          <div className="w-full">
            <p className="font-mono text-lg sm:text-xl">
              About
            </p>

            <hr className="border-0.5 border-zinc-500 my-2" />

            <p
              className="
                font-mono
                text-sm
                sm:text-base
                md:text-md
                leading-relaxed
                text-justify
                text-zinc-200
              "
            >
              Heyy, I'm Abhishek. I'm a problem solver and I enjoy building
              better web experiences. I am a Computer Science Engineering
              student at Chitkara University with a strong passion for Full
              stack development and building things that help people. I enjoy
              turning creative ideas into functional digital experiences and
              continuously work on improving my skills and design principles.
              I'm always eager to learn, collaborate, and contribute to
              projects that blend design thinking with technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileHero;