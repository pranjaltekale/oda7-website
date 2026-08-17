import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import {
  Users,
  DollarSign,
  Trophy,
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  FileSpreadsheet,
  Award,
} from 'lucide-react';

export const AgencyOpsSection = () => {
  const [activeStory, setActiveStory] = useState('run-floor');

  const stories = [
    {
      id: 'run-floor',
      title: 'Run the Floor',
      icon: Users,
      headline: 'Orchestrate agents, squads, and floor queues in real-time.',
      items: [
        'Organize sales reps into regional pods, territory squads, and product divisions.',
        'Live agent status telemetry: On Call, Available, In Wrap-up, or On Break.',
        'Dynamic lead queue redistribution when reps step away or clock out.',
      ],
      tag: 'Floor Operations',
    },
    {
      id: 'manage-people',
      title: 'Manage the People',
      icon: Calendar,
      headline: 'Attendance, leave management, and automated onboarding.',
      items: [
        'Geo-verified shift attendance and biometric/browser time tracking.',
        'Self-serve vacation and sick leave requests with automated queue re-routing.',
        'Standardized rep onboarding paths with interactive script certification.',
      ],
      tag: 'People Ops',
    },
    {
      id: 'measure-perf',
      title: 'Measure Performance',
      icon: Trophy,
      headline: 'Live TV leaderboards, achievements, and sales contests.',
      items: [
        'TV-mode broadcast screens for live deal celebrations with sound cues & confetti.',
        'Run rep vs. rep duels and squad tournaments with custom prize pools.',
        'Milestone badges for meaningful team achievements and activity goals.',
      ],
      tag: 'Gamification',
    },
    {
      id: 'automate-ops',
      title: 'Automate Operations',
      icon: DollarSign,
      headline: 'Automated commission calculation and itemized payslip dispatch.',
      items: [
        'Real-time commission engine calculates payouts on Closed-Won immediately.',
        'Support for tiered quota accelerators, flat rate bonuses, and weekend SPIFFs.',
        'Generate itemized PDF payslips with base salary, taxes, and earned bonuses.',
      ],
      tag: 'Payroll & Compensation',
    },
    {
      id: 'control-platform',
      title: 'Control the Platform',
      icon: ShieldCheck,
      headline: 'Granular enterprise permissions, audit trails, and webhooks.',
      items: [
        'Role-based access controls (RBAC) with field-level permissions and queue limits.',
        'Tamper-proof immutable audit logs for all logins, exports, and call recordings.',
        'Trigger external REST webhooks on any sales, attendance, or payroll event.',
      ],
      tag: 'Governance & Security',
    },
  ];

  const current = stories.find((s) => s.id === activeStory) || stories[0];

  return (
    <section id="agency-admin" className="section-wrapper">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="Agency & People Operations"
          eyebrowIcon="Users"
          title="From daily floor rosters to"
          highlightText="automated payroll."
          description="Everything required to govern, motivate, and compensate high-velocity sales organizations without messy spreadsheets or disjointed HR tools."
        />

        {/* Story Selector Navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '36px', flexWrap: 'wrap', gap: '8px' }}>
          <div className="tab-group">
            {stories.map((story) => {
              const IconComp = story.icon;
              return (
                <button
                  key={story.id}
                  className={`tab-btn ${activeStory === story.id ? 'active' : ''}`}
                  onClick={() => setActiveStory(story.id)}
                >
                  <IconComp size={16} />
                  <span>{story.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Story Card Frame */}
        <div
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, rgba(14, 23, 42, 0.9) 0%, rgba(7, 10, 18, 0.95) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.35)',
            borderRadius: '16px',
            padding: '36px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
          }}
          key={activeStory}
          className="animate-fadeIn"
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '36px', alignItems: 'center' }}>
            <div>
              <span className="badge badge-emerald" style={{ marginBottom: '12px' }}>
                {current.tag}
              </span>
              <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#fff', marginBottom: '14px' }}>
                {current.headline}
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
                {current.items.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.5' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Callout Box */}
            <div style={{ background: 'rgba(7, 10, 18, 0.8)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(37, 99, 235, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8' }}>
                  <current.icon size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: '700', color: '#fff', fontSize: '1rem' }}>{current.title}</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Synchronized with oda7 Core</div>
                </div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '14px', borderRadius: '8px', color: '#93c5fd', fontSize: '0.8125rem', lineHeight: '1.5' }}>
                ✓ Zero double-entry of sales records.<br />
                ✓ Rep hours, closed deals, and commissions sync continuously.<br />
                ✓ Export itemized payroll in 1 click for bank direct deposit.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
