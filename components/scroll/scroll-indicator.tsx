"use client";

import { useEffect, useState } from "react";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollContext } from "./scroll-context";
import { useTheme } from "next-themes";

const sections = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "services", label: "SERVICES" },
  { id: "portfolio", label: "PORTFOLIO" },
  { id: "blog", label: "BLOG" },
  { id: "contact", label: "CONTACT" },
  { id: "footer", label: "FOOTER" }
];

export function ScrollIndicator() {
  const [mounted, setMounted] = useState(false);
  const { activeSection, setActiveSection } = useScrollContext();
  const { theme } = useTheme();
  
  const currentSection = useScrollSpy(
    sections.map((section) => section.id),
    { threshold: 0.5 }
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (currentSection) {
      setActiveSection(currentSection);
    }
  }, [currentSection, setActiveSection]);

  if (!mounted) {
    return null;
  }

  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-30"
      role="navigation"
      aria-label="Page sections"
    >
      <div className="flex flex-col space-y-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleClick(section.id)}
            className="group relative flex items-center py-3 -mr-2 transition-colors duration-300"
            aria-label={`Scroll to ${section.label} section`}
          >
            <div className="flex items-center gap-4">
              <span className="text-xs font-normal tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute right-full mr-4 uppercase text-muted-foreground min-w-[80px] text-right">
                {section.label}
              </span>
              <motion.div
                className={`h-0.5 transition-all duration-300 ${
                  activeSection === section.id
                    ? "w-12 -translate-x-12 bg-red-500"
                    : theme === 'dark' 
                      ? "w-6 -translate-x-6 bg-gray-300/50" 
                      : "w-6 -translate-x-6 bg-gray-800/50"
                }`}
                whileHover={{
                  width: "48px",
                  translateX: "-48px",
                  backgroundColor: "rgb(239, 68, 68, 0.5)"
                }}
              />
            </div>
          </button>
        ))}
      </div>
    </motion.div>
  );
}