'use client';

import { motion } from 'framer-motion';
import { categories } from '../data/portfolio-data';

interface PortfolioCategoriesProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function PortfolioCategories({ 
  selectedCategory, 
  onCategoryChange 
}: PortfolioCategoriesProps) {
  return (
    <div className="flex justify-center gap-3 mb-12 flex-wrap sticky top-0 bg-white/80 dark:bg-gray-900/80 z-10 backdrop-blur-sm py-3">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onCategoryChange(category)}
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
  );
}
