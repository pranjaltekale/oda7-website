'use client';

import React, { useState } from 'react';
import {
  Layers,
  Zap,
  ShieldCheck,
  Users,
  PhoneCall,
  Sparkles,
  ReceiptText,
  UserRoundCheck,
  CalendarCheck2,
  DollarSign,
  Building2,
  KeyRound,
  FileCheck,
  Database,
  ArrowRightLeft,
  CheckCircle,
} from 'lucide-react';

const ecosystemNodes = {
  execution: {
    id: 'execution',
    title: 'Sales & Front-Office Execution',
    subtitle: 'High-Velocity Customer Workspaces',
    color: 'var(--oda-primary)',
    modules: [
      { name: 'Leads Pipeline', desc: 'Instant enrichment & Tier-1 routing', icon: Users },
      { name: 'Power Dialer', desc: 'Sub-minute outbound calling queue', icon: PhoneCall },
      { name: 'Conversation AI', desc: 'Live sentiment & objection whisper', icon: Sparkles },
      { name: 'CPQ & Proposals', desc: 'Connected quote & approval flow', icon: ReceiptText },
    ],
    flowDescription: 'Live calls and customer conversations write directly into the shared event bus, hydrating customer state across the platform in under 50ms.',
  },
  operations: {
    id: 'operations',
    title: 'People & Operations Engine',
    subtitle: 'Workforce Governance & Productivity',
    color: '#10b981',
    modules: [
      { name: 'People Directory', desc: 'Unified organizational hierarchy', icon: UserRoundCheck },
      { name: 'Attendance Sync', desc: 'Real-time shift & SLA logging', icon: CalendarCheck2 },
      { name: 'Compensation', desc: 'Automated commissions & quotas', icon: DollarSign },
      { name: 'Capacity Radar', desc: 'Floor coverage & shift balancing', icon: Zap },
    ],
    flowDescription: 'Shift check-ins, call hours, and closed-won commissions link automatically to payroll and productivity models without manual spreadsheets.',
  },
  governance: {
    id: 'governance',
    title: 'Platform Architecture & Super Admin',
    subtitle: 'Enterprise Security & Multi-Tenant Control',
    color: '#38bdf8',
    modules: [
      { name: 'Super Admin', desc: 'Multi-organization provisioning', icon: Building2 },
      { name: 'Granular RBAC', desc: 'Role-based access & permissions', icon: KeyRound },
      { name: 'Audit & SOC2', desc: 'Immutable compliance event trail', icon: FileCheck },
      { name: 'Sync Webhooks', desc: 'Bi-directional enterprise API bus', icon: Database },
    ],
    flowDescription: 'Complete administrative separation, tenant isolation, SAML SSO, and SOC2 Type II audit logging across every workspace interaction.',
  },
};

export const PlatformEcosystemVisual = () => {
  const [activeLayer, setActiveLayer] = useState('execution');
  const current = ecosystemNodes[activeLayer];

  return (
    <div className="platform-ecosystem-visual-card">
      {/* Top Architecture Header */}
      <div className="ecosystem-header">
        <div>
          <span className="badge badge-primary">
            <Layers size={13} style={{ marginRight: 5 }} /> Ecosystem Architecture
          </span>
          <h3>Connected Data Constellation</h3>
          <p className="text-secondary">
            How front-office execution, workforce operations, and platform governance share one synchronous core.
          </p>
        </div>

        {/* Layer Selector Chips */}
        <div className="ecosystem-layer-chips">
          {Object.values(ecosystemNodes).map((node) => (
            <button
              key={node.id}
              onClick={() => setActiveLayer(node.id)}
              className={`layer-chip ${activeLayer === node.id ? 'is-active' : ''}`}
            >
              <span className="layer-chip-dot" />
              <span>{node.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Central Interactive Constellation Canvas */}
      <div className="constellation-canvas">
        {/* Central Core Hub */}
        <div className="core-hub-box">
          <div className="core-hub-pulse" />
          <div className="core-hub-content">
            <div className="core-hub-icon">
              <Database size={22} color="var(--oda-accent)" />
            </div>
            <strong>ODA7 Unified Core</strong>
            <small>Shared Event Bus • Synchronous Schema</small>
            <div className="core-hub-status">
              <span className="pulse-indicator" />
              <span>Real-time Active (50ms sync)</span>
            </div>
          </div>
        </div>

        {/* 3 Radiating Architecture Pillars */}
        <div className="ecosystem-pillars-grid">
          {Object.values(ecosystemNodes).map((node) => {
            const isSelected = activeLayer === node.id;
            return (
              <div
                key={node.id}
                onClick={() => setActiveLayer(node.id)}
                className={`ecosystem-pillar-card ${isSelected ? 'is-selected' : ''}`}
              >
                <div className="pillar-top-bar">
                  <div>
                    <span className="pillar-subtitle">{node.subtitle}</span>
                    <h4 className="pillar-title">{node.title}</h4>
                  </div>
                  <span className="pillar-active-badge">
                    {isSelected ? <CheckCircle size={15} color="var(--oda-accent)" /> : <ArrowRightLeft size={14} />}
                  </span>
                </div>

                <div className="pillar-modules-list">
                  {node.modules.map((mod) => {
                    const ModIcon = mod.icon;
                    return (
                      <div key={mod.name} className="pillar-module-item">
                        <div className="module-item-icon">
                          <ModIcon size={14} />
                        </div>
                        <div className="module-item-text">
                          <strong>{mod.name}</strong>
                          <small>{mod.desc}</small>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Flow Inspector Bar */}
        <div className="ecosystem-flow-inspector">
          <div className="inspector-badge">
            <ShieldCheck size={14} color="var(--oda-success)" />
            <span>Synchronous Connection: <strong>{current.title}</strong></span>
          </div>
          <p>{current.flowDescription}</p>
        </div>
      </div>
    </div>
  );
};
