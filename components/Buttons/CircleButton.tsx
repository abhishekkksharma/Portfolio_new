import React from "react";
import Link from "next/link";
import useClickSound from "@/hooks/useClickSound";

interface CircleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  label: string;
  href?: string;
  target?: string;
  css?: string
}

function CircleButton({
  children,
  onClick,
  label,
  href,
  target,
  css,
}: CircleButtonProps) {
  const playClick = useClickSound();

  const handlePlayClick = () => {
    playClick();
    if (onClick) {
      onClick();
    }
  };

  const className = "w-[68px] h-[68px] rounded-full bg-transparent border-[4px] border-white/80 text-white flex items-center justify-center shadow-[inset_0_0_0_2px_rgba(255,255,255,0.25)] transition-all duration-150 hover:bg-white hover:text-black hover:scale-110 active:scale-95 cursor-pointer";

  const renderContent = () => {
    if (href) {
      const isExternal =
        href.startsWith("http") ||
        href.startsWith("//") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:");

      if (isExternal) {
        return (
          <a
            href={href}
            onClick={handlePlayClick}
            target={target ?? "_blank"}
            rel="noopener noreferrer"
            aria-label={label}
            className={className}
          >
            {children}
          </a>
        );
      } else {
        return (
          <Link
            href={href}
            onClick={handlePlayClick}
            aria-label={label}
            className={className}
          >
            {children}
          </Link>
        );
      }
    }

    return (
      <button
        onClick={handlePlayClick}
        aria-label={label}
        className={className}
      >
        {children}
      </button>
    );
  };

  return (
    <div className="relative group">
      {renderContent()}

      {/* Hover Label */}
      <div
        className={`absolute
          left-1/2
          -translate-x-1/2
          top-full
          mt-3
          px-3
          py-1
          whitespace-nowrap
          rounded-md
          bg-black/80
          border
          border-white/40
          text-white
          text-lg
          opacity-0
          translate-y-[-4px]
          pointer-events-none
          transition-all
          duration-200
          group-hover:opacity-100
          group-hover:translate-y-0
          z-50 ${css}`}
      >
        {label}
      </div>
    </div>
  );
}

export default CircleButton;