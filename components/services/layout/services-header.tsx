'use client';

import { motion } from 'framer-motion';

export function ServicesHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-black dark:text-white">
        Services
      </h2>
      <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
        Comprehensive AI and automation solutions tailored to transform your business
      </p>
    </motion.div>
  );
}