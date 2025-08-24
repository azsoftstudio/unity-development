import { useState, useEffect, useCallback } from 'react';

interface UseScrolledOptions {
  threshold?: number;
  throttleMs?: number;
}

export function useScrolled(options: UseScrolledOptions = {}) {
  const { threshold = 20, throttleMs = 16 } = options;
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > threshold;
    setIsScrolled(prev => prev !== scrolled ? scrolled : prev);
  }, [threshold]);

  useEffect(() => {
    let timeoutId: number;

    const throttledHandleScroll = () => {
      if (timeoutId) return;
      
      timeoutId = window.setTimeout(() => {
        handleScroll();
        timeoutId = 0;
      }, throttleMs);
    };

    // Set initial state
    handleScroll();

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [handleScroll, throttleMs]);

  return isScrolled;
}