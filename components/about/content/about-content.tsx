'use client';

import { motion } from 'framer-motion';
import { ProfileSection } from './profile-section';
import { SkillsSection } from './skills-section';

export function AboutContent() {
  return (
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-5 flex justify-center"
      >
        <ProfileSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-7 flex flex-col justify-center space-y-8"
      >
        <SkillsSection />
      </motion.div>
    </div>
  );
}