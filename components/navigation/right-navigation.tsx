'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollContext } from '../scroll/scroll-context';
import { useTheme } from 'next-themes';
import { useIdleTimer } from './use-idle-timer';
import { colors, animations } from '@/lib/design-system';

const sections = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'services', label: 'SERVICES' },
  { id: 'portfolio', label: 'PORTFOLIO' },
  { id: 'blog', label: 'NEWS' },
  { id: 'contact', label: 'CONTACT' },
  { id: 'footer', label: 'FOOTER' },
] as const;

export function RightNavigation() {
  const [mounted, setMounted] = useState(false);
  const { activeSection } = useScrollContext();
  const { theme } = useTheme();
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const isIdle = useIdleTimer(5000);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Hide on very small screens, adjust spacing
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isIdle ? 0 : 1 }}
      transition={{ duration: animations.duration.fast }}
      className="hidden sm:flex fixed right-2 md:right-7 top-1/2 -translate-y-1/2 z-30"
    >
      <div className="flex flex-col space-y-4">
        {sections.map((section) => (
          <motion.button
            key={section.id}
            onClick={() => handleClick(section.id)}
            onMouseEnter={() => setHoveredSection(section.id)}
            onMouseLeave={() => setHoveredSection(null)}
            className="group relative flex items-center justify-end py-2 transition-colors duration-300"
            aria-label={`Scroll to ${section.label} section`}
          >
            <div className="flex items-center gap-4">
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{
                  opacity: hoveredSection === section.id ? 1 : 0,
                  x: hoveredSection === section.id ? 0 : 10,
                }}
                className="text-xs font-medium tracking-wider text-muted-foreground whitespace-nowrap"
              >
                {section.label}
              </motion.span>

              <motion.div
                className="h-0.5 bg-current"
                initial={false}
                animate={{
                  width: activeSection === section.id ? 48 : 24,
                  backgroundColor:
                    activeSection === section.id
                      ? colors.primary.red
                      : theme === 'dark'
                      ? colors.theme.dark.muted
                      : colors.theme.light.muted,
                }}
                whileHover={{
                  width: 48,
                  backgroundColor: colors.primary.redHover,
                }}
                transition={{ duration: animations.duration.fast }}
              />
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
