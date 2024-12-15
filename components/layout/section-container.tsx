"use client";

import { useScrollContext } from "@/components/scroll/scroll-context";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id: string;
}

export function SectionContainer({ children, className, id }: SectionContainerProps) {
  const isHome = id === "home";
  
  return (
    <section
      id={id}
      className={cn(
        "scroll-section",
        isHome ? "home-section" : "section-content",
        className
      )}
    >
      {children}
    </section>
  );
}