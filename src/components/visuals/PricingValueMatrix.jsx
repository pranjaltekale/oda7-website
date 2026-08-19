'use client';

import React, { useState } from 'react';
import {
  DollarSign,
  Calculator,
  Check,
  Minus,
  Sparkles,
  Zap,
  Shield,
  Layers,
  ArrowRight,
  TrendingDown,
  Building,
} from 'lucide-react';
import { Link } from '../../lib/navigation';

const comparisonCategories = [
  {
    name: 'Sales Execution & Outreach',
    features: [
      { name: 'Lead Pipeline & Inbound Routing', core: true, scale: true, enterprise: true },
      { name: 'Power Dialer & 1-Click Calling', core: 'Standard', scale: 'High Velocity', enterprise: 'Unlimited Pods' },
      { name: 'Dynamic Objection Battlecards', core: 'Basic', scale: 'Adaptive', enterprise: 'Custom Enterprise Trees' },
      { name: 'Multi-Touch Cadence Sequences', core: false, scale: true, enterprise: true },
      { name: 'CPQ Quote & Proposal Generator', core: false, scale: true, enterprise: true },
    ],
  },
  {
    name: 'Conversation AI & Coaching',
    features: [
      { name: 'Real-Time Call Transcription', core: false, scale: true, enterprise: true },
      { name: 'Mid-Call AI Whisper Coaching', core: false, scale: true, enterprise: true },
      { name: 'Sentiment & Objection Analytics', core: 'Summary', scale: 'Real-Time', enterprise: 'Custom Models' },
    ],
  },
  {
    name: 'People, Operations & Governance',
    features: [
      { name: 'Employee Directory & Roster', core: true, scale: true, enterprise: true },
      { name: 'Shift Attendance & SLA Tracking', core: false, scale: true, enterprise: true },
      { name: 'Automated Commission & Payroll Sync', core: false, scale: true, enterprise: true },
      { name: 'Super Admin & Multi-Tenant Control', core: false, scale: false, enterprise: true },
      { name: 'SOC2 Type II & Dedicated Instance', core: false, scale: false, enterprise: true },
    ],
  },
];

export const PricingValueMatrix = () => {
  const [teamSize, setTeamSize] = useState(25);
  const [includeDialer, setIncludeDialer] = useState(true);
  const [includeAI, setIncludeAI] = useState(true);
  const [includePeople, setIncludePeople] = useState(true);
  const [includeSuperAdmin, setIncludeSuperAdmin] = useState(false);

  // Calculate estimated savings and tools eliminated
  let toolsCount = 2;
  if (includeDialer) toolsCount += 1;
  if (includeAI) toolsCount += 1;
  if (includePeople) toolsCount += 1;
  if (includeSuperAdmin) toolsCount += 1;

  // Average standalone SaaS stack cost ~$180/seat/month across 5 tools vs unified ODA7
  const estimatedSavings = Math.round(teamSize * (toolsCount * 32));
  const recommendedTier = teamSize > 60 || includeSuperAdmin ? 'Enterprise Autonomous' : teamSize > 15 || includeAI ? 'Connected Scale' : 'Core Workspace';

  return (
    <div className="pricing-value-matrix-system">
      {/* Interactive Scope & ROI Estimator */}
      <div className="scope-estimator-card">
        <div className="scope-estimator-header">
          <div className="estimator-title-group">
            <span className="badge badge-primary">
              <Calculator size={13} style={{ marginRight: 5 }} /> Workspace Scope Estimator
            </span>
            <h3>Estimate Your Operations Consolidation</h3>
            <p className="text-secondary">
              See how many disparate point-tools ODA7 eliminates and calculate the direct ROI for your team size.
            </p>
          </div>
        </div>

        <div className="estimator-body-grid">
          {/* Left Column: Scope Controls */}
          <div className="estimator-controls">
            {/* Team Size Slider */}
            <div className="estimator-slider-block">
              <div className="slider-label-row">
                <span className="slider-title">Active Team Seats</span>
                <span className="slider-value-badge">{teamSize} Reps & Managers</span>
              </div>
              <input
                type="range"
                min="5"
                max="200"
                step="5"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="range-input"
              />
              <div className="slider-scale-ticks">
                <span>5</span>
                <span>50</span>
                <span>100</span>
                <span>150</span>
                <span>200+</span>
              </div>
            </div>

            {/* Modules Checkbox Toggles */}
            <div className="estimator-modules-toggles">
              <span className="modules-toggles-title">Required Operating Modules:</span>
              <div className="modules-chips-grid">
                <label className={`module-toggle-chip ${includeDialer ? 'is-selected' : ''}`}>
                  <input type="checkbox" checked={includeDialer} onChange={(e) => setIncludeDialer(e.target.checked)} />
                  <span>Power Calling & Dialer</span>
                </label>
                <label className={`module-toggle-chip ${includeAI ? 'is-selected' : ''}`}>
                  <input type="checkbox" checked={includeAI} onChange={(e) => setIncludeAI(e.target.checked)} />
                  <span>AI Whisper & Coaching</span>
                </label>
                <label className={`module-toggle-chip ${includePeople ? 'is-selected' : ''}`}>
                  <input type="checkbox" checked={includePeople} onChange={(e) => setIncludePeople(e.target.checked)} />
                  <span>Attendance & Comp Sync</span>
                </label>
                <label className={`module-toggle-chip ${includeSuperAdmin ? 'is-selected' : ''}`}>
                  <input type="checkbox" checked={includeSuperAdmin} onChange={(e) => setIncludeSuperAdmin(e.target.checked)} />
                  <span>Super Admin Multi-Tenant</span>
                </label>
              </div>
            </div>
          </div>

          {/* Right Column: Calculated Impact */}
          <div className="estimator-results-box">
            <span className="results-box-header">Estimated Operational Impact</span>

            <div className="results-metrics-grid">
              <div className="result-metric-card">
                <small>Disconnected Tools Replaced</small>
                <strong className="text-accent">{toolsCount} Point Tools</strong>
                <span>CRM, Dialer, Coaching, HR, Spreadsheets</span>
              </div>

              <div className="result-metric-card">
                <small>Est. Monthly Tool Savings</small>
                <strong className="text-success">${estimatedSavings.toLocaleString()} / mo</strong>
                <span>Eliminated subscription overhead</span>
              </div>
            </div>

            <div className="recommended-tier-banner">
              <div>
                <small>Recommended Configuration</small>
                <h4>{recommendedTier}</h4>
              </div>
              <Link to="/contact" className="btn btn-primary btn-sm">
                Request Tailored Proposal <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Feature & Capability Comparison Table */}
      <div className="pricing-comparison-table-wrapper">
        <div className="comparison-table-header">
          <h3>Detailed Entitlement Comparison</h3>
          <p className="text-secondary">Transparent capabilities mapped across organizational tiers.</p>
        </div>

        <div className="comparison-table">
          {/* Table Column Headings */}
          <div className="comparison-row comparison-head-row">
            <div className="comparison-col-feature">Platform Capability</div>
            <div className="comparison-col-tier">Core Workspace</div>
            <div className="comparison-col-tier is-highlighted">Connected Scale</div>
            <div className="comparison-col-tier">Enterprise Autonomous</div>
          </div>

          {/* Category Sections */}
          {comparisonCategories.map((cat) => (
            <React.Fragment key={cat.name}>
              <div className="comparison-cat-row">
                <span>{cat.name}</span>
              </div>
              {cat.features.map((feat) => (
                <div key={feat.name} className="comparison-row">
                  <div className="comparison-col-feature">{feat.name}</div>
                  <div className="comparison-col-tier">
                    {renderTierVal(feat.core)}
                  </div>
                  <div className="comparison-col-tier is-highlighted">
                    {renderTierVal(feat.scale)}
                  </div>
                  <div className="comparison-col-tier">
                    {renderTierVal(feat.enterprise)}
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

function renderTierVal(val) {
  if (typeof val === 'boolean') {
    return val ? (
      <Check size={16} color="var(--oda-success)" style={{ margin: '0 auto' }} />
    ) : (
      <Minus size={15} color="var(--oda-text-muted)" style={{ margin: '0 auto' }} />
    );
  }
  return <span className="tier-text-val">{val}</span>;
}
