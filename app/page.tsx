'use client';

import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { ServicesSection } from '@/components/sections/services';
import { PortfolioSection } from '@/components/sections/portfolio';
import { BlogSection } from '@/components/sections/blog';
import { ContactSection } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { LeftNavigation } from '@/components/navigation/left-navigation';
import { RightNavigation } from '@/components/navigation/right-navigation';
import { VideoContainer } from '@/components/video/video-container';

export default function Home() {
  return (
    <main className="relative">
      <div className="fixed inset-0 z-0">
        <VideoContainer />
      </div>
      <div className="scroll-container relative z-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <BlogSection />
        <ContactSection />
        <Footer />
      </div>
      <LeftNavigation />
      <RightNavigation />
    </main>
  );
}