import { redirect } from 'next/navigation';
import { WorkspaceShell } from '../../../src/components/layout/WorkspaceShell';

const workspaceRoutes = new Set([
  'dashboard', 'dialer', 'calendar', 'inbox', 'leads', 'campaigns', 'calls',
  'companies', 'products', 'scripts', 'sequences', 'quotes', 'agents', 'managers',
  'teams', 'departments', 'salary', 'payroll', 'incentives', 'contests',
  'leaderboard', 'achievements', 'analytics', 'heatmap', 'executive', 'superadmin',
  'superadmin/plans', 'superadmin/subscriptions', 'superadmin/invoices',
  'superadmin/leads', 'superadmin/ai-assistant', 'superadmin/organizations',
]);

export default async function Page({ params }) {
  const { workspace } = await params;
  if (!workspaceRoutes.has(workspace.join('/'))) redirect('/');
  return <WorkspaceShell />;
}
