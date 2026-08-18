'use client';

import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { LightTabIndicator } from '../common/LightTabIndicator';
import { ProductStateTransition } from '../common/ProductStateTransition';
import { InteractiveTiltCard } from '../common/InteractiveTiltCard';
import {
  Users,
  TrendingUp,
  Headphones,
  DollarSign,
  ShieldCheck,
  Zap,
  PhoneCall,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Quote,
} from 'lucide-react';

export const FiveRoleShowcase = () => {
  const [activeRole, setActiveRole] = useState('sales-rep');

  const roles = [
    {
      id: 'sales-rep',
      label: 'Sales SDR',
      roleTitle: 'Inside Sales Representative',
      rolePersona: 'Alex Rivera, Senior Inside SDR',
      tagline: 'High-Volume Velocity & Zero Rep Idle Time',
      badge: 'Zero Context Switching',
      image: '/oda7-module-sales.jpg',
      heading: 'Speed up outbound prospecting with zero friction.',
      subheading: 'Stop toggling between 5 tabs. Dial, take notes, handle objections, and send WhatsApp follow-ups in one view.',
      ctaText: 'Explore Sales SDR Experience',
      formulas: [
        { left: 'Inbound Webhook Lead', right: '<15s Speed-to-Lead SLA' },
        { left: '0.8s Local Presence Dialing', right: '+34.8% Pickup Ratio' },
        { left: 'Closed-Won Opportunity', right: 'Instant Commission Wallet Credit' },
      ],
      quote: 'I used to waste 2 hours a day logging dispositions and copy-pasting numbers. With ODA7, I make 140+ calls and close deals without leaving my screen.',
      quoteAuthor: 'Alex Rivera',
      quoteRole: 'Senior SDR, Apex Cloud',
      floatingBadge: '140+ Dials Daily • Sub-Second Latency',
      badgeColor: 'emerald',
    },
    {
      id: 'manager',
      label: 'Sales Manager',
      roleTitle: 'Floor Operations & Team Lead',
      rolePersona: 'Marcus Vance, VP Inside Sales',
      tagline: 'Real-Time Floor Command & Live Whisper',
      badge: 'Floor Visibility',
      image: '/oda7-scenario-callcenter.jpg',
      heading: 'Coach your reps live and protect enterprise revenue.',
      subheading: 'Monitor concurrent queues in real-time, inspect rep availability states, and whisper talk tracks into headsets during calls.',
      ctaText: 'Explore Manager Floor Console',
      formulas: [
        { left: 'Sub-Second Queue Telemetry', right: 'Zero Abandoned Calls' },
        { left: '1-Click Silent Listening', right: 'Rescue Enterprise Deals Live' },
        { left: 'Hourly Pickup Heatmaps', right: 'Optimized Shift Staffing' },
      ],
      quote: 'Being able to whisper the right counter-objection into a junior rep’s ear during a high-stakes demo has single-handedly saved hundreds of thousands in pipeline.',
      quoteAuthor: 'Marcus Vance',
      quoteRole: 'VP Sales, TelcoDirect',
      floatingBadge: '24ms Headset Whisper Stream Active',
      badgeColor: 'cyan',
    },
    {
      id: 'marketer',
      label: 'Growth Lead',
      roleTitle: 'Demand Gen & Campaigns Director',
      rolePersona: 'Elena Rostova, Growth Director',
      tagline: 'Precision Webhook Lead Routing & Meta Sync',
      badge: 'Immediate Conversion',
      image: '/oda7-module-engagement.jpg',
      heading: 'Convert inbound demand within 15 seconds.',
      subheading: 'Ingest webhook leads sub-second, verify numbers, and instantly pop them into the next available rep queue.',
      ctaText: 'Explore Growth Routing Console',
      formulas: [
        { left: 'Meta WhatsApp Lead Ads', right: 'Instant 2-Way CRM Thread' },
        { left: 'Automated Multi-Touch Cadences', right: '94% Message Open Rate' },
        { left: 'Lead Source Attribution', right: 'Real CAC Optimization' },
      ],
      quote: 'Reducing our lead response time from 18 minutes to 12 seconds with ODA7 increased our booked meetings by 48% in the first quarter.',
      quoteAuthor: 'Elena Rostova',
      quoteRole: 'Demand Gen, FinTech Scale',
      floatingBadge: 'Sub-Second Ingestion Active',
      badgeColor: 'emerald',
    },
    {
      id: 'admin',
      label: 'HR & Ops Admin',
      roleTitle: 'People & Revenue Operations Lead',
      rolePersona: 'Samantha Chen, Head of RevOps',
      tagline: 'Automated Payroll & Geolocation Shifts',
      badge: 'Zero Dispute Operations',
      image: '/oda7-module-compensation.jpg',
      heading: 'Automate compensation rules and shift governance.',
      subheading: 'Calculate complex multi-tier commissions instantly on Closed-Won, generate payslips, and manage geo-verified attendance.',
      ctaText: 'Explore Operations & Payroll',
      formulas: [
        { left: 'Closed-Won Opportunity', right: 'Instant Accelerator Calc' },
        { left: 'Geo-Verified Clock-In', right: '100% Shift Audit Compliance' },
        { left: 'Automated PDF Payslips', right: 'Zero Rep Payroll Inquiries' },
      ],
      quote: 'Commission payout day used to take 3 full days of spreadsheet reconciliation. Now it happens automatically with zero disputes.',
      quoteAuthor: 'Samantha Chen',
      quoteRole: 'Head of Operations, RevGroup',
      floatingBadge: 'Automated Commission Engine Active',
      badgeColor: 'cyan',
    },
    {
      id: 'super-admin',
      label: 'Platform SaaS',
      roleTitle: 'Multi-Tenant Platform Operator',
      rolePersona: 'David Sterling, SaaS Operator',
      tagline: 'Multi-Tenant SaaS Governance & Global Telemetry',
      badge: 'Global SaaS Multi-Tenancy',
      image: '/oda7-scenario-saasplatform.jpg',
      heading: 'Govern multiple client organizations from one console.',
      subheading: 'Provision isolated tenant workspaces, manage subscription tiers, and review platform-wide access controls.',
      ctaText: 'Explore Super Admin SaaS Console',
      formulas: [
        { left: '1-Click Tenant Provisioning', right: 'Instant Workspace Isolation' },
        { left: 'Automated Stripe Tiers', right: 'Hands-Free Subscription Billing' },
        { left: 'Global IP Threat Defense', right: 'Enterprise Security Compliance' },
      ],
      quote: 'Operating 48 distinct client organizations under one master platform while guaranteeing complete data isolation and unified billing is extraordinary.',
      quoteAuthor: 'David Sterling',
      quoteRole: 'Platform operator',
      floatingBadge: '100% Tenant Isolation Active',
      badgeColor: 'emerald',
    },
  ];

  const current = roles.find((r) => r.id === activeRole) || roles[0];

  return (
    <section id="role-showcase" className="section-wrapper">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="One Workspace, Every Role"
          eyebrowIcon="Users"
          title="Built for every role that"
          highlightText="moves the business."
          description="Experience how ODA7 transforms daily execution for sales representatives, floor supervisors, growth marketers, operations admins, and platform executives."
        />

        {/* 5-Role Tab Switcher with LightTabIndicator */}
        <div className="tabs-scroll-wrapper">
          <LightTabIndicator
            tabs={roles.map((r) => ({ id: r.id, label: r.label }))}
            activeTab={activeRole}
            onChange={(id) => setActiveRole(id)}
            variant="pill"
            className="role-selector-light-tabs"
          />
        </div>

        {/* Main Role Storytelling Box with ProductStateTransition */}
        <ProductStateTransition activeKey={activeRole}>
          <div
            className="feature-showcase-panel"
            style={{
              maxWidth: '1240px',
              margin: '0 auto',
              borderRadius: '28px',
              padding: 'clamp(24px, 4.5vw, 52px)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
                  fontWeight: '850',
                  color: 'var(--oda-text-primary)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  marginBottom: '10px',
                }}
              >
                {current.heading}
              </h2>

              <p
                style={{
                  fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                  color: 'var(--oda-text-secondary)',
                  lineHeight: 1.5,
                  marginBottom: '24px',
                }}
              >
                {current.subheading}
              </p>

              {/* Action Button */}
              <div style={{ marginBottom: '32px' }}>
                <Button
                  to="/contact"
                  variant="primary"
                  size="md"
                  iconRight="ArrowRight"
                  style={{
                    padding: '12px 24px',
                    fontSize: '0.9rem',
                    fontWeight: '750',
                  }}
                >
                  {current.ctaText}
                </Button>
              </div>

              {/* 3 Formula Pills */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
                {current.formulas.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      background: 'var(--oda-surface)',
                      border: '1px solid var(--oda-border)',
                      borderRadius: '14px',
                      padding: '12px 18px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    }}
                  >
                    {/* Left Formula Part */}
                    <div style={{ flex: 1, color: 'var(--oda-text-primary)', fontSize: '0.85rem', fontWeight: '600', lineHeight: '1.35' }}>
                      {item.left}
                    </div>

                    {/* Equals Sign Badge */}
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--oda-primary-soft)', border: '1px solid var(--oda-border-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--oda-primary)', fontWeight: '850', fontSize: '1rem', flexShrink: 0 }}>
                      =
                    </div>

                    {/* Right Outcome Part */}
                    <div style={{ flex: 1, color: 'var(--oda-success)', fontSize: '0.85rem', fontWeight: '750', lineHeight: '1.35' }}>
                      {item.right}
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial Quote Box */}
              <div
                style={{
                  background: 'var(--oda-surface)',
                  border: '1px solid var(--oda-border)',
                  borderRadius: '16px',
                  padding: '20px 24px',
                  position: 'relative',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                }}
              >
                <div style={{ position: 'absolute', top: '16px', left: '18px', color: 'var(--oda-primary)', opacity: 0.4 }}>
                  <Quote size={28} />
                </div>
                <div style={{ paddingLeft: '32px' }}>
                  <p style={{ color: 'var(--oda-text-primary)', fontSize: '0.9rem', lineHeight: '1.6', fontStyle: 'italic', margin: '0 0 10px 0' }}>
                    "{current.quote}"
                  </p>
                  <div style={{ color: 'var(--oda-primary)', fontSize: '0.8125rem', fontWeight: '700' }}>
                    — {current.quoteAuthor}, <span style={{ color: 'var(--oda-text-secondary)', fontWeight: '500' }}>{current.quoteRole}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Large, Crystal-Clear Unconstrained Professional Portrait in InteractiveTiltCard */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <InteractiveTiltCard
                maxTilt={3}
                scale={1.015}
                className="story-image-card-responsive"
              >
                <img
                  className="tilt-parallax-img"
                  src={current.image}
                  alt={current.rolePersona}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    display: 'block',
                    filter: 'contrast(1.05) brightness(0.96)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 45%, rgba(7, 9, 14, 0.92) 100%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Floating Bottom Telemetry Badge inside Image */}
                <div className="story-telemetry-badge-bottom">
                  <div>
                    <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: '750' }}>{current.rolePersona}</div>
                    <div style={{ color: '#38bdf8', fontSize: '0.72rem' }}>{current.roleTitle}</div>
                  </div>
                  <span className={`badge badge-${current.badgeColor}`} style={{ fontSize: '0.6875rem' }}>
                    {current.floatingBadge}
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
