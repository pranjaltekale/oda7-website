import React, { useEffect, useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import {
  Users,
  DollarSign,
  Award,
  Activity,
  CheckCircle2,
  TrendingUp,
  Clock,
  Sparkles,
} from 'lucide-react';

export const PeopleOperationsStorySection = () => {
  const [activeFlow, setActiveFlow] = useState(0);
  const formulas = [
    {
      left: 'Agent Geolocation Shift Punch',
      right: 'Verified Live Floor Roster',
      color: '#38bdf8',
    },
    {
      left: 'Opportunity Deal Closed-Won',
      right: 'Instant Commission Tier Calculation',
      color: '#10b981',
    },
    {
      left: 'End-of-Month Payroll Run',
      right: '1-Click Itemized PDF Payslip Dispatch',
      color: '#fbbf24',
    },
  ];

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = window.setInterval(() => setActiveFlow((current) => (current + 1) % formulas.length), 3600);
    return () => window.clearInterval(timer);
  }, [formulas.length]);

  return (
    <section className="section-wrapper" id="people-ops">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="Connected People Operations"
          eyebrowIcon="Users"
          title="Connect attendance, rosters, and"
          highlightText="automated payroll."
          description="Bridge the historical gap between sales activity and operations. Ensure accurate commissions, automated attendance verification, and transparent compensation."
        />

        {/* Large Connected Floor Composition */}
        <div
          className="feature-showcase-panel"
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            borderRadius: '28px',
            padding: 'clamp(28px, 4.5vw, 52px)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(320px, 1.15fr) minmax(320px, 1.25fr)',
              gap: 'clamp(32px, 5vw, 56px)',
              alignItems: 'center',
            }}
            className="mockup-grid-2col"
          >
            {/* Left Column: Authentic Team Meeting Photo with Layered Telemetry */}
            <div style={{ position: 'relative' }}>
              <div
                className="story-image-frame"
                style={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
                  height: '500px',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                  alt="Sales and Operations Team Strategy Meeting"
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                    display: 'block',
                    filter: 'brightness(0.92) contrast(1.05)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 40%, rgba(7, 10, 18, 0.92) 100%)',
                  }}
                />

                {/* Floating Bottom Telemetry Chip inside image */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    right: '20px',
                    background: 'rgba(11, 15, 23, 0.94)',
                    backdropFilter: 'blur(14px)',
                    WebkitBackdropFilter: 'blur(14px)',
                    borderRadius: '12px',
                    padding: '14px 18px',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8' }}>
                      <Users size={18} />
                    </div>
                    <div>
                      <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: '750' }}>{formulas[activeFlow].right}</div>
                      <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Triggered by: {formulas[activeFlow].left}</div>
                    </div>
                  </div>
                  <span className="badge badge-emerald" style={{ fontSize: '0.6875rem' }}>
                    State {activeFlow + 1} of {formulas.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Unified Narrative Storytelling + Formula Pills */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <span className="badge badge-primary">People & Performance</span>
                <span className="badge badge-amber">Automated Ops</span>
              </div>

              <h3
                style={{
                  fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)',
                  fontWeight: '850',
                  color: 'var(--oda-text-primary)',
                  lineHeight: 1.15,
                  marginBottom: '16px',
                  letterSpacing: '-0.025em',
                }}
              >
                Eliminate spreadsheet disputes between{' '}
                <span className="text-gradient-accent">sales and operations.</span>
              </h3>

              <p
                style={{
                  color: 'var(--oda-text-secondary)',
                  fontSize: '0.975rem',
                  lineHeight: '1.7',
                  marginBottom: '26px',
                }}
              >
                In high-velocity organizations, managing agents, shift rotations, and commission tiers manually creates friction. ODA7 ties telephony calling directly to agent availability, records verified shift attendance, and instantly calculates tier accelerators the second a deal is marked Closed-Won.
              </p>

              {/* Formula Pills */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {formulas.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveFlow(idx)}
                    className={`people-flow-step ${activeFlow === idx ? 'is-active' : ''}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      background: 'var(--oda-surface)',
                      border: '1px solid var(--oda-border)',
                      borderRadius: '12px',
                      padding: '12px 16px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ flex: 1, color: 'var(--oda-text-primary)', fontSize: '0.85rem', fontWeight: '600', lineHeight: '1.35' }}>
                      {item.left}
                    </div>

                    <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'var(--oda-primary-soft)', border: '1px solid var(--oda-border-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--oda-primary)', fontWeight: '850', fontSize: '0.95rem', flexShrink: 0 }}>
                      =
                    </div>

                    <div style={{ flex: 1, color: 'var(--oda-success)', fontSize: '0.85rem', fontWeight: '750', lineHeight: '1.35' }}>
                      {item.right}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
