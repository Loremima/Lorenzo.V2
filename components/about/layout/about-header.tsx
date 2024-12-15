'use client';

import { motion } from 'framer-motion';

export function AboutHeader() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About me</h2>
    </motion.div>
  );
}