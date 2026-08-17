import React, { useState } from 'react';
import {
  XCircle,
  CheckCircle2,
  PhoneCall,
  MessageSquare,
  FileSpreadsheet,
  Users,
  DollarSign,
  Sparkles,
  Layers,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';

export const FragmentationComparison = () => {
  const [activeTab, setActiveTab] = useState('unified'); // 'fragmented' | 'unified'

  const fragmentedTools = [
    { name: 'Legacy CRM', issue: 'Stale lead data, slow page loads, missed follow-ups', cost: '$120/mo' },
    { name: 'Standalone VoIP Dialer', issue: 'High latency, dropped connections, zero CRM context', cost: '$85/mo' },
    { name: 'WhatsApp & SMS Silo', issue: 'Conversations locked in personal phones', cost: '$45/mo' },
    { name: 'Manual Spreadsheets', issue: 'Broken commission formulas, payroll disputes', cost: '15 hrs/wk' },
    { name: 'Separate AI Transcription', issue: 'Audio processed hours later, no live coaching', cost: '$60/mo' },
    { name: 'Floor Supervision App', issue: 'Delayed batch exports, zero live whisper', cost: '$50/mo' },
  ];

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      
      {/* Mode Switcher */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
        <div className="tab-group">
          <button
            className={`tab-btn ${activeTab === 'fragmented' ? 'active' : ''}`}
            onClick={() => setActiveTab('fragmented')}
            style={activeTab === 'fragmented' ? { background: '#ef4444' } : {}}
          >
            <XCircle size={16} />
            <span>The Old Fragmented Way (10+ Silos)</span>
          </button>
          <button
            className={`tab-btn ${activeTab === 'unified' ? 'active' : ''}`}
            onClick={() => setActiveTab('unified')}
          >
            <CheckCircle2 size={16} />
            <span>The oda7 Unified OS</span>
          </button>
        </div>
      </div>

      {/* Container Comparison Display */}
      {activeTab === 'fragmented' ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }} className="animate-fadeIn">
          {fragmentedTools.map((tool, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(239, 68, 68, 0.04)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                borderRadius: '12px',
                padding: '20px',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div style={{ fontWeight: '700', color: '#fca5a5', fontSize: '1rem' }}>{tool.name}</div>
                <span style={{ fontSize: '0.75rem', color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)', padding: '2px 8px', borderRadius: '4px', fontFamily: 'var(--font-mono)' }}>
                  {tool.cost}
                </span>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.5' }}>
                {tool.issue}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(14, 23, 42, 0.9) 0%, rgba(7, 10, 18, 0.95) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.4)',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6), 0 0 50px -10px rgba(37, 99, 235, 0.25)',
          }}
          className="animate-fadeIn"
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '32px', alignItems: 'center' }}>
            <div>
              <span className="badge badge-emerald" style={{ marginBottom: '12px' }}>
                One Synchronous Workspace
              </span>
              <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#fff', marginBottom: '14px', lineHeight: '1.2' }}>
                All 9 Sales Workflows in Synchronous Real-time Harmony
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px' }}>
                When an agent makes a call, the AI listens in real-time, the manager sees floor queue load live, commissions calculate on Closed-Won, and sequences trigger automatically. No API disconnects. No context switching.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e2e8f0', fontSize: '0.875rem' }}>
                  <CheckCircle2 size={16} color="#10b981" />
                  <span><strong>Zero latency:</strong> Sub-second state synchronization across all reps and managers.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e2e8f0', fontSize: '0.875rem' }}>
                  <CheckCircle2 size={16} color="#10b981" />
                  <span><strong>60% Lower Software Cost:</strong> Eliminate 6+ redundant tool subscriptions.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e2e8f0', fontSize: '0.875rem' }}>
                  <CheckCircle2 size={16} color="#10b981" />
                  <span><strong>Instant Onboarding:</strong> New SDRs start dialing with live scripts on Day 1.</span>
                </div>
              </div>
            </div>

            {/* Visual OS Core Graphic */}
            <div style={{ background: 'rgba(14, 19, 31, 0.8)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
              <div style={{ padding: '12px', background: 'var(--grad-primary)', borderRadius: '8px', color: '#fff', fontWeight: '800', fontSize: '1.1rem', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <Sparkles size={18} />
                <span>oda7 Intelligent Core OS</span>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', fontSize: '0.8rem' }}>
                <div style={{ padding: '10px', background: 'rgba(255,255,255,0.04)', borderRadius: '6px', color: '#cbd5e1', border: '1px solid rgba(255,255,255,0.06)' }}>
                  Predictive Dialer & Queue
                </div>
                <div style={{ padding: '10px', background: 'rgba(255,255,255,0.04)', borderRadius: '6px', color: '#cbd5e1', border: '1px solid rgba(255,255,255,0.06)' }}>
                  Live AI Objection Copilot
                </div>
                <div style={{ padding: '10px', background: 'rgba(255,255,255,0.04)', borderRadius: '6px', color: '#cbd5e1', border: '1px solid rgba(255,255,255,0.06)' }}>
                  Floor Queue Supervision
                </div>
                <div style={{ padding: '10px', background: 'rgba(255,255,255,0.04)', borderRadius: '6px', color: '#cbd5e1', border: '1px solid rgba(255,255,255,0.06)' }}>
                  Automated Payroll & Contests
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
