import React from 'react';
import {
  PhoneCall,
  Headphones,
  Users,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Volume2,
  Send,
  Activity,
  DollarSign,
  TrendingUp,
  Building2,
  FileText,
  Clock,
  Zap,
  ArrowRight,
} from 'lucide-react';

export const demoRoleData = {
  sales: {
    roleName: 'Sales Rep',
    roleLabel: 'Inside Sales SDR',
    icon: PhoneCall,
    color: '#38bdf8',
    steps: [
      {
        eyebrow: 'Step 1 • Lead Arrival',
        title: 'Priority Lead Ingestion',
        desc: 'New high-intent prospect arrives from website and scores 96 AI.',
        highlight: 'My Queue SLA: <15s',
        component: (
          <div className="demo-ui-box">
            <div className="demo-ui-header">
              <span>My Queue • Live Inbound</span>
              <span className="badge badge-emerald">Intent: 96/100</span>
            </div>
            <div className="demo-lead-row">
              <div className="demo-avatar-circle">SJ</div>
              <div>
                <strong>Sarah Jenkins</strong>
                <small>VP Operations • Logix Enterprises</small>
              </div>
              <span className="badge badge-primary">Austin (512)</span>
            </div>
            <div className="demo-ui-meta">
              <span>Source: Website Form (2m ago)</span>
              <span style={{ color: 'var(--oda-success)' }}>● Next to Call</span>
            </div>
          </div>
        ),
      },
      {
        eyebrow: 'Step 2 • Predictive Call',
        title: '0.8s Local Presence Dialing',
        desc: 'Browser WebRTC softphone connects with localized caller ID.',
        highlight: 'Connect Rate Lift: +34.8%',
        component: (
          <div className="demo-ui-box">
            <div className="demo-ui-header">
              <span>Active Call • Local 512 Match</span>
              <div className="audio-wave-live">
                <span /><span /><span /><span />
              </div>
            </div>
            <div style={{ padding: '14px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--oda-text-primary)' }}>
                Sarah Jenkins <span style={{ fontSize: '0.8rem', color: 'var(--oda-text-muted)' }}>+1 (512) 840-9211</span>
              </div>
              <div style={{ color: 'var(--oda-success)', fontWeight: '700', fontSize: '0.8rem', marginTop: '4px' }}>
                Connected 02:45 • HD Audio Dual-Stream
              </div>
            </div>
            <div className="demo-ui-meta">
              <span>Win Probability: 84%</span>
              <span>Deal Size: $48,000 / yr</span>
            </div>
          </div>
        ),
      },
      {
        eyebrow: 'Step 3 • Live Speech AI',
        title: 'Real-Time Objection Buster',
        desc: 'AI detects competitor contract objection and pops winning talk track.',
        highlight: 'Neural Latency: 42ms',
        component: (
          <div className="demo-ui-box">
            <div className="demo-ui-header">
              <span>Speech Copilot • Real-Time Battlecard</span>
              <span className="badge badge-cyan">Objection Detected</span>
            </div>
            <div style={{ padding: '12px 14px', background: 'var(--oda-bg-alt)', borderRadius: '8px', margin: '8px 0', border: '1px solid var(--oda-border)' }}>
              <small style={{ color: 'var(--oda-text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>Detected Prospect Concern:</small>
              <div style={{ color: 'var(--oda-text-primary)', fontSize: '0.85rem', marginTop: '2px' }}>
                "We are locked in with a legacy dialer for 6 more months."
              </div>
            </div>
            <div style={{ padding: '10px 14px', background: 'var(--oda-primary-soft)', borderRadius: '8px', borderLeft: '3px solid var(--oda-primary)' }}>
              <small style={{ color: 'var(--oda-primary)', fontWeight: '700' }}>Suggested Rebuttal:</small>
              <div style={{ color: 'var(--oda-text-primary)', fontSize: '0.85rem', fontWeight: '600' }}>
                "Offer our 6-month contract buyout credit with zero-downtime migration."
              </div>
            </div>
          </div>
        ),
      },
      {
        eyebrow: 'Step 4 • Omnichannel Follow-Up',
        title: 'WhatsApp Deck & Qualified Stage',
        desc: 'Send WhatsApp summary in 1 click and automatically advance the deal.',
        highlight: 'Zero-Touch CRM Sync',
        component: (
          <div className="demo-ui-box">
            <div className="demo-ui-header">
              <span>Official WhatsApp API • Thread</span>
              <span className="badge badge-emerald">Delivered</span>
            </div>
            <div style={{ padding: '14px', background: 'var(--oda-bg-alt)', borderRadius: '8px', margin: '8px 0', border: '1px solid var(--oda-border)' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--oda-text-primary)' }}>
                "Hi Sarah, here is the enterprise buyout deck we discussed on our call."
              </div>
              <small style={{ color: 'var(--oda-success)', display: 'block', marginTop: '4px' }}>✓✓ Read by Sarah (Just now)</small>
            </div>
            <div className="demo-ui-meta">
              <span style={{ color: 'var(--oda-success)', fontWeight: '700' }}>Stage: Qualified Demo Scheduled</span>
              <span>Commission: +$840</span>
            </div>
          </div>
        ),
      },
    ],
  },

  manager: {
    roleName: 'Manager',
    roleLabel: 'Floor Supervisor',
    icon: Headphones,
    color: '#10b981',
    steps: [
      {
        eyebrow: 'Step 1 • Team Roster',
        title: 'Live Agent Availability Grid',
        desc: 'See all 24 reps on the floor and their live calling states.',
        highlight: 'Real-Time Floor Sync',
        component: (
          <div className="demo-ui-box">
            <div className="demo-ui-header">
              <span>Sales Floor • Inside Pod Alpha</span>
              <span className="badge badge-emerald">24 Clocked In</span>
            </div>
            <div className="demo-agent-row">
              <div><span className="status-dot green" /> <strong>Alex Rivera</strong></div>
              <span style={{ color: 'var(--oda-success)', fontWeight: '600', fontSize: '0.8rem' }}>On Call (02:45)</span>
              <small style={{ color: 'var(--oda-text-muted)' }}>68 Dials</small>
            </div>
            <div className="demo-agent-row">
              <div><span className="status-dot cyan" /> <strong>Elena Vance</strong></div>
              <span style={{ color: 'var(--oda-primary)', fontWeight: '600', fontSize: '0.8rem' }}>Available</span>
              <small style={{ color: 'var(--oda-text-muted)' }}>61 Dials</small>
            </div>
          </div>
        ),
      },
      {
        eyebrow: 'Step 2 • Live Activity',
        title: 'Concurrent Queue Volume',
        desc: 'Sub-second queue monitoring prevents abandoned prospect calls.',
        highlight: 'Queue Delay: 0s',
        component: (
          <div className="demo-ui-box">
            <div className="demo-ui-header">
              <span>Floor Queue Telemetry</span>
              <span className="badge badge-cyan">0 Waiting</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', padding: '14px 0' }}>
              <div style={{ textAlign: 'center', background: 'var(--oda-bg-alt)', padding: '10px', borderRadius: '8px' }}>
                <small style={{ color: 'var(--oda-text-muted)' }}>Active Calls</small>
                <div style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--oda-primary)' }}>18</div>
              </div>
              <div style={{ textAlign: 'center', background: 'var(--oda-bg-alt)', padding: '10px', borderRadius: '8px' }}>
                <small style={{ color: 'var(--oda-text-muted)' }}>Answer Speed</small>
                <div style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--oda-success)' }}>9.4s</div>
              </div>
              <div style={{ textAlign: 'center', background: 'var(--oda-bg-alt)', padding: '10px', borderRadius: '8px' }}>
                <small style={{ color: 'var(--oda-text-muted)' }}>Pickup Ratio</small>
                <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#fbbf24' }}>78.4%</div>
              </div>
            </div>
          </div>
        ),
      },
      {
        eyebrow: 'Step 3 • Floor Performance',
        title: 'Live Quota & Pickup Heatmap',
        desc: 'Monitor hourly connection benchmarks and daily closed ARR pacing.',
        highlight: '112% Quota Pacing',
        component: (
          <div className="demo-ui-box">
            <div className="demo-ui-header">
              <span>Today Closed ARR Pacing</span>
              <span className="badge badge-emerald">+$94,200</span>
            </div>
            <div style={{ padding: '14px', background: 'var(--oda-bg-alt)', borderRadius: '8px', margin: '8px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--oda-text-secondary)' }}>Daily Target ($84,000)</span>
                <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--oda-success)' }}>112.1% Achieved</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: 'var(--oda-surface)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, #2563eb, #10b981)' }} />
              </div>
            </div>
          </div>
        ),
      },
      {
        eyebrow: 'Step 4 • Supervisor Action',
        title: '1-Click Headset Whisper Coaching',
        desc: 'Stream live winning guidance into rep headset without customer hearing.',
        highlight: '24ms WebRTC Stream',
        component: (
          <div className="demo-ui-box">
            <div className="demo-ui-header">
              <span>Silent Listen & Whisper Active</span>
              <span className="badge badge-emerald">Live to Alex Rivera</span>
            </div>
            <div style={{ padding: '14px', background: 'var(--oda-primary-soft)', borderRadius: '8px', borderLeft: '3px solid var(--oda-primary)', margin: '8px 0' }}>
              <small style={{ color: 'var(--oda-primary)', fontWeight: '700' }}>Whispering into SDR Headset:</small>
              <div style={{ color: 'var(--oda-text-primary)', fontSize: '0.85rem', fontWeight: '600' }}>
                "Ask for the 2-year upfront commitment to waive setup fees."
              </div>
            </div>
            <div className="demo-ui-meta">
              <span style={{ color: 'var(--oda-success)' }}>✓ Audio Delivered (24ms latency)</span>
              <span>Client Audio Untouched</span>
            </div>
          </div>
        ),
      },
    ],
  },

  admin: {
    roleName: 'Admin',
    roleLabel: 'Ops & Payroll Admin',
    icon: Users,
    color: '#fbbf24',
    steps: [
      {
        eyebrow: 'Step 1 • People Roster',
        title: 'Team & Shift Configuration',
        desc: 'Manage agent profiles, squads, and calling skill rules.',
        highlight: 'Unified Directory',
        component: (
          <div className="demo-ui-box">
            <div className="demo-ui-header">
              <span>People Directory • 24 Active Reps</span>
              <span className="badge badge-primary">3 Squads</span>
            </div>
            <div className="demo-agent-row">
              <strong>Alex Rivera</strong>
              <span>Inside SDR • Tier 1</span>
              <small style={{ color: 'var(--oda-success)' }}>Active</small>
            </div>
            <div className="demo-agent-row">
              <strong>Marcus Chen</strong>
              <span>Enterprise AE • Tier 2</span>
              <small style={{ color: 'var(--oda-success)' }}>Active</small>
            </div>
          </div>
        ),
      },
      {
        eyebrow: 'Step 2 • Attendance',
        title: 'Verified Geolocation Shift Punches',
        desc: 'Automated shift attendance eliminates time-tracking disputes.',
        highlight: '98.4% On-Time Rate',
        component: (
          <div className="demo-ui-box">
            <div className="demo-ui-header">
              <span>Shift Attendance Telemetry</span>
              <span className="badge badge-emerald">Audit Verified</span>
            </div>
            <div style={{ padding: '14px', background: 'var(--oda-bg-alt)', borderRadius: '8px', margin: '8px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                <span>Shift Start: 9:00 AM CST</span>
                <span style={{ color: 'var(--oda-success)', fontWeight: '700' }}>24 / 24 Clocked In</span>
              </div>
              <small style={{ color: 'var(--oda-text-muted)', display: 'block', marginTop: '4px' }}>Geolocation & IP verified at browser login</small>
            </div>
          </div>
        ),
      },
      {
        eyebrow: 'Step 3 • Automated Payroll',
        title: 'Closed-Won Commission Calculation',
        desc: 'Tier accelerators credit the digital wallet on deal close.',
        highlight: 'Zero Spreadsheet Math',
        component: (
          <div className="demo-ui-box">
            <div className="demo-ui-header">
              <span>Commission Engine • This Month</span>
              <span className="badge badge-emerald">$42,850.00 Total</span>
            </div>
            <div style={{ padding: '12px 14px', background: 'var(--oda-bg-alt)', borderRadius: '8px', margin: '8px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span>Alex Rivera (Closed 14 deals)</span>
                <strong style={{ color: 'var(--oda-success)' }}>+$3,420.00</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginTop: '6px' }}>
                <span>Marcus Chen (Closed 6 enterprise)</span>
                <strong style={{ color: 'var(--oda-success)' }}>+$4,800.00</strong>
              </div>
            </div>
          </div>
        ),
      },
      {
        eyebrow: 'Step 4 • Payslip Reports',
        title: '1-Click Itemized PDF Dispatch',
        desc: 'Generate transparent, itemized PDF payslips for the entire floor.',
        highlight: '100% Audit Ready',
        component: (
          <div className="demo-ui-box">
            <div className="demo-ui-header">
              <span>Itemized Rep Payslip Dispatch</span>
              <span className="badge badge-primary">Ready to Send</span>
            </div>
            <div style={{ padding: '14px', background: 'var(--oda-bg-alt)', borderRadius: '8px', margin: '8px 0', border: '1px solid var(--oda-border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong>Alex Rivera — Monthly Payslip</strong>
                <span style={{ color: 'var(--oda-primary)', fontWeight: '700' }}>$7,420.00 Total</span>
              </div>
              <small style={{ color: 'var(--oda-text-muted)', display: 'block', marginTop: '4px' }}>Base Salary: $4,000 • Verified Commissions: $3,420</small>
            </div>
          </div>
        ),
      },
    ],
  },

  superadmin: {
    roleName: 'Super Admin',
    roleLabel: 'Platform Executive',
    icon: ShieldCheck,
    color: '#a855f7',
    steps: [
      {
        eyebrow: 'Step 1 • Organizations',
        title: 'Multi-Tenant Client Provisioning',
        desc: 'Manage multiple client organizations with complete data isolation.',
        highlight: 'Multi-Tenant Isolation',
        component: (
          <div className="demo-ui-box">
            <div className="demo-ui-header">
              <span>Tenant Organizations</span>
              <span className="badge badge-emerald">48 Live Tenants</span>
            </div>
            <div className="demo-agent-row">
              <strong>BIZZFLY Global</strong>
              <span>24 Seats • Enterprise Tier</span>
              <small style={{ color: 'var(--oda-success)' }}>Healthy</small>
            </div>
            <div className="demo-agent-row">
              <strong>Apex Cloud Logistics</strong>
              <span>18 Seats • Pro Tier</span>
              <small style={{ color: 'var(--oda-success)' }}>Healthy</small>
            </div>
          </div>
        ),
      },
      {
        eyebrow: 'Step 2 • Plans & Licenses',
        title: 'Seat Allocation & Entitlements',
        desc: 'Provision custom telephony trunks, recording storage, and seats.',
        highlight: 'Custom Entitlements',
        component: (
          <div className="demo-ui-box">
            <div className="demo-ui-header">
              <span>Plan & Entitlement Controls</span>
              <span className="badge badge-primary">Enterprise Custom</span>
            </div>
            <div style={{ padding: '14px', background: 'var(--oda-bg-alt)', borderRadius: '8px', margin: '8px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span>Dedicated Carrier SIP Trunk:</span>
                <strong style={{ color: 'var(--oda-success)' }}>Active (Twilio + Bandwidth)</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginTop: '6px' }}>
                <span>Dual-Channel Audio Retention:</span>
                <strong>365 Days Encrypted</strong>
              </div>
            </div>
          </div>
        ),
      },
      {
        eyebrow: 'Step 3 • Platform Revenue',
        title: 'Consolidated MRR & ARR Telemetry',
        desc: 'Monitor platform-wide subscription velocity and usage metrics.',
        highlight: '$184.2k Platform MRR',
        component: (
          <div className="demo-ui-box">
            <div className="demo-ui-header">
              <span>Master Platform ARR Velocity</span>
              <span className="badge badge-emerald">+28.4% YoY</span>
            </div>
            <div style={{ padding: '14px', background: 'var(--oda-bg-alt)', borderRadius: '8px', margin: '8px 0', textAlign: 'center' }}>
              <div style={{ fontSize: '1.6rem', fontWeight: '850', color: 'var(--oda-text-primary)' }}>$2.21M ARR</div>
              <small style={{ color: 'var(--oda-success)' }}>48 Organizations • 99.99% Uptime SLA</small>
            </div>
          </div>
        ),
      },
      {
        eyebrow: 'Step 4 • Governance & Security',
        title: 'Global IP Whitelisting & Custom CNAME',
        desc: 'Enforce SOC2 Type II compliance and corporate SSO domains.',
        highlight: 'SOC2 & GDPR Certified',
        component: (
          <div className="demo-ui-box">
            <div className="demo-ui-header">
              <span>Enterprise Security Shield</span>
              <span className="badge badge-cyan">Enforced</span>
            </div>
            <div style={{ padding: '14px', background: 'var(--oda-bg-alt)', borderRadius: '8px', margin: '8px 0', border: '1px solid var(--oda-border)' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--oda-text-primary)' }}>
                ✓ Custom CNAME: <code>sales.bizzfly.com</code><br/>
                ✓ Corporate SAML / Okta SSO Active<br/>
                ✓ Strict IP Whitelist: 24/24 Pods Enforced
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
};

export const DemoStepCards = ({ role = 'sales', step = 1 }) => {
  const currentRole = demoRoleData[role] || demoRoleData.sales;
  const currentStep = currentRole.steps[step - 1] || currentRole.steps[0];
  const IconComp = currentRole.icon;

  return (
    <div className="demo-workflow-step animate-fadeIn" key={`${role}-${step}`}>
      {/* Left: Step Description */}
      <div className="demo-step-summary">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: `${currentRole.color}25`, color: currentRole.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IconComp size={18} />
          </div>
          <div>
            <small style={{ color: currentRole.color, fontWeight: '700', textTransform: 'uppercase' }}>
              {currentStep.eyebrow}
            </small>
            <div style={{ fontSize: '0.75rem', color: 'var(--oda-text-muted)' }}>
              {currentRole.roleLabel}
            </div>
          </div>
        </div>

        <h3 style={{ fontSize: '1.35rem', fontWeight: '850', color: 'var(--oda-text-primary)', marginBottom: '8px', lineHeight: '1.25' }}>
          {currentStep.title}
        </h3>

        <p style={{ color: 'var(--oda-text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '16px' }}>
          {currentStep.desc}
        </p>

        <div style={{ display: 'inline-flex', padding: '6px 12px', borderRadius: '8px', background: 'var(--oda-primary-soft)', border: '1px solid var(--oda-border-blue)', color: 'var(--oda-primary)', fontSize: '0.75rem', fontWeight: '700' }}>
          {currentStep.highlight}
        </div>
      </div>

      {/* Right: Interactive UI Demonstration Widget */}
      <div className="demo-step-interface card-interactive-lift">
        {currentStep.component}
      </div>
    </div>
  );
};
