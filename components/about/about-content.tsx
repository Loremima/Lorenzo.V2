'use client';

import { motion } from 'framer-motion';

export function AboutContent() {
  return (
    <div className="space-y-6 mb-8">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-base md:text-lg leading-relaxed text-muted-foreground"
      >
        Armed with a Master's in Data Science and 8+ years of expertise, I turn complex data challenges into business advantages. I build cutting-edge AI solutions and automation systems that help companies reduce costs, increase efficiency, and unlock hidden opportunities in their data.
      </motion.p>
    </div>
  );
}