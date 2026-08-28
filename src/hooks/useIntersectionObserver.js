import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to detect when an element intersects the viewport
 * @param {Object} options - IntersectionObserver options
 */
export const useIntersectionObserver = (options = { threshold: 0.15, rootMargin: '0px' }) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Once visible, stop observing to keep rendered state
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      }
    }, options);

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};
