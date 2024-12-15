'use client';

import { AboutHeader } from './about-header';
import { AboutContent } from '../content/about-content';

export function AboutContainer() {
  return (
    <section id="about" className="scroll-section">
      <div className="scroll-content">
        <div className="container mx-auto px-4 min-h-screen flex flex-col justify-center">
          <div className="w-full max-w-[1200px] mx-auto">
            <AboutHeader />
            <AboutContent />
          </div>
        </div>
      </div>
    </section>
  );
}