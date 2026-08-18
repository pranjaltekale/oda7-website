'use client';

import React, { useEffect, useState } from 'react';
import { Activity, BarChart3, CalendarDays, Check, FileText, GitBranch, Headphones, Inbox, LayoutDashboard, Megaphone, Package, PhoneCall, Plus, ReceiptText, Users } from 'lucide-react';

const iconMap = { BarChart3, CalendarDays, FileText, GitBranch, Headphones, Inbox, LayoutDashboard, Megaphone, Package, PhoneCall, ReceiptText, Users };

const sampleRows = ['Aarav Mehta', 'Nisha Kapoor', 'Rohan Shah', 'Meera Iyer'];

export const ProductUIFrame = ({ title, steps = [], icon = 'LayoutDashboard', compact = false }) => {
  const [activeStep, setActiveStep] = useState(0);
  const Icon = iconMap[icon] || LayoutDashboard;

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
          {[LayoutDashboard, Users, PhoneCall, Inbox, BarChart3].map((SideIcon, index) => <SideIcon key={index} size={15} className={index === 1 ? 'is-active' : ''} />)}
        </aside>
        <div className="product-ui-content">
          <div className="product-ui-heading">
            <div><small>Workspace</small><strong>{title}</strong></div>
            <button><Plus size={14} /> New action</button>
          </div>

          <div className="product-ui-metrics">
            {[['Open', '24'], ['In progress', '11'], ['Needs action', '05']].map(([label, value], index) => (
              <div key={label} className={index === activeStep % 3 ? 'is-highlighted' : ''}><small>{label}</small><strong>{value}</strong><span>{index === 2 ? 'Review queue' : 'Live view'}</span></div>
            ))}
          </div>

          <div className="product-ui-progress" aria-label="Workflow preview">
            {steps.map((step, index) => (
              <button key={step} className={index === activeStep ? 'is-active' : index < activeStep ? 'is-complete' : ''} onClick={() => setActiveStep(index)}>
                <i>{index < activeStep ? <Check size={11} /> : index + 1}</i><span>{step}</span>
              </button>
            ))}
          </div>

          <div className="product-ui-table">
            <div className="product-ui-table-head"><span>Record</span><span>Owner</span><span>Status</span><span>Next action</span></div>
            {sampleRows.slice(0, compact ? 2 : 4).map((name, index) => (
              <div className={index === activeStep % sampleRows.length ? 'is-selected' : ''} key={name}>
                <span><i>{name.split(' ').map((part) => part[0]).join('')}</i><b>{name}</b></span>
                <span>Team {index + 1}</span>
                <span><em>{index === activeStep % sampleRows.length ? 'Active' : index % 2 ? 'Follow-up' : 'Qualified'}</em></span>
                <span>{steps[(index + activeStep) % Math.max(steps.length, 1)] || 'Review'}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="product-ui-notification">
        <span><Activity size={15} /></span>
        <div><strong>{steps[activeStep] || 'Workflow updated'}</strong><small>Shared state updated across the workspace</small></div>
      </div>
    </div>
  );
};
