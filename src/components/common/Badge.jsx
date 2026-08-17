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
  ArrowRight,
  Clock,
  Zap,
  CheckCircle2,
  HelpCircle,
  Rocket,
  Share2,
  UserCheck,
  ChevronRight,
  ChevronLeft,
  XCircle,
  Lock,
  Building2,
  Server,
  Globe,
  Activity,
  Headphones,
  PhoneForwarded,
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
  ArrowRight,
  Clock,
  Zap,
  CheckCircle2,
  HelpCircle,
  Rocket,
  Share2,
  UserCheck,
  ChevronRight,
  ChevronLeft,
  XCircle,
  Lock,
  Building2,
  Server,
  Globe,
  Activity,
  Headphones,
  PhoneForwarded,
};

export const Badge = ({
  children,
  variant = 'primary', // 'primary' | 'cyan' | 'emerald' | 'amber' | 'subtle'
  icon,
  pulse = false,
  className,
}) => {
  const IconComponent = icon ? iconMap[icon] || Sparkles : null;

  return (
    <span className={clsx('badge', `badge-${variant}`, className)}>
      {pulse && <span className="pulse-dot" />}
      {IconComponent && <IconComponent size={13} />}
      {children}
    </span>
  );
};
