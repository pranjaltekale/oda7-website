import React, { useEffect, useRef, useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
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
    'Conversations and leads are scattered across different devices and spreadsheets',
    'High-intent leads go cold due to inconsistent manual follow-up delays',
    'WhatsApp and calling outreach is manual, unrecorded, and disconnected from CRM',
    'Sales, support, and operations teams lack live floor visibility and coordination',
    'Juggling between 5+ separate tools to manage dialer, leads, attendance, and commissions',
  ];

  const afterPoints = [
    'Conversations and leads are centralized into one synchronous workspace for total team collaboration',
    'Smart ML queue prioritizes high-intent leads and keeps follow-up cadences on autopilot',
    'Integrated 0.8s local presence dialer and official WhatsApp API answer prospects in seconds',
    'Floor managers get real-time queue visibility with 1-click silent listening and headset whisper coaching',
    'CRM, Dialer, WhatsApp, Attendance, and Commission Payroll come together in one unified operating system',
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
          title="From scattered chaos to"
          highlightText="one operating picture."
          description="See the stark operational difference between managing disconnected tools and running your entire revenue floor on ODA7."
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
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
            <div
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
                  src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=300&auto=format&fit=crop&q=80"
                  alt="Frustrated Rep with Disjointed Tools"
                  style={{
                    width: '72px',
                    height: '80px',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    borderRadius: '12px',
                  }}
                />
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--oda-text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Statistics</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: '750', color: 'var(--oda-text-primary)' }}>Total Leads</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: '850', color: 'var(--oda-text-primary)', lineHeight: '1.1' }}>20k</div>
                  <div style={{ fontSize: '0.75rem', color: '#ef4444', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '2px' }}>
                    <TrendingDown size={13} /> -18.34%
                  </div>
                </div>
              </div>

              {/* Right Side: Red Sales Gauge Card */}
              <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border-subtle)', borderRadius: '12px', padding: '10px 14px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--oda-text-muted)', fontWeight: '600' }}>Total Sales</div>
                <div style={{ width: '48px', height: '24px', margin: '4px auto', borderTop: '4px solid #ef4444', borderLeft: '4px solid #ef4444', borderRight: '4px solid #ef4444', borderRadius: '24px 24px 0 0' }} />
                <div style={{ fontSize: '1.15rem', fontWeight: '850', color: 'var(--oda-text-primary)' }}>575</div>
                <div style={{ fontSize: '0.62rem', color: 'var(--oda-text-muted)' }}>High Tool Drop-off</div>
              </div>
            </div>
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
            <div
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
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&auto=format&fit=crop&q=80"
                  alt="Celebrating Victorious Sales Executive"
                  style={{
                    width: '72px',
                    height: '80px',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    borderRadius: '12px',
                  }}
                />
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--oda-text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Statistics</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: '750', color: 'var(--oda-text-primary)' }}>Total Leads</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: '850', color: 'var(--oda-text-primary)', lineHeight: '1.1' }}>325k</div>
                  <div style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '2px' }}>
                    <TrendingUp size={13} /> +34.8%
                  </div>
                </div>
              </div>

              {/* Right Side: Green Sales Gauge Card */}
              <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border-subtle)', borderRadius: '12px', padding: '10px 14px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--oda-text-muted)', fontWeight: '600' }}>Total Sales</div>
                <div style={{ width: '48px', height: '24px', margin: '4px auto', borderTop: '4px solid #10b981', borderLeft: '4px solid #10b981', borderRight: '4px solid #10b981', borderRadius: '24px 24px 0 0' }} />
                <div style={{ fontSize: '1.15rem', fontWeight: '850', color: 'var(--oda-text-primary)' }}>5,575</div>
                <div style={{ fontSize: '0.62rem', color: '#10b981', fontWeight: '700' }}>+34% Connection Lift</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
