import React from "react";
import Image from "next/image";
import { RedIcon, BlueIcon } from "../../assets/faceIcons/Icons";

interface ChatMessageProps {
  text: string;
  name?: string;
  left?: boolean;
}

function ChatMessage({
  text,
  name = "Unknown",
  left = true,
}: ChatMessageProps) {
  const icon = left ? RedIcon : BlueIcon;

  return (
    <div
      className={`max-w-4xl px-2 pr-4 rounded-lg border-b-4 border-r-4 border-b-gray-700 border-r-gray-700 bg-gray-100 flex items-center gap-2 ${
        left ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <Image
        src={icon}
        alt={`${name} icon`}
        className={`w-12 h-12 my-1 ${!left ? "scale-x-[-1]" : ""}`}
      />

      <div className={`text-black ${!left ? "text-right" : ""}`}>
        <p
          className={`font-bold font-sans text-lg tracking-wider [-webkit-text-stroke:0.75px_black] 
          ${left ? "text-[#c51111]" : "text-[#132ed1]"}`}
        >
          {name}
        </p>
        <p className="text-2xl among-font">{text}</p>
      </div>
    </div>
  );
}

export default ChatMessage;
