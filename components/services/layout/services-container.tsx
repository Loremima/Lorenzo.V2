'use client';

import { motion } from 'framer-motion';
import { ServicesHeader } from './services-header';
import { ServicesGrid } from '../content/services-grid';

export function ServicesContainer() {
  return (
    <div className="container mx-auto px-4 min-h-screen flex flex-col items-center pt-20">
      <div className="w-full max-w-[1200px] mx-auto">
        <ServicesHeader />
        <ServicesGrid />
      </div>
    </div>
  );
}