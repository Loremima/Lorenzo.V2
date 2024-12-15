'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export function HeroSection() {
  const nameEl = useRef<HTMLSpanElement>(null);
  const titleEl = useRef<HTMLSpanElement>(null);
  const typedInstancesRef = useRef<{ name?: Typed; title?: Typed }>({});

  useEffect(() => {
    if (!nameEl.current || !titleEl.current) return;

    if (typedInstancesRef.current.name) {
      typedInstancesRef.current.name.destroy();
    }
    if (typedInstancesRef.current.title) {
      typedInstancesRef.current.title.destroy();
    }

    const nameTyped = new Typed(nameEl.current, {
      strings: [`Hola, I'm Lorenzo`],
      typeSpeed: 50,
      showCursor: true,
      cursorChar: '|',
      onComplete: function (self) {
        self.cursor.style.display = 'none';
        if (titleEl.current) {
          startTitleTyping();
        }
      },
    });

    function startTitleTyping() {
      const titleTyped = new Typed(titleEl.current, {
        strings: [
          'An <span class="text-red-500">Automation</span> Engineer',
          'An <span class="text-red-500">AI</span> Specialist',
          'A <span class="text-red-500">Data</span> Scientist',
        ],
        typeSpeed: 50,
        backSpeed: 30,
        startDelay: 300,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        html: true,
      });

      typedInstancesRef.current.title = titleTyped;
    }

    typedInstancesRef.current.name = nameTyped;

    return () => {
      if (typedInstancesRef.current.name) {
        typedInstancesRef.current.name.destroy();
      }
      if (typedInstancesRef.current.title) {
        typedInstancesRef.current.title.destroy();
      }
    };
  }, []);

  return (
    <section id="home" className="scroll-section hero-section">
      <div className="hero-content flex flex-col items-start space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span ref={nameEl}></span>
          </h1>
          <div className="text-lg md:text-xl font-medium mb-6">
            <span ref={titleEl}></span>
          </div>
          <motion.p
            className="text-base text-muted-foreground max-w-md mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            Transforming businesses through cutting-edge AI technologies
          </motion.p>

          <div className="flex items-center space-x-6">
            {[{
              icon: Linkedin,
              href: 'https://www.linkedin.com/in/lorenzo-mira-mateo/',
              label: 'LinkedIn',
            }, {
              icon: Github,
              href: 'https://github.com/Loremima',
              label: 'GitHub',
            }].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 3 + 0.1 * index }}
              >
                <social.icon className="h-4 w-4" />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
