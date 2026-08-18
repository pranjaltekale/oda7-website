export const featureCategories = [
  { id: 'sales', label: 'Sales & Calling', icon: 'PhoneCall', count: 12 },
  { id: 'ai', label: 'AI Intelligence', icon: 'Sparkles', count: 7 },
  { id: 'people', label: 'People & Floor Ops', icon: 'Users', count: 7 },
  { id: 'compensation', label: 'Compensation & Payroll', icon: 'DollarSign', count: 5 },
  { id: 'engagement', label: 'Engagement & Contests', icon: 'Trophy', count: 4 },
  { id: 'insights', label: 'Insights & Heatmaps', icon: 'BarChart3', count: 4 },
  { id: 'admin', label: 'Administration & Roles', icon: 'Settings', count: 8 },
  { id: 'super-admin', label: 'Super Admin Multi-Tenant', icon: 'ShieldCheck', count: 8 },
  { id: 'communication', label: 'Omnichannel & Inbox', icon: 'Inbox', count: 6 },
];

export const featuresByModule = {
  sales: {
    title: 'Sales Operations & Rep Velocity',
    subtitle: 'From inbound lead capture to calling context and coordinated follow-up.',
    items: [
      {
        name: 'My Queue',
        desc: 'Dynamic prioritized lead queue with intelligent algorithmic ranking based on deal score and timezone.',
        highlight: 'Visible queue ownership',
      },
      {
        name: 'Smart Predictive Dialer',
        desc: 'Integrated calling workspace with lead context, call controls and visible next actions.',
        highlight: 'In-workflow calling',
      },
      {
        name: 'Dynamic Sales Scripts',
        desc: 'Interactive branching call scripts with real-time prompt suggestions based on customer responses.',
        highlight: 'Branching logic',
      },
      {
        name: 'Automated Sequences',
        desc: 'Omnichannel follow-up cadences blending SMS, WhatsApp, automated voicemails, and email steps.',
        highlight: 'Multi-touch sequences',
      },
      {
        name: 'Unified Inbox',
        desc: 'Consolidate 2-way SMS, WhatsApp conversations, and emails directly on the lead profile.',
        highlight: 'Centralized comms',
      },
      {
        name: 'Quotes & Proposals',
        desc: 'Prepare, send, and track product quotes with signature status and customer context.',
        highlight: 'Connected quoting',
      },
      {
        name: 'Lead Management & Tagging',
        desc: 'Multi-dimensional lead filtering, custom field enrichment, pipeline stages, and bulk actions.',
        highlight: 'Custom fields',
      },
      {
        name: 'Call History & Recordings',
        desc: 'Keep call history, available recordings, and transcript context attached to the customer record.',
        highlight: 'Conversation history',
      },
      {
        name: 'Product Catalog',
        desc: 'Embed product SKUs, pricing tiers, and recurring billing plans directly into the agent workspace.',
        highlight: 'Integrated catalog',
      },
      {
        name: 'Company Hierarchy',
        desc: 'Map multiple contacts, decision-makers, and buying committees under parent enterprise accounts.',
        highlight: 'Account mapping',
      },
      {
        name: 'Calendar & Meeting Scheduler',
        desc: 'Coordinate booking links, calendar availability, and meeting reminders around the customer record.',
        highlight: 'Meeting context',
      },
      {
        name: 'Sales Dashboard',
        desc: 'Personalized rep performance command center showing calls made, pickup ratio, conversions, and commissions.',
        highlight: 'Personal scorecard',
      },
    ],
  },
  ai: {
    title: 'AI Intelligence & Live Copilot',
    subtitle: 'A pervasive intelligence layer analyzing sales conversations, scoring leads, and providing live coaching.',
    items: [
      {
        name: 'Explain My Numbers',
        desc: 'Ask plain-language questions about available sales data and review the supporting operational context.',
        highlight: 'Explainable context',
      },
      {
        name: 'Real-time Objection Buster',
        desc: 'Surface relevant guidance during a conversation when a pricing or competitor topic appears.',
        highlight: 'Live speech coaching',
      },
      {
        name: 'Predictive Lead Scoring',
        desc: 'Organize lead-priority signals from the customer and activity context available to the workflow.',
        highlight: 'Priority signals',
      },
      {
        name: 'AI Post-Call Summarization',
        desc: 'Surfaces action items, sentiment context and prospect themes for review inside the workflow.',
        highlight: 'AI-assisted review',
      },
      {
        name: 'AI Sales Recommendations',
        desc: 'Present relevant next-action suggestions for review within the customer workflow.',
        highlight: 'Actionable guidance',
      },
      {
        name: 'Automated Insight Alerts',
        desc: 'Bring changing activity patterns and conversation themes to a manager’s attention.',
        highlight: 'Pattern alerts',
      },
      {
        name: 'AI Sales Assistant Copilot',
        desc: 'Draft contextual replies, follow-up notes, and call briefings for a person to review.',
        highlight: 'Contextual briefing',
      },
    ],
  },
  people: {
    title: 'People Operations & Floor Management',
    subtitle: 'Connect floor visibility, team structure, availability, and manager workflows.',
    items: [
      {
        name: 'Real-time Floor Queue Monitor',
        desc: 'Live oversight of queue load, waiting leads, active concurrent calls, and floor availability.',
        highlight: 'Floor context',
      },
      {
        name: 'Agent Status Grid & Whispering',
        desc: 'Live visual roster: see who is On Call, Idle, In Wrap-up, or Available. Listen in or whisper coach live.',
        highlight: 'Live call whispering',
      },
      {
        name: 'Department & Team Hierarchy',
        desc: 'Structure your sales organization into squads, territories, vertical pods, and regional divisions.',
        highlight: 'Granular grouping',
      },
      {
        name: 'Automated Onboarding Workflows',
        desc: 'Organize onboarding paths, practice activities, and access preparation in one place.',
        highlight: 'Guided onboarding',
      },
      {
        name: 'Attendance & Clock-in/out',
        desc: 'Connect configured time and attendance records with agent shift availability.',
        highlight: 'Shift tracking',
      },
      {
        name: 'Leave & PTO Management',
        desc: 'Coordinate leave requests, approval status, and queue ownership around team availability.',
        highlight: 'Availability context',
      },
      {
        name: 'Manager Live Scorecard',
        desc: 'High-level manager view tracking team pickup ratios, wrap-up times, conversion benchmarks, and pacing.',
        highlight: 'Team pacing',
      },
    ],
  },
  compensation: {
    title: 'Compensation, Payroll & Incentives',
    subtitle: 'Connect commission structures, earnings context and payslip workflows to visible performance activity.',
    items: [
      {
        name: 'Real-time Commission Engine',
        desc: 'Connect eligible closed work with configured commission rules and a reviewable earnings record.',
        highlight: 'Earnings context',
      },
      {
        name: 'Automated Payroll Calculation',
        desc: 'Prepare base pay, overtime, commissions, adjustments, and bonuses for payroll review and export.',
        highlight: 'Reviewable payroll context',
      },
      {
        name: 'Digital Payslip Distribution',
        desc: 'Itemized, downloadable monthly payslips with transparent breakdowns of base pay, taxes, and earned bonuses.',
        highlight: 'Itemized transparency',
      },
      {
        name: 'Dynamic Incentive Plans (SPIFFs)',
        desc: 'Launch weekend flash bonuses, product-specific spiffs, and quota multipliers with custom start/end triggers.',
        highlight: 'Flash incentives',
      },
      {
        name: 'Quota Pacing & Accelerator Rules',
        desc: 'Configure tiered quota and accelerator rules for use in compensation review.',
        highlight: 'Tier accelerators',
      },
    ],
  },
  engagement: {
    title: 'Gamification & Team Engagement',
    subtitle: 'Fuel high-energy sales culture with live broadcast leaderboards, milestone badges, and floor competitions.',
    items: [
      {
        name: 'Live Sales Floor Leaderboards',
        desc: 'TV-mode broadcast screens displaying real-time revenue leaders, call champions, and deal celebrations with confetti.',
        highlight: 'TV broadcast mode',
      },
      {
        name: 'Custom Sales Contests & Battles',
        desc: 'Run head-to-head rep duels, squad vs squad tournaments, and multi-week revenue challenges.',
        highlight: 'Squad tournaments',
      },
      {
        name: 'Achievement Badges & Milestones',
        desc: 'Recognize meaningful team milestones with configurable achievement badges.',
        highlight: 'Milestone rewards',
      },
      {
        name: 'Company Announcements & Kudos',
        desc: 'Broadcast executive shout-outs, win banners, and policy updates directly to every agent workspace.',
        highlight: 'Shared updates',
      },
    ],
  },
  insights: {
    title: 'Analytics, Heatmaps & Executive BI',
    subtitle: 'Transform raw call telemetry into strategic insights, executive revenue forecasting, and conversion heatmaps.',
    items: [
      {
        name: 'Hour-by-Hour Call Heatmaps',
        desc: 'Identify peak connection hours and optimal pickup time windows across different geographic zones.',
        highlight: 'Timezone heatmaps',
      },
      {
        name: 'Executive Revenue Dashboard',
        desc: 'C-level dashboard unifying pipeline velocity, customer acquisition cost (CAC), LTV, and cohort retention.',
        highlight: 'C-Suite telemetry',
      },
      {
        name: 'Pickup Ratio & Conversion Telemetry',
        desc: 'Drill down by carrier, dialer pool, lead source, rep, and queue to isolate bottlenecks.',
        highlight: 'Granular analytics',
      },
      {
        name: 'Custom Scheduled BI Reports',
        desc: 'Automated daily/weekly PDF and CSV exports delivered to executive inboxes and Slack channels.',
        highlight: 'Automated exports',
      },
    ],
  },
  admin: {
    title: 'Administration, Security & Governance',
    subtitle: 'Fine-grained enterprise permissions, audit logging, template libraries, and system configurations.',
    items: [
      {
        name: 'Granular Roles & Permissions',
        desc: 'Role-based access controls (RBAC) with field-level permissions, masking, and queue assignments.',
        highlight: 'Enterprise RBAC',
      },
      {
        name: 'Immutable Audit Logs',
        desc: 'Review recorded login, export, download, and permission-change activity in one administrative history.',
        highlight: 'Activity history',
      },
      {
        name: 'Email & WhatsApp Template Studio',
        desc: 'Visual rich-text and HTML template builder with merge tags, dynamic variables, and localization.',
        highlight: 'Template studio',
      },
      {
        name: 'Custom Webhooks & Integrations',
        desc: 'Trigger external REST webhooks on any event: lead created, call completed, deal closed, or agent clocked out.',
        highlight: 'Event-driven APIs',
      },
      {
        name: 'Notification Routing Rules',
        desc: 'Route critical alerts via Slack, SMS, WhatsApp, or browser push with customizable escalation policies.',
        highlight: 'Smart alerts',
      },
      {
        name: 'Scheduled Data Reports',
        desc: 'Configure recurring data delivery for supported reporting and storage destinations.',
        highlight: 'Scheduled delivery',
      },
      {
        name: 'Subscription & Invoicing Center',
        desc: 'Self-serve billing management, usage meter monitoring, add-on purchasing, and VAT invoice receipts.',
        highlight: 'Usage meters',
      },
      {
        name: 'System Branding & White-labeling',
        desc: 'Customize domain, portal logos, brand color schemes, and email headers for customer-facing interfaces.',
        highlight: 'White-labeling',
      },
    ],
  },
  'super-admin': {
    title: 'Super Admin Multi-Tenant SaaS Platform',
    subtitle: 'Run oda7 as an entire SaaS business with multi-organization management, billing plans, and data isolation.',
    items: [
      {
        name: 'Multi-Tenant Organization Management',
        desc: 'Provision, suspend, and manage independent organizations from a separate platform console.',
        highlight: 'Tenant isolation',
      },
      {
        name: 'SaaS Plans & Subscription Engine',
        desc: 'Configure tiered pricing plans, seat limits, call minute bundles, and custom enterprise contracts.',
        highlight: 'Plan configurator',
      },
      {
        name: 'Platform Revenue & MRR Telemetry',
        desc: 'Consolidated platform-level ARR, MRR, churn rate, expansion revenue, and tenant lifetime value dashboards.',
        highlight: 'Master financial BI',
      },
      {
        name: 'Global IP Blocker & Threat Defense',
        desc: 'Platform-wide security shield to ban malicious IP ranges, rate-limit brute force attacks, and enforce geo-fencing.',
        highlight: 'Threat defense',
      },
      {
        name: 'Data Platform Connectors',
        desc: 'Review configured data services and communication gateways from the platform layer.',
        highlight: 'Service connectors',
      },
      {
        name: 'Coupons & Discount Engine',
        desc: 'Generate promotional coupon codes, percentage discounts, trial extensions, and partner referral incentives.',
        highlight: 'Coupon engine',
      },
      {
        name: 'Partner Referral Program',
        desc: 'Built-in multi-tier affiliate tracking, commission payouts, and partner portal for agency resellers.',
        highlight: 'Affiliate tracking',
      },
      {
        name: 'Platform-Wide Broadcasts',
        desc: 'Send maintenance notices, release notes, and banners to selected organizations.',
        highlight: 'Global alerts',
      },
    ],
  },
  communication: {
    title: 'Omnichannel Communication Engine',
    subtitle: 'Connect with prospects across voice, WhatsApp, SMS, email, and scheduled video meetings from one pane.',
    items: [
      {
        name: 'WhatsApp Business Messaging',
        desc: 'Coordinate supported message templates, reminders, and responses from the lead record.',
        highlight: 'Messaging context',
      },
      {
        name: '2-Way SMS Messaging',
        desc: 'Keep supported business SMS conversations and response history attached to the lead record.',
        highlight: 'Local 2-way SMS',
      },
      {
        name: 'Voice Telephony & Local Presence',
        desc: 'Use an in-browser calling workspace with configured caller context and lead information.',
        highlight: 'Calling context',
      },
      {
        name: 'Smart Email Tracking & Threading',
        desc: 'Full 2-way email sync with open/click tracking, attachment viewing telemetry, and bounce handling.',
        highlight: 'Read receipts',
      },
      {
        name: 'Voicemail Drop',
        desc: 'Use an approved pre-recorded voicemail where the configured calling workflow supports it.',
        highlight: 'Reusable voicemail',
      },
      {
        name: 'Web Callbacks & Inbound IVR',
        desc: 'Lead-to-call workflow connects website requests to an owned agent queue.',
        highlight: 'Connected lead routing',
      },
    ],
  },
};
