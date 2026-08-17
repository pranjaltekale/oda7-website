import React, { useState, useEffect } from 'react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { SalesDashboardMockup } from '../mockups/SalesDashboardMockup';
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
} from 'lucide-react';

export const HeroSection = ({ onOpenDemo }) => {
  const [simulatedStep, setSimulatedStep] = useState(0);

  // Cycle through subtle realistic simulated product events
  useEffect(() => {
    const interval = setInterval(() => {
      setSimulatedStep((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const simulatedEvents = [
    {
      title: 'Incoming Inbound Lead',
      desc: 'A new lead is captured and routed to the right sales queue.',
      badge: 'Illustrative flow',
      icon: Bell,
      color: '#38bdf8',
    },
    {
      title: 'Local Presence Connected',
      desc: 'The agent opens the lead context, script and calling workspace.',
      badge: 'Agent view',
      icon: PhoneCall,
      color: '#10b981',
    },
    {
      title: 'Live Speech Sentiment',
      desc: 'Conversation context becomes a clear next action for follow-up.',
      badge: 'Guided action',
      icon: Sparkles,
      color: '#fbbf24',
    },
    {
      title: 'Performance View Updated',
      desc: 'Managers and leadership see the workflow state update together.',
      badge: 'Shared context',
      icon: CheckCircle2,
      color: '#34d399',
    },
  ];

  const currentEvent = simulatedEvents[simulatedStep];

  return (
    <section
      style={{
        position: 'relative',
        paddingTop: 'calc(var(--nav-height) + 40px)',
        paddingBottom: '100px',
        overflow: 'hidden',
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '920px',
          height: '440px',
          background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(37, 99, 235, 0.22), rgba(6, 182, 212, 0.08) 60%, transparent 80%)',
          pointerEvents: 'none',
          filter: 'blur(55px)',
          zIndex: 1,
        }}
      />

      <div className="container-wide" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Top Eyebrow & Hero Copy */}
        <div style={{ textAlign: 'center', maxWidth: '920px', margin: '0 auto 44px auto' }}>
          
          {/* Eyebrow badge */}
          <div style={{ display: 'inline-flex', marginBottom: '20px' }} className="animate-fadeIn">
            <Badge variant="primary" icon="Sparkles" pulse={true}>
              SALES • PEOPLE • OPERATIONS • PERFORMANCE
            </Badge>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 4.25rem)',
              fontWeight: '800',
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
              color: '#ffffff',
              marginBottom: '24px',
            }}
            className="animate-fadeInUp delay-100"
          >
            One workspace for sales, people and{' '}
            <span className="text-gradient-accent">business performance.</span>
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.3rem)',
              lineHeight: 1.6,
              color: '#94a3b8',
              marginBottom: '36px',
              maxWidth: '780px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            className="animate-fadeInUp delay-200"
          >
            ODA7 connects leads, calls, teams, attendance, compensation and analytics so every role can act from the same operational picture.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              marginBottom: '28px',
            }}
            className="animate-fadeInUp delay-300"
          >
            <Button
              to="/get-started"
              variant="primary"
              size="lg"
              iconRight="ArrowRight"
            >
              Get started
            </Button>

            <Button
              onClick={onOpenDemo}
              variant="secondary"
              size="lg"
              iconLeft="PlayCircle"
            >
              See ODA7 in action
            </Button>
            <Button to="/features" variant="ghost" size="lg" iconRight="ArrowRight">
              Explore the platform
            </Button>
          </div>

          {/* Trust proof bar */}
          <div
            style={{
              display: 'inline-flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              color: '#64748b',
              fontSize: '0.8125rem',
            }}
            className="animate-fadeInUp delay-400"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={15} color="#10b981" />
              <span>Role-based workspaces</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Zap size={15} color="#38bdf8" />
              <span>Connected operating workflows</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={15} color="#fbbf24" />
              <span>Real-time product visibility</span>
            </div>
          </div>

        </div>

        {/* Hero Product Interface Preview with Floating Simulated Events */}
        <div
          style={{
            position: 'relative',
            maxWidth: '1180px',
            margin: '0 auto',
            perspective: '1200px',
          }}
          className="animate-fadeInUp delay-500"
        >
          {/* Floating Simulated Product Event Notification Card */}
          <div
            className="floating-notif-card animate-float desktop-hide-sm"
            style={{
              top: '-24px',
              left: '-20px',
              maxWidth: '360px',
              transition: 'all 0.3s ease',
            }}
            key={simulatedStep}
          >
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: `${currentEvent.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: currentEvent.color, flexShrink: 0 }}>
              <currentEvent.icon size={18} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#fff' }}>{currentEvent.title}</span>
                <span className="badge badge-cyan" style={{ fontSize: '0.6rem', padding: '1px 6px' }}>{currentEvent.badge}</span>
              </div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: '1.3' }}>
                {currentEvent.desc}
              </div>
            </div>
          </div>

          {/* Floating Live Telemetry Badge Top Right */}
          <div
            className="floating-notif-card animate-float-reverse desktop-hide-sm"
            style={{
              top: '-20px',
              right: '-15px',
            }}
          >
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8' }}>
              <Activity size={18} />
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: '600' }}>Shared Operating View</div>
              <div style={{ fontSize: '1.05rem', fontWeight: '800', color: '#34d399' }}>Live across every role</div>
            </div>
          </div>

          {/* Core Interactive Mockup */}
          <SalesDashboardMockup interactive={true} />

          {/* Subtle Bottom Glow Rim */}
          <div
            style={{
              position: 'absolute',
              bottom: '-30px',
              left: '10%',
              right: '10%',
              height: '60px',
              background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.4), transparent)',
              filter: 'blur(25px)',
              pointerEvents: 'none',
            }}
          />
        </div>

      </div>
    </section>
  );
};
