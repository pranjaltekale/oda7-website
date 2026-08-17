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

export const RealWorldRoleStorySection = () => {
  const [activeRole, setActiveRole] = useState(0);

  const roles = [
    {
      id: 'sales-teams',
      label: 'Sales Teams',
      icon: PhoneCall,
      heading: 'Give every salesperson a clearer path to the next deal.',
      desc: 'Sales reps eliminate tab toggling and manual logging with algorithmic queue prioritization, 0.8s local presence dialing, dynamic branching scripts, and real-time speech AI battlecards.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80',
      persona: 'Alex Rivera • SDR Team Lead, BIZZFLY Inside Pod',
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
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
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
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=80',
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
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=80',
      persona: 'David Sterling • Platform Managing Director',
      badge: 'Executive BI',
      metrics: '114% to Target',
      features: [
        'Executive revenue pacing & ARR telemetry',
        'Explain My Numbers natural language AI',
        'Hourly floor pickup ratio analytics',
        'Carrier delivery & spam score monitors',
        'Executive pipeline scenario projections',
        'Automated scheduled Monday PDF digests',
      ],
      quote: 'Being able to ask plain-English questions about yesterday’s revenue drop without waiting for SQL engineers is priceless.',
      quoteAuthor: 'David Sterling',
      quoteRole: 'Managing Director, BIZZFLY SaaS',
    },
    {
      id: 'agencies-bpo',
      label: 'Agencies & BPO',
      icon: Building2,
      heading: 'Scale multiple client sales pods from one master cockpit.',
      desc: 'Agencies and call centers manage distinct client rosters, assign segregated carrier trunks, enforce client-specific SLAs, and track multi-client billing seamlessly.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
      persona: 'Marcus Vance • BPO Managing Partner',
      badge: 'Agency & BPO Ops',
      metrics: '18 Tenant Pods',
      features: [
        'Multi-client isolated pod routing',
        'Client-specific script & sequence logic',
        'Dedicated carrier pools per client',
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
      desc: 'Enterprise platforms operate ODA7 under BIZZFLY with custom CNAME domains, subscription billing tiers, global IP defense, REST webhooks, and tamper-proof audit trails.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
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
      quote: 'Complete data isolation and SOC2 compliance out of the box allowed us to pass Fortune 500 security reviews.',
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

        {/* 6 Role Tab Switcher */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '36px', flexWrap: 'wrap', gap: '8px' }}>
          <div className="tab-group">
            {roles.map((role, idx) => {
              const IconComp = role.icon;
              const isActive = activeRole === idx;

              return (
                <button
                  key={role.id}
                  className={`tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveRole(idx)}
                >
                  <IconComp size={16} />
                  <span>{role.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Role Storytelling Box */}
        <div
          className="feature-showcase-panel animate-fadeIn"
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            borderRadius: '28px',
            padding: 'clamp(28px, 4.5vw, 52px)',
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
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '28px' }}>
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

            {/* Right Side: Large Persona Image with Verified Role Badge & Live Pod Telemetry */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div
                className="story-image-frame"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '470px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)',
                }}
              >
                <img
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
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(7, 10, 18, 0.9) 100%)' }} />

                {/* Floating Top Left Persona Tag */}
                <div
                  className="story-persona-tag"
                  style={{
                    position: 'absolute',
                    top: '18px',
                    left: '18px',
                    background: 'rgba(11, 15, 23, 0.92)',
                    backdropFilter: 'blur(10px)',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#fff',
                    fontSize: '0.785rem',
                    fontWeight: '700',
                  }}
                >
                  {current.persona}
                </div>

                {/* Floating Bottom Telemetry Console */}
                <div
                  className="story-telemetry-overlay"
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
                    <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: '750' }}>{current.label} Experience</div>
                    <div style={{ color: '#38bdf8', fontSize: '0.72rem', fontWeight: '600' }}>{current.metrics} Telemetry Active</div>
                  </div>
                  <span className="badge badge-emerald" style={{ fontSize: '0.6875rem' }}>
                    1-Click Verified
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
