'use client';

import React, { useState } from 'react';
import {
  PhoneCall,
  LayoutDashboard,
  Megaphone,
  Settings2,
  UserRoundCheck,
  ChartNoAxesCombined,
  AlertTriangle,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Clock,
  Shield,
} from 'lucide-react';

const scenarios = [
  {
    id: 'sales',
    role: 'Inside Sales Executive',
    persona: 'Priya Sharma • Senior Account Exec',
    icon: PhoneCall,
    badge: 'Sales Acceleration',
    situation: '150 inbound enterprise trial signups land after a major webinar launch.',
    problem: 'Without connected context, Priya spends 8 minutes per lead switching between CRM tabs, LinkedIn, and calling tools.',
    odaAction: 'ODA7 instantly hydrates company firmographics, matches the tier-1 battlecard, and queues the call in 1-click dialer.',
    outcome: 'First outreach executed in 90 seconds. Demo booked on first touch with full timeline preserved.',
    metric: '+34% Connect Rate',
    metricSub: '90s Speed-to-Lead',
    uiSnippet: {
      title: 'Active Deal Acceleration',
      account: 'CloudScale Enterprise ($140k ARR)',
      step: 'Call Connected (03:45)',
      talkingPoint: 'Battlecard active: Multi-tool fatigue pitch',
      state: 'Demo Confirmed',
    },
  },
  {
    id: 'manager',
    role: 'Sales Floor Manager',
    persona: 'Marcus Vance • Regional Director',
    icon: LayoutDashboard,
    badge: 'Real-Time Supervision',
    situation: '18 reps active on the morning call blitz across Americas and EMEA desks.',
    problem: 'Marcus only discovers lost deals days later during weekly CRM pipeline review meetings.',
    odaAction: 'ODA7 surfaces live floor telemetry, flags a high-value objection moment, and allows 1-click whisper coaching.',
    outcome: 'Manager coached rep mid-call on enterprise security package, saving a $95,000 deal in flight.',
    metric: '99.8% Queue SLA',
    metricSub: 'Live Whisper Coaching',
    uiSnippet: {
      title: 'Floor Command Telemetry',
      account: 'FinEdge Global ($95k ARR)',
      step: 'Whisper Alert: Objection detected',
      talkingPoint: 'Coached: Offer pre-configured SOC2 pack',
      state: 'Objection Resolved',
    },
  },
  {
    id: 'marketing',
    role: 'Growth Marketing Lead',
    persona: 'Elena Rostova • Head of Demand Gen',
    icon: Megaphone,
    badge: 'Pipeline Attribution',
    situation: 'Managing $45,000/month across LinkedIn Sponsored, Partner Webinars, and Direct SEO.',
    problem: 'Ad platforms report form fills, but marketing has zero visibility into which campaigns create closed-won revenue.',
    odaAction: 'ODA7 binds marketing campaign UTMs to live rep conversations, proposal value, and final closed revenue.',
    outcome: 'Reallocated $15,000 from low-conversion ads into top-performing partner channels, doubling pipeline ROI.',
    metric: '$2.4M Attributed Pipeline',
    metricSub: '$240 Blended CAC',
    uiSnippet: {
      title: 'Multi-Touch Revenue Attribution',
      account: 'Industry Webinar Series Q3',
      step: '24.8% MQL-to-SQL Conversion',
      talkingPoint: 'Direct pipeline generated: $680,000',
      state: 'Top ROI Channel',
    },
  },
  {
    id: 'operations',
    role: 'Revenue Operations Director',
    persona: 'Alex Carter • Head of RevOps',
    icon: Settings2,
    badge: 'Workforce Governance',
    situation: 'Scaling sales capacity from 30 to 80 reps across multi-shift distributed teams.',
    problem: 'Staffing gaps, shift overlap, and quota imbalances hide in disconnected HR and payroll spreadsheets.',
    odaAction: 'ODA7 correlates real-time shift attendance with dial volume, capacity utilization, and commission tiers.',
    outcome: 'Zero shift coverage gaps, optimal floor utilization (96%), and fully transparent incentive tracking.',
    metric: '96% Staffing Capacity',
    metricSub: '99.4% SLA Adherence',
    uiSnippet: {
      title: 'Workforce & Capacity Matrix',
      account: 'Americas Discovery Desk (42 Reps)',
      step: '100% Shift Adherence',
      talkingPoint: 'Capacity utilized: 84 dials/rep/hr',
      state: 'Optimal Coverage',
    },
  },
  {
    id: 'hr',
    role: 'People & Talent Lead',
    persona: 'Sophia Martinez • People Operations',
    icon: UserRoundCheck,
    badge: 'People Enablement',
    situation: 'Onboarding 12 new sales and solutions engineers in a single cohort.',
    problem: 'New hires take 6 weeks to become productive because tool logins, training scripts, and mentorship live in separate silos.',
    odaAction: 'ODA7 embeds guided role playbooks, live shadowing permissions, and automated onboarding milestones into one workspace.',
    outcome: 'Time to first live demo reduced from 28 days to 9 days with 92% certification test scores.',
    metric: '9 Days Ramp Time',
    metricSub: '98.2% Attendance',
    uiSnippet: {
      title: 'New Hire Enablement Track',
      account: 'Cohort 2026-Q3 (12 Reps)',
      step: 'Day 7: Live Call Certification',
      talkingPoint: 'Automated shadow buddy assigned',
      state: 'Certification Passed',
    },
  },
  {
    id: 'leadership',
    role: 'Executive C-Suite',
    persona: 'David Kim • Chief Commercial Officer',
    icon: ChartNoAxesCombined,
    badge: 'Executive Clarity',
    situation: 'Board meeting preparation requiring unified revenue, headcount productivity, and CAC forecast data.',
    problem: 'RevOps teams spend 4 days stitching disparate reports with conflicting definitions of pipeline velocity.',
    odaAction: 'ODA7 provides single-source-of-truth telemetry linking real-time floor activity directly to ARR forecast models.',
    outcome: 'Instant board-ready visibility with predictable ARR trajectory ($8.4M) and 124% net revenue retention.',
    metric: '$8.4M ARR Milestone',
    metricSub: '124% Net Retention',
    uiSnippet: {
      title: 'Commercial Growth Forecast',
      account: 'Total Organization Portfolio',
      step: '118% Quota Attainment',
      talkingPoint: 'Net CAC Payback: 7.2 Months',
      state: 'Board Ready',
    },
  },
];

