'use client';

import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollProgress } from './scroll/scroll-progress';

const socialLinks = [
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/lorenzo-mira-mateo/',
    label: 'LinkedIn',
  },
  { icon: Github, href: 'https://github.com/Loremima', label: 'GitHub' },
];

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative flex flex-col justify-end min-h-screen"
    >
      {/* Overlay Background (Removed VideoBackground) */}
      {/* <div className="absolute inset-0 opacity-15">
        <VideoBackground />
      </div> */}

      {/* Footer Content */}
      <div className="relative pb-12 bg-transparent">
        {' '}
        {/* Set background to transparent */}
        <div className="flex flex-col items-center space-y-4">
          {/* Logo */}
          <motion.a
            href="#home" // Changed to anchor link for smooth scrolling
            className="text-xl font-medium tracking-tight text-foreground"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            Lorenzo<span className="text-red-500">.</span>
          </motion.a>

          {/* Social Links */}
          <motion.div
            className="flex items-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1, color: '#111827' }} // Optional: adjust color on hover
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Footer Text */}
          <div className="text-sm text-muted-foreground text-center mt-4">
            <p>© {new Date().getFullYear()} Lorenzo. All rights reserved.</p>
            <p className="mt-1">
              Crafted with ❤️ by{' '}
              <a
                href="https://www.linkedin.com/in/lorenzo-mira-mateo/"
                className="text-foreground hover:text-red-500 transition-colors"
              >
                Lorenzo
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <ScrollProgress />
    </footer>
  );
}
