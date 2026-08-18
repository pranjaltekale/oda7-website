'use client';

import React, { useEffect, useState } from 'react';
import {
  Activity,
  BarChart3,
  CalendarDays,
  Check,
  FileText,
  GitBranch,
  Headphones,
  Inbox,
  LayoutDashboard,
  Megaphone,
  Package,
  PhoneCall,
  Plus,
  ReceiptText,
  Settings2,
  Sparkles,
  UserRoundCheck,
  Users,
} from 'lucide-react';

const iconMap = {
  BarChart3,
  CalendarDays,
  FileText,
  GitBranch,
  Headphones,
  Inbox,
  LayoutDashboard,
  Megaphone,
  Package,
  PhoneCall,
  ReceiptText,
  Settings2,
  Sparkles,
  UserRoundCheck,
  Users,
};

const domainData = {
  leads: {
    metrics: [['Inbound Leads', '142'], ['Qualified', '88'], ['High Intent', '24']],
    columns: ['Lead / Account', 'Source', 'Fit Status', 'Next Action'],
    rows: [
      { name: 'CloudScale Systems', sub: 'Inbound Web', status: 'High Fit (96%)', action: 'Book Exec Demo' },
      { name: 'Apex Health AI', sub: 'Product Signup', status: 'Qualified', action: 'Send Pilot Scope' },
      { name: 'FinEdge Global', sub: 'Event Demo', status: 'Priority', action: 'Assign Account Exec' },
      { name: 'Vortex Mobility', sub: 'Organic Search', status: 'Nurturing', action: 'Trigger Cadence' },
    ],
    notification: 'New high-fit enterprise lead qualified and assigned to Tier-1 pod',
  },
  dialer: {
    metrics: [['Dial Queue', '18'], ['Connected', '84%'], ['Avg Talk Time', '4m 12s']],
    columns: ['Contact Name', 'Account', 'Call State', 'Next Step'],
    rows: [
      { name: 'Marcus Vance', sub: 'Enterprise Logistics', status: 'Connected (04:18)', action: 'Demo Confirmed' },
      { name: 'Elena Rostova', sub: 'Global Retail Corp', status: 'Warm Transfer', action: 'Send Proposal' },
      { name: 'David Kim', sub: 'FinTech Solutions', status: 'Left Voicemail', action: 'Follow-up in 2d' },
      { name: 'Sarah Jenkins', sub: 'Apex MedTech', status: 'Connected (02:45)', action: 'Qualified' },
    ],
    notification: 'Live call recorded: AI identified budget approval signal and booked demo',
  },
  calls: {
    metrics: [['Analyzed Calls', '340'], ['Objection Rate', '-14%'], ['Sentiment', '91% +']],
    columns: ['Call Subject', 'Assigned Rep', 'Sentiment', 'Coaching Action'],
    rows: [
      { name: 'Enterprise Security Review', sub: 'Priya Sharma', status: 'High Interest', action: 'Budget Approved' },
      { name: 'Implementation Timeline Q3', sub: 'James Liu', status: 'Positive', action: 'Contract Legal Review' },
      { name: 'Annual Renewal & Expansion', sub: 'Maya Patel', status: 'Strong', action: 'Upsell +30 Seats' },
      { name: 'Product Architecture Deep Dive', sub: 'Alex Carter', status: 'Neutral', action: 'Send Tech Paper' },
    ],
    notification: 'Call intelligence synced: 3 objection moments coached with contextual scripts',
  },
  inbox: {
    metrics: [['Open Threads', '14'], ['First Response', '1.8m'], ['Resolution Rate', '98%']],
    columns: ['Customer Thread', 'Channel', 'State', 'Assigned Owner'],
    rows: [
      { name: 'Zenith Media Group', sub: 'Email & WhatsApp', status: 'Awaiting Quote', action: 'Priya Sharma' },
      { name: 'Horizon Healthcare', sub: 'Live Chat', status: 'Resolved', action: 'Technical Pod' },
      { name: 'Nexus Retail Labs', sub: 'SMS & Voice', status: 'Needs Review', action: 'Account Exec' },
      { name: 'BlueWave SaaS', sub: 'In-App Message', status: 'Scheduled', action: 'Onboarding Lead' },
    ],
    notification: 'Customer thread routed: WhatsApp message merged into unified timeline',
  },
  calendar: {
    metrics: [['Scheduled Today', '12'], ['Show Rate', '94%'], ['Follow-up P0', '08']],
    columns: ['Event / Meeting', 'Account', 'Status', 'Host Rep'],
    rows: [
      { name: 'Executive Demo & Pricing', sub: 'Global Logistics', status: '10:30 AM', action: 'Marcus Vance' },
      { name: 'Security & SAML Review', sub: 'Apex FinTech', status: '02:00 PM', action: 'Solutions Arch' },
      { name: 'Quarterly Commercial Review', sub: 'Starlight Media', status: '03:30 PM', action: 'Account Exec' },
      { name: 'Pilot Kickoff Walkthrough', sub: 'Vanguard Health', status: '05:00 PM', action: 'Customer Success' },
    ],
    notification: 'Calendar sync active: Demo notes and recording automatically linked to CRM',
  },
  campaigns: {
    metrics: [['Active Campaigns', '06'], ['Attributed Pipeline', '$1.8M'], ['Lead Velocity', '+28%']],
    columns: ['Campaign Name', 'Channel', 'Cost / Lead', 'Pipeline Generated'],
    rows: [
      { name: 'Q3 Enterprise Growth', sub: 'LinkedIn & Search', status: '$42.50 / lead', action: '$780,000' },
      { name: 'Interactive Tour Promo', sub: 'YouTube & Direct', status: '$18.20 / lead', action: '$420,000' },
      { name: 'State of Sales Ops Report', sub: 'Content Hub', status: '$8.40 / lead', action: '$390,000' },
      { name: 'Partner Co-Marketing', sub: 'Webinar & Email', status: '$24.00 / lead', action: '$250,000' },
    ],
    notification: 'Campaign attribution updated: Inbound lead traced to Q3 LinkedIn Sponsored campaign',
  },
  products: {
    metrics: [['Product SKUs', '28'], ['Avg Deal Size', '$48K'], ['Bundle Attach', '64%']],
    columns: ['Product Offer', 'Tier', 'Status', 'Recommended Pitch'],
    rows: [
      { name: 'Business OS Enterprise', sub: 'Annual Plan', status: 'Standard Core', action: 'Attach AI Voice' },
      { name: 'AI Voice & Dialer Suite', sub: 'Add-on Pack', status: 'High Demand', action: 'Bundle with CRM' },
      { name: 'People & Attendance Hub', sub: 'Workforce Tier', status: 'Active', action: 'Present to HR Lead' },
      { name: 'Executive Telemetry Console', sub: 'Platform Suite', status: 'Premium', action: 'C-Suite Briefing' },
    ],
    notification: 'Commercial catalog synced: New product bundles available in active battlecards',
  },
  scripts: {
    metrics: [['Active Playbooks', '16'], ['Adherence', '92%'], ['Conversion Lift', '+34%']],
    columns: ['Playbook Title', 'Target Persona', 'Key Objection', 'Winning Response'],
    rows: [
      { name: 'Enterprise Discovery Flow', sub: 'VP of Sales / COO', status: 'High Conversion', action: 'Multi-Tool Fatigue' },
      { name: 'Competitive Displacement', sub: 'Head of RevOps', status: 'Proven 88%', action: 'Pricing Transparency' },
      { name: 'Inbound Fast Qualification', sub: 'Sales Manager', status: 'Avg 3m Call', action: 'Speed to Lead' },
      { name: 'Security & SSO Signoff', sub: 'CTO / CISO', status: 'Standardized', action: 'SOC2 / GDPR Fast-track' },
    ],
    notification: 'Script updated: Winning objection response for RevOps added to live dialer',
  },
  sequences: {
    metrics: [['Active Contacts', '520'], ['Reply Rate', '31.4%'], ['Meetings Booked', '48']],
    columns: ['Sequence Stage', 'Touch Type', 'Wait Time', 'Response Action'],
    rows: [
      { name: 'Step 1: Personalized Loom', sub: 'Video Email', status: 'Day 1 (Instant)', action: '84% Open Rate' },
      { name: 'Step 2: Contextual Call', sub: 'Power Dialer', status: 'Day 3 (+48h)', action: 'Live Connected' },
      { name: 'Step 3: Executive Case Study', sub: 'WhatsApp & Email', status: 'Day 6 (+72h)', action: 'Meeting Booked' },
      { name: 'Step 4: Mutual Action Plan', sub: 'Direct Outreach', status: 'Day 9 (+72h)', action: 'Contract Sent' },
    ],
    notification: 'Sequence trigger: Rep responded on WhatsApp, lead auto-advanced to Proposal state',
  },
  quotes: {
    metrics: [['Quotes Sent', '$840K'], ['Win Probability', '78%'], ['Avg Cycle', '12 Days']],
    columns: ['Quote / Proposal', 'Customer Account', 'Total ARR', 'Approval State'],
    rows: [
      { name: '100 Seats Enterprise OS', sub: 'FinEdge Global', status: '$120,000 / yr', action: 'Approved by VP' },
      { name: 'Scale Pod + AI Dialer', sub: 'CloudScale Inc', status: '$64,000 / yr', action: 'Out for Signature' },
      { name: 'Growth Tier + People Ops', sub: 'Nexus Retail', status: '$38,000 / yr', action: 'Legal Review' },
      { name: 'Dedicated Cloud Instance', sub: 'Vanguard Health', status: '$180,000 / yr', action: 'Approved' },
    ],
    notification: 'Quote approved: FinEdge Global 100-seat agreement e-signed and activated',
  },
  sales: {
    metrics: [['Pipeline Active', '$2.8M'], ['Quarter Quota', '118%'], ['Win Rate', '34.2%']],
    columns: ['Opportunity Account', 'Owner', 'Stage', 'Next Milestone'],
    rows: [
      { name: 'Acme Enterprise Systems', sub: 'Priya Sharma', status: 'Negotiation ($140K)', action: 'Contract Signoff' },
      { name: 'Starlight Logistics Corp', sub: 'Marcus Vance', status: 'Proposal ($85K)', action: 'Exec Alignment' },
      { name: 'Horizon Fintech Global', sub: 'Maya Patel', status: 'Discovery ($62K)', action: 'Tech Evaluation' },
      { name: 'Zenith Health Platforms', sub: 'James Liu', status: 'Closing ($190K)', action: 'Final Approval' },
    ],
    notification: 'Sales pipeline updated: Acme Enterprise opportunity moved to Final Signoff',
  },
  manager: {
    metrics: [['Floor Agents', '28 Active'], ['Live Calls', '12 Connected'], ['Queue SLA', '99.8%']],
    columns: ['Agent / Pod', 'Current Status', 'Call Time', 'Manager Action'],
    rows: [
      { name: 'Americas Inbound Team', sub: '8 Reps Online', status: 'Handling 6 Calls', action: 'Whisper Coach' },
      { name: 'Outbound Discovery Pod', sub: '12 Reps Online', status: '84 Dials/hr', action: 'On Target' },
      { name: 'Enterprise Closing Desk', sub: '4 Account Execs', status: '2 Demos Active', action: 'Review Recording' },
      { name: 'Escalations Queue', sub: '2 Senior Reps', status: '0 Waiting', action: 'Optimal SLA' },
    ],
    notification: 'Manager floor alert: Outbound Discovery Pod hit 100% daily connection target',
  },
  operations: {
    metrics: [['Workforce Capacity', '96%'], ['Active Schedules', '142'], ['SLA Adherence', '99.4%']],
    columns: ['Team / Department', 'Staffing Level', 'Schedule State', 'Operations Note'],
    rows: [
      { name: 'North America Revenue Ops', sub: '42 Agents', status: '100% Staffed', action: 'On Pace' },
      { name: 'EMEA Customer Engagement', sub: '28 Agents', status: '96% Staffed', action: 'Shift Rotation' },
      { name: 'APAC Inbound Support', sub: '18 Agents', status: '100% Staffed', action: 'All Shifts Filled' },
      { name: 'Enterprise Solutions Desk', sub: '12 Engineers', status: 'Optimal Capacity', action: 'High Utilization' },
    ],
    notification: 'Operations plan updated: Weekly roster published with zero coverage gaps',
  },
  hr: {
    metrics: [['Total Headcount', '164'], ['Onboarding Active', '08'], ['Leave Balance', 'Synced']],
    columns: ['Employee / New Hire', 'Department', 'Onboarding Step', 'People Ops State'],
    rows: [
      { name: 'Sophia Martinez', sub: 'Revenue Team', status: 'Day 3: Tool Setup', action: 'Mentor Assigned' },
      { name: 'Liam Chen', sub: 'Solutions Engineering', status: 'Day 7: Certification', action: 'On Track' },
      { name: 'Amara Okafor', sub: 'Customer Operations', status: 'Completed', action: 'Active in Pod' },
      { name: 'Tariq Al-Mansoor', sub: 'Product Management', status: 'Day 1: Kickoff', action: 'Welcome Pack Sent' },
    ],
    notification: 'People Ops milestone: 8 new team members completed workspace onboarding',
  },
  people: {
    metrics: [['Total Headcount', '164'], ['Onboarding Active', '08'], ['Attendance', '98.2%']],
    columns: ['Employee / Role', 'Department', 'Attendance', 'Workflow State'],
    rows: [
      { name: 'Sophia Martinez', sub: 'Revenue Team', status: 'Present (On-Shift)', action: '132% Quota' },
      { name: 'Liam Chen', sub: 'Solutions Engineering', status: 'Present (On-Shift)', action: '98% CSAT' },
      { name: 'Amara Okafor', sub: 'Customer Operations', status: 'Present (On-Shift)', action: '118% Target' },
      { name: 'Tariq Al-Mansoor', sub: 'Support Lead', status: 'Present (On-Shift)', action: '99.2% SLA' },
    ],
    notification: 'People Operations synced: Real-time attendance linked to daily performance metrics',
  },
  leadership: {
    metrics: [['ARR Trajectory', '$8.4M'], ['Net Retention', '124%'], ['CAC Payback', '7.2 Mo']],
    columns: ['Business Unit', 'Q3 Target', 'Attainment', 'Growth Trajectory'],
    rows: [
      { name: 'Commercial Software Suite', sub: '$4.2M Plan', status: '$4.9M (116%)', action: '+38% YoY' },
      { name: 'Enterprise Expansion Units', sub: '$2.8M Plan', status: '$3.4M (121%)', action: '+44% YoY' },
      { name: 'Strategic Partner Channels', sub: '$1.4M Plan', status: '$1.5M (107%)', action: '+26% YoY' },
      { name: 'Global Platform Services', sub: '$800K Plan', status: '$940K (117%)', action: '+31% YoY' },
    ],
    notification: 'Executive summary synced: Overall company ARR passed $8.4M milestone',
  },
  marketing: {
    metrics: [['Marketing Pipeline', '$2.4M'], ['Blended CAC', '$240'], ['Conversion Rate', '4.8%']],
    columns: ['Attribution Channel', 'MQL Volume', 'SQL Conversion', 'Revenue Contribution'],
    rows: [
      { name: 'Organic Search & SEO', sub: '1,420 Leads', status: '18.4% SQL Rate', action: '$680,000' },
      { name: 'Paid Search & Social Ads', sub: '890 Leads', status: '14.2% SQL Rate', action: '$540,000' },
      { name: 'Industry Partner Webinars', sub: '460 Leads', status: '24.8% SQL Rate', action: '$490,000' },
      { name: 'Direct Inbound Referral', sub: '310 Leads', status: '32.0% SQL Rate', action: '$690,000' },
    ],
    notification: 'Marketing ROI updated: Organic Search became top pipeline contributor for Q3',
  },
};