export const ScenarioStoryboardVisual = () => {
  const [activeScenario, setActiveScenario] = useState('sales');

  const current = scenarios.find((s) => s.id === activeScenario) || scenarios[0];
  const Icon = current.icon;

  return (
    <div className="scenario-storyboard-system">
      {/* Role Navigation Strip */}
      <div className="storyboard-role-tabs">
        {scenarios.map((sc) => {
          const RoleIcon = sc.icon;
          const isActive = sc.id === activeScenario;
          return (
            <button
              key={sc.id}
              onClick={() => setActiveScenario(sc.id)}
              className={`storyboard-role-tab ${isActive ? 'is-active' : ''}`}
            >
              <RoleIcon size={16} />
              <div className="role-tab-info">
                <span className="role-tab-title">{sc.role}</span>
                <span className="role-tab-badge">{sc.badge}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Storyboard Grid */}
      <div className="storyboard-card">
        {/* Storyboard Header */}
        <div className="storyboard-header">
          <div className="storyboard-identity">
            <div className="storyboard-avatar">
              <Icon size={20} />
            </div>
            <div>
              <h3>{current.role}</h3>
              <p className="text-secondary">{current.persona}</p>
            </div>
          </div>
          <div className="storyboard-quick-metric">
            <div className="metric-pill">
              <TrendingUp size={14} color="var(--oda-accent)" />
              <strong>{current.metric}</strong>
            </div>
            <small>{current.metricSub}</small>
          </div>
        </div>

        {/* 4-Phase Storyboard Timeline */}
        <div className="storyboard-phases-grid">
          {/* Phase 1: Situation */}
          <div className="storyboard-phase-box phase-situation">
            <div className="phase-indicator">
              <span className="phase-num">01</span>
              <span className="phase-label">Operational Situation</span>
            </div>
            <p>{current.situation}</p>
          </div>

          {/* Phase 2: Friction Problem */}
          <div className="storyboard-phase-box phase-problem">
            <div className="phase-indicator">
              <span className="phase-num text-warning">02</span>
              <span className="phase-label text-warning">
                <AlertTriangle size={12} style={{ display: 'inline', marginRight: 4 }} /> The Disconnected Friction
              </span>
            </div>
            <p>{current.problem}</p>
          </div>

          {/* Phase 3: ODA7 Action */}
          <div className="storyboard-phase-box phase-action">
            <div className="phase-indicator">
              <span className="phase-num text-primary">03</span>
              <span className="phase-label text-primary">
                <Sparkles size={12} style={{ display: 'inline', marginRight: 4 }} /> ODA7 Connected Action
              </span>
            </div>
            <p>{current.odaAction}</p>
          </div>

          {/* Phase 4: Business Outcome */}
          <div className="storyboard-phase-box phase-outcome">
            <div className="phase-indicator">
              <span className="phase-num text-success">04</span>
              <span className="phase-label text-success">
                <CheckCircle2 size={12} style={{ display: 'inline', marginRight: 4 }} /> Verified Outcome
              </span>
            </div>
            <p><strong>{current.outcome}</strong></p>
          </div>
        </div>

        {/* Contextual UI Snippet Panel */}
        <div className="storyboard-snippet-panel">
          <div className="snippet-header">
            <span className="snippet-badge">
              <Shield size={13} style={{ marginRight: 5 }} /> Connected ODA7 Operating Context
            </span>
            <span className="snippet-title">{current.uiSnippet.title}</span>
          </div>
          <div className="snippet-body-row">
            <div className="snippet-col">
              <small>Account / Cohort</small>
              <strong>{current.uiSnippet.account}</strong>
            </div>
            <div className="snippet-col">
              <small>Live Step</small>
              <span className="badge badge-subtle">{current.uiSnippet.step}</span>
            </div>
            <div className="snippet-col">
              <small>Contextual Script / Insight</small>
              <span>{current.uiSnippet.talkingPoint}</span>
            </div>
            <div className="snippet-col col-status">
              <small>Workflow State</small>
              <span className="badge badge-emerald">{current.uiSnippet.state}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
