"use client";

import { useState, useEffect } from 'react';

export function useIdleTimer(delay: number = 5000) {
  const [isIdle, setIsIdle] = useState(false);
  
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleActivity = () => {
      setIsIdle(false);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsIdle(true), delay);
    };
    
    // Set up event listeners for user activity
    const events = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll', 'wheel'];
    events.forEach(event => document.addEventListener(event, handleActivity));
    
    // Initial timeout
    timeoutId = setTimeout(() => setIsIdle(true), delay);
    
    return () => {
      events.forEach(event => document.removeEventListener(event, handleActivity));
      clearTimeout(timeoutId);
    };
  }, [delay]);
  
  return isIdle;
}