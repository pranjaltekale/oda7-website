import React, { useState } from 'react';
import {
  ShieldCheck,
  Building2,
  DollarSign,
  Layers,
  Lock,
  Globe,
  Database,
  Search,
  CheckCircle2,
  TrendingUp,
  Server,
  Zap,
  Tag,
  Share2,
} from 'lucide-react';

export const SuperAdminMockup = () => {
  const [selectedTenant, setSelectedTenant] = useState('Northstar Workspace');
  const [activeAdminTab, setActiveAdminTab] = useState('organizations'); // 'organizations' | 'billing' | 'security'

  const tenants = [
    { name: 'Northstar Workspace', org: 'northstar.example', plan: 'Platform', agents: 64, mrr: 'Demo', callsMonth: 'Sample', status: 'Active' },
    { name: 'Harbor Workspace', org: 'harbor.example', plan: 'Custom', agents: 180, mrr: 'Demo', callsMonth: 'Sample', status: 'Active' },
    { name: 'Summit Workspace', org: 'summit.example', plan: 'Business', agents: 22, mrr: 'Demo', callsMonth: 'Sample', status: 'Active' },
    { name: 'Cedar Workspace', org: 'cedar.example', plan: 'Sales', agents: 45, mrr: 'Demo', callsMonth: 'Sample', status: 'Active' },
  ];

  return (
    <div className="dashboard-mockup-frame">
      {/* Header bar */}
      <div className="mockup-header-bar" style={{ background: '#0b1120', borderBottom: '1px solid rgba(59, 130, 246, 0.2)' }}>
        <div className="mockup-dots">
          <div className="mockup-dot red" />
          <div className="mockup-dot yellow" />
          <div className="mockup-dot green" />
        </div>
        <div className="mockup-title-bar">
          <ShieldCheck size={13} color="#10b981" />
          <span>oda7 // BIZZFLY SaaS Master Console — Platform & Multi-Tenant Layer</span>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span className="badge badge-emerald" style={{ fontSize: '0.6875rem' }}>
            Multi-Tenant Isolation: 100% Active
          </span>
        </div>
      </div>

      {/* Main Container */}
      <div style={{ padding: '20px', background: '#070a12', fontSize: '0.8125rem' }}>
        
        {/* Top Platform Financial & Infrastructure Strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '20px' }}>
          
          <div style={{ background: 'rgba(14, 19, 32, 0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ color: '#94a3b8', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Platform MRR (Live)</span>
              <DollarSign size={13} color="#10b981" />
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#10b981' }}>$184,200</div>
            <div style={{ color: '#34d399', fontSize: '0.7rem', marginTop: '2px' }}>24 Tenants • 23 Subscriptions</div>
          </div>

          <div style={{ background: 'rgba(14, 19, 32, 0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ color: '#94a3b8', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Active Organizations</span>
              <Building2 size={13} color="#38bdf8" />
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#38bdf8' }}>48 Tenants</div>
            <div style={{ color: '#94a3b8', fontSize: '0.7rem', marginTop: '2px' }}>1,420 Active sales reps</div>
          </div>

          <div style={{ background: 'rgba(14, 19, 32, 0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ color: '#94a3b8', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Telephony Volume</span>
              <Server size={13} color="#fbbf24" />
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fbbf24' }}>4.82M Mins</div>
            <div style={{ color: '#34d399', fontSize: '0.7rem', marginTop: '2px' }}>Illustrative platform data</div>
          </div>

          <div style={{ background: 'rgba(14, 19, 32, 0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ color: '#94a3b8', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>IP Threat Defense</span>
              <Lock size={13} color="#34d399" />
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#34d399' }}>Zero Breaches</div>
            <div style={{ color: '#60a5fa', fontSize: '0.7rem', marginTop: '2px' }}>242 malicious IPs blocked</div>
          </div>

        </div>

        {/* Middle: Tenant Management Grid + Deep Tenant Inspector */}
        <div className="mockup-grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '16px' }}>
          
          {/* Tenant List */}
          <div style={{ background: 'rgba(14, 19, 31, 0.6)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
              <div style={{ fontWeight: '700', color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Layers size={14} color="#38bdf8" />
                <span>Customer Organizations</span>
              </div>
              <button style={{ padding: '4px 12px', borderRadius: '6px', background: 'var(--grad-primary)', color: '#fff', fontSize: '0.75rem', fontWeight: '600' }}>
                + Provision Tenant
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {tenants.map((tenant) => (
                <div
                  key={tenant.name}
                  onClick={() => setSelectedTenant(tenant.name)}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1.4fr 1fr 1fr 100px',
                    alignItems: 'center',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: selectedTenant === tenant.name ? 'rgba(37, 99, 235, 0.18)' : 'rgba(255,255,255,0.02)',
                    border: selectedTenant === tenant.name ? '1px solid rgba(59, 130, 246, 0.45)' : '1px solid rgba(255,255,255,0.04)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <div>
                    <div style={{ fontWeight: '600', color: '#fff' }}>{tenant.name}</div>
                    <div style={{ fontSize: '0.7rem', color: '#38bdf8' }}>{tenant.org}</div>
                  </div>

                  <div>
                    <div style={{ color: '#fff', fontSize: '0.75rem' }}>{tenant.agents} Rep Seats</div>
                    <div style={{ color: '#64748b', fontSize: '0.7rem' }}>{tenant.callsMonth} calls/mo</div>
                  </div>

                  <div>
                    <div style={{ color: '#10b981', fontWeight: '700', fontSize: '0.85rem' }}>{tenant.mrr}</div>
                    <div style={{ color: '#64748b', fontSize: '0.7rem' }}>{tenant.plan}</div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <span className="badge badge-emerald" style={{ fontSize: '0.65rem' }}>
                      {tenant.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Multi-Tenant Architecture & Governance Controls */}
          <div style={{ background: 'rgba(11, 15, 23, 0.85)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '10px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontWeight: '700', color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Globe size={14} color="#38bdf8" />
                <span>Multi-Tenant Architecture</span>
              </div>
              <span className="badge badge-cyan" style={{ fontSize: '0.65rem' }}>BIZZFLY SaaS Core</span>
            </div>

            {/* Visual Hierarchy Diagram */}
            <div style={{ background: 'rgba(14, 23, 42, 0.8)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '12px', textAlign: 'center' }}>
              <div style={{ padding: '6px 12px', background: 'rgba(37, 99, 235, 0.3)', border: '1px solid #3b82f6', borderRadius: '6px', color: '#fff', fontWeight: '700', fontSize: '0.75rem', display: 'inline-block' }}>
                BIZZFLY // oda7 Platform Root
              </div>
              
              <div style={{ margin: '8px 0', color: '#64748b', fontSize: '0.7rem' }}>
                ↓ Multi-Tenant Telephony & Database Mesh ↓
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '6px' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px', padding: '6px', fontSize: '0.7rem', color: '#cbd5e1' }}>
                  Org A: Northstar
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px', padding: '6px', fontSize: '0.7rem', color: '#cbd5e1' }}>
                  Org B: Harbor
                </div>
              </div>
            </div>

            {/* Platform Master Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', fontSize: '0.75rem' }}>
                <CheckCircle2 size={13} color="#10b981" />
                <span>Custom CNAME White-label Branding</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', fontSize: '0.75rem' }}>
                <CheckCircle2 size={13} color="#10b981" />
                <span>Coupon Codes, Discounts & Referral Tracking</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', fontSize: '0.75rem' }}>
                <CheckCircle2 size={13} color="#10b981" />
                <span>Global IP Blocker & Threat Defense Mesh</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', fontSize: '0.75rem' }}>
                <CheckCircle2 size={13} color="#10b981" />
                <span>Automated Subscription & Invoice Generation</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
