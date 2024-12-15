'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { ScrollProgress } from '../scroll/scroll-progress';

const socialLinks = [
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/lorenzo-mira-mateo/',
    label: 'LinkedIn',
  },
  {
    icon: Github,
    href: 'https://github.com/Loremima',
    label: 'GitHub',
  },
];

export function Footer() {
  return (
    <footer id="footer" className="scroll-section">
      <div className="section-container justify-end pb-12">
        <div className="flex flex-col items-center space-y-4">
          <motion.a
            href="#home"
            className="text-xl font-medium tracking-tight text-foreground"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            Lorenzo<span className="text-red-500">.</span>
          </motion.a>

          <motion.div
            className="flex items-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>

          <div className="text-sm text-muted-foreground text-center">
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
      <ScrollProgress />
    </footer>
  );
}