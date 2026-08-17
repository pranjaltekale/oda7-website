import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
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
          id: 'sequences',
          label: 'Automated Sequences',
          icon: Inbox,
          headline: 'Omnichannel WhatsApp, SMS & Email Cadences',
          description: 'Trigger automated multi-touch cadences blending official WhatsApp Business messages, 2-way SMS chat, and tracked email follow-ups from the lead profile.',
          features: ['Official WhatsApp API', '2-Way SMS local numbers', 'Open/Click tracking', 'Automated reminders'],
          metric: '2.4x Deal Velocity',
        },
        {
          id: 'quotes',
          label: 'CPQ Quotes & Proposals',
          icon: DollarSign,
          headline: '1-Click Proposals with Live Digital Signatures',
          description: 'Generate CPQ quotes from the integrated product catalog, track client opens in real-time, and trigger automatic Closed-Won progression on signature.',
          features: ['Integrated product catalog', 'Mobile e-signatures', 'Instant CRM sync', 'Automated commission trigger'],
          metric: '1-Click Closing',
        },
      ],
    },
    workforce: {
      title: 'Workforce & Floor Command',
      description: 'Complete operational control across agents, managers, attendance, shift scheduling, and automated payroll.',
      tabs: [
        {
          id: 'agents',
          label: 'Agent Floor Roster',
          icon: Users,
          headline: 'Live Agent Status Telemetry & Queue Balancing',
          description: 'Real-time oversight of agent states: On Call, Available, In Wrap-up, or On Break. Automatically re-route queues when agents step away.',
          features: ['Real-time status indicators', 'Auto queue redistribution', 'Skill-based routing', 'Wrap-up timer limits'],
          metric: 'Zero Idle Time',
        },
        {
          id: 'managers',
          label: 'Manager Floor Command',
          icon: Radio,
          headline: 'Live Whisper Coaching & Real-time Barging',
          description: 'Supervisors can listen into active calls silently or whisper direct coaching cues into an agent’s headset without the client hearing.',
          features: ['1-Click whisper coaching', 'Silent listen mode', '3-Way conference barge', 'Live sentiment alerts'],
          metric: '1-Click Live Coaching',
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
          id: 'attendance',
          label: 'Attendance & Leave',
          icon: Calendar,
          headline: 'Geo-Verified Shift Attendance & PTO Approval',
          description: 'Browser and biometric time tracking integrated directly with dialer availability. Self-serve vacation requests automatically re-route lead queues.',
          features: ['Geo-verified clock-in', 'Auto PTO queue re-routing', 'Overtime calculation', 'Attendance audit log'],
          metric: '98.4% Shift Compliance',
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

  return (
    <section className="section-wrapper section-alt">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="Interactive Capability Hubs"
          eyebrowIcon="Sparkles"
          title="Explore the depth of the"
          highlightText="oda7 Operating System."
          description="Switch between major functional hubs and select any capability to see how it operates within the unified BIZZFLY workspace."
        />

        {/* Master Hub Switcher (Sales / Workforce / Intelligence) */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '28px' }}>
          <div className="tab-group" style={{ padding: '8px' }}>
            <button
              className={`tab-btn ${activeHub === 'sales' ? 'active' : ''}`}
              onClick={() => handleHubChange('sales')}
            >
              <PhoneCall size={16} />
              <span>Sales Execution</span>
            </button>
            <button
              className={`tab-btn ${activeHub === 'workforce' ? 'active' : ''}`}
              onClick={() => handleHubChange('workforce')}
            >
              <Users size={16} />
              <span>Workforce & Floor Ops</span>
            </button>
            <button
              className={`tab-btn ${activeHub === 'intelligence' ? 'active' : ''}`}
              onClick={() => handleHubChange('intelligence')}
            >
              <Sparkles size={16} />
              <span>AI & Executive BI</span>
            </button>
          </div>
        </div>

        {/* Sub-tab pills slider */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', overflowX: 'auto', paddingBottom: '16px', marginBottom: '32px' }}>
          {currentHub.tabs.map((tab) => {
            const IconComp = tab.icon;
            const isSelected = activeSubTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-full)',
                  background: isSelected ? 'var(--oda-primary)' : 'var(--oda-surface)',
                  border: isSelected ? '1px solid var(--oda-primary-light)' : '1px solid var(--oda-border)',
                  color: isSelected ? '#ffffff' : 'var(--oda-text-secondary)',
                  fontSize: '0.8125rem',
                  fontWeight: '600',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  boxShadow: isSelected ? '0 0 16px rgba(37, 99, 235, 0.35)' : 'none',
                }}
              >
                <IconComp size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Preview Card */}
        <div
          className="feature-showcase-panel animate-fadeIn"
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            borderRadius: '20px',
            padding: '40px',
          }}
          key={`${activeHub}-${activeSubTab}`}
        >
          <div className="responsive-story-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.2fr) minmax(280px, 1fr)', gap: '36px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="badge badge-cyan">{currentHub.title}</span>
                <span className="badge badge-emerald">{currentSubTab.metric}</span>
              </div>

              <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--oda-text-primary)', marginBottom: '14px', lineHeight: '1.2' }}>
                {currentSubTab.headline}
              </h3>

              <p style={{ color: 'var(--oda-text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '24px' }}>
                {currentSubTab.description}
              </p>

              {/* Capability Checklist */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {currentSubTab.features.map((feat, fIdx) => (
                  <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--oda-text-secondary)', fontSize: '0.85rem' }}>
                    <CheckCircle2 size={15} color="#10b981" style={{ flexShrink: 0 }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Action Mockup Card */}
            <div style={{ background: 'var(--oda-surface)', border: '1px solid var(--oda-border)', borderRadius: '14px', padding: '24px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
              <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '12px', background: 'var(--oda-primary-soft)', color: 'var(--oda-primary)', marginBottom: '14px' }}>
                <currentSubTab.icon size={28} />
              </div>
              <div style={{ fontWeight: '800', color: 'var(--oda-text-primary)', fontSize: '1.2rem', marginBottom: '6px' }}>
                {currentSubTab.label}
              </div>
              <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.8rem', marginBottom: '16px' }}>
                Synchronized with BIZZFLY oda7 Engine
              </div>
              <div style={{ background: 'var(--oda-bg-alt)', padding: '12px', borderRadius: '8px', color: 'var(--oda-success)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', fontWeight: '700' }}>
                ✓ Native Telemetry Stream Active
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
