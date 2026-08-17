export const navLinks = [
  {
    label: 'Product',
    path: '/#product-showcase',
    hasMegaMenu: true,
    groups: [
      {
        title: 'Core Workspaces',
        items: [
          {
            name: 'Sales Rep Workspace',
            desc: 'High-velocity dialer, smart queue, AI sales copilot, and sequences.',
            icon: 'PhoneCall',
            tag: 'Real-time',
            path: '/#sales-workspace',
          },
          {
            name: 'Manager Command Center',
            desc: 'Live floor supervision, queue loads, pickup ratio, and whisper coaching.',
            icon: 'LayoutDashboard',
            tag: 'Live Ops',
            path: '/#manager-section',
          },
          {
            name: 'Agency & People Ops',
            desc: 'Automated payroll, attendance, leave, sales contests, and gamification.',
            icon: 'Users',
            tag: 'Automation',
            path: '/#agency-admin',
          },
          {
            name: 'Super Admin Multi-Tenant',
            desc: 'Multi-organization provisioning, ARR telemetry, and enterprise controls.',
            icon: 'ShieldCheck',
            tag: 'Enterprise',
            path: '/#super-admin',
          },
        ],
      },
      {
        title: 'Intelligence & Scale',
        items: [
          {
            name: 'AI Sales Intelligence',
            desc: 'Explain My Numbers, live call speech sentiment, objection handling.',
            icon: 'Sparkles',
            tag: 'AI Powered',
            path: '/#ai-intelligence',
          },
          {
            name: 'Interactive Tour',
            desc: 'Experience the 7-step lead-to-close operating workflow.',
            icon: 'PlayCircle',
            tag: 'Interactive',
            path: '#demo-trigger',
          },
        ],
      },
    ],
  },
  {
    label: 'Solutions',
    path: '/solutions',
  },
  {
    label: 'Platform',
    path: '/features',
  },
  {
    label: 'Resources',
    path: '/about',
  },
  {
    label: 'Pricing',
    path: '/pricing',
  },
];

export const footerLinks = {
  product: [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Leads', path: '/leads' },
    { label: 'Dialer', path: '/dialer' },
    { label: 'Analytics', path: '/analytics' },
    { label: 'AI Assistant', path: '/superadmin/ai-assistant' },
    { label: 'All 14 Modules', path: '/features' },
  ],
  solutions: [
    { label: 'Sales Teams', path: '/solutions#sales' },
    { label: 'Marketing & Growth', path: '/campaigns' },
    { label: 'Managers & Floor Ops', path: '/managers' },
    { label: 'Agencies & BPO', path: '/solutions#agencies' },
    { label: 'Enterprise Platforms', path: '/solutions#enterprise' },
  ],
  platform: [
    { label: 'Organizations', path: '/superadmin' },
    { label: 'Plans', path: '/superadmin/plans' },
    { label: 'Subscriptions', path: '/superadmin/subscriptions' },
    { label: 'Admin', path: '/superadmin' },
    { label: 'Security', path: '/about#security' },
  ],
  resources: [
    { label: 'Documentation', path: '/features' },
    { label: 'Help Center', path: '/contact' },
    { label: 'Interactive FAQ', path: '/#faq' },
    { label: 'API & Webhooks', path: '/features' },
    { label: 'Product Tour', path: '#demo-trigger' },
  ],
  company: [
    { label: 'About ODA7', path: '/about' },
    { label: 'Contact Sales', path: '/contact' },
    { label: 'Security & Compliance', path: '/about#security' },
    { label: 'Privacy Policy', path: '/about' },
    { label: 'Terms of Service', path: '/about' },
  ],
};
