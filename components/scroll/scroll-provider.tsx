'use client';

import { createContext, useContext, useEffect } from 'react';
import { useScroll } from '@/hooks/use-scroll';

interface ScrollContextType {
  activeSection: string;
  scrollTo: (elementId: string) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const { activeSection, scrollTo } = useScroll({ offset: 80 });

  // Handle initial hash navigation
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      scrollTo(hash);
    }
  }, [scrollTo]);

  return (
    <ScrollContext.Provider value={{ activeSection, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollContext() {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollContext must be used within ScrollProvider');
  }
  return context;
}