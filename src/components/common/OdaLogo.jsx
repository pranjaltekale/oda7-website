import React from 'react';

export const OdaMark = ({ size = 22, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`oda-logo-svg ${className}`}
    aria-hidden="true"
  >
    {/* Dark / Light Ring track opening at top-right */}
    <path
      d="M 21.5 8.5 A 9.5 9.5 0 1 0 23.5 19.5"
      stroke="currentColor"
      strokeWidth="3.2"
      strokeLinecap="round"
    />
    {/* Vibrant Blue Navigation / Growth Arrow (↗) */}
    <path
      d="M 15 19 L 24.5 9.5 M 24.5 9.5 H 19 M 24.5 9.5 V 15"
      stroke="#2563eb"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polygon
      points="25.5,8.5 18.5,8.5 25.5,15.5"
      fill="#2563eb"
    />
  </svg>
);

export const OdaLogo = ({ size = 34, showText = true, subtitle = 'Business OS', className = '' }) => {
  return (
    <div className={`oda-brand-container ${className}`}>
      <div className="oda-brand-mark">
        <OdaMark size={Math.round(size * 0.65)} />
      </div>
      {showText && (
        <span className="oda-brand-copy">
          <strong>oda<span>7</span></strong>
          {subtitle && <small>{subtitle}</small>}
        </span>
      )}
    </div>
  );
};
