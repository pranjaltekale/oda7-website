'use client';

import React, { useState } from 'react';
import {
  PhoneCall,
  PhoneOff,
  Mic,
  Volume2,
  Sparkles,
  Layers,
  Clock,
  TrendingUp,
  MessageSquare,
  FileText,
  CheckCircle2,
  ChevronRight,
  ShieldAlert,
  Inbox,
  UserCheck,
  Building2,
  Send,
} from 'lucide-react';

export const SalesDashboardMockup = ({ interactive = true }) => {
  const [activeWorkspaceTab, setActiveWorkspaceTab] = useState('queue'); // 'queue' | 'leads' | 'sequences' | 'quotes'
  const [selectedScriptBranch, setSelectedScriptBranch] = useState(0);

  const scriptBranches = [
    { title: 'Connected workspace', text: 'Bring lead context, calling, follow-up and commercial actions into one continuous workflow.' },
    { title: 'Calling Context', text: 'Connect website enquiries, lead ownership and the calling workflow in one operating view.' },
    { title: 'Coaching & AI', text: 'Give managers conversation context while AI-assisted actions remain visible to the agent.' },
  ];

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
          <span className="pulse-dot" />
          <span>ODA7 // Sales Workspace — Illustrative SDR View</span>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {/* Live Waveform */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2px', height: '14px', marginRight: '6px' }}>
            <div className="audio-wave-bar" style={{ animationDelay: '0s' }} />
            <div className="audio-wave-bar" style={{ animationDelay: '0.2s' }} />
            <div className="audio-wave-bar" style={{ animationDelay: '0.4s' }} />
            <div className="audio-wave-bar" style={{ animationDelay: '0.1s' }} />
          </div>
          <span className="badge badge-emerald" style={{ fontSize: '0.6875rem' }}>
            Illustrative call state
          </span>
        </div>
      </div>

      {/* Main Grid inside Mockup */}
      <div className="mockup-grid-3col" style={{ display: 'grid', gridTemplateColumns: '260px 1fr 300px', minHeight: '490px', background: 'var(--oda-surface)', fontSize: '0.8125rem' }}>
        
        {/* Left Sidebar: My Queue & Sub-tabs */}
        <div style={{ borderRight: '1px solid var(--oda-border)', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', background: 'var(--oda-bg-alt)' }}>
          
          {/* Workspace Tab Switcher */}
          <div style={{ display: 'flex', gap: '4px', background: 'var(--oda-surface)', padding: '3px', borderRadius: '6px', marginBottom: '4px', border: '1px solid var(--oda-border)' }}>
            <button
              onClick={() => setActiveWorkspaceTab('queue')}
              style={{
                flex: 1,
                padding: '4px 6px',
                borderRadius: '4px',
                fontSize: '0.7rem',
                fontWeight: '600',
                background: activeWorkspaceTab === 'queue' ? 'var(--oda-primary-soft)' : 'transparent',
                color: activeWorkspaceTab === 'queue' ? 'var(--oda-primary)' : 'var(--oda-text-muted)',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              My Queue
            </button>
            <button
              onClick={() => setActiveWorkspaceTab('sequences')}
              style={{
                flex: 1,
                padding: '4px 6px',
                borderRadius: '4px',
                fontSize: '0.7rem',
                fontWeight: '600',
                background: activeWorkspaceTab === 'sequences' ? 'var(--oda-primary-soft)' : 'transparent',
                color: activeWorkspaceTab === 'sequences' ? 'var(--oda-primary)' : 'var(--oda-text-muted)',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Sequences
            </button>
          </div>

          {/* Queue Item 1 (Active) */}
          <div style={{ background: 'var(--oda-primary-soft)', border: '1px solid var(--oda-border-blue)', borderRadius: '8px', padding: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <span style={{ fontWeight: '700', color: 'var(--oda-text-primary)' }}>Customer record A</span>
              <span style={{ color: 'var(--oda-success)', fontWeight: '700', fontSize: '0.75rem' }}>Priority context</span>
            </div>
            <div style={{ color: 'var(--oda-text-secondary)', fontSize: '0.75rem' }}>Operations lead • Example account</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px', color: 'var(--oda-primary)', fontSize: '0.7rem' }}>
              <Clock size={11} /> Connected • Record open
            </div>
          </div>

          {/* Queue Item 2 */}
          <div style={{ background: 'var(--oda-surface)', border: '1px solid var(--oda-border)', borderRadius: '8px', padding: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <span style={{ fontWeight: '600', color: 'var(--oda-text-primary)' }}>Customer record B</span>
              <span style={{ color: 'var(--oda-primary)', fontWeight: '700', fontSize: '0.75rem' }}>Review next</span>
            </div>
            <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.75rem' }}>Sales lead • Example account</div>
            <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.7rem', marginTop: '4px' }}>Inbound form • Recent</div>
          </div>

          {/* Queue Item 3 */}
          <div style={{ background: 'var(--oda-surface)', border: '1px solid var(--oda-border)', borderRadius: '8px', padding: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <span style={{ fontWeight: '600', color: 'var(--oda-text-primary)' }}>Customer record C</span>
              <span style={{ color: '#fbbf24', fontWeight: '700', fontSize: '0.75rem' }}>Follow-up</span>
            </div>
            <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.75rem' }}>People lead • Example account</div>
            <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.7rem', marginTop: '4px' }}>Sequence step • Messaging</div>
          </div>

          {/* Personal Performance Scorecard */}
          <div style={{ marginTop: 'auto', background: 'var(--oda-surface)', border: '1px solid var(--oda-border)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ fontSize: '0.7rem', color: 'var(--oda-text-muted)', textTransform: 'uppercase', marginBottom: '6px', fontWeight: '600' }}>Personal workflow context</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span style={{ color: 'var(--oda-text-muted)' }}>Calls Completed</span>
              <span style={{ color: 'var(--oda-text-primary)', fontWeight: '700' }}>Visible</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span style={{ color: 'var(--oda-text-muted)' }}>Pickup Ratio</span>
              <span style={{ color: 'var(--oda-success)', fontWeight: '700' }}>Reviewable</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--oda-text-muted)' }}>Commission Wallet</span>
              <span style={{ color: 'var(--oda-primary)', fontWeight: '700' }}>Rule context</span>
            </div>
          </div>
        </div>

        {/* Middle: Active Call & Dynamic Interactive Script */}
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Active Call Header Card */}
          <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border)', borderRadius: '10px', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--oda-primary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Active conversation • Customer context attached
              </div>
              <div style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--oda-text-primary)', marginTop: '2px' }}>
                Customer record A <span style={{ fontSize: '0.85rem', color: 'var(--oda-text-muted)', fontWeight: '400' }}>Illustrative contact</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '6px', color: 'var(--oda-text-secondary)', fontSize: '0.75rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <TrendingUp size={13} color="#10b981" /> Priority: Review
                </span>
                <span>•</span>
                <span>Opportunity context: Available</span>
              </div>
            </div>

            {/* In-Call Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--oda-surface)', border: '1px solid var(--oda-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--oda-text-primary)', cursor: 'pointer' }} aria-label="Mute microphone">
                <Mic size={15} />
              </button>
              <button style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--oda-surface)', border: '1px solid var(--oda-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--oda-text-primary)', cursor: 'pointer' }} aria-label="Speaker audio">
                <Volume2 size={15} />
              </button>
              <button style={{ height: '36px', padding: '0 16px', borderRadius: '18px', background: '#ef4444', color: '#fff', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px', border: 'none', cursor: 'pointer' }}>
                <PhoneOff size={14} /> End & Log
              </button>
            </div>
          </div>

          {/* Dynamic Interactive Scripting Panel */}
          <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border)', borderRadius: '10px', padding: '16px', flex: '1', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{ fontWeight: '700', color: 'var(--oda-text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FileText size={15} color="var(--oda-primary)" />
                <span>Interactive Dynamic Script (Enterprise B2B Opener)</span>
              </div>
              <span className="badge badge-cyan" style={{ fontSize: '0.65rem' }}>Branching Logic</span>
            </div>

            {/* Script branches */}
            <div style={{ display: 'flex', gap: '6px', marginBottom: '12px', flexWrap: 'wrap' }}>
              {scriptBranches.map((branch, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedScriptBranch(idx)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    background: selectedScriptBranch === idx ? 'var(--oda-primary-soft)' : 'var(--oda-surface)',
                    color: selectedScriptBranch === idx ? 'var(--oda-primary)' : 'var(--oda-text-secondary)',
                    border: selectedScriptBranch === idx ? '1px solid var(--oda-border-blue)' : '1px solid var(--oda-border)',
                    cursor: 'pointer',
                  }}
                >
                  {branch.title}
                </button>
              ))}
            </div>

            {/* Script Text Box */}
            <div style={{ background: 'var(--oda-surface)', border: '1px solid var(--oda-border)', borderRadius: '8px', padding: '14px', lineHeight: '1.6', color: 'var(--oda-text-primary)', fontSize: '0.85rem' }}>
              <p style={{ margin: '0' }}>"{scriptBranches[selectedScriptBranch].text}"</p>
            </div>

            {/* 1-Click Action Bar */}
            <div style={{ marginTop: 'auto', paddingTop: '12px', display: 'flex', gap: '8px' }}>
              <button style={{ flex: '1', padding: '8px 12px', borderRadius: '6px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', color: '#10b981', fontWeight: '600', fontSize: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', cursor: 'pointer' }}>
                <CheckCircle2 size={13} /> Stage: Qualified Demo
              </button>
              <button style={{ flex: '1', padding: '8px 12px', borderRadius: '6px', background: 'var(--oda-surface)', border: '1px solid var(--oda-border)', color: 'var(--oda-text-primary)', fontSize: '0.75rem', cursor: 'pointer' }}>
                Send WhatsApp Deck
              </button>
              <button style={{ flex: '1', padding: '8px 12px', borderRadius: '6px', background: 'var(--oda-surface)', border: '1px solid var(--oda-border)', color: 'var(--oda-text-primary)', fontSize: '0.75rem', cursor: 'pointer' }}>
                Prepare Quote
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar: AI Speech Copilot & Live Rebuttal */}
        <div style={{ borderLeft: '1px solid var(--oda-border)', padding: '16px', display: 'flex', flexDirection: 'column', gap: '14px', background: 'var(--oda-bg-alt)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontWeight: '700', color: 'var(--oda-text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={14} color="var(--oda-primary)" />
              <span>AI Live Speech Copilot</span>
            </div>
            <span className="badge badge-cyan" style={{ fontSize: '0.65rem' }}>Listening Live</span>
          </div>

          {/* Sentiment Gauge */}
          <div style={{ background: 'var(--oda-surface)', border: '1px solid var(--oda-border)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.7rem', color: 'var(--oda-text-muted)' }}>
              <span>Conversation signal</span>
              <span style={{ color: 'var(--oda-success)', fontWeight: '700' }}>Review suggested</span>
            </div>
            <div style={{ width: '100%', height: '6px', background: 'var(--oda-bg-alt)', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ width: '78%', height: '100%', background: 'linear-gradient(90deg, #3b82f6, #10b981)' }} />
            </div>
          </div>

          {/* Live Objection Buster Card */}
          <div style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#fbbf24', fontWeight: '700', fontSize: '0.75rem', marginBottom: '6px' }}>
              <ShieldAlert size={14} />
              <span>Detected Competitor Objection</span>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--oda-text-primary)', marginBottom: '8px', lineHeight: '1.4' }}>
              Prospect mentioned: <em>"We are locked in with legacy dialer for 6 months."</em>
            </div>
            <div style={{ background: 'var(--oda-surface)', padding: '8px', borderRadius: '6px', fontSize: '0.75rem', color: 'var(--oda-primary)', borderLeft: '2px solid var(--oda-primary)' }}>
              <strong>Suggested Talk Track:</strong> "Clarify the rollout concern and agree on the right implementation follow-up."
            </div>
          </div>

          {/* Auto-CRM Extraction Preview */}
          <div style={{ marginTop: 'auto', background: 'var(--oda-surface)', border: '1px solid var(--oda-border)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ fontSize: '0.7rem', color: 'var(--oda-text-muted)', textTransform: 'uppercase', marginBottom: '6px', fontWeight: '600' }}>Connected record update</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--oda-text-secondary)', lineHeight: '1.4' }}>
              ✓ Next step: Follow-up scheduled<br/>
              ✓ Concern: Workflow fragmentation<br/>
              ✓ Compensation rule attached for review
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
