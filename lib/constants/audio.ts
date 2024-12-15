export const AUDIO_CONFIG = {
  paths: {
    dark: '/audio/van-gogh-slowed.mp3',
    light: '/audio/moby-porcelain.mp3'
  },
  volume: 0.5,
  crossFadeDuration: 1000,
  darkModeStartTime: 90 // 1:30 in seconds
} as const;