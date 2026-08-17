import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { SalesDashboardMockup } from '../mockups/SalesDashboardMockup';
import { MarketingDashboardMockup } from '../mockups/MarketingDashboardMockup';
import { ManagerDashboardMockup } from '../mockups/ManagerDashboardMockup';
import { SuperAdminMockup } from '../mockups/SuperAdminMockup';
import {
  PhoneCall,
  Share2,
  LayoutDashboard,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export const FiveRoleShowcase = () => {
  const [activeRole, setActiveRole] = useState('sales');

  const roles = [
    {
      id: 'sales',
      label: 'Sales Agent',
      icon: PhoneCall,
      headline: 'Move from lead to conversation without losing context',
      description: 'Work a prioritized lead queue, open the calling workspace, follow the right script and leave a clear next action for the team.',
      badge: 'Sales Workspace',
      badgeColor: 'emerald',
    },
    {
      id: 'marketing',
      label: 'Marketing',
      icon: Share2,
      headline: 'Connect campaigns to the leads and outcomes they create',
      description: 'Keep campaigns, lead sources, attribution and conversion context connected to the sales workflow.',
      badge: 'Growth Engine',
      badgeColor: 'cyan',
    },
    {
      id: 'manager',
      label: 'Sales Manager',
      icon: LayoutDashboard,
      headline: 'See the floor, coach the team and improve the next action',
      description: 'Monitor activity, understand queue ownership and move from performance signals to focused coaching.',
      badge: 'Floor Command',
      badgeColor: 'primary',
    },
    {
      id: 'people',
      label: 'HR / People',
      icon: Users,
      headline: 'Keep people operations connected to the work itself',
      description: 'Bring teams, departments, onboarding, leave and attendance into the same operational workspace.',
      badge: 'People Ops',
      badgeColor: 'amber',
    },
    {
      id: 'operations',
      label: 'Operations',
      icon: Users,
      headline: 'Coordinate attendance, compensation and productivity',
      description: 'Connect payroll, incentives and team activity without rebuilding the operating picture in spreadsheets.',
      badge: 'Operations',
      badgeColor: 'cyan',
    },
    {
      id: 'executive',
      label: 'Executive',
      icon: LayoutDashboard,
      headline: 'Turn performance signals into a clearer business view',
      description: 'Use analytics, heatmaps and executive reporting to understand performance and make faster decisions.',
      badge: 'Leadership',
      badgeColor: 'primary',
    },
    {
      id: 'super-admin',
      label: 'Super Admin',
      icon: ShieldCheck,
      headline: 'Operate the platform behind every organization',
      description: 'Manage organizations, plans, subscriptions, invoices, audit logs, branding and platform-wide settings.',
      badge: 'Platform SaaS',
      badgeColor: 'emerald',
    },
  ];

  const currentRole = roles.find((r) => r.id === activeRole) || roles[0];

  return (
    <section id="role-showcase" className="section-wrapper">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="Built for every role"
          eyebrowIcon="LayoutDashboard"
          title="One platform."
          highlightText="Every team."
          description="Switch roles to see how the workspace changes while the underlying operating context stays connected."
        />

        <div className="editorial-role-grid">
          <div className="editorial-role-image">
            <img src="/oda7-team-story.png" alt="A sales operations team collaborating around a shared workspace" loading="lazy" decoding="async" />
          </div>
          <div className="editorial-role-copy">
            <span className="badge badge-cyan" style={{ marginBottom: '18px' }}>Work is connected. Views stay focused.</span>
            <h3 style={{ color: '#fff', fontSize: 'clamp(1.7rem, 3vw, 2.5rem)', marginBottom: '16px' }}>The same moment looks different to every role.</h3>
            <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.75, marginBottom: '22px' }}>
              An agent needs the next lead. A manager needs context. Operations needs attendance and compensation. Leadership needs the pattern. ODA7 connects those views without flattening them into one generic dashboard.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {['Clear ownership', 'Role-aware metrics', 'Shared workflow state'].map((item) => <span key={item} className="badge badge-subtle">{item}</span>)}
            </div>
          </div>
        </div>

        {/* 5-Role Tab Switcher */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '8px' }}>
          <div className="tab-group">
            {roles.map((role) => {
              const IconComp = role.icon;
              return (
                <button
                  key={role.id}
                  className={`tab-btn ${activeRole === role.id ? 'active' : ''}`}
                  onClick={() => setActiveRole(role.id)}
                >
                  <IconComp size={16} />
                  <span>{role.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Role Explanation Strip */}
        <div style={{ maxWidth: '1180px', margin: '0 auto 20px auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <span className={`badge badge-${currentRole.badgeColor}`} style={{ marginBottom: '6px' }}>
              {currentRole.badge}
            </span>
            <div style={{ color: '#fff', fontWeight: '700', fontSize: '1.1rem' }}>
              {currentRole.headline}
            </div>
            <div style={{ color: '#94a3b8', fontSize: '0.85rem', maxWidth: '850px', marginTop: '2px' }}>
              {currentRole.description}
            </div>
          </div>
        </div>

        {/* Dynamic Workspace Mockup Render */}
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          {activeRole === 'sales' && (
            <div className="animate-fadeIn">
              <SalesDashboardMockup interactive={true} />
            </div>
          )}

          {activeRole === 'marketing' && (
            <div className="animate-fadeIn">
              <MarketingDashboardMockup />
            </div>
          )}

          {activeRole === 'manager' && (
            <div className="animate-fadeIn">
              <ManagerDashboardMockup />
            </div>
          )}

          {(activeRole === 'people' || activeRole === 'operations') && (
            <div className="animate-fadeIn">
              {/* Agency Admin Mockup */}
              <div className="dashboard-mockup-frame">
                <div className="mockup-header-bar">
                  <div className="mockup-dots">
                    <div className="mockup-dot red" />
                    <div className="mockup-dot yellow" />
                    <div className="mockup-dot green" />
                  </div>
                  <div className="mockup-title-bar">
                    <Users size={13} color="#38bdf8" />
                    <span>oda7 // BIZZFLY Agency Operations — Payroll & Floor Engagement</span>
                  </div>
                  <span className="badge badge-emerald" style={{ fontSize: '0.6875rem' }}>
                    Monthly Payroll Ready
                  </span>
                </div>
                <div style={{ padding: '24px', background: '#070a12', fontSize: '0.8125rem' }}>
                  <div className="mockup-grid-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '20px' }}>
                    <div style={{ background: 'rgba(14, 19, 32, 0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '16px' }}>
                      <div style={{ color: '#94a3b8', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px' }}>Earned Commissions (This Month)</div>
                      <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#10b981' }}>$42,850.00</div>
                      <div style={{ color: '#34d399', fontSize: '0.75rem', marginTop: '2px' }}>100% verified across 412 closed deals</div>
                    </div>
                    <div style={{ background: 'rgba(14, 19, 32, 0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '16px' }}>
                      <div style={{ color: '#94a3b8', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px' }}>Active Floor Contests</div>
                      <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#38bdf8' }}>3 Live Battles</div>
                      <div style={{ color: '#cbd5e1', fontSize: '0.75rem', marginTop: '2px' }}>Weekend Sprint: $2,500 Prize Pool</div>
                    </div>
                    <div style={{ background: 'rgba(14, 19, 32, 0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '16px' }}>
                      <div style={{ color: '#94a3b8', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px' }}>Shift Attendance Rate</div>
                      <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#fbbf24' }}>98.4%</div>
                      <div style={{ color: '#34d399', fontSize: '0.75rem', marginTop: '2px' }}>24 Reps clocked in on time</div>
                    </div>
                  </div>
                  <div style={{ background: 'rgba(14, 19, 31, 0.6)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', padding: '16px' }}>
                    <div style={{ fontWeight: '700', color: '#fff', marginBottom: '10px' }}>Itemized Rep Payroll & Payslip Dispatch</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 120px', padding: '8px 12px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px', color: '#94a3b8', fontSize: '0.75rem', fontWeight: '600' }}>
                      <span>Rep Name</span>
                      <span>Base Salary</span>
                      <span>Commissions</span>
                      <span>Total Payout</span>
                      <span style={{ textAlign: 'right' }}>Payslip</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '6px' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 120px', padding: '8px 12px', borderRadius: '6px', background: 'rgba(255,255,255,0.01)', color: '#fff', alignItems: 'center' }}>
                        <span>Alex Rivera (Tier 1 SDR)</span>
                        <span>$4,000.00</span>
                        <span style={{ color: '#34d399', fontWeight: '700' }}>+$3,420.00</span>
                        <span style={{ fontWeight: '700' }}>$7,420.00</span>
                        <span style={{ textAlign: 'right', color: '#38bdf8', cursor: 'pointer' }}>Download PDF</span>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 120px', padding: '8px 12px', borderRadius: '6px', background: 'rgba(255,255,255,0.01)', color: '#fff', alignItems: 'center' }}>
                        <span>Marcus Chen (Enterprise AE)</span>
                        <span>$5,500.00</span>
                        <span style={{ color: '#34d399', fontWeight: '700' }}>+$4,800.00</span>
                        <span style={{ fontWeight: '700' }}>$10,300.00</span>
                        <span style={{ textAlign: 'right', color: '#38bdf8', cursor: 'pointer' }}>Download PDF</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeRole === 'executive' && (
            <div className="animate-fadeIn"><ManagerDashboardMockup /></div>
          )}

          {activeRole === 'super-admin' && (
            <div className="animate-fadeIn">
              <SuperAdminMockup />
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
