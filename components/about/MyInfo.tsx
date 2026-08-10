import React from "react";
import AvatarBoy from "../../assets/avatarBoy.png";
import Image from "next/image";

function MyInfo() {
  return (
    <div className="p-4 md:p-6 lg:p-8 select-text">
      <div className="text-zinc-700 gap-6 font-mono flex flex-col md:flex-row">
        <Image
          src={AvatarBoy}
          className="h-100 w-auto px-2 mx-auto md:mx-0"
          alt="avatarboy"
        />
        <div className="py-10 px-2 md:px-0">
          <div className="mb-6">
            <p className="text-4xl">Abhishek Sharma</p>
            <p className="text-md">software developer</p>
          </div>
          <div className="max-w-full">
            <p>about</p>
            <hr className="border-0.5 border-gray-400 my-1"></hr>
            <p className="text-justify">
              Heyy, I&apos;m Abhishek. <br /> I&apos;m a problem solver and I
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
      <div className="flex flex-col max-w-full font-mono text-zinc-700 p-4 md:p-6 mt-4">
        <div className="flex flex-col">
          <p>Skills</p>
          <hr className="border-0.5 border-gray-400 my-1"></hr>
          <p>Programming: Java, C++, JavaScript, TypeScript</p>
          <p>Frontend: React.js, Next.js, HTML, CSS, Tailwind CSS</p>
          <p>
            Backend & Databases: Node.js, Express.js, MongoDB, MySQL, Supabase
          </p>
          <p>Core CS: DSA, OOP, DBMS, Operating Systems, Computer Networks</p>
          <p>Tools: Git, GitHub, REST APIs, Vercel</p>
        </div>
        <div className="py-4">
          <p>Education</p>
          <hr className="border-0.5 border-gray-400 my-1"></hr>
          <div className="flex flex-col sm:flex-row justify-between pr-0 sm:pr-10">
            <p className="font-semibold">
              Chitkara University{" "}
              <span className="font-light text-sm"> Rajpura, Punjab</span>
            </p>
            <p className="mt-1 sm:mt-0">2024-2028</p>
          </div>
          <p className="text-sm">
            Bachelor of Engineering (B.E.) in Computer Science and Engineering —{" "}
            <span className="font-semibold">CGPA: 9.29</span>
          </p>
        </div>
        <div className="flex flex-col">
          <p>Socials</p>
          <hr className="border-0.5 border-gray-400 my-1"></hr>
          <div className="flex flex-row gap-10 flex-wrap">
            <a
              href="https://www.linkedin.com/in/abhish3k-sharma/"
              className="underline"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/abhishekkksharma"
              className="underline"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://leetcode.com/u/Abhish3kkkkk/"
              className="underline"
              target="_blank"
            >
              LeetCode
            </a>
          </div>
        </div>
        <div className="flex flex-col py-4">
          <p>Contact</p>
          <hr className="border-0.5 border-gray-400 my-1"></hr>
          <p className="text-sm">
            +91 7340733286 | abhisheksharma7340733@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyInfo;
