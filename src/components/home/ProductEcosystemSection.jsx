'use client';

import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import {
  PhoneCall,
  Users,
  DollarSign,
  Award,
  BarChart3,
  Sparkles,
  Layers,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const ProductEcosystemSection = () => {
  const [selectedNode, setSelectedNode] = useState(0);

  const nodes = [
    {
      title: 'Sales Execution',
      icon: PhoneCall,
      color: '#38bdf8',
      desc: '0.8s local presence WebRTC dialer, My Queue prioritization, dynamic branching scripts, and 1-click quotes.',
      stats: '+34% Pickup Lift',
    },
    {
      title: 'People Operations',
      icon: Users,
      color: '#10b981',
      desc: 'Live floor roster telemetry, agent availability states, shift attendance audit, and automated pod routing.',
      stats: '24 Active Reps',
    },
    {
      title: 'Compensation Engine',
      icon: DollarSign,
      color: '#3b82f6',
      desc: 'Automated commission calculations on Closed-Won, tiered accelerators, and 1-click itemized PDF payslips.',
      stats: '$42,850 Verified',
    },
    {
      title: 'Floor Engagement',
      icon: Award,
      color: '#fbbf24',
      desc: 'Gamified floor revenue leaderboards, live sprint battles, milestone badges, and performance announcements.',
      stats: '3 Live Battles',
    },
    {
      title: 'Performance Insights',
      icon: BarChart3,
      color: '#a855f7',
      desc: 'Hour-by-hour pickup heatmaps, carrier route diagnostics, team conversion pacing, and executive revenue BI.',
      stats: '99.99% SLA Uptime',
    },
    {
      title: 'AI Speech Intelligence',
      icon: Sparkles,
      color: '#06b6d4',
      desc: 'Real-time objection battlecards, live prospect sentiment scoring, and "Explain My Numbers" natural language SQL.',
      stats: '+78 Intent Score',
    },
  ];

  const activeNodeData = nodes[selectedNode];

  return (
    <section className="section-wrapper section-alt" id="ecosystem">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="The Connected Architecture"
          eyebrowIcon="Layers"
          title="Everything your teams need."
          highlightText="Synchronously connected."
          description="ODA7 replaces 10+ disjointed SaaS subscriptions with one continuous data mesh where sales, people, operations, and intelligence operate in unison."
        />

        {/* Central Ecosystem Hub Composition */}
        <div
          className="feature-showcase-panel"
          style={{
            maxWidth: '1140px',
            margin: '0 auto',
            borderRadius: '24px',
            padding: '40px',
          }}
        >
          {/* Top Node Selector Strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '12px',
              marginBottom: '36px',
            }}
          >
            {nodes.map((node, idx) => {
              const IconComp = node.icon;
              const isSelected = selectedNode === idx;

              return (
                <button
                  key={node.title}
                  onClick={() => setSelectedNode(idx)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '16px 12px',
                    borderRadius: '12px',
                    background: isSelected ? 'var(--oda-primary)' : 'var(--oda-surface)',
                    border: isSelected ? `2px solid var(--oda-primary-light)` : '1px solid var(--oda-border)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                    boxShadow: isSelected ? '0 0 16px rgba(37, 99, 235, 0.35)' : 'none',
                  }}
                >
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: isSelected ? 'rgba(0,0,0,0.2)' : 'var(--oda-primary-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isSelected ? '#ffffff' : 'var(--oda-accent)',
                  }}>
                    <IconComp size={18} />
                  </div>
                  <span style={{ fontSize: '0.785rem', fontWeight: isSelected ? '750' : '600', color: isSelected ? '#ffffff' : 'var(--oda-text-secondary)', textAlign: 'center' }}>
                    {node.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Node Detail Card */}
          <div
            style={{
              background: 'var(--oda-surface)',
              border: '1px solid var(--oda-border)',
              borderRadius: '16px',
              padding: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            }}
            key={selectedNode}
            className="animate-fadeIn"
          >
            <div style={{ maxWidth: '680px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span className="badge badge-primary">
                  {activeNodeData.title}
                </span>
                <span className="badge badge-emerald">
                  {activeNodeData.stats}
                </span>
              </div>
              <h4 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--oda-text-primary)', marginBottom: '6px' }}>
                Integrated directly into the ODA7 Core Mesh
              </h4>
              <p style={{ color: 'var(--oda-text-secondary)', fontSize: '0.875rem', lineHeight: '1.6', margin: 0 }}>
                {activeNodeData.desc}
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="badge badge-cyan" style={{ fontFamily: 'var(--font-mono)' }}>
                Sub-Second Data Sync
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
