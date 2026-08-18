import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import {
  AlertCircle,
  XCircle,
  Clock,
  Shuffle,
  Users,
  Activity,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const HumanProblemStorySection = () => {
  return (
    <section className="section-wrapper" id="operational-friction">
      <div className="container-wide">
        
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.08fr)',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'center',
          }}
          className="mockup-grid-2col"
        >
          {/* Left Column: Real Workplace Photography with Real Human Emotion */}
          <div style={{ position: 'relative' }}>
            
            {/* Real Workplace Photo Container with Subtle Glow */}
            <div
              className="story-image-frame story-image-problem story-image-card-responsive"
            >
              <img
                src="/oda7-operational-friction.png"
                alt="Operations professional reconciling work across a laptop, phone and paper notes"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 25%',
                  display: 'block',
                  filter: 'brightness(0.92) contrast(1.05)',
                }}
              />

              {/* Subtle dark gradient overlay at bottom */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(7, 9, 14, 0.85) 100%)',
                  pointerEvents: 'none',
                }}
              />

              {/* In-Image Floating Badge Bottom */}
              <div className="story-telemetry-badge-bottom">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
                    <Activity size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: '750', color: '#fff', fontSize: '0.85rem' }}>
                      Three operating views, no shared context
                    </div>
                    <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>
                      Illustrative inside-sales pod
                    </div>
                  </div>
                </div>

                <span className="badge badge-emerald" style={{ fontSize: '0.6875rem' }}>
                  Context fragmented
                </span>
              </div>
            </div>

            {/* Floating Top Right Pill */}
            <div
              className="floating-notif-card animate-float desktop-hide-sm"
              style={{
                top: '-18px',
                right: '-16px',
                padding: '10px 16px',
                zIndex: 10,
              }}
            >
              <Sparkles size={16} color="var(--oda-primary)" />
              <span style={{ fontSize: '0.8rem', fontWeight: '750', color: 'var(--oda-text-primary)' }}>
                One Operating Picture
              </span>
            </div>
          </div>

          {/* Right Column: Narrative Storytelling */}
          <div>
            <span className="badge badge-primary" style={{ marginBottom: '14px' }}>
              The operational problem
            </span>

            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.1rem)',
                fontWeight: '850',
                color: 'var(--oda-text-primary)',
                lineHeight: 1.12,
                letterSpacing: '-0.03em',
                marginBottom: '20px',
              }}
            >
              The work moves quickly.{' '}
              <span className="text-gradient-accent">The context does not.</span>
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--oda-text-secondary)',
                lineHeight: '1.7',
                marginBottom: '28px',
              }}
            >
              Leads, conversations, team availability and compensation often live in separate systems. People spend time rebuilding the story instead of moving the work forward.
            </p>

            {/* 3 Real-World Friction Pillars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ef4444', flexShrink: 0, marginTop: '2px' }}>
                  <AlertCircle size={15} />
                </div>
                <div>
                  <div style={{ fontWeight: '750', color: 'var(--oda-text-primary)', fontSize: '0.95rem' }}>
                    Repeated context switching
                  </div>
                  <div style={{ color: 'var(--oda-text-secondary)', fontSize: '0.85rem', lineHeight: '1.5', marginTop: '2px' }}>
                    Reps copy details between tools while the customer waits for the next action.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fbbf24', flexShrink: 0, marginTop: '2px' }}>
                  <AlertCircle size={15} />
                </div>
                <div>
                  <div style={{ fontWeight: '750', color: 'var(--oda-text-primary)', fontSize: '0.95rem' }}>
                    Delayed manager visibility
                  </div>
                  <div style={{ color: 'var(--oda-text-secondary)', fontSize: '0.85rem', lineHeight: '1.5', marginTop: '2px' }}>
                    Managers see the outcome after the moment for useful coaching has already passed.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(37, 99, 235, 0.15)', border: '1px solid rgba(37, 99, 235, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--oda-primary)', flexShrink: 0, marginTop: '2px' }}>
                  <CheckCircle2 size={15} />
                </div>
                <div>
                  <div style={{ fontWeight: '750', color: 'var(--oda-text-primary)', fontSize: '0.95rem' }}>
                    One operating picture
                  </div>
                  <div style={{ color: 'var(--oda-text-secondary)', fontSize: '0.85rem', lineHeight: '1.5', marginTop: '2px' }}>
                    ODA7 keeps customer, team and performance context connected as responsibility changes.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
