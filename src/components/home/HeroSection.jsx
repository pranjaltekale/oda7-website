import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
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
      title: 'Inbound Lead Prioritized',
      desc: 'Sarah Jenkins (Logix Ent.) • Win Prob: 96% • Local 512 match',
      badge: 'My Queue 0.8s SLA',
      icon: PhoneCall,
      color: '#38bdf8',
      role: 'Sales SDR',
      metric: '<15s Response',
    },
    {
      title: 'Active 0.8s WebRTC Call',
      desc: 'Local Presence connected • Dual-channel recording active',
      badge: 'Live Audio Stream',
      icon: Volume2,
      color: '#10b981',
      role: 'Inside Sales',
      metric: '+34.8% Pickup',
    },
    {
      title: 'AI Objection Battlecard',
      desc: 'Contract objection detected → Suggested: 2-yr buyout credit',
      badge: 'Real-Time Copilot',
      icon: Sparkles,
      color: '#fbbf24',
      role: 'AI Engine',
      metric: '42ms Latency',
    },
    {
      title: 'Manager Whisper Coaching',
      desc: 'Supervisor Marcus streaming winning cue to rep headset',
      badge: '24ms Whisper Active',
      icon: Headphones,
      color: '#a855f7',
      role: 'Floor Command',
      metric: 'Rescue Deal',
    },
  ];

  const currentEvent = simulatedEvents[simulatedStep];

  return (
    <section
      ref={heroRef}
      className="hero-motion-scene"
      style={{
        position: 'relative',
        paddingTop: 'calc(var(--nav-height) + 40px)',
        paddingBottom: '90px',
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
          maxWidth: '1440px',
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
            gridTemplateColumns: 'minmax(320px, 1.12fr) minmax(320px, 1.08fr)',
            gap: 'clamp(36px, 5vw, 64px)',
            alignItems: 'center',
          }}
          className="mockup-grid-2col"
        >
          {/* LEFT: Copy, Headline, CTAs, Trust Proof */}
          <div className="hero-copy-layer">
            {/* Eyebrow badge */}
            <div style={{ display: 'inline-flex', marginBottom: '20px' }} className="animate-fadeIn">
              <Badge variant="primary" icon="Sparkles" pulse={true}>
                THE SALES OPERATING SYSTEM FOR MODERN TEAMS • BIZZFLY
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
              ODA7 unifies sales execution, telephony calling, leads, teams, shift attendance, automated commission payroll, and executive analytics into one continuous synchronous data mesh. Replace 10+ disconnected tools and empower your entire revenue floor.
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
                Start free
              </Button>

              <Button
                onClick={onOpenDemo}
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
                <span>SOC2 Type II & GDPR Certified</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Zap size={16} color="var(--oda-primary)" />
                <span>Instant 24-Hour Migration</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={16} color="#fbbf24" />
                <span>14-Day Free Access</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Live Interactive Product Environment with Real Workplace Context */}
          <div style={{ position: 'relative' }} className="hero-product-layer animate-fadeInUp delay-500">

            {/* View Selector Tabs */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '6px', marginBottom: '12px' }}>
              {heroViews.map((hv) => {
                const IconComp = hv.icon;
                const isSelected = activeHeroView === hv.id;
                return (
                  <button
                    key={hv.id}
                    onClick={() => setActiveHeroView(hv.id)}
                    className="tab-pill-interactive"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '7px 13px',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      background: isSelected ? 'var(--oda-primary)' : 'var(--oda-surface)',
                      border: isSelected ? '1px solid var(--oda-primary-light)' : '1px solid var(--oda-border)',
                      color: isSelected ? '#ffffff' : 'var(--oda-text-secondary)',
                      boxShadow: isSelected ? '0 4px 12px rgba(37, 99, 235, 0.28)' : '0 1px 3px rgba(0,0,0,0.05)',
                    }}
                  >
                    <IconComp size={13} />
                    <span>{hv.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Main Interactive Product Frame with 3D Tilt Physics */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="card-interactive-lift image-interactive-zoom"
              style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid var(--oda-border-blue)',
                boxShadow: '0 25px 70px rgba(0, 0, 0, 0.45)',
                height: '520px',
                transition: 'transform 250ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <img
                src={
                  activeHeroView === 'manager'
                    ? 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80'
                    : activeHeroView === 'executive'
                    ? 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=80'
                    : 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80'
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

              {/* Floating Top Left Simulated Product Event (Interactive Clickable Pill) */}
              <div
                onClick={() => setSimulatedStep((prev) => (prev + 1) % 4)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'rgba(11, 15, 23, 0.94)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  maxWidth: '320px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
                  cursor: 'pointer',
                }}
                key={`${activeHeroView}-${simulatedStep}`}
                className="animate-fadeIn"
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
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(16, 185, 129, 0.94)',
                  color: '#ffffff',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '800',
                  boxShadow: '0 4px 14px rgba(16, 185, 129, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <div className="audio-wave-live" style={{ filter: 'brightness(1.5)' }}>
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <span>+34.8% Pickup Lift</span>
              </div>

              {/* Floating Bottom ODA7 Telemetry Panel */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  background: 'rgba(11, 15, 23, 0.94)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  padding: '16px 20px',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="status-dot green" />
                    <span style={{ color: '#fff', fontWeight: '750', fontSize: '0.85rem' }}>
                      {activeHeroView === 'manager'
                        ? 'Supervisor Floor Cockpit Alpha'
                        : activeHeroView === 'executive'
                        ? 'Master Executive Revenue Telemetry'
                        : 'Live ODA7 Inside Sales Pod Alpha'}
                    </span>
                  </div>
                  <span className="badge badge-cyan" style={{ fontSize: '0.65rem' }}>
                    {activeHeroView === 'manager' ? '24ms WebRTC Stream' : activeHeroView === 'executive' ? '100% Tenant Isolation' : '0.8s WebRTC Dialing'}
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', paddingTop: '8px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div>
                    <div style={{ color: '#94a3b8', fontSize: '0.68rem', textTransform: 'uppercase' }}>Active Calls</div>
                    <div style={{ color: '#38bdf8', fontWeight: '800', fontSize: '0.95rem' }}>18 Connected</div>
                  </div>
                  <div>
                    <div style={{ color: '#94a3b8', fontSize: '0.68rem', textTransform: 'uppercase' }}>Queue Win Score</div>
                    <div style={{ color: '#10b981', fontWeight: '800', fontSize: '0.95rem' }}>96 / 100</div>
                  </div>
                  <div>
                    <div style={{ color: '#94a3b8', fontSize: '0.68rem', textTransform: 'uppercase' }}>Daily Closed ARR</div>
                    <div style={{ color: '#fbbf24', fontWeight: '800', fontSize: '0.95rem' }}>+$14,200</div>
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
