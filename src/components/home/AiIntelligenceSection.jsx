import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { AiCopilotMockup } from '../mockups/AiCopilotMockup';
import {
  Sparkles,
  ShieldAlert,
  CheckCircle2,
  PhoneCall,
  Volume2,
  ArrowRight,
  Send,
  Cpu,
  RotateCcw,
  Zap,
} from 'lucide-react';

export const AiIntelligenceSection = () => {
  const [activeTab, setActiveTab] = useState('in-call'); // 'in-call' | 'bi-query'
  const [objectionStep, setObjectionStep] = useState(0);
  const [actionFeedback, setActionFeedback] = useState(null);

  const handleDeployTalkTrack = () => {
    setActionFeedback('✓ Talk track deployed to SDR headset & live HUD!');
    setTimeout(() => setActionFeedback(null), 2500);
  };

  const objectionFlowSteps = [
    {
      step: 1,
      speaker: 'Prospect (Liam Vance, VP Ops)',
      text: '"We like your solution, but we are locked into a 6-month contract with our legacy dialer provider."',
      badge: 'Customer Audio Ingested',
      badgeColor: 'amber',
      status: 'Detecting objection type...',
    },
    {
      step: 2,
      speaker: 'ODA7 Neural Engine (42ms)',
      text: 'Competitor Lock-in Objection Identified. Confidence: 98.4%. Probability of loss if unaddressed: 64%.',
      badge: 'Objection Detected',
      badgeColor: 'red',
      status: 'Fetching winning battlecard...',
    },
    {
      step: 3,
      speaker: 'Live AI Battlecard Recommendation',
      text: 'Winning Talk Track: "Offer our 6-Month Contract Buyout Credit with zero-downtime dual-trunk migration."',
      badge: 'Prescriptive Talk Track',
      badgeColor: 'cyan',
      status: 'Displayed on rep HUD in real time',
    },
    {
      step: 4,
      speaker: 'Rep Response & CRM Outcome',
      text: 'Deal state updated to "Qualified Demo (Buyout Credit)". Calendar invite sent. WhatsApp executive deck dispatched.',
      badge: 'Zero-Touch CRM Sync',
      badgeColor: 'emerald',
      status: 'Next step scheduled automatically',
    },
  ];

  return (
    <section className="section-wrapper section-dark" id="ai-intelligence">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="Pervasive Intelligence"
          eyebrowIcon="Sparkles"
          title="AI that works inside the"
          highlightText="telephony workflow."
          description="ODA7 AI does not sit in a disconnected chat window. It listens to live customer speech, pops winning objection battlecards in real time, and writes zero-touch CRM notes automatically."
        />

        {/* Top Switcher: Live In-Call Objection Buster vs Executive BI Query */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
          <div className="tab-group">
            <button
              className={`tab-btn ${activeTab === 'in-call' ? 'active' : ''}`}
              onClick={() => setActiveTab('in-call')}
            >
              <Sparkles size={16} />
              <span>Live In-Call Objection AI</span>
            </button>
            <button
              className={`tab-btn ${activeTab === 'bi-query' ? 'active' : ''}`}
              onClick={() => setActiveTab('bi-query')}
            >
              <Cpu size={16} />
              <span>"Explain My Numbers" Natural Language BI</span>
            </button>
          </div>
        </div>

        {activeTab === 'in-call' ? (
          <div
            className="feature-showcase-panel card-interactive-lift animate-fadeIn"
            style={{
              maxWidth: '1180px',
              margin: '0 auto',
              borderRadius: '20px',
              padding: 'clamp(24px, 4vw, 40px)',
            }}
          >
            <div className="responsive-story-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.1fr) minmax(300px, 1.1fr)', gap: 'clamp(24px, 4vw, 48px)', alignItems: 'center' }}>
              
              {/* Left Column: Live Call Scenario */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <span className="badge badge-emerald">Live Telephony Stream Active</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--oda-text-muted)' }}>0.8s WebRTC Connection</span>
                </div>

                <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: '850', color: 'var(--oda-text-primary)', lineHeight: '1.2', marginBottom: '16px' }}>
                  Real-time speech AI that turns lost deals into closed contracts.
                </h3>

                <p style={{ color: 'var(--oda-text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '24px' }}>
                  When prospects mention competitor lock-ins, pricing friction, or security questions, ODA7 analyzes the audio waveform instantly and gives the agent the exact proven rebuttal to protect the deal.
                </p>

                {/* 4 Step Selector Buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {objectionFlowSteps.map((step, idx) => (
                    <button
                      key={idx}
                      onClick={() => setObjectionStep(idx)}
                      className="tab-pill-interactive"
                      style={{
                        padding: '12px 16px',
                        borderRadius: '10px',
                        background: objectionStep === idx ? 'var(--oda-primary-soft)' : 'var(--oda-surface)',
                        border: objectionStep === idx ? '1px solid var(--oda-border-blue)' : '1px solid var(--oda-border)',
                        color: objectionStep === idx ? 'var(--oda-primary)' : 'var(--oda-text-primary)',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        boxShadow: objectionStep === idx ? '0 4px 14px rgba(37, 99, 235, 0.12)' : 'none',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ width: '24px', height: '24px', borderRadius: '6px', background: objectionStep === idx ? 'var(--oda-primary)' : 'var(--oda-bg-alt)', color: objectionStep === idx ? '#fff' : 'var(--oda-text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: '700' }}>
                          0{step.step}
                        </span>
                        <span style={{ fontWeight: '600', fontSize: '0.85rem' }}>{step.badge}</span>
                      </div>
                      <ArrowRight size={14} className="arrow-slide" style={{ opacity: objectionStep === idx ? 1 : 0.4 }} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Live In-Call HUD Mockup */}
              <div
                style={{
                  background: 'var(--oda-surface)',
                  border: '1px solid var(--oda-border-blue)',
                  borderRadius: '16px',
                  padding: '24px',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
                }}
                className="animate-fadeIn ai-call-hud"
                key={objectionStep}
              >
                {/* HUD Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid var(--oda-border-subtle)', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div className="audio-wave-live">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                    <span style={{ fontWeight: '750', color: 'var(--oda-text-primary)', fontSize: '0.9rem' }}>
                      Active Call HUD • Liam Vance (OmniCorp)
                    </span>
                  </div>
                  <span className="badge badge-cyan" style={{ fontSize: '0.65rem' }}>AI Neural Core: 42ms</span>
                </div>

                {/* Speaker Dialogue Card */}
                <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border)', borderRadius: '10px', padding: '16px', marginBottom: '16px' }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--oda-text-muted)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '6px' }}>
                    {objectionFlowSteps[objectionStep].speaker}
                  </div>
                  <div style={{ color: 'var(--oda-text-primary)', fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '500' }}>
                    {objectionFlowSteps[objectionStep].text}
                  </div>
                </div>

                {/* AI Status / Prescriptive Telemetry */}
                <div style={{ background: 'var(--oda-primary-soft)', border: '1px solid var(--oda-border-blue)', borderRadius: '10px', padding: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Sparkles size={18} color="var(--oda-primary)" />
                    <div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--oda-primary)', fontWeight: '700', textTransform: 'uppercase' }}>
                        Neural Synthesis Status
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--oda-text-primary)', fontWeight: '600' }}>
                        {objectionFlowSteps[objectionStep].status}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {objectionStep === 2 && (
                      <button
                        onClick={handleDeployTalkTrack}
                        className="btn-tactile"
                        style={{
                          padding: '7px 14px',
                          borderRadius: '6px',
                          background: 'var(--oda-success)',
                          color: '#fff',
                          fontSize: '0.75rem',
                          fontWeight: '700',
                          border: 'none',
                          cursor: 'pointer',
                        }}
                      >
                        Deploy Talk Track
                      </button>
                    )}

                    <button
                      onClick={() => setObjectionStep((prev) => (prev + 1) % 4)}
                      className="btn-tactile"
                      style={{
                        padding: '7px 14px',
                        borderRadius: '6px',
                        background: 'var(--oda-primary)',
                        color: '#fff',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <span>{objectionStep === 3 ? 'Restart Flow' : 'Next Stage'}</span>
                      <ArrowRight size={13} className="arrow-slide" />
                    </button>
                  </div>
                </div>

                {actionFeedback && (
                  <div className="animate-fadeIn" style={{ marginTop: '10px', fontSize: '0.75rem', color: 'var(--oda-success)', fontWeight: '700', textAlign: 'center' }}>
                    {actionFeedback}
                  </div>
                )}
              </div>

            </div>
          </div>
        ) : (
          <div style={{ maxWidth: '1180px', margin: '0 auto' }} className="animate-fadeIn">
            <AiCopilotMockup />
          </div>
        )}

      </div>
    </section>
  );
};
