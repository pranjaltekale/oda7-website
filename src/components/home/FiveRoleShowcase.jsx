import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
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
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
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
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
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
      roleTitle: 'Marketing & Demand Gen',
      rolePersona: 'Elena Rostova, Head of Growth',
      tagline: 'Speed-to-Lead Bridges & WhatsApp Cadence',
      badge: 'Omnichannel Ingestion',
      image: 'https://images.unsplash.com/photo-1580894732414-0675276e053a?w=800&auto=format&fit=crop&q=80',
      heading: 'Turn ad spend into instant live conversations.',
      subheading: 'Capture webhooks from Facebook, Google Ads, and landing pages with instant lead routing and automated WhatsApp broadcasts.',
      ctaText: 'Explore Growth Campaign Suite',
      formulas: [
        { left: 'Paid Ad Inbound Webhook', right: '<10s Automatic Dial Bridge' },
        { left: 'Official WhatsApp API', right: '94% Message Open Rate' },
        { left: 'Full-Funnel Attribution', right: 'True Telephony ROI Tracking' },
      ],
      quote: 'Our lead-to-call response time dropped from 35 minutes to 9 seconds. Our CAC payback period cut in half almost immediately.',
      quoteAuthor: 'Elena Rostova',
      quoteRole: 'Head of Demand Gen, CloudFlow',
      floatingBadge: '<9s Inbound Lead-to-Call Bridge',
      badgeColor: 'emerald',
    },
    {
      id: 'admin',
      label: 'Ops & Payroll',
      roleTitle: 'Operations & HR Administrator',
      rolePersona: 'Sarah Jenkins, Director of Revenue Ops',
      tagline: 'Automated Commission Pay & Shift Telemetry',
      badge: 'Automated Compensation',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=80',
      heading: 'Eliminate spreadsheet payroll disputes permanently.',
      subheading: 'Automate tier accelerators, verify geolocation shift punches, and dispatch itemized PDF payslips with 1-click.',
      ctaText: 'Explore Automated Payroll Ops',
      formulas: [
        { left: 'Verified Shift Attendance', right: '100% Audit-Ready Hours' },
        { left: 'Tiered Quota Accelerators', right: 'Automated Commission Math' },
        { left: 'End-of-Month Payroll Run', right: '1-Click Itemized Payslips' },
      ],
      quote: 'End-of-month used to mean 3 days of spreadsheet hell and rep commission arguments. Now, payroll runs in under 4 minutes with 100% accuracy.',
      quoteAuthor: 'Sarah Jenkins',
      quoteRole: 'Director of RevOps, FinScale',
      floatingBadge: '1-Click Verified Payslip Dispatch',
      badgeColor: 'amber',
    },
    {
      id: 'executive',
      label: 'Platform Executive',
      roleTitle: 'Super Admin & Multi-Tenant SaaS',
      rolePersona: 'David Sterling, Managing Director',
      tagline: 'Multi-Tenant Isolation & Consolidated ARR',
      badge: 'Multi-Tenant Master',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
      heading: 'Govern multiple client organizations from one console.',
      subheading: 'Provision isolated tenant workspaces, manage subscription billing tiers, and enforce global IP threat defense under BIZZFLY.',
      ctaText: 'Explore Super Admin SaaS Console',
      formulas: [
        { left: '1-Click Tenant Provisioning', right: 'Instant Workspace Isolation' },
        { left: 'Automated Stripe Tiers', right: 'Hands-Free Subscription Billing' },
        { left: 'Global IP Threat Defense', right: 'Enterprise Security Compliance' },
      ],
      quote: 'Operating 48 distinct client organizations under one master platform while guaranteeing complete data isolation and unified billing is extraordinary.',
      quoteAuthor: 'David Sterling',
      quoteRole: 'Managing Director, BIZZFLY SaaS Platform',
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

        {/* 5-Role Tab Switcher */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '36px', flexWrap: 'wrap', gap: '8px' }}>
          <div className="tab-group">
            {roles.map((role) => {
              const isActive = activeRole === role.id;
              return (
                <button
                  key={role.id}
                  className={`tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveRole(role.id)}
                >
                  <span>{role.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Role Storytelling Box */}
        <div
          className="feature-showcase-panel animate-fadeIn"
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            borderRadius: '28px',
            padding: 'clamp(28px, 4.5vw, 52px)',
            position: 'relative',
            overflow: 'hidden',
          }}
          key={activeRole}
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
            {/* Left Column: Role Headline, CTA, Formulas & Testimonial Quote */}
            <div>
              {/* Heading */}
              <h2
                style={{
                  fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
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

            {/* Right Column: Large, Crystal-Clear Unconstrained Professional Portrait */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              
              {/* Image Frame with Full Visibility */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '540px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
                }}
              >
                <img
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
                  }}
                />

                {/* Floating Bottom Telemetry Badge inside Image */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    right: '20px',
                    background: 'rgba(11, 15, 23, 0.94)',
                    backdropFilter: 'blur(14px)',
                    WebkitBackdropFilter: 'blur(14px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '14px',
                    padding: '14px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: '750' }}>{current.rolePersona}</div>
                    <div style={{ color: '#38bdf8', fontSize: '0.72rem' }}>{current.roleTitle}</div>
                  </div>
                  <span className={`badge badge-${current.badgeColor}`} style={{ fontSize: '0.6875rem' }}>
                    {current.floatingBadge}
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
