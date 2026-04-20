import React, { useEffect, useState } from 'react';
import { ArrowUp } from '@phosphor-icons/react';

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 h-11 w-11 bg-corp-600 text-white flex items-center justify-center hover:bg-corp-700 transition-colors"
      style={{ borderRadius: '2px' }}
    >
      <ArrowUp size={18} weight="bold" />
    </button>
  );
}
