import React from "react";
import ProfileCard from "@/components/profile/ProfileCard";
import ProfileHero from "@/components/profile/ProfileHero";
import Skills from "@/components/profile/Skills";
import GithubContributions from "@/components/profile/GithubContributions";

function page() {
  return (
    <>
      <ProfileHero />
      <Skills />
      <GithubContributions/>
      {/* <div className="flex justify-center items-center">
        <ProfileCard />
      </div> */}
    </>
  );
}

export default page;
