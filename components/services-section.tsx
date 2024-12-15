'use client';

import { ServicesContainer } from './services/layout/services-container';

export function ServicesSection() {
  return (
    <section id="services" className="scroll-section">
      <div className="scroll-content">
        <ServicesContainer />
      </div>
    </section>
  );
}