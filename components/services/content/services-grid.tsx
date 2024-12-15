'use client';

import { motion } from 'framer-motion';
import { ServiceCard } from './service-card';
import { servicesData } from '../data/services-data';

export function ServicesGrid() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {servicesData.map((service, index) => (
        <ServiceCard key={service.title} service={service} index={index} />
      ))}
    </motion.div>
  );
}