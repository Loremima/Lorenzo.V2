'use client';

import { motion } from 'framer-motion';
import { ProfileCard } from './profile-card';
import { SkillsSection } from './skills-section';

export function AboutSection() {
  return (
    <section id="about" className="scroll-section">
      <div className="scroll-content">
        <div className="container mx-auto px-4 min-h-screen flex flex-col justify-center">
          <div className="w-full max-w-[1200px] mx-auto">
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About me</h2>
            </motion.div>

            {/* Content Grid */}
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
        </div>
      </div>
    </section>
  );
}