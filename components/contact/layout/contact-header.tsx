'use client';

import { motion } from 'framer-motion';

export function ContactHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-black dark:text-white">Get in Touch</h2>
      <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-300">
        Have a project in mind? Let's discuss how we can work together.
      </p>
    </motion.div>
  );
}