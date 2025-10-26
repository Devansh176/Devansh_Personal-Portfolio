import { useEffect, useState } from 'react';

/**
 * Custom hook for throttled scroll events
 * Optimizes scroll performance by limiting callback execution
 */
export const useThrottledScroll = (threshold: number = 10, delay: number = 100) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only update if scroll position changed significantly
      if (Math.abs(currentScrollY - lastScrollY) > 5) {
        lastScrollY = currentScrollY;
        
        if (timeoutId) return;
        
        timeoutId = setTimeout(() => {
          setIsScrolled(currentScrollY > threshold);
          timeoutId = null;
        }, delay);
      }
    };

    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [threshold, delay]);

  return isScrolled;
};
