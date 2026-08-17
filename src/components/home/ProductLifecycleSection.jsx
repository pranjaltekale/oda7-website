import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import {
  Layers,
  PhoneCall,
  TrendingUp,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export const ProductLifecycleSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const stages = [
    {
      step: '01',
      title: 'Capture',
      subtitle: 'Find and organize leads',
      icon: Layers,
      color: '#38bdf8',
      desc: 'Ingest inbound demo requests and cold lists into one centralized database. Verify phone carrier routes and rank leads in <800ms to eliminate rep cherry-picking.',
      metrics: '<15s Inbound Speed • 100% Verified',
      deliverables: ['Web form & API webhook ingestion', 'Intent scoring inputs', 'Duplicate review workflow'],
    },
    {
      step: '02',
      title: 'Connect',
      subtitle: 'Reach prospects via calling & communication',
      icon: PhoneCall,
      color: '#10b981',
      desc: 'Open the calling workspace with lead context, scripts and follow-up channels available in one view.',
      metrics: 'Connected context • Guided action',
      deliverables: ['Automated local area code matching', '1-Click voicemail drop & disposition', 'Official WhatsApp Business chat'],
    },
    {
      step: '03',
      title: 'Convert',
      subtitle: 'Track opportunities & move deals forward',
      icon: TrendingUp,
      color: '#3b82f6',
      desc: 'Empower reps with dynamic branching scripts and live competitor objection battlecards. Generate 1-click CPQ proposals with mobile electronic signatures.',
      metrics: '2.4x Deal Velocity • 1-Click Closing',
      deliverables: ['Branching interactive discovery scripts', 'Automated omnichannel follow-up cadences', 'Instant mobile digital proposal signature'],
    },
    {
      step: '04',
      title: 'Improve',
      subtitle: 'Use analytics and AI to optimize revenue',
      icon: Sparkles,
      color: '#fbbf24',
      desc: 'Live supervisor floor queues allow silent listening and direct rep headset whispering. Query revenue data in plain English with "Explain My Numbers" natural language BI.',
      metrics: '24ms Whisper Stream • Instant Root-Cause',
      deliverables: ['Live manager floor command & whisper', 'Hour-by-hour telephony pickup heatmaps', 'Automated commission & payroll credit'],
    },
  ];

  const currentStage = stages[activeStep];

  return (
    <section className="section-wrapper section-dark" id="lifecycle">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="Continuous Revenue Engine"
          eyebrowIcon="TrendingUp"
          title="From first touch to closed-won."
          highlightText="A seamless 4-stage lifecycle."
          description="How ODA7 transforms fragmented sales chaos into an automated, high-velocity revenue pipeline."
        />

        {/* 4-Stage Horizontal Progression Bar (Desktop) & Step Selector */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '36px' }} className="mockup-grid-3col">
          {stages.map((stg, idx) => {
            const IconComp = stg.icon;
            const isActive = activeStep === idx;

            return (
              <div
                key={stg.step}
                onClick={() => setActiveStep(idx)}
                style={{
                  background: isActive ? 'rgba(37, 99, 235, 0.2)' : 'rgba(14, 19, 32, 0.7)',
                  border: isActive ? `2px solid ${stg.color}` : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '14px',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                  boxShadow: isActive ? `0 10px 30px rgba(0,0,0,0.5), 0 0 20px ${stg.color}30` : 'none',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: '700', color: isActive ? stg.color : '#64748b' }}>
                    STAGE {stg.step}
                  </span>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: isActive ? `${stg.color}25` : 'rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isActive ? stg.color : '#94a3b8',
                  }}>
                    <IconComp size={16} />
                  </div>
                </div>

                <h4 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>
                  {stg.title}
                </h4>
                <p style={{ color: '#94a3b8', fontSize: '0.8125rem', lineHeight: '1.4' }}>
                  {stg.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detailed Lifecycle View */}
        <div
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, rgba(14, 23, 42, 0.95) 0%, rgba(7, 10, 18, 0.98) 100%)',
            border: `1px solid ${currentStage.color}50`,
            borderRadius: '20px',
            padding: '36px',
            boxShadow: '0 25px 50px rgba(0,0,0,0.7)',
          }}
          key={activeStep}
          className="animate-fadeIn"
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '36px', alignItems: 'center' }} className="mockup-grid-2col">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <span className="badge badge-primary" style={{ borderColor: currentStage.color, color: currentStage.color }}>
                  Stage {currentStage.step} • {currentStage.title}
                </span>
                <span className="badge badge-emerald">
                  {currentStage.metrics}
                </span>
              </div>

              <h3 style={{ fontSize: '1.65rem', fontWeight: '800', color: '#fff', marginBottom: '12px', lineHeight: '1.2' }}>
                {currentStage.subtitle}
              </h3>

              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '24px' }}>
                {currentStage.desc}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {currentStage.deliverables.map((item, iIdx) => (
                  <div key={iIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', fontSize: '0.875rem' }}>
                    <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Action Indicator */}
            <div style={{ background: 'rgba(7, 10, 18, 0.9)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '24px', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${currentStage.color}25`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: currentStage.color, marginBottom: '12px' }}>
                <currentStage.icon size={24} />
              </div>
              <div style={{ fontWeight: '800', color: '#fff', fontSize: '1.2rem', marginBottom: '4px' }}>
                {currentStage.title} Velocity Loop
              </div>
              <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '16px' }}>
                Native synchronous data mesh execution
              </div>
              <div style={{ padding: '8px 14px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px', color: '#34d399', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                Illustrative connected workflow
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
