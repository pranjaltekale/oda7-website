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
} from 'lucide-react';

export const IndustryScenariosSection = () => {
  const [activeScenario, setActiveScenario] = useState(0);

  const scenarios = [
    {
      id: 'high-velocity-sdr',
      label: 'Inside-sales team',
      icon: PhoneCall,
      title: 'Keep a busy inside-sales team focused on the next action.',
      badge: 'Inside Sales',
      desc: 'Give reps a clear queue, customer context, conversation guidance and a shared follow-up timeline.',
      image: '/oda7-scenario-insidesales.jpg',
      formulas: [
        { left: 'New enquiry', right: 'Visible owner and next action' },
        { left: 'Customer conversation', right: 'Outcome added to the timeline' },
        { left: 'Approved deal outcome', right: 'Compensation review context' },
      ],
    },
    {
      id: 'call-center',
      label: 'Managed sales floor',
      icon: Headphones,
      title: 'Help managers see the floor and coach the moment.',
      badge: 'Call Center & BPO',
      desc: 'Bring queue context, representative availability and coaching actions into one manager view.',
      image: '/oda7-scenario-callcenter.jpg',
      formulas: [
        { left: 'Queue activity', right: 'Shared floor visibility' },
        { left: 'Conversation review', right: 'Contextual coaching' },
        { left: 'Operating patterns', right: 'More informed staffing review' },
      ],
    },
    {
      id: 'revenue-agency',
      label: 'Revenue Agency',
      icon: Building2,
      title: 'Separate client work without losing platform oversight.',
      badge: 'Revenue Agency',
      desc: 'Organize client workspaces, team structures, conversation guidance and administrative context from one platform layer.',
      image: '/oda7-scenario-agency.jpg',
      formulas: [
        { left: 'Client workspace', right: 'Clear organizational boundary' },
        { left: 'Team-specific workflow', right: 'Relevant operating context' },
        { left: 'Platform administration', right: 'Shared oversight' },
      ],
    },
    {
      id: 'saas-reseller',
      label: 'Platform operator',
      icon: Zap,
      title: 'Operate multiple organizations from one platform layer.',
      badge: 'Platform SaaS',
      desc: 'Operate multiple organization workspaces with custom domains, subscription controls and a shared platform administration layer.',
      image: '/oda7-scenario-saasplatform.jpg',
      formulas: [
        { left: 'Organization setup', right: 'Configured workspace' },
        { left: 'Subscription controls', right: 'Visible plan context' },
        { left: 'Administrative activity', right: 'Auditable platform record' },
      ],
    },
  ];

  const current = scenarios[activeScenario];

  return (
    <section className="section-wrapper section-alt" id="scenarios">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="Operating scenarios"
          eyebrowIcon="Building2"
          title="Different operating models."
          highlightText="A connected foundation."
          description="Choose a scenario to see how ownership, workflow and platform context change without changing the underlying operating model."
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
                        flexWrap: 'wrap',
                      }}
                    >
                      <div style={{ flex: '1 1 120px', minWidth: 0, color: 'var(--oda-text-primary)', fontSize: '0.85rem', fontWeight: '600', lineHeight: '1.35' }}>
                        {f.left}
                      </div>

                      <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'var(--oda-primary-soft)', border: '1px solid var(--oda-border-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--oda-primary)', fontWeight: '850', fontSize: '0.95rem', flexShrink: 0 }}>
                        =
                      </div>

                      <div style={{ flex: '1 1 120px', minWidth: 0, color: 'var(--oda-success)', fontSize: '0.85rem', fontWeight: '750', lineHeight: '1.35' }}>
                        {f.right}
                      </div>
                    </div>
                  ))}
                </div>

                <Button className="scenario-mobile-cta" to="/contact" variant="primary" size="md" iconRight="ArrowRight">
                  Discuss this workflow
                </Button>
              </div>

              {/* Large Real-World Photography in InteractiveTiltCard */}
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
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 45%, rgba(7, 10, 18, 0.9) 100%)', pointerEvents: 'none' }} />
                  
                  <div className="story-telemetry-badge-bottom">
                    <div>
                      <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: '750' }}>{current.label} Pod</div>
                      <div style={{ color: '#38bdf8', fontSize: '0.72rem' }}>Illustrative ODA7 workflow</div>
                    </div>
                    <span className="badge badge-emerald" style={{ fontSize: '0.6875rem' }}>
                      Scenario active
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
