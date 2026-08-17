import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { AppSidebar } from '../components/layout/AppSidebar';
import { SalesDashboardMockup } from '../components/mockups/SalesDashboardMockup';
import { MarketingDashboardMockup } from '../components/mockups/MarketingDashboardMockup';
import { ManagerDashboardMockup } from '../components/mockups/ManagerDashboardMockup';
import { SuperAdminMockup } from '../components/mockups/SuperAdminMockup';
import {
  Search,
  Bell,
  Menu,
  X,
  PhoneCall,
  Sparkles,
  Layers,
  ArrowRight,
  TrendingUp,
  Award,
  DollarSign,
  Users,
  Building2,
  Calendar,
  CheckCircle2,
} from 'lucide-react';

export const AppWorkspacePage = ({ onOpenDemo }) => {
  const location = useLocation();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const currentPath = location.pathname;

  // Derive route metadata
  const getRouteInfo = (path) => {
    switch (path) {
      case '/dialer':
        return { title: 'WebRTC Live Telephony Dialer', category: 'Telephony', role: 'Sales SDR', desc: 'Predictive 0.8s local presence dialer with live dynamic scripting.' };
      case '/leads':
        return { title: 'Inbound Leads & Priority Queue', category: 'Sales', role: 'Sales SDR', desc: 'AI-enriched inbound leads sorted by win probability.' };
      case '/campaigns':
        return { title: 'Omnichannel & WhatsApp Campaigns', category: 'Marketing', role: 'Marketing Lead', desc: 'Manage multi-touch sequences, broadcasts, and speed-to-lead bridges.' };
      case '/calls':
        return { title: 'Call History & Speech Recordings', category: 'Telephony', role: 'Sales SDR', desc: 'Dual-channel HD audio recordings with AI sentiment scores.' };
      case '/companies':
        return { title: 'Account Companies & Directory', category: 'Sales', role: 'Sales SDR', desc: 'Target B2B accounts with decision-maker org charts.' };
      case '/products':
        return { title: 'Product Catalog & Pricing CPQ', category: 'Sales', role: 'Sales SDR', desc: 'Configurable products, bundles, and instant proposal generator.' };
      case '/scripts':
        return { title: 'Interactive Branching Scripts', category: 'Sales', role: 'Sales SDR', desc: 'Adaptive qualification talk tracks with real-time objection battlecards.' };
      case '/sequences':
        return { title: 'Automated Multi-Touch Sequences', category: 'Sales', role: 'Sales SDR', desc: 'Automated WhatsApp, SMS, and email cadence automation.' };
      case '/quotes':
        return { title: 'CPQ Quotes & Digital Signatures', category: 'Sales', role: 'Sales SDR', desc: '1-click proposals with client open tracking and mobile e-sign.' };
      case '/agents':
        return { title: 'Sales Agent Floor Roster', category: 'People', role: 'Manager', desc: 'Live rep statuses, active dials, and queue load balancing.' };
      case '/managers':
        return { title: 'Manager Floor Command & Whisper', category: 'People', role: 'Manager', desc: 'Live floor supervision with silent listen, whisper, and barge-in.' };
      case '/teams':
        return { title: 'Sales Pods & Territory Hierarchy', category: 'People', role: 'Manager', desc: 'Squad organization with custom quota pacing and leaderboards.' };
      case '/departments':
        return { title: 'Organizational Departments', category: 'People', role: 'Admin', desc: 'Department-level RBAC and telephony line routing.' };
      case '/salary':
        return { title: 'Salary & Compensation Models', category: 'Compensation', role: 'Admin', desc: 'Base pay structures with tiered quota accelerator rules.' };
      case '/payroll':
        return { title: 'Automated Payroll & Itemized Payslips', category: 'Compensation', role: 'Admin', desc: 'Verified commission payouts with 1-click PDF dispatch.' };
      case '/incentives':
        return { title: 'Incentives & Flash SPIFFs', category: 'Compensation', role: 'Admin', desc: 'Real-time performance bonuses and weekend sprint multipliers.' };
      case '/contests':
        return { title: 'Live Sales Battles & Contests', category: 'Engagement', role: 'Admin', desc: 'Gamified floor competitions with live countdown timers.' };
      case '/leaderboard':
        return { title: 'Live Floor Revenue Leaderboard', category: 'Engagement', role: 'Manager', desc: 'Daily, weekly, and monthly rep revenue rankings.' };
      case '/achievements':
        return { title: 'Rep Badges & Career Milestones', category: 'Engagement', role: 'People', desc: 'Recognize top performers with automated achievement badges.' };
      case '/analytics':
        return { title: 'Real-Time Telephony Analytics', category: 'Insights', role: 'Executive', desc: 'Hour-by-hour pickup ratios, connection metrics, and carrier health.' };
      case '/heatmap':
        return { title: 'Timezone & Carrier Pickup Heatmap', category: 'Insights', role: 'Executive', desc: 'Interactive geographic heatmaps identifying optimal dial windows.' };
      case '/executive':
        return { title: 'Executive Command & Master BI', category: 'Insights', role: 'Executive', desc: 'Consolidated revenue velocity, ARR/MRR modeling, and CAC/LTV.' };
      case '/superadmin':
      case '/superadmin/plans':
      case '/superadmin/subscriptions':
      case '/superadmin/invoices':
      case '/superadmin/leads':
      case '/superadmin/ai-assistant':
      case '/superadmin/organizations':
        return { title: 'Super Admin Multi-Tenant SaaS Console', category: 'Super Admin', role: 'Platform Executive', desc: 'Tenant isolation, subscription billing, and global IP defense.' };
      default:
        return { title: 'Unified Sales Operating Dashboard', category: 'Workspace', role: 'Sales SDR', desc: 'Real-time overview of active queue, live dialer, and personal performance.' };
    }
  };

  const routeInfo = getRouteInfo(currentPath);
  const isSuperAdminRoute = currentPath.startsWith('/superadmin');
  const isMarketingRoute = currentPath === '/campaigns';
  const isManagerRoute = ['/agents', '/managers', '/teams', '/leaderboard', '/heatmap', '/executive'].includes(currentPath);

  return (
    <div className="workspace-layout">
      {/* Interactive Sidebar */}
      <AppSidebar
        isMobileOpen={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />

      {/* Main Workspace Body */}
      <div className="workspace-main-content">
        
        {/* Top Header Bar */}
        <header className="workspace-top-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              style={{
                display: 'none',
                background: 'transparent',
                border: 'none',
                color: '#fff',
              }}
              className="mobile-toggle-btn"
            >
              <Menu size={20} />
            </button>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="badge badge-primary" style={{ fontSize: '0.65rem', padding: '2px 8px' }}>
                  {routeInfo.category}
                </span>
                <span style={{ color: '#64748b', fontSize: '0.75rem' }}>//</span>
                <span style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: '500' }}>
                  {routeInfo.role}
                </span>
              </div>
              <h1 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#fff', margin: '2px 0 0 0' }}>
                {routeInfo.title}
              </h1>
            </div>
          </div>

          {/* Right Header Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Search Input */}
            <div style={{ position: 'relative', width: '220px' }} className="desktop-hide-sm">
              <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
              <input
                type="text"
                placeholder="Search leads, calls, reps..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '6px',
                  padding: '6px 12px 6px 30px',
                  color: '#fff',
                  fontSize: '0.75rem',
                }}
              />
            </div>

            <button
              onClick={onOpenDemo}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '6px',
                background: 'var(--grad-primary)',
                color: '#fff',
                fontWeight: '700',
                fontSize: '0.75rem',
                boxShadow: '0 0 15px rgba(37, 99, 235, 0.4)',
              }}
            >
              <Sparkles size={13} />
              <span>Launch Full Simulator</span>
            </button>
          </div>
        </header>

        {/* Dynamic Route Content */}
        <div className="workspace-view-container">
          
          {/* Context Banner */}
          <div style={{ background: 'rgba(14, 19, 32, 0.6)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '16px 20px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <div style={{ fontWeight: '700', color: '#fff', fontSize: '0.95rem' }}>
                {routeInfo.title}
              </div>
              <div style={{ color: '#94a3b8', fontSize: '0.8125rem', marginTop: '2px' }}>
                {routeInfo.desc}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Link to="/contact" style={{ padding: '6px 12px', borderRadius: '6px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '0.75rem', fontWeight: '600', textDecoration: 'none' }}>
                Book Live Team Demo
              </Link>
            </div>
          </div>

          {/* Interactive Workspace Body according to route */}
          {isSuperAdminRoute ? (
            <SuperAdminMockup />
          ) : isMarketingRoute ? (
            <MarketingDashboardMockup />
          ) : isManagerRoute ? (
            <ManagerDashboardMockup />
          ) : (
            <SalesDashboardMockup interactive={true} />
          )}

        </div>

      </div>
    </div>
  );
};
