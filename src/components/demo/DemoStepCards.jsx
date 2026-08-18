import React from 'react';
import { PhoneCall, Headphones, Users, ShieldCheck } from 'lucide-react';

const step = (eyebrow, title, desc, highlight, interfaceTitle, status, rows) => ({
  eyebrow, title, desc, highlight, interfaceTitle, status, rows,
});

export const demoRoleData = {
  sales: {
    roleName: 'Sales Rep', roleLabel: 'Inside sales workflow', icon: PhoneCall, color: '#38bdf8',
    steps: [
      step('Step 1 • Lead arrival', 'Review the next lead', 'A new customer record enters the queue with source, ownership, and available context.', 'Visible queue ownership', 'My Queue', 'Ready for review', [['Customer record', 'New inbound enquiry'], ['Source', 'Website form'], ['Next action', 'Review and contact']]),
      step('Step 2 • Conversation', 'Call with context in view', 'The calling workspace keeps the customer record and the current conversation together.', 'In-workflow calling', 'Active conversation', 'Connected', [['Customer', 'Current lead'], ['Context', 'Record and prior activity'], ['Owner', 'Assigned sales rep']]),
      step('Step 3 • Assistance', 'Review relevant guidance', 'ODA7 presents contextual guidance for the rep to consider while the conversation continues.', 'Person-in-control assistance', 'Conversation assistance', 'Suggestion available', [['Topic', 'Implementation concern'], ['Suggested approach', 'Clarify requirements'], ['Control', 'Review before use']]),
      step('Step 4 • Follow-up', 'Keep the next action attached', 'Follow-up and stage context remain on the same customer timeline for the team.', 'Shared follow-through', 'Customer timeline', 'Follow-up prepared', [['Conversation', 'Captured in context'], ['Stage', 'Ready for review'], ['Next action', 'Send agreed follow-up']]),
    ],
  },
  manager: {
    roleName: 'Manager', roleLabel: 'Floor management workflow', icon: Headphones, color: '#10b981',
    steps: [
      step('Step 1 • Team roster', 'See team availability', 'The manager view brings roster status and active ownership into one operating picture.', 'Shared floor context', 'Team roster', 'Current view', [['Agent state', 'Available or engaged'], ['Queue ownership', 'Visible by team'], ['Coverage', 'Reviewable']]),
      step('Step 2 • Queue context', 'Review current workload', 'Managers can compare active work, waiting work, and available coverage without reconciling separate reports.', 'Connected workload view', 'Floor queue', 'Monitoring', [['Active work', 'In progress'], ['Waiting work', 'Visible'], ['Coverage', 'Team context attached']]),
      step('Step 3 • Performance', 'Explore operating patterns', 'The same view connects activity patterns with the team and workflow behind them.', 'Decision-ready context', 'Performance view', 'Ready to discuss', [['Activity', 'Viewed by time period'], ['Pattern', 'Available for review'], ['Follow-through', 'Assign next action']]),
      step('Step 4 • Coaching', 'Support work in progress', 'Where configured, a manager can use live context to guide a rep without losing the customer record.', 'Contextual coaching', 'Manager action', 'Coaching context open', [['Conversation', 'Selected by manager'], ['Guidance', 'Shared with rep'], ['Record', 'Remains connected']]),
    ],
  },
  admin: {
    roleName: 'Admin', roleLabel: 'People and operations workflow', icon: Users, color: '#fbbf24',
    steps: [
      step('Step 1 • Team structure', 'Organize people and roles', 'Maintain the team structure, role context, and operational ownership used by connected workflows.', 'Unified team directory', 'People directory', 'Configuration view', [['People', 'Team members'], ['Structure', 'Teams and roles'], ['Ownership', 'Workflow assignments']]),
      step('Step 2 • Availability', 'Review attendance context', 'Configured attendance and leave records inform team availability and queue planning.', 'Availability context', 'Attendance review', 'Records available', [['Schedule', 'Current shift context'], ['Attendance', 'Available for review'], ['Leave', 'Approval state visible']]),
      step('Step 3 • Compensation', 'Connect approved work to rules', 'Eligible activity and configured compensation rules meet in a reviewable preparation workflow.', 'Traceable calculation context', 'Compensation review', 'Preparation state', [['Source activity', 'Attached'], ['Rule', 'Configured plan'], ['Status', 'Ready for review']]),
      step('Step 4 • Payroll handoff', 'Prepare itemized records', 'Reviewed compensation context can move into an itemized record for the next payroll step.', 'Reviewable payroll handoff', 'Payroll preparation', 'Itemized record ready', [['Earnings context', 'Itemized'], ['Adjustments', 'Visible'], ['Next step', 'Administrative review']]),
    ],
  },
  superadmin: {
    roleName: 'Super Admin', roleLabel: 'Platform operations workflow', icon: ShieldCheck, color: '#a855f7',
    steps: [
      step('Step 1 • Organizations', 'Manage organization context', 'A separate platform view keeps organization administration distinct from daily team work.', 'Platform-level oversight', 'Organizations', 'Platform view', [['Organization', 'Selected workspace'], ['Status', 'Administrative state'], ['Ownership', 'Platform operator']]),
      step('Step 2 • Plans', 'Review plan configuration', 'Plan and entitlement settings are presented alongside the organization they govern.', 'Configuration context', 'Plan controls', 'Review mode', [['Plan', 'Configured scope'], ['Seats', 'Allocation context'], ['Services', 'Enabled modules']]),
      step('Step 3 • Platform insight', 'Compare operating signals', 'Platform reporting brings organization and subscription context into one reviewable view.', 'Consolidated platform context', 'Platform overview', 'Illustrative data', [['Organizations', 'Portfolio view'], ['Subscriptions', 'Current status'], ['Usage', 'Available for review']]),
      step('Step 4 • Governance', 'Apply administrative controls', 'Platform operators can review the configured access, domain, and policy settings represented in this experience.', 'Governed administration', 'Workspace controls', 'Configuration view', [['Access', 'Role-aware'], ['Domain', 'Configured workspace'], ['Activity', 'Administrative history']]),
    ],
  },
};

