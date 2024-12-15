'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const categories = ['All', 'AI', 'Automation', 'Data Science'];

const projects = [
  {
    id: 1,
    title: 'AI-Powered Customer Service',
    category: 'AI',
    description: 'Intelligent chatbot system with natural language processing',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1600&auto=format&fit=crop',
    technologies: ['Python', 'TensorFlow', 'NLP'],
  },
  {
    id: 2,
    title: 'Process Automation Suite',
    category: 'Automation',
    description: 'End-to-end automation platform for business workflows',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1600&auto=format&fit=crop',
    technologies: ['Node.js', 'RPA', 'API'],
  },
  {
    id: 3,
    title: 'Data Analytics Dashboard',
    category: 'Data Science',
    description: 'Real-time analytics and visualization platform',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
    technologies: ['Python', 'React', 'D3.js'],
  },
];

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = projects.filter(
    (project) => selectedCategory === 'All' || project.category === selectedCategory
  );

  return (
    <section id="portfolio" className="scroll-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">Portfolio</h2>
          <p className="section-description">
            Explore my latest projects and implementations in AI, automation, and data science
          </p>
        </motion.div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-500 ${
                selectedCategory === category
                  ? 'bg-red-500 text-white'
                  : 'bg-white/50 dark:bg-white/10 hover:bg-red-500/10 text-gray-600 dark:text-gray-300 hover:text-red-500'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="group relative bg-white/50 dark:bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-lg transition-all duration-500"
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}