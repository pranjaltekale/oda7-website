'use client';

import React, { useEffect, useRef, useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { InteractiveTiltCard } from '../common/InteractiveTiltCard';
import {
  XCircle,
  CheckCircle2,
  TrendingDown,
  TrendingUp,
  AlertCircle,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export const BeforeAfterSection = () => {
  const sectionRef = useRef(null);
  const [isUnified, setIsUnified] = useState(false);
  const beforePoints = [
    'Customer conversations and lead records live in separate places',
    'Follow-up ownership depends on manual reminders and handoffs',
    'Managers reconstruct the floor picture from delayed reports',
    'Operations rebuilds activity context during compensation review',
  ];

  const afterPoints = [
    'Customer context remains attached from intake through follow-up',
    'Ownership and the next action are visible to the wider team',
    'Managers review activity in the same operating context',
    'People and compensation workflows can reference verified outcomes',
  ];

  const disconnectedTools = ['CRM', 'Dialer', 'Sheets', 'HR', 'Payroll', 'Inbox', 'Analytics'];

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsUnified(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => setIsUnified(entry.isIntersecting), { threshold: 0.28 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`section-wrapper section-alt transformation-section ${isUnified ? 'is-unified' : ''}`} id="before-after">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="Transformation"
          eyebrowIcon="Sparkles"
          title="From fragmented handoffs to"
          highlightText="one operating picture."
          description="Compare the operating experience before and after customer, team and performance context is connected."
        />

        <div className="transformation-convergence" aria-label="Disconnected tools converge into ODA7">
          <div className="transformation-tools">
            {disconnectedTools.map((tool, index) => (
              <span key={tool} style={{ '--tool-x': `${8 + index * 13}%`, '--tool-y': `${24 + (index % 3) * 22}%`, '--tool-shift-x': `${(3 - index) * 11}px`, '--tool-shift-y': `${(index - 3) * 5}px`, '--tool-rotate': `${(index - 3) * 2}deg` }}>{tool}</span>
            ))}
          </div>
          <div className="transformation-core">
            <Sparkles size={18} />
            <strong>ODA7</strong>
            <small>One connected operating system</small>
          </div>
          <div className="transformation-result"><span>Sales</span><span>AI</span><span>People</span><span>Compensation</span><span>Insights</span></div>
        </div>

        {/* 2-Column Split Side-by-Side: Before ODA7 (Left) vs After ODA7 (Right) */}
        <div
          className="before-after-grid"
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(24px, 4vw, 40px)',
          }}
        >
          {/* COLUMN 1: BEFORE ODA7 */}
          <div
            className="before-after-col before-col"
            style={{
              borderRadius: '24px',
              padding: 'clamp(24px, 4vw, 40px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              {/* Header Title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ef4444' }}>
                  <XCircle size={22} />
                </div>
                <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)', fontWeight: '800', color: 'var(--oda-text-primary)', margin: 0 }}>
                  Before ODA7
                </h3>
              </div>

              {/* Red Crossed List Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {beforePoints.map((point, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <XCircle size={18} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--oda-text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Human & Metric Card */}
            <InteractiveTiltCard
              maxTilt={2.5}
              scale={1.01}
              className="comparison-metric-card"
              style={{
                background: 'var(--oda-surface)',
                border: '1px solid var(--oda-border)',
                borderRadius: '18px',
                padding: '20px',
                color: 'var(--oda-text-primary)',
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr',
                gap: '16px',
                alignItems: 'center',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.1)',
              }}
            >
              {/* Left Side: Stressed Rep/Leader Photo + Negative Metric */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img
                  className="tilt-parallax-img"
                  src="/oda7-operational-friction.png"
                  alt="Fragmented workflow context"
                  style={{
                    width: '72px',
                    height: '80px',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    borderRadius: '12px',
                  }}
                />
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--oda-text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Workflow state</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: '750', color: 'var(--oda-text-primary)' }}>Customer context</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: '850', color: 'var(--oda-text-primary)', lineHeight: '1.1' }}>Scattered</div>
                  <div style={{ fontSize: '0.75rem', color: '#ef4444', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '2px' }}>
                    <TrendingDown size={13} /> Manual handoffs
                  </div>
                </div>
              </div>

              {/* Right Side: Red Sales Gauge Card */}
              <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border-subtle)', borderRadius: '12px', padding: '10px 14px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--oda-text-muted)', fontWeight: '600' }}>Review state</div>
                <div style={{ width: '48px', height: '24px', margin: '4px auto', borderTop: '4px solid #ef4444', borderLeft: '4px solid #ef4444', borderRight: '4px solid #ef4444', borderRadius: '24px 24px 0 0' }} />
                <div style={{ fontSize: '1.15rem', fontWeight: '850', color: 'var(--oda-text-primary)' }}>Delayed</div>
                <div style={{ fontSize: '0.62rem', color: 'var(--oda-text-muted)' }}>Multiple sources</div>
              </div>
            </InteractiveTiltCard>
          </div>

          {/* COLUMN 2: AFTER ODA7 */}
          <div
            className="before-after-col after-col"
            style={{
              borderRadius: '24px',
              padding: 'clamp(24px, 4vw, 40px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              {/* Header Title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
                  <CheckCircle2 size={22} />
                </div>
                <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)', fontWeight: '800', color: 'var(--oda-text-primary)', margin: 0 }}>
                  After ODA7
                </h3>
              </div>

              {/* Green Checked List Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {afterPoints.map((point, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--oda-text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Human & Metric Card */}
            <InteractiveTiltCard
              maxTilt={2.5}
              scale={1.01}
              className="comparison-metric-card"
              style={{
                background: 'var(--oda-surface)',
                border: '1px solid var(--oda-border)',
                borderRadius: '18px',
                padding: '20px',
                color: 'var(--oda-text-primary)',
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr',
                gap: '16px',
                alignItems: 'center',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.1)',
              }}
            >
              {/* Left Side: Victorious Celebrating Professional Photo + Positive Metric */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img
                  className="tilt-parallax-img"
                  src="/oda7-module-engagement.jpg"
                  alt="Team reviewing shared operating context"
                  style={{
                    width: '72px',
                    height: '80px',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    borderRadius: '12px',
                  }}
                />
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--oda-text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Workflow state</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: '750', color: 'var(--oda-text-primary)' }}>Customer context</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: '850', color: 'var(--oda-text-primary)', lineHeight: '1.1' }}>Connected</div>
                  <div style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '2px' }}>
                    <TrendingUp size={13} /> One timeline
                  </div>
                </div>
              </div>

              {/* Right Side: Green Sales Gauge Card */}
              <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border-subtle)', borderRadius: '12px', padding: '10px 14px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--oda-text-muted)', fontWeight: '600' }}>Review state</div>
                <div style={{ width: '48px', height: '24px', margin: '4px auto', borderTop: '4px solid #10b981', borderLeft: '4px solid #10b981', borderRight: '4px solid #10b981', borderRadius: '24px 24px 0 0' }} />
                <div style={{ fontSize: '1.15rem', fontWeight: '850', color: 'var(--oda-text-primary)' }}>Visible</div>
                <div style={{ fontSize: '0.62rem', color: '#10b981', fontWeight: '700' }}>Responsible owner</div>
              </div>
            </InteractiveTiltCard>
          </div>
        </div>

      </div>
    </section>
  );
};
