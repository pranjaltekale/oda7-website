'use client';

import React, { useEffect, useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { InteractiveTiltCard } from '../common/InteractiveTiltCard';
import { Button } from '../common/Button';
import {
  Users,
  DollarSign,
  Award,
  Activity,
  CheckCircle2,
  TrendingUp,
  Clock,
  Sparkles,
  ShieldCheck,
  FileSpreadsheet,
  Download,
  Zap,
} from 'lucide-react';

export const PeopleOperationsStorySection = () => {
  const [activeFlow, setActiveFlow] = useState(0);
  const [downloadNotice, setDownloadNotice] = useState(null);

  const handleSimulateDownload = (repName) => {
    setDownloadNotice(`✓ Itemized payslip generated for ${repName}`);
    setTimeout(() => setDownloadNotice(null), 2400);
  };

  const formulas = [
    {
      left: 'Deal Marked Closed-Won',
      action: 'Tier accelerator calculated',
      right: 'Digital commission credited',
      stat: '+$3,420.00 verified bonus',
      color: '#10b981',
      badge: 'Zero payroll disputes',
    },
    {
      left: 'Geofenced Shift Clock-in',
      action: 'Roster audit synchronized',
      right: 'Floor queue rebalanced',
      stat: '98.4% on-time attendance',
      color: '#38bdf8',
      badge: 'Real-time availability',
    },
    {
      left: 'Weekend Revenue Sprint',
      action: 'Live battle milestone met',
      right: 'Leaderboard prize dispatched',
      stat: '$2,500 prize pool unlocked',
      color: '#fbbf24',
      badge: 'Instant recognition',
    },
  ];

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = window.setInterval(() => setActiveFlow((current) => (current + 1) % formulas.length), 4200);
    return () => window.clearInterval(timer);
  }, [formulas.length]);

  return (
    <section className="section-wrapper" id="people-ops">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="People Operations & Compensation"
          eyebrowIcon="Users"
          title="Connect the entire team behind"
          highlightText="the operating workflow."
          description="Automate verified commission calculations, track shift attendance with geolocation, launch floor revenue battles, and generate itemized PDF payslips with zero spreadsheet lag."
        />

        {/* 3 Prominent Operational Telemetry Stat Pillars (Pattern E) */}
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto 28px auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
          }}
          className="people-metrics-grid"
        >
          <div
            className="card-saas card-interactive-lift"
            style={{
              padding: '20px 24px',
              borderRadius: '16px',
              background: 'var(--oda-surface)',
              border: '1px solid var(--oda-border)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--oda-text-muted)', textTransform: 'uppercase', fontWeight: '750', letterSpacing: '0.06em' }}>
                Earned Commissions
              </span>
              <span className="badge badge-emerald" style={{ fontSize: '0.65rem' }}>100% Reconciled</span>
            </div>
            <div style={{ fontSize: '2.1rem', fontWeight: '850', color: '#10b981', lineHeight: '1.1', marginBottom: '4px' }}>
              $42,850.00
            </div>
            <div style={{ color: 'var(--oda-text-secondary)', fontSize: '0.8rem' }}>
              Verified across 412 closed deals with zero dispute delay.
            </div>
          </div>

          <div
            className="card-saas card-interactive-lift"
            style={{
              padding: '20px 24px',
              borderRadius: '16px',
              background: 'var(--oda-surface)',
              border: '1px solid var(--oda-border)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--oda-text-muted)', textTransform: 'uppercase', fontWeight: '750', letterSpacing: '0.06em' }}>
                Shift Attendance Rate
              </span>
              <span className="badge badge-amber" style={{ fontSize: '0.65rem' }}>Live Geolocation</span>
            </div>
            <div style={{ fontSize: '2.1rem', fontWeight: '850', color: '#fbbf24', lineHeight: '1.1', marginBottom: '4px' }}>
              98.4%
            </div>
            <div style={{ color: 'var(--oda-text-secondary)', fontSize: '0.8rem' }}>
              24 reps clocked in on time across inside-sales pods.
            </div>
          </div>

          <div
            className="card-saas card-interactive-lift"
            style={{
              padding: '20px 24px',
              borderRadius: '16px',
              background: 'var(--oda-surface)',
              border: '1px solid var(--oda-border)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--oda-text-muted)', textTransform: 'uppercase', fontWeight: '750', letterSpacing: '0.06em' }}>
                Active Floor Contests
              </span>
              <span className="badge badge-cyan" style={{ fontSize: '0.65rem' }}>3 Live Battles</span>
            </div>
            <div style={{ fontSize: '2.1rem', fontWeight: '850', color: '#38bdf8', lineHeight: '1.1', marginBottom: '4px' }}>
              $2,500 Pool
            </div>
            <div style={{ color: 'var(--oda-text-secondary)', fontSize: '0.8rem' }}>
              Weekend Revenue Sprint synced directly to closed deals.
            </div>
          </div>
        </div>

        {/* Operational Workspace Grid: Itemized Payroll Dispatch vs Real-Time Triggers */}
        <div
          className="feature-showcase-panel"
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            borderRadius: '24px',
            padding: 'clamp(24px, 4vw, 40px)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
              gap: 'clamp(24px, 4vw, 44px)',
              alignItems: 'center',
            }}
            className="mockup-grid-2col"
          >
            {/* Left Side: Live Itemized Rep Payroll Dispatch Mockup */}
            <div style={{ background: 'var(--oda-surface-soft)', border: '1px solid var(--oda-border-blue)', borderRadius: '16px', padding: '20px', boxShadow: '0 12px 36px rgba(0, 0, 0, 0.15)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Users size={16} color="var(--oda-primary)" />
                  <span style={{ fontWeight: '750', fontSize: '0.88rem', color: 'var(--oda-text-primary)' }}>
                    Itemized Rep Payroll & Payslip Dispatch
                  </span>
                </div>
                <span className="badge badge-emerald" style={{ fontSize: '0.6875rem' }}>
                  Monthly Batch Ready
                </span>
              </div>

              {/* Table Header */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 90px', padding: '8px 12px', background: 'var(--oda-surface)', borderRadius: '8px', color: 'var(--oda-text-muted)', fontSize: '0.72rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px' }}>
                <span>Rep Name</span>
                <span>Base Pay</span>
                <span>Commissions</span>
                <span style={{ textAlign: 'right' }}>Payslip</span>
              </div>

              {/* Rep Rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 90px', padding: '10px 12px', background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border)', borderRadius: '8px', alignItems: 'center', fontSize: '0.8125rem' }}>
                  <div>
                    <div style={{ fontWeight: '750', color: 'var(--oda-text-primary)' }}>Alex Rivera</div>
                    <div style={{ fontSize: '0.6875rem', color: 'var(--oda-text-muted)' }}>Tier 1 SDR</div>
                  </div>
                  <span style={{ color: 'var(--oda-text-secondary)' }}>$4,000.00</span>
                  <span style={{ color: '#10b981', fontWeight: '750' }}>+$3,420.00</span>
                  <button
                    onClick={() => handleSimulateDownload('Alex Rivera')}
                    style={{ textAlign: 'right', color: 'var(--oda-accent)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.75rem', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px' }}
                  >
                    <span>PDF</span>
                    <Download size={12} />
                  </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 90px', padding: '10px 12px', background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border)', borderRadius: '8px', alignItems: 'center', fontSize: '0.8125rem' }}>
                  <div>
                    <div style={{ fontWeight: '750', color: 'var(--oda-text-primary)' }}>Marcus Chen</div>
                    <div style={{ fontSize: '0.6875rem', color: 'var(--oda-text-muted)' }}>Enterprise AE</div>
                  </div>
                  <span style={{ color: 'var(--oda-text-secondary)' }}>$5,500.00</span>
                  <span style={{ color: '#10b981', fontWeight: '750' }}>+$4,800.00</span>
                  <button
                    onClick={() => handleSimulateDownload('Marcus Chen')}
                    style={{ textAlign: 'right', color: 'var(--oda-accent)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.75rem', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px' }}
                  >
                    <span>PDF</span>
                    <Download size={12} />
                  </button>
                </div>
              </div>

              {downloadNotice && (
                <div className="animate-fadeIn" style={{ marginTop: '10px', fontSize: '0.75rem', color: 'var(--oda-success)', fontWeight: '700', textAlign: 'center' }}>
                  {downloadNotice}
                </div>
              )}
            </div>

            {/* Right Side: Interactive Operational Rule Flow */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="badge badge-primary">Automated Governance</span>
                <span className="badge badge-emerald">Zero Dispute Lag</span>
              </div>

              <h3 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.1rem)', fontWeight: '850', color: 'var(--oda-text-primary)', lineHeight: '1.2', marginBottom: '14px', letterSpacing: '-0.025em' }}>
                When deals close, operations updates{' '}
                <span className="text-gradient-accent">in real-time.</span>
              </h3>

              <p style={{ color: 'var(--oda-text-secondary)', fontSize: '0.925rem', lineHeight: '1.65', marginBottom: '20px' }}>
                Instead of exporting CSVs and reconstructing quota attainments in spreadsheets, ODA7 ties verified floor events directly to compensation, rosters, and manager visibility.
              </p>

              {/* 3 Interactive Formula Accelerator Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {formulas.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveFlow(idx)}
                    className={`people-flow-step ${activeFlow === idx ? 'is-active' : ''}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      background: activeFlow === idx ? 'var(--oda-primary-soft)' : 'var(--oda-surface)',
                      border: activeFlow === idx ? '1px solid var(--oda-border-blue)' : '1px solid var(--oda-border)',
                      borderRadius: '12px',
                      padding: '12px 16px',
                      boxShadow: activeFlow === idx ? '0 4px 14px rgba(37, 99, 235, 0.12)' : 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ color: 'var(--oda-text-primary)', fontSize: '0.85rem', fontWeight: '750' }}>
                        {item.left}
                      </div>
                      <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.72rem', marginTop: '2px' }}>
                        → {item.action}
                      </div>
                    </div>

                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--oda-primary-soft)', border: '1px solid var(--oda-border-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--oda-primary)', fontWeight: '850', fontSize: '0.85rem', flexShrink: 0 }}>
                      =
                    </div>

                    <div style={{ flex: 1, minWidth: 0, textAlign: 'right' }}>
                      <div style={{ color: item.color, fontSize: '0.82rem', fontWeight: '750' }}>
                        {item.right}
                      </div>
                      <div style={{ color: 'var(--oda-text-secondary)', fontSize: '0.7rem', marginTop: '2px' }}>
                        {item.stat}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

