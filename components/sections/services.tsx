'use client';

import { motion } from 'framer-motion';
import { Brain, Cog, LineChart } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Consulting',
    description: 'Strategic AI implementation and optimization for business growth',
    features: ['AI Strategy Development', 'Technology Assessment', 'ROI Analysis'],
  },
  {
    icon: Cog,
    title: 'Process Automation',
    description: 'End-to-end automation solutions for improved efficiency',
    features: ['Workflow Optimization', 'RPA Implementation', 'Integration Services'],
  },
  {
    icon: LineChart,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights',
    features: ['Data Mining', 'Predictive Analytics', 'Business Intelligence'],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="scroll-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">Services</h2>
          <p className="section-description">
            Comprehensive AI and automation solutions tailored to transform your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
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
                  <service.icon className="h-6 w-6" />
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
          ))}
        </div>
      </div>
    </section>
  );
}