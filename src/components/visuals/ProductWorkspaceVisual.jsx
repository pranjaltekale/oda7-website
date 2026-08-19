'use client';

import React, { useState } from 'react';
import {
  Users,
  PhoneCall,
  Sparkles,
  Inbox,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity,
  Play,
} from 'lucide-react';

const capabilities = [
  {
    id: 'routing',
    name: 'Inbound Fast Routing',
    category: 'Sales Execution',
    icon: Users,
    tagline: 'Route high-fit enterprise leads to available reps in under 60 seconds.',
    actionName: 'Incoming Lead: CloudScale Corp ($180k ARR)',
    systemResponse: 'AI enriched firmographics, matched 96% fit score, and routed to Tier-1 Senior AE pod.',
    outcome: 'First call initiated within 2.4 minutes • 0% lead leakage',
    badge: 'Real-time routing',
    metrics: [
      { label: 'Fit Score', value: '96%' },
      { label: 'Speed to Rep', value: '42 sec' },
      { label: 'Routing SLA', value: '100%' },
    ],
    previewData: {
      account: 'CloudScale Enterprise',
      contact: 'Elena Rostova • Head of Infrastructure',
      channel: 'High-Intent Demo Request',
      assignedTo: 'Marcus Vance (Senior AE)',
      status: 'Call In Progress',
    },
  },
  {
    id: 'dialing',
    name: 'Calling HUD & Scripts',
    category: 'Live Outreach',
    icon: PhoneCall,
    tagline: 'Give every conversation contextual scripts and 1-click outcome logging.',
    actionName: 'Live Call Connected: Marcus Vance ↔ Elena Rostova',
    systemResponse: 'Dynamic discovery script adapted to enterprise scale; objection guide displayed beside call.',
    outcome: 'Demo confirmed for Thursday 2 PM • Auto-logged to pipeline',
    badge: 'Active Dialer',
    metrics: [
      { label: 'Talk Duration', value: '04:18' },
      { label: 'Script Adherence', value: '94%' },
      { label: 'Outcome', value: 'Demo Set' },
    ],
    previewData: {
      account: 'Apex Health AI',
      contact: 'Dr. Aaron Chen • VP Technology',
      channel: 'Power Dialer Queue #4',
      assignedTo: 'Priya Sharma (AE)',
      status: 'Discovery Booked',
    },
  },
  {
    id: 'intelligence',
    name: 'Conversation AI & Whisper',
    category: 'AI Coaching',
    icon: Sparkles,
    tagline: 'Surface live objection talk tracks and automated action summaries.',
    actionName: 'Objection Detected: "Timeline Q3 & SOC2 requirements"',
    systemResponse: 'AI Whisper prompted: "Mention pre-configured SOC2 Type II pack and 14-day migration guarantee."',
    outcome: 'Security hurdle resolved on-call • Fast-tracked to legal review',
    badge: 'Live AI Assist',
    metrics: [
      { label: 'Objections Coached', value: '3 Moments' },
      { label: 'Sentiment Spike', value: '+38%' },
      { label: 'Confidence Score', value: '98.4%' },
    ],
    previewData: {
      account: 'FinEdge Global Holdings',
      contact: 'Sarah Jenkins • CISO',
      channel: 'Recorded Voice Stream',
      assignedTo: 'Alex Carter (Solutions Arch)',
      status: 'Security Signed Off',
    },
  },
  {
    id: 'inbox',
    name: 'Omnichannel Triage',
    category: 'Conversations',
    icon: Inbox,
    tagline: 'Consolidate WhatsApp, Email, SMS, and Webchat into one shared timeline.',
    actionName: 'Multi-Channel Message: WhatsApp + Email Thread Merged',
    systemResponse: 'Customer history unified across channels with SLA countdown and account executive context.',
    outcome: 'Average first response reduced to 1.8 min • Zero duplicate outreach',
    badge: 'Unified Triage',
    metrics: [
      { label: 'Open Threads', value: '14 Active' },
      { label: 'Avg First Reply', value: '1.8 min' },
      { label: 'CSAT Score', value: '4.9 / 5.0' },
    ],
    previewData: {
      account: 'Zenith Media Group',
      contact: 'Liam O’Connor • Director of Ops',
      channel: 'WhatsApp Verified Business',
      assignedTo: 'Maya Patel (Account Lead)',
      status: 'Proposal Reviewing',
    },
  },
  {
    id: 'executive',
    name: 'Executive ARR Trajectory',
    category: 'Platform Visibility',
    icon: BarChart3,
    tagline: 'Turn ground-floor sales and operations activity into real-time business telemetry.',
    actionName: 'Cross-Department Rollup: Sales + Attendance + ARR',
    systemResponse: 'Automated executive rollup aggregating 4 regional pods, quota attainment, and CAC efficiency.',
    outcome: 'Quarterly ARR trajectory passed $8.4M milestone (+38% YoY)',
    badge: 'Executive Telemetry',
    metrics: [
      { label: 'ARR Trajectory', value: '$8.4M' },
      { label: 'Net Retention', value: '124%' },
      { label: 'CAC Payback', value: '7.2 Mo' },
    ],
    previewData: {
      account: 'Global Enterprise Portfolio',
      contact: 'Executive Leadership Board',
      channel: 'Real-Time Sync Engine',
      assignedTo: 'Platform Super Admin',
      status: '118% Quota Pace',
    },
  },
];

export const ProductWorkspaceVisual = () => {
  const [activeTab, setActiveTab] = useState('routing');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationStep, setSimulationStep] = useState(2); // 0 = Action, 1 = Response, 2 = Outcome

  const activeCap = capabilities.find((c) => c.id === activeTab) || capabilities[0];
  const Icon = activeCap.icon;

  const handleSimulate = () => {
    setIsSimulating(true);
    setSimulationStep(0);
    setTimeout(() => setSimulationStep(1), 700);
    setTimeout(() => {
      setSimulationStep(2);
      setIsSimulating(false);
    }, 1500);
  };

  return (
    <div className="product-workspace-showcase">
      {/* Capability Selector Bar */}
      <div className="workspace-tabs-strip">
        {capabilities.map((cap) => {
          const TabIcon = cap.icon;
          const isActive = cap.id === activeTab;
          return (
            <button
              key={cap.id}
              onClick={() => {
                setActiveTab(cap.id);
                setSimulationStep(2);
              }}
              className={`workspace-tab-btn ${isActive ? 'is-active' : ''}`}
            >
              <TabIcon size={16} />
              <div className="tab-btn-text">
                <span className="tab-btn-name">{cap.name}</span>
                <span className="tab-btn-category">{cap.category}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Product Viewport */}
      <div className="product-viewport-card">
        {/* Top Viewport Header */}
        <div className="product-viewport-header">
          <div className="viewport-badge-group">
            <span className="badge badge-primary">
              <Icon size={13} style={{ marginRight: 5 }} /> {activeCap.badge}
            </span>
            <span className="viewport-tagline">{activeCap.tagline}</span>
          </div>
          <button
            onClick={handleSimulate}
            disabled={isSimulating}
            className="btn-simulate-action"
            title="Run interactive simulation"
          >
            {isSimulating ? <Activity size={14} className="spin-icon" /> : <Play size={13} />}
            <span>{isSimulating ? 'Simulating flow...' : 'Simulate live action'}</span>
          </button>
        </div>

        {/* 3-Step Action -> System Response -> Outcome Visual Chain */}
        <div className="viewport-story-chain">
          {/* Step 1: Action */}
          <div className={`chain-node ${simulationStep >= 0 ? 'is-active' : ''}`}>
            <div className="chain-node-header">
              <span className="chain-step-num">01</span>
              <span className="chain-step-label">Live Signal / Action</span>
              <Zap size={14} className="chain-step-icon text-accent" />
            </div>
            <div className="chain-node-body">
              <strong>{activeCap.actionName}</strong>
              <div className="chain-mini-chip">
                <span>Account:</span> {activeCap.previewData.account}
              </div>
            </div>
          </div>

          <div className="chain-connector">
            <ArrowRight size={16} />
          </div>

          {/* Step 2: System Response */}
          <div className={`chain-node ${simulationStep >= 1 ? 'is-active' : ''}`}>
            <div className="chain-node-header">
              <span className="chain-step-num">02</span>
              <span className="chain-step-label">ODA7 System Response</span>
              <Sparkles size={14} className="chain-step-icon text-primary" />
            </div>
            <div className="chain-node-body">
              <p>{activeCap.systemResponse}</p>
              <div className="chain-mini-chip">
                <span>Owner:</span> {activeCap.previewData.assignedTo}
              </div>
            </div>
          </div>

          <div className="chain-connector">
            <ArrowRight size={16} />
          </div>

          {/* Step 3: Verified Outcome */}
          <div className={`chain-node is-outcome ${simulationStep >= 2 ? 'is-active' : ''}`}>
            <div className="chain-node-header">
              <span className="chain-step-num">03</span>
              <span className="chain-step-label">Verified Business Outcome</span>
              <CheckCircle2 size={14} className="chain-step-icon text-success" />
            </div>
            <div className="chain-node-body">
              <strong>{activeCap.outcome}</strong>
              <div className="chain-mini-chip chip-success">
                <span>State:</span> {activeCap.previewData.status}
              </div>
            </div>
          </div>
        </div>

        {/* Live Telemetry Matrix */}
        <div className="viewport-metrics-strip">
          {activeCap.metrics.map((metric, idx) => (
            <div key={idx} className="viewport-metric-cell">
              <small>{metric.label}</small>
              <strong>{metric.value}</strong>
            </div>
          ))}
          <div className="viewport-metric-cell cell-context">
            <small>Connected Context</small>
            <span className="text-highlight">
              <ShieldCheck size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />
              Zero Tool Switching
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
