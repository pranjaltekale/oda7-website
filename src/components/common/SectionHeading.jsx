import React from 'react';
import clsx from 'clsx';
import {
  Sparkles,
  PhoneCall,
  Users,
  DollarSign,
  Trophy,
  BarChart3,
  Settings,
  ShieldCheck,
  Inbox,
  Layers,
  LayoutDashboard,
  PlayCircle,
  HelpCircle,
  Share2,
} from 'lucide-react';

const iconMap = {
  Sparkles,
  PhoneCall,
  Users,
  DollarSign,
  Trophy,
  BarChart3,
  Settings,
  ShieldCheck,
  Inbox,
  Layers,
  LayoutDashboard,
  PlayCircle,
  HelpCircle,
  Share2,
};

export const SectionHeading = ({
  eyebrow,
  eyebrowIcon,
  title,
  highlightText,
  description,
  align = 'center', // 'center' | 'left'
  className,
}) => {
  const IconComponent = eyebrowIcon ? iconMap[eyebrowIcon] || Sparkles : null;

  return (
    <div className={clsx('section-header', align === 'left' && 'text-left', className)}>
      {eyebrow && (
        <div className="section-eyebrow">
          {IconComponent && <IconComponent size={14} />}
          <span>{eyebrow}</span>
        </div>
      )}
      {title && (
        <h2 className="section-title">
          {title}{' '}
          {highlightText && (
            <span className="text-gradient-accent">{highlightText}</span>
          )}
        </h2>
      )}
      {description && (
        <p className="section-description">{description}</p>
      )}
    </div>
  );
};
