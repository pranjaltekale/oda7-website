import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import {
  PhoneCall,
  Users,
  DollarSign,
  Award,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export const ProductModuleStorySection = () => {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      id: 'sales',
      title: 'Sales Execution',
      icon: PhoneCall,
      color: '#38bdf8',
      heading: 'From first cold dial to closed-won revenue.',
      desc: 'Give sales reps and SDRs a high-velocity workspace with 0.8s local presence dialing, ML prioritized queues, adaptive branching scripts, and 1-click CPQ proposals.',
      subFeatures: ['Dashboard', 'Leads', 'Calls', 'Companies', 'Products', 'Scripts', 'Sequences', 'Quotes'],
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
      badge: '+34% Pickup Lift',
      statLabel: 'Speed-to-Lead SLA',
      statValue: '<15 Seconds',
    },
    {
      id: 'people',
      title: 'People Operations',
      icon: Users,
      color: '#10b981',
      heading: 'Run the entire floor with live roster telemetry.',
      desc: 'Manage agent availability states in real time, record verified shift attendance with geolocation, organize tiered pods, and eliminate floor attendance lag.',
      subFeatures: ['Agents', 'Teams', 'Departments', 'Onboarding', 'Leave', 'Attendance Audit'],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
      badge: '98.4% Compliance',
      statLabel: 'Active Roster',
      statValue: '24 Synchronized',
    },
    {
      id: 'compensation',
      title: 'Compensation & Payroll',
      icon: DollarSign,
      color: '#3b82f6',
      heading: 'Automate commission calculations with zero disputes.',
      desc: 'When deals close in CRM, ODA7 instantly calculates commission tiers, credits digital wallets, and generates itemized PDF payslips ready for batch payout.',
      subFeatures: ['Base Salary', 'Commission Engine', 'Itemized Payslips', 'SPIFF Incentives', 'Tier Accelerators'],
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=80',
      badge: '$42,850 Verified',
      statLabel: 'Payroll Processing',
      statValue: '1-Click PDF Dispatch',
    },
    {
      id: 'engagement',
      title: 'Floor Engagement',
      icon: Award,
      color: '#fbbf24',
      heading: 'Ignite floor competition with live revenue battles.',
      desc: 'Gamify your sales floor with real-time TV leaderboard broadcasts, milestone achievement badges, weekend sprint bonuses, and automated team celebrations.',
      subFeatures: ['Live Leaderboards', 'Revenue Battles', 'Achievement Badges', 'Floor Announcements', 'Sprint Prize Pools'],
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80',
      badge: '3 Live Contests',
      statLabel: 'Discretionary Lift',
      statValue: '+25% Sales Effort',
    },
    {
      id: 'insights',
      title: 'Revenue Insights',
      icon: BarChart3,
      color: '#a855f7',
      heading: 'Turn operational activity into executive intelligence.',
      desc: 'Analyze hour-by-hour pickup ratio heatmaps, carrier route health, team conversion pacing, and query plain-English BI with "Explain My Numbers" AI.',
      subFeatures: ['Executive Analytics', 'Pickup Heatmaps', 'Carrier Route Health', 'Explain My Numbers AI', 'Cohort Conversion'],
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=80',
      badge: 'Real-Time Data Mesh',
      statLabel: 'Executive Pacing',
      statValue: '$184k Monthly MRR',
    },
    {
      id: 'admin',
      title: 'Platform Administration',
      icon: ShieldCheck,
      color: '#06b6d4',
      heading: 'Enterprise governance, multi-tenancy and threat defense.',
      desc: 'Manage isolated customer organizations under BIZZFLY, configure recurring subscription tiers, automate scheduled reports, and enforce global IP security.',
      subFeatures: ['Multi-Tenant SaaS', 'Custom CNAMEs', 'Scheduled Reports', 'Global IP Defense', 'Security Audit Logs'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
      badge: '100% Tenant Isolation',
      statLabel: 'Carrier SLA Uptime',
      statValue: '99.99% Enterprise',
    },
  ];

  const current = modules[activeModule];

  return (
    <section className="section-wrapper section-alt" id="product-modules">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="Integrated Product Architecture"
          eyebrowIcon="Sparkles"
          title="Six core modules."
          highlightText="One synchronous engine."
          description="Explore how ODA7 replaces 10+ disjointed SaaS subscriptions with one unified data mesh where sales, people, operations, and intelligence operate in harmony."
        />

        {/* 6 Module Selector Tabs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '10px', marginBottom: '36px', maxWidth: '1240px', marginInline: 'auto' }}>
          {modules.map((m, idx) => {
            const IconComp = m.icon;
            const isActive = activeModule === idx;

            return (
              <button
                key={m.id}
                onClick={() => setActiveModule(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 16px',
                  borderRadius: '14px',
                  background: isActive ? 'var(--oda-primary)' : 'var(--oda-surface)',
                  border: isActive ? `2px solid var(--oda-primary-light)` : '1px solid var(--oda-border)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                  boxShadow: isActive ? '0 0 16px rgba(37, 99, 235, 0.35)' : 'none',
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: isActive ? 'rgba(0,0,0,0.2)' : 'var(--oda-primary-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isActive ? '#ffffff' : 'var(--oda-accent)',
                  flexShrink: 0,
                }}>
                  <IconComp size={16} />
                </div>
                <span style={{ fontSize: '0.8125rem', fontWeight: isActive ? '750' : '600', color: isActive ? '#ffffff' : 'var(--oda-text-secondary)', textAlign: 'left' }}>
                  {m.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Module Storytelling Card */}
        <div
          className="feature-showcase-panel animate-fadeIn"
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            borderRadius: '28px',
            padding: 'clamp(28px, 4.5vw, 48px)',
          }}
          key={activeModule}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(320px, 1.25fr) minmax(320px, 1fr)',
              gap: 'clamp(32px, 5vw, 56px)',
              alignItems: 'center',
            }}
            className="mockup-grid-2col"
          >
            {/* Left Side: Module Narrative, Headline, Sub-Features & Stats */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="badge badge-primary">
                  {current.title}
                </span>
                <span className="badge badge-emerald">
                  {current.badge}
                </span>
              </div>

              <h3 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: '850', color: 'var(--oda-text-primary)', lineHeight: '1.18', marginBottom: '14px' }}>
                {current.heading}
              </h3>

              <p style={{ color: 'var(--oda-text-secondary)', fontSize: '0.975rem', lineHeight: '1.65', marginBottom: '24px' }}>
                {current.desc}
              </p>

              {/* Sub-Feature Tags Grid */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--oda-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                  Included Module Capabilities:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {current.subFeatures.map((feat, i) => (
                    <span
                      key={i}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '8px',
                        background: 'var(--oda-surface)',
                        border: '1px solid var(--oda-border)',
                        color: 'var(--oda-text-secondary)',
                        fontSize: '0.785rem',
                        fontWeight: '600',
                      }}
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stat Highlight Card */}
              <div style={{ background: 'var(--oda-surface)', border: '1px solid var(--oda-border)', borderRadius: '12px', padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.75rem' }}>{current.statLabel}</div>
                  <div style={{ color: 'var(--oda-text-primary)', fontSize: '1.25rem', fontWeight: '850', marginTop: '2px' }}>{current.statValue}</div>
                </div>
                <span className="badge badge-cyan">Zero Tool Lag</span>
              </div>
            </div>

            {/* Right Side: Large Real-World Photography with Visible Face & ODA7 Telemetry Badge */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '460px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)',
                }}
              >
                <img
                  src={current.image}
                  alt={current.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    display: 'block',
                    filter: 'contrast(1.05) brightness(0.96)',
                  }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(7, 10, 18, 0.9) 100%)' }} />
                
                {/* Floating Bottom Telemetry Badge inside Image */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    right: '20px',
                    background: 'rgba(11, 15, 23, 0.94)',
                    backdropFilter: 'blur(14px)',
                    padding: '12px 18px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <div style={{ color: '#fff', fontWeight: '750', fontSize: '0.85rem' }}>{current.title} Mesh</div>
                    <div style={{ color: '#38bdf8', fontSize: '0.75rem' }}>Connected directly to ODA7 Core</div>
                  </div>
                  <span className="badge badge-emerald" style={{ fontSize: '0.6875rem' }}>
                    {current.badge}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
