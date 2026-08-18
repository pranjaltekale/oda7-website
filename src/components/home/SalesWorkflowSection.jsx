'use client';

import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { LightTabIndicator } from '../common/LightTabIndicator';
import { ProductStateTransition } from '../common/ProductStateTransition';
import { InteractiveTiltCard } from '../common/InteractiveTiltCard';
import {
  Users,
  PhoneCall,
  Sparkles,
  Inbox,
  FileText,
  DollarSign,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Zap,
  Clock,
  Volume2,
  Check,
  Send,
} from 'lucide-react';

export const SalesWorkflowSection = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [actionFeedback, setActionFeedback] = useState(null);

  const handleTriggerAction = (stageTitle) => {
    setActionFeedback(`Simulating: ${stageTitle}...`);
    setTimeout(() => {
      setActionFeedback(`✓ Synchronized with ODA7 live mesh!`);
      setTimeout(() => setActionFeedback(null), 2500);
    }, 450);
  };

  const stages = [
    {
      step: '01',
      title: 'Capture and assign the next lead',
      desc: 'New enquiries enter a visible queue with source, ownership and a clear next action.',
      featureTag: 'Leads & Ingestion',
      icon: Users,
      image: '/oda7-scenario-insidesales.jpg',
      persona: 'Sales representative • Lead queue',
      preview: 'Source and ownership stay attached as the enquiry enters the team workflow.',
      imageOverlayBadge: 'Stage 1 • Capture and assign',
      actionLabel: 'Preview queue assignment',
      description: 'ODA7 keeps intake context beside the record so the team can understand where the enquiry came from, who owns it and what should happen next.',
      uiSimulation: {
        title: 'Priority Queue (My Queue)',
        items: [
          { name: 'New website enquiry', company: 'Assigned to sales', score: 'Ready', status: 'Next in queue' },
          { name: 'Campaign response', company: 'Source context attached', score: 'New', status: 'Awaiting first action' },
        ],
      },
    },
    {
      step: '02',
      title: 'Start the conversation with context',
      desc: 'Calling controls, the customer record and the active talk track stay in one focused view.',
      featureTag: 'Telephony & Dialing',
      icon: PhoneCall,
      image: '/oda7-sales-conversation.png',
      persona: 'Sales representative • Conversation view',
      preview: 'The rep can review the record, place the call and capture the outcome without changing tools.',
      imageOverlayBadge: 'Stage 2 • Conversation active',
      actionLabel: 'Preview call workspace',
      description: 'The conversation becomes part of the lead timeline, making its outcome and follow-up visible to the rep and manager.',
      uiSimulation: {
        title: 'Browser calling workspace',
        items: [
          { name: 'Customer conversation', company: 'Lead context visible', score: 'Live', status: 'Outcome waiting' },
        ],
      },
    },
    {
      step: '03',
      title: 'Surface guidance at the right moment',
      desc: 'Conversation prompts and reusable talk tracks stay beside the active customer context.',
      featureTag: 'Adaptive Scripting',
      icon: Sparkles,
      image: '/oda7-ai-assist.png',
      persona: 'Sales representative • Assisted conversation',
      preview: 'Guidance appears where the rep is already working, without opening a separate chat window.',
      imageOverlayBadge: 'Stage 3 • Relevant guidance',
      actionLabel: 'Preview suggested response',
      description: 'When a customer raises a common concern, ODA7 can surface approved guidance and keep the rep focused on the conversation.',
      uiSimulation: {
        title: 'Conversation guidance',
        items: [
          { name: 'Concern noted: current contract', company: 'Approved response available', score: 'Review', status: 'Ready for the rep' },
        ],
      },
    },
    {
      step: '04',
      title: 'Continue the follow-up in one timeline',
      desc: 'Keep messages, responses and ownership connected to the customer record.',
      featureTag: 'Omni Inbox',
      icon: Inbox,
      image: '/oda7-team-story.jpg',
      persona: 'Growth team • Shared follow-up',
      preview: 'All customer touchpoints centralized into a single timeline linked to the contact record.',
      imageOverlayBadge: 'Stage 4 • Follow-up coordinated',
      actionLabel: 'Preview follow-up action',
      description: 'Approved messages and customer replies remain visible to the team, preserving context when responsibility changes.',
      uiSimulation: {
        title: 'Shared customer thread',
        items: [
          { name: 'Follow-up shared', company: 'Customer timeline updated', score: 'Sent', status: 'Next action scheduled' },
        ],
      },
    },
    {
      step: '05',
      title: 'Prepare the commercial next step',
      desc: 'Carry product context and approved pricing into a clear proposal workflow.',
      featureTag: 'CPQ & Quotes',
      icon: FileText,
      image: '/oda7-scenario-agency.jpg',
      persona: 'Commercial team • Proposal review',
      preview: 'Product selection, approval context and proposal status remain connected to the opportunity.',
      imageOverlayBadge: 'Stage 5 • Proposal prepared',
      actionLabel: 'Preview proposal workflow',
      description: 'The team can assemble an approved offer and keep its review, sharing and follow-up state visible.',
      uiSimulation: {
        title: 'Proposal workflow',
        items: [
          { name: 'Proposed package', company: 'Approval context attached', score: 'Review', status: 'Ready to share' },
        ],
      },
    },
    {
      step: '06',
      title: 'Carry the outcome into compensation review',
      desc: 'Approved deal outcomes can feed the commission and payroll preparation workflow.',
      featureTag: 'Compensation & Payroll',
      icon: DollarSign,
      image: '/oda7-module-compensation.jpg',
      persona: 'People operations • Compensation review',
      preview: 'The verified outcome and applicable compensation rule remain part of the same audit trail.',
      imageOverlayBadge: 'Stage 6 • Outcome reviewed',
      actionLabel: 'Preview compensation handoff',
      description: 'Instead of rebuilding deal context in a spreadsheet, operations can review the underlying outcome before preparing compensation records.',
      uiSimulation: {
        title: 'Compensation handoff',
        items: [
          { name: 'Commission rule identified', company: 'Verified outcome attached', score: 'Review', status: 'Ready for payroll preparation' },
        ],
      },
    },
  ];

  const current = stages[activeStage];

  return (
    <section className="section-wrapper section-alt" id="sales-workflow">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="Sales workflow"
          eyebrowIcon="Zap"
          title="Keep the customer journey"
          highlightText="connected to the work."
          description="Follow one enquiry as it moves through ownership, conversation, follow-up, proposal and operational handoff."
        />

        {/* 6 Stage Selector Strip */}
        <div
          className="sales-stage-strip"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '12px',
            marginBottom: '32px',
            maxWidth: '1240px',
            marginInline: 'auto',
          }}
        >
          {stages.map((stage, idx) => {
            const IconComp = stage.icon;
            const isActive = activeStage === idx;

            return (
              <div
                key={stage.step}
                onClick={() => setActiveStage(idx)}
                className={`tab-pill-interactive card-interactive-lift ${isActive ? 'is-active' : ''}`}
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  background: isActive ? 'var(--oda-primary-soft)' : 'var(--oda-surface)',
                  border: isActive ? '1px solid var(--oda-border-blue)' : '1px solid var(--oda-border)',
                  cursor: 'pointer',
                  boxShadow: isActive ? '0 4px 16px rgba(37, 99, 235, 0.16)' : '0 2px 6px rgba(0,0,0,0.03)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: isActive ? 'var(--oda-primary)' : 'var(--oda-text-muted)', fontWeight: '750' }}>
                    STAGE {stage.step}
                  </span>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '6px',
                    background: isActive ? 'var(--oda-primary)' : 'var(--oda-surface-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isActive ? '#fff' : 'var(--oda-text-muted)',
                  }}>
                    <IconComp size={14} />
                  </div>
                </div>

                <div style={{ fontWeight: '750', color: isActive ? 'var(--oda-primary)' : 'var(--oda-text-primary)', fontSize: '0.9rem' }}>
                  {stage.title}
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Stage Highlight Box with Real-World Photography & Simulated Product Widget */}
        <ProductStateTransition activeKey={activeStage}>
          <div
            className="feature-showcase-panel card-interactive-lift"
            style={{
              maxWidth: '1240px',
              margin: '0 auto',
              borderRadius: '28px',
              padding: 'clamp(24px, 4.5vw, 48px)',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 1.1fr)',
                gap: 'clamp(32px, 5vw, 56px)',
                alignItems: 'center',
              }}
              className="mockup-grid-2col"
            >
              {/* Left Side: Stage Details & Simulated Live UI */}
              <div>
                <span className="badge badge-cyan" style={{ marginBottom: '14px' }}>
                  {current.featureTag}
                </span>
                <h3 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.3rem)', fontWeight: '850', color: 'var(--oda-text-primary)', marginBottom: '14px', lineHeight: '1.18' }}>
                  {current.title}
                </h3>
                <p style={{ color: 'var(--oda-text-secondary)', fontSize: '0.975rem', lineHeight: '1.7', marginBottom: '20px' }}>
                  {current.description}
                </p>

                {/* Simulated Live UI Card */}
                <div style={{ background: 'var(--oda-surface)', border: '1px solid var(--oda-border-blue)', borderRadius: '12px', padding: '16px', marginBottom: '18px', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', fontSize: '0.75rem', color: 'var(--oda-primary)', fontWeight: '700', textTransform: 'uppercase' }}>
                    <span>{current.uiSimulation.title}</span>
                    <span className="badge badge-emerald" style={{ fontSize: '0.65rem' }}>Live Telemetry</span>
                  </div>
                  {current.uiSimulation.items.map((item, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: 'var(--oda-bg-alt)', borderRadius: '8px', border: '1px solid var(--oda-border)', marginBottom: '10px' }}>
                      <div>
                        <div style={{ fontWeight: '700', color: 'var(--oda-text-primary)', fontSize: '0.85rem' }}>{item.name}</div>
                        <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.75rem' }}>{item.company}</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <span className="badge badge-primary" style={{ fontSize: '0.7rem' }}>{item.score}</span>
                        <div style={{ color: 'var(--oda-success)', fontSize: '0.7rem', fontWeight: '600', marginTop: '2px' }}>{item.status}</div>
                      </div>
                    </div>
                  ))}

                  {/* 1-Click Interactive Action Button with Magnetic Arrow */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', marginTop: '12px', paddingTop: '10px', borderTop: '1px solid var(--oda-border-subtle)' }}>
                    <button
                      onClick={() => handleTriggerAction(current.actionLabel)}
                      className="btn-tactile magnetic-arrow-wrap"
                      style={{
                        padding: '8px 16px',
                        borderRadius: '8px',
                        background: 'var(--oda-primary)',
                        color: '#ffffff',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 2px 8px rgba(37, 99, 235, 0.3)',
                      }}
                    >
                      <span>{current.actionLabel}</span>
                      <ArrowRight size={13} className="arrow-slide" />
                    </button>

                    {actionFeedback && (
                      <span className="animate-fadeIn" style={{ fontSize: '0.75rem', color: 'var(--oda-success)', fontWeight: '700' }}>
                        {actionFeedback}
                      </span>
                    )}
                  </div>
                </div>

                <div style={{ background: 'var(--oda-primary-soft)', borderLeft: '3px solid var(--oda-primary)', padding: '12px 16px', borderRadius: '8px', color: 'var(--oda-text-primary)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                  <strong style={{ color: 'var(--oda-primary)' }}>Key Rep Benefit:</strong> {current.preview}
                </div>
              </div>

              {/* Right Side: Real-World Role Photo with Overlay in InteractiveTiltCard */}
              <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                <InteractiveTiltCard
                  maxTilt={3}
                  scale={1.015}
                  className="story-image-card-responsive"
                >
                  <img
                    className="tilt-parallax-img"
                    src={current.image}
                    alt={current.persona}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 15%',
                      display: 'block',
                      filter: 'contrast(1.05) brightness(0.96)',
                    }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(7, 9, 14, 0.9) 100%)', pointerEvents: 'none' }} />
                  
                  {/* Floating Bottom Telemetry Badge inside Image */}
                  <div className="story-telemetry-badge-bottom">
                    <div>
                      <div style={{ color: '#fff', fontWeight: '750', fontSize: '0.85rem' }}>{current.persona}</div>
                      <div style={{ color: '#38bdf8', fontSize: '0.75rem' }}>Inside Sales Floor • Synchronized Mesh</div>
                    </div>
                    <span className="badge badge-emerald" style={{ fontSize: '0.6875rem' }}>
                      {current.imageOverlayBadge}
                    </span>
                  </div>
                </InteractiveTiltCard>
              </div>
            </div>
          </div>
        </ProductStateTransition>

      </div>
    </section>
  );
};
