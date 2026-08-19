'use client';

import React, { useState, useEffect } from 'react';
import {
  Users,
  PhoneCall,
  Headphones,
  Inbox,
  CalendarDays,
  Megaphone,
  Package,
  FileText,
  GitBranch,
  ReceiptText,
  LayoutDashboard,
  Settings2,
  UserRoundCheck,
  ChartNoAxesCombined,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Clock,
  ShieldCheck,
  Zap,
  Mic,
  Volume2,
  MessageSquare,
  Building,
  Check,
  AlertCircle,
  Play,
} from 'lucide-react';

/* ==========================================================================
   1. LEADS: PIPELINE / KANBAN VISUAL (PipelineKanbanVisual)
   ========================================================================== */
export const PipelineKanbanVisual = ({ compact = false }) => {
  const [activeCard, setActiveCard] = useState('card-1');

  const allColumns = [
    {
      id: 'inbound',
      title: 'Inbound Captured',
      count: '142',
      cards: [
        { id: 'card-1', name: 'CloudScale Enterprise', amount: '$140k ARR', fit: '96% Fit', owner: 'Priya S.', tag: 'Enterprise' },
      ],
    },
    {
      id: 'qualified',
      title: 'AI Qualified',
      count: '88',
      cards: [
        { id: 'card-2', name: 'Apex Health AI', amount: '$85k ARR', fit: '94% Fit', owner: 'Marcus V.', tag: 'Healthcare' },
      ],
    },
    {
      id: 'assigned',
      title: 'Assigned Tier-1',
      count: '24',
      cards: [
        { id: 'card-3', name: 'FinEdge Global', amount: '$110k ARR', fit: '98% Fit', owner: 'Alex C.', tag: 'FinTech' },
      ],
    },
    {
      id: 'won',
      title: 'Discovery Set',
      count: '18',
      cards: [
        { id: 'card-4', name: 'Vortex Logistics', amount: '$190k ARR', fit: '99% Fit', owner: 'Maya P.', tag: 'Logistics' },
      ],
    },
  ];

  const columns = compact ? allColumns.slice(0, 3) : allColumns;

  return (
    <div className={`primitive-card kanban-primitive ${compact ? 'is-compact' : ''}`}>
      <div className="primitive-topbar">
        <div className="primitive-title">
          <Users size={14} className="text-accent" />
          <span>Pipeline & Fit Progression</span>
        </div>
        <div className="primitive-badge badge badge-emerald">Real-Time Routing Active</div>
      </div>

      <div className="kanban-board-grid">
        {columns.map((col) => (
          <div key={col.id} className="kanban-col">
            <div className="kanban-col-head">
              <span className="col-title">{col.title}</span>
              <span className="col-count-pill">{col.count}</span>
            </div>
            <div className="kanban-cards-stack">
              {col.cards.map((card) => (
                <div
                  key={card.id}
                  onClick={() => setActiveCard(card.id)}
                  className={`kanban-deal-card ${activeCard === card.id ? 'is-active' : ''}`}
                >
                  <div className="deal-card-header">
                    <span className="deal-account">{card.name}</span>
                    <span className="deal-fit badge badge-subtle">{card.fit}</span>
                  </div>
                  <div className="deal-card-body">
                    <strong className="deal-amount">{card.amount}</strong>
                    <span className="deal-tag">{card.tag}</span>
                  </div>
                  <div className="deal-card-footer">
                    <small>Owner: <strong>{card.owner}</strong></small>
                    <span className="deal-status-dot" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="primitive-footer-note">
        <Sparkles size={13} className="text-primary" />
        <span>Automated lead hydration • 0% lead leakage • Sub-60s routing SLA</span>
      </div>
    </div>
  );
};

/* ==========================================================================
   2. DIALER: CALLING HUD VISUAL (DialerConsoleVisual)
   ========================================================================== */
export const DialerConsoleVisual = ({ compact = false }) => {
  const [callDuration, setCallDuration] = useState('04:18');
  const [disposition, setDisposition] = useState('Demo Confirmed');

  return (
    <div className={`primitive-card dialer-primitive ${compact ? 'is-compact' : ''}`}>
      <div className="primitive-topbar">
        <div className="primitive-title">
          <PhoneCall size={14} className="text-accent" />
          <span>Live Calling HUD</span>
        </div>
        <span className="call-live-indicator">
          <span className="live-dot" /> Call Connected ({callDuration})
        </span>
      </div>

      <div className="dialer-hud-body">
        {/* Contact Info Card */}
        <div className="hud-contact-card">
          <div className="contact-avatar-box">ER</div>
          <div>
            <h4>Elena Rostova</h4>
            <p>VP of Technology • CloudScale Enterprise</p>
            <small>Queue: Tier-1 Inbound Discovery • Assigned: Marcus Vance</small>
          </div>
        </div>

        {/* Live Audio Waveform HUD */}
        <div className="hud-audio-waveform">
          <div className="waveform-bars">
            {[35, 60, 40, 85, 95, 55, 75, 45, 90, 100, 65, 80, 50, 70, 90, 60, 40, 75, 85, 55].map((h, i) => (
              <span key={i} style={{ height: `${h}%` }} className="waveform-bar" />
            ))}
          </div>
          <div className="waveform-controls">
            <span className="badge badge-primary"><Mic size={11} /> AI Transcribing</span>
            <span className="badge badge-subtle"><Volume2 size={11} /> HD Audio</span>
          </div>
        </div>

        {/* Beside-Call Battlecard Talking Point */}
        <div className="hud-script-box">
          <div className="script-box-head">
            <span className="text-accent"><Sparkles size={12} /> Dynamic Discovery Cue:</span>
            <span className="badge badge-emerald">High Intent Signal</span>
          </div>
          <p>"CloudScale currently manages 5 disconnected sales tools. Highlight ODA7 synchronous dialer + CRM unification to save 4 hours/rep weekly."</p>
        </div>

        {/* 1-Click Dispositions */}
        <div className="hud-dispositions-row">
          <button
            onClick={() => setDisposition('Demo Confirmed')}
            className={`disp-btn ${disposition === 'Demo Confirmed' ? 'is-selected' : ''}`}
          >
            <CheckCircle2 size={13} /> Demo Confirmed
          </button>
          <button
            onClick={() => setDisposition('Follow-up 48h')}
            className={`disp-btn ${disposition === 'Follow-up 48h' ? 'is-selected' : ''}`}
          >
            <Clock size={13} /> Follow-up in 2d
          </button>
          <button
            onClick={() => setDisposition('Send Proposal')}
            className={`disp-btn ${disposition === 'Send Proposal' ? 'is-selected' : ''}`}
          >
            <FileText size={13} /> Send Proposal
          </button>
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   3. CALLS: CONVERSATION INTELLIGENCE VISUAL (ConversationIntelligenceVisual)
   ========================================================================== */
export const ConversationIntelligenceVisual = ({ compact = false }) => {
  return (
    <div className={`primitive-card conversation-primitive ${compact ? 'is-compact' : ''}`}>
      <div className="primitive-topbar">
        <div className="primitive-title">
          <Headphones size={14} className="text-accent" />
          <span>Conversation Intelligence & AI Coaching</span>
        </div>
        <span className="badge badge-emerald">Sentiment: 94% Positive</span>
      </div>

      <div className="conversation-stream-body">
        {/* Transcript Timeline */}
        <div className="transcript-chat-list">
          <div className="chat-bubble bubble-prospect">
            <div className="bubble-speaker">Prospect (Elena R.):</div>
            <p>"We love the dialer speed, but our CISO requires SOC2 Type II certs and SSO before we commit."</p>
          </div>

          <div className="chat-coach-alert">
            <div className="coach-alert-header">
              <Sparkles size={13} className="text-accent" />
              <strong>AI Whisper Coaching Note</strong>
            </div>
            <p>Objection Handled: Mention ODA7 pre-packaged SOC2 Type II audit compliance pack & 1-click SAML SSO.</p>
          </div>

          <div className="chat-bubble bubble-rep">
            <div className="bubble-speaker">Rep (Marcus V.):</div>
            <p>"Absolutely Elena. ODA7 is fully SOC2 Type II compliant with native SAML SSO ready out of the box."</p>
          </div>
        </div>

        {/* Intelligence Insights Strip */}
        <div className="insights-metrics-grid">
          <div className="insight-metric-box">
            <small>Analyzed Calls</small>
            <strong>340 Today</strong>
          </div>
          <div className="insight-metric-box">
            <small>Objection Resolution</small>
            <strong className="text-success">91.4% Rate</strong>
          </div>
          <div className="insight-metric-box">
            <small>Coaching Moments</small>
            <strong className="text-accent">3 Guided</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   4. INBOX: OMNICHANNEL STREAM VISUAL (OmnichannelInboxVisual)
   ========================================================================== */
export const OmnichannelInboxVisual = ({ compact = false }) => {
  const [selectedThread, setSelectedThread] = useState(0);

  const threads = [
    { name: 'Zenith Media Group', channel: 'WhatsApp', time: '1m ago', preview: 'Approved the proposal scope for 25 seats.', unread: true },
    { name: 'Horizon Healthcare', channel: 'Email', time: '4m ago', preview: 'Can we schedule technical evaluation Friday?', unread: false },
    { name: 'Nexus Retail Labs', channel: 'Live Chat', time: '12m ago', preview: 'Checking SAML configuration documentation.', unread: false },
  ];

  return (
    <div className={`primitive-card inbox-primitive ${compact ? 'is-compact' : ''}`}>
      <div className="primitive-topbar">
        <div className="primitive-title">
          <Inbox size={14} className="text-accent" />
          <span>Unified Omnichannel Triage</span>
        </div>
        <span className="badge badge-primary">Avg First Response: 1.8 min</span>
      </div>

      <div className="inbox-stream-grid">
        <div className="inbox-threads-list">
          {threads.map((t, idx) => (
            <div
              key={t.name}
              onClick={() => setSelectedThread(idx)}
              className={`inbox-thread-item ${selectedThread === idx ? 'is-active' : ''}`}
            >
              <div className="thread-item-header">
                <strong>{t.name}</strong>
                <span className="badge badge-subtle">{t.channel}</span>
              </div>
              <p>{t.preview}</p>
              <small>{t.time} • Assigned to Account Exec</small>
            </div>
          ))}
        </div>

        <div className="inbox-active-pane">
          <div className="active-pane-header">
            <h4>{threads[selectedThread].name}</h4>
            <span className="badge badge-emerald">SLA: On Target (99.8%)</span>
          </div>
          <div className="active-pane-body">
            <div className="message-history-box">
              <div className="msg-incoming">
                <small>WhatsApp Business • 10:42 AM</small>
                <p>"{threads[selectedThread].preview}"</p>
              </div>
              <div className="msg-quick-reply-prompt">
                <Sparkles size={12} className="text-accent" />
                <span>AI Suggested Reply: "Confirmed! I have locked in 25 seats and prepared the e-sign link."</span>
              </div>
            </div>
            <div className="pane-reply-bar">
              <input type="text" placeholder="Type verified response or select AI template..." readOnly value="Confirmed! I have locked in 25 seats..." />
              <button className="btn btn-primary btn-sm">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   5. CALENDAR: COORDINATED SCHEDULE VISUAL (CoordinatedScheduleVisual)
   ========================================================================== */
export const CoordinatedScheduleVisual = ({ compact = false }) => {
  const events = [
    { time: '10:30 AM', title: 'Executive Demo & Pricing Scope', account: 'Global Logistics Corp', rep: 'Marcus Vance', state: 'Prepped' },
    { time: '02:00 PM', title: 'Security & SAML SSO Architecture', account: 'Apex FinTech AI', rep: 'Alex Carter', state: 'Confirmed' },
    { time: '03:30 PM', title: 'Quarterly Commercial Expansion', account: 'Starlight Media', rep: 'Priya Sharma', state: 'Contract Ready' },
  ];

  return (
    <div className={`primitive-card calendar-primitive ${compact ? 'is-compact' : ''}`}>
      <div className="primitive-topbar">
        <div className="primitive-title">
          <CalendarDays size={14} className="text-accent" />
          <span>Coordinated Execution Schedule</span>
        </div>
        <span className="badge badge-emerald">Show Rate: 94.2%</span>
      </div>

      <div className="calendar-timeline-body">
        {events.map((ev) => (
          <div key={ev.time} className="calendar-event-row">
            <div className="event-time-col">
              <strong>{ev.time}</strong>
              <small>Today</small>
            </div>
            <div className="event-details-col">
              <h4>{ev.title}</h4>
              <p>Account: <strong>{ev.account}</strong> • Host: <strong>{ev.rep}</strong></p>
              <div className="event-badges-row">
                <span className="badge badge-subtle">CRM Auto-Linked</span>
                <span className="badge badge-emerald">{ev.state}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ==========================================================================
   6. CAMPAIGNS: ATTRIBUTION FUNNEL VISUAL (CampaignAttributionVisual)
   ========================================================================== */
export const CampaignAttributionVisual = ({ compact = false }) => {
  const campaigns = [
    { name: 'Q3 Enterprise Search & SEO', cost: '$8.40 / Lead', mql: '1,420 MQLs', conv: '18.4% SQL', pipeline: '$680,000' },
    { name: 'LinkedIn Sponsored RevOps', cost: '$42.50 / Lead', mql: '890 MQLs', conv: '24.8% SQL', pipeline: '$780,000' },
    { name: 'Industry Partner Webinars', cost: '$24.00 / Lead', mql: '460 MQLs', conv: '32.0% SQL', pipeline: '$490,000' },
  ];

  return (
    <div className={`primitive-card campaign-primitive ${compact ? 'is-compact' : ''}`}>
      <div className="primitive-topbar">
        <div className="primitive-title">
          <Megaphone size={14} className="text-accent" />
          <span>Multi-Touch Pipeline Attribution</span>
        </div>
        <span className="badge badge-primary">Total Attributed: $2.4M ARR</span>
      </div>

      <div className="campaign-funnel-body">
        {campaigns.map((camp) => (
          <div key={camp.name} className="campaign-row-card">
            <div className="camp-identity">
              <strong>{camp.name}</strong>
              <small>{camp.cost}</small>
            </div>
            <div className="camp-stats">
              <span className="badge badge-subtle">{camp.mql}</span>
              <span className="badge badge-emerald">{camp.conv}</span>
              <strong className="camp-revenue">{camp.pipeline}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ==========================================================================
   7. PRODUCTS: COMMERCIAL CATALOG VISUAL (ProductCatalogConfiguratorVisual)
   ========================================================================== */
export const ProductCatalogConfiguratorVisual = ({ compact = false }) => {
  return (
    <div className={`primitive-card product-catalog-primitive ${compact ? 'is-compact' : ''}`}>
      <div className="primitive-topbar">
        <div className="primitive-title">
          <Package size={14} className="text-accent" />
          <span>Commercial Product Catalog & Attach Rate</span>
        </div>
        <span className="badge badge-emerald">Bundle Attach: 64%</span>
      </div>

      <div className="catalog-grid-body">
        <div className="catalog-sku-card">
          <div className="sku-header">
            <h4>Business OS Core</h4>
            <span className="badge badge-primary">Standard</span>
          </div>
          <p>Full CRM, Kanban Pipeline, omnichannel triage & reporting.</p>
          <strong>$48k Avg Deal Size</strong>
        </div>

        <div className="catalog-sku-card is-highlight">
          <div className="sku-header">
            <h4>AI Voice & Dialer Add-on</h4>
            <span className="badge badge-emerald">+64% Attach</span>
          </div>
          <p>Power dialer queue, dynamic scripts, AI transcription & whisper.</p>
          <strong>+$18k ARR per Pod</strong>
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   8. SCRIPTS: BATTLECARD VISUAL (ScriptBattlecardVisual)
   ========================================================================== */
export const ScriptBattlecardVisual = ({ compact = false }) => {
  const [selectedPersona, setSelectedPersona] = useState('revops');

  return (
    <div className={`primitive-card script-primitive ${compact ? 'is-compact' : ''}`}>
      <div className="primitive-topbar">
        <div className="primitive-title">
          <FileText size={14} className="text-accent" />
          <span>Interactive Guidance & Battlecards</span>
        </div>
        <span className="badge badge-emerald">Adherence: 92%</span>
      </div>

      <div className="script-battlecard-body">
        <div className="persona-selector-row">
          <button onClick={() => setSelectedPersona('revops')} className={`persona-pill ${selectedPersona === 'revops' ? 'is-active' : ''}`}>
            Head of RevOps
          </button>
          <button onClick={() => setSelectedPersona('ciso')} className={`persona-pill ${selectedPersona === 'ciso' ? 'is-active' : ''}`}>
            CTO / CISO
          </button>
          <button onClick={() => setSelectedPersona('saleslead')} className={`persona-pill ${selectedPersona === 'saleslead' ? 'is-active' : ''}`}>
            Sales Director
          </button>
        </div>

        <div className="script-guidance-card">
          <div className="guidance-header">
            <span className="text-warning">Key Objection: Multi-Tool Fatigue</span>
            <span className="badge badge-subtle">Proven 88% Conversion</span>
          </div>
          <p className="guidance-talk-track">
            "We hear from RevOps teams that stitching 6 disconnected subscriptions wastes 15% of AE selling time. ODA7 unifies calling, CRM, and attendance under one synchronous database."
          </p>
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   9. SEQUENCES: MULTI-TOUCH CADENCE VISUAL (MultiTouchSequenceVisual)
   ========================================================================== */
export const MultiTouchSequenceVisual = ({ compact = false }) => {
  const steps = [
    { day: 'Day 1', touch: 'Personalized Loom Video', rate: '84% Open' },
    { day: 'Day 3', touch: 'Power Dialer Call', rate: '42% Connect' },
    { day: 'Day 6', touch: 'Executive Case Study (WhatsApp)', rate: '31% Reply' },
    { day: 'Day 9', touch: 'Mutual Action Plan', rate: 'Proposal Sent' },
  ];

  return (
    <div className={`primitive-card sequence-primitive ${compact ? 'is-compact' : ''}`}>
      <div className="primitive-topbar">
        <div className="primitive-title">
          <GitBranch size={14} className="text-accent" />
          <span>Multi-Touch Cadence Sequence</span>
        </div>
        <span className="badge badge-emerald">Reply Rate: 31.4%</span>
      </div>

      <div className="sequence-timeline-body">
        {steps.map((st, i) => (
          <div key={st.day} className="sequence-step-card">
            <span className="step-day-badge">{st.day}</span>
            <div className="step-touch-info">
              <strong>{st.touch}</strong>
              <small>Automated Trigger</small>
            </div>
            <span className="badge badge-subtle">{st.rate}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ==========================================================================
   10. QUOTES: CPQ BUILDER VISUAL (QuoteCPQBuilderVisual)
   ========================================================================== */
export const QuoteCPQBuilderVisual = ({ compact = false }) => {
  return (
    <div className={`primitive-card cpq-primitive ${compact ? 'is-compact' : ''}`}>
      <div className="primitive-topbar">
        <div className="primitive-title">
          <ReceiptText size={14} className="text-accent" />
          <span>Commercial CPQ & Proposal Builder</span>
        </div>
        <span className="badge badge-emerald">Approved & E-Signed</span>
      </div>

      <div className="cpq-proposal-body">
        <div className="proposal-line-items">
          <div className="line-item">
            <div>
              <strong>100 Seats Enterprise Workspace</strong>
              <small>Full CRM, Calling, Inbox & Reporting</small>
            </div>
            <strong>$120,000 / yr</strong>
          </div>
          <div className="line-item">
            <div>
              <strong>AI Voice & Live Whisper Suite</strong>
              <small>Dedicated Transcription & Coaching Models</small>
            </div>
            <strong>$36,000 / yr</strong>
          </div>
        </div>

        <div className="proposal-total-bar">
          <div>
            <small>Total Contract Value</small>
            <h3>$156,000 ARR</h3>
          </div>
          <span className="badge badge-emerald">1-Click Legal Signoff</span>
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   11. SALES SOLUTION: JOURNEY STORYBOARD (SalesJourneyStoryboardVisual)
   ========================================================================== */
export const SalesJourneyStoryboardVisual = ({ compact = false }) => {
  return (
    <div className={`primitive-card journey-primitive ${compact ? 'is-compact' : ''}`}>
      <div className="primitive-topbar">
        <div className="primitive-title">
          <PhoneCall size={14} className="text-accent" />
          <span>End-to-End Sales Rep Journey</span>
        </div>
        <span className="badge badge-emerald">Speed-to-Lead: 90s</span>
      </div>

      <div className="sales-journey-steps">
        <div className="journey-step-box">
          <span className="step-num">01</span>
          <h4>Inbound Lead</h4>
          <p>Enriched in 42s with 96% fit score.</p>
        </div>
        <div className="journey-step-box">
          <span className="step-num">02</span>
          <h4>Power Dial</h4>
          <p>Live call connected with objection scripts.</p>
        </div>
        <div className="journey-step-box">
          <span className="step-num">03</span>
          <h4>Demo Set</h4>
          <p>Auto-logged to pipeline without manual data entry.</p>
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   12. MANAGER SOLUTION: FLOOR COMMAND VISUAL (ManagerFloorCommandVisual)
   ========================================================================== */
export const ManagerFloorCommandVisual = ({ compact = false }) => {
  const reps = [
    { name: 'Priya Sharma', status: 'On Call (04:12)', target: '132% Quota', state: 'green' },
    { name: 'Marcus Vance', status: 'Discovery Active', target: '118% Quota', state: 'green' },
    { name: 'Alex Carter', status: 'Whisper Alert', target: 'Needs Coach', state: 'yellow' },
  ];

  return (
    <div className={`primitive-card floor-command-primitive ${compact ? 'is-compact' : ''}`}>
      <div className="primitive-topbar">
        <div className="primitive-title">
          <LayoutDashboard size={14} className="text-accent" />
          <span>Floor Command & Coaching Desk</span>
        </div>
        <span className="badge badge-primary">28 Floor Agents Active</span>
      </div>

      <div className="floor-reps-grid">
        {reps.map((r) => (
          <div key={r.name} className="floor-rep-card">
            <div className="rep-head">
              <strong>{r.name}</strong>
              <span className={`status-pill pill-${r.state}`}>{r.status}</span>
            </div>
            <div className="rep-footer">
              <small>Performance: <strong>{r.target}</strong></small>
              <button className="btn btn-secondary btn-xs">Whisper</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ==========================================================================
   13. MARKETING SOLUTION: REVENUE FLOW VISUAL (MarketingRevenueFlowVisual)
   ========================================================================== */
export const MarketingRevenueFlowVisual = ({ compact = false }) => {
  return (
    <div className={`primitive-card marketing-flow-primitive ${compact ? 'is-compact' : ''}`}>
      <div className="primitive-topbar">
        <div className="primitive-title">
          <Megaphone size={14} className="text-accent" />
          <span>Campaign-to-Revenue Attribution</span>
        </div>
        <span className="badge badge-emerald">Blended CAC: $240</span>
      </div>

      <div className="marketing-waterfall-grid">
        <div className="waterfall-node">
          <small>Campaign Launch</small>
          <strong>$45k / mo Ad Spend</strong>
        </div>
        <div className="waterfall-node">
          <small>MQL Capture</small>
          <strong>2,770 Inbound Leads</strong>
        </div>
        <div className="waterfall-node">
          <small>Attributed Pipeline</small>
          <strong className="text-success">$2.4M ARR Generated</strong>
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   14. OPERATIONS SOLUTION: CAPACITY MATRIX (OperationsCapacityMatrixVisual)
   ========================================================================== */
export const OperationsCapacityMatrixVisual = ({ compact = false }) => {
  return (
    <div className={`primitive-card operations-primitive ${compact ? 'is-compact' : ''}`}>
      <div className="primitive-topbar">
        <div className="primitive-title">
          <Settings2 size={14} className="text-accent" />
          <span>Workforce Governance & Capacity Radar</span>
        </div>
        <span className="badge badge-emerald">Staffing: 96% Optimal</span>
      </div>

      <div className="operations-pods-grid">
        <div className="ops-pod-card">
          <h4>North America Discovery Pod</h4>
          <p>42 Reps Online • 100% Shift Coverage</p>
          <span className="badge badge-emerald">SLA: 99.8%</span>
        </div>
        <div className="ops-pod-card">
          <h4>EMEA Engagement Desk</h4>
          <p>28 Reps Online • Zero Coverage Gaps</p>
          <span className="badge badge-primary">SLA: 99.2%</span>
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   15. HR / PEOPLE SOLUTION: ROSTER TRACKER (PeopleRosterTrackerVisual)
   ========================================================================== */
export const PeopleRosterTrackerVisual = ({ compact = false }) => {
  const members = [
    { name: 'Sophia Martinez', role: 'Revenue Team', stage: 'Day 3: Tool Setup', mentor: 'Priya Sharma' },
    { name: 'Liam Chen', role: 'Solutions Eng.', stage: 'Day 7: Certified', mentor: 'Alex Carter' },
    { name: 'Amara Okafor', role: 'Customer Ops', stage: 'Fully Onboarded', mentor: 'Marcus Vance' },
  ];

  return (
    <div className={`primitive-card people-primitive ${compact ? 'is-compact' : ''}`}>
      <div className="primitive-topbar">
        <div className="primitive-title">
          <UserRoundCheck size={14} className="text-accent" />
          <span>People Directory & Onboarding Milestones</span>
        </div>
        <span className="badge badge-emerald">Attendance: 98.2%</span>
      </div>

      <div className="people-roster-list">
        {members.map((m) => (
          <div key={m.name} className="people-roster-item">
            <div>
              <strong>{m.name}</strong>
              <small>{m.role}</small>
            </div>
            <span className="badge badge-subtle">{m.stage}</span>
            <small>Mentor: {m.mentor}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ==========================================================================
   16. LEADERSHIP SOLUTION: TRAJECTORY BOARD (LeadershipTrajectoryBoardVisual)
   ========================================================================== */
export const LeadershipTrajectoryBoardVisual = ({ compact = false }) => {
  return (
    <div className={`primitive-card leadership-primitive ${compact ? 'is-compact' : ''}`}>
      <div className="primitive-topbar">
        <div className="primitive-title">
          <ChartNoAxesCombined size={14} className="text-accent" />
          <span>Executive ARR Telemetry & Net Retention</span>
        </div>
        <span className="badge badge-emerald">+38% YoY ARR Growth</span>
      </div>

      <div className="leadership-metrics-grid">
        <div className="lead-metric-card">
          <small>Current ARR Run-Rate</small>
          <strong className="text-accent">$8.4M Milestone</strong>
          <span>118% of Plan</span>
        </div>
        <div className="lead-metric-card">
          <small>Net Revenue Retention</small>
          <strong className="text-success">124% NRR</strong>
          <span>Enterprise Cohorts</span>
        </div>
        <div className="lead-metric-card">
          <small>CAC Payback Velocity</small>
          <strong>7.2 Months</strong>
          <span>High Efficiency</span>
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   DISPATCHER: Helper to get the tailored visual primitive by slug & type
   ========================================================================== */
export const getDomainVisual = (slug, type, options = {}) => {
  const s = (slug || '').toLowerCase().trim();

  // 1. Check Product Pages
  if (s === 'leads') return <PipelineKanbanVisual {...options} />;
  if (s === 'dialer') return <DialerConsoleVisual {...options} />;
  if (s === 'calls') return <ConversationIntelligenceVisual {...options} />;
  if (s === 'inbox') return <OmnichannelInboxVisual {...options} />;
  if (s === 'calendar') return <CoordinatedScheduleVisual {...options} />;
  if (s === 'campaigns') return <CampaignAttributionVisual {...options} />;
  if (s === 'products') return <ProductCatalogConfiguratorVisual {...options} />;
  if (s === 'scripts') return <ScriptBattlecardVisual {...options} />;
  if (s === 'sequences') return <MultiTouchSequenceVisual {...options} />;
  if (s === 'quotes') return <QuoteCPQBuilderVisual {...options} />;

  // 2. Check Solution Pages
  if (s === 'sales') return <SalesJourneyStoryboardVisual {...options} />;
  if (s === 'manager') return <ManagerFloorCommandVisual {...options} />;
  if (s === 'marketing') return <MarketingRevenueFlowVisual {...options} />;
  if (s === 'operations') return <OperationsCapacityMatrixVisual {...options} />;
  if (s === 'hr' || s === 'people') return <PeopleRosterTrackerVisual {...options} />;
  if (s === 'leadership' || s === 'analytics') return <LeadershipTrajectoryBoardVisual {...options} />;

  // Fallback default
  return <PipelineKanbanVisual {...options} />;
};
