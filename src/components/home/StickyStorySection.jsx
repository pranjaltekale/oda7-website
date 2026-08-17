import React, { useEffect, useRef, useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import {
  Users,
  PhoneCall,
  Sparkles,
  Inbox,
  FileText,
  DollarSign,
  TrendingUp,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  Layers,
} from 'lucide-react';

export const StickyStorySection = ({ onOpenDemo }) => {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);

  const steps = [
    {
      id: 'leads',
      title: 'Step 1: Automated Intake & My Queue Prioritization',
      icon: Users,
      headline: 'Prospects arrive enriched, scored, and routed without human delay.',
      description: 'Incoming prospects from webhooks, ads, and cold outreach land directly into an intelligent My Queue. Algorithmic scoring eliminates rep cherry-picking and guarantees sub-15s speed-to-lead SLAs.',
      metric: '<15s Speed to Lead SLA',
      preview: {
        title: 'Priority Queue Telemetry',
        badge: 'Live Ingestion Mesh',
        content: '303 Inbound Leads Synchronized',
        detail: 'Dynamic deal probability score calculated in 42ms.',
      },
    },
    {
      id: 'dialer',
      title: 'Step 2: 0.8s Local Presence WebRTC Dialing',
      icon: PhoneCall,
      headline: 'Connect in seconds with localized numbers and crystal-clear audio.',
      description: 'Agents make high-velocity calls directly in the browser with automated area-code matching that lifts pickup rates by +34%. Calls feature 1-click voicemail drop and live dual-channel speech recording.',
      metric: '+34.8% Pickup Ratio Lift',
      preview: {
        title: 'WebRTC Telephony Core',
        badge: '0.8s Carrier Handshake',
        content: 'Direct SIP Trunk Connected',
        detail: 'Caller ID automatically matches lead geographic area code.',
      },
    },
    {
      id: 'scripts',
      title: 'Step 3: Dynamic Branching Talk Tracks & Real-time AI',
      icon: Sparkles,
      headline: 'Live battlecards pop up the moment customer objections are surfaced.',
      description: 'Adaptive qualification scripts guide SDRs through complex disclosures. If a prospect brings up pricing or a competitor, speech sentiment AI delivers winning rebuttals right inside the call console.',
      metric: 'Real-time Objection Buster',
      preview: {
        title: 'Adaptive Scripting Engine',
        badge: 'Live Speech Sentiment AI',
        content: 'Pricing Objection Battlecard Active',
        detail: 'Recommended talk track: Highlight 60% lower TCO and unified mesh.',
      },
    },
    {
      id: 'messaging',
      title: 'Step 4: Official 2-Way WhatsApp & Omni-Inbox Follow-up',
      icon: Inbox,
      headline: 'Every customer touchpoint preserved in one central timeline.',
      description: 'No more fragmented WhatsApp chats on personal phones. Official WhatsApp Business API, SMS, and email threads exist in a shared customer timeline accessible to both reps and managers.',
      metric: 'Zero Lost Conversation History',
      preview: {
        title: 'Omnichannel Customer Inbox',
        badge: 'Official WhatsApp API',
        content: '2-Way Verified Business Thread',
        detail: 'Automated follow-up template sent with 1-click delivery receipt.',
      },
    },
    {
      id: 'floor',
      title: 'Step 5: Live Floor Command & 1-Click Whisper Coaching',
      icon: TrendingUp,
      headline: 'Supervisors rescue pivotal negotiations live without disrupting the call.',
      description: 'Managers monitor active floor queues and listen silently with 1-click. When a junior rep fumbles an enterprise objection, the supervisor whispers direct guidance into their headset without the client hearing.',
      metric: '24ms Headset Whisper Stream',
      preview: {
        title: 'Supervisor Live Cockpit',
        badge: 'Silent Listen & Whisper',
        content: '18 Active Calls Across Floor',
        detail: 'Supervisor whisper streaming directly into Rep Alex headset.',
      },
    },
    {
      id: 'payroll',
      title: 'Step 6: Instant Closed-Won Commission Wallet & Payslips',
      icon: DollarSign,
      headline: 'Eliminate spreadsheet reconciliation battles permanently.',
      description: 'The instant an opportunity flips to Closed-Won, ODA7 calculates tier accelerators, credits the rep’s digital wallet, and prepares itemized PDF payslips ready for batch payroll dispatch.',
      metric: 'Zero End-of-Month Payroll Lag',
      preview: {
        title: 'Automated Commission Engine',
        badge: 'Closed-Won Deal Event',
        content: '+$1,420 Commission Tier Credited',
        detail: 'Itemized payslip automatically updated and floor celebratory banner broadcasted.',
      },
    },
    {
      id: 'executive',
      title: 'Step 7: Super Admin & Multi-Tenant SaaS Scale',
      icon: ShieldCheck,
      headline: 'Scale to hundreds of organizations with complete isolation.',
      description: 'Govern multiple client organizations, manage tenant billing subscriptions, enforce global IP whitelisting, and monitor platform-level ARR telemetry from a master executive console.',
      metric: 'Organization-level controls',
      preview: {
        title: 'Super Admin Multi-Tenant Master',
        badge: 'Plans and subscriptions overview',
        content: '48 Provisioned Client Organizations',
        detail: 'Audit, IP, branding and notification controls are available to platform operators.',
      },
    },
  ];

  const current = steps[activeStep];

  useEffect(() => {
    if (window.matchMedia('(max-width: 767px), (prefers-reduced-motion: reduce)').matches) return undefined;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveStep(Number(entry.target.dataset.storyIndex));
      });
    }, { rootMargin: '-36% 0px -44% 0px', threshold: 0.01 });

    stepRefs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-wrapper section-alt" id="lifecycle-steps">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="The Full Operating Lifecycle"
          eyebrowIcon="Sparkles"
          title="From cold lead to instant payout."
          highlightText="Step by step."
          description="Click or scroll through the 7 stages of the oda7 sales operating lifecycle to see how every rep, manager, and administrator operates in unison."
        />

        {/* 2-Column Split Experience */}
        <div className="sticky-story-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 460px) 1fr', gap: '48px', alignItems: 'start' }}>
          
          {/* Left Column: Interactive Step Selector */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isActive = activeStep === idx;

              return (
                <button
                  key={step.id}
                  ref={(node) => { stepRefs.current[idx] = node; }}
                  data-story-index={idx}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className="sticky-story-step"
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    minHeight: isActive ? '240px' : '116px',
                    padding: '20px',
                    borderRadius: '12px',
                    background: isActive ? 'var(--oda-primary-soft)' : 'var(--oda-surface)',
                    border: isActive ? '1px solid var(--oda-border-blue)' : '1px solid var(--oda-border)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-normal)',
                    boxShadow: isActive ? '0 10px 25px rgba(37, 99, 235, 0.12)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: isActive ? 'var(--oda-primary)' : 'var(--oda-surface-soft)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isActive ? '#fff' : 'var(--oda-text-muted)',
                      }}>
                        <IconComp size={16} />
                      </div>
                      <span style={{ fontWeight: '700', color: isActive ? 'var(--oda-primary)' : 'var(--oda-text-primary)', fontSize: '0.95rem' }}>
                        {step.title}
                      </span>
                    </div>

                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: isActive ? 'var(--oda-primary)' : 'var(--oda-text-muted)' }}>
                      0{idx + 1}
                    </span>
                  </div>

                  {isActive && (
                    <div className="animate-fadeIn" style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--oda-border-subtle)' }}>
                      <div style={{ fontWeight: '600', color: 'var(--oda-primary)', fontSize: '0.875rem', marginBottom: '6px' }}>
                        {step.headline}
                      </div>
                      <p style={{ color: 'var(--oda-text-secondary)', fontSize: '0.8125rem', lineHeight: '1.6', marginBottom: '10px' }}>
                        {step.description}
                      </p>
                      <span className="badge badge-emerald" style={{ fontSize: '0.7rem' }}>
                        {step.metric}
                      </span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Sticky Product Interface Preview */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <div
              className="feature-showcase-panel animate-fadeIn"
              style={{
                borderRadius: '16px',
                padding: '32px',
                minHeight: '440px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              key={current.id}
            >
              {/* Top Banner */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span className="badge badge-cyan">{current.title}</span>
                  <span className="badge badge-emerald">{current.metric}</span>
                </div>

                <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--oda-text-primary)', marginBottom: '8px' }}>
                  {current.preview.title}
                </h3>
                <div style={{ color: 'var(--oda-primary)', fontWeight: '600', fontSize: '0.95rem', marginBottom: '16px' }}>
                  {current.preview.badge}
                </div>

                {/* Core Live Card Preview */}
                <div style={{ background: 'var(--oda-surface)', border: '1px solid var(--oda-border)', borderRadius: '12px', padding: '20px', marginBottom: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
                  <div style={{ color: 'var(--oda-text-primary)', fontWeight: '700', fontSize: '1.05rem', marginBottom: '8px' }}>
                    {current.preview.content}
                  </div>
                  <div style={{ color: 'var(--oda-text-secondary)', fontSize: '0.875rem', lineHeight: '1.5' }}>
                    {current.preview.detail}
                  </div>
                </div>
              </div>

              {/* Action Trigger Footer */}
              <div style={{ paddingTop: '20px', borderTop: '1px solid var(--oda-border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.8rem' }}>
                  Step {activeStep + 1} of {steps.length} in operating sequence
                </div>

                <button
                  onClick={onOpenDemo}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    background: 'var(--oda-primary)',
                    color: '#fff',
                    fontWeight: '600',
                    fontSize: '0.85rem',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <span>Experience in Interactive Tour</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
