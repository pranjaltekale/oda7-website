import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
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
      title: 'Lead Ingestion & Priority Queue',
      desc: 'Prospects from web forms, Facebook Ads, and inbound webhooks enter an automated qualification and assignment pipeline.',
      featureTag: 'Leads & Ingestion',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
      persona: 'Alex Rivera • SDR Specialist',
      preview: 'Algorithmic lead scoring prioritizes high-intent prospects and prevents sales reps from cherry-picking.',
      imageOverlayBadge: 'Stage 1 • Prioritized Intake',
      actionLabel: '1-Click Auto-Prioritize Queue',
      description: 'Incoming prospects are immediately tagged with source UTMs, checked against duplicate rules, and placed into prioritized SDR queues based on timezone and closing probability.',
      uiSimulation: {
        title: 'Priority Queue (My Queue)',
        items: [
          { name: 'Sarah Jenkins', company: 'Logix Ent.', score: '96 AI', status: 'Next In Dial Queue' },
          { name: 'Liam Vance', company: 'OmniCorp', score: '88 AI', status: 'Inbound Form 2m ago' },
        ],
      },
    },
    {
      step: '02',
      title: 'Predictive 0.8s Telephony Dialing',
      desc: 'Reps dial prospects with local presence numbers to lift pickup rates by 34%, with 1-click voicemail drop.',
      featureTag: 'Telephony & Dialing',
      icon: PhoneCall,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80',
      persona: 'Marcus Chen • Enterprise AE',
      preview: '0.8s WebRTC softphone with local presence dialing directly within the browser.',
      imageOverlayBadge: 'Stage 2 • WebRTC Calling Active',
      actionLabel: 'Simulate 0.8s Local Presence Call',
      description: 'Connect to prospect area codes in sub-seconds. ODA7 provisions localized numbers dynamically to establish instant rapport and maximize connect rates.',
      uiSimulation: {
        title: '0.8s WebRTC Softphone',
        items: [
          { name: 'Connected: (512) 840-9211', company: 'Austin Local Match', score: 'Audio HD', status: '02:45 Connected' },
        ],
      },
    },
    {
      step: '03',
      title: 'Live Scripting & Real-Time Battlecards',
      desc: 'Dynamic branching sales scripts guide junior reps through objection handling and compliance disclosures.',
      featureTag: 'Adaptive Scripting',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=80',
      persona: 'Sarah Jenkins • Senior Account Exec',
      preview: 'Branching decision trees adapt talk tracks in real-time as customer objections are surfaced.',
      imageOverlayBadge: 'Stage 3 • Real-Time Objection AI',
      actionLabel: 'Deploy 6-Mo Buyout Script Track',
      description: 'As prospects raise pricing, timing, or competitor objections, ODA7 pops winning counter-narratives and proof metrics directly onto the rep’s active call view.',
      uiSimulation: {
        title: 'Objection Buster Battlecard',
        items: [
          { name: 'Detected: "Competitor Lock-in"', company: 'Suggested Rebuttal', score: '98% Win', status: 'Deploy 6-Mo Buyout Credit' },
        ],
      },
    },
    {
      step: '04',
      title: 'Unified 2-Way WhatsApp & Email Follow-up',
      desc: 'Seamlessly follow up across official WhatsApp Business API, SMS, and email threads in one central conversation timeline.',
      featureTag: 'Omni Inbox',
      icon: Inbox,
      image: 'https://images.unsplash.com/photo-1580894732414-0675276e053a?w=800&auto=format&fit=crop&q=80',
      persona: 'Elena Rostova • Growth Lead',
      preview: 'All customer touchpoints centralized into a single timeline linked to the contact record.',
      imageOverlayBadge: 'Stage 4 • Official 2-Way WhatsApp',
      actionLabel: 'Send WhatsApp Executive Deck',
      description: 'No more lost context or siloed conversations on reps’ personal devices. Send approved WhatsApp message templates, track reads, and respond instantly.',
      uiSimulation: {
        title: 'Official WhatsApp Business Thread',
        items: [
          { name: 'Deck Delivered to Sarah J.', company: 'Read receipt verified', score: 'Instant', status: 'Meeting Confirmed Thu 2 PM' },
        ],
      },
    },
    {
      step: '05',
      title: '1-Click CPQ Proposals & Digital Signatures',
      desc: 'Generate customized PDF quotes with automated discounting rules and client e-signature tracking.',
      featureTag: 'CPQ & Quotes',
      icon: FileText,
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
      persona: 'David Miller • Commercial Director',
      preview: 'Generate standardized proposals in seconds with automated discount thresholds.',
      imageOverlayBadge: 'Stage 5 • Instant CPQ Proposal',
      actionLabel: 'Generate 1-Click Proposal Link',
      description: 'Select products from the catalog, apply pre-approved discount tiers, and send customized proposal links that notify the rep the moment the client opens the document.',
      uiSimulation: {
        title: 'CPQ Bundle Proposal ($48,000/yr)',
        items: [
          { name: 'Enterprise Bundle (24 Seats)', company: 'Auto-Discount Approved', score: 'e-Sign', status: 'Signed by Client on Mobile' },
        ],
      },
    },
    {
      step: '06',
      title: 'Automated Commission & Payroll Calculation',
      desc: 'Closed-Won deal events trigger instant commission credits and itemized payslip generation.',
      featureTag: 'Compensation & Payroll',
      icon: DollarSign,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
      persona: 'Inside Sales Floor Team',
      preview: 'Instant commission tier calculation and digital wallet credit upon deal close.',
      imageOverlayBadge: 'Stage 6 • Closed-Won Commission',
      actionLabel: 'Credit Wallet & Prep PDF Payslip',
      description: 'Eliminate end-of-month spreadsheet reconciliation battles. The moment an opportunity flips to Closed-Won, commissions calculate automatically and route to payslips.',
      uiSimulation: {
        title: 'Instant Commission Wallet Update',
        items: [
          { name: '+$3,420.00 Commission Credited', company: 'Closed-Won Deal Event', score: 'Tier 2', status: 'Itemized PDF Payslip Ready' },
        ],
      },
    },
  ];

  const current = stages[activeStage];

  return (
    <section className="section-wrapper section-alt" id="sales-workflow">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="End-to-End Sales Lifecycle"
          eyebrowIcon="Zap"
          title="From first contact to"
          highlightText="commission payout."
          description="Experience how ODA7 powers the entire revenue lifecycle seamlessly without requiring reps to toggle between 5+ separate browser tabs."
        />

        {/* 6 Stage Selector Strip */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
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
                className="tab-pill-interactive card-interactive-lift"
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
        <div
          className="feature-showcase-panel card-interactive-lift animate-fadeIn"
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            borderRadius: '28px',
            padding: 'clamp(28px, 4.5vw, 48px)',
          }}
          key={activeStage}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(320px, 1.15fr) minmax(320px, 1.1fr)',
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

                {/* 1-Click Interactive Action Button */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', marginTop: '12px', paddingTop: '10px', borderTop: '1px solid var(--oda-border-subtle)' }}>
                  <button
                    onClick={() => handleTriggerAction(current.actionLabel)}
                    className="btn-tactile"
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

            {/* Right Side: Real-World Role Photo with Overlay */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div
                className="image-interactive-zoom"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '420px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1px solid var(--oda-border-blue)',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
                }}
              >
                <img
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
                <div
                  style={{
                    position: 'absolute',
                    bottom: '18px',
                    left: '18px',
                    right: '18px',
                    background: 'rgba(11, 15, 23, 0.94)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <div style={{ color: '#fff', fontWeight: '750', fontSize: '0.85rem' }}>{current.persona}</div>
                    <div style={{ color: '#38bdf8', fontSize: '0.75rem' }}>Inside Sales Floor • Synchronized Mesh</div>
                  </div>
                  <span className="badge badge-emerald" style={{ fontSize: '0.6875rem' }}>
                    {current.imageOverlayBadge}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
