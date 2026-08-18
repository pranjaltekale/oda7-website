'use client';

import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { LightTabIndicator } from '../common/LightTabIndicator';
import { ProductStateTransition } from '../common/ProductStateTransition';
import { InteractiveTiltCard } from '../common/InteractiveTiltCard';
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
      heading: 'Move from the next lead to the next accountable action.',
      desc: 'Keep queues, conversations, scripts, follow-up and proposals inside one focused sales workspace.',
      subFeatures: ['Dashboard', 'Leads', 'Calls', 'Companies', 'Products', 'Scripts', 'Sequences', 'Quotes'],
      image: '/oda7-module-sales.jpg',
      badge: 'Connected sales flow',
      statLabel: 'Operating focus',
      statValue: 'Lead to follow-up',
    },
    {
      id: 'people',
      title: 'People Operations',
      icon: Users,
      color: '#10b981',
      heading: 'Make team structure and availability visible.',
      desc: 'Organize agents, managers, departments, attendance and leave around the same operating context.',
      subFeatures: ['Agents', 'Teams', 'Departments', 'Onboarding', 'Leave', 'Attendance Audit'],
      image: '/oda7-module-people.jpg',
      badge: 'Shared roster context',
      statLabel: 'Operating focus',
      statValue: 'People and availability',
    },
    {
      id: 'compensation',
      title: 'Compensation & Payroll',
      icon: DollarSign,
      color: '#3b82f6',
      heading: 'Connect compensation rules to verified activity.',
      desc: 'Carry approved deal outcomes into commission review, payroll preparation and itemized compensation records.',
      subFeatures: ['Base Salary', 'Commission Engine', 'Itemized Payslips', 'SPIFF Incentives', 'Tier Accelerators'],
      image: '/oda7-module-compensation.jpg',
      badge: 'Traceable compensation',
      statLabel: 'Operating focus',
      statValue: 'Rules to review',
    },
    {
      id: 'engagement',
      title: 'Floor Engagement',
      icon: Award,
      color: '#fbbf24',
      heading: 'Give team progress a visible rhythm.',
      desc: 'Coordinate leaderboards, milestones, contests and recognition without separating engagement from the work.',
      subFeatures: ['Live Leaderboards', 'Revenue Battles', 'Achievement Badges', 'Floor Announcements', 'Sprint Prize Pools'],
      image: '/oda7-module-engagement.jpg',
      badge: 'Visible team momentum',
      statLabel: 'Operating focus',
      statValue: 'Progress and recognition',
    },
    {
      id: 'insights',
      title: 'Revenue Insights',
      icon: BarChart3,
      color: '#a855f7',
      heading: 'Turn operating activity into decision context.',
      desc: 'Review calling patterns, workflow movement and team performance, then explore the underlying signals in one place.',
      subFeatures: ['Executive Analytics', 'Pickup Heatmaps', 'Carrier Route Health', 'Explain My Numbers AI', 'Cohort Conversion'],
      image: '/oda7-module-insights.jpg',
      badge: 'Decision-ready context',
      statLabel: 'Operating focus',
      statValue: 'Patterns and movement',
    },
    {
      id: 'admin',
      title: 'Platform Administration',
      icon: ShieldCheck,
      color: '#06b6d4',
      heading: 'Operate organizations from a dedicated platform layer.',
      desc: 'Manage organization workspaces, subscription tiers, scheduled reporting and platform-wide access controls from one administrative layer.',
      subFeatures: ['Multi-Tenant SaaS', 'Custom CNAMEs', 'Scheduled Reports', 'Global IP Defense', 'Security Audit Logs'],
      image: '/oda7-leadership-analytics.jpg',
      badge: 'Platform administration',
      statLabel: 'Operating focus',
      statValue: 'Organizations and controls',
    },
  ];

  const current = modules[activeModule];

  return (
    <section className="section-wrapper section-alt" id="product-modules">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="Product architecture"
          eyebrowIcon="Sparkles"
          title="Six operating areas."
          highlightText="One shared context."
          description="Explore how each ODA7 area stays focused while customer, team and performance context moves with the work."
        />

        {/* 6 Module Selector Tabs with Gliding Light Indicator */}
        <div className="tabs-scroll-wrapper">
          <LightTabIndicator
            tabs={modules.map((m, i) => ({ id: i, label: m.title, icon: m.icon }))}
            activeTab={activeModule}
            onChange={(idx) => setActiveModule(idx)}
            variant="pill"
            className="module-story-tabs"
          />
        </div>

        {/* Active Module Spatial Transition */}
        <ProductStateTransition activeKey={activeModule}>
          <div
            className="feature-showcase-panel"
            style={{
              maxWidth: '1240px',
              margin: '0 auto',
              borderRadius: '28px',
              padding: 'clamp(24px, 4.5vw, 48px)',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)',
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
                  <span className="badge badge-cyan">Connected workflow</span>
                </div>
              </div>

              {/* Right Side: Tilt Card with Micro-Parallax */}
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
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(7, 10, 18, 0.9) 100%)', pointerEvents: 'none' }} />
                  
                  {/* Floating Bottom Telemetry Badge inside Image */}
                  <div className="story-telemetry-badge-bottom">
                    <div>
                      <div style={{ color: '#fff', fontWeight: '750', fontSize: '0.85rem' }}>{current.title} Mesh</div>
                      <div style={{ color: '#38bdf8', fontSize: '0.75rem' }}>Connected directly to ODA7 Core</div>
                    </div>
                    <span className="badge badge-emerald" style={{ fontSize: '0.6875rem' }}>
                      {current.badge}
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
