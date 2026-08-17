import React, { useState, useRef } from 'react';
import { featureCategories, featuresByModule } from '../../data/featuresData';
import { Button } from '../common/Button';
import {
  PhoneCall,
  Sparkles,
  Users,
  DollarSign,
  Trophy,
  BarChart3,
  Settings,
  ShieldCheck,
  Inbox,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Activity,
  Layers,
  Zap,
} from 'lucide-react';

const iconComponents = {
  PhoneCall,
  Sparkles,
  Users,
  DollarSign,
  Trophy,
  BarChart3,
  Settings,
  ShieldCheck,
  Inbox,
};

// Item-specific real-world visuals, role badges, problems and outcomes for EVERY capability
const itemVisuals = {
  // Sales & Calling (12 items)
  'My Queue': {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    roleTag: 'SDR Queue Specialist',
    telemetry: 'Algorithmic Win Score: 96/100',
    problem: 'Sales reps waste up to 45% of their working hours cherry-picking lists and toggling tabs.',
    outcome: 'Algorithmic queue eliminates decision fatigue and guarantees <15s speed-to-lead SLA.',
  },
  'Smart Predictive Dialer': {
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80',
    roleTag: 'High-Velocity Account Executive',
    telemetry: '0.8s WebRTC Dialing • Local 512 Austin',
    problem: 'Slow browser softphones drop connection rates and create awkward 3-second connect delays.',
    outcome: 'Sub-second local presence dialing delivers a +34.8% verified answer rate lift.',
  },
  'Dynamic Sales Scripts': {
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Outbound Qualification Rep',
    telemetry: 'Interactive Branching Logic Active',
    problem: 'Junior reps stumble over complex pricing objections and fumbled competitor comparisons.',
    outcome: 'Interactive branching scripts guide reps with winning objection battlecards in real time.',
  },
  'Automated Sequences': {
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Inbound Growth & Sequence Strategist',
    telemetry: 'WhatsApp + SMS + Email Cadence Fired',
    problem: 'Leads go cold after 2 days because reps forget to send multi-touch follow-up cadences.',
    outcome: 'Automated omnichannel sequences keep follow-up cadences on autopilot across channels.',
  },
  'Unified Inbox': {
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Customer Communications Specialist',
    telemetry: '2-Way SMS & WhatsApp Unified',
    problem: 'Customer conversations are scattered across personal rep cellphones and unlogged chats.',
    outcome: 'Centralized omnichannel timeline on the lead record ensures complete communication auditability.',
  },
  'Instant Quotes & Proposals': {
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Commercial Deal Closer',
    telemetry: 'Digital e-Signature Signed in 42s',
    problem: 'Creating PDF proposals manually delays deal velocity and increases buyer drop-off.',
    outcome: '1-Click CPQ product bundles allow prospects to review and digitally sign on mobile.',
  },
  'Lead Management & Tagging': {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Pipeline Operations Manager',
    telemetry: 'Multi-Dimensional Tag Matrix Enforced',
    problem: 'Dirty data and missing custom fields cause misrouted leads and wasted ad spend.',
    outcome: 'Automated field enrichment, custom lifecycle stages, and bulk tag orchestration.',
  },
  'Call History & Recordings': {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
    roleTag: 'QA & Speech Compliance Lead',
    telemetry: 'Dual-Channel HD Audio & Transcript Synced',
    problem: 'Customer disputes and compliance issues take hours to investigate across call logs.',
    outcome: 'Dual-channel audio recording with instant speech-to-text transcript searchability.',
  },
  'Product Catalog': {
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Product & Pricing Administrator',
    telemetry: '28 SKUs & Recurring Billing Synced',
    problem: 'Reps quote outdated pricing tiers or calculate recurring discounts incorrectly.',
    outcome: 'Embedded product catalog ensures 100% pricing accuracy on every contract.',
  },
  'Company Hierarchy': {
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Enterprise Account Executive',
    telemetry: 'Parent & Subsidiary Tree Mapped',
    problem: 'Reps fail to map multiple buying committee stakeholders in enterprise accounts.',
    outcome: 'Visual parent-subsidiary account mapping keeps enterprise deals organized.',
  },
  'Calendar & Meeting Scheduler': {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Inbound Meeting Coordinator',
    telemetry: 'Google & Outlook 2-Way Calendar Synced',
    problem: 'Endless back-and-forth emails to schedule demo calls cause prospect drop-off.',
    outcome: 'Self-serve booking links with automated SMS and WhatsApp reminder cadences.',
  },
  'Sales Dashboard': {
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Inside Sales Top Performer',
    telemetry: 'Personal Quota Pace: 124% Achieved',
    problem: 'Reps lack clarity on daily activity targets and expected commission earnings.',
    outcome: 'Personalized command center tracking calls, connect rates, and live earnings.',
  },

  // AI Intelligence (7 items)
  'Explain My Numbers': {
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Revenue Operations Director',
    telemetry: 'Natural Language SQL Synthesis Done',
    problem: 'Executives wait days for data engineers to write SQL queries on sales drops.',
    outcome: 'Plain-English conversational BI answers complex revenue questions in seconds.',
  },
  'Real-time Objection Buster': {
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Active Sales Rep on Call',
    telemetry: 'Speech AI: Competitor Battlecard Displayed',
    problem: 'Reps freeze when prospects introduce unexpected pricing or feature objections.',
    outcome: 'Real-time speech listener flashes winning talking points directly on screen.',
  },
  'Predictive Lead Scoring': {
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Growth Marketing Scientist',
    telemetry: 'ML Intent & Firmographic Score: 94',
    problem: 'Sales teams waste hours calling low-intent leads while high-value buyers slip away.',
    outcome: 'Machine learning scores inbound prospects 1-100 to maximize rep closing velocity.',
  },
  'AI Post-Call Summarization': {
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Account Executive',
    telemetry: 'Action Items & CRM Stage Updated',
    problem: 'Manual call logging takes 10+ minutes per dial and loses critical meeting nuances.',
    outcome: 'Automated AI call summaries surface action items and sync deal stages instantly.',
  },
  'AI Sales Recommendations': {
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Sales Enablement Manager',
    telemetry: 'Optimal Pitch Time: 2:15 PM Detected',
    problem: 'Reps guess the best outreach time and pitch angles based on gut feel.',
    outcome: 'Prescriptive next-best-actions recommend ideal call windows and customized hooks.',
  },
  'Automated Insight Alerts': {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
    roleTag: 'VP of Inside Sales',
    telemetry: 'Anomaly Alert: Connect Surge +18%',
    problem: 'Pipeline slowdowns and carrier connection dips go unnoticed until month-end.',
    outcome: 'Proactive machine alerts flag floor velocity bottlenecks before revenue suffers.',
  },
  'AI Sales Assistant Copilot': {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Inside Sales Specialist',
    telemetry: 'Contextual Follow-up Email Drafted',
    problem: 'Writing bespoke follow-up proposals after every call bottlenecks rep capacity.',
    outcome: 'Personal AI copilot drafts contextual email follow-ups based on call transcripts.',
  },

  // People & Floor Ops (7 items)
  'Real-time Floor Queue Monitor': {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Floor Operations Director',
    telemetry: '18 Active Calls • 0s Answer Lag',
    problem: 'Floor supervisors have zero live visibility into incoming call spikes and queue wait times.',
    outcome: 'Sub-second queue telemetry ensures zero customer abandon rate during peak surges.',
  },
  'Agent Status Grid & Whispering': {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Supervisor & Floor Coach',
    telemetry: '24ms Whisper Stream Active',
    problem: 'Managers can only coach reps post-call after high-value deals have already been lost.',
    outcome: '1-Click silent listen and headset whisper coaching rescues live deals on the fly.',
  },
  'Department & Team Hierarchy': {
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Workforce Organization Architect',
    telemetry: '6 Squads & 4 Regional Pods Mapped',
    problem: 'Complex sales organizations suffer from chaotic lead routing across territories.',
    outcome: 'Structured squads, pods, and territory boundaries with dedicated queue routing.',
  },
  'Automated Onboarding Workflows': {
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Sales Enablement & HR Lead',
    telemetry: 'Ramp-to-Productive Time: 4.2 Days',
    problem: 'Ramping new sales hires takes 6+ weeks with manual script roleplay certifications.',
    outcome: 'Standardized onboarding tracks with automated script certs accelerate ramp time by 3x.',
  },
  'Attendance & Clock-in/out': {
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Workforce Governance Officer',
    telemetry: 'Geo-Verified Browser Attendance Active',
    problem: 'Disconnect between timecard spreadsheets and actual softphone availability.',
    outcome: 'Shift attendance tied directly to dialer readiness guarantees 98.4% roster compliance.',
  },
  'Leave & PTO Management': {
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80',
    roleTag: 'People Operations Manager',
    telemetry: 'Auto Queue Re-route on Leave Trigger',
    problem: 'Leads stall in queues assigned to reps who are out on vacation or sick leave.',
    outcome: 'Self-serve PTO requests automatically re-route lead queues to active floor reps.',
  },
  'Manager Live Scorecard': {
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Floor Operations Lead',
    telemetry: 'Team Benchmark: +28% Connect Ratio',
    problem: 'Supervisors struggle to identify which reps are underperforming in real time.',
    outcome: 'Live team scorecard benchmarks pickup ratios, talk time, and deal stage velocity.',
  },

  // Compensation & Payroll (5 items)
  'Real-time Commission Engine': {
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Account Executive Leader',
    telemetry: '+$4,800 Commission Credited Live',
    problem: 'Reps wait 30+ days to find out their commission payout, dampening motivation.',
    outcome: 'Instant wallet credit the second a deal hits Closed-Won ignites sales velocity.',
  },
  'Automated Payroll Calculation': {
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Finance & Payroll Administrator',
    telemetry: '1-Click Batch Payroll Reconciled',
    problem: 'Finance teams spend days reconciling base salary, overtime, and tier accelerators.',
    outcome: '1-Click automated payroll calculations eliminate spreadsheet errors completely.',
  },
  'Digital Payslip Distribution': {
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
    roleTag: 'HR Operations Specialist',
    telemetry: 'Itemized PDF Payslips Dispatched',
    problem: 'Employees submit repetitive dispute tickets questioning compensation breakdowns.',
    outcome: 'Itemized digital PDF payslips provide 100% transparency into pay, taxes, and bonuses.',
  },
  'Dynamic Incentive Plans (SPIFFs)': {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Sales Floor Director',
    telemetry: 'Weekend Flash SPIFF: $250 Bonus/Close',
    problem: 'Launching flash contests requires manual tracking and delayed reward distribution.',
    outcome: 'Automated flash incentives and product SPIFF triggers boost weekend push effort by 25%.',
  },
  'Quota Pacing & Accelerator Rules': {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Revenue Operations Head',
    telemetry: '120% Quota Accelerator Triggered',
    problem: 'Complex multi-tier accelerator formulas result in payroll calculation disputes.',
    outcome: 'Automated tier stepping incentivizes reps to exceed 100% quota targets.',
  },

  // Engagement & Contests (4 items)
  'Live Sales Floor Leaderboards': {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Inside Sales Floor Champion',
    telemetry: 'TV Broadcast Mode • Confetti Celebration',
    problem: 'Remote and hybrid reps feel isolated without visible sales floor energy.',
    outcome: 'TV-mode broadcast leaderboards broadcast real-time wins and deals across screens.',
  },
  'Custom Sales Contests & Battles': {
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Squad Revenue Duelist',
    telemetry: 'Pod Alpha vs Pod Beta Duel Live',
    problem: 'Static monthly sales targets fail to generate urgency during mid-month slumps.',
    outcome: 'Head-to-head rep duels and squad tournaments ignite friendly competition.',
  },
  'Achievement Badges & Milestones': {
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Milestone Award Winner',
    telemetry: '$100k Month Trophy Unlocked',
    problem: 'Reps feel undervalued when major professional milestones go unrecognized.',
    outcome: 'Collectible milestone badges celebrate first cold closes, dial records, and ARR milestones.',
  },
  'Company Announcements & Kudos': {
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Executive Communications Lead',
    telemetry: 'Floor-Wide Shoutout Broadcast',
    problem: 'Critical company announcements get lost in crowded Slack channels and email inboxes.',
    outcome: 'Broadcast executive kudos and urgent operational updates directly to rep screens.',
  },

  // Insights & Analytics (4 items)
  'Hour-by-Hour Call Heatmaps': {
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Revenue Telemetry Analyst',
    telemetry: 'Peak Window: 2 PM - 4 PM Austin Identified',
    problem: 'Sales teams waste hundreds of hours calling prospects during dead connection windows.',
    outcome: 'Hour-by-hour pickup ratio heatmaps pinpoint the exact peak answer windows per timezone.',
  },
  'Executive Revenue Dashboard': {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Chief Revenue Officer',
    telemetry: '$184.2k Monthly MRR Paced (114%)',
    problem: 'C-level executives lack consolidated visibility into pipeline velocity and CAC.',
    outcome: 'Executive dashboard unifies pipeline pacing, LTV, and cohort conversion telemetry.',
  },
  'Pickup Ratio & Conversion Telemetry': {
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Telephony Carrier Specialist',
    telemetry: 'Carrier Route Health: 99.98% Clean',
    problem: 'Spam flags and poor carrier routing degrade pickup connection rates invisibly.',
    outcome: 'Granular analytics drill down by carrier pool, area code, and lead source to fix leaks.',
  },
  'Custom Scheduled BI Reports': {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Business Intelligence Architect',
    telemetry: 'Automated Monday 8 AM PDF Dispatched',
    problem: 'Manual report compilation wastes leadership hours every Monday morning.',
    outcome: 'Automated executive PDF and CSV summaries delivered on schedule with zero effort.',
  },

  // Administration & Roles (8 items)
  'Granular Roles & Permissions': {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Enterprise Security Officer',
    telemetry: 'Field-Level Masking & RBAC Active',
    problem: 'Junior staff having unrestricted access to sensitive customer phone numbers and data.',
    outcome: 'Enterprise role-based access control (RBAC) with field-level masking and queue rules.',
  },
  'Immutable Audit Logs': {
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Compliance & Governance Lead',
    telemetry: 'Tamper-Proof Audit Trail Recorded',
    problem: 'Organizations fail security compliance audits without verifiable data access records.',
    outcome: 'Tamper-proof logs record every user login, record export, call recording access, and edit.',
  },
  'Email & WhatsApp Template Studio': {
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Marketing Brand Manager',
    telemetry: 'Dynamic Merge Variables & Media Studio',
    problem: 'Reps send off-brand emails and unapproved WhatsApp copies with formatting bugs.',
    outcome: 'Visual template studio with dynamic merge tags, interactive buttons, and brand controls.',
  },
  'Custom Webhooks & Integrations': {
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Integration Engineer',
    telemetry: 'Event-Driven REST Webhooks Fired',
    problem: 'Connecting modern CRM data to internal systems requires tedious custom middleware.',
    outcome: 'Event-driven webhooks fire on lead creation, call completion, and Closed-Won deal events.',
  },
  'Notification Routing Rules': {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Operations Administrator',
    telemetry: 'Slack & SMS Escalation Active',
    problem: 'High-intent enterprise demo requests sit unnoticed in email inboxes for hours.',
    outcome: 'Instant multi-channel alerts route to Slack, SMS, and WhatsApp with escalation rules.',
  },
  'Scheduled Data Reports': {
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Data Warehouse Architect',
    telemetry: 'Snowflake & BigQuery ETL Synced',
    problem: 'Siloed CRM data prevents holistic business intelligence and cross-stack data modeling.',
    outcome: 'Automated background ETL jobs sync ODA7 data directly to Snowflake, BigQuery, and S3.',
  },
  'Subscription & Invoicing Center': {
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Finance Controller',
    telemetry: 'Usage Meters & VAT Invoicing Center',
    problem: 'Managing telephony minutes, user seat add-ons, and VAT receipts manually causes friction.',
    outcome: 'Self-serve billing portal with transparent usage metering and instant VAT invoice downloads.',
  },
  'System Branding & White-labeling': {
    image: '/oda7-leadership-analytics.jpg',
    roleTag: 'Platform Managing Director',
    telemetry: 'Custom CNAME & Portal Branding Active',
    problem: 'Agencies and enterprises need a bespoke branded portal matching their client identity.',
    outcome: 'Custom CNAME domains, custom logos, and bespoke color themes for all client interfaces.',
  },

  // Super Admin Multi-Tenant (8 items)
  'Multi-Tenant Organization Management': {
    image: '/oda7-leadership-analytics.jpg',
    roleTag: 'Platform Managing Director',
    telemetry: '48 Independent Tenant Orgs Active',
    problem: 'Hosting multiple client organizations in a single workspace creates massive security risks.',
    outcome: '100% database schema and telephony isolation for hundreds of independent client orgs.',
  },
  'SaaS Plans & Subscription Engine': {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
    roleTag: 'SaaS Business Architect',
    telemetry: 'Tiered Pricing & Minute Bundles Enforced',
    problem: 'Building subscription billing and seat limits in-house requires months of engineering.',
    outcome: 'Built-in SaaS plan engine manages seat pricing tiers, call bundles, and enterprise terms.',
  },
  'Platform Revenue & MRR Telemetry': {
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Chief Financial Officer',
    telemetry: 'Consolidated ARR: $2.4M Live',
    problem: 'Managing Directors lack aggregated revenue analytics across all tenant organizations.',
    outcome: 'Consolidated platform-level ARR, MRR, churn rate, and tenant lifetime value command.',
  },
  'Global IP Blocker & Threat Defense': {
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Cybersecurity Operations Lead',
    telemetry: 'Global Threat Shield Active',
    problem: 'DDoS attacks and malicious login attempts threaten platform uptime and reputation.',
    outcome: 'Platform-wide security shield bans malicious IP ranges and blocks brute force attempts.',
  },
  'Data Platform Connectors': {
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Global Infrastructure Lead',
    telemetry: 'Multi-Region Telephony Gateway Online',
    problem: 'Managing global carrier routes and vector databases across regions causes latency.',
    outcome: 'Centralized management of global data streams, multi-region clusters, and SIP gateways.',
  },
  'Coupons & Discount Engine': {
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Growth Marketing Director',
    telemetry: 'Promo Code & Trial Extension Generated',
    problem: 'Sales cannot create time-sensitive promotional codes or custom enterprise discounts.',
    outcome: 'Dynamic coupon engine creates percentage discounts, free trials, and partner credits.',
  },
  'Partner Referral Program': {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Affiliate & Partner Manager',
    telemetry: 'Multi-Tier Agency Affiliate Engine',
    problem: 'Tracking agency reseller commissions and affiliate signups manually is error-prone.',
    outcome: 'Automated multi-tier affiliate tracking and partner revenue share payouts.',
  },
  'Platform-Wide Broadcasts': {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Master Console Operator',
    telemetry: 'Release Notes Broadcast to 48 Orgs',
    problem: 'Communicating urgent maintenance notices to all client organizations is disjointed.',
    outcome: 'Dispatch global alert banners and product release notes to all client portals with 1 click.',
  },

  // Omnichannel (6 items)
  'Official WhatsApp Business API': {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    roleTag: 'WhatsApp Channel Specialist',
    telemetry: 'Verified Green Badge WhatsApp API',
    problem: 'Using unverified personal WhatsApp numbers leads to banned numbers and lost chats.',
    outcome: 'Official Meta Business API supports verified broadcasts, buttons, and automated cadences.',
  },
  '2-Way SMS Messaging': {
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Inside Sales Outreach Rep',
    telemetry: 'Local 2-Way SMS Connected',
    problem: 'Prospects ignore cold emails while SMS response rates exceed 45% within 90 seconds.',
    outcome: 'Dedicated local phone numbers for bidirectional SMS chat, keyword triggers, and media.',
  },
  'Voice Telephony & Local Presence': {
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80',
    roleTag: 'High-Velocity Outbound SDR',
    telemetry: 'Local Presence Area Match Active',
    problem: 'Out-of-state caller IDs result in 80%+ call rejection and spam flagging.',
    outcome: 'Dynamic local presence matches prospect area codes to deliver +34.8% pickup lift.',
  },
  'Smart Email Tracking & Threading': {
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Enterprise Account Executive',
    telemetry: 'Real-Time Email Open & Link Click Alert',
    problem: 'Reps have no idea when prospects open proposals or view pricing attachments.',
    outcome: 'Full 2-way email sync with real-time read receipts, click tracking, and thread history.',
  },
  'Voicemail Drop (1-Click)': {
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Outbound Sales Rep',
    telemetry: 'Personalized Voicemail Dropped in 1 Click',
    problem: 'Leaving manual voicemails 40 times a day wastes up to an hour of valuable calling time.',
    outcome: '1-Click pre-recorded voicemail drop lets reps move immediately to the next live dial.',
  },
  'Web Callbacks & Inbound IVR': {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Inbound Response SDR',
    telemetry: '<15s Inbound Web Callback Connected',
    problem: 'Website visitors requesting a demo wait hours for an email callback.',
    outcome: 'Instant web-to-call bridge dials active agents and connects prospects in under 15 seconds.',
  },
};

