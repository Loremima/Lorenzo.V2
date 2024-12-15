'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useMenuContext } from './menu-context';
import { useScrollContext } from '../scroll/scroll-context';

const menuItems = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'services', label: 'SERVICES' },
  { id: 'portfolio', label: 'PORTFOLIO' },
  { id: 'blog', label: 'NEWS' },
  { id: 'contact', label: 'CONTACT' },
];

export function MenuOverlay() {
  const { isOpen, setIsOpen } = useMenuContext();
  const { activeSection, setActiveSection } = useScrollContext();

  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40"
        >
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 bottom-0 w-full max-w-[240px] bg-background/80 backdrop-blur-lg"
          >
            <nav className="flex flex-col items-center justify-center h-full p-6">
              <div className="grid gap-4 text-center">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative group px-4 py-2 text-sm tracking-[0.3em] font-light transition-colors ${
                      activeSection === item.id
                        ? 'text-red-500'
                        : 'text-foreground hover:text-red-500'
                    }`}
                  >
                    {item.label}
                    <motion.div
                      className="absolute bottom-1 left-0 right-0 h-px bg-red-500"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                ))}
              </div>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
