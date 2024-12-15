"use client";

import { useState, useEffect } from "react";

interface UseScrollSpyOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

export function useScrollSpy(
  sectionIds: string[],
  options: UseScrollSpyOptions = {}
) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const { threshold = 0.5, root = null, rootMargin = "0px" } = options;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionIds, options]);

  return activeSection;
}