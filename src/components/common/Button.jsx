'use client';

import React from 'react';
import { Link } from '../../lib/navigation';
import { useDemo } from '../../context/DemoContext';
import clsx from 'clsx';
import {
  ArrowRight,
  ArrowLeft,
  PlayCircle,
  Sparkles,
  PhoneCall,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
} from 'lucide-react';

const iconMap = {
  ArrowRight,
  ArrowLeft,
  PlayCircle,
  Sparkles,
  PhoneCall,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
};

export const Button = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'ghost'
  size = 'md', // 'sm' | 'md' | 'lg'
  iconRight,
  iconLeft,
  to,
  href,
  onClick,
  demo = false,
  className,
  disabled = false,
  type = 'button',
  ...props
}) => {
  const openDemo = useDemo();
  const IconRightComponent = iconRight ? iconMap[iconRight] || ArrowRight : null;
  const IconLeftComponent = iconLeft ? iconMap[iconLeft] || Sparkles : null;

  const btnClasses = clsx(
    'btn',
    `btn-${variant}`,
    size !== 'md' && `btn-${size}`,
    (iconRight || iconLeft) && 'btn-icon-pulse',
    className
  );

  const content = (
    <>
      {IconLeftComponent && <IconLeftComponent size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} className="btn-icon" />}
      <span>{children}</span>
      {IconRightComponent && <IconRightComponent size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} className="btn-icon" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={btnClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={btnClasses} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={btnClasses} onClick={demo ? openDemo : onClick} disabled={disabled} {...props}>
      {content}
    </button>
  );
};
