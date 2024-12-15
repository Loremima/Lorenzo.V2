'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useTheme } from 'next-themes';
import { AUDIO_CONFIG } from '@/lib/constants/audio';
import { createAudioElement, preloadAudio } from '@/lib/utils/audio';

interface AudioState {
  isLoading: boolean;
  error: string | null;
}

export function useBackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [audioState, setAudioState] = useState<AudioState>({
    isLoading: true,
    error: null
  });
  const loadingRef = useRef<boolean>(false);
  const { theme } = useTheme();

  // Initialize audio on mount
  useEffect(() => {
    const initializeAudio = async () => {
      if (loadingRef.current) return;
      loadingRef.current = true;

      try {
        // Create audio element
        const audioElement = createAudioElement();
        audioRef.current = audioElement;

        // Handle user interaction requirement
        const handleInteraction = () => {
          if (audioElement && !audioElement.src) {
            const source = theme === 'dark' 
              ? AUDIO_CONFIG.paths.dark 
              : AUDIO_CONFIG.paths.light;
            audioElement.src = source;
            if (theme === 'dark') {
              audioElement.currentTime = AUDIO_CONFIG.darkModeStartTime;
            }
          }
        };

        window.addEventListener('click', handleInteraction, { once: true });
        window.addEventListener('touchstart', handleInteraction, { once: true });

        return () => {
          window.removeEventListener('click', handleInteraction);
          window.removeEventListener('touchstart', handleInteraction);
        }

        setAudioState({ isLoading: false, error: null });
      } catch (error) {
        console.error('Failed to initialize audio:', error);
        setAudioState({
          isLoading: false,
          error: 'Failed to initialize audio'
        });
      } finally {
        loadingRef.current = false;
      }
    };

    initializeAudio();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, [theme]);

  // Handle theme changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleThemeChange = async () => {
      try {
        setAudioState(prev => ({ ...prev, isLoading: true }));
        loadingRef.current = true;
        
        const newSource = theme === 'dark' 
          ? AUDIO_CONFIG.paths.dark 
          : AUDIO_CONFIG.paths.light;

        const wasPlaying = !audio.paused;
        const currentTime = audio.currentTime;
        
        // Fade out current audio
        if (wasPlaying) {
          audio.volume = 0;
        }
        
        audio.src = newSource;
        audio.currentTime = theme === 'dark' ? AUDIO_CONFIG.darkModeStartTime : 0;

        setAudioState({ isLoading: false, error: null });

        if (!isMuted) {
          await audio.play();
        }
      } catch (error) {
        console.error('Failed to change audio theme:', error);
        setAudioState({
          isLoading: false,
          error: 'Failed to change audio theme'
        });
      } finally {
        loadingRef.current = false;
        audio.volume = isMuted ? 0 : AUDIO_CONFIG.volume;
      }
    };

    handleThemeChange();
  }, [theme, isMuted]);

  const toggleMute = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || audioState.error) return;

    try {
      if (isMuted) {
        audio.volume = AUDIO_CONFIG.volume;
        await audio.play();
        audio.volume = AUDIO_CONFIG.volume;
      } else {
        audio.pause();
      }
      setIsMuted(!isMuted);
    } catch (error) {
      console.error('Failed to toggle audio:', error);
      setAudioState({
        isLoading: false,
        error: 'Failed to toggle audio'
      });
    }
    
  }, [isMuted, audioState.error]);

  return {
    isMuted,
    toggleMute,
    isLoading: audioState.isLoading,
    error: audioState.error
  };
}