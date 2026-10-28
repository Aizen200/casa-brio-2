'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on fine pointer devices (not mobile touch)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Attach listeners to interactive elements
    const handleLinkHover = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const text = target.getAttribute('data-cursor');
        setCursorText(text || '');
        setCursorVariant('hover');
      } else if (e.target.closest('a, button')) {
        setCursorText('');
        setCursorVariant('pointer');
      } else {
        setCursorText('');
        setCursorVariant('default');
      }
    };

    document.addEventListener('mouseover', handleLinkHover);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleLinkHover);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Outer follow circle */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none"
        animate={{
          x: mousePosition.x - (cursorVariant === 'hover' ? 42 : cursorVariant === 'pointer' ? 24 : 16),
          y: mousePosition.y - (cursorVariant === 'hover' ? 42 : cursorVariant === 'pointer' ? 24 : 16),
          width: cursorVariant === 'hover' ? 84 : cursorVariant === 'pointer' ? 48 : 32,
          height: cursorVariant === 'hover' ? 84 : cursorVariant === 'pointer' ? 48 : 32,
          backgroundColor:
            cursorVariant === 'hover'
              ? 'rgba(185, 150, 106, 0.9)'
              : cursorVariant === 'pointer'
              ? 'rgba(247, 243, 236, 0.15)'
              : 'rgba(247, 243, 236, 0.08)',
          borderColor:
            cursorVariant === 'hover'
              ? 'rgba(185, 150, 106, 1)'
              : 'rgba(242, 237, 228, 0.35)',
          borderWidth: cursorVariant === 'hover' ? 0 : 1,
          backdropFilter: cursorVariant === 'hover' ? 'blur(2px)' : 'none',
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 300,
          mass: 0.5,
        }}
      >
        {cursorText && (
          <span className="text-[10px] font-sans font-bold tracking-widest text-[#0d0c0a] uppercase">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center pinpoint dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#b9966a] rounded-full pointer-events-none"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          opacity: cursorVariant === 'hover' ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 45,
          stiffness: 700,
          mass: 0.1,
        }}
      />
    </div>
  );
}

