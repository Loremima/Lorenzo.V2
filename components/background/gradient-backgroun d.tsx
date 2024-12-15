"use client"

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function GradientBackground() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        animate={{
          backgroundColor: theme === 'dark' ? '#1a1f36' : '#f8f9fa'
        }}
        transition={{
          duration: 1.5,
          ease: [0.4, 0.0, 0.2, 1]
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.5,
              ease: [0.4, 0.0, 0.2, 1]
            }}
            className={`
              absolute inset-0 
              ${theme === 'dark' 
                ? 'bg-gradient-to-br from-blue-900/20 via-gray-900/20 to-purple-900/20' 
                : 'bg-gradient-to-br from-blue-50/50 via-gray-50/50 to-purple-50/50'
              }
              animate-gradient
            `}
          />
        </AnimatePresence>

        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 bg-[url('/noise.png')] mix-blend-overlay"
          style={{
            opacity: theme === 'dark' ? 0.04 : 0.03,
            transition: 'opacity 1.5s ease'
          }}
        />
      </motion.div>
    </div>
  )
}

export default GradientBackground