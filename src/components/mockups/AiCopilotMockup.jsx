import React, { useState } from 'react';
import {
  Sparkles,
  Send,
  Cpu,
  TrendingUp,
  BarChart2,
  CheckCircle,
  Lightbulb,
  ArrowRight,
} from 'lucide-react';

export const AiCopilotMockup = () => {
  const [selectedPromptIndex, setSelectedPromptIndex] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const prompts = [
    {
      query: 'Why did team pickup ratio dip between 2 PM - 4 PM yesterday?',
      analyzedItems: '1,420 call records, 6 carrier routes, 24 rep activity logs',
      finding: 'Carrier routing latency spiked in the Pacific Timezone (AT&T pool dropped 18% connection packets). Local presence rotation rebalanced the load.',
      action: 'Automatically switch West Coast leads to backup Twilio/Bandwidth trunk at 1:55 PM.',
      impactMetric: 'Calling pattern identified',
    },
    {
      query: 'Which lead segments have the highest close rate this week?',
      analyzedItems: '840 inbound leads, 18 deal stages, $1.2M pipeline',
      finding: 'Mid-Market B2B companies (100-500 employees) in Healthcare & FinTech have an 84.2% close probability when contacted within 4 minutes of form submission.',
      action: 'Auto-promote inbound Healthcare leads to Tier 1 priority in My Queue.',
      impactMetric: 'Pipeline context summarized',
    },
    {
      query: 'Identify the top objection reps fumbled during cold calls this month.',
      analyzedItems: '4,850 recorded call transcripts, AI speech sentiment logs',
      finding: '"Already under existing contract" was mentioned in 34% of lost opportunities, with reps offering only a 12% discount instead of contract buyout credits.',
      action: 'Update dynamic live objection battlecard with buyout credit script.',
      impactMetric: 'Coaching opportunity surfaced',
    },
  ];

  const handleSelectPrompt = (index) => {
    setIsAnalyzing(true);
    setSelectedPromptIndex(index);
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 400);
  };

  const activeData = prompts[selectedPromptIndex];

  return (
    <div className="dashboard-mockup-frame">
      {/* Header bar */}
      <div className="mockup-header-bar">
        <div className="mockup-dots">
          <div className="mockup-dot red" />
          <div className="mockup-dot yellow" />
          <div className="mockup-dot green" />
        </div>
        <div className="mockup-title-bar">
          <Sparkles size={13} color="var(--oda-primary)" />
          <span>oda7 // AI Intelligence Layer — "Explain My Numbers"</span>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span className="badge badge-cyan" style={{ fontSize: '0.6875rem' }}>
            Neural Core: Active
          </span>
        </div>
      </div>

      {/* Main Container */}
      <div style={{ padding: '24px', background: 'var(--oda-surface)', fontSize: '0.8125rem' }}>
        
        {/* Sample Prompt Selector */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.75rem', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Select or Type Natural Language Sales Query:
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
            {prompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectPrompt(idx)}
                style={{
                  padding: '10px 14px',
                  borderRadius: '8px',
                  background: selectedPromptIndex === idx ? 'var(--oda-primary-soft)' : 'var(--oda-bg-alt)',
                  border: selectedPromptIndex === idx ? '1px solid var(--oda-border-blue)' : '1px solid var(--oda-border)',
                  color: selectedPromptIndex === idx ? 'var(--oda-primary)' : 'var(--oda-text-secondary)',
                  fontSize: '0.75rem',
                  fontWeight: '500',
                  textAlign: 'left',
                  lineHeight: '1.4',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                "{p.query}"
              </button>
            ))}
          </div>
        </div>

        {/* AI Query Input Bar */}
        <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border)', borderRadius: '10px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <Sparkles size={18} color="var(--oda-primary)" />
          <div style={{ flex: '1', color: 'var(--oda-text-primary)', fontSize: '0.9rem', fontWeight: '500' }}>
            {activeData.query}
          </div>
          <button style={{ padding: '6px 14px', borderRadius: '6px', background: 'var(--oda-primary)', color: '#fff', fontWeight: '600', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px', border: 'none', cursor: 'pointer' }}>
            <span>Synthesize</span>
            <ArrowRight size={13} />
          </button>
        </div>

        {/* AI Reasoning & Action Result Box */}
        <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border)', borderRadius: '12px', padding: '20px' }}>
          
          {/* Telemetry banner */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '14px', borderBottom: '1px solid var(--oda-border-subtle)', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--oda-primary)', fontSize: '0.75rem' }}>
              <Cpu size={14} />
              <span>Synthesized {activeData.analyzedItems}</span>
            </div>
            <span className="badge badge-emerald" style={{ fontSize: '0.7rem' }}>
              {activeData.impactMetric}
            </span>
          </div>

          {/* Finding */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <BarChart2 size={13} color="var(--oda-primary)" />
              <span>Root Cause & Intelligence Finding</span>
            </div>
            <div style={{ color: 'var(--oda-text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              {activeData.finding}
            </div>
          </div>

          {/* Prescriptive Recommended Action */}
          <div style={{ background: 'var(--oda-surface)', border: '1px solid var(--oda-border)', borderRadius: '8px', padding: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <Lightbulb size={18} color="#fbbf24" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontSize: '0.7rem', color: '#fbbf24', fontWeight: '700', textTransform: 'uppercase' }}>Recommended 1-Click Action</div>
                <div style={{ color: 'var(--oda-text-primary)', fontSize: '0.85rem', fontWeight: '600', marginTop: '2px' }}>
                  {activeData.action}
                </div>
              </div>
            </div>
            <button style={{ padding: '8px 16px', borderRadius: '6px', background: 'var(--oda-success)', color: '#fff', fontWeight: '700', fontSize: '0.75rem', whiteSpace: 'nowrap', border: 'none', cursor: 'pointer' }}>
              Execute Now
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
