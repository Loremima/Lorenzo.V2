'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Image from 'next/image';
import { contactInfo } from '../data/contact-info';

export function ProfileSection() {
  return (
    <div className="w-full max-w-[280px] mx-auto space-y-6">
      {/* Profile Image */}
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
        <motion.div
          className="absolute -inset-4 rounded-2xl opacity-50"
          style={{
            background: 'radial-gradient(circle at center, rgba(239, 68, 68, 0.15), transparent 70%)',
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <div className="relative h-full rounded-2xl overflow-hidden">
          <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-br from-red-500/20 via-transparent to-red-500/10">
            <div className="absolute inset-0 rounded-2xl backdrop-blur-sm" />
          </div>
          <Image
            src="/components/photo/profile.jpg"
            alt="Profile"
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 280px"
            priority
            quality={95}
            style={{
              objectPosition: '50% 35%',
            }}
          />
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-3">
        {contactInfo.map((info, index) => (
          <motion.a
            key={info.label}
            href={info.href}
            target={info.target}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/5 transition-colors cursor-pointer"
          >
            <div className="p-1.5 rounded-lg bg-red-500/10">
              <info.icon className="w-4 h-4 text-red-500" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">{info.label}</div>
              <div className="text-sm font-medium">{info.value}</div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Download CV Button */}
      <motion.a
        href="/Lorenzo_Mira_Mateo_Business_Analyst.pdf"
        download="Lorenzo_Mira_Mateo_Resume.pdf"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className="w-full flex items-center justify-center gap-2 px-6 py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium text-sm"
      >
        <Download className="h-4 w-4" />
        Download Resume
      </motion.a>
    </div>
  );
}