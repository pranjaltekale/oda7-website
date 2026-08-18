'use client';

import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { LightTabIndicator } from '../common/LightTabIndicator';
import { ProductStateTransition } from '../common/ProductStateTransition';
import { InteractiveTiltCard } from '../common/InteractiveTiltCard';
import {
  PhoneCall,
  Users,
  Sparkles,
  Layers,
  Inbox,
  Clock,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  FileText,
  DollarSign,
  Calendar,
  BarChart3,
  Flame,
  Globe,
  Radio,
  Award,
} from 'lucide-react';

export const InteractiveFeatureTabs = () => {
  const [activeHub, setActiveHub] = useState('sales'); // 'sales' | 'workforce' | 'intelligence'
  const [activeSubTab, setActiveSubTab] = useState('leads');

  const hubs = {
    sales: {
      title: 'Sales Execution Hub',
      description: 'Streamline rep daily workflow from prioritized lead ingestion to instant predictive dialing and automated quotes.',
      tabs: [
        {
          id: 'leads',
          label: 'Leads & Ingestion',
          icon: Layers,
          headline: 'Algorithmic Lead Enrichment & Priority Queue',
          description: 'Inbound leads are enriched in under 800ms, phone numbers verified against local carrier routes, and instantly ranked in My Queue to eliminate rep cherry-picking.',
          features: ['Sub-second ingestion', 'Carrier verification', 'Duplicate prevention', 'Lead scoring ML'],
          metric: '<15s Inbound Speed',
        },
        {
          id: 'dialer',
          label: 'Smart Predictive Dialer',
          icon: PhoneCall,
          headline: '0.8s WebRTC Telephony with Local Presence',
          description: 'Auto-match prospect area codes to lift connection rates by 34%. Includes 1-click voicemail drop, dual-channel HD call recording, and zero hardware setup.',
          features: ['Local area match (512, 415, 212)', '1-Click voicemail drop', 'Zero dropped frames', 'WebRTC softphone'],
          metric: 'Calling context in one view',
        },
        {
          id: 'calls',
          label: 'Calls & Branching Scripts',
          icon: FileText,
          headline: 'Dynamic Branching Call Scripts with AI Prompts',
          description: 'Interactive talk tracks adapt in real-time as prospects answer qualification questions, ensuring junior reps handle every enterprise objection smoothly.',
          features: ['Branching talk tracks', 'Real-time objection battlecards', 'Script certification', 'Call scoring QA'],
          metric: 'Reusable coaching context',
        },
        {
          id: 'inbox',
          label: 'Omni Inbox & WhatsApp',
          icon: Inbox,
          headline: 'Unified 2-Way Official WhatsApp & SMS Inbox',
          description: 'Message prospects directly from the CRM record using official Meta WhatsApp Business Cloud APIs with 94% open rates and automated sequence triggers.',
          features: ['Official WhatsApp Cloud API', 'Automated trigger sequences', 'Shared team inboxes', '2-Way SMS conversation'],
          metric: '94% WhatsApp Open Rate',
        },
      ],
    },
    workforce: {
      title: 'Workforce Management & Shift Ops',
      description: 'Unified operational cockpit for managing rep shifts, geolocation attendance, dynamic coaching, and commission payroll.',
      tabs: [
        {
          id: 'attendance',
          label: 'Attendance & Geolocation',
          icon: Clock,
          headline: 'Geolocation Shift Punches & Active State Tracking',
          description: 'Ensure reps only punch in from authorized office coordinates or validated VPN IPs. Track active vs break states with sub-second accuracy.',
          features: ['Geolocation radius lock', 'Active/Break status telemetry', 'Automatic overtime tally', 'Shift schedule builder'],
          metric: '100% Attendance Audit',
        },
        {
          id: 'coaching',
          label: 'Live Floor Whisper',
          icon: Radio,
          headline: 'Sub-Second Silent Listening & Headset Whisper Coaching',
          description: 'Supervisors can monitor live calls without prospect awareness and whisper critical objection talk tracks directly into rep headsets.',
          features: ['1-Click silent listening', 'Headset audio whisper', 'Live sentiment scoring', 'Floor broadcast banners'],
          metric: '24ms Whisper Stream',
        },
        {
          id: 'teams',
          label: 'Teams & Departments',
          icon: Globe,
          headline: 'Multi-Squad Territory & Pod Hierarchy',
          description: 'Organize reps into territory squads, vertical pods, and regional divisions with granular role-based permissions and custom quota targets.',
          features: ['Territory mapping', 'Squad vs squad leaderboards', 'Custom quota pacing', 'Department RBAC'],
          metric: 'Granular Governance',
        },
        {
          id: 'compensation',
          label: 'Automated Payroll & SPIFFs',
          icon: Award,
          headline: 'Real-Time Commission Calculation & Itemized Payslips',
          description: 'Commissions calculate instantly on Closed-Won. Support for tiered accelerators, weekend flash SPIFFs, and one-click PDF payslip generation.',
          features: ['Instant wallet credit', 'Tiered accelerator rules', 'Flash weekend SPIFFs', 'Itemized PDF payslips'],
          metric: 'Zero Payroll Disputes',
        },
      ],
    },
    intelligence: {
      title: 'AI Intelligence & Executive BI',
      description: 'Pervasive intelligence layer transforming sales telemetry into actionable revenue recommendations.',
      tabs: [
        {
          id: 'analytics',
          label: 'Real-Time Analytics',
          icon: BarChart3,
          headline: 'Hour-by-Hour Telephony Heatmaps & Metrics',
          description: 'Identify optimal connection windows across timezones and carrier routes to maximize pickup rates and minimize wasted dials.',
          features: ['Timezone connection heatmaps', 'Carrier route health', 'Rep conversion benchmarking', 'Custom PDF exports'],
          metric: 'Granular BI',
        },
        {
          id: 'ai-assistant',
          label: 'AI Sales Assistant',
          icon: Sparkles,
          headline: 'Explain My Numbers Natural Language Querying',
          description: 'Query your entire revenue database in plain English. Get instant root-cause breakdowns and recommended 1-click corrective actions.',
          features: ['Natural language SQL', 'Speech sentiment analysis', 'Auto-CRM note extraction', 'Anomaly detection'],
          metric: 'Instant Root-Cause',
        },
        {
          id: 'heatmap',
          label: 'Conversion Heatmap',
          icon: Flame,
          headline: 'Territory & Timezone Performance Heatmaps',
          description: 'Visualize pipeline velocity and conversion efficiency across geographies, lead sources, and rep squads on interactive heatmaps.',
          features: ['Geographic conversion maps', 'Lead source attribution', 'Deal velocity tracking', 'Carrier route diagnostics'],
          metric: 'Outcome visibility',
        },
        {
          id: 'executive',
          label: 'Executive Command',
          icon: TrendingUp,
          headline: 'C-Suite Revenue Telemetry & SaaS Telemetry',
          description: 'Consolidated executive dashboard unifying MRR, ARR, customer acquisition cost (CAC), LTV, and multi-tenant billing health.',
          features: ['Consolidated ARR/MRR', 'CAC and LTV modeling', 'Tenant churn telemetry', 'Multi-tenant governance'],
          metric: 'Master Telemetry',
        },
      ],
    },
  };

  const currentHub = hubs[activeHub];
  const currentSubTab = currentHub.tabs.find((t) => t.id === activeSubTab) || currentHub.tabs[0];

  const handleHubChange = (hubKey) => {
    setActiveHub(hubKey);
    setActiveSubTab(hubs[hubKey].tabs[0].id);
  };

  const hubOptions = [
    { id: 'sales', label: 'Sales Execution', icon: PhoneCall },
    { id: 'workforce', label: 'Workforce & Floor Ops', icon: Users },
    { id: 'intelligence', label: 'AI & Executive BI', icon: Sparkles },
  ];

  return (
    <section className="section-wrapper section-alt">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="Interactive Capability Hubs"
          eyebrowIcon="Sparkles"
          title="Explore the depth of the"
          highlightText="oda7 Operating System."
          description="Switch between functional hubs to see how each capability contributes to the connected ODA7 workflow."
        />

        {/* Master Hub Switcher with LightTabIndicator */}
        <div className="tabs-scroll-wrapper" style={{ marginBottom: '20px' }}>
          <LightTabIndicator
            tabs={hubOptions}
            activeTab={activeHub}
            onChange={handleHubChange}
            variant="pill"
            className="hub-master-tabs"
          />
        </div>

        {/* Sub-tab pills slider with LightTabIndicator */}
        <div className="tabs-scroll-wrapper">
          <LightTabIndicator
            tabs={currentHub.tabs.map((tab) => ({ id: tab.id, label: tab.label, icon: tab.icon }))}
            activeTab={activeSubTab}
            onChange={setActiveSubTab}
            variant="pill"
            className="hub-sub-tabs"
          />
        </div>

        {/* Dynamic Interactive Preview Card with ProductStateTransition and InteractiveTiltCard */}
        <ProductStateTransition activeKey={`${activeHub}-${activeSubTab}`}>
          <InteractiveTiltCard
            maxTilt={2.8}
            scale={1.012}
            className="feature-showcase-panel"
            style={{
              maxWidth: '1080px',
              margin: '0 auto',
              borderRadius: '20px',
              padding: 'clamp(20px, 4vw, 40px)',
            }}
          >
            <div className="responsive-story-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: 'clamp(24px, 4vw, 36px)', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <span className="badge badge-cyan">{currentHub.title}</span>
                  <span className="badge badge-emerald">{currentSubTab.metric}</span>
                </div>

                <h3 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.75rem)', fontWeight: '800', color: 'var(--oda-text-primary)', marginBottom: '14px', lineHeight: '1.2' }}>
                  {currentSubTab.headline}
                </h3>

                <p style={{ color: 'var(--oda-text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '24px' }}>
                  {currentSubTab.description}
                </p>

                {/* Capability Checklist */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '10px' }}>
                  {currentSubTab.features.map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--oda-text-secondary)', fontSize: '0.85rem' }}>
                      <CheckCircle2 size={15} color="#10b981" style={{ flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Action Mockup Card */}
              <div
                className="tilt-floating-badge"
                style={{
                  background: 'var(--oda-surface)',
                  border: '1px solid var(--oda-border)',
                  borderRadius: '14px',
                  padding: '24px',
                  textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                }}
              >
                <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '12px', background: 'var(--oda-primary-soft)', color: 'var(--oda-primary)', marginBottom: '14px' }}>
                  <currentSubTab.icon size={28} />
                </div>
                <div style={{ fontWeight: '800', color: 'var(--oda-text-primary)', fontSize: '1.2rem', marginBottom: '6px' }}>
                  {currentSubTab.label}
                </div>
                <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.8rem', marginBottom: '16px' }}>
                  Connected through the ODA7 workflow
                </div>
                <div style={{ background: 'var(--oda-bg-alt)', padding: '12px', borderRadius: '8px', color: 'var(--oda-success)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', fontWeight: '700' }}>
                  ✓ Native Telemetry Stream Active
                </div>
              </div>
            </div>
          </InteractiveTiltCard>
        </ProductStateTransition>

      </div>
    </section>
  );
};
