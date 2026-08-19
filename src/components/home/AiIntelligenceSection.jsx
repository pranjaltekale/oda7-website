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
  ShieldCheck,
  FileText,
  Clock,
  Layers,
  Bot,
  Activity,
  BarChart2,
  Lock,
  CalendarCheck,
  Check,
} from 'lucide-react';

const objectionScenarios = [
  {
    id: 'contract-overlap',
    title: 'Incumbent Contract Overlap',
    tag: 'Commercial Objection',
    steps: [
      {
        step: 1,
        speaker: 'Customer',
        text: '"The workflow looks useful, but we still have an active 8-month agreement with our current vendor."',
        badge: 'Customer concern noted',
        badgeColor: 'amber',
        status: 'Detecting commercial objection...',
        intentTag: 'Contract Overlap',
        sentiment: 'Hesitant (68%)',
        keywords: ['Active Agreement', 'Incumbent Vendor', '8 Months Left'],
      },
      {
        step: 2,
        speaker: 'ODA7 Intelligence',
        text: 'Matched to "Enterprise Displacement Playbook v4.2". Identified eligible transition buyout credits.',
        badge: 'Relevant context found',
        badgeColor: 'red',
        status: 'Surfacing approved buyout policy...',
        battlecard: 'Displacement Battlecard #08',
        commercialLever: 'Eligible for 6-Month Transition Credit',
        complianceBadge: '100% Policy Approved',
      },
      {
        step: 3,
        speaker: 'Guided Talk Track',
        text: '1. Acknowledge the existing contract. 2. Offer the zero-double-pay migration credit. 3. Lock a 20-min technical scope review.',
        badge: 'Guidance ready',
        badgeColor: 'cyan',
        status: 'Live on rep workspace HUD',
        talkTrackKeyPoints: [
          'Validate current investment without disparaging vendor',
          'Introduce ODA7 Migration Bridge Credit (zero overlap fee)',
          'Propose side-by-side pilot for Tier-1 team during Q3',
        ],
      },
      {
        step: 4,
        speaker: 'Autonomous Pipeline Sync',
        text: 'Objection resolved. Buyout credit noted, pilot scheduled for Thursday 2 PM, CRM deal stage updated to Stage 3.',
        badge: 'Context preserved',
        badgeColor: 'emerald',
        status: 'CRM note & task created automatically',
        crmPayload: {
          account: 'CloudScale Technologies',
          dealStage: 'Stage 3: Technical Pilot Scope',
          nextTask: 'Deliver Migration Credit Proposal (Thu 2 PM)',
          managerAlert: 'Transition credit deployed by Marcus V.',
        },
      },
    ],
  },
  {
    id: 'security-compliance',
    title: 'Security & Data Sovereignty',
    tag: 'Compliance Objection',
    steps: [
      {
        step: 1,
        speaker: 'Customer',
        text: '"We are in healthcare fintech. We need strict HIPAA/SOC 2 Type II compliance and dedicated data residency."',
        badge: 'Customer concern noted',
        badgeColor: 'amber',
        status: 'Detecting security & governance query...',
        intentTag: 'Security & Governance',
        sentiment: 'High Caution (84%)',
        keywords: ['HIPAA / SOC 2', 'Data Residency', 'Dedicated Tenant'],
      },
      {
        step: 2,
        speaker: 'ODA7 Intelligence',
        text: 'Matched to "Security Architecture & Audit Whitepaper". Verified SOC 2 Type II compliance and isolated encryption.',
        badge: 'Relevant context found',
        badgeColor: 'red',
        status: 'Retrieving security certificates...',
        battlecard: 'Security Governance Matrix v2.1',
        commercialLever: 'Isolated VPC & Dedicated Key Management',
        complianceBadge: 'HIPAA + SOC 2 Type II Verified',
      },
      {
        step: 3,
        speaker: 'Guided Talk Track',
        text: '1. Confirm full SOC 2 Type II & HIPAA compliance. 2. Offer instantaneous 1-click Security Packet dispatch. 3. Invite InfoSec lead to review.',
        badge: 'Guidance ready',
        badgeColor: 'cyan',
        status: 'Live on rep workspace HUD',
        talkTrackKeyPoints: [
          'Confirm customer-managed encryption keys (BYOK)',
          'Highlight real-time audit log streaming to SIEM (Splunk/Datadog)',
          'Send approved InfoSec Compliance Pack via 1-click trigger',
        ],
      },
      {
        step: 4,
        speaker: 'Autonomous Pipeline Sync',
        text: 'Security Packet dispatched automatically. InfoSec review call booked with Lead Security Architect.',
        badge: 'Context preserved',
        badgeColor: 'emerald',
        status: 'Compliance audit trail logged',
        crmPayload: {
          account: 'Apex Health Systems',
          dealStage: 'Stage 4: Security & Legal Review',
          nextTask: 'InfoSec Alignment Call (Friday 11 AM)',
          managerAlert: 'Security packet auto-sent with NDA verification',
        },
      },
    ],
  },
  {
    id: 'bandwidth-timing',
    title: 'Implementation Bandwidth',
    tag: 'Resource Objection',
    steps: [
      {
        step: 1,
        speaker: 'Customer',
        text: '"Our sales ops team is understaffed right now. We cannot spend 4 months configuring another complex platform."',
        badge: 'Customer concern noted',
        badgeColor: 'amber',
        status: 'Detecting implementation bandwidth concern...',
        intentTag: 'Rollout Velocity',
        sentiment: 'Overwhelmed (76%)',
        keywords: ['Ops Bandwidth', 'Rollout Duration', 'Onboarding Lag'],
      },
      {
        step: 2,
        speaker: 'ODA7 Intelligence',
        text: 'Matched to "White-Glove 7-Day Rapid Onboarding SLA". Pre-built CRM integrations require zero engineering.',
        badge: 'Relevant context found',
        badgeColor: 'red',
        status: 'Surfacing rapid onboarding playbook...',
        battlecard: '7-Day Fast-Track Deployment SLA',
        commercialLever: 'Dedicated Solutions Engineer Included',
        complianceBadge: 'Pre-Engineered Connectors',
      },
      {
        step: 3,
        speaker: 'Guided Talk Track',
        text: '1. Share that ODA7 deploys in under 7 business days. 2. Highlight zero-code bidirectional sync. 3. Offer sandbox test today.',
        badge: 'Guidance ready',
        badgeColor: 'cyan',
        status: 'Live on rep workspace HUD',
        talkTrackKeyPoints: [
          'Explain zero-code 1-click import from existing dialers & CRM',
          'Guarantee 7-day white-glove onboarding backed by dedicated SE',
          'Enable instant rep sandbox trial during the call',
        ],
      },
      {
        step: 4,
        speaker: 'Autonomous Pipeline Sync',
        text: 'Fast-track onboarding timeline approved. 7-day milestone roadmap sent, customer invited to self-service sandbox.',
        badge: 'Context preserved',
        badgeColor: 'emerald',
        status: 'Fast-track timeline committed',
        crmPayload: {
          account: 'Nexus Logistics Global',
          dealStage: 'Stage 3: Rapid Proof of Value',
          nextTask: 'Deploy Pre-Configured Sandbox Pod',
          managerAlert: 'Fast-track 7-day onboarding SLA attached to deal',
        },
      },
    ],
  },
];