export const FeatureExplorer = () => {
  const [selectedCatId, setSelectedCatId] = useState('sales');
  const [selectedItemIdx, setSelectedItemIdx] = useState(0);
  const scrollContainerRef = useRef(null);

  const currentModule = featuresByModule[selectedCatId] || featuresByModule.sales;
  const currentItem = currentModule.items[selectedItemIdx] || currentModule.items[0];

  // Look up item-specific visual, or fall back to default
  const visual = itemVisuals[currentItem.name] || {
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80',
    roleTag: 'Revenue Operations Specialist',
    telemetry: 'ODA7 Synchronized Live',
    problem: 'Scattered tools and manual workflows slow down execution velocity.',
    outcome: 'Unified data mesh accelerates team productivity and conversion rates.',
  };

  const handleCategoryChange = (catId) => {
    setSelectedCatId(catId);
    setSelectedItemIdx(0);
  };

  const handleNextFeature = () => {
    setSelectedItemIdx((prev) => (prev + 1) % currentModule.items.length);
  };

  const handlePrevFeature = () => {
    setSelectedItemIdx((prev) => (prev - 1 + currentModule.items.length) % currentModule.items.length);
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -260, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 260, behavior: 'smooth' });
    }
  };

  return (
    <section id="capabilities" className="section-wrapper" style={{ position: 'relative' }}>
      <div className="container-wide">
        
        {/* Section Hero Introduction */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 40px auto' }}>
          <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
            <span className="badge badge-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Layers size={14} color="#38bdf8" />
              <span>THE ODA7 CAPABILITY MATRIX</span>
            </span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
              fontWeight: '850',
              color: 'var(--oda-text-primary)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '18px',
            }}
          >
            Everything your revenue{' '}
            <span className="text-gradient-accent">operation needs.</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
              color: 'var(--oda-text-secondary)',
              lineHeight: 1.6,
              marginBottom: '28px',
            }}
          >
            From the first cold lead to the final commission payout, ODA7 connects sales execution, people operations, AI intelligence, and business performance in one unified workspace.
          </p>

          {/* Dataset Metric Proof Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
            <span className="badge badge-cyan" style={{ fontSize: '0.8125rem', padding: '6px 14px' }}>
              61+ Deep Capabilities
            </span>
            <span className="badge badge-primary" style={{ fontSize: '0.8125rem', padding: '6px 14px' }}>
              9 Core Platform Modules
            </span>
            <span className="badge badge-emerald" style={{ fontSize: '0.8125rem', padding: '6px 14px' }}>
              One Synchronous Data Mesh
            </span>
          </div>
        </div>

        {/* Horizontal Category Navigation Bar with Scroll Buttons & Custom Scrollbar */}
        <div className="category-nav-scroll-container">
          <button
            onClick={handleScrollLeft}
            className="category-scroll-btn"
            aria-label="Scroll categories left"
          >
            <ChevronLeft size={18} />
          </button>

          <div
            ref={scrollContainerRef}
            className="category-nav-bar"
            style={{ flex: 1 }}
          >
            {featureCategories.map((cat) => {
              const IconComp = iconComponents[cat.icon] || Sparkles;
              const isSelected = selectedCatId === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 18px',
                    borderRadius: '24px',
                    background: isSelected ? 'var(--oda-primary)' : 'var(--oda-surface)',
                    border: isSelected ? '1px solid var(--oda-primary-light)' : '1px solid var(--oda-border)',
                    color: isSelected ? '#ffffff' : 'var(--oda-text-secondary)',
                    fontWeight: isSelected ? '750' : '600',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-heading)',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isSelected ? '0 0 18px rgba(37, 99, 235, 0.4)' : 'none',
                    flexShrink: 0,
                  }}
                >
                  <IconComp size={16} />
                  <span>{cat.label}</span>
                  <span
                    style={{
                      fontSize: '0.6875rem',
                      padding: '2px 7px',
                      borderRadius: '10px',
                      background: isSelected ? 'rgba(0,0,0,0.25)' : 'var(--oda-primary-soft)',
                      color: isSelected ? '#fff' : 'var(--oda-text-muted)',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: '700',
                    }}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          <button
            onClick={handleScrollRight}
            className="category-scroll-btn"
            aria-label="Scroll categories right"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Compact Capability Selector Chips for Active Category */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '28px',
            maxWidth: '1240px',
            marginInline: 'auto',
          }}
        >
          {currentModule.items.map((item, idx) => {
            const isActive = selectedItemIdx === idx;
            return (
              <button
                key={item.name}
                onClick={() => setSelectedItemIdx(idx)}
                style={{
                  padding: '9px 15px',
                  borderRadius: '10px',
                  background: isActive ? 'var(--oda-primary)' : 'var(--oda-surface)',
                  border: isActive ? '1px solid var(--oda-primary-light)' : '1px solid var(--oda-border)',
                  color: isActive ? '#ffffff' : 'var(--oda-text-secondary)',
                  fontSize: '0.8125rem',
                  fontWeight: isActive ? '800' : '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isActive ? '0 0 16px rgba(37, 99, 235, 0.35)' : 'none',
                  transform: isActive ? 'translateY(-1px)' : 'none',
                }}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        {/* Large Interactive Showcase Panel (Dynamic photo & data changes per option click) */}
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto 36px auto',
            borderRadius: '28px',
            padding: 'clamp(28px, 4.5vw, 52px)',
          }}
          key={`${selectedCatId}-${selectedItemIdx}-${currentItem.name}`}
          className="feature-showcase-panel capability-experience animate-fadeIn"
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(320px, 1fr) minmax(320px, 1.25fr)',
              gap: 'clamp(32px, 5vw, 56px)',
              alignItems: 'center',
            }}
            className="mockup-grid-2col"
          >
            {/* Left Column: Dynamic Real-World Human Photo per Option */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '480px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)',
                }}
              >
                <img
                  src={visual.image}
                  alt={currentItem.name}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    display: 'block',
                    filter: 'contrast(1.05) brightness(0.96)',
                    transition: 'all 0.4s ease',
                  }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(7, 10, 18, 0.9) 100%)' }} />

                {/* Floating Top Left Role Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '18px',
                    left: '18px',
                    background: 'rgba(11, 15, 23, 0.92)',
                    backdropFilter: 'blur(10px)',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#fff',
                    fontSize: '0.785rem',
                    fontWeight: '700',
                  }}
                >
                  {visual.roleTag}
                </div>

                {/* Floating Bottom Live Telemetry Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    right: '20px',
                    background: 'rgba(11, 15, 23, 0.94)',
                    backdropFilter: 'blur(14px)',
                    padding: '12px 18px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: '750' }}>{currentItem.name}</div>
                    <div style={{ color: '#38bdf8', fontSize: '0.72rem', fontWeight: '600' }}>{visual.telemetry}</div>
                  </div>
                  <span className="badge badge-emerald" style={{ fontSize: '0.6875rem' }}>
                    {currentItem.highlight}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Capability Storytelling (Problem → Capability → Experience → Outcome) */}
            <div className="capability-experience-copy">
              {/* Category & Badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <span className="badge badge-primary">
                  {currentModule.title}
                </span>
                <span className="badge badge-cyan">
                  {currentItem.highlight}
                </span>
              </div>

              {/* Capability Name */}
              <h3
                style={{
                  fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)',
                  fontWeight: '850',
                  color: 'var(--oda-text-primary)',
                  lineHeight: 1.15,
                  marginBottom: '14px',
                  letterSpacing: '-0.02em',
                }}
              >
                {currentItem.name}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: 'var(--oda-text-secondary)',
                  fontSize: '1rem',
                  lineHeight: '1.65',
                  marginBottom: '24px',
                }}
              >
                {currentItem.desc}
              </p>

              <div className="capability-live-state" aria-label={`${currentItem.name} live product state`}>
                <div className="capability-live-top"><span><i /> Live ODA7 state</span><small>{currentModule.title}</small></div>
                <div className="capability-live-grid">
                  <span><small>Workflow</small><strong>{currentItem.name}</strong></span>
                  <span><small>Signal</small><strong>{currentItem.highlight}</strong></span>
                  <span><small>Context</small><strong>Connected workspace</strong></span>
                </div>
              </div>

              {/* Storytelling Problem → Outcome Flow Box */}
              <div
                style={{
                  borderRadius: '16px',
                  padding: '18px 20px',
                  marginBottom: '28px',
                }}
                className="feature-flow-box"
              >
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ color: '#ef4444', fontSize: '0.72rem', fontWeight: '750', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '3px' }}>
                    Real-World Operational Friction:
                  </div>
                  <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.85rem', lineHeight: '1.45' }}>
                    {visual.problem}
                  </div>
                </div>

                <div style={{ paddingTop: '12px', borderTop: '1px solid var(--oda-border-subtle)' }}>
                  <div style={{ color: '#10b981', fontSize: '0.72rem', fontWeight: '750', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '3px' }}>
                    Verified ODA7 Outcome:
                  </div>
                  <div style={{ color: '#10b981', fontSize: '0.875rem', fontWeight: '700', lineHeight: '1.45' }}>
                    {visual.outcome}
                  </div>
                </div>
              </div>

              {/* Navigation Controls: Explore next capability */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button
                    onClick={handlePrevFeature}
                    className="category-scroll-btn"
                    aria-label="Previous capability"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <button
                    onClick={handleNextFeature}
                    className="category-scroll-btn"
                    aria-label="Next capability"
                  >
                    <ChevronRight size={18} />
                  </button>

                  <span style={{ color: 'var(--oda-text-muted)', fontSize: '0.8125rem', fontFamily: 'var(--font-mono)' }}>
                    {selectedItemIdx + 1} of {currentModule.items.length} capabilities
                  </span>
                </div>

                <Button
                  to="/features"
                  variant="primary"
                  size="sm"
                  iconRight="ArrowRight"
                >
                  Explore platform catalog
                </Button>
              </div>

            </div>
          </div>
        </div>

        {/* "Explore the Platform" Ending Banner */}
        <div
          className="card-saas"
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '24px 32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '18px',
          }}
        >
          <div>
            <div style={{ fontWeight: '850', color: 'var(--oda-text-primary)', fontSize: '1.15rem' }}>
              One workspace. Every operational layer connected.
            </div>
            <div style={{ color: 'var(--oda-text-secondary)', fontSize: '0.85rem', marginTop: '3px' }}>
              Sales • People • Compensation • Engagement • Insights • AI Copilot • Administration
            </div>
          </div>

          <Button to="/features" variant="secondary" size="md" iconRight="ArrowRight">
            View Complete 61+ Capability Catalog
          </Button>
        </div>

      </div>
    </section>
  );
};
