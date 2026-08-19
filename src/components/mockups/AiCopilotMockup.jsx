'use client';

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
      query: 'Where did the team’s calling pattern change yesterday?',
      analyzedItems: 'available call, routing, and team activity context',
      finding: 'The selected period shows a change in connection activity alongside a routing change. Review the underlying records before deciding on an adjustment.',
      action: 'Open the affected period and compare routing context with team availability.',
      impactMetric: 'Calling pattern identified',
    },
    {
      query: 'Which lead segments should the team review this week?',
      analyzedItems: 'available lead, stage, and activity context',
      finding: 'One group shows a different progression pattern from the wider queue. The source records remain available for a person to inspect.',
      action: 'Review the segment and decide whether its queue priority should change.',
      impactMetric: 'Pipeline context summarized',
    },
    {
      query: 'Which conversation theme may need a coaching review?',
      analyzedItems: 'available conversation and outcome context',
      finding: 'A recurring implementation concern appears in several reviewed conversations and may benefit from a clearer team response.',
      action: 'Open the related conversations and prepare a reviewed guidance note.',
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
            Illustrative AI view
          </span>
        </div>
      </div>

      {/* Main Container */}
      <div className="ai-mockup-body" style={{ padding: 'clamp(14px, 3vw, 24px)', background: 'var(--oda-surface)', fontSize: '0.8125rem' }}>
        
        {/* Sample Prompt Selector */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.75rem', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Select or Type Natural Language Sales Query:
          </div>
          <div className="ai-prompts-grid">
            {prompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectPrompt(idx)}
                className="ai-prompt-btn"
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
                  minWidth: 0,
                  wordBreak: 'break-word',
                }}
              >
                "{p.query}"
              </button>
            ))}
          </div>
        </div>

        {/* AI Query Input Bar */}
        <div className="ai-query-bar">
          <Sparkles size={18} color="var(--oda-primary)" style={{ flexShrink: 0 }} />
          <div style={{ flex: '1', color: 'var(--oda-text-primary)', fontSize: '0.9rem', fontWeight: '500', minWidth: 0, wordBreak: 'break-word' }}>
            {activeData.query}
          </div>
          <button style={{ padding: '6px 14px', borderRadius: '6px', background: 'var(--oda-primary)', color: '#fff', fontWeight: '600', fontSize: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer', flexShrink: 0 }}>
            <span>Synthesize</span>
          </button>
        </div>

        {/* AI Reasoning & Action Result Box */}
        <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border)', borderRadius: '12px', padding: 'clamp(14px, 2.5vw, 20px)' }}>
          
          {/* Telemetry banner */}
          <div className="ai-telemetry-banner">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--oda-primary)', fontSize: '0.75rem', flexWrap: 'wrap' }}>
              <Cpu size={14} style={{ flexShrink: 0 }} />
              <span>Synthesized {activeData.analyzedItems}</span>
            </div>
            <span className="badge badge-emerald" style={{ fontSize: '0.7rem', flexShrink: 0 }}>
              {activeData.impactMetric}
            </span>
          </div>

          {/* Finding */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <BarChart2 size={13} color="var(--oda-primary)" />
              <span>Context summary</span>
            </div>
            <div style={{ color: 'var(--oda-text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              {activeData.finding}
            </div>
          </div>

          {/* Prescriptive Recommended Action */}
          <div className="ai-action-card">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', minWidth: 0 }}>
              <Lightbulb size={18} color="#fbbf24" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: '0.7rem', color: '#fbbf24', fontWeight: '700', textTransform: 'uppercase' }}>Suggested next step</div>
                <div style={{ color: 'var(--oda-text-primary)', fontSize: '0.85rem', fontWeight: '600', marginTop: '2px', wordBreak: 'break-word' }}>
                  {activeData.action}
                </div>
              </div>
            </div>
            <button style={{ padding: '8px 16px', borderRadius: '6px', background: 'var(--oda-success)', color: '#fff', fontWeight: '700', fontSize: '0.75rem', whiteSpace: 'nowrap', border: 'none', cursor: 'pointer', flexShrink: 0 }}>
              Review
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
