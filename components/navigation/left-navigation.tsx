'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollContext } from '../scroll/scroll-context';
import { useIdleTimer } from './use-idle-timer';
import { useTheme } from 'next-themes';
import { animations } from '@/lib/design-system';

const sectionNames = {
  home: 'HOME',
  about: 'ABOUT',
  services: 'SERVICES',
  portfolio: 'PORTFOLIO',
  blog: 'NEWS',
  contact: 'CONTACT',
  footer: 'FOOTER',
} as const;

export function LeftNavigation() {
  const [mounted, setMounted] = useState(false);
  const { activeSection } = useScrollContext();
  const { theme } = useTheme();
  const isIdle = useIdleTimer(5000);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    // Adjust left spacing responsively
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isIdle ? 0 : 1 }}
      transition={{ duration: animations.duration.fast }}
      className="fixed left-2 sm:left-4 md:left-7 top-1/2 -translate-y-1/2 z-30 hidden sm:block"
    >
      <div className="flex flex-col items-center gap-12">
        <div className="w-0.5 h-12 bg-red-500" />
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: animations.duration.fast }}
          >
            <span
              className={`[writing-mode:vertical-rl] [text-orientation:upright] text-base font-light tracking-[0.5em] ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-800'
              }`}
              style={{ display: 'inline-block' }}
            >
              {activeSection
                ? sectionNames[activeSection as keyof typeof sectionNames]
                : sectionNames.home}
            </span>
          </motion.div>
        </AnimatePresence>
        <div className="w-0.5 h-12 bg-red-500" />
      </div>
    </motion.div>
  );
}
