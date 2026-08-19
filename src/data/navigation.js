import { productPages, solutionPages } from './marketingPages';

const productDescriptions = {
  leads: 'Capture, qualify and distribute every opportunity.',
  dialer: 'Power the calling workflow with lead context.',
  calls: 'Connect conversation activity to the next action.',
  inbox: 'Keep conversations organized around ownership.',
  calendar: 'Coordinate follow-ups with the work itself.',
  campaigns: 'Connect campaigns to leads and outcomes.',
  products: 'Keep product context close to every opportunity.',
  scripts: 'Guide better, more consistent conversations.',
  sequences: 'Create visible, repeatable follow-up rhythms.',
  quotes: 'Move from conversation to clear proposal.',
};

export const productNavItems = Object.entries(productPages).map(([slug, page]) => ({
  name: page.label,
  desc: productDescriptions[slug],
  icon: page.icon,
  path: `/product/${slug}`,
}));

export const solutionNavItems = Object.entries(solutionPages).map(([slug, page]) => ({
  name: page.label,
  desc: page.intro,
  icon: page.icon,
  path: `/solutions/${slug}`,
}));

export const resourceNavItems = [
  { name: 'Documentation', desc: 'Explore ODA7 modules and product capabilities.', icon: 'BookOpen', path: '/resources#documentation' },
  { name: 'Help & Support', desc: 'Find the right path for product and account questions.', icon: 'LifeBuoy', path: '/resources#support' },
  { name: 'FAQs', desc: 'Review common product and implementation questions.', icon: 'CircleHelp', path: '/resources#faqs' },
  { name: 'Product guides', desc: 'Follow practical workflows across the ODA7 platform.', icon: 'PanelsTopLeft', path: '/resources#guides' },
  { name: 'Contact', desc: 'Talk with ODA7 about your operating workflow.', icon: 'Mail', path: '/contact' },
  { name: 'System information', desc: 'Review platform administration and operating context.', icon: 'Info', path: '/resources#system-information' },
];

export const platformNavItems = [
  { name: 'Sales workspace', desc: 'Connect leads, calls, scripts, sequences and quotes.', icon: 'LayoutDashboard', path: '/platform#sales' },
  { name: 'People management', desc: 'Organize agents, managers, teams and departments.', icon: 'Users', path: '/platform#people' },
  { name: 'Attendance', desc: 'Keep leave and availability visible to operations.', icon: 'CalendarDays', path: '/platform#attendance' },
  { name: 'Compensation', desc: 'Connect salary, payroll and incentives to performance.', icon: 'ReceiptText', path: '/platform#compensation' },
  { name: 'Analytics', desc: 'Review analytics, heatmaps and executive context.', icon: 'BarChart3', path: '/platform#analytics' },
  { name: 'AI Assistant', desc: 'Surface assistance and recommendations in the workflow.', icon: 'Sparkles', path: '/platform#ai' },
  { name: 'Integrations', desc: 'Connect ODA7 to the surrounding business toolset.', icon: 'GitBranch', path: '/platform#integrations' },
  { name: 'Super Admin', desc: 'Operate organizations, plans, billing and platform controls.', icon: 'ShieldCheck', path: '/platform#super-admin' },
];

export const pricingNavItems = [
  { name: 'Sales Workspace', desc: 'A focused starting point for sales execution.', icon: 'PhoneCall', path: '/pricing#sales' },
  { name: 'Business Operations', desc: 'Connect sales, people, compensation and insight.', icon: 'Building2', path: '/pricing#business' },
  { name: 'Platform / Super Admin', desc: 'Scope organization and platform-management needs.', icon: 'ShieldCheck', path: '/pricing#platform' },
  { name: 'Compare approaches', desc: 'Review the three workspace starting points together.', icon: 'PanelsTopLeft', path: '/pricing#comparison' },
];

export const navLinks = [
  { label: 'Product', path: '/product', menu: 'product', items: productNavItems },
  { label: 'Solutions', path: '/solutions', menu: 'solutions', items: solutionNavItems },
  { label: 'Platform', path: '/platform', menu: 'platform', items: platformNavItems },
  { label: 'Resources', path: '/resources', menu: 'resources', items: resourceNavItems },
  { label: 'Pricing', path: '/pricing', menu: 'pricing', items: pricingNavItems },
];

export const footerLinks = {
  product: [
    { label: 'Leads', path: '/product/leads' },
    { label: 'Dialer', path: '/product/dialer' },
    { label: 'Calls', path: '/product/calls' },
    { label: 'Inbox', path: '/product/inbox' },
    { label: 'Calendar', path: '/product/calendar' },
  ],
  solutions: [
    { label: 'Sales', path: '/solutions/sales' },
    { label: 'Managers', path: '/solutions/manager' },
    { label: 'Marketing', path: '/solutions/marketing' },
    { label: 'Operations', path: '/solutions/operations' },
    { label: 'Leadership', path: '/solutions/leadership' },
  ],
  platform: [
    { label: 'Platform overview', path: '/platform' },
    { label: 'People management', path: '/platform#people' },
    { label: 'Compensation', path: '/platform#compensation' },
    { label: 'Analytics', path: '/platform#analytics' },
    { label: 'Super Admin', path: '/platform#super-admin' },
  ],
  resources: [
    { label: 'Capabilities', path: '/features' },
    { label: 'Product guides', path: '/resources#guides' },
    { label: 'FAQ', path: '/resources#faqs' },
    { label: 'Help & Support', path: '/resources#support' },
    { label: 'Contact', path: '/contact' },
  ],
  company: [
    { label: 'About', path: '/about' },
    { label: 'Sign in', path: '/sign-in' },
    { label: 'Get started', path: '/get-started' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'System information', path: '/resources#system-information' },
  ],
};
