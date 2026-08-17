import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import {
  UserCheck,
  PhoneCall,
  Sparkles,
  Users,
  BarChart3,
  DollarSign,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export const StickyStorySection = ({ onOpenDemo }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'leads',
      title: 'Step 1: Intelligent Ingestion & Dynamic Queue',
      icon: UserCheck,
      headline: 'Never let high-intent inbound prospects cool off.',
      description: 'oda7 enriches every lead in real-time, verifying phone carrier validity, calculating timezone windows, and algorithmically prioritizing the lead at the top of your top rep’s queue in under 800ms.',
      metric: '<15s Inbound Speed-to-Lead',
      preview: {
        title: 'Priority Lead Card Ingested',
        badge: 'Tier 1 Priority (96/100 Intent)',
        content: 'Sarah Jenkins • VP Operations, Logix Ent. • Austin, TX',
        detail: 'Enriched firmographics, decision-maker status verified, CRM duplicate checks passed.',
      },
    },
    {
      id: 'dialer',
      title: 'Step 2: Sub-Second Predictive Dialer & Local Presence',
      icon: PhoneCall,
      headline: 'Connect in 0.8s with matched local area codes.',
      description: 'No clunky softphone extensions. Our native WebRTC dialer spins up crystal clear audio, auto-matches local area caller IDs to increase pickup rates by 34%, and provides interactive branching call scripts.',
      metric: 'Lead and call context together',
      preview: {
        title: 'Active HD WebRTC Call Session',
        badge: 'Local Presence 512 Match (Connected)',
        content: 'Dynamic Script: Enterprise B2B Qualification v3',
        detail: 'Crystal audio with sub-second connection time and automated 1-click voicemail drop.',
      },
    },
    {
      id: 'ai',
      title: 'Step 3: Live AI Speech Analytics & Objection Buster',
      icon: Sparkles,
      headline: 'A superhuman sales copilot listening in real-time.',
      description: 'As your prospect speaks, oda7 analyzes sentiment in real-time. When a competitor or pricing objection is voiced, battle-tested counter strategies flash onto the screen with winning talk tracks.',
      metric: 'Real-time Live Battlecards',
      preview: {
        title: 'AI Objection Detected',
        badge: 'Competitor Mention: RingCentral Contract',
        content: 'Suggested next step: clarify the objection and schedule the right follow-up.',
        detail: 'Sentiment shifts immediately from skeptical to positive (+78 rating).',
      },
    },
    {
      id: 'team',
      title: 'Step 4: Live Floor Queue Command & Whisper Coaching',
      icon: Users,
      headline: 'Supervisors have total visibility over every conversation.',
      description: 'Managers monitor active queues, agent statuses, and conversion benchmarks live. Supervisors can drop into any call with 1-click silent listening or direct rep headset whispering.',
      metric: 'Zero Floor Idle Time',
      preview: {
        title: 'Manager Floor Console',
        badge: 'Whisper Coaching Active',
        content: 'Floor Load: 18 Active Calls • 0 Waiting in Queue',
        detail: 'Supervisor whisper coaches rep to secure annual commitment with setup fee waiver.',
      },
    },
    {
      id: 'analytics',
      title: 'Step 5: Telephony Heatmaps & Root Cause BI',
      icon: BarChart3,
      headline: 'Turn conversational telemetry into strategic revenue.',
      description: 'Visualize hour-by-hour pickup heatmaps, carrier connection health, and rep conversion pacing. Use natural language AI to instantly query your revenue data with Explain My Numbers.',
      metric: 'Natural Language SQL BI',
      preview: {
        title: 'Explain My Numbers Synthesis',
        badge: 'Peak Pickup Window: 10 AM - 12 PM CST',
        content: 'Query: "Why did conversions spike in Mid-Market?"',
        detail: 'Root Cause: Automated WhatsApp demo follow-ups increased meeting attendance by 48%.',
      },
    },
    {
      id: 'compensation',
      title: 'Step 6: Automated Commissions & Itemized Payroll',
      icon: DollarSign,
      headline: 'Real-time earnings transparency fuels unstoppable momentum.',
      description: 'The instant a deal closes, rep commissions calculate automatically based on custom tiered accelerators and SPIFF rules. Generate itemized digital payslips with zero disputes.',
      metric: 'Zero Commission Disputes',
      preview: {
        title: 'Commission Engine',
        badge: 'Compensation workflow updated',
        content: '120% Quota Accelerator Bonus Triggered',
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

  return (
    <section className="section-wrapper" style={{ background: '#07090e' }}>
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
                <div
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  style={{
                    padding: '20px',
                    borderRadius: '12px',
                    background: isActive ? 'rgba(37, 99, 235, 0.15)' : 'rgba(14, 19, 31, 0.4)',
                    border: isActive ? '1px solid rgba(59, 130, 246, 0.5)' : '1px solid rgba(255, 255, 255, 0.05)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-normal)',
                    boxShadow: isActive ? '0 10px 25px rgba(0,0,0,0.5)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: isActive ? 'var(--accent-primary)' : 'rgba(255,255,255,0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                      }}>
                        <IconComp size={16} />
                      </div>
                      <span style={{ fontWeight: '700', color: isActive ? '#fff' : '#cbd5e1', fontSize: '0.95rem' }}>
                        {step.title}
                      </span>
                    </div>

                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: isActive ? '#38bdf8' : '#64748b' }}>
                      0{idx + 1}
                    </span>
                  </div>

                  {isActive && (
                    <div className="animate-fadeIn" style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                      <div style={{ fontWeight: '600', color: '#38bdf8', fontSize: '0.875rem', marginBottom: '6px' }}>
                        {step.headline}
                      </div>
                      <p style={{ color: '#94a3b8', fontSize: '0.8125rem', lineHeight: '1.6', marginBottom: '10px' }}>
                        {step.description}
                      </p>
                      <span className="badge badge-emerald" style={{ fontSize: '0.7rem' }}>
                        {step.metric}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Product Interface Preview */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(14, 23, 42, 0.95) 0%, rgba(7, 10, 18, 0.98) 100%)',
                border: '1px solid rgba(59, 130, 246, 0.35)',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 50px -10px rgba(37, 99, 235, 0.2)',
                minHeight: '440px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              key={current.id}
              className="animate-fadeIn"
            >
              {/* Top Banner */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span className="badge badge-cyan">{current.title}</span>
                  <span className="badge badge-emerald">{current.metric}</span>
                </div>

                <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#fff', marginBottom: '8px' }}>
                  {current.preview.title}
                </h3>
                <div style={{ color: '#38bdf8', fontWeight: '600', fontSize: '0.95rem', marginBottom: '16px' }}>
                  {current.preview.badge}
                </div>

                {/* Core Live Card Preview */}
                <div style={{ background: 'rgba(7, 10, 18, 0.9)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px', marginBottom: '16px' }}>
                  <div style={{ color: '#ffffff', fontWeight: '700', fontSize: '1.05rem', marginBottom: '8px' }}>
                    {current.preview.content}
                  </div>
                  <div style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.5' }}>
                    {current.preview.detail}
                  </div>
                </div>
              </div>

              {/* Action Trigger Footer */}
              <div style={{ paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ color: '#64748b', fontSize: '0.8rem' }}>
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
                    background: 'var(--grad-primary)',
                    color: '#fff',
                    fontWeight: '600',
                    fontSize: '0.85rem',
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