export const DemoStepCards = ({ role = 'sales', step: stepNumber = 1 }) => {
  const currentRole = demoRoleData[role] || demoRoleData.sales;
  const currentStep = currentRole.steps[stepNumber - 1] || currentRole.steps[0];
  const IconComp = currentRole.icon;

  return (
    <div className="demo-workflow-step animate-fadeIn" key={`${role}-${stepNumber}`}>
      <div className="demo-step-summary">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: `${currentRole.color}25`, color: currentRole.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><IconComp size={18} /></div>
          <div><small style={{ color: currentRole.color, fontWeight: '700', textTransform: 'uppercase' }}>{currentStep.eyebrow}</small><div style={{ fontSize: '0.75rem', color: 'var(--oda-text-muted)' }}>{currentRole.roleLabel}</div></div>
        </div>
        <h3 style={{ fontSize: '1.35rem', fontWeight: '850', color: 'var(--oda-text-primary)', marginBottom: '8px', lineHeight: '1.25' }}>{currentStep.title}</h3>
        <p style={{ color: 'var(--oda-text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '16px' }}>{currentStep.desc}</p>
        <div style={{ display: 'inline-flex', padding: '6px 12px', borderRadius: '8px', background: 'var(--oda-primary-soft)', border: '1px solid var(--oda-border-blue)', color: 'var(--oda-primary)', fontSize: '0.75rem', fontWeight: '700' }}>{currentStep.highlight}</div>
      </div>
      <div className="demo-step-interface card-interactive-lift">
        <div className="demo-ui-box">
          <div className="demo-ui-header"><span>{currentStep.interfaceTitle}</span><span className="badge badge-cyan">{currentStep.status}</span></div>
          {currentStep.rows.map(([label, value]) => <div className="demo-agent-row" key={label}><strong>{label}</strong><span>{value}</span></div>)}
          <div className="demo-ui-meta"><span>Illustrative product state</span><span style={{ color: 'var(--oda-success)' }}>ODA7 workflow</span></div>
        </div>
      </div>
    </div>
  );
};
