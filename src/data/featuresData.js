export const featureCategories = [
  { id: 'sales', label: 'Sales & Calling', icon: 'PhoneCall', count: 12 },
  { id: 'ai', label: 'AI Intelligence', icon: 'Sparkles', count: 7 },
  { id: 'people', label: 'People & Floor Ops', icon: 'Users', count: 7 },
  { id: 'compensation', label: 'Compensation & Payroll', icon: 'DollarSign', count: 5 },
  { id: 'engagement', label: 'Engagement & Contests', icon: 'Trophy', count: 4 },
  { id: 'insights', label: 'Insights & Heatmaps', icon: 'BarChart3', count: 4 },
  { id: 'admin', label: 'Administration & Roles', icon: 'Settings', count: 8 },
  { id: 'super-admin', label: 'Super Admin Multi-Tenant', icon: 'ShieldCheck', count: 15 },
  { id: 'communication', label: 'Omnichannel & Inbox', icon: 'Inbox', count: 6 },
];

export const featuresByModule = {
  sales: {
    title: 'Sales Operations & Rep Velocity',
    subtitle: 'From inbound lead capture to instant predictive dialing and automated follow-ups.',
    items: [
      {
        name: 'My Queue',
        desc: 'Dynamic prioritized lead queue with intelligent algorithmic ranking based on deal score and timezone.',
        highlight: 'Zero idle time',
      },
      {
        name: 'Smart Predictive Dialer',
        desc: 'High-volume integrated dialer with sub-second call setup, local presence dialing, and zero dropped connections.',
        highlight: '<1s call connection',
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
        name: 'Instant Quotes & Proposals',
        desc: 'Generate, send, and track CPQ quotes with live client signature notifications and CRM sync.',
        highlight: '1-click CPQ',
      },
      {
        name: 'Lead Management & Tagging',
        desc: 'Multi-dimensional lead filtering, custom field enrichment, pipeline stages, and bulk actions.',
        highlight: 'Custom fields',
      },
      {
        name: 'Call History & Recordings',
        desc: 'Dual-channel crystal audio recording, automatic speech-to-text transcription, and searchable transcripts.',
        highlight: 'Dual-channel audio',
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
        desc: 'Frictionless meeting booking links synced with Google Calendar and Outlook with auto-reminders.',
        highlight: '2-way calendar sync',
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
        desc: 'Natural language sales intelligence. Ask complex questions like "Why did conversions dip in EMEA?" and get instant data synthesis.',
        highlight: 'Natural language SQL',
      },
      {
        name: 'Real-time Objection Buster',
        desc: 'Live speech analysis that listens during calls and flashes instant battlecards when price or competitor objections arise.',
        highlight: 'Live speech coaching',
      },
      {
        name: 'Predictive Lead Scoring',
        desc: 'Machine learning models scoring inbound prospects 1-100 based on firmographics, behavior, and intent signals.',
        highlight: 'ML scoring model',
      },
      {
        name: 'AI Post-Call Summarization',
        desc: 'Automatically extracts action items, sentiment score, prospect pain points, and updates CRM fields in under 3 seconds.',
        highlight: 'Zero manual data entry',
      },
      {
        name: 'AI Sales Recommendations',
        desc: 'Prescriptive next-best-actions suggesting optimal call times, pitch strategies, and sequence steps per prospect.',
        highlight: 'Actionable guidance',
      },
      {
        name: 'Automated Insight Alerts',
        desc: 'Proactive anomaly detection flagging rep burnout risks, deal velocity slowdowns, and surging objection topics.',
        highlight: 'Anomaly detection',
      },
      {
        name: 'AI Sales Assistant Copilot',
        desc: 'Personal AI agent capable of drafting contextual replies, composing follow-up emails, and prepping rep call briefings.',
        highlight: 'Contextual briefing',
      },
    ],
  },
  people: {
    title: 'People Operations & Floor Management',
    subtitle: 'Run the entire sales floor with real-time visibility, agent management, and workforce governance.',
    items: [
      {
        name: 'Real-time Floor Queue Monitor',
        desc: 'Live oversight of queue load, waiting leads, active concurrent calls, and floor availability.',
        highlight: 'Real-time telemetry',
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
        desc: 'Standardized onboarding paths with script certifications, mock call scoring, and automated access provisioning.',
        highlight: 'Fast ramp time',
      },
      {
        name: 'Attendance & Clock-in/out',
        desc: 'Geo-verified biometric or browser time-tracking integrated directly with agent shift availability.',
        highlight: 'Shift tracking',
      },
      {
        name: 'Leave & PTO Management',
        desc: 'Self-serve vacation and sick leave requests with approval chains and automatic queue load re-routing.',
        highlight: 'Auto queue re-route',
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
    subtitle: 'Automate complex commission structures, track earnings live, and generate accurate payslips with zero disputes.',
    items: [
      {
        name: 'Real-time Commission Engine',
        desc: 'Reps see their commission balance update the instant a deal moves to Closed-Won. Tiered, flat, and accelerator rules.',
        highlight: 'Instant gratification',
      },
      {
        name: 'Automated Payroll Calculation',
        desc: 'Calculate base salary, overtime, commissions, clawbacks, and bonuses with one-click payroll exports.',
        highlight: 'Zero payroll errors',
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
        desc: 'Automatic tier stepping (e.g. 100% quota = 10% commission; 120% quota = 18% accelerator bonus).',
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
        desc: 'Unlock collectible performance badges for first $100k month, 1,000 cold calls, or 50% pickup ratio.',
        highlight: 'Milestone rewards',
      },
      {
        name: 'Company Announcements & Kudos',
        desc: 'Broadcast executive shout-outs, win banners, and policy updates directly to every agent workspace.',
        highlight: 'Instant broadcasting',
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
        desc: 'Comprehensive tamper-proof security log recording every login, record export, call download, and permission change.',
        highlight: 'Compliance ready',
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
        desc: 'Set recurring background ETL jobs to sync oda7 data to Snowflake, BigQuery, or Amazon S3.',
        highlight: 'Data warehouse sync',
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
        desc: 'Provision, suspend, scale, and manage hundreds of independent tenant organizations from a master console.',
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
        desc: 'Manage global data streams, multi-region database clusters, vector embeddings, and telephony gateways.',
        highlight: 'Multi-region mesh',
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
        desc: 'Send urgent maintenance notices, release notes, and banners to all or selected tenant organizations instantly.',
        highlight: 'Global alerts',
      },
    ],
  },
  communication: {
    title: 'Omnichannel Communication Engine',
    subtitle: 'Connect with prospects across voice, WhatsApp, SMS, email, and scheduled video meetings from one pane.',
    items: [
      {
        name: 'Official WhatsApp Business API',
        desc: 'Send verified broadcast campaigns, automated reminders, and interactive message buttons directly from the lead record.',
        highlight: 'Verified WhatsApp API',
      },
      {
        name: '2-Way SMS Messaging',
        desc: 'Dedicated local business phone numbers with instant bidirectional SMS chat, keyword triggers, and media support.',
        highlight: 'Local 2-way SMS',
      },
      {
        name: 'Voice Telephony & Local Presence',
        desc: 'High-definition WebRTC in-browser softphone with auto-matched local area codes to increase answer rates.',
        highlight: 'Calling context',
      },
      {
        name: 'Smart Email Tracking & Threading',
        desc: 'Full 2-way email sync with open/click tracking, attachment viewing telemetry, and bounce handling.',
        highlight: 'Read receipts',
      },
      {
        name: 'Voicemail Drop (1-Click)',
        desc: 'When an answering machine is reached, drop a pre-recorded personalized voicemail with one click and move to the next call.',
        highlight: '1-click drop',
      },
      {
        name: 'Web Callbacks & Inbound IVR',
        desc: 'Instant lead-to-call bridge connects website demo requests to an active agent in under 15 seconds.',
        highlight: '<15s speed to lead',
      },
    ],
  },
};
