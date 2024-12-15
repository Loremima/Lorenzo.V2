'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function VideoBackground() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(theme);
  const videoRef = useRef<HTMLVideoElement>(null);
  const nextVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || theme === currentVideo || isTransitioning) return;

    const handleTransition = async () => {
      setIsTransitioning(true);

      // Prepare next video
      if (nextVideoRef.current) {
        nextVideoRef.current.src = theme === 'dark' ? '/videos/sky-night.mp4' : '/videos/sky-day.mp4';
        nextVideoRef.current.playbackRate = theme === 'dark' ? 0.75 : 0.5;
        await nextVideoRef.current.load();
        await nextVideoRef.current.play();
      }

      // Wait for fade transition
      await new Promise(resolve => setTimeout(resolve, 750));

      // Update current video
      setCurrentVideo(theme);
      setIsTransitioning(false);
    };

    handleTransition();
  }, [theme, mounted, currentVideo, isTransitioning]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Main Video with Fade Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentVideo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover"
            style={{
              transition: 'filter 0.75s ease-in-out',
              filter: theme === 'dark' 
                ? 'brightness(0.85) contrast(1.1)' // Enhanced contrast for night sky
                : 'brightness(1) contrast(0.9)', // Softened day sky
            }}
          >
            <source
              src={currentVideo === 'dark' ? '/videos/sky-night.mp4' : '/videos/sky-day.mp4'}
              type="video/mp4"
            />
          </video>
        </motion.div>
      </AnimatePresence>

      {/* Transition Overlay */}
      <motion.div
        initial={false}
        animate={{
          backgroundColor: isTransitioning
            ? theme === 'dark'
              ? 'rgba(16, 16, 32, 0.85)' // Deep blue-black overlay for dark mode
              : 'rgba(240, 240, 245, 0.85)' // Soft white-blue overlay for light mode
            : 'rgba(0, 0, 0, 0)',
        }}
        transition={{
          duration: 1.5,
          ease: [0.4, 0.0, 0.2, 1], // Custom easing for smoother transition
        }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Background Color Base */}
      <div 
        className="absolute inset-0 transition-colors duration-1000"
        style={{
          backgroundColor: theme === 'dark' 
            ? '#101020' // Deep blue-black base for dark mode
            : '#f0f0f5', // Soft white-blue base for light mode
          opacity: 0.15,
          mixBlendMode: 'multiply',
        }}
      />

      {/* Preloaded Video */}
      <video
        ref={nextVideoRef}
        className="hidden"
        muted
        playsInline
      />
    </div>
  );
}