'use client';

import React, { useState, useRef } from 'react';
import { featureCategories, featuresByModule } from '../../data/featuresData';
import { Button } from '../common/Button';
import { LightTabIndicator } from '../common/LightTabIndicator';
import { ProductStateTransition } from '../common/ProductStateTransition';
import { InteractiveTiltCard } from '../common/InteractiveTiltCard';
import {
  PhoneCall,
  Sparkles,
  Users,
  DollarSign,
  Trophy,
  BarChart3,
  Settings,
  ShieldCheck,
  Inbox,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Activity,
  Layers,
  Zap,
} from 'lucide-react';

const iconComponents = {
  PhoneCall,
  Sparkles,
  Users,
  DollarSign,
  Trophy,
  BarChart3,
  Settings,
  ShieldCheck,
  Inbox,
};

// Category-level visuals keep every capability grounded in the workflow it supports.
const categoryVisuals = {
  sales: {
    image: '/oda7-module-sales.jpg',
    roleTag: 'Sales workflow',
    telemetry: 'Lead context • owner • next action',
    signal: 'Connected sales context',
    problem: 'Customer context is lost when queues, calls, and follow-up live in separate tools.',
    outcome: 'ODA7 keeps the record, conversation, and next action together for the sales team.',
  },
  ai: {
    image: '/oda7-ai-assist.png',
    roleTag: 'Assisted workflow',
    telemetry: 'Relevant guidance • reviewable context',
    signal: 'Contextual assistance',
    problem: 'Disconnected AI creates another place to search while the customer conversation moves on.',
    outcome: 'ODA7 surfaces relevant assistance inside the work, with the person still in control.',
  },
  people: {
    image: '/oda7-module-people.jpg',
    roleTag: 'People operations',
    telemetry: 'Team structure • availability • ownership',
    signal: 'Shared team context',
    problem: 'Staffing and availability data lose value when they are separated from active workflows.',
    outcome: 'ODA7 connects team context with the work managers need to assign and support.',
  },
  compensation: {
    image: '/oda7-module-compensation.jpg',
    roleTag: 'Compensation review',
    telemetry: 'Approved work • review status • record',
    signal: 'Traceable review path',
    problem: 'Compensation questions are difficult to resolve when approvals and source activity are scattered.',
    outcome: 'ODA7 gives teams a clearer path from approved work to a reviewable compensation record.',
  },
  engagement: {
    image: '/oda7-module-engagement.jpg',
    roleTag: 'Team engagement',
    telemetry: 'Goals • recognition • shared updates',
    signal: 'Visible team progress',
    problem: 'Goals and recognition lose momentum when they are detached from everyday team activity.',
    outcome: 'ODA7 places progress, recognition, and team communication in shared context.',
  },
  insights: {
    image: '/oda7-module-insights.jpg',
    roleTag: 'Operational insight',
    telemetry: 'Activity • patterns • follow-through',
    signal: 'Decision-ready context',
    problem: 'Leaders spend time reconciling reports before they can understand what needs attention.',
    outcome: 'ODA7 brings operational signals into one view so teams can discuss the same picture.',
  },
  admin: {
    image: '/oda7-scenario-saasplatform.jpg',
    roleTag: 'Workspace administration',
    telemetry: 'Roles • routing • workspace controls',
    signal: 'Governed workspace',
    problem: 'Access, routing, and workspace settings become hard to govern when they are managed in isolation.',
    outcome: 'ODA7 centralizes administrative context around the workflows it governs.',
  },
  'super-admin': {
    image: '/oda7-leadership-analytics.jpg',
    roleTag: 'Platform operations',
    telemetry: 'Organizations • plans • platform oversight',
    signal: 'Platform-level context',
    problem: 'Platform operators need a coherent view across organizations without mixing day-to-day work.',
    outcome: 'ODA7 provides a separate operating layer for organization and platform administration.',
  },
  communication: {
    image: '/oda7-scenario-insidesales.jpg',
    roleTag: 'Customer communication',
    telemetry: 'Conversation • channel • next response',
    signal: 'One conversation timeline',
    problem: 'Messages lose continuity when each channel keeps its own history and ownership.',
    outcome: 'ODA7 keeps customer communication attached to the record and the next action.',
  },
};

