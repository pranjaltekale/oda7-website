'use client';

import React, { useEffect, useRef, useState } from 'react';
import { BarChart3, DollarSign, PhoneCall, Users, UserRoundCheck } from 'lucide-react';
import { ProductUIFrame } from '../marketing/ProductUIFrame';

const story = [
  { id: 'leads', label: 'Leads', icon: Users, iconName: 'Users', title: 'The opportunity enters the operating picture.', text: 'Source, qualification context and ownership become visible before the next action begins.', flow: ['Capture', 'Qualify', 'Assign'] },
  { id: 'calls', label: 'Calls', icon: PhoneCall, iconName: 'PhoneCall', title: 'The conversation happens with context.', text: 'The agent works from the lead, script and calling view instead of reconstructing context across tools.', flow: ['Review', 'Call', 'Capture'] },
  { id: 'people', label: 'People', icon: UserRoundCheck, iconName: 'Users', title: 'Team structure stays connected to activity.', text: 'Managers, teams, departments and attendance become part of how the work is understood.', flow: ['Agent', 'Team', 'Attendance'] },
  { id: 'compensation', label: 'Compensation', icon: DollarSign, iconName: 'ReceiptText', title: 'Performance connects to recognition and pay.', text: 'Salary, payroll, incentives and contests can reference the operating context behind them.', flow: ['Performance', 'Review', 'Incentive'] },
  { id: 'analytics', label: 'Analytics', icon: BarChart3, iconName: 'BarChart3', title: 'The pattern becomes visible to leadership.', text: 'Analytics, heatmaps and executive views turn connected activity into a clearer decision context.', flow: ['Measure', 'Understand', 'Improve'] },
];

export const ConnectedOperatingStory = () => {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) setActive(Number(entry.target.dataset.index));
    }), { threshold: 0.55, rootMargin: '-15% 0px -25% 0px' });
    refs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const current = story[active];
  return (
    <section id="how-it-works" className="connected-story section-dark">
      <div className="container-wide connected-story-grid">
        <div className="connected-story-copy">
          <div className="connected-story-intro"><span className="section-eyebrow">One operating picture</span><h2>Watch the context travel through ODA7.</h2><p>Scroll through the workflow. The product view changes as responsibility moves across the business.</p></div>
          {story.map((item,index)=>{const Icon=item.icon;return <article key={item.id} data-index={index} ref={(node)=>{refs.current[index]=node;}} className={active===index?'is-active':''}><span><Icon size={17}/></span><div><small>{String(index+1).padStart(2,'0')} / {item.label}</small><h3>{item.title}</h3><p>{item.text}</p></div></article>;})}
        </div>
        <div className="connected-story-visual"><div><span className="badge badge-subtle">Now viewing: {current.label}</span><ProductUIFrame title={current.label} steps={current.flow} icon={current.iconName} compact /></div></div>
      </div>
    </section>
  );
};
