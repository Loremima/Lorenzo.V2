'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { colors, animations } from '@/lib/design-system';

export function VideoBackground() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(theme);
  const videoRef = useRef<HTMLVideoElement>(null);
  const nextVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const preloadVideos = async () => {
      const videos = {
        light: new Video('/videos/sky-day.mp4'),
        dark: new Video('/videos/sky-night.mp4'),
      };

      await Promise.all([videos.light.load(), videos.dark.load()]);

      setMounted(true);
    };

    preloadVideos();
  }, []);

  useEffect(() => {
    if (!mounted || theme === currentVideo || isTransitioning) return;

    const handleTransition = async () => {
      setIsTransitioning(true);

      if (nextVideoRef.current) {
        nextVideoRef.current.src =
          theme === 'dark' ? '/videos/sky-night.mp4' : '/videos/sky-day.mp4';
        nextVideoRef.current.playbackRate = theme === 'dark' ? 0.75 : 0.5;
        try {
          await nextVideoRef.current.play();
        } catch (error) {
          console.error('Error playing video:', error);
        }
      }

      await new Promise((resolve) =>
        setTimeout(resolve, animations.duration.normal * 1000)
      );
      setCurrentVideo(theme);
      setIsTransitioning(false);
    };

    handleTransition();
  }, [theme, mounted, currentVideo, isTransitioning]);

  if (!mounted) return null;

  const videoFilter =
    theme === 'dark'
      ? `brightness(${colors.video.dark.brightness}) contrast(${colors.video.dark.contrast})`
      : `brightness(${colors.video.light.brightness}) contrast(${colors.video.light.contrast})`;

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentVideo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: animations.duration.normal }}
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
              transition: `filter ${
                animations.duration.normal
              }s ${animations.transition.smooth.ease.join(', ')}`,
              filter: videoFilter,
            }}
          >
            <source
              src={
                currentVideo === 'dark'
                  ? '/videos/sky-night.mp4'
                  : '/videos/sky-day.mp4'
              }
              type="video/mp4"
            />
          </video>
        </motion.div>
      </AnimatePresence>

      <motion.div
        initial={false}
        animate={{
          backgroundColor: isTransitioning
            ? theme === 'dark'
              ? colors.video.dark.overlay
              : colors.video.light.overlay
            : 'rgba(0, 0, 0, 0)',
        }}
        transition={{ duration: animations.duration.normal }}
        className="absolute inset-0 pointer-events-none"
      />

      <div
        className="absolute inset-0 transition-colors duration-500"
        style={{
          backgroundColor:
            theme === 'dark' ? colors.theme.dark.bg : colors.theme.light.bg,
          opacity: 0.15,
          mixBlendMode: 'multiply',
        }}
      />

      <video ref={nextVideoRef} className="hidden" muted playsInline />
    </div>
  );
}

class Video {
  private video: HTMLVideoElement;

  constructor(src: string) {
    this.video = document.createElement('video');
    this.video.src = src;
  }

  load(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.video.addEventListener('loadeddata', () => resolve());
      this.video.addEventListener('error', (e) => reject(e));
      this.video.load();
    });
  }
}
