'use client';

import { PortfolioHeader } from './portfolio-header';
import { PortfolioCategories } from '../content/portfolio-categories';
import { PortfolioGrid } from '../content/portfolio-grid';
import { useState } from 'react';

export function PortfolioContainer() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="container mx-auto px-4 min-h-screen flex flex-col items-center pt-20">
      <div className="w-full max-w-[1200px] mx-auto">
        <PortfolioHeader />
        <PortfolioCategories 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <PortfolioGrid selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}
