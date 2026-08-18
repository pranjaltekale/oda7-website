'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle = ({ className = '', style = {} }) => {
  const { toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-toggle-btn ${className}`}
      style={style}
      aria-label="Toggle light/dark theme"
      title="Toggle light/dark theme"
    >
      <span className="theme-toggle-icon-wrap">
        <Sun size={17} className="theme-toggle-icon sun-icon theme-show-dark" aria-hidden="true" />
        <Moon size={17} className="theme-toggle-icon moon-icon theme-show-light" aria-hidden="true" />
      </span>
    </button>
  );
};
