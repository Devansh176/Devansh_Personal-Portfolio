import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for Intersection Observer API
 * Optimizes animations by only triggering when elements are visible
 */
export const useIntersectionObserver = (options?: IntersectionObserverInit) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only animate once when element comes into view
        if (entry.isIntersecting && !isIntersecting) {
          setIsIntersecting(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [isIntersecting, options]);

  return { ref, isIntersecting };
};
