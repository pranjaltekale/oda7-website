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
    { title: 'Value Prop (BIZZFLY)', text: 'We replace your disconnected CRM, dialer, and WhatsApp tools with one synchronous operating system, reducing tool costs by 60%.' },
    { title: 'Pickup Lift & Speed', text: 'Our clients see an average 34% boost in pickup ratio and instant <15s lead bridging from your website.' },
    { title: 'Live Coaching & AI', text: 'Managers can whisper coach live, while our AI automatically extracts CRM action items in under 3 seconds.' },
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
          <span>oda7 // BIZZFLY Workspace — Alex Rivera (Tier 1 Sales SDR)</span>
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
            Live Call Connected
          </span>
        </div>
      </div>

      {/* Main Grid inside Mockup */}
      <div className="mockup-grid-3col" style={{ display: 'grid', gridTemplateColumns: '260px 1fr 300px', minHeight: '490px', background: '#070a12', fontSize: '0.8125rem' }}>
        
        {/* Left Sidebar: My Queue & Sub-tabs */}
        <div style={{ borderRight: '1px solid rgba(255,255,255,0.07)', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', background: 'rgba(11, 15, 23, 0.4)' }}>
          
          {/* Workspace Tab Switcher */}
          <div style={{ display: 'flex', gap: '4px', background: 'rgba(0,0,0,0.3)', padding: '3px', borderRadius: '6px', marginBottom: '4px' }}>
            <button
              onClick={() => setActiveWorkspaceTab('queue')}
              style={{
                flex: 1,
                padding: '4px 6px',
                borderRadius: '4px',
                fontSize: '0.7rem',
                fontWeight: '600',
                background: activeWorkspaceTab === 'queue' ? 'rgba(37, 99, 235, 0.3)' : 'transparent',
                color: activeWorkspaceTab === 'queue' ? '#38bdf8' : '#94a3b8',
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
                background: activeWorkspaceTab === 'sequences' ? 'rgba(37, 99, 235, 0.3)' : 'transparent',
                color: activeWorkspaceTab === 'sequences' ? '#38bdf8' : '#94a3b8',
              }}
            >
              Sequences
            </button>
          </div>

          {/* Queue Item 1 (Active) */}
          <div style={{ background: 'rgba(37, 99, 235, 0.15)', border: '1px solid rgba(59, 130, 246, 0.45)', borderRadius: '8px', padding: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <span style={{ fontWeight: '700', color: '#fff' }}>Sarah Jenkins</span>
              <span style={{ color: '#34d399', fontWeight: '700', fontSize: '0.75rem' }}>96 AI</span>
            </div>
            <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>VP Operations • Logix Ent.</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px', color: '#38bdf8', fontSize: '0.7rem' }}>
              <Clock size={11} /> Connected 02:45 • Local 512
            </div>
          </div>

          {/* Queue Item 2 */}
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', padding: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <span style={{ fontWeight: '600', color: '#cbd5e1' }}>Liam Vance</span>
              <span style={{ color: '#60a5fa', fontWeight: '700', fontSize: '0.75rem' }}>88 AI</span>
            </div>
            <div style={{ color: '#64748b', fontSize: '0.75rem' }}>Sales Director • OmniCorp</div>
            <div style={{ color: '#64748b', fontSize: '0.7rem', marginTop: '4px' }}>Inbound Form • 12m ago</div>
          </div>

          {/* Queue Item 3 */}
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', padding: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <span style={{ fontWeight: '600', color: '#cbd5e1' }}>Maya Lin</span>
              <span style={{ color: '#fbbf24', fontWeight: '700', fontSize: '0.75rem' }}>74 AI</span>
            </div>
            <div style={{ color: '#64748b', fontSize: '0.75rem' }}>Ops Lead • Nexa Health</div>
            <div style={{ color: '#64748b', fontSize: '0.7rem', marginTop: '4px' }}>Sequence Day 2 (WhatsApp)</div>
          </div>

          {/* Personal Performance Scorecard */}
          <div style={{ marginTop: 'auto', background: 'rgba(14, 19, 32, 0.9)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '6px', fontWeight: '600' }}>Today's Personal Velocity</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span style={{ color: '#64748b' }}>Calls Completed</span>
              <span style={{ color: '#fff', fontWeight: '700' }}>68 / 80</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span style={{ color: '#64748b' }}>Pickup Ratio</span>
              <span style={{ color: '#34d399', fontWeight: '700' }}>41.2% (+6.4%)</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#64748b' }}>Commission Wallet</span>
              <span style={{ color: '#38bdf8', fontWeight: '700' }}>+$840.00</span>
            </div>
          </div>
        </div>

        {/* Middle: Active Call & Dynamic Interactive Script */}
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Active Call Header Card */}
          <div style={{ background: 'linear-gradient(135deg, rgba(14, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.7) 100%)', border: '1px solid rgba(59, 130, 246, 0.25)', borderRadius: '10px', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.7rem', color: '#38bdf8', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Active Telephony • Local Presence (512 Austin Match)
              </div>
              <div style={{ fontSize: '1.15rem', fontWeight: '700', color: '#ffffff', marginTop: '2px' }}>
                Sarah Jenkins <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: '400' }}>+1 (512) 840-9211</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '6px', color: '#94a3b8', fontSize: '0.75rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <TrendingUp size={13} color="#34d399" /> Win Prob: 84%
                </span>
                <span>•</span>
                <span>Deal Size: $48,000 / yr</span>
              </div>
            </div>

            {/* In-Call Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }} aria-label="Mute microphone">
                <Mic size={15} />
              </button>
              <button style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }} aria-label="Speaker audio">
                <Volume2 size={15} />
              </button>
              <button style={{ height: '36px', padding: '0 16px', borderRadius: '18px', background: '#ef4444', color: '#fff', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <PhoneOff size={14} /> End & Log
              </button>
            </div>
          </div>

          {/* Dynamic Interactive Scripting Panel */}
          <div style={{ background: 'rgba(14, 19, 31, 0.6)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', padding: '16px', flex: '1', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{ fontWeight: '700', color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FileText size={15} color="#60a5fa" />
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
                    background: selectedScriptBranch === idx ? 'rgba(37, 99, 235, 0.25)' : 'rgba(255,255,255,0.04)',
                    color: selectedScriptBranch === idx ? '#93c5fd' : '#94a3b8',
                    border: selectedScriptBranch === idx ? '1px solid rgba(59, 130, 246, 0.4)' : '1px solid rgba(255,255,255,0.04)',
                  }}
                >
                  {branch.title}
                </button>
              ))}
            </div>

            {/* Script Text Box */}
            <div style={{ background: 'rgba(7, 10, 18, 0.8)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', padding: '14px', lineHeight: '1.6', color: '#e2e8f0', fontSize: '0.85rem' }}>
              <p style={{ margin: '0' }}>"{scriptBranches[selectedScriptBranch].text}"</p>
            </div>

            {/* 1-Click Action Bar */}
            <div style={{ marginTop: 'auto', paddingTop: '12px', display: 'flex', gap: '8px' }}>
              <button style={{ flex: '1', padding: '8px 12px', borderRadius: '6px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', color: '#34d399', fontWeight: '600', fontSize: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <CheckCircle2 size={13} /> Stage: Qualified Demo
              </button>
              <button style={{ flex: '1', padding: '8px 12px', borderRadius: '6px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#cbd5e1', fontSize: '0.75rem' }}>
                Send WhatsApp Deck
              </button>
              <button style={{ flex: '1', padding: '8px 12px', borderRadius: '6px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#cbd5e1', fontSize: '0.75rem' }}>
                1-Click CPQ Quote
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar: AI Speech Copilot & Live Rebuttal */}
        <div style={{ borderLeft: '1px solid rgba(255,255,255,0.07)', padding: '16px', display: 'flex', flexDirection: 'column', gap: '14px', background: 'rgba(11, 15, 23, 0.5)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontWeight: '700', color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={14} color="#38bdf8" />
              <span>AI Live Speech Copilot</span>
            </div>
            <span className="badge badge-cyan" style={{ fontSize: '0.65rem' }}>Listening Live</span>
          </div>

          {/* Sentiment Gauge */}
          <div style={{ background: 'rgba(14, 19, 31, 0.8)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.7rem', color: '#94a3b8' }}>
              <span>Prospect Sentiment</span>
              <span style={{ color: '#34d399', fontWeight: '700' }}>+78 (High Interest)</span>
            </div>
            <div style={{ width: '100%', height: '6px', background: '#1e293b', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ width: '78%', height: '100%', background: 'linear-gradient(90deg, #3b82f6, #10b981)' }} />
            </div>
          </div>

          {/* Live Objection Buster Card */}
          <div style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#fbbf24', fontWeight: '700', fontSize: '0.75rem', marginBottom: '6px' }}>
              <ShieldAlert size={14} />
              <span>Detected Competitor Objection</span>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#e2e8f0', marginBottom: '8px', lineHeight: '1.4' }}>
              Prospect mentioned: <em>"We are locked in with legacy dialer for 6 months."</em>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '8px', borderRadius: '6px', fontSize: '0.75rem', color: '#93c5fd', borderLeft: '2px solid #3b82f6' }}>
              <strong>Suggested Talk Track:</strong> "Clarify the rollout concern and agree on the right implementation follow-up."
            </div>
          </div>

          {/* Auto-CRM Extraction Preview */}
          <div style={{ marginTop: 'auto', background: 'rgba(14, 19, 31, 0.8)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '6px', fontWeight: '600' }}>Zero-Touch Auto CRM Sync</div>
            <div style={{ fontSize: '0.75rem', color: '#cbd5e1', lineHeight: '1.4' }}>
              ✓ Next step: Demo scheduled Thu 2 PM<br/>
              ✓ Pain point: Tool fragmentation (5 apps)<br/>
              ✓ Quota commission credited on close
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