export const FeatureExplorer = () => {
  const [selectedCatId, setSelectedCatId] = useState('sales');
  const [selectedItemIdx, setSelectedItemIdx] = useState(0);
  const scrollContainerRef = useRef(null);

  const currentModule = featuresByModule[selectedCatId] || featuresByModule.sales;
  const currentItem = currentModule.items[selectedItemIdx] || currentModule.items[0];

  const visual = categoryVisuals[selectedCatId] || categoryVisuals.sales;

  const handleCategoryChange = (catId) => {
    setSelectedCatId(catId);
    setSelectedItemIdx(0);
  };

  const handleNextFeature = () => {
    setSelectedItemIdx((prev) => (prev + 1) % currentModule.items.length);
  };

  const handlePrevFeature = () => {
    setSelectedItemIdx((prev) => (prev - 1 + currentModule.items.length) % currentModule.items.length);
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -260, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 260, behavior: 'smooth' });
    }
  };

  return (
    <section id="capabilities" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container-wide">
        
        {/* Section Hero Introduction */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 40px auto' }}>
          <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
            <span className="badge badge-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Layers size={14} color="#38bdf8" />
              <span>ODA7 CAPABILITY EXPLORER</span>
            </span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
              fontWeight: '850',
              color: 'var(--oda-text-primary)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '18px',
            }}
          >
            Explore the capability{' '}
            <span className="text-gradient-accent">behind each handoff.</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
              color: 'var(--oda-text-secondary)',
              lineHeight: 1.6,
              marginBottom: '28px',
            }}
          >
            Move through the platform by operating area and see how each capability supports the people, context, and next action around the work.
          </p>

          {/* Dataset Metric Proof Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
            <span className="badge badge-cyan" style={{ fontSize: '0.8125rem', padding: '6px 14px' }}>
              Role-aware views
            </span>
            <span className="badge badge-primary" style={{ fontSize: '0.8125rem', padding: '6px 14px' }}>
              Connected workflows
            </span>
            <span className="badge badge-emerald" style={{ fontSize: '0.8125rem', padding: '6px 14px' }}>
              Illustrative product context
            </span>
          </div>
        </div>

        {/* Horizontal Category Navigation Bar with LightTabIndicator */}
        <div className="tabs-scroll-wrapper">
          <LightTabIndicator
            tabs={featureCategories.map((cat) => {
              const IconComp = iconComponents[cat.icon] || Sparkles;
              return {
                id: cat.id,
                label: cat.label,
                icon: IconComp,
                count: cat.count,
              };
            })}
            activeTab={selectedCatId}
            onChange={(catId) => handleCategoryChange(catId)}
            variant="pill"
            className="feature-category-light-tabs"
          />
        </div>

        {/* Compact Capability Selector Chips for Active Category */}
        <div
          className="capability-chips-scroll"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '28px',
            maxWidth: '1240px',
            marginInline: 'auto',
          }}
        >
          {currentModule.items.map((item, idx) => {
            const isActive = selectedItemIdx === idx;
            return (
              <button
                key={item.name}
                onClick={(e) => {
                  setSelectedItemIdx(idx);
                  e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                }}
                style={{
                  padding: '9px 15px',
                  borderRadius: '10px',
                  background: isActive ? 'var(--oda-primary)' : 'var(--oda-surface)',
                  border: isActive ? '1px solid var(--oda-primary-light)' : '1px solid var(--oda-border)',
                  color: isActive ? '#ffffff' : 'var(--oda-text-secondary)',
                  fontSize: '0.8125rem',
                  fontWeight: isActive ? '800' : '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isActive ? '0 0 16px rgba(37, 99, 235, 0.35)' : 'none',
                  transform: isActive ? 'translateY(-1px)' : 'none',
                  flexShrink: 0,
                }}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        {/* Large Interactive Showcase Panel with ProductStateTransition */}
        <ProductStateTransition activeKey={`${selectedCatId}-${selectedItemIdx}`}>
          <div
            style={{
              maxWidth: '1240px',
              margin: '0 auto 36px auto',
              borderRadius: '28px',
              padding: 'clamp(28px, 4.5vw, 52px)',
            }}
            className="feature-showcase-panel capability-experience"
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.25fr)',
                gap: 'clamp(32px, 5vw, 56px)',
                alignItems: 'center',
              }}
              className="mockup-grid-2col"
            >
              {/* Left Column: Dynamic Real-World Human Photo in InteractiveTiltCard */}
              <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                <InteractiveTiltCard
                  maxTilt={3}
                  scale={1.015}
                  className="story-image-card-responsive"
                >
                  <img
                    className="tilt-parallax-img"
                    src={visual.image}
                    alt={currentItem.name}
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
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(7, 10, 18, 0.9) 100%)', pointerEvents: 'none' }} />

                  {/* Floating Top Left Role Badge */}
                  <div className="story-top-badge">
                    {visual.roleTag}
                  </div>

                  {/* Floating Bottom Live Telemetry Badge */}
                  <div className="story-telemetry-badge-bottom">
                    <div>
                      <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: '750' }}>{currentItem.name}</div>
                      <div style={{ color: '#38bdf8', fontSize: '0.72rem', fontWeight: '600' }}>{visual.telemetry}</div>
                    </div>
                    <span className="badge badge-emerald" style={{ fontSize: '0.6875rem' }}>
                      {visual.signal}
                    </span>
                  </div>
                </InteractiveTiltCard>
              </div>

            {/* Right Column: Capability Storytelling (Problem → Capability → Experience → Outcome) */}
            <div className="capability-experience-copy">
              {/* Category & Badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <span className="badge badge-primary">
                  {currentModule.title}
                </span>
                <span className="badge badge-cyan">
                  {visual.signal}
                </span>
              </div>

              {/* Capability Name */}
              <h3
                style={{
                  fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)',
                  fontWeight: '850',
                  color: 'var(--oda-text-primary)',
                  lineHeight: 1.15,
                  marginBottom: '14px',
                  letterSpacing: '-0.02em',
                }}
              >
                {currentItem.name}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: 'var(--oda-text-secondary)',
                  fontSize: '1rem',
                  lineHeight: '1.65',
                  marginBottom: '24px',
                }}
              >
                {currentItem.desc}
              </p>

              <div className="capability-live-state" aria-label={`${currentItem.name} live product state`}>
                <div className="capability-live-top"><span><i /> Live ODA7 state</span><small>{currentModule.title}</small></div>
                <div className="capability-live-grid">
                  <span><small>Workflow</small><strong>{currentItem.name}</strong></span>
                  <span><small>Signal</small><strong>{visual.signal}</strong></span>
                  <span><small>Context</small><strong>Connected workspace</strong></span>
                </div>
              </div>

              {/* Storytelling Problem → Outcome Flow Box */}
              <div
                style={{
                  borderRadius: '16px',
                  padding: '18px 20px',
                  marginBottom: '28px',
                }}
                className="feature-flow-box"
              >
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ color: '#ef4444', fontSize: '0.72rem', fontWeight: '750', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '3px' }}>
                    Real-World Operational Friction:
                  </div>
                  <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.85rem', lineHeight: '1.45' }}>
                    {visual.problem}
                  </div>
                </div>

                <div style={{ paddingTop: '12px', borderTop: '1px solid var(--oda-border-subtle)' }}>
                  <div style={{ color: '#10b981', fontSize: '0.72rem', fontWeight: '750', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '3px' }}>
                    Connected ODA7 Experience:
                  </div>
                  <div style={{ color: '#10b981', fontSize: '0.875rem', fontWeight: '700', lineHeight: '1.45' }}>
                    {visual.outcome}
                  </div>
                </div>
              </div>

              {/* Navigation Controls: Explore next capability */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button
                    onClick={handlePrevFeature}
                    className="category-scroll-btn"
                    aria-label="Previous capability"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <button
                    onClick={handleNextFeature}
                    className="category-scroll-btn"
                    aria-label="Next capability"
                  >
                    <ChevronRight size={18} />
                  </button>

                  <span style={{ color: 'var(--oda-text-muted)', fontSize: '0.8125rem', fontFamily: 'var(--font-mono)' }}>
                    {selectedItemIdx + 1} of {currentModule.items.length} capabilities
                  </span>
                </div>

                <Button
                  to="/features"
                  variant="primary"
                  size="sm"
                  iconRight="ArrowRight"
                >
                  Explore platform catalog
                </Button>
              </div>

            </div>
          </div>
        </div>
      </ProductStateTransition>

      </div>
    </section>
  );
};
