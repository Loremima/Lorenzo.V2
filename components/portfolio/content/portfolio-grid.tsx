'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from './project-card';
import { projects } from '../data/portfolio-data';

interface PortfolioGridProps {
  selectedCategory: string;
}

export function PortfolioGrid({ selectedCategory }: PortfolioGridProps) {
  const filteredProjects = projects.filter(
    (project) => selectedCategory === 'All' || project.category === selectedCategory
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      <AnimatePresence mode="wait">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
