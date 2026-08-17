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
      <div className="mockup-header-bar">
        <div className="mockup-dots">
          <div className="mockup-dot red" />
          <div className="mockup-dot yellow" />
          <div className="mockup-dot green" />
        </div>
        <div className="mockup-title-bar">
          <ShieldCheck size={13} color="var(--oda-success)" />
          <span>oda7 // BIZZFLY SaaS Master Console — Platform & Multi-Tenant Layer</span>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span className="badge badge-emerald" style={{ fontSize: '0.6875rem' }}>
            Multi-Tenant Isolation: 100% Active
          </span>
        </div>
      </div>

      {/* Main Container */}
      <div style={{ padding: '20px', background: 'var(--oda-surface)', fontSize: '0.8125rem' }}>
        
        {/* Top Platform Financial & Infrastructure Strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '20px' }}>
          
          <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Platform MRR (Live)</span>
              <DollarSign size={13} color="var(--oda-success)" />
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--oda-success)' }}>$184,200</div>
            <div style={{ color: 'var(--oda-success)', fontSize: '0.7rem', marginTop: '2px' }}>24 Tenants • 23 Subscriptions</div>
          </div>

          <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Active Organizations</span>
              <Building2 size={13} color="var(--oda-primary)" />
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--oda-primary)' }}>48 Tenants</div>
            <div style={{ color: 'var(--oda-text-secondary)', fontSize: '0.7rem', marginTop: '2px' }}>1,420 Active sales reps</div>
          </div>

          <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Telephony Volume</span>
              <Server size={13} color="#fbbf24" />
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fbbf24' }}>4.82M Mins</div>
            <div style={{ color: 'var(--oda-success)', fontSize: '0.7rem', marginTop: '2px' }}>Illustrative platform data</div>
          </div>

          <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>IP Threat Defense</span>
              <Lock size={13} color="var(--oda-success)" />
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--oda-success)' }}>Audit Ready</div>
            <div style={{ color: 'var(--oda-primary)', fontSize: '0.7rem', marginTop: '2px' }}>242 malicious IPs blocked</div>
          </div>

        </div>

        {/* Middle: Tenant Management Grid + Deep Tenant Inspector */}
        <div className="mockup-grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '16px' }}>
          
          {/* Tenant List */}
          <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border)', borderRadius: '10px', padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
              <div style={{ fontWeight: '700', color: 'var(--oda-text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Layers size={14} color="var(--oda-primary)" />
                <span>Customer Organizations</span>
              </div>
              <button style={{ padding: '4px 12px', borderRadius: '6px', background: 'var(--oda-primary)', color: '#fff', fontSize: '0.75rem', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
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
                    background: selectedTenant === tenant.name ? 'var(--oda-primary-soft)' : 'var(--oda-surface)',
                    border: selectedTenant === tenant.name ? '1px solid var(--oda-border-blue)' : '1px solid var(--oda-border)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <div>
                    <div style={{ fontWeight: '600', color: 'var(--oda-text-primary)' }}>{tenant.name}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--oda-primary)' }}>{tenant.org}</div>
                  </div>

                  <div>
                    <div style={{ color: 'var(--oda-text-primary)', fontSize: '0.75rem' }}>{tenant.agents} Rep Seats</div>
                    <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.7rem' }}>{tenant.callsMonth} calls/mo</div>
                  </div>

                  <div>
                    <div style={{ color: 'var(--oda-success)', fontWeight: '700', fontSize: '0.85rem' }}>{tenant.mrr}</div>
                    <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.7rem' }}>{tenant.plan}</div>
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
          <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border)', borderRadius: '10px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontWeight: '700', color: 'var(--oda-text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Globe size={14} color="var(--oda-primary)" />
                <span>Multi-Tenant Architecture</span>
              </div>
              <span className="badge badge-cyan" style={{ fontSize: '0.65rem' }}>BIZZFLY SaaS Core</span>
            </div>

            {/* Visual Hierarchy Diagram */}
            <div style={{ background: 'var(--oda-surface)', border: '1px solid var(--oda-border)', borderRadius: '8px', padding: '12px', textAlign: 'center' }}>
              <div style={{ padding: '6px 12px', background: 'var(--oda-primary-soft)', border: '1px solid var(--oda-border-blue)', borderRadius: '6px', color: 'var(--oda-primary)', fontWeight: '700', fontSize: '0.75rem', display: 'inline-block' }}>
                BIZZFLY // oda7 Platform Root
              </div>
              
              <div style={{ margin: '8px 0', color: 'var(--oda-text-muted)', fontSize: '0.7rem' }}>
                ↓ Multi-Tenant Telephony & Database Mesh ↓
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '6px' }}>
                <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border)', borderRadius: '4px', padding: '6px', fontSize: '0.7rem', color: 'var(--oda-text-secondary)' }}>
                  Org A: Northstar
                </div>
                <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border)', borderRadius: '4px', padding: '6px', fontSize: '0.7rem', color: 'var(--oda-text-secondary)' }}>
                  Org B: Harbor
                </div>
              </div>
            </div>

            {/* Live Security & Telephony Audit Stream */}
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--oda-text-muted)', textTransform: 'uppercase', marginBottom: '6px', fontWeight: '600' }}>
                Active Governance Policies
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--oda-text-secondary)' }}>
                  <span>Data Isolation</span>
                  <span style={{ color: 'var(--oda-success)' }}>Row-Level Security</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--oda-text-secondary)' }}>
                  <span>CNAME White-label</span>
                  <span style={{ color: 'var(--oda-primary)' }}>Active (SSL Auto)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--oda-text-secondary)' }}>
                  <span>Carrier Trunk</span>
                  <span style={{ color: '#fbbf24' }}>Isolated SIP Route</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