export const AiIntelligenceSection = () => {
  const [activeTab, setActiveTab] = useState('in-call'); // 'in-call' | 'bi-query'
  const [selectedScenarioIdx, setSelectedScenarioIdx] = useState(0);
  const [objectionStep, setObjectionStep] = useState(0);
  const [actionFeedback, setActionFeedback] = useState(null);

  const activeScenario = objectionScenarios[selectedScenarioIdx];
  const currentStepData = activeScenario.steps[objectionStep];

  const handleDeployTalkTrack = () => {
    setActionFeedback('✓ Approved talk track deployed to active call HUD & adherence scored.');
    setTimeout(() => setActionFeedback(null), 3000);
  };

  const handleScenarioChange = (idx) => {
    setSelectedScenarioIdx(idx);
    setObjectionStep(0);
    setActionFeedback(null);
  };

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
        <div className="tabs-scroll-wrapper" style={{ marginBottom: '28px' }}>
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
              padding: 'clamp(20px, 3.5vw, 36px)',
            }}
          >
            {/* Scenario Selection Header Strip */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px',
                paddingBottom: '20px',
                borderBottom: '1px solid var(--oda-border-subtle)',
                marginBottom: '28px',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="badge badge-emerald">Live Telemetry Active</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--oda-text-muted)', fontWeight: '600' }}>
                    Select Real-World Objection Simulation:
                  </span>
                </div>
              </div>

              {/* 3 Interactive Scenario Switcher Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {objectionScenarios.map((sc, idx) => (
                  <button
                    key={sc.id}
                    onClick={() => handleScenarioChange(idx)}
                    style={{
                      padding: '7px 13px',
                      borderRadius: '8px',
                      fontSize: '0.78rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      transition: 'all 180ms ease',
                      border: selectedScenarioIdx === idx ? '1px solid var(--oda-border-blue)' : '1px solid var(--oda-border)',
                      background: selectedScenarioIdx === idx ? 'var(--oda-primary-soft)' : 'var(--oda-surface)',
                      color: selectedScenarioIdx === idx ? 'var(--oda-primary)' : 'var(--oda-text-secondary)',
                      boxShadow: selectedScenarioIdx === idx ? '0 2px 10px rgba(37, 99, 235, 0.15)' : 'none',
                    }}
                  >
                    {sc.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="responsive-story-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.15fr)', gap: 'clamp(24px, 4vw, 40px)', alignItems: 'start' }}>
              
              {/* Left Column: Live Call Scenario */}
              <div>
                <h3 style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)', fontWeight: '850', color: 'var(--oda-text-primary)', lineHeight: '1.25', marginBottom: '14px' }}>
                  Give the rep context without taking attention away from the customer.
                </h3>

                <p style={{ color: 'var(--oda-text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  When a familiar concern appears, ODA7 matches intent in under 180ms, surfaces approved guidance, and preserves the structured outcome for the entire pipeline.
                </p>

                <div className="ai-context-image" style={{ marginBottom: '20px' }}>
                  <img src="/oda7-ai-assist.png" alt="Sales professional using an assisted call workspace" loading="lazy" />
                  <span>Human conversation, supported by verified contextual telemetry</span>
                </div>

                {/* 4 Step Selector Buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {activeScenario.steps.map((step, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setObjectionStep(idx);
                        setActionFeedback(null);
                      }}
                      className="tab-pill-interactive"
                      style={{
                        padding: '11px 14px',
                        borderRadius: '10px',
                        background: objectionStep === idx ? 'var(--oda-primary-soft)' : 'var(--oda-surface)',
                        border: objectionStep === idx ? '1px solid var(--oda-border-blue)' : '1px solid var(--oda-border)',
                        color: objectionStep === idx ? 'var(--oda-primary)' : 'var(--oda-text-primary)',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        boxShadow: objectionStep === idx ? '0 4px 14px rgba(37, 99, 235, 0.12)' : 'none',
                        cursor: 'pointer',
                        transition: 'all 180ms ease',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ width: '24px', height: '24px', borderRadius: '6px', background: objectionStep === idx ? 'var(--oda-primary)' : 'var(--oda-bg-alt)', color: objectionStep === idx ? '#fff' : 'var(--oda-text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: '700' }}>
                          0{step.step}
                        </span>
                        <span style={{ fontWeight: '650', fontSize: '0.82rem' }}>{step.badge}</span>
                      </div>
                      <ArrowRight size={14} className="arrow-slide" style={{ opacity: objectionStep === idx ? 1 : 0.4 }} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Live In-Call HUD Mockup & Operational Telemetry Stack */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <InteractiveTiltCard
                  maxTilt={3}
                  scale={1.012}
                  style={{
                    background: 'var(--oda-surface)',
                    border: '1px solid var(--oda-border-blue)',
                    borderRadius: '16px',
                    padding: '20px',
                    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
                  }}
                  className="ai-call-hud"
                >
                  <ProductStateTransition activeKey={`${selectedScenarioIdx}-${objectionStep}`}>
                    {/* HUD Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '12px', borderBottom: '1px solid var(--oda-border-subtle)', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div className="audio-wave-live">
                          <span />
                          <span />
                          <span />
                          <span />
                        </div>
                        <span style={{ fontWeight: '750', color: 'var(--oda-text-primary)', fontSize: '0.84rem' }}>
                          Active conversation • {activeScenario.title}
                        </span>
                      </div>
                      <span className="badge badge-cyan" style={{ fontSize: '0.62rem' }}>Latency: 142ms</span>
                    </div>

                    {/* Stage-Specific Content */}
                    {objectionStep === 0 && (
                      <div>
                        {/* Speaker Dialogue Card */}
                        <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border)', borderRadius: '10px', padding: '14px', marginBottom: '12px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                            <span style={{ fontSize: '0.7rem', color: 'var(--oda-text-muted)', fontWeight: '700', textTransform: 'uppercase' }}>
                              {currentStepData.speaker}
                            </span>
                            <span className="badge badge-amber" style={{ fontSize: '0.6rem' }}>
                              {currentStepData.sentiment}
                            </span>
                          </div>
                          <div style={{ color: 'var(--oda-text-primary)', fontSize: '0.88rem', lineHeight: '1.55', fontWeight: '500' }}>
                            {currentStepData.text}
                          </div>
                        </div>

                        {/* Intent Keywords Strip */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
                          <span style={{ fontSize: '0.68rem', color: 'var(--oda-text-muted)', fontWeight: '600' }}>Detected Intent Signals:</span>
                          {currentStepData.keywords?.map((kw, i) => (
                            <span key={i} style={{ fontSize: '0.68rem', fontWeight: '700', padding: '2px 8px', borderRadius: '4px', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                              {kw}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {objectionStep === 1 && (
                      <div>
                        {/* Matched Battlecard Panel */}
                        <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border)', borderRadius: '10px', padding: '14px', marginBottom: '12px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                            <span style={{ fontSize: '0.7rem', color: 'var(--oda-primary)', fontWeight: '700', textTransform: 'uppercase' }}>
                              {currentStepData.speaker}
                            </span>
                            <span className="badge badge-emerald" style={{ fontSize: '0.6rem' }}>
                              {currentStepData.complianceBadge}
                            </span>
                          </div>
                          <div style={{ color: 'var(--oda-text-primary)', fontSize: '0.88rem', lineHeight: '1.55', fontWeight: '500', marginBottom: '10px' }}>
                            {currentStepData.text}
                          </div>
                          <div style={{ padding: '8px 10px', borderRadius: '6px', background: 'rgba(56, 189, 248, 0.08)', border: '1px solid var(--oda-border-blue)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.74rem' }}>
                            <span style={{ color: 'var(--oda-text-muted)' }}>Battlecard: <strong style={{ color: 'var(--oda-text-primary)' }}>{currentStepData.battlecard}</strong></span>
                            <span style={{ color: 'var(--oda-accent)', fontWeight: '700' }}>{currentStepData.commercialLever}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {objectionStep === 2 && (
                      <div>
                        {/* Rep Guided Talk Track */}
                        <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border)', borderRadius: '10px', padding: '14px', marginBottom: '12px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                            <span style={{ fontSize: '0.7rem', color: 'var(--oda-accent)', fontWeight: '700', textTransform: 'uppercase' }}>
                              Live Recommended Talk Track (3-Point Script)
                            </span>
                            <span className="badge badge-cyan" style={{ fontSize: '0.6rem' }}>98.4% Confidence</span>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '6px' }}>
                            {currentStepData.talkTrackKeyPoints?.map((pt, i) => (
                              <div key={i} style={{ display: 'flex', alignItems: 'start', gap: '8px', fontSize: '0.79rem', color: 'var(--oda-text-primary)', lineHeight: '1.45' }}>
                                <CheckCircle2 size={14} color="var(--oda-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                <span>{pt}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {objectionStep === 3 && (
                      <div>
                        {/* Structured CRM Pipeline Payload */}
                        <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '10px', padding: '14px', marginBottom: '12px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                            <span style={{ fontSize: '0.7rem', color: 'var(--oda-success)', fontWeight: '700', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '5px' }}>
                              <CheckCircle2 size={13} /> Auto-Generated CRM Record
                            </span>
                            <span className="badge badge-emerald" style={{ fontSize: '0.6rem' }}>0 sec Admin Delay</span>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px', fontSize: '0.74rem' }}>
                            <div style={{ padding: '6px 8px', background: 'var(--oda-surface)', borderRadius: '6px', border: '1px solid var(--oda-border-subtle)' }}>
                              <span style={{ color: 'var(--oda-text-muted)', display: 'block', fontSize: '0.65rem' }}>Account</span>
                              <strong style={{ color: 'var(--oda-text-primary)' }}>{currentStepData.crmPayload?.account}</strong>
                            </div>
                            <div style={{ padding: '6px 8px', background: 'var(--oda-surface)', borderRadius: '6px', border: '1px solid var(--oda-border-subtle)' }}>
                              <span style={{ color: 'var(--oda-text-muted)', display: 'block', fontSize: '0.65rem' }}>Stage Progress</span>
                              <strong style={{ color: '#38bdf8' }}>{currentStepData.crmPayload?.dealStage}</strong>
                            </div>
                            <div style={{ gridColumn: 'span 2', padding: '6px 8px', background: 'var(--oda-surface)', borderRadius: '6px', border: '1px solid var(--oda-border-subtle)' }}>
                              <span style={{ color: 'var(--oda-text-muted)', display: 'block', fontSize: '0.65rem' }}>Automated Next Action</span>
                              <strong style={{ color: '#4ade80' }}>{currentStepData.crmPayload?.nextTask}</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* AI Status / Prescriptive Telemetry Footer */}
                    <div style={{ background: 'var(--oda-primary-soft)', border: '1px solid var(--oda-border-blue)', borderRadius: '10px', padding: '12px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Sparkles size={17} color="var(--oda-primary)" />
                        <div>
                          <div style={{ fontSize: '0.68rem', color: 'var(--oda-primary)', fontWeight: '700', textTransform: 'uppercase' }}>
                            Assistance status
                          </div>
                          <div style={{ fontSize: '0.82rem', color: 'var(--oda-text-primary)', fontWeight: '600' }}>
                            {currentStepData.status}
                          </div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        {objectionStep === 2 && (
                          <button
                            onClick={handleDeployTalkTrack}
                            className="btn-tactile"
                            style={{
                              padding: '7px 13px',
                              borderRadius: '6px',
                              background: 'var(--oda-success)',
                              color: '#fff',
                              fontSize: '0.74rem',
                              fontWeight: '700',
                              border: 'none',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px',
                            }}
                          >
                            <Check size={13} /> Deploy Talk Track
                          </button>
                        )}

                        <button
                          onClick={() => {
                            setObjectionStep((prev) => (prev + 1) % 4);
                            setActionFeedback(null);
                          }}
                          className="btn-tactile"
                          style={{
                            padding: '7px 13px',
                            borderRadius: '6px',
                            background: 'var(--oda-primary)',
                            color: '#fff',
                            fontSize: '0.74rem',
                            fontWeight: '700',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <span>{objectionStep === 3 ? 'Restart Flow' : 'Next Stage'}</span>
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

                {/* Real-Time Telemetry & Governance Stream Inspector */}
                <div
                  style={{
                    background: 'var(--oda-surface)',
                    border: '1px solid var(--oda-border)',
                    borderRadius: '14px',
                    padding: '14px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '0.76rem', fontWeight: '750', color: 'var(--oda-text-primary)' }}>
                      <Activity size={14} className="text-accent" />
                      <span>Live Acoustic Stream & Governance Telemetry</span>
                    </div>
                    <span className="badge badge-emerald" style={{ fontSize: '0.62rem' }}>
                      <ShieldCheck size={11} style={{ marginRight: 3, display: 'inline' }} /> Guardrails Active
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '8px' }}>
                    <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border-subtle)', borderRadius: '8px', padding: '8px 10px' }}>
                      <span style={{ fontSize: '0.64rem', color: 'var(--oda-text-muted)', display: 'block', marginBottom: '2px' }}>Acoustic Latency</span>
                      <strong style={{ fontSize: '0.86rem', color: '#38bdf8' }}>142ms</strong>
                      <small style={{ fontSize: '0.6rem', color: 'var(--oda-text-muted)', display: 'block' }}>Sub-180ms SLA</small>
                    </div>

                    <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border-subtle)', borderRadius: '8px', padding: '8px 10px' }}>
                      <span style={{ fontSize: '0.64rem', color: 'var(--oda-text-muted)', display: 'block', marginBottom: '2px' }}>Intent Accuracy</span>
                      <strong style={{ fontSize: '0.86rem', color: '#34d399' }}>99.4%</strong>
                      <small style={{ fontSize: '0.6rem', color: 'var(--oda-text-muted)', display: 'block' }}>Deterministic Model</small>
                    </div>

                    <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border-subtle)', borderRadius: '8px', padding: '8px 10px' }}>
                      <span style={{ fontSize: '0.64rem', color: 'var(--oda-text-muted)', display: 'block', marginBottom: '2px' }}>Pipeline Sync</span>
                      <strong style={{ fontSize: '0.86rem', color: '#c084fc' }}>0s Lag</strong>
                      <small style={{ fontSize: '0.6rem', color: 'var(--oda-text-muted)', display: 'block' }}>Lossless Capture</small>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--oda-surface-hover)', borderRadius: '8px', padding: '7px 10px', fontSize: '0.72rem', color: 'var(--oda-text-secondary)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Sparkles size={12} color="var(--oda-accent)" />
                      <span><strong>Active Rule:</strong> Legal transition credit &amp; playbook verification</span>
                    </span>
                    <span style={{ color: 'var(--oda-text-muted)', fontVariantNumeric: 'tabular-nums', fontSize: '0.68rem' }}>AES-256 Encrypted</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Enterprise Intelligence 3-Pillar Deep-Value Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '16px',
                marginTop: '32px',
                paddingTop: '28px',
                borderTop: '1px solid var(--oda-border-subtle)',
              }}
            >
              <div style={{ background: 'var(--oda-surface)', border: '1px solid var(--oda-border)', borderRadius: '12px', padding: '18px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.15)', display: 'grid', placeItems: 'center', color: '#38bdf8' }}>
                    <Zap size={17} />
                  </div>
                  <span className="badge badge-cyan" style={{ fontSize: '0.62rem' }}>&lt; 180ms Edge SLA</span>
                </div>
                <h4 style={{ color: 'var(--oda-text-primary)', fontSize: '0.94rem', fontWeight: '700', marginBottom: '6px' }}>
                  Acoustic & Semantic Intent Detection
                </h4>
                <p style={{ color: 'var(--oda-text-secondary)', fontSize: '0.79rem', lineHeight: '1.55' }}>
                  Low-latency edge processing detects customer hesitation, buying criteria, and competitor mentions before the prospect finishes their sentence.
                </p>
              </div>

              <div style={{ background: 'var(--oda-surface)', border: '1px solid var(--oda-border)', borderRadius: '12px', padding: '18px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.15)', display: 'grid', placeItems: 'center', color: '#34d399' }}>
                    <ShieldCheck size={17} />
                  </div>
                  <span className="badge badge-emerald" style={{ fontSize: '0.62rem' }}>Zero Hallucination</span>
                </div>
                <h4 style={{ color: 'var(--oda-text-primary)', fontSize: '0.94rem', fontWeight: '700', marginBottom: '6px' }}>
                  Strict Playbook & Policy Governance
                </h4>
                <p style={{ color: 'var(--oda-text-secondary)', fontSize: '0.79rem', lineHeight: '1.55' }}>
                  Suggestions are strictly anchored to company-approved battlecards, verified discounts, and legal disclosures — preventing rogue commitments.
                </p>
              </div>

              <div style={{ background: 'var(--oda-surface)', border: '1px solid var(--oda-border)', borderRadius: '12px', padding: '18px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(168, 85, 247, 0.15)', display: 'grid', placeItems: 'center', color: '#c084fc' }}>
                    <CheckCircle2 size={17} />
                  </div>
                  <span className="badge badge-purple" style={{ fontSize: '0.62rem' }}>100% Lossless Sync</span>
                </div>
                <h4 style={{ color: 'var(--oda-text-primary)', fontSize: '0.94rem', fontWeight: '700', marginBottom: '6px' }}>
                  Zero-Burden Pipeline & Task Logging
                </h4>
                <p style={{ color: 'var(--oda-text-secondary)', fontSize: '0.79rem', lineHeight: '1.55' }}>
                  Agreed timelines, next milestones, and structured meeting notes automatically update CRM pipelines and notify managers without manual data entry.
                </p>
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
