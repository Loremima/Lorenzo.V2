'use client';

import { motion } from 'framer-motion';
import { ProfileCard } from '../about/profile-card';
import { SkillsSection } from '../about/skills-section';

export function AboutSection() {
  return (
    <section id="about" className="scroll-section">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">About me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <ProfileCard />
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
      </div>
    </section>
  );
}