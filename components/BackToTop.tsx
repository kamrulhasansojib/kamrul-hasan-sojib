
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-6 md:right-10 z-50 p-4 rounded-full bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-50 pointer-events-none'
      } hover:bg-blue-600 hover:-translate-y-2 active:scale-95`}
      aria-label="Back to top"
    >
      <ArrowUp className="w-6 h-6 stroke-[3px]" />
    </button>
  );
};

export default BackToTop;
