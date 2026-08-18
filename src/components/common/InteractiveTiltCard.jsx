'use client';

import React, { useRef, useState, useCallback } from 'react';

/**
 * InteractiveTiltCard
 * High-performance cursor tracking tilt & micro-parallax component.
 * Applies subtle ±2-4° 3D tilt and sets CSS custom properties for inner parallax.
 */
export const InteractiveTiltCard = ({
  children,
  maxTilt = 3.5, // maximum tilt degrees
  scale = 1.015, // subtle scale on hover
  className = '',
  style = {},
  onClick,
  ...props
}) => {
  const cardRef = useRef(null);
  const rafId = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;

    if (rafId.current) cancelAnimationFrame(rafId.current);

    rafId.current = requestAnimationFrame(() => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const normX = (x / rect.width - 0.5) * 2; // -1 to 1
      const normY = (y / rect.height - 0.5) * 2; // -1 to 1

      const rotX = -normY * maxTilt;
      const rotY = normX * maxTilt;

      cardRef.current.style.setProperty('--tilt-rx', `${rotX.toFixed(2)}deg`);
      cardRef.current.style.setProperty('--tilt-ry', `${rotY.toFixed(2)}deg`);
      cardRef.current.style.setProperty('--tilt-px', `${(normX * 6).toFixed(1)}px`);
      cardRef.current.style.setProperty('--tilt-py', `${(normY * 6).toFixed(1)}px`);
      cardRef.current.style.setProperty('--glare-x', `${(x / rect.width) * 100}%`);
      cardRef.current.style.setProperty('--glare-y', `${(y / rect.height) * 100}%`);
    });
  }, [maxTilt]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (rafId.current) cancelAnimationFrame(rafId.current);

    if (cardRef.current) {
      cardRef.current.style.setProperty('--tilt-rx', '0deg');
      cardRef.current.style.setProperty('--tilt-ry', '0deg');
      cardRef.current.style.setProperty('--tilt-px', '0px');
      cardRef.current.style.setProperty('--tilt-py', '0px');
    }
  };

  return (
    <div
      ref={cardRef}
      className={`interactive-tilt-card ${isHovered ? 'is-tilted' : ''} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: isHovered
          ? `perspective(1200px) rotateX(var(--tilt-rx, 0deg)) rotateY(var(--tilt-ry, 0deg)) scale3d(${scale}, ${scale}, ${scale})`
          : 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: isHovered
          ? 'transform 100ms ease-out, box-shadow 250ms ease'
          : 'transform 450ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 350ms ease',
        transformStyle: 'preserve-3d',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};
