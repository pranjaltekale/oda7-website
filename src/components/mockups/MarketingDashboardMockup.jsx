import React, { useState } from 'react';
import {
  TrendingUp,
  Users,
  MessageSquare,
  Sparkles,
  BarChart3,
  Globe,
  Share2,
  Calendar,
  CheckCircle2,
  Send,
  Zap,
} from 'lucide-react';

export const MarketingDashboardMockup = () => {
  const [selectedCampaign, setSelectedCampaign] = useState('Q3 Inbound Scale');

  const campaigns = [
    { name: 'Q3 Inbound Scale', leads: 303, conv: '18.4%', channel: 'Website Demo Bridge', status: 'Active (Running)' },
    { name: 'WhatsApp Enterprise Blast', leads: 184, conv: '24.2%', channel: 'Official WhatsApp API', status: 'Active (Running)' },
    { name: 'SaaS Founder Webinar', leads: 92, conv: '31.0%', channel: 'LinkedIn + Email', status: 'Completed' },
    { name: 'Outbound Cold Reactivation', leads: 142, conv: '12.8%', channel: '2-Way SMS Local', status: 'Active (Running)' },
  ];

  return (
    <div className="dashboard-mockup-frame">
      {/* Header bar */}
      <div className="mockup-header-bar" style={{ background: '#0b121e', borderBottom: '1px solid rgba(56, 189, 248, 0.25)' }}>
        <div className="mockup-dots">
          <div className="mockup-dot red" />
          <div className="mockup-dot yellow" />
          <div className="mockup-dot green" />
        </div>
        <div className="mockup-title-bar">
          <Sparkles size={13} color="#38bdf8" />
          <span>oda7 // BIZZFLY Marketing & Growth Hub — Campaigns & Conversion Velocity</span>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span className="badge badge-cyan" style={{ fontSize: '0.6875rem' }}>
            Attribution Engine: Live
          </span>
        </div>
      </div>

      {/* Main Container */}
      <div style={{ padding: '20px', background: '#070a12', fontSize: '0.8125rem' }}>
        
        {/* Top Metric Strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '20px' }}>
          
          <div style={{ background: 'rgba(14, 19, 32, 0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ color: '#94a3b8', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Total Inbound Leads</span>
              <Users size={13} color="#38bdf8" />
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fff' }}>303 Leads</div>
            <div style={{ color: '#34d399', fontSize: '0.7rem', marginTop: '2px' }}>+48 leads vs last week</div>
          </div>

          <div style={{ background: 'rgba(14, 19, 32, 0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ color: '#94a3b8', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Avg Conversion Rate</span>
              <TrendingUp size={13} color="#10b981" />
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#10b981' }}>18.4%</div>
            <div style={{ color: '#34d399', fontSize: '0.7rem', marginTop: '2px' }}>+3.2% attribution lift</div>
          </div>

          <div style={{ background: 'rgba(14, 19, 32, 0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ color: '#94a3b8', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>WhatsApp Broadcasts</span>
              <MessageSquare size={13} color="#fbbf24" />
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fbbf24' }}>98.2% Deliv</div>
            <div style={{ color: '#38bdf8', fontSize: '0.7rem', marginTop: '2px' }}>4,250 Messages delivered</div>
          </div>

          <div style={{ background: 'rgba(14, 19, 32, 0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ color: '#94a3b8', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Customer Acq Cost (CAC)</span>
              <Zap size={13} color="#34d399" />
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#34d399' }}>$42 / Lead</div>
            <div style={{ color: '#60a5fa', fontSize: '0.7rem', marginTop: '2px' }}>-35% with native dialer bridge</div>
          </div>

        </div>

        {/* Middle Grid: Active Campaigns + Campaign Telemetry */}
        <div className="mockup-grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '16px' }}>
          
          {/* Active Campaigns Table */}
          <div style={{ background: 'rgba(14, 19, 31, 0.6)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
              <div style={{ fontWeight: '700', color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Share2 size={14} color="#38bdf8" />
                <span>Live Growth & Omnichannel Campaigns</span>
              </div>
              <button style={{ padding: '4px 12px', borderRadius: '6px', background: 'var(--grad-primary)', color: '#fff', fontSize: '0.75rem', fontWeight: '600' }}>
                + New Campaign
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {campaigns.map((camp) => (
                <div
                  key={camp.name}
                  onClick={() => setSelectedCampaign(camp.name)}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1.4fr 1fr 1fr 90px',
                    alignItems: 'center',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: selectedCampaign === camp.name ? 'rgba(37, 99, 235, 0.18)' : 'rgba(255,255,255,0.02)',
                    border: selectedCampaign === camp.name ? '1px solid rgba(59, 130, 246, 0.45)' : '1px solid rgba(255,255,255,0.04)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <div>
                    <div style={{ fontWeight: '600', color: '#fff' }}>{camp.name}</div>
                    <div style={{ fontSize: '0.7rem', color: '#38bdf8' }}>{camp.channel}</div>
                  </div>

                  <div>
                    <div style={{ color: '#fff', fontSize: '0.75rem' }}>{camp.leads} Inbound Leads</div>
                    <div style={{ color: '#64748b', fontSize: '0.7rem' }}>Speed: &lt;15s bridge</div>
                  </div>

                  <div>
                    <div style={{ color: '#10b981', fontWeight: '700', fontSize: '0.85rem' }}>{camp.conv}</div>
                    <div style={{ color: '#64748b', fontSize: '0.7rem' }}>Qualified Rate</div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <span className="badge badge-emerald" style={{ fontSize: '0.65rem' }}>
                      Active
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Inbound Web-to-Call Bridge & Attribution */}
          <div style={{ background: 'rgba(11, 15, 23, 0.85)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '10px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontWeight: '700', color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Globe size={14} color="#38bdf8" />
                <span>Speed-to-Lead Bridge</span>
              </div>
              <span className="badge badge-cyan" style={{ fontSize: '0.65rem' }}>&lt;15s SLA</span>
            </div>

            {/* Inbound Telemetry Visual */}
            <div style={{ background: 'rgba(14, 23, 42, 0.8)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '12px' }}>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Live Campaign Target:</div>
              <div style={{ fontSize: '1rem', fontWeight: '700', color: '#fff', marginTop: '2px' }}>{selectedCampaign}</div>
              <div style={{ fontSize: '0.75rem', color: '#34d399', marginTop: '4px' }}>✓ Direct sync to SDR Alex Rivera's Queue</div>
            </div>

            {/* Channel Attribution breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', fontSize: '0.75rem' }}>
                <CheckCircle2 size={13} color="#10b981" />
                <span>Automated WhatsApp Cadence Triggers</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', fontSize: '0.75rem' }}>
                <CheckCircle2 size={13} color="#10b981" />
                <span>Instant Inbound Web-to-Call Phone Routing</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', fontSize: '0.75rem' }}>
                <CheckCircle2 size={13} color="#10b981" />
                <span>Full UTM & Multi-Touch ROI Tracking</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
