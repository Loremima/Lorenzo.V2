'use client';

import { motion } from 'framer-motion';
import { ProjectType } from '../data/portfolio-data';
import Image from 'next/image';

interface ProjectCardProps {
  project: ProjectType;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white/50 dark:bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500"
    >
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative h-48 overflow-hidden rounded-t-xl">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
          className="h-full"
        >
          <Image
            src={project.image}
            alt={project.title}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-xl" />
        </motion.div>
      </div>

      <div className="p-6">
        <span className="inline-block px-3 py-1 text-xs font-medium text-red-500 bg-red-500/10 rounded-full mb-3">
          {project.category}
        </span>
        <h3 className="text-lg font-semibold mb-2 group-hover:text-red-500 transition-colors duration-500 text-black dark:text-white">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-white/50 dark:bg-white/10 text-gray-600 dark:text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