export const ProductUIFrame = ({ title, slug = '', steps = [], icon = 'LayoutDashboard', compact = false }) => {
  const [activeStep, setActiveStep] = useState(0);
  const Icon = iconMap[icon] || LayoutDashboard;

  const key = (slug || title || '').toLowerCase().replace(/[^a-z]/g, '');
  const data = domainData[key] || domainData[slug] || domainData.leads;

  useEffect(() => {
    if (steps.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = window.setInterval(() => setActiveStep((step) => (step + 1) % steps.length), 3200);
    return () => window.clearInterval(timer);
  }, [steps.length]);

  return (
    <div className={`product-ui-frame ${compact ? 'is-compact' : ''}`} aria-label={`${title} illustrative product interface`}>
      <div className="product-ui-topbar">
        <div className="product-ui-dots"><i /><i /><i /></div>
        <div className="product-ui-title"><Icon size={14} /> ODA7 / {title}</div>
        <span>Illustrative UI</span>
      </div>
      <div className="product-ui-shell">
        <aside className="product-ui-sidebar" aria-hidden="true">
          <div className="product-ui-logo">o7</div>
          {[LayoutDashboard, Users, PhoneCall, Inbox, BarChart3].map((SideIcon, index) => (
            <SideIcon key={index} size={15} className={index === 1 ? 'is-active' : ''} />
          ))}
        </aside>
        <div className="product-ui-content">
          <div className="product-ui-heading">
            <div><small>Workspace</small><strong>{title}</strong></div>
            <button><Plus size={14} /> New action</button>
          </div>

          <div className="product-ui-metrics">
            {data.metrics.map(([label, value], index) => (
              <div key={label} className={index === activeStep % 3 ? 'is-highlighted' : ''}>
                <small>{label}</small>
                <strong>{value}</strong>
                <span>{index === 2 ? 'Live Review' : 'Active Flow'}</span>
              </div>
            ))}
          </div>

          <div className="product-ui-progress" aria-label="Workflow preview">
            {steps.map((step, index) => (
              <button
                key={step}
                className={index === activeStep ? 'is-active' : index < activeStep ? 'is-complete' : ''}
                onClick={() => setActiveStep(index)}
              >
                <i>{index < activeStep ? <Check size={11} /> : index + 1}</i>
                <span>{step}</span>
              </button>
            ))}
          </div>

          <div className="product-ui-table">
            <div className="product-ui-table-head">
              <span>{data.columns[0]}</span>
              <span>{data.columns[1]}</span>
              <span>{data.columns[2]}</span>
              <span>{data.columns[3]}</span>
            </div>
            {data.rows.slice(0, compact ? 2 : 4).map((row, index) => (
              <div className={index === activeStep % data.rows.length ? 'is-selected' : ''} key={row.name}>
                <span>
                  <i>{row.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}</i>
                  <b>{row.name}</b>
                </span>
                <span>{row.sub}</span>
                <span><em>{row.status}</em></span>
                <span>{steps[(index + activeStep) % Math.max(steps.length, 1)] || row.action}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="product-ui-notification">
        <span><Activity size={15} /></span>
        <div>
          <strong>{steps[activeStep] || 'Workflow updated'}</strong>
          <small>{data.notification || 'Shared state updated across the workspace'}</small>
        </div>
      </div>
    </div>
  );
};
