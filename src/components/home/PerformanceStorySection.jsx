import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import {
  TrendingUp,
  BarChart3,
  PhoneCall,
  Activity,
  Award,
  Zap,
  Sparkles,
  Layers,
} from 'lucide-react';

export const PerformanceStorySection = () => {
  return (
    <section className="section-wrapper" id="performance-story">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="Revenue & Floor Analytics"
          eyebrowIcon="TrendingUp"
          title="Turn floor telemetry into"
          highlightText="executive intelligence."
          description="Every dial, conversation outcome, objection, and closed deal feeds into real-time executive dashboards. Eliminate blind spots and forecast with precision."
        />

        {/* 2-Column Split: Real-World Leader Reviewing Analytics (Left) + Interactive ODA7 Analytics Console (Right) */}
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'minmax(320px, 1fr) minmax(320px, 1.4fr)',
            gap: 'clamp(32px, 5vw, 56px)',
            alignItems: 'center',
          }}
          className="mockup-grid-2col"
        >
          {/* Left Column: Business Leader Reviewing Performance with 100% Visible Face */}
          <div style={{ position: 'relative' }}>
            <div
              className="story-image-card-responsive"
            >
              <img
                src="/oda7-module-insights.jpg"
                alt="Executive Reviewing Performance Telemetry"
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
                  background: 'linear-gradient(180deg, transparent 40%, rgba(7, 10, 18, 0.9) 100%)',
                }}
              />

              {/* Floating Bottom Card */}
              <div className="story-telemetry-badge-bottom">
                <div>
                  <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: '750' }}>
                    Executive Revenue Pace
                  </div>
                  <div style={{ color: '#38bdf8', fontSize: '0.75rem', marginTop: '2px' }}>
                    $184,200 MRR Paced (114% to Target)
                  </div>
                </div>
                <span className="badge badge-emerald">
                  Real-Time Synced
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Live ODA7 Analytics Console Mockup */}
          <div>
            <div className="dashboard-mockup-frame">
              <div className="mockup-header-bar">
                <div className="mockup-dots">
                  <div className="mockup-dot red" />
                  <div className="mockup-dot yellow" />
                  <div className="mockup-dot green" />
                </div>
                <div className="mockup-title-bar">
                  <BarChart3 size={13} color="var(--oda-primary)" />
                  <span>oda7 // Performance Intelligence & Telemetry Heatmap</span>
                </div>
                <span className="badge badge-cyan" style={{ fontSize: '0.65rem' }}>
                  Live Data Mesh
                </span>
              </div>

              <div style={{ padding: '24px', background: 'var(--oda-surface)', fontSize: '0.8125rem' }}>
                {/* 3 Metric Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '20px' }}>
                  <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border)', borderRadius: '8px', padding: '14px' }}>
                    <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.7rem', textTransform: 'uppercase' }}>Dialed Connect Rate</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--oda-success)', margin: '4px 0 2px' }}>34.8%</div>
                    <div style={{ color: 'var(--oda-success)', fontSize: '0.7rem' }}>+6.2% vs baseline</div>
                  </div>
                  <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border)', borderRadius: '8px', padding: '14px' }}>
                    <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.7rem', textTransform: 'uppercase' }}>Average Talk Duration</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--oda-primary)', margin: '4px 0 2px' }}>04:12m</div>
                    <div style={{ color: 'var(--oda-text-secondary)', fontSize: '0.7rem' }}>18 Concurrent calls</div>
                  </div>
                  <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border)', borderRadius: '8px', padding: '14px' }}>
                    <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.7rem', textTransform: 'uppercase' }}>Closed Deal Velocity</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fbbf24', margin: '4px 0 2px' }}>$48,500</div>
                    <div style={{ color: 'var(--oda-success)', fontSize: '0.7rem' }}>28 Deals this week</div>
                  </div>
                </div>

                {/* Pickup Ratio Heatmap Strip */}
                <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border)', borderRadius: '10px', padding: '16px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ fontWeight: '700', color: 'var(--oda-text-primary)', fontSize: '0.85rem' }}>Hourly Floor Pickup Ratio Heatmap</span>
                    <span className="badge badge-emerald" style={{ fontSize: '0.65rem' }}>Peak: 2 PM - 4 PM</span>
                  </div>

                  {/* Hourly Bars */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '6px', alignItems: 'end', height: '60px', padding: '0 4px' }}>
                    {[22, 28, 45, 68, 54, 88, 92, 60].map((val, i) => (
                      <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', height: '100%', justifyContent: 'flex-end' }}>
                        <div style={{ width: '100%', height: `${val}%`, background: val > 80 ? 'linear-gradient(180deg, #10b981, #059669)' : val > 50 ? 'linear-gradient(180deg, #38bdf8, #2563eb)' : 'rgba(37, 99, 235, 0.15)', borderRadius: '4px' }} />
                        <span style={{ fontSize: '0.65rem', color: 'var(--oda-text-muted)' }}>{9 + i}h</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Insight Pill */}
                <div style={{ background: 'var(--oda-primary-soft)', border: '1px solid var(--oda-border-blue)', borderRadius: '8px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Sparkles size={16} color="var(--oda-primary)" />
                  <span style={{ color: 'var(--oda-text-secondary)', fontSize: '0.78rem' }}>
                    <strong style={{ color: 'var(--oda-primary)' }}>AI Recommendation:</strong> Shift 4 reps from morning outreach to 2 PM Austin Texas local presence pod to capture +18% pickup lift.
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
