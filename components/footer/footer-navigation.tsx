"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollContext } from "../scroll/scroll-context";

const sectionNames = {
  home: "Home",
  about: "About",
  services: "Services",
  portfolio: "Portfolio",
  blog: "Blog",
  contact: "Contact",
  footer: "Footer"
};

export function FooterNavigation() {
  const [mounted, setMounted] = useState(false);
  const { activeSection } = useScrollContext();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed left-8 bottom-1/2 translate-y-1/2 z-30">
      <div className="flex flex-col items-center">
        <div className="w-0.5 h-4 bg-red-500" />
        <AnimatePresence mode="wait">
          <motion.span
            key={activeSection}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="text-sm font-medium [writing-mode:vertical-lr] rotate-180 tracking-[0.5em] text-foreground my-2 uppercase"
          >
            {activeSection ? sectionNames[activeSection as keyof typeof sectionNames] : "Home"}
          </motion.span>
        </AnimatePresence>
        <div className="w-0.5 h-4 bg-red-500" />
      </div>
    </div>
  );
}