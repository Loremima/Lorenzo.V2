"use client";

import { motion } from "framer-motion";
import { useMenuContext } from "./menu-context";

export function MenuButton() {
  const { isOpen, setIsOpen } = useMenuContext();

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="relative z-50 p-0 hover:opacity-80 transition-opacity"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className="w-5 h-4 relative">
        <motion.span
          className="absolute top-0 left-0 right-0 h-[1px] bg-foreground"
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="absolute top-1/2 left-0 right-0 h-[1px] bg-foreground"
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-foreground"
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </div>
    </button>
  );
}