'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { skills } from '../data/skills-data';

export function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState<number|null>(null);

  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-base md:text-lg leading-relaxed text-muted-foreground"
      >
        Armed with a Master's in Data Science and 8+ years of expertise, I turn complex data challenges into business advantages. I build cutting-edge AI solutions and automation systems that help companies reduce costs, increase efficiency, and unlock hidden opportunities in their data.
      </motion.p>

      <div className="space-y-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: 'easeOut',
            }}
            className="group"
            onMouseEnter={() => setActiveSkill(index)}
            onMouseLeave={() => setActiveSkill(null)}
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <ChevronRight
                  className={`h-4 w-4 transition-transform duration-300 ${
                    activeSkill === index ? 'rotate-90 text-red-500' : ''
                  }`}
                />
                <span className="font-medium">{skill.name}</span>
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                {skill.level}%
              </span>
            </div>
            <div className="relative h-1.5 bg-muted/30 rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-500 to-red-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: 0.2 + index * 0.1,
                  ease: 'easeOut',
                }}
              />
            </div>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: activeSkill === index ? 'auto' : 0,
                opacity: activeSkill === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-sm text-muted-foreground mt-2 pl-6">
                {skill.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </>
  );
}