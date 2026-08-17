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
      subtitle: 'Bring new opportunities into view',
      icon: Layers,
      color: '#38bdf8',
      desc: 'Bring inbound enquiries and outbound prospect lists into a centralized lead workspace with visible source context.',
      metrics: 'Centralized intake • Visible source',
      deliverables: ['Web form and API intake', 'Qualification context', 'Duplicate review workflow'],
    },
    {
      step: '02',
      title: 'Connect',
      subtitle: 'Route work to the right owner',
      icon: PhoneCall,
      color: '#10b981',
      desc: 'Open the calling workspace with lead context, scripts and follow-up channels available in one view.',
      metrics: 'Connected context • Guided action',
      deliverables: ['Owned agent queue', 'Lead context beside the call', 'Shared conversation history'],
    },
    {
      step: '03',
      title: 'Execute',
      subtitle: 'Move the workflow forward',
      icon: TrendingUp,
      color: '#3b82f6',
      desc: 'Give agents scripts, sequences, product context and quotes inside the same operating flow.',
      metrics: 'Guided action • Connected follow-up',
      deliverables: ['Reusable conversation scripts', 'Visible follow-up sequences', 'Product and quote context'],
    },
    {
      step: '04',
      title: 'Measure',
      subtitle: 'Make activity visible',
      icon: Users,
      color: '#8b5cf6',
      desc: 'Give managers a shared view of team activity, ownership, workflow status and operating patterns.',
      metrics: 'Manager view • Shared definitions',
      deliverables: ['Team activity context', 'Queue and ownership visibility', 'Analytics and heatmap views'],
    },
    {
      step: '05',
      title: 'Improve',
      subtitle: 'Turn insight into the next action',
      icon: Sparkles,
      color: '#fbbf24',
      desc: 'Use analytics, coaching context and AI-assisted recommendations to identify what the team should do next.',
      metrics: 'Visible pattern • Accountable next step',
      deliverables: ['Focused coaching context', 'Performance pattern review', 'Clear improvement action'],
    },
  ];

  const currentStage = stages[activeStep];

  return (
    <section className="section-wrapper section-alt" id="lifecycle">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="How ODA7 works"
          eyebrowIcon="TrendingUp"
          title="Capture. Connect. Execute. Measure."
          highlightText="Improve."
          description="As the work moves forward, the product view changes while ownership and context remain connected."
        />

        {/* Five-stage connected workflow */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', marginBottom: '36px' }} className="mockup-grid-3col">
          {stages.map((stg, idx) => {
            const IconComp = stg.icon;
            const isActive = activeStep === idx;

            return (
              <div
                key={stg.step}
                onClick={() => setActiveStep(idx)}
                style={{
                  background: isActive ? 'var(--oda-primary-soft)' : 'var(--oda-surface)',
                  border: isActive ? `2px solid var(--oda-primary)` : '1px solid var(--oda-border)',
                  borderRadius: '14px',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                  boxShadow: isActive ? '0 4px 16px rgba(37, 99, 235, 0.15)' : 'none',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: '700', color: isActive ? 'var(--oda-primary)' : 'var(--oda-text-muted)' }}>
                    STAGE {stg.step}
                  </span>
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
                </div>

                <h4 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--oda-text-primary)', marginBottom: '4px' }}>
                  {stg.title}
                </h4>
                <p style={{ color: 'var(--oda-text-secondary)', fontSize: '0.8125rem', lineHeight: '1.4' }}>
                  {stg.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detailed Lifecycle View */}
        <div
          className="feature-showcase-panel animate-fadeIn"
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            borderRadius: '20px',
            padding: '36px',
          }}
          key={activeStep}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '36px', alignItems: 'center' }} className="mockup-grid-2col">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <span className="badge badge-primary">
                  Stage {currentStage.step} • {currentStage.title}
                </span>
                <span className="badge badge-emerald">
                  {currentStage.metrics}
                </span>
              </div>

              <h3 style={{ fontSize: '1.65rem', fontWeight: '800', color: 'var(--oda-text-primary)', marginBottom: '12px', lineHeight: '1.2' }}>
                {currentStage.subtitle}
              </h3>

              <p style={{ color: 'var(--oda-text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '24px' }}>
                {currentStage.desc}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {currentStage.deliverables.map((item, iIdx) => (
                  <div key={iIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--oda-text-secondary)', fontSize: '0.875rem' }}>
                    <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Action Indicator */}
            <div style={{ background: 'var(--oda-surface)', border: '1px solid var(--oda-border)', borderRadius: '14px', padding: '24px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--oda-primary-soft)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--oda-primary)', marginBottom: '12px' }}>
                <currentStage.icon size={24} />
              </div>
              <div style={{ fontWeight: '800', color: 'var(--oda-text-primary)', fontSize: '1.2rem', marginBottom: '4px' }}>
                {currentStage.title} Velocity Loop
              </div>
              <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.8rem', marginBottom: '16px' }}>
                Native synchronous data mesh execution
              </div>
              <div style={{ padding: '8px 14px', background: 'var(--oda-bg-alt)', borderRadius: '6px', color: 'var(--oda-success)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: '700' }}>
                Illustrative connected workflow
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
