'use client';

import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { AiCopilotMockup } from '../mockups/AiCopilotMockup';
import { LightTabIndicator } from '../common/LightTabIndicator';
import { ProductStateTransition } from '../common/ProductStateTransition';
import { InteractiveTiltCard } from '../common/InteractiveTiltCard';
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
    setActionFeedback('✓ Approved guidance added to the active call view.');
    setTimeout(() => setActionFeedback(null), 2500);
  };

  const objectionFlowSteps = [
    {
      step: 1,
      speaker: 'Customer',
      text: '"The workflow looks useful, but we still have an active agreement with our current provider."',
      badge: 'Customer concern noted',
      badgeColor: 'amber',
      status: 'Detecting objection type...',
    },
    {
      step: 2,
      speaker: 'ODA7 assistance',
      text: 'The current-provider concern is matched to the approved contract-transition guidance.',
      badge: 'Relevant context found',
      badgeColor: 'red',
      status: 'Reviewing approved guidance...',
    },
    {
      step: 3,
      speaker: 'Suggested response',
      text: 'Acknowledge the existing commitment, clarify the transition path and agree on the next practical step.',
      badge: 'Guidance ready',
      badgeColor: 'cyan',
      status: 'Available in the rep workspace',
    },
    {
      step: 4,
      speaker: 'Rep outcome',
      text: 'The concern, response and agreed follow-up are added to the customer timeline.',
      badge: 'Context preserved',
      badgeColor: 'emerald',
      status: 'Next step scheduled automatically',
    },
  ];

  const aiTabs = [
    { id: 'in-call', label: 'Live conversation assistance', icon: Sparkles },
    { id: 'bi-query', label: 'Ask about operating data', icon: Cpu },
  ];

  return (
    <section className="section-wrapper section-dark" id="ai-intelligence">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="In-workflow intelligence"
          eyebrowIcon="Sparkles"
          title="Assistance that stays inside"
          highlightText="the customer conversation."
          description="ODA7 brings relevant guidance, conversation context and follow-up capture into the workspace where the rep is already working."
        />

        {/* Top Switcher with LightTabIndicator */}
        <div className="tabs-scroll-wrapper">
          <LightTabIndicator
            tabs={aiTabs}
            activeTab={activeTab}
            onChange={setActiveTab}
            variant="pill"
            className="ai-mode-tabs"
          />
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
            <div className="responsive-story-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1.1fr)', gap: 'clamp(24px, 4vw, 48px)', alignItems: 'center' }}>
              
              {/* Left Column: Live Call Scenario */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <span className="badge badge-emerald">Conversation context active</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--oda-text-muted)' }}>Illustrative workflow</span>
                </div>

                <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: '850', color: 'var(--oda-text-primary)', lineHeight: '1.2', marginBottom: '16px' }}>
                  Give the rep context without taking attention away from the customer.
                </h3>

                <p style={{ color: 'var(--oda-text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '24px' }}>
                  When a familiar concern appears, ODA7 can surface approved guidance and preserve the resulting note for the next person in the workflow.
                </p>

                <div className="ai-context-image">
                  <img src="/oda7-ai-assist.png" alt="Sales professional using an assisted call workspace" loading="lazy" />
                  <span>Human conversation, supported by relevant context</span>
                </div>

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
              <InteractiveTiltCard
                maxTilt={3}
                scale={1.015}
                style={{
                  background: 'var(--oda-surface)',
                  border: '1px solid var(--oda-border-blue)',
                  borderRadius: '16px',
                  padding: '24px',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
                }}
                className="ai-call-hud"
              >
                <ProductStateTransition activeKey={objectionStep}>
                  {/* HUD Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '14px', borderBottom: '1px solid var(--oda-border-subtle)', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div className="audio-wave-live">
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                      <span style={{ fontWeight: '750', color: 'var(--oda-text-primary)', fontSize: '0.875rem' }}>
                        Active conversation • Customer record
                      </span>
                    </div>
                    <span className="badge badge-cyan" style={{ fontSize: '0.65rem' }}>Assistance available</span>
                  </div>

                  {/* Speaker Dialogue Card */}
                  <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border)', borderRadius: '10px', padding: '14px', marginBottom: '14px' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--oda-text-muted)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '6px' }}>
                      {objectionFlowSteps[objectionStep].speaker}
                    </div>
                    <div style={{ color: 'var(--oda-text-primary)', fontSize: '0.9rem', lineHeight: '1.55', fontWeight: '500' }}>
                      {objectionFlowSteps[objectionStep].text}
                    </div>
                  </div>

                  {/* AI Status / Prescriptive Telemetry */}
                  <div style={{ background: 'var(--oda-primary-soft)', border: '1px solid var(--oda-border-blue)', borderRadius: '10px', padding: '12px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Sparkles size={18} color="var(--oda-primary)" />
                      <div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--oda-primary)', fontWeight: '700', textTransform: 'uppercase' }}>
                          Assistance status
                        </div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--oda-text-primary)', fontWeight: '600' }}>
                          {objectionFlowSteps[objectionStep].status}
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
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
                        className="btn-tactile magnetic-arrow-wrap"
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
                </ProductStateTransition>
              </InteractiveTiltCard>

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
