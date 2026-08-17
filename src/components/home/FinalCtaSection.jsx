import React from 'react';
import { Button } from '../common/Button';
import {
  ShieldCheck,
  Zap,
  ArrowRight,
  PlayCircle,
  Clock,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

export const FinalCtaSection = ({ onOpenDemo }) => {
  return (
    <section
      style={{
        position: 'relative',
        padding: '120px 0 100px 0',
        overflow: 'hidden',
        background: 'var(--oda-bg)',
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '900px',
          height: '450px',
          background: 'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.2) 0%, rgba(6, 182, 212, 0.08) 50%, transparent 75%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            position: 'relative',
            borderRadius: '28px',
            overflow: 'hidden',
            border: '1px solid var(--oda-border-blue)',
            boxShadow: '0 30px 90px rgba(0, 0, 0, 0.5), 0 0 60px rgba(37, 99, 235, 0.15)',
          }}
        >
          {/* Real Team Background Photo with Dark Gradient Overlay */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
            <img
              src="/oda7-team-story.jpg"
              alt="ODA7 Revenue Team"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.35) contrast(1.1)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse at center, rgba(7, 10, 18, 0.85) 0%, rgba(3, 5, 10, 0.96) 100%)',
              }}
            />
          </div>

          {/* Content Layer */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              textAlign: 'center',
              padding: 'clamp(44px, 7vw, 72px) clamp(24px, 6vw, 64px)',
            }}
          >
            <div className="final-story-chain" aria-label="ODA7 connected operating story">
              {['Sales', 'People', 'Data', 'AI', 'One platform'].map((item, index) => <React.Fragment key={item}><span>{item}</span>{index < 4 && <i>→</i>}</React.Fragment>)}
            </div>
            {/* Eyebrow badge */}
            <div style={{ display: 'inline-flex', marginBottom: '20px' }}>
              <span className="badge badge-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={14} color="#38bdf8" />
                <span>THE SALES OPERATING SYSTEM FOR MODERN TEAMS</span>
              </span>
            </div>

            {/* Headline */}
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 5.2vw, 4rem)',
                fontWeight: '850',
                lineHeight: 1.1,
                letterSpacing: '-0.035em',
                color: '#ffffff',
                marginBottom: '20px',
              }}
            >
              Bring sales, people and performance into{' '}
              <span className="text-gradient-accent">one workspace.</span>
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                lineHeight: '1.65',
                color: '#cbd5e1',
                marginBottom: '36px',
                maxWidth: '720px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Experience the power of zero tool lag. Replace 10+ disjointed subscriptions and connect your leads, calling, agents, commissions, and analytics into one intelligent operating system.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '14px',
                marginBottom: '36px',
              }}
            >
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                iconRight="ArrowRight"
              >
                Start free
              </Button>

              <Button
                onClick={onOpenDemo}
                variant="secondary"
                size="lg"
                iconLeft="PlayCircle"
              >
                See ODA7 in action
              </Button>
            </div>

            {/* Compliance & Trust Guarantees */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '24px',
                color: '#94a3b8',
                fontSize: '0.8125rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} color="#10b981" />
                <span>SOC2 Type II Certified</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Zap size={16} color="#38bdf8" />
                <span>Instant 24-Hour Migration</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={16} color="#fbbf24" />
                <span>Full 14-Day Free Access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
