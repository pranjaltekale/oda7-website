import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { SalesDashboardMockup } from '../mockups/SalesDashboardMockup';
import { ManagerDashboardMockup } from '../mockups/ManagerDashboardMockup';
import { SuperAdminMockup } from '../mockups/SuperAdminMockup';
import {
  PhoneCall,
  LayoutDashboard,
  Users,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export const ProductShowcaseTabs = () => {
  const [activeTab, setActiveTab] = useState('sales');

  const tabs = [
    { id: 'sales', label: 'Sales Rep Workspace', icon: PhoneCall, count: 'Real-time Dials' },
    { id: 'manager', label: 'Manager Command Center', icon: LayoutDashboard, count: 'Floor Supervision' },
    { id: 'agency', label: 'Agency & People Ops', icon: Users, count: 'Automated Payroll' },
    { id: 'super-admin', label: 'Super Admin Multi-Tenant', icon: ShieldCheck, count: 'Master SaaS' },
  ];

  return (
    <section id="product-showcase" className="section-wrapper">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="Interactive Product Showcase"
          eyebrowIcon="LayoutDashboard"
          title="Engineered for every tier of the"
          highlightText="sales organization."
          description="Explore real oda7 workspaces configured specifically for reps on the phones, supervisors running the floor, and executives managing global SaaS operations."
        />

        {/* Tab Switcher */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
          <div className="tab-group">
            {tabs.map((tab) => {
              const IconComp = tab.icon;
              return (
                <button
                  key={tab.id}
                  className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <IconComp size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Workspace Render */}
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          {activeTab === 'sales' && (
            <div className="animate-fadeIn">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', color: '#94a3b8', fontSize: '0.85rem' }}>
                <span><strong>Sales Rep View:</strong> Algorithmic My Queue, 1-click predictive dialer, dynamic interactive scripting, and live speech AI.</span>
                <span className="badge badge-emerald">0.8s Call Setup</span>
              </div>
              <SalesDashboardMockup interactive={true} />
            </div>
          )}

          {activeTab === 'manager' && (
            <div className="animate-fadeIn">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', color: '#94a3b8', fontSize: '0.85rem' }}>
                <span><strong>Manager View:</strong> Real-time floor queues, active rep status grid, pickup ratio benchmarks, and live whisper coaching.</span>
                <span className="badge badge-primary">1-Click Whisper</span>
              </div>
              <ManagerDashboardMockup />
            </div>
          )}

          {activeTab === 'agency' && (
            <div className="animate-fadeIn">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', color: '#94a3b8', fontSize: '0.85rem' }}>
                <span><strong>Agency Admin View:</strong> Automated payroll calculation, shift attendance, vacation routing, and live floor leaderboards.</span>
                <span className="badge badge-cyan">Zero Payroll Disputes</span>
              </div>
              {/* Agency Ops Mockup Frame */}
              <div className="dashboard-mockup-frame">
                <div className="mockup-header-bar">
                  <div className="mockup-dots">
                    <div className="mockup-dot red" />
                    <div className="mockup-dot yellow" />
                    <div className="mockup-dot green" />
                  </div>
                  <div className="mockup-title-bar">
                    <Users size={13} color="#38bdf8" />
                    <span>oda7 // People & Operations — Payroll & Floor Engagement</span>
                  </div>
                  <span className="badge badge-emerald" style={{ fontSize: '0.6875rem' }}>
                    Monthly Payroll Ready
                  </span>
                </div>
                <div style={{ padding: '24px', background: '#070a12', fontSize: '0.8125rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '20px' }}>
                    <div style={{ background: 'rgba(14, 19, 31, 0.8)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '16px' }}>
                      <div style={{ color: '#94a3b8', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px' }}>Earned Commissions (This Month)</div>
                      <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#10b981' }}>$42,850.00</div>
                      <div style={{ color: '#34d399', fontSize: '0.75rem', marginTop: '2px' }}>100% verified across 412 closed deals</div>
                    </div>
                    <div style={{ background: 'rgba(14, 19, 31, 0.8)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '16px' }}>
                      <div style={{ color: '#94a3b8', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px' }}>Active Floor Contests</div>
                      <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#38bdf8' }}>3 Live Battles</div>
                      <div style={{ color: '#cbd5e1', fontSize: '0.75rem', marginTop: '2px' }}>Weekend Sprint: $2,500 Prize Pool</div>
                    </div>
                    <div style={{ background: 'rgba(14, 19, 31, 0.8)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '16px' }}>
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
          )}

          {activeTab === 'super-admin' && (
            <div className="animate-fadeIn">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', color: '#94a3b8', fontSize: '0.85rem' }}>
                <span><strong>Super Admin View:</strong> Multi-tenant client provisioning, consolidated ARR/MRR metrics, and platform-wide IP defense.</span>
                <span className="badge badge-emerald">Multi-Tenant Isolated</span>
              </div>
              <SuperAdminMockup />
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
