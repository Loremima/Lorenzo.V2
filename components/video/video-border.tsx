"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";

interface VideoBorderProps {
  position: "left" | "right";
}

export function VideoBorder({ position }: VideoBorderProps) {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-[200%] h-full object-cover scale-150"
        style={{
          transform: `scale(1.5) ${position === "left" ? "translateX(25%)" : "translateX(-25%)"}`,
          filter: `brightness(${theme === "dark" ? "0.85" : "1"}) contrast(${
            theme === "dark" ? "1.1" : "0.9"
          })`,
        }}
      >
        <source
          src={theme === "dark" ? "/videos/sky-night.mp4" : "/videos/sky-day.mp4"}
          type="video/mp4"
        />
      </video>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${
            position === "left" ? "90deg" : "270deg"
          }, transparent, ${theme === "dark" ? "#1a1f36" : "#f8f9fa"} 90%)`,
        }}
      />
    </div>
  );
}