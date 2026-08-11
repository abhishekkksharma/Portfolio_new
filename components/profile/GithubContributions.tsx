"use client";

import dynamic from "next/dynamic";
import Purple_Ghost from "../../assets/Purple Game Ghost Sticker.gif";
import Image from "next/image";

const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="h-32 w-full animate-pulse rounded-lg" />
    ),
  }
);

function GithubContributions() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
      <p className="flex justify-center items-center my-4 among-font text-4xl">
        My Github contributions
      </p>

      <div className="w-full max-w-6xl mx-auto overflow-x-auto">
        <div className="min-w-175 flex justify-center relative">
          <GitHubCalendar
            username="abhishekkksharma"
            blockSize={12}
            blockMargin={4}
            fontSize={14}
            colorScheme="dark"
            theme={{
              dark: [
                "#161b22",
                "#3b0764",
                "#6b21a8",
                "#a855f7",
                "#d8b4fe",
              ],
            }}
          />

          <Image
            src={Purple_Ghost}
            alt="Purple ghost"
            className="absolute bottom-2 left-0 w-20 h-20 ghost-move opacity"
          />
        </div>
      </div>
    </section>
  );
}

export default GithubContributions;