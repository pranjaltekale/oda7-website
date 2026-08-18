'use client';

import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import {
  PhoneCall,
  LayoutDashboard,
  Users,
  TrendingUp,
  Share2,
  Building2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Quote,
} from 'lucide-react';

import { LightTabIndicator } from '../common/LightTabIndicator';
import { ProductStateTransition } from '../common/ProductStateTransition';
import { InteractiveTiltCard } from '../common/InteractiveTiltCard';

export const RealWorldRoleStorySection = () => {
  const [activeRole, setActiveRole] = useState(0);

  const roles = [
    {
      id: 'sales-teams',
      label: 'Sales Teams',
      icon: PhoneCall,
      heading: 'Give every salesperson a clearer path to the next deal.',
      desc: 'Sales reps eliminate tab toggling and manual logging with algorithmic queue prioritization, 0.8s local presence dialing, dynamic branching scripts, and real-time speech AI battlecards.',
      image: '/oda7-module-sales.jpg',
      persona: 'Illustrative SDR team lead',
      badge: 'Sales Workspace',
      metrics: '+34% Pickup Lift',
      features: [
        'Lead Management & ML Queue prioritization',
        '0.8s Local presence WebRTC softphone',
        'Automated multi-channel WhatsApp sequences',
        'Dynamic objection battlecards & scripts',
        '1-Click mobile quotes & proposals',
        'Real-time pipeline & commission wallet',
      ],
      quote: 'Our follow-up process is now fully automated—sales floor productivity is up by 35% and rep cherry-picking is gone.',
      quoteAuthor: 'Marcus Vance',
      quoteRole: 'VP Inside Sales, Nexoma Solutions',
    },
    {
      id: 'managers',
      label: 'Managers',
      icon: LayoutDashboard,
      heading: 'See your entire sales floor at a single glance.',
      desc: 'Floor supervisors get real-time telemetry across concurrent call queues, rep availability states, and pickup ratio benchmarks with 1-click silent listening and headset whisper coaching.',
      image: '/oda7-scenario-callcenter.jpg',
      persona: 'Samantha Hayes • Floor Operations Director',
      badge: 'Floor Command',
      metrics: '24ms Whisper Stream',
      features: [
        'Live floor activity & agent status grid',
        'Sub-second queue volume monitoring',
        '1-Click silent listen & headset whisper',
        'Hour-by-hour pickup ratio heatmaps',
        'Real-time speech sentiment QA grading',
        'Instant team performance announcements',
      ],
      quote: 'Headset whisper coaching lets my supervisors rescue high-stakes enterprise negotiations live without the prospect hearing.',
      quoteAuthor: 'Elena Rostova',
      quoteRole: 'Director of Call Operations, OmniCloud',
    },
    {
      id: 'people-ops',
      label: 'People Operations',
      icon: Users,
      heading: 'Connect attendance, leave, payroll and incentives.',
      desc: 'HR and agency leaders eliminate spreadsheet disputes by automating commission payouts on Closed-Won deals, verifying shift attendance with geolocation, and running gamified contests.',
      image: '/oda7-module-people.jpg',
      persona: 'Priya Sharma • Agency Operations & HR Head',
      badge: 'People Ops',
      metrics: 'Zero Payroll Disputes',
      features: [
        'Automated commission tier accelerators',
        'Geolocation shift attendance verification',
        'Live floor revenue battles & sprints',
        'Itemized payslip PDF generation & dispatch',
        'Team quota history & compliance logs',
        'Integrated leave & holiday calendar',
      ],
      quote: 'Commission calculations used to take 3 days every month. With ODA7, itemized payslips are generated with 1 click.',
      quoteAuthor: 'Priya Sharma',
      quoteRole: 'Head of Operations, ScaleEngine',
    },
    {
      id: 'business-leaders',
      label: 'Business Leaders',
      icon: TrendingUp,
      heading: 'Turn operational activity into revenue decisions.',
      desc: 'Executives eliminate reporting lag with consolidated ARR telemetry, carrier route diagnostics, team conversion pacing, and natural-language queries with "Explain My Numbers" AI.',
      image: '/oda7-module-insights.jpg',
      persona: 'David Sterling • Platform Managing Director',
      badge: 'Executive BI',
      metrics: '114% to Target',
      features: [
        'Executive revenue pacing & ARR telemetry',
        'Global carrier route diagnostic telemetry',
        'Automated Rep ROI & CAC payback graphs',
        'Real-time floor revenue ticker alerts',
        '"Explain My Numbers" natural language BI',
        'Board-ready PDF executive summaries',
      ],
      quote: 'Being able to ask plain-English questions about yesterday’s revenue drop and get an instant root-cause analysis is game-changing.',
      quoteAuthor: 'David Sterling',
      quoteRole: 'Chief Executive Officer, Vantage Global',
    },
    {
      id: 'agencies',
      label: 'Agencies & BPO',
      icon: Building2,
      heading: 'Scale client accounts under multi-tenant governance.',
      desc: 'Agencies manage multiple client accounts with segregated sub-tenant databases, custom DID routing, minute usage billing, and white-labeled client performance portals.',
      image: '/oda7-scenario-agency.jpg',
      persona: 'Marcus Vance • Managing Partner, Apex BPO',
      badge: 'BPO & Agencies',
      metrics: '48hr Pod Onboarding',
      features: [
        'Multi-tenant client pod segregation',
        'Custom DID phone number pools per brand',
        'Cross-account supervisor floor switcher',
        'Itemized client billing & minute usage',
        'Agency reseller commission engine',
        '1-Click client portal provisioning',
      ],
      quote: 'We onboarded 4 new enterprise client pods in 48 hours without needing separate servers or telephony accounts.',
      quoteAuthor: 'Marcus Vance',
      quoteRole: 'Managing Partner, Apex BPO',
    },
    {
      id: 'enterprise-platforms',
      label: 'Enterprise Platforms',
      icon: Share2,
      heading: 'Deploy a multi-tenant business operating system.',
      desc: 'Platform operators can configure organization workspaces, custom domains, subscription tiers, integration webhooks and administrative audit context.',
      image: '/oda7-scenario-saasplatform.jpg',
      persona: 'Elena Rostova • Enterprise Platform Architect',
      badge: 'Platform SaaS',
      metrics: '99.99% Enterprise SLA',
      features: [
        'Multi-tenant SaaS organization manager',
        'Automated subscription billing tiers',
        'Custom domain CNAME mapping & SSL',
        'Tamper-proof compliance audit logs',
        'Global IP blocker & brute force defense',
        'Event-driven bi-directional REST webhooks',
      ],
      quote: 'Organization, access and platform controls stay visible in a separate administrative layer.',
      quoteAuthor: 'Elena Rostova',
      quoteRole: 'Security Lead, Global Retail Pod',
    },
  ];

  const current = roles[activeRole];

  return (
    <section id="role-story-section" className="section-wrapper">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="One Workspace, Every Role"
          eyebrowIcon="Users"
          title="Built around the way"
          highlightText="your teams work."
          description="How ODA7 adapts to every role in the revenue organization—from front-line sales reps and floor supervisors to operations leaders and platform executives."
        />

        {/* 6 Role Tab Switcher with LightTabIndicator */}
        <div className="tabs-scroll-wrapper">
          <LightTabIndicator
            tabs={roles.map((r, idx) => ({ id: idx, label: r.label, icon: r.icon }))}
            activeTab={activeRole}
            onChange={(idx) => setActiveRole(idx)}
            variant="pill"
            className="role-story-tabs"
          />
        </div>

        {/* Active Role Storytelling Box with ProductStateTransition */}
        <ProductStateTransition activeKey={activeRole}>
          <div
            className="feature-showcase-panel"
            style={{
              maxWidth: '1240px',
              margin: '0 auto',
              borderRadius: '28px',
              padding: 'clamp(24px, 4.5vw, 52px)',
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
              {/* Left Side: Role Headline, Description, Features & Quote */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <span className="badge badge-primary">
                    {current.badge}
                  </span>
                  <span className="badge badge-emerald">
                    {current.metrics}
                  </span>
                </div>

                <h3 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: '850', color: 'var(--oda-text-primary)', lineHeight: '1.18', marginBottom: '14px' }}>
                  {current.heading}
                </h3>

                <p style={{ color: 'var(--oda-text-secondary)', fontSize: '0.975rem', lineHeight: '1.65', marginBottom: '24px' }}>
                  {current.desc}
                </p>

                {/* 6 Feature Bullets Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px', marginBottom: '28px' }}>
                  {current.features.map((feat, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--oda-text-secondary)', fontSize: '0.825rem' }}>
                      <CheckCircle2 size={15} color="var(--oda-success)" style={{ flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Quote Card */}
                <div
                  style={{
                    background: 'var(--oda-surface)',
                    border: '1px solid var(--oda-border)',
                    borderRadius: '16px',
                    padding: '16px 20px',
                    position: 'relative',
                  }}
                >
                  <p style={{ fontSize: '0.875rem', color: 'var(--oda-text-primary)', fontStyle: 'italic', lineHeight: '1.55', margin: '0 0 10px 0' }}>
                    "{current.quote}"
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--oda-success)' }} />
                    <span style={{ fontSize: '0.785rem', fontWeight: '700', color: 'var(--oda-text-primary)' }}>{current.quoteAuthor}</span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--oda-text-muted)' }}>• {current.quoteRole}</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Large Persona Image in InteractiveTiltCard */}
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

                  {/* Floating Top Left Persona Tag */}
                  <div className="story-top-badge">
                    {current.persona}
                  </div>

                  {/* Floating Bottom Telemetry Badge */}
                  <div className="story-telemetry-badge-bottom">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }} />
                      <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: '600' }}>Active Pod Environment</span>
                    </div>
                    <span style={{ color: '#38bdf8', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>{current.metrics}</span>
                  </div>
                </InteractiveTiltCard>
              </div>
            </div>
            </div>
          </div>
        </ProductStateTransition>

      </div>
    </section>
  );
};
