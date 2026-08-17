import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import {
  UserCheck,
  PhoneCall,
  MessageSquare,
  FileCheck,
  Award,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';

export const SalesWorkflowSection = () => {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      step: '01',
      title: 'Lead Ingestion & Ranking',
      icon: UserCheck,
      description: 'Inbound forms, web callbacks, and CSV lists are automatically enriched, phone-verified, and ranked into My Queue.',
      featureTag: 'My Queue & Lead Scorer',
      preview: 'Algorithmic queue eliminates rep cherry-picking and ensures high-intent prospects are contacted within 15 seconds.',
    },
    {
      step: '02',
      title: '1-Click Call & Dynamic Scripts',
      icon: PhoneCall,
      description: 'Launch crystal WebRTC calls with local presence dialing. Reps follow interactive branching scripts that guide conversation paths.',
      featureTag: 'Smart Predictive Dialer',
      preview: 'Keep the next call, lead context and follow-up action in one focused workflow.',
    },
    {
      step: '03',
      title: 'Omnichannel Follow-Up Sequences',
      icon: MessageSquare,
      description: 'Trigger multi-channel automated cadences across WhatsApp Business, 2-way SMS, and tracked emails directly from the call log.',
      featureTag: 'Sequences & Unified Inbox',
      preview: 'Centralize prospect SMS and WhatsApp chats in one unified thread so no context is ever lost.',
    },
    {
      step: '04',
      title: 'Instant Quotes & CPQ Proposals',
      icon: FileCheck,
      description: 'Select product packages from the integrated catalog, generate legal proposals, and get client digital signatures on the fly.',
      featureTag: 'Quotes & Product Catalog',
      preview: 'Clients sign via mobile in seconds, triggering immediate Closed-Won stage progression across the CRM.',
    },
    {
      step: '05',
      title: 'Deal Closed & Wallet Credit',
      icon: Award,
      description: 'Deal closes, onboarding handoff fires automatically, and rep sees their commission balance update instantly on the leaderboard.',
      featureTag: 'Real-time Commissions',
      preview: 'Instant celebration broadcast across the sales floor TV screens with live confetti effects.',
    },
  ];

  return (
    <section id="sales-workspace" className="section-wrapper">
      <div className="container">
        
        <SectionHeading
          eyebrow="Sales Rep Workspace"
          eyebrowIcon="PhoneCall"
          title="The high-velocity workflow from"
          highlightText="Lead to Close."
          description="Give your sales representatives the ultimate streamlined workspace. Every dial, script, follow-up, and proposal happens without leaving the conversation."
        />

        {/* Workflow Interactive Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '32px' }}>
          {stages.map((stage, idx) => {
            const IconComp = stage.icon;
            const isActive = activeStage === idx;

            return (
              <div
                key={stage.step}
                onClick={() => setActiveStage(idx)}
                style={{
                  padding: '16px',
                  borderRadius: '10px',
                  background: isActive ? 'rgba(37, 99, 235, 0.15)' : 'rgba(14, 19, 31, 0.6)',
                  border: isActive ? '1px solid rgba(59, 130, 246, 0.5)' : '1px solid rgba(255, 255, 255, 0.05)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: isActive ? '#38bdf8' : '#64748b' }}>
                    {stage.step}
                  </span>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '6px',
                    background: isActive ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                  }}>
                    <IconComp size={14} />
                  </div>
                </div>

                <div style={{ fontWeight: '700', color: isActive ? '#fff' : '#cbd5e1', fontSize: '0.9rem' }}>
                  {stage.title}
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Stage Highlight Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(14, 23, 42, 0.9) 0%, rgba(7, 10, 18, 0.9) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '16px',
            padding: '32px',
          }}
          key={activeStage}
          className="animate-fadeIn"
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '32px', alignItems: 'center' }}>
            <div>
              <span className="badge badge-cyan" style={{ marginBottom: '12px' }}>
                {stages[activeStage].featureTag}
              </span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#fff', marginBottom: '12px' }}>
                {stages[activeStage].title}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '16px' }}>
                {stages[activeStage].description}
              </p>
              <div style={{ background: 'rgba(37, 99, 235, 0.12)', borderLeft: '3px solid #3b82f6', padding: '12px 16px', borderRadius: '6px', color: '#93c5fd', fontSize: '0.85rem' }}>
                <strong>Key Rep Benefit:</strong> {stages[activeStage].preview}
              </div>
            </div>

            {/* Visual Step Badge Box */}
            <div style={{ background: 'rgba(7, 10, 18, 0.8)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#64748b', textTransform: 'uppercase', marginBottom: '8px' }}>
                Stage Progression
              </div>
              <div style={{ fontSize: '1.3rem', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
                Lead &rarr; Call &rarr; Sequence &rarr; Quote &rarr; Close
              </div>
              <span className="badge badge-emerald">100% Native in oda7</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
