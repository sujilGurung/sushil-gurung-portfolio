import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) {
      return;
    }

    setMounted(true);

    let mouseX = -100;
    let mouseY = -100;
    let trailX = -100;
    let trailY = -100;
    let animId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setPosition({ x: mouseX, y: mouseY });
      setIsVisible(true);

      // Check if hovering interactive element
      const target = e.target;
      const isInteractive = target && (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.interactive') ||
        target.getAttribute('role') === 'button'
      );
      setIsHovered(!!isInteractive);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const animateTrail = () => {
      // Smooth lerp
      trailX += (mouseX - trailX) * 0.16;
      trailY += (mouseY - trailY) * 0.16;
      setTrailingPos({ x: trailX, y: trailY });
      animId = requestAnimationFrame(animateTrail);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    animId = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!mounted || !isVisible) return null;

  return (
    <>
      {/* Precision Center Dot */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          width: isHovered ? '4px' : '6px',
          height: isHovered ? '4px' : '6px',
          backgroundColor: '#00f0ff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          boxShadow: '0 0 10px #00f0ff',
          transition: 'width 0.2s, height 0.2s'
        }}
        aria-hidden="true"
      />

      {/* Smooth Trailing Glow Ring */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
          width: isHovered ? '48px' : '26px',
          height: isHovered ? '48px' : '26px',
          border: isHovered ? '1.5px solid rgba(0, 240, 255, 0.7)' : '1px solid rgba(0, 240, 255, 0.35)',
          backgroundColor: isHovered ? 'rgba(0, 240, 255, 0.08)' : 'transparent',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          boxShadow: isHovered ? '0 0 20px rgba(0, 240, 255, 0.3)' : 'none',
          transition: 'width 0.22s cubic-bezier(0.16, 1, 0.3, 1), height 0.22s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s, background-color 0.2s'
        }}
        aria-hidden="true"
      />
    </>
  );
}
