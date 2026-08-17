import React, { useState } from 'react';
import {
  UserCheck,
  Sparkles,
  Layers,
  PhoneCall,
  PhoneOff,
  Zap,
  Eye,
  CheckCircle2,
  TrendingUp,
  Clock,
  Mic,
  Volume2,
  ShieldAlert,
  Headphones,
  Award,
  Users,
  LayoutDashboard,
  ShieldCheck,
  ArrowRight,
  RotateCcw,
} from 'lucide-react';

export const DemoStepCards = ({
  step,
  selectedRole,
  onSelectRole,
  onNextStep,
}) => {
  // Step 1: Choose Role
  if (step === 1) {
    const roles = [
      {
        id: 'sales',
        title: 'Sales User / SDR',
        icon: PhoneCall,
        desc: 'Experience My Queue, 0.8s local presence dialer, dynamic script prompts, and real-time AI live objection handling.',
        badge: 'Rep Velocity',
      },
      {
        id: 'manager',
        title: 'Floor Supervisor / Manager',
        icon: LayoutDashboard,
        desc: 'Monitor real-time floor queues, active agent statuses, pickup ratio telemetry, and execute live whisper coaching.',
        badge: 'Live Operations',
      },
      {
        id: 'admin',
        title: 'Agency Admin & Ops',
        icon: Users,
        desc: 'Automate commission payouts, track shift attendance, run live sales battles, and export itemized payslips.',
        badge: 'Operations & Payroll',
      },
    ];

    return (
      <div className="animate-fadeIn">
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <span className="badge badge-primary" style={{ marginBottom: '8px' }}>
            Step 1 • Select Experience Perspective
          </span>
          <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fff' }}>
            Choose how you want to experience oda7
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
            Select a role to tailor the interactive dashboard simulation to your workflow.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
          {roles.map((r) => {
            const IconComp = r.icon;
            const isSelected = selectedRole === r.id;

            return (
              <div
                key={r.id}
                onClick={() => onSelectRole(r.id)}
                style={{
                  background: isSelected ? 'rgba(37, 99, 235, 0.2)' : 'rgba(14, 19, 32, 0.7)',
                  border: isSelected ? '2px solid #3b82f6' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '14px',
                  padding: '24px',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                  boxShadow: isSelected ? '0 10px 30px rgba(37, 99, 235, 0.3)' : 'none',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: isSelected ? 'var(--accent-primary)' : 'rgba(255,255,255,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                  }}>
                    <IconComp size={20} />
                  </div>
                  <span className="badge badge-cyan" style={{ fontSize: '0.65rem' }}>
                    {r.badge}
                  </span>
                </div>

                <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>
                  {r.title}
                </h4>
                <p style={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: '1.5' }}>
                  {r.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Step 2: Simulated Role Dashboard
  if (step === 2) {
    return (
      <div className="animate-fadeIn">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <span className="badge badge-emerald">
            Step 2 • Simulated {selectedRole === 'sales' ? 'Sales Workspace' : selectedRole === 'manager' ? 'Floor Command' : 'Agency Ops'}
          </span>
          <span style={{ fontSize: '0.75rem', color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>
            BIZZFLY // Live State
          </span>
        </div>

        {/* 3 Metric Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '16px' }}>
          <div style={{ background: 'rgba(7, 10, 18, 0.8)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ color: '#94a3b8', fontSize: '0.7rem', textTransform: 'uppercase' }}>
              {selectedRole === 'sales' ? 'Priority Queue' : selectedRole === 'manager' ? 'Floor Active Calls' : 'Monthly Commissions'}
            </div>
            <div style={{ fontSize: '1.3rem', fontWeight: '800', color: '#fff', marginTop: '2px' }}>
              {selectedRole === 'sales' ? '14 High-Intent' : selectedRole === 'manager' ? '18 Calls Active' : '$42,850.00'}
            </div>
          </div>

          <div style={{ background: 'rgba(7, 10, 18, 0.8)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ color: '#94a3b8', fontSize: '0.7rem', textTransform: 'uppercase' }}>
              {selectedRole === 'sales' ? 'Win Probability' : selectedRole === 'manager' ? 'Pickup Ratio' : 'Attendance Rate'}
            </div>
            <div style={{ fontSize: '1.3rem', fontWeight: '800', color: '#34d399', marginTop: '2px' }}>
              {selectedRole === 'sales' ? '84.2%' : selectedRole === 'manager' ? '78.4%' : '98.4%'}
            </div>
          </div>

          <div style={{ background: 'rgba(7, 10, 18, 0.8)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ color: '#94a3b8', fontSize: '0.7rem', textTransform: 'uppercase' }}>
              {selectedRole === 'sales' ? 'Next Lead Target' : selectedRole === 'manager' ? 'Floor Queue Load' : 'Active Contests'}
            </div>
            <div style={{ fontSize: '1.3rem', fontWeight: '800', color: '#38bdf8', marginTop: '2px' }}>
              {selectedRole === 'sales' ? 'Sarah Jenkins' : selectedRole === 'manager' ? '0 Waiting' : '3 Live Battles'}
            </div>
          </div>
        </div>

        {/* Interactive Ingestion Box */}
        <div style={{ background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)', border: '1px solid rgba(59, 130, 246, 0.35)', borderRadius: '10px', padding: '18px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <div style={{ fontWeight: '700', color: '#fff', fontSize: '1rem' }}>
              Inbound Enterprise Demo Request Captured
            </div>
            <span className="badge badge-emerald">Enriched in 680ms</span>
          </div>
          <div style={{ color: '#cbd5e1', fontSize: '0.85rem', lineHeight: '1.5' }}>
            <strong>Prospect:</strong> Sarah Jenkins (VP Operations, Logix Enterprise)<br />
            <strong>Intent Score:</strong> 96/100 (Tier 1 Priority) • Matched Area Code: Austin (512)
          </div>
        </div>
      </div>
    );
  }

  // Step 3: Interactive Live Call & AI Rebuttal Workflow
  if (step === 3) {
    return (
      <div className="animate-fadeIn">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <span className="badge badge-amber">Step 3 • Live Call & Speech AI Objection Handling</span>
          <span style={{ fontSize: '0.75rem', color: '#34d399' }}>Connected (00:48)</span>
        </div>

        <div style={{ background: 'rgba(7, 10, 18, 0.9)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '10px', padding: '16px', marginBottom: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ color: '#34d399', fontSize: '0.75rem', fontWeight: '600' }}>HD WebRTC Telephony • Local Presence (512 Match)</div>
            <div style={{ fontSize: '1.15rem', fontWeight: '700', color: '#fff', marginTop: '2px' }}>Sarah Jenkins • Logix Enterprise</div>
            <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '2px' }}>Contract Deal Size: $48,000 / year</div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
              <Mic size={15} />
            </button>
            <button style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
              <Volume2 size={15} />
            </button>
          </div>
        </div>

        {/* AI Live Objection Alert */}
        <div style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.35)', borderRadius: '10px', padding: '16px', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#fbbf24', fontWeight: '700', fontSize: '0.8rem', marginBottom: '6px' }}>
            <ShieldAlert size={15} />
            <span>AI Detected Competitor Objection: "Under Contract for 6 Months"</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.4)', padding: '10px', borderRadius: '6px', color: '#93c5fd', fontSize: '0.85rem', lineHeight: '1.5' }}>
            <strong>Suggested response:</strong> "Clarify the rollout concern and schedule an implementation follow-up."
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: '#94a3b8' }}>
          <span>Manager Whisper: "Lock annual upfront to waive setup fee."</span>
          <span style={{ color: '#34d399', fontWeight: '600' }}>✓ Proposal Accepted</span>
        </div>
      </div>
    );
  }

  // Step 4: Closed-Won & Payout Result
  if (step === 4) {
    return (
      <div className="animate-fadeIn">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <span className="badge badge-emerald">Step 4 • Deal Closed-Won & Instant Commission</span>
          <span style={{ fontSize: '0.75rem', color: '#34d399' }}>Live Payout Executed</span>
        </div>

        <div style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(37, 99, 235, 0.15) 100%)', border: '1px solid rgba(16, 185, 129, 0.4)', borderRadius: '14px', padding: '24px', textAlign: 'center', marginBottom: '16px' }}>
          <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', marginBottom: '10px' }}>
            <Award size={32} color="#34d399" />
          </div>
          <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#fff' }}>
            $48,000 / year (Closed-Won)
          </div>
          <div style={{ color: '#34d399', fontSize: '1.2rem', fontWeight: '700', marginTop: '4px' }}>
            Commission Credited: +$4,800.00
          </div>
          <div style={{ color: '#cbd5e1', fontSize: '0.85rem', marginTop: '6px' }}>
            Alex Rivera is now #1 on the Daily Floor Leaderboard
          </div>
        </div>

        <div style={{ fontSize: '0.8rem', color: '#94a3b8', textAlign: 'center' }}>
          ✓ Automated onboarding sequence fired • Payslip updated • Zero manual admin lag
        </div>
      </div>
    );
  }

  // Step 5: Final Result Screen
  if (step === 5) {
    return (
      <div className="animate-fadeIn" style={{ textAlign: 'center', padding: '20px 0' }}>
        <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', color: '#34d399' }}>
          <CheckCircle2 size={32} />
        </div>

        <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#fff', marginBottom: '10px' }}>
          Your team just moved one lead closer to revenue.
        </h3>

        <p style={{ color: '#94a3b8', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto 24px auto', lineHeight: '1.6' }}>
          This entire synchronous workflow—from lead capture and AI speech coaching to live manager supervision and automated payroll—happens in one unified workspace with oda7.
        </p>

        <div style={{ display: 'inline-flex', gap: '16px', padding: '12px 24px', background: 'rgba(255,255,255,0.04)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '8px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#34d399' }}>&lt;15s</div>
            <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Speed to Lead</div>
          </div>
          <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#38bdf8' }}>+34%</div>
            <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Pickup Lift</div>
          </div>
          <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#fbbf24' }}>0</div>
            <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Manual Notes</div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
