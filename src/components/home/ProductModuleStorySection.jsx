'use client';

import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ProductStateTransition } from '../common/ProductStateTransition';
import { InteractiveTiltCard } from '../common/InteractiveTiltCard';
import { Button } from '../common/Button';
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
  Layers,
  Activity,
  Workflow,
  Zap,
} from 'lucide-react';

export const ProductModuleStorySection = () => {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      id: 'sales',
      title: 'Sales Execution',
      icon: PhoneCall,
      color: '#38bdf8',
      role: 'Inside Sales & SDRs',
      heading: 'Move from the next lead to the next accountable action.',
      desc: 'Keep priority queues, in-workflow dialing, conversation talk tracks, and follow-up proposals inside one focused sales workspace.',
      subFeatures: ['Priority Queues', 'In-Browser Dialer', 'Contextual Scripts', 'Multi-Channel Inbox', 'Proposal CPQ', 'Sequence Automation'],
      image: '/oda7-module-sales.jpg',
      badge: 'Connected sales flow',
      statLabel: 'Operating focus',
      statValue: 'Lead to follow-up',
      feedsInto: ['Compensation', 'Floor Engagement', 'Revenue Insights'],
      slug: 'sales',
    },
    {
      id: 'people',
      title: 'People Operations',
      icon: Users,
      color: '#10b981',
      role: 'Operations & HR Leads',
      heading: 'Make team structure, availability, and staffing visible.',
      desc: 'Organize agents, floor supervisors, departments, geofenced shift attendance, and leave balance around the same operating context.',
      subFeatures: ['Agent Rosters', 'Supervisor Queues', 'Shift Attendance Audit', 'Leave Approvals', 'Department Hierarchy', 'Onboarding Tracks'],
      image: '/oda7-module-people.jpg',
      badge: 'Shared roster context',
      statLabel: 'Operating focus',
      statValue: 'People & availability',
      feedsInto: ['Compensation', 'Sales Execution', 'Platform Admin'],
      slug: 'operations',
    },
    {
      id: 'compensation',
      title: 'Compensation & Payroll',
      icon: DollarSign,
      color: '#3b82f6',
      role: 'Finance & Floor Leadership',
      heading: 'Connect compensation rules to verified deal activity.',
      desc: 'Carry approved deal outcomes directly into tier accelerator review, monthly payroll preparation, and itemized PDF payslip dispatch.',
      subFeatures: ['Tier Accelerators', 'Commission Wallet', 'Itemized Payslips', 'SPIFF Contests', 'Audit Trail', 'Payroll Batch Export'],
      image: '/oda7-module-compensation.jpg',
      badge: 'Traceable compensation',
      statLabel: 'Operating focus',
      statValue: 'Rules to review',
      feedsInto: ['Floor Engagement', 'People Operations', 'Revenue Insights'],
      slug: 'operations',
    },
    {
      id: 'engagement',
      title: 'Floor Engagement',
      icon: Award,
      color: '#fbbf24',
      role: 'Team Leads & Agents',
      heading: 'Give team momentum a visible, gamified rhythm.',
      desc: 'Coordinate live floor revenue battles, milestone leaderboards, achievement badges, and sprint prize pools without separating recognition from the work.',
      subFeatures: ['Live Revenue Battles', 'Milestone Badges', 'Sprint Prize Pools', 'Floor Audio Announcements', 'Agent Recognition'],
      image: '/oda7-module-engagement.jpg',
      badge: 'Visible team momentum',
      statLabel: 'Operating focus',
      statValue: 'Progress & recognition',
      feedsInto: ['Sales Execution', 'Compensation', 'Revenue Insights'],
      slug: 'manager',
    },
    {
      id: 'insights',
      title: 'Revenue Insights',
      icon: BarChart3,
      color: '#a855f7',
      role: 'Executive BI & Management',
      heading: 'Turn operating activity into decision-ready context.',
      desc: 'Review floor calling heatmaps, conversion velocities, rep talk-time ratios, and explain-my-numbers AI summaries in one shared operating picture.',
      subFeatures: ['Executive BI Dashboard', 'Pickup Heatmaps', 'Talk-Time Analytics', 'Explain My Numbers AI', 'Cohort Conversion'],
      image: '/oda7-module-insights.jpg',
      badge: 'Decision-ready context',
      statLabel: 'Operating focus',
      statValue: 'Patterns & movement',
      feedsInto: ['Sales Execution', 'People Operations', 'Platform Admin'],
      slug: 'leadership',
    },
    {
      id: 'admin',
      title: 'Platform Administration',
      icon: ShieldCheck,
      color: '#06b6d4',
      role: 'Super Admins & IT',
      heading: 'Operate multi-tenant workspaces from a dedicated platform layer.',
      desc: 'Manage multiple organization workspaces, custom CNAME domains, subscription billing tiers, global IP firewalls, and audit logs with zero spreadsheet lag.',
      subFeatures: ['Multi-Tenant SaaS', 'Custom CNAMEs', 'Subscription Controls', 'Global IP Defense', 'Security Audit Logs', 'Role Governance'],
      image: '/oda7-module-admin.jpg',
      badge: 'Platform governance',
      statLabel: 'Operating focus',
      statValue: 'Organizations & controls',
      feedsInto: ['Sales Execution', 'People Operations', 'Revenue Insights'],
      slug: 'leadership',
    },
  ];

  const current = modules[activeModule];

  return (
    <section className="section-wrapper section-alt" id="product-modules">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="Connected Product Architecture"
          eyebrowIcon="Sparkles"
          title="Six operating areas."
          highlightText="One shared context."
          description="Explore how each ODA7 capability area stays focused while customer, team and performance context moves seamlessly with the work."
        />

        {/* 6-Module Interactive Ecosystem Selector Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '12px',
            marginBottom: '28px',
            maxWidth: '1240px',
            marginInline: 'auto',
          }}
          className="module-ecosystem-grid"
        >
          {modules.map((m, idx) => {
            const IconComp = m.icon;
            const isSelected = activeModule === idx;

            return (
              <button
                key={m.id}
                onClick={() => setActiveModule(idx)}
                className={`tab-pill-interactive card-interactive-lift ${isSelected ? 'is-active' : ''}`}
                style={{
                  padding: '16px 14px',
                  borderRadius: '14px',
                  background: isSelected ? 'var(--oda-surface-hover)' : 'var(--oda-surface)',
                  border: isSelected ? `1px solid ${m.color}` : '1px solid var(--oda-border)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: isSelected ? `0 8px 24px rgba(0, 0, 0, 0.2), 0 0 16px ${m.color}33` : 'none',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: isSelected ? m.color : 'var(--oda-surface-soft)',
                      color: isSelected ? '#ffffff' : 'var(--oda-text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <IconComp size={16} />
                  </div>
                  <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: isSelected ? m.color : 'var(--oda-text-muted)', fontWeight: '750' }}>
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <div style={{ fontWeight: '750', fontSize: '0.88rem', color: isSelected ? 'var(--oda-text-primary)' : 'var(--oda-text-secondary)', lineHeight: '1.25' }}>
                    {m.title}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--oda-text-muted)', marginTop: '2px' }}>
                    {m.role}
                  </div>
                </div>

                {isSelected && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: m.color,
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Module Full-Width Architectural Showcase */}
        <ProductStateTransition activeKey={activeModule}>
          <div
            className="feature-showcase-panel"
            style={{
              maxWidth: '1240px',
              margin: '0 auto',
              borderRadius: '28px',
              padding: 'clamp(24px, 4vw, 44px)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.18fr) minmax(0, 1fr)',
                gap: 'clamp(28px, 4.5vw, 52px)',
                alignItems: 'center',
              }}
              className="mockup-grid-2col"
            >
              {/* Left Column: Contextual Breakdown & Capabilities */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
                  <span className="badge badge-primary" style={{ borderColor: current.color }}>
                    {current.title}
                  </span>
                  <span className="badge badge-emerald">
                    {current.badge}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--oda-text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {current.role}
                  </span>
                </div>

                <h3 style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.25rem)', fontWeight: '850', color: 'var(--oda-text-primary)', lineHeight: '1.18', marginBottom: '14px', letterSpacing: '-0.025em' }}>
                  {current.heading}
                </h3>

                <p style={{ color: 'var(--oda-text-secondary)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '22px' }}>
                  {current.desc}
                </p>

                {/* Sub-Feature Capabilities Grid */}
                <div style={{ marginBottom: '22px' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: '750', color: 'var(--oda-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                    Standardized Module Capabilities:
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '8px' }}>
                    {current.subFeatures.map((feat, i) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '8px 12px',
                          borderRadius: '8px',
                          background: 'var(--oda-surface)',
                          border: '1px solid var(--oda-border)',
                          color: 'var(--oda-text-primary)',
                          fontSize: '0.8rem',
                          fontWeight: '600',
                        }}
                      >
                        <CheckCircle2 size={14} color="var(--oda-success)" style={{ flexShrink: 0 }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interconnection Mesh Bar */}
                <div
                  style={{
                    background: 'var(--oda-surface)',
                    border: '1px solid var(--oda-border-blue)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '10px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Workflow size={16} color="var(--oda-primary)" />
                    <span style={{ fontSize: '0.785rem', color: 'var(--oda-text-secondary)' }}>
                      Synchronized context streams directly to:
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {current.feedsInto.map((target, tIdx) => (
                      <span key={tIdx} className="badge badge-subtle" style={{ fontSize: '0.6875rem' }}>
                        {target}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Tilt Photography Frame with Live Operational Telemetry */}
              <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                <InteractiveTiltCard
                  maxTilt={3}
                  scale={1.015}
                  className="story-image-card-responsive"
                >
                  <img
                    className="tilt-parallax-img"
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
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 35%, rgba(7, 10, 18, 0.92) 100%)', pointerEvents: 'none' }} />
                  
                  {/* Floating Telemetry Badge Bottom */}
                  <div className="story-telemetry-badge-bottom">
                    <div>
                      <div style={{ color: '#fff', fontWeight: '750', fontSize: '0.85rem' }}>{current.title} Hub</div>
                      <div style={{ color: '#38bdf8', fontSize: '0.75rem' }}>Operating Focus: {current.statValue}</div>
                    </div>
                    <span className="badge badge-emerald" style={{ fontSize: '0.6875rem' }}>
                      Active in mesh
                    </span>
                  </div>
                </InteractiveTiltCard>
              </div>
            </div>
          </div>
        </ProductStateTransition>

      </div>
    </section>
  );
};

