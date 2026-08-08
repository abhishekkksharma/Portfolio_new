import Red_Ghost from "../assets/Ghost_Red.png";
import Image from "next/image";

function NotFound() {
  return (
    <div className="flex flex-col gap-4 justify-center h-screen items-center font-sans">
      <Image src={Red_Ghost} className="w-50 h-50" alt="Not-Found-Image" />
      <p className="flex items-center font-mono">
        <span className="text-2xl">404</span>{" "}
        <span className="text-4xl font-light">|</span> This page could not be
        found.{" "}
      </p>
    </div>
  );
}

export default NotFound;
