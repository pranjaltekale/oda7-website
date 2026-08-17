import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import {
  Users,
  Award,
  Calendar,
  DollarSign,
  FileSpreadsheet,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export const AgencyOpsSection = () => {
  return (
    <section id="agency-ops" className="section-wrapper">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="People, Payroll & Operations"
          eyebrowIcon="Users"
          title="Keep the entire"
          highlightText="operation connected."
          description="Automate verified commission calculations, track shift attendance with geolocation, launch floor revenue battles, and generate itemized PDF payslips with zero spreadsheet lag."
        />

        {/* Agency Operations Real-World Story Strip */}
        <div
          style={{
            maxWidth: '1180px',
            margin: '0 auto 32px auto',
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 340px) 1fr',
            gap: '32px',
            alignItems: 'center',
            background: 'linear-gradient(135deg, rgba(14, 23, 42, 0.95) 0%, rgba(7, 10, 18, 0.98) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '20px',
            padding: '28px',
          }}
          className="mockup-grid-2col"
        >
          {/* Operations Leader Photo */}
          <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80"
              alt="Operations and HR Leader"
              style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(7, 9, 14, 0.85) 100%)' }} />
            <div style={{ position: 'absolute', bottom: '12px', left: '12px', right: '12px', background: 'rgba(11, 15, 23, 0.92)', backdropFilter: 'blur(10px)', padding: '8px 12px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#cbd5e1', fontSize: '0.72rem', fontWeight: '600' }}>Automated Payroll Engine</span>
              <span className="badge badge-emerald" style={{ fontSize: '0.6rem', padding: '1px 6px' }}>100% Reconciled</span>
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="badge badge-amber">Automated Operations</span>
              <span className="badge badge-emerald">Zero Payroll Disputes</span>
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: '800', color: '#fff', marginBottom: '10px' }}>
              Instant Commission Calculations & Shift Governance
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.885rem', lineHeight: '1.6', margin: 0 }}>
              When a sales representative marks a deal Closed-Won, ODA7 instantly calculates the correct tier accelerator, credits the rep's digital commission wallet, and updates the monthly payroll batch without manual intervention.
            </p>
          </div>
        </div>

        {/* Agency Operations Mockup */}
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div className="dashboard-mockup-frame">
            <div className="mockup-header-bar">
              <div className="mockup-dots">
                <div className="mockup-dot red" />
                <div className="mockup-dot yellow" />
                <div className="mockup-dot green" />
              </div>
              <div className="mockup-title-bar">
                <Users size={13} color="#38bdf8" />
                <span>oda7 // BIZZFLY Agency Operations — Payroll & Floor Engagement</span>
              </div>
              <span className="badge badge-emerald" style={{ fontSize: '0.6875rem' }}>
                Monthly Payroll Ready
              </span>
            </div>
            <div style={{ padding: '24px', background: '#070a12', fontSize: '0.8125rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '20px' }}>
                <div style={{ background: 'rgba(14, 19, 32, 0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '16px' }}>
                  <div style={{ color: '#94a3b8', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px' }}>Earned Commissions (This Month)</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#10b981' }}>$42,850.00</div>
                  <div style={{ color: '#34d399', fontSize: '0.75rem', marginTop: '2px' }}>100% verified across 412 closed deals</div>
                </div>
                <div style={{ background: 'rgba(14, 19, 32, 0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '16px' }}>
                  <div style={{ color: '#94a3b8', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px' }}>Active Floor Contests</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#38bdf8' }}>3 Live Battles</div>
                  <div style={{ color: '#cbd5e1', fontSize: '0.75rem', marginTop: '2px' }}>Weekend Sprint: $2,500 Prize Pool</div>
                </div>
                <div style={{ background: 'rgba(14, 19, 32, 0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '16px' }}>
                  <div style={{ color: '#94a3b8', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px' }}>Shift Attendance Rate</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#fbbf24' }}>98.4%</div>
                  <div style={{ color: '#34d399', fontSize: '0.75rem', marginTop: '2px' }}>24 Reps clocked in on time</div>
                </div>
              </div>
              <div style={{ background: 'rgba(14, 19, 31, 0.6)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', padding: '16px' }}>
                <div style={{ fontWeight: '700', color: '#fff', marginBottom: '10px' }}>Itemized Rep Payroll & Payslip Dispatch</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 120px', padding: '8px 12px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px', color: '#94a3b8', fontSize: '0.75rem', fontWeight: '600' }}>
                  <span>Rep Name</span>
                  <span>Base Salary</span>
                  <span>Commissions</span>
                  <span>Total Payout</span>
                  <span style={{ textAlign: 'right' }}>Payslip</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '6px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 120px', padding: '8px 12px', borderRadius: '6px', background: 'rgba(255,255,255,0.01)', color: '#fff', alignItems: 'center' }}>
                    <span>Alex Rivera (Tier 1 SDR)</span>
                    <span>$4,000.00</span>
                    <span style={{ color: '#34d399', fontWeight: '700' }}>+$3,420.00</span>
                    <span style={{ fontWeight: '700' }}>$7,420.00</span>
                    <span style={{ textAlign: 'right', color: '#38bdf8', cursor: 'pointer' }}>Download PDF</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 120px', padding: '8px 12px', borderRadius: '6px', background: 'rgba(255,255,255,0.01)', color: '#fff', alignItems: 'center' }}>
                    <span>Marcus Chen (Enterprise AE)</span>
                    <span>$5,500.00</span>
                    <span style={{ color: '#34d399', fontWeight: '700' }}>+$4,800.00</span>
                    <span style={{ fontWeight: '700' }}>$10,300.00</span>
                    <span style={{ textAlign: 'right', color: '#38bdf8', cursor: 'pointer' }}>Download PDF</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
