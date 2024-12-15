'use client';

import { useEffect, useCallback, useState } from 'react';
import { throttle } from '@/lib/utils';

interface UseScrollOptions {
  offset?: number;
  threshold?: number;
}

export function useScroll({ offset = 0, threshold = 0.1 }: UseScrollOptions = {}) {
  const [activeSection, setActiveSection] = useState<string>('');
  const [scrollY, setScrollY] = useState(0);

  // Throttled scroll handler
  const handleScroll = useCallback(
    throttle(() => {
      setScrollY(window.scrollY);
    }, 100),
    []
  );

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            // Update URL hash without scrolling
            window.history.replaceState(null, '', `#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: `${-offset}px 0px 0px 0px`,
        threshold,
      }
    );

    const sections = document.querySelectorAll('.scroll-section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [offset, threshold]);

  // Scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Smooth scroll function
  const scrollTo = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const headerOffset = offset;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, [offset]);

  return {
    activeSection,
    scrollY,
    scrollTo,
  };
}