'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { LightTabIndicator } from '../common/LightTabIndicator';
import { InteractiveTiltCard } from '../common/InteractiveTiltCard';
import { ProductStateTransition } from '../common/ProductStateTransition';
import {
  Sparkles,
  PlayCircle,
  TrendingUp,
  ShieldCheck,
  Zap,
  PhoneCall,
  Clock,
  ArrowRight,
  UserCheck,
  CheckCircle2,
  Bell,
  Activity,
  Users,
  Layers,
  Headphones,
  BarChart3,
  Volume2,
} from 'lucide-react';

export const HeroSection = ({ onOpenDemo }) => {
  const [activeHeroView, setActiveHeroView] = useState('sales'); // 'sales' | 'manager' | 'executive'
  const [simulatedStep, setSimulatedStep] = useState(0);
  const heroRef = useRef(null);
  const cardRef = useRef(null);

  // Cycle through realistic subtle simulated product events
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const interval = setInterval(() => {
      setSimulatedStep((prev) => (prev + 1) % 4);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const node = heroRef.current;
    if (!node || window.matchMedia('(max-width: 767px), (prefers-reduced-motion: reduce)').matches) return undefined;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / Math.max(rect.height, 1)));
      node.style.setProperty('--hero-scroll-progress', progress.toFixed(3));
    };
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); if (frame) window.cancelAnimationFrame(frame); };
  }, []);

  // Subtle desktop pointer tilt interaction
  const handleMouseMove = (e) => {
    if (!cardRef.current || window.matchMedia('(max-width: 1024px)').matches) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = -(y / rect.height) * 4;
    const rotateY = (x / rect.width) * 4;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    }
  };

  const heroViews = [
    { id: 'sales', label: 'Sales SDR View', icon: PhoneCall },
    { id: 'manager', label: 'Floor Supervisor', icon: Headphones },
    { id: 'executive', label: 'Executive BI', icon: BarChart3 },
  ];

  const simulatedEvents = [
    {
      title: 'New lead assigned',
      desc: 'Source, owner and next action are visible in one queue.',
      badge: 'Priority queue',
      icon: PhoneCall,
      color: '#38bdf8',
      role: 'Sales SDR',
      metric: 'Ready to contact',
    },
    {
      title: 'Customer conversation active',
      desc: 'Lead context and call controls stay in the same workspace.',
      badge: 'Live conversation',
      icon: Volume2,
      color: '#10b981',
      role: 'Inside Sales',
      metric: 'Context connected',
    },
    {
      title: 'Relevant guidance surfaced',
      desc: 'The rep sees a useful response without leaving the call view.',
      badge: 'In-workflow assist',
      icon: Sparkles,
      color: '#fbbf24',
      role: 'AI Engine',
      metric: 'Guidance ready',
    },
    {
      title: 'Manager coaching available',
      desc: 'The supervisor can review the moment and support the rep.',
      badge: 'Manager context',
      icon: Headphones,
      color: '#a855f7',
      role: 'Floor Command',
      metric: 'Support available',
    },
  ];

  const currentEvent = simulatedEvents[simulatedStep];

  return (
    <section
      ref={heroRef}
      className="hero-motion-scene"
      style={{
        position: 'relative',
        paddingTop: 'calc(var(--nav-height) + clamp(20px, 3.5vw, 40px))',
        paddingBottom: 'clamp(36px, 5vw, 64px)',
        overflow: 'hidden',
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1360px',
          height: '100%',
          backgroundImage: 'radial-gradient(ellipse 70% 50% at 50% 20%, rgba(37, 99, 235, 0.22), rgba(6, 182, 212, 0.07) 60%, transparent 80%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div className="container-wide" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* 2-Column Hero Split: Left Text/CTA + Right Interactive Live Product Environment */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.08fr) minmax(0, 1.12fr)',
            gap: 'clamp(32px, 4.5vw, 64px)',
            alignItems: 'center',
          }}
          className="mockup-grid-2col"
        >
          {/* LEFT: Copy, Headline, CTAs, Trust Proof */}
          <div className="hero-copy-layer">
            {/* Eyebrow badge */}
            <div style={{ display: 'inline-flex', marginBottom: '20px' }} className="animate-fadeIn">
              <Badge variant="primary" icon="Sparkles" pulse={true}>
                ODA7 CONNECTED OPERATING WORKSPACE
              </Badge>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4.8vw, 3.85rem)',
                fontWeight: '850',
                lineHeight: 1.08,
                letterSpacing: '-0.035em',
                color: 'var(--oda-text-primary)',
                marginBottom: '20px',
              }}
              className="animate-fadeInUp delay-100"
            >
              One workspace for{' '}
              <span className="text-gradient-accent">sales, people and business performance.</span>
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                lineHeight: 1.6,
                color: 'var(--oda-text-secondary)',
                marginBottom: '32px',
              }}
              className="animate-fadeInUp delay-200"
            >
              Bring customer conversations, team operations, compensation workflows and decision-ready insight into one role-aware system.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '14px',
                marginBottom: '32px',
              }}
              className="animate-fadeInUp delay-300"
            >
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                iconRight="ArrowRight"
                className="btn-tactile"
              >
                Plan your workspace
              </Button>

              <Button
                demo
                variant="secondary"
                size="lg"
                iconLeft="PlayCircle"
                className="btn-tactile"
              >
                See ODA7 in action
              </Button>
            </div>

            {/* Trust proof bar */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '20px',
                color: 'var(--oda-text-muted)',
                fontSize: '0.8125rem',
              }}
              className="animate-fadeInUp delay-400"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} color="#10b981" />
                <span>Role-aware access</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Zap size={16} color="var(--oda-primary)" />
                <span>Connected workflows</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={16} color="#fbbf24" />
                <span>Illustrative product preview</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Live Interactive Product Environment with Real Workplace Context */}
          <div style={{ position: 'relative' }} className="hero-product-layer animate-fadeInUp delay-500">

            {/* View Selector Tabs with Travelling Spring Pill */}
            <div className="tabs-scroll-wrapper hero-tabs-wrapper" style={{ justifyContent: 'flex-end', marginBottom: '14px' }}>
              <LightTabIndicator
                tabs={heroViews}
                activeTab={activeHeroView}
                onChange={setActiveHeroView}
                variant="pill"
                className="hero-view-light-tabs"
              />
            </div>

            {/* Main Interactive Product Frame with 3D Tilt Physics */}
            <InteractiveTiltCard
              maxTilt={3.2}
              scale={1.012}
              className="hero-interactive-card"
            >
              <ProductStateTransition activeKey={activeHeroView} style={{ height: '100%' }}>
                <img
                  className="tilt-parallax-img"
                  src={
                    activeHeroView === 'manager'
                      ? '/oda7-scenario-callcenter.jpg'
                      : activeHeroView === 'executive'
                      ? '/oda7-module-insights.jpg'
                      : '/oda7-module-sales.jpg'
                  }
                  alt="ODA7 Live Workspace Environment"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    display: 'block',
                    filter: 'contrast(1.05) brightness(0.94)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 35%, rgba(7, 10, 18, 0.92) 100%)',
                    pointerEvents: 'none',
                  }}
                />
              </ProductStateTransition>

              {/* Floating Top Left Simulated Product Event (Interactive Clickable Pill) */}
              <div
                onClick={() => setSimulatedStep((prev) => (prev + 1) % 4)}
                className="hero-event-badge animate-fadeIn"
                key={`${activeHeroView}-${simulatedStep}`}
                title="Click to cycle next live telemetry event"
              >
                <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: `${currentEvent.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: currentEvent.color, flexShrink: 0 }}>
                  <currentEvent.icon size={16} />
                </div>
                <div>
                  <div style={{ color: '#fff', fontSize: '0.785rem', fontWeight: '750' }}>{currentEvent.title}</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.7rem' }}>{currentEvent.desc}</div>
                </div>
              </div>

              {/* Floating Top Right Live Audio / Metric Badge */}
              <div className="hero-live-badge">
                <div className="audio-wave-live" style={{ filter: 'brightness(1.5)' }}>
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <span>Live workflow context</span>
              </div>

              {/* Floating Bottom ODA7 Telemetry Panel */}
              <div className="hero-telemetry-panel">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', gap: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                    <span className="status-dot green" style={{ flexShrink: 0 }} />
                    <span style={{ color: '#fff', fontWeight: '750', fontSize: '0.85rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {activeHeroView === 'manager'
                        ? 'Manager coaching view'
                        : activeHeroView === 'executive'
                        ? 'Leadership operating view'
                        : 'Sales execution workspace'}
                    </span>
                  </div>
                  <span className="badge badge-cyan" style={{ fontSize: '0.65rem', flexShrink: 0 }}>
                    {activeHeroView === 'manager' ? 'Coaching context' : activeHeroView === 'executive' ? 'Cross-team visibility' : 'Conversation active'}
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', paddingTop: '8px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }} className="hero-telemetry-grid">
                  <div>
                    <div style={{ color: '#94a3b8', fontSize: '0.68rem', textTransform: 'uppercase' }}>Current work</div>
                    <div style={{ color: '#38bdf8', fontWeight: '800', fontSize: '0.95rem' }}>Conversation</div>
                  </div>
                  <div>
                    <div style={{ color: '#94a3b8', fontSize: '0.68rem', textTransform: 'uppercase' }}>Owner</div>
                    <div style={{ color: '#10b981', fontWeight: '800', fontSize: '0.95rem' }}>Assigned</div>
                  </div>
                  <div>
                    <div style={{ color: '#94a3b8', fontSize: '0.68rem', textTransform: 'uppercase' }}>Next action</div>
                    <div style={{ color: '#fbbf24', fontWeight: '800', fontSize: '0.95rem' }}>Follow up</div>
                  </div>
                </div>
              </div>

            </InteractiveTiltCard>

          </div>

        </div>

      </div>
    </section>
  );
};
