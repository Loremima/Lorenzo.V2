"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollIndicatorDotProps {
  isActive: boolean;
  onClick: () => void;
  label: string;
}

export function ScrollIndicatorDot({
  isActive,
  onClick,
  label,
}: ScrollIndicatorDotProps) {
  return (
    <button
      onClick={onClick}
      className="group relative p-2"
      aria-label={`Scroll to ${label} section`}
    >
      <motion.div
        className={cn(
          "w-0.5 h-4 transition-all duration-300",
          isActive ? "bg-red-500" : "bg-muted hover:bg-red-500/50"
        )}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      />
      <span className="absolute left-0 transform -translate-x-full -translate-y-1/2 top-1/2 px-2 py-1 bg-background/80 backdrop-blur-sm rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        {label}
      </span>
    </button>
  );
}