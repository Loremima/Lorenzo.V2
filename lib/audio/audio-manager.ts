import { AUDIO_CONFIG } from '@/lib/constants/audio';

class AudioManager {
  private static instance: AudioManager;
  private audio: HTMLAudioElement | null = null;
  private isInitialized = false;
  private currentTheme: 'light' | 'dark' = 'light';

  private constructor() {}

  static getInstance(): AudioManager {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager();
    }
    return AudioManager.instance;
  }

  async initialize(theme: 'light' | 'dark'): Promise<void> {
    if (this.isInitialized) return;

    try {
      const source = theme === 'dark' ? AUDIO_CONFIG.paths.dark : AUDIO_CONFIG.paths.light;
      console.log('Initializing audio with source:', source);

      this.audio = new Audio();
      this.audio.loop = true;
      this.audio.volume = 0;
      this.audio.src = source;
      this.audio.preload = 'auto';
      this.audio.crossOrigin = 'anonymous';
      
      if (theme === 'dark') {
        this.audio.currentTime = AUDIO_CONFIG.darkModeStartTime;
      }
      
      this.currentTheme = theme;
      
      // Wait for audio to be loaded
      await new Promise((resolve, reject) => {
        if (!this.audio) return reject('No audio element');
        
        this.audio.addEventListener('canplaythrough', resolve, { once: true });
        this.audio.addEventListener('error', (e) => reject(e), { once: true });
        
        this.audio.load();
      });

      console.log('Audio loaded successfully');
      this.isInitialized = true;
    } catch (error) {
      console.error('Failed to initialize audio:', error);
      throw new Error('Audio initialization failed');
    }
  }

  async loadAudio(theme: 'light' | 'dark'): Promise<void> {
    if (!this.audio || this.currentTheme === theme) return;

    try {
      const source = theme === 'dark' ? AUDIO_CONFIG.paths.dark : AUDIO_CONFIG.paths.light;
      this.audio.src = source;
      
      if (theme === 'dark') {
        this.audio.currentTime = AUDIO_CONFIG.darkModeStartTime;
      }
      
      this.currentTheme = theme;
      await this.audio.load();
    } catch (error) {
      console.error('Failed to load audio:', error);
      throw new Error('Audio loading failed');
    }
  }

  async play(): Promise<void> {
    if (!this.audio?.src) return;
    
    try {
      console.log('Attempting to play audio');
      this.audio.volume = 0; // Start from 0 volume
      await this.audio.play();
      console.log('Audio playback started');

      // Gradually increase volume
      const fadeIn = () => {
        if (!this.audio) return;
        if (this.audio.volume < AUDIO_CONFIG.volume) {
          this.audio.volume = Math.min(this.audio.volume + 0.05, AUDIO_CONFIG.volume);
          setTimeout(fadeIn, 100);
        } else {
          console.log('Volume fade-in complete');
        }
      };
      fadeIn();
    } catch (error) {
      console.error('Failed to play audio:', error);
      throw new Error('Audio playback failed');
    }
  }

  pause(): void {
    if (!this.audio) return;
    
    // Gradually decrease volume
    const fadeOut = () => {
      if (!this.audio) return;
      if (this.audio.volume > 0) {
        this.audio.volume = Math.max(this.audio.volume - 0.05, 0);
        setTimeout(fadeOut, 100);
      } else {
        this.audio.pause();
      }
    };
    fadeOut();
  }

  cleanup(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.src = '';
      this.audio = null;
    }
    this.isInitialized = false;
  }
}

export const audioManager = AudioManager.getInstance();