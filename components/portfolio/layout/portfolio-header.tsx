'use client';

import { motion } from 'framer-motion';

export function PortfolioHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Portfolio</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Explore my latest projects and implementations in AI, automation, and data science.
      </p>
    </motion.div>
  );
}
