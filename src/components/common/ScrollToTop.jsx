import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="btn btn-primary"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '42px',
        height: '42px',
        padding: '0',
        borderRadius: '50%',
        zIndex: 90,
        boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
      }}
      aria-label="Scroll to top"
      title="Back to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
