'use client';

import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { LightTabIndicator } from '../common/LightTabIndicator';
import { ProductStateTransition } from '../common/ProductStateTransition';
import { InteractiveTiltCard } from '../common/InteractiveTiltCard';
import {
  PhoneCall,
  Building2,
  Headphones,
  Zap,
  TrendingUp,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Activity,
  ShieldCheck,
} from 'lucide-react';

export const IndustryScenariosSection = () => {
  const [activeScenario, setActiveScenario] = useState(0);

  const scenarios = [
    {
      id: 'high-velocity-sdr',
      label: 'Inside-sales Pod',
      role: 'Sales SDR & Account Executives',
      icon: PhoneCall,
      title: 'Keep high-velocity reps locked on the next priority action.',
      badge: 'Inside Sales',
      desc: 'Give reps an unified queue, instant customer context, live objection guidance, and automated follow-up scheduling in one view.',
      image: '/oda7-scenario-insidesales.jpg',
      statNumber: '3.4x',
      statLabel: 'More conversations per day',
      formulas: [
        { trigger: 'New website inquiry', flow: 'Intake & enrichment', result: 'Assigned to live queue with context' },
        { trigger: 'Active phone call', flow: 'In-call guidance', result: 'Objection answered & logged to timeline' },
        { trigger: 'Deal closed-won', flow: 'Automated event', result: 'Credited directly to rep commission wallet' },
      ],
    },
    {
      id: 'call-center',
      label: 'Managed Sales Floor',
      role: 'Floor Supervisors & Team Leads',
      icon: Headphones,
      title: 'Help supervisors monitor live queues and coach the exact moment.',
      badge: 'Call Center & BPO',
      desc: 'Bring live calling heatmaps, rep availability status, whisper coaching, and shift attendance into one synchronized supervisor dashboard.',
      image: '/oda7-scenario-callcenter.jpg',
      statNumber: '100%',
      statLabel: 'Floor visibility in real-time',
      formulas: [
        { trigger: 'High queue hold time', flow: 'Live floor alert', result: 'Available reps routed instantly' },
        { trigger: 'Challenging conversation', flow: 'Manager whisper mode', result: 'Supervisor provides silent coaching' },
        { trigger: 'Shift completion audit', flow: 'Geolocation verify', result: 'Attendance reconciled automatically' },
      ],
    },
    {
      id: 'revenue-agency',
      label: 'Revenue Agency',
      role: 'Agency Partners & Client Leads',
      icon: Building2,
      title: 'Isolate multiple client accounts without losing platform oversight.',
      badge: 'Revenue Agency',
      desc: 'Organize isolated client sub-workspaces, custom calling scripts, and separate billings while retaining master administrative governance.',
      image: '/oda7-scenario-agency.jpg',
      statNumber: '0%',
      statLabel: 'Cross-client data leakage',
      formulas: [
        { trigger: 'New client onboarding', flow: 'Workspace provisioning', result: 'Isolated environment in seconds' },
        { trigger: 'Multi-client staffing', flow: 'Role assignment', result: 'Reps access only assigned accounts' },
        { trigger: 'Monthly reporting', flow: 'Automated digest', result: 'White-label PDF sent to client' },
      ],
    },
    {
      id: 'saas-reseller',
      label: 'Platform Operator',
      role: 'SaaS Platform Operators & Resellers',
      icon: Zap,
      title: 'Operate multi-tenant organizations with custom CNAME domains.',
      badge: 'Platform SaaS',
      desc: 'Deploy private-label instances, configure custom subscription tiers, manage global IP defense firewalls, and govern global audit logs.',
      image: '/oda7-scenario-saasplatform.jpg',
      statNumber: 'Unlimited',
      statLabel: 'Multi-tenant workspaces',
      formulas: [
        { trigger: 'Domain mapping', flow: 'Automated SSL & CNAME', result: 'Branded operating portal ready' },
        { trigger: 'Plan upgrade', flow: 'Tier subscription rule', result: 'Seat limits & features unlocked' },
        { trigger: 'Security event audit', flow: 'Immutable logging', result: 'Full compliance report exportable' },
      ],
    },
  ];

  const current = scenarios[activeScenario];

  return (
    <section className="section-wrapper section-alt" id="scenarios">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="Operating Scenarios"
          eyebrowIcon="Building2"
          title="Different operating models."
          highlightText="A connected foundation."
          description="See how ODA7 adapts to specific operational models while keeping customer context, team telemetry, and administrative governance connected."
        />

        {/* Tab Strip with LightTabIndicator */}
        <div className="tabs-scroll-wrapper">
          <LightTabIndicator
            tabs={scenarios.map((s, idx) => ({ id: idx, label: s.label, icon: s.icon }))}
            activeTab={activeScenario}
            onChange={(idx) => setActiveScenario(idx)}
            variant="pill"
            className="scenario-selector-tabs"
          />
        </div>

        {/* Active Scenario Visual Box with ProductStateTransition */}
        <ProductStateTransition activeKey={activeScenario}>
          <div
            className="feature-showcase-panel"
            style={{
              maxWidth: '1240px',
              margin: '0 auto',
              borderRadius: '28px',
              padding: 'clamp(24px, 4vw, 44px)',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 1fr)',
                gap: 'clamp(28px, 4.5vw, 48px)',
                alignItems: 'center',
              }}
              className="mockup-grid-2col"
            >
              {/* Left Column: Role Details + Operational Workflow Stages */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
                  <span className="badge badge-primary">
                    {current.badge}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--oda-text-muted)', fontFamily: 'var(--font-mono)' }}>
                    Role: {current.role}
                  </span>
                </div>

                <h3 style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.25rem)', fontWeight: '850', color: 'var(--oda-text-primary)', lineHeight: '1.18', marginBottom: '14px', letterSpacing: '-0.025em' }}>
                  {current.title}
                </h3>

                <p style={{ color: 'var(--oda-text-secondary)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '22px' }}>
                  {current.desc}
                </p>

                {/* 3 Situational Formula Cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                  {current.formulas.map((f, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr auto 1.25fr',
                        alignItems: 'center',
                        gap: '10px',
                        background: 'var(--oda-surface)',
                        border: '1px solid var(--oda-border)',
                        borderRadius: '10px',
                        padding: '10px 14px',
                        fontSize: '0.8125rem',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '0.6875rem', color: 'var(--oda-text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>Trigger</div>
                        <div style={{ color: 'var(--oda-text-primary)', fontWeight: '600' }}>{f.trigger}</div>
                      </div>

                      <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--oda-primary-soft)', color: 'var(--oda-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: '850' }}>
                        →
                      </div>

                      <div>
                        <div style={{ fontSize: '0.6875rem', color: 'var(--oda-accent)', textTransform: 'uppercase', fontWeight: '700' }}>{f.flow}</div>
                        <div style={{ color: 'var(--oda-success)', fontWeight: '700' }}>{f.result}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                  <Button to="/contact" variant="primary" size="md" iconRight="ArrowRight">
                    Explore this operating setup
                  </Button>
                  <Button demo variant="secondary" size="md" iconLeft="PlayCircle">
                    Interactive preview
                  </Button>
                </div>
              </div>

              {/* Right Column: Scenario Photography with Stat Overlay */}
              <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                <InteractiveTiltCard
                  maxTilt={3}
                  scale={1.015}
                  className="story-image-card-responsive"
                >
                  <img
                    className="tilt-parallax-img"
                    src={current.image}
                    alt={current.label}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 15%',
                      display: 'block',
                      filter: 'contrast(1.05) brightness(0.96)',
                    }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(7, 10, 18, 0.92) 100%)', pointerEvents: 'none' }} />
                  
                  {/* Floating Top Metric Pill */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      background: 'rgba(7, 10, 18, 0.82)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      borderRadius: '10px',
                      padding: '8px 14px',
                      textAlign: 'right',
                      zIndex: 3,
                    }}
                  >
                    <div style={{ color: '#38bdf8', fontSize: '1.25rem', fontWeight: '850', lineHeight: '1' }}>{current.statNumber}</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.6875rem', marginTop: '2px' }}>{current.statLabel}</div>
                  </div>

                  <div className="story-telemetry-badge-bottom">
                    <div>
                      <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: '750' }}>{current.label}</div>
                      <div style={{ color: '#38bdf8', fontSize: '0.72rem' }}>Illustrative ODA7 Deployment</div>
                    </div>
                    <span className="badge badge-emerald" style={{ fontSize: '0.6875rem' }}>
                      Scenario ready
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

