export async function preloadAudio(src: string): Promise<HTMLAudioElement> {
  return new Promise((resolve, reject) => {
    const audio = new Audio();
    let timeout: NodeJS.Timeout;
    
    // Set a timeout to prevent hanging
    timeout = setTimeout(() => {
      cleanup();
      reject(new Error('Audio loading timed out'));
    }, 10000);

    const handleCanPlay = () => {
      cleanup();
      resolve(audio);
    };

    const handleError = () => {
      cleanup();
      reject(new Error('Failed to load audio file'));
    };

    const cleanup = () => {
      clearTimeout(timeout);
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.removeEventListener('error', handleError);
    };

    audio.addEventListener('canplaythrough', handleCanPlay, { once: true });
    audio.addEventListener('error', handleError, { once: true });
    
    audio.src = src;
    audio.load();
  });
}

export function createAudioElement(): HTMLAudioElement {
  const audio = new Audio();
  audio.loop = true;
  audio.volume = 0;  // Start muted
  audio.preload = 'auto';
  return audio;
}