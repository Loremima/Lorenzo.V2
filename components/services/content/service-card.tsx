'use client';

import { motion } from 'framer-motion';
import { ServiceType } from '../data/services-data';

interface ServiceCardProps {
  service: ServiceType;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white/50 dark:bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg transition-all duration-500"
    >
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex items-center gap-4 mb-4">
        <motion.div
          className="p-2 bg-red-500/10 rounded-md text-red-500"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="h-6 w-6" />
        </motion.div>
        <h3 className="font-semibold text-black dark:text-white">{service.title}</h3>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>

      <ul className="space-y-2">
        {service.features.map((feature, featureIndex) => (
          <motion.li
            key={feature}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
            className="text-sm flex items-center gap-2 text-gray-600 dark:text-gray-300"
          >
            <div className="h-1 w-1 bg-red-500 rounded-full" />
            {feature}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
