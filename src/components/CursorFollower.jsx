import React, { useEffect, useRef, useState } from 'react';

/**
 * CursorFollower Component (Easter Egg):
 * Gentle trailing light spark and subtle glowing cyber-emerald ring
 * that smoothly tracks the user's cursor across the screen.
 * Expands softly when hovering over interactive elements.
 */
const CursorFollower = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop / trackpad)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let animId;

    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Check if hovering over clickable elements
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[role="button"]')
      ) {
        setIsHoveringClickable(true);
      } else {
        setIsHoveringClickable(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      // Direct fast follow for inner spark
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.45;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.45;

      // Smooth delayed trailing follow for outer ring
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.16;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.16;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0px) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0px) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Outer Trailing Cyber Ring */}
      <div
        ref={ringRef}
        className={`absolute top-0 left-0 rounded-full transition-[width,height,border-color,background-color] duration-200 ease-out will-change-transform ${
          isHoveringClickable
            ? 'w-10 h-10 border-2 border-lime-400/80 bg-emerald-500/15 shadow-[0_0_18px_rgba(163,230,53,0.45)]'
            : 'w-7 h-7 border border-emerald-400/50 bg-emerald-500/10 shadow-[0_0_12px_rgba(16,185,129,0.35)]'
        }`}
      />

      {/* Inner Glowing Trailing Spark */}
      <div
        ref={dotRef}
        className={`absolute top-0 left-0 rounded-full bg-gradient-to-tr from-emerald-400 to-lime-300 will-change-transform transition-[width,height] duration-150 ${
          isHoveringClickable
            ? 'w-2.5 h-2.5 shadow-[0_0_12px_#a3e635]'
            : 'w-1.5 h-1.5 shadow-[0_0_8px_#10b981]'
        }`}
      />
    </div>
  );
};

export default CursorFollower;

