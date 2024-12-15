'use client';

import { PortfolioContainer } from './portfolio/layout/portfolio-container';

export function PortfolioSection() {
  return (
    <section id="portfolio" className="scroll-section">
      <div className="scroll-content">
        <PortfolioContainer />
      </div>
    </section>
  );
}