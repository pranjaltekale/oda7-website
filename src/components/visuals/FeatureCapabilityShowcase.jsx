'use client';

import React, { useState } from 'react';
import {
  Zap,
  Sparkles,
  CalendarCheck,
  Building2,
  Play,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Activity,
  Users,
  PhoneCall,
  DollarSign,
} from 'lucide-react';

const capabilityDemos = [
  {
    id: 'lead-routing',
    title: 'Instant Inbound Routing',
    category: 'Sales Flow',
    icon: Zap,
    tagline: 'Synchronous enrichment, fit calculation & Tier-1 pod assignment.',
    triggerLabel: 'Simulate High-Fit Lead Arrival',
    steps: [
      { num: '01', title: 'Signal Received', desc: 'FinEdge Corp demo request ($120k ARR).' },
      { num: '02', title: 'AI Enrichment', desc: 'Matched 98% enterprise fit; routed to Americas Tier-1 Pod.' },
      { num: '03', title: 'Rep Notified', desc: 'Priya Sharma (Senior AE) received 1-click dial queue notification in 32s.' },
    ],
    resultMetric: '32s Speed-to-Lead',
    resultText: 'Zero manual triaging required • SLA met 100%',
  },
  {
    id: 'ai-whisper',
    title: 'Live Objection Whisper',
    category: 'Conversation AI',
    icon: Sparkles,
    tagline: 'Real-time audio transcript analysis with contextual talk tracks.',
    triggerLabel: 'Simulate Customer Objection',
    steps: [
      { num: '01', title: 'Audio Stream Analyzed', desc: 'Customer: "Our security team requires SOC2 and SAML SSO."' },
      { num: '02', title: 'AI Whisper Prompt', desc: 'Surfaced: "Highlight native SAML SSO and SOC2 Type II cert pack."' },
      { num: '03', title: 'Hurdle Resolved', desc: 'Prospect confirmed technical evaluation meeting for Friday.' },
    ],
    resultMetric: '+38% Deal Velocity',
    resultText: 'Mid-call guidance prevented deal stall in real time',
  },
  {
    id: 'comp-sync',
    title: 'Attendance & Comp Sync',
    category: 'Operations',
    icon: CalendarCheck,
    tagline: 'Connect floor shifts, call activity, and commissions automatically.',
    triggerLabel: 'Simulate Shift & Closure',
    steps: [
      { num: '01', title: 'Shift Check-In', desc: 'Marcus Vance checked in at 08:30 AM (Americas Pod).' },
      { num: '02', title: 'Activity Executed', desc: '84 calls logged, $85k opportunity moved to Closed-Won.' },
      { num: '03', title: 'Payroll Hydrated', desc: 'Commission tier credited (+$4,250) into monthly compensation pool.' },
    ],
    resultMetric: '0 Dispute Hours',
    resultText: '100% transparent commission tracking without CSV exports',
  },
  {
    id: 'multi-tenant',
    title: 'Super Admin Multi-Tenant',
    category: 'Governance',
    icon: Building2,
    tagline: 'Provision isolated workspaces, custom roles, and global audit trails.',
    triggerLabel: 'Simulate Agency Tenant Provisioning',
    steps: [
      { num: '01', title: 'Tenant Request', desc: 'New subsidiary workspace "Vanguard EMEA" created.' },
      { num: '02', title: 'Security Isolation', desc: 'Dedicated encryption keys, custom RBAC policy, and SAML mapped.' },
      { num: '03', title: 'Global Audit Trail', desc: 'Super Admin audit log entry verified and synchronized.' },
    ],
    resultMetric: '1-Click Isolation',
    resultText: 'Complete enterprise boundary separation ready in <10 seconds',
  },
];

export const FeatureCapabilityShowcase = () => {
  const [activeDemo, setActiveDemo] = useState('lead-routing');
  const [animatingStep, setAnimatingStep] = useState(2);
  const [isRunning, setIsRunning] = useState(false);

  const current = capabilityDemos.find((d) => d.id === activeDemo) || capabilityDemos[0];
  const DemoIcon = current.icon;

  const handleRunDemo = () => {
    setIsRunning(true);
    setAnimatingStep(0);
    setTimeout(() => setAnimatingStep(1), 600);
    setTimeout(() => {
      setAnimatingStep(2);
      setIsRunning(false);
    }, 1300);
  };

  return (
    <div className="feature-capability-showcase-box">
      {/* Capability Selector Strip */}
      <div className="capability-selector-strip">
        {capabilityDemos.map((demo) => {
          const Icon = demo.icon;
          const isActive = demo.id === activeDemo;
          return (
            <button
              key={demo.id}
              onClick={() => {
                setActiveDemo(demo.id);
                setAnimatingStep(2);
              }}
              className={`capability-select-btn ${isActive ? 'is-active' : ''}`}
            >
              <Icon size={15} />
              <div className="btn-label-group">
                <span className="btn-title">{demo.title}</span>
                <small className="btn-cat">{demo.category}</small>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Sandbox */}
      <div className="capability-sandbox-card">
        {/* Sandbox Header */}
        <div className="sandbox-header-row">
          <div className="sandbox-title-group">
            <span className="badge badge-primary">
              <DemoIcon size={13} style={{ marginRight: 5 }} /> Live Capability Sandbox
            </span>
            <h4>{current.title}</h4>
            <p className="text-secondary">{current.tagline}</p>
          </div>

          <button
            onClick={handleRunDemo}
            disabled={isRunning}
            className="btn-run-simulation"
          >
            {isRunning ? <Activity size={14} className="spin-icon" /> : <Play size={13} />}
            <span>{isRunning ? 'Running flow...' : current.triggerLabel}</span>
          </button>
        </div>

        {/* 3-Step Demonstration Chain */}
        <div className="sandbox-steps-grid">
          {current.steps.map((st, idx) => {
            const isStepActive = animatingStep >= idx;
            return (
              <div key={st.num} className={`sandbox-step-box ${isStepActive ? 'is-active' : ''}`}>
                <div className="step-box-header">
                  <span className="step-num-pill">{st.num}</span>
                  <span className="step-title-text">{st.title}</span>
                </div>
                <p className="step-desc-text">{st.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Verified Result Strip */}
        <div className="sandbox-result-strip">
          <div className="result-badge-group">
            <CheckCircle2 size={15} color="var(--oda-success)" />
            <strong>{current.resultMetric}</strong>
            <span className="result-divider">•</span>
            <span>{current.resultText}</span>
          </div>
          <div className="result-security-tag">
            <ShieldCheck size={13} />
            <span>Native Synchronous Feature</span>
          </div>
        </div>
      </div>
    </div>
  );
};
