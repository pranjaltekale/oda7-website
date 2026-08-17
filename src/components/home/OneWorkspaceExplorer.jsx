import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import {
  Users,
  PhoneCall,
  Inbox,
  Calendar,
  Zap,
  Building2,
  DollarSign,
  FileText,
  Radio,
  BarChart3,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Clock,
  ShieldCheck,
} from 'lucide-react';

export const OneWorkspaceExplorer = ({ onOpenDemo }) => {
  const [activeItem, setActiveItem] = useState('dialer');

  const capabilities = [
    {
      id: 'leads',
      label: 'Leads & Queue',
      category: 'Sales Execution',
      icon: Users,
      headline: 'Automated Ingestion & Intelligent My Queue',
      desc: 'Inbound prospects are enriched in under 800ms, phone numbers verified, and placed in rep My Queue by intent score.',
      metrics: '<15s Inbound Speed • 96/100 Intent',
      bullets: ['Auto-enrichment from web forms & APIs', 'Algorithmic lead scoring to prevent cherry-picking', 'Duplicate detection & CRM sync'],
    },
    {
      id: 'dialer',
      label: 'Smart Dialer',
      category: 'Telephony',
      icon: PhoneCall,
      headline: '0.8s WebRTC Softphone with Local Presence',
      desc: 'Match prospect local area codes automatically to lift answer rates by 34%. Includes 1-click voicemail drop and HD dual-channel recording.',
      metrics: 'Lead context • Calling workflow',
      bullets: ['Auto local area code match (512, 415, 212)', '1-Click voicemail drop & call dispositioning', 'In-browser WebRTC softphone with zero hardware'],
    },
    {
      id: 'inbox',
      label: 'Omni Inbox',
      category: 'Communication',
      icon: Inbox,
      headline: 'Unified 2-Way WhatsApp, SMS & Email',
      desc: 'Every client message across WhatsApp Business, SMS, and email threads in one single timeline linked to the lead profile.',
      metrics: 'Unified Customer Timeline • Real-Time',
      bullets: ['Official WhatsApp Business API integration', '2-Way SMS from verified local numbers', 'Shared team inboxes and lead assignments'],
    },
    {
      id: 'calendar',
      label: 'Calendar & Demos',
      category: 'Scheduling',
      icon: Calendar,
      headline: 'Instant Round-Robin Booking & Reminders',
      desc: 'Automate demo bookings directly into rep calendars with round-robin load balancing and automated WhatsApp reminders.',
      metrics: '-40% No-Show Rate • Google/Outlook Sync',
      bullets: ['Round-robin routing across sales pods', 'Automated SMS/WhatsApp reminders', 'Instant timezone auto-detection'],
    },
    {
      id: 'campaigns',
      label: 'Campaigns',
      category: 'Marketing',
      icon: Zap,
      headline: 'Multi-Touch Growth & Speed-to-Lead Cadences',
      desc: 'Launch targeted outbound campaigns and connect web visitors to active agents in under 15 seconds.',
      metrics: '303 Leads Managed • 18.4% Conv Rate',
      bullets: ['Multi-channel cadences across WhatsApp & SMS', 'Instant web-to-call phone routing bridge', 'Multi-touch UTM ROI attribution'],
    },
    {
      id: 'companies',
      label: 'Companies',
      category: 'Sales Execution',
      icon: Building2,
      headline: 'B2B Account Directory & Org Hierarchy',
      desc: 'Manage company hierarchies, key stakeholders, and aggregate account-level deal size in one view.',
      metrics: 'Account Intelligence • Org Chart View',
      bullets: ['Parent-child organization mapping', 'Associated contact role directory', 'Historical interaction log'],
    },
    {
      id: 'products',
      label: 'Products & CPQ',
      category: 'Sales Execution',
      icon: DollarSign,
      headline: 'Configurable Product Catalog & Pricing Rules',
      desc: 'Standardize enterprise pricing, discounts, and recurring subscription tiers for rapid quote generation.',
      metrics: 'Instant Pricing • Tiered Bundles',
      bullets: ['Multi-tier subscription & usage models', 'Discount threshold approval workflows', 'Standardized SKU catalog'],
    },
    {
      id: 'scripts',
      label: 'Branching Scripts',
      category: 'Sales Execution',
      icon: FileText,
      headline: 'Dynamic Talk Tracks & Live Objection Battlecards',
      desc: 'Interactive qualification scripts adapt in real-time as prospects answer questions, empowering reps with instant battlecards.',
      metrics: 'Reusable scripts • Shared coaching context',
      bullets: ['Branching decision trees for discovery calls', 'Real-time competitor objection rebuttals', 'Standardized pitch compliance tracking'],
    },
    {
      id: 'sequences',
      label: 'Sequences',
      category: 'Sales Execution',
      icon: Inbox,
      headline: 'Automated Multi-Touch Follow-Up Cadences',
      desc: 'Never let a qualified lead go cold. Trigger automated cadences blending WhatsApp messages, SMS, and tracked emails.',
      metrics: '2.4x Deal Velocity • 0 Missed Follow-ups',
      bullets: ['Conditional branching on email open / reply', 'Pre-approved WhatsApp template messages', 'Automatic sequence pause on call answer'],
    },
    {
      id: 'quotes',
      label: 'Quotes & Proposals',
      category: 'Sales Execution',
      icon: FileText,
      headline: '1-Click Digital Proposals with Mobile Signatures',
      desc: 'Generate branded CPQ proposals from active call data, track prospect view time, and close deals instantly.',
      metrics: '1-Click Proposals • Instant Closed-Won',
      bullets: ['Mobile-optimized electronic signatures', 'Real-time client view notifications', 'Auto-progression to Closed-Won on sign'],
    },
    {
      id: 'agents',
      label: 'Agent Floor Roster',
      category: 'People Ops',
      icon: Users,
      headline: 'Live Agent Status Telemetry & State Balancing',
      desc: 'Real-time floor visibility into rep states: On Call, Available, In Wrap-up, or On Break with automatic queue re-routing.',
      metrics: '24 Reps Active • Zero Idle Floor Lag',
      bullets: ['Live color-coded status badges', 'Automatic queue re-distribution on break', 'Shift schedule compliance tracking'],
    },
    {
      id: 'managers',
      label: 'Manager Floor Command',
      category: 'People Ops',
      icon: Radio,
      headline: 'Live Whisper Coaching & Headset Audio Streaming',
      desc: 'Supervisors monitor live floor queues and whisper direct coaching cues into an agent’s headset without the prospect hearing.',
      metrics: '24ms WebRTC Stream • Silent Coaching',
      bullets: ['1-Click silent listen & whisper coaching', '3-Way conference barge-in for escalations', 'Live sentiment threshold alerts'],
    },
    {
      id: 'analytics',
      label: 'Analytics & Heatmaps',
      category: 'Insights',
      icon: BarChart3,
      headline: 'Hour-by-Hour Pickup Heatmaps & Conversion BI',
      desc: 'Uncover optimal connection windows across timezones and carrier routes to maximize pickup rates and minimize wasted dials.',
      metrics: 'Granular Telephony BI • Custom Exports',
      bullets: ['Timezone pickup rate heatmaps', 'Carrier route delivery & audio health', 'Rep conversion benchmarking'],
    },
    {
      id: 'ai-assistant',
      label: 'AI Sales Assistant',
      category: 'Intelligence',
      icon: Sparkles,
      headline: 'Explain My Numbers Natural Language Querying',
      desc: 'Ask your revenue database questions in plain English and receive instant root-cause breakdowns and recommended actions.',
      metrics: 'Natural Language SQL • Instant Root Cause',
      bullets: ['Plain-English database querying', 'Live speech sentiment analysis', 'Automated CRM summary note extraction'],
    },
  ];

  const currentCap = capabilities.find((c) => c.id === activeItem) || capabilities[0];

  return (
    <section className="section-wrapper section-alt" id="one-workspace">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="Unified Architecture"
          eyebrowIcon="Layers"
          title="Everything your sales team needs."
          highlightText="One workspace."
          description="Explore all 14 core ODA7 capabilities. Click any module on the left to see how it operates within the synchronized BIZZFLY operating system."
        />

        {/* 2-Column Interactive Product Explorer */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 360px) 1fr',
            gap: '32px',
            alignItems: 'stretch',
          }}
          className="sticky-story-grid"
        >
          {/* Left Column: Categorized Module Selector */}
          <div
            style={{
              background: 'rgba(11, 15, 23, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              maxHeight: '620px',
              overflowY: 'auto',
            }}
          >
            <div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '6px 12px', fontWeight: '700', fontFamily: 'var(--font-mono)' }}>
              Select ODA7 Capability (14 Modules)
            </div>

            {capabilities.map((cap) => {
              const IconComp = cap.icon;
              const isSelected = activeItem === cap.id;

              return (
                <button
                  key={cap.id}
                  onClick={() => setActiveItem(cap.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: isSelected ? 'rgba(37, 99, 235, 0.22)' : 'rgba(255,255,255,0.02)',
                    border: isSelected ? '1px solid rgba(59, 130, 246, 0.45)' : '1px solid transparent',
                    color: isSelected ? '#38bdf8' : '#94a3b8',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    textAlign: 'left',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '6px',
                      background: isSelected ? 'var(--accent-primary)' : 'rgba(255,255,255,0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                    }}>
                      <IconComp size={14} />
                    </div>
                    <div>
                      <div style={{ fontWeight: isSelected ? '700' : '600', color: isSelected ? '#fff' : '#cbd5e1', fontSize: '0.85rem' }}>
                        {cap.label}
                      </div>
                      <div style={{ fontSize: '0.6875rem', color: '#64748b' }}>
                        {cap.category}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <ArrowRight size={14} color="#38bdf8" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Large Animated Dashboard & Detail Preview */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(14, 23, 42, 0.95) 0%, rgba(7, 10, 18, 0.98) 100%)',
              border: '1px solid rgba(59, 130, 246, 0.35)',
              borderRadius: '16px',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
            }}
            key={activeItem}
            className="animate-fadeIn"
          >
            <div>
              {/* Header tags */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
                <span className="badge badge-primary">
                  {currentCap.category} // {currentCap.label}
                </span>
                <span className="badge badge-emerald">
                  {currentCap.metrics}
                </span>
              </div>

              {/* Title & Description */}
              <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#ffffff', marginBottom: '12px', lineHeight: '1.2' }}>
                {currentCap.headline}
              </h3>

              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '24px' }}>
                {currentCap.desc}
              </p>

              {/* Capability Checklist */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
                {currentCap.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1', fontSize: '0.875rem' }}>
                    <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0 }} />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Simulated Action Box */}
            <div style={{ background: 'rgba(7, 10, 18, 0.9)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8' }}>
                  <currentCap.icon size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: '700', color: '#fff', fontSize: '0.95rem' }}>
                    Native {currentCap.label} Telemetry
                  </div>
                  <div style={{ color: '#64748b', fontSize: '0.75rem' }}>
                    Synchronized with BIZZFLY oda7 Mesh
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenDemo}
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  background: 'var(--grad-primary)',
                  color: '#fff',
                  fontSize: '0.8125rem',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                }}
              >
                <span>Simulate {currentCap.label}</span>
                <ArrowRight size={14} />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
