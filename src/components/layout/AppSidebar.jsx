'use client';

import React from 'react';
import { Link, useLocation } from '../../lib/navigation';
import {
  LayoutDashboard,
  PhoneCall,
  Calendar,
  Inbox,
  Users,
  Building2,
  FileText,
  DollarSign,
  TrendingUp,
  Award,
  BarChart3,
  Flame,
  ShieldCheck,
  Zap,
  Globe,
  Settings,
  ChevronRight,
  LogOut,
  Sparkles,
} from 'lucide-react';

export const AppSidebar = ({ isMobileOpen, onCloseMobile }) => {
  const location = useLocation();

  const navSections = [
    {
      title: 'Workspace',
      items: [
        { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
        { label: 'Live Dialer', path: '/dialer', icon: PhoneCall, badge: 'Live' },
        { label: 'Calendar', path: '/calendar', icon: Calendar },
        { label: 'Omni Inbox', path: '/inbox', icon: Inbox, badge: '4' },
      ],
    },
    {
      title: 'Sales & Revenue',
      items: [
        { label: 'Leads (Queue)', path: '/leads', icon: Users },
        { label: 'Campaigns', path: '/campaigns', icon: Zap },
        { label: 'Call History', path: '/calls', icon: PhoneCall },
        { label: 'Companies', path: '/companies', icon: Building2 },
        { label: 'Products & CPQ', path: '/products', icon: DollarSign },
        { label: 'Branching Scripts', path: '/scripts', icon: FileText },
        { label: 'Sequences', path: '/sequences', icon: Inbox },
        { label: 'Quotes & Deals', path: '/quotes', icon: FileText },
      ],
    },
    {
      title: 'People & Operations',
      items: [
        { label: 'Sales Agents', path: '/agents', icon: Users },
        { label: 'Managers', path: '/managers', icon: Users },
        { label: 'Teams & Pods', path: '/teams', icon: Globe },
        { label: 'Departments', path: '/departments', icon: Building2 },
      ],
    },
    {
      title: 'Compensation',
      items: [
        { label: 'Salary Rules', path: '/salary', icon: DollarSign },
        { label: 'Payroll & Payslips', path: '/payroll', icon: DollarSign },
        { label: 'Incentives & SPIFFs', path: '/incentives', icon: Award },
        { label: 'Floor Contests', path: '/contests', icon: Award },
      ],
    },
    {
      title: 'Engagement & BI',
      items: [
        { label: 'Leaderboard', path: '/leaderboard', icon: TrendingUp },
        { label: 'Achievements', path: '/achievements', icon: Award },
        { label: 'Analytics', path: '/analytics', icon: BarChart3 },
        { label: 'Pickup Heatmap', path: '/heatmap', icon: Flame },
        { label: 'Executive BI', path: '/executive', icon: TrendingUp },
      ],
    },
    {
      title: 'Super Admin (SaaS)',
      items: [
        { label: 'Platform Master', path: '/superadmin', icon: ShieldCheck },
        { label: 'Tenant Plans', path: '/superadmin/plans', icon: DollarSign },
        { label: 'Subscriptions', path: '/superadmin/subscriptions', icon: DollarSign },
        { label: 'Invoices', path: '/superadmin/invoices', icon: FileText },
        { label: 'Platform Leads', path: '/superadmin/leads', icon: Users },
        { label: 'AI Assistant', path: '/superadmin/ai-assistant', icon: Sparkles },
        { label: 'Organizations', path: '/superadmin/organizations', icon: Building2 },
      ],
    },
  ];

  return (
    <aside className={`workspace-sidebar ${isMobileOpen ? 'mobile-open' : ''}`}>
      {/* Brand Header */}
      <div style={{ padding: '20px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'var(--grad-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '800', fontSize: '0.875rem' }}>
            O
          </div>
          <div>
            <div style={{ color: '#fff', fontWeight: '800', fontSize: '1rem', letterSpacing: '-0.02em', lineHeight: 1 }}>oda7</div>
            <div style={{ color: '#64748b', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>ODA7 WORKSPACE</div>
          </div>
        </Link>

        <Link to="/" style={{ color: '#94a3b8', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '2px', textDecoration: 'none' }}>
          <span>Website</span>
          <ChevronRight size={12} />
        </Link>
      </div>

      {/* Navigation Groups */}
      <div style={{ flex: 1, padding: '12px 0' }}>
        {navSections.map((section, sIdx) => (
          <div key={sIdx} style={{ marginBottom: '12px' }}>
            <div className="workspace-nav-section-title">{section.title}</div>
            {section.items.map((item) => {
              const IconComp = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onCloseMobile}
                  className={`workspace-nav-item ${isActive ? 'active' : ''}`}
                >
                  <IconComp size={15} style={{ flexShrink: 0 }} />
                  <span style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.label}
                  </span>
                  {item.badge && (
                    <span className="badge badge-cyan" style={{ fontSize: '0.6rem', padding: '1px 6px' }}>
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        ))}
      </div>

      {/* User profile bottom bar */}
      <div style={{ padding: '16px', borderTop: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#1e293b', border: '1px solid #3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '700', fontSize: '0.75rem' }}>
            AR
          </div>
          <div>
            <div style={{ color: '#fff', fontSize: '0.75rem', fontWeight: '600' }}>Alex Rivera</div>
            <div style={{ color: '#64748b', fontSize: '0.65rem' }}>Illustrative SDR workspace</div>
          </div>
        </div>
      </div>
    </aside>
  );
};
