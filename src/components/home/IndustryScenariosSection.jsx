import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
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
} from 'lucide-react';

export const IndustryScenariosSection = () => {
  const [activeScenario, setActiveScenario] = useState(0);

  const scenarios = [
    {
      id: 'high-velocity-sdr',
      label: 'High-Velocity SDR Floor',
      icon: PhoneCall,
      title: 'High-Volume Inside Sales & Outbound SDR Pods',
      badge: 'Inside Sales',
      desc: 'Sales development reps eliminate idle time with 0.8s local presence dialing, live branching talk tracks, and AI objection battlecards.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80',
      formulas: [
        { left: 'Inbound Webhook Lead', right: '<15s Speed-to-Lead SLA' },
        { left: '0.8s Local Presence Dialing', right: '+34.8% Pickup Ratio' },
        { left: 'Closed-Won Opportunity', right: 'Instant Commission Wallet Credit' },
      ],
    },
    {
      id: 'call-center',
      label: '100+ Seat Call Center',
      icon: Headphones,
      title: 'Call Center & BPO Floor Supervision',
      badge: 'Call Center & BPO',
      desc: 'Floor supervisors monitor concurrent queue volumes live, balance agent availability states, and whisper coaching cues into rep headsets.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
      formulas: [
        { left: 'Sub-Second Queue Telemetry', right: 'Zero Abandoned Calls' },
        { left: '1-Click Silent Listening', right: 'Rescue Enterprise Deals Live' },
        { left: 'Hourly Pickup Heatmaps', right: 'Optimized Shift Staffing' },
      ],
    },
    {
      id: 'revenue-agency',
      label: 'Revenue Agency',
      icon: Building2,
      title: 'Multi-Client BPO & Lead Gen Agency',
      badge: 'Revenue Agency',
      desc: 'Agencies manage multiple client sales pods under one master login with isolated carrier trunks, distinct talk tracks, and segmented client billing.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
      formulas: [
        { left: 'Multi-Client Pod Isolation', right: 'Strict Data Partitioning' },
        { left: 'Dedicated Client Trunks', right: 'Itemized Carrier Minute Billing' },
        { left: 'Automated Commission Pay', right: 'Zero Spreadsheet Disputes' },
      ],
    },
    {
      id: 'saas-reseller',
      label: 'SaaS Platform Reseller',
      icon: Zap,
      title: 'White-Label & Enterprise Multi-Tenancy',
      badge: 'Platform SaaS',
      desc: 'Operate ODA7 as an isolated multi-tenant SaaS platform under BIZZFLY with custom CNAME domains, subscription billing, and global IP security.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
      formulas: [
        { left: '1-Click Tenant Provisioning', right: 'Instant Client Workspace Ready' },
        { left: 'Automated Stripe Tiers', right: 'Hands-Free Subscription Billing' },
        { left: 'Global IP Defense Engine', right: 'Enterprise SLA & Threat Blocker' },
      ],
    },
  ];

  const current = scenarios[activeScenario];

  return (
    <section className="section-wrapper section-alt" id="scenarios">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="Industry Solutions"
          eyebrowIcon="Building2"
          title="Built for the way"
          highlightText="your business works."
          description="Whether you run a high-velocity SDR floor, a revenue agency, a 100-seat call center, or a multi-tenant SaaS platform, ODA7 adapts to your operational architecture."
        />

        {/* Tab Strip */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '36px', flexWrap: 'wrap', gap: '8px' }}>
          <div className="tab-group">
            {scenarios.map((s, idx) => {
              const IconComp = s.icon;
              return (
                <button
                  key={s.id}
                  className={`tab-btn ${activeScenario === idx ? 'active' : ''}`}
                  onClick={() => setActiveScenario(idx)}
                >
                  <IconComp size={16} />
                  <span>{s.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Scenario Visual Box */}
        <div
          className="feature-showcase-panel animate-fadeIn"
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            borderRadius: '28px',
            padding: 'clamp(28px, 4.5vw, 52px)',
          }}
          key={activeScenario}
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
            {/* Scenario Details + Formulas */}
            <div>
              <span className="badge badge-primary" style={{ marginBottom: '14px' }}>
                {current.badge}
              </span>

              <h3 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', fontWeight: '850', color: 'var(--oda-text-primary)', lineHeight: '1.18', marginBottom: '16px' }}>
                {current.title}
              </h3>

              <p style={{ color: 'var(--oda-text-secondary)', fontSize: '0.975rem', lineHeight: '1.7', marginBottom: '26px' }}>
                {current.desc}
              </p>

              {/* 3 Formula Pills */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                {current.formulas.map((f, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      background: 'var(--oda-surface)',
                      border: '1px solid var(--oda-border)',
                      borderRadius: '12px',
                      padding: '12px 16px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    }}
                  >
                    <div style={{ flex: 1, color: 'var(--oda-text-primary)', fontSize: '0.85rem', fontWeight: '600', lineHeight: '1.35' }}>
                      {f.left}
                    </div>

                    <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'var(--oda-primary-soft)', border: '1px solid var(--oda-border-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--oda-primary)', fontWeight: '850', fontSize: '0.95rem', flexShrink: 0 }}>
                      =
                    </div>

                    <div style={{ flex: 1, color: 'var(--oda-success)', fontSize: '0.85rem', fontWeight: '750', lineHeight: '1.35' }}>
                      {f.right}
                    </div>
                  </div>
                ))}
              </div>

              <Button className="scenario-mobile-cta" to="/contact" variant="primary" size="md" iconRight="ArrowRight">
                Explore {current.label} Solution
              </Button>
            </div>

            {/* Large Real-World Photography with Visible Face */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div
                className="story-image-frame"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '480px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)',
                }}
              >
                <img
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
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 45%, rgba(7, 10, 18, 0.9) 100%)' }} />
                
                <div
                  className="story-telemetry-overlay"
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    right: '20px',
                    background: 'rgba(11, 15, 23, 0.94)',
                    backdropFilter: 'blur(14px)',
                    padding: '14px 18px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: '750' }}>{current.label} Pod</div>
                    <div style={{ color: '#38bdf8', fontSize: '0.72rem' }}>Illustrative ODA7 workflow</div>
                  </div>
                  <span className="badge badge-emerald" style={{ fontSize: '0.6875rem' }}>
                    Scenario active
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
