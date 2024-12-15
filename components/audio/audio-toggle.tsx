'use client';

import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAudio } from '@/hooks/use-audio';

export function AudioToggle() {
  const { isMuted, toggleMute, isReady, error } = useAudio();

  if (error) {
    // Silently handle error without showing the toggle
    return null;
  }

  return (
    <button
      onClick={toggleMute}
      className={`p-0 hover:opacity-80 transition-opacity ${!isReady ? 'cursor-not-allowed opacity-50' : ''}`}
      aria-label={isMuted ? "Unmute background music" : "Mute background music"}
      disabled={!isReady}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isMuted ? 'muted' : 'unmuted'}
          initial={{ opacity: 0, rotate: -180 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 180 }}
          transition={{ duration: 0.3 }}
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5" />
          ) : (
            <Volume2 className="h-5 w-5" />
          )}
        </motion.div>
      </AnimatePresence>
      {!isReady && (
        <span className="sr-only">Loading audio...</span>
      )}
    </button>
  );
}