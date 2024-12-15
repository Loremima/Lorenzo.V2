import { useState, useEffect, useCallback } from 'react';
import { useTheme } from 'next-themes';
import { audioManager } from '@/lib/audio/audio-manager';

export function useAudio() {
  const [isReady, setIsReady] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme();

  // Initialize audio on first user interaction
  useEffect(() => {
    const initAudio = async () => {
      try {
        if (isReady || !theme) return;
        
        await audioManager.initialize(theme as 'light' | 'dark');
        setIsReady(true);
        console.log('Audio initialized successfully');
      } catch (err) {
        setError('Failed to initialize audio');
        console.error(err);
      }
    };

    const handleInteraction = async () => {
      await initAudio();
    };

    window.addEventListener('click', handleInteraction, { once: true });
    window.addEventListener('touchstart', handleInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      audioManager.cleanup();
    };
  }, [isReady, theme]);

  useEffect(() => {
    if (!isReady) return;

    const updateTheme = async () => {
      try {
        await audioManager.loadAudio(theme as 'light' | 'dark');
        if (!isMuted) {
          await audioManager.play();
        }
      } catch (err) {
        setError('Failed to update audio theme');
        console.error(err);
      }
    };

    updateTheme();
  }, [theme, isReady, isMuted]);

  const toggleMute = useCallback(async () => {
    if (!isReady || error) return;

    setIsMuted(prev => !prev);
    try {
      if (isMuted) {
        await audioManager.play();
      } else {
        audioManager.pause();
      }
    } catch (err) {
      setIsMuted(prev => !prev); // Revert state on error
      setError('Failed to toggle audio');
      console.error(err);
    }
  }, [isMuted, isReady, error]);

  return {
    isReady,
    isMuted,
    error,
    toggleMute
  };
}