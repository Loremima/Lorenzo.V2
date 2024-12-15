'use client';

import { motion } from 'framer-motion';

export function BlogHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="section-header"
    >
      <h2 className="section-title">News</h2>
      <p className="section-description">
        Stay updated with the latest trends and insights in AI, automation, and data science.
      </p>
    </motion.div>
  );
}