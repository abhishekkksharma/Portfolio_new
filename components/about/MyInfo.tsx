import React from "react";
import AvatarBoy from "../../assets/avatarBoy.png";
import Image from "next/image";
import Link from "next/link";

function MyInfo() {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 select-text max-w-5xl mx-auto">
      {/* Top Section: Avatar & About */}
      <div className="text-zinc-700 font-mono flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
        <Image
          src={AvatarBoy}
          // w-48 sm:w-56 md:w-64 lg:w-72 h-auto, 
          className="h-100 w-auto old flex-shrink-0"
          alt="Abhishek Sharma"
        />
        <div className="flex-1 w-full px-2 md:px-0 text-center md:text-left">
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold">Abhishek Sharma</h1>
            <p className="text-base sm:text-lg text-gray-500 mt-1">software developer</p>
          </div>
          <div className="w-full">
            <p className="font-semibold">about</p>
            <hr className="border-t border-gray-400 my-2" />
            <p className="text-justify text-sm sm:text-base leading-relaxed">
              Heyy, I&apos;m Abhishek. <br className="hidden sm:block" /> I&apos;m a problem solver and I
              enjoy building better web experiences. I am a Computer Science
              Engineering student at Chitkara University with a strong passion
              for Full stack development and building things that help people. I
              enjoy turning creative ideas into functional digital experiences
              and continuously work on improving my skills and design
              principles. I&apos;m always eager to learn, collaborate, and
              contribute to projects that blend design thinking with technology.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Details */}
      <div className="flex flex-col font-mono text-zinc-700 mt-8 sm:mt-12 space-y-8">
        {/* Skills */}
        <div className="flex flex-col">
          <p className="font-semibold">Skills</p>
          <hr className="border-t border-gray-400 my-2" />
          <div className="text-sm sm:text-base space-y-1">
            <p><span className="font-semibold">Programming:</span> Java, C++, JavaScript, TypeScript</p>
            <p><span className="font-semibold">Frontend:</span> React.js, Next.js, HTML, CSS, Tailwind CSS</p>
            <p><span className="font-semibold">Backend & Databases:</span> Node.js, Express.js, MongoDB, MySQL, Supabase</p>
            <p><span className="font-semibold">Core CS:</span> DSA, OOP, DBMS, Operating Systems, Computer Networks</p>
            <p><span className="font-semibold">Tools:</span> Git, GitHub, REST APIs, Vercel</p>
          </div>
        </div>

        {/* Education */}
        <div className="flex flex-col">
          <p className="font-semibold">Education</p>
          <hr className="border-t border-gray-400 my-2" />
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
            <p className="font-semibold text-base sm:text-lg">
              Chitkara University{" "}
              <span className="font-light text-sm italic block sm:inline">Rajpura, Punjab</span>
            </p>
            <p className="mt-1 sm:mt-0 text-sm sm:text-base font-medium">2024-2028</p>
          </div>
          <p className="text-sm sm:text-base mt-2 sm:mt-1">
            Bachelor of Engineering (B.E.) in Computer Science and Engineering —{" "}
            <span className="font-semibold break-words">CGPA: 9.29</span>
          </p>
        </div>

        {/* Socials */}
        <div className="flex flex-col">
          <p className="font-semibold">Socials</p>
          <hr className="border-t border-gray-400 my-2" />
          <div className="flex flex-row gap-6 sm:gap-10 flex-wrap text-sm sm:text-base">
            <a
              href="https://www.linkedin.com/in/abhish3k-sharma/"
              className="underline hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/abhishekkksharma"
              className="underline hover:text-gray-900 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://leetcode.com/u/Abhish3kkkkk/"
              className="underline hover:text-yellow-600 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              LeetCode
            </a>
            <a
              href="https://in.pinterest.com/abhish3kkkkk/"
              className="underline hover:text-red-600 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              Pinterest
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col">
          <p className="font-semibold">Contact</p>
          <hr className="border-t border-gray-400 my-2" />
          <p className="text-sm sm:text-base break-words">
            +91 7340733286 <span className="hidden sm:inline mx-2">|</span> 
            <span className="block sm:inline mt-1 sm:mt-0">abhisheksharma7340733@gmail.com</span>
          </p>
        </div>
        <Link href="/profile" className="text-black underline">
          Know more about me &gt;
        </Link>
      </div>
    </div>
  );
}

export default MyInfo;