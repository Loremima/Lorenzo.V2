"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface ScrollContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    document.querySelectorAll(".scroll-section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollContext() {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
}