'use client';

import React, { useMemo, useState } from 'react';
import { Activity, ArrowRight, Layers3, Users } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const OperationalValueSection = () => {
  const [agents, setAgents] = useState(24);
  const [leads, setLeads] = useState(1200);
  const [calls, setCalls] = useState(60);

  const insights = useMemo(() => {
    const workload = leads / Math.max(agents, 1);
    return [
      { icon: Users, label: 'Coordination need', value: agents > 60 ? 'Multi-team operating view' : agents > 15 ? 'Shared manager visibility' : 'Focused team workspace', detail: 'Based on team size, not a financial promise.' },
      { icon: Layers3, label: 'Lead distribution', value: workload > 80 ? 'Queue discipline becomes critical' : workload > 30 ? 'Ownership should stay visible' : 'A simple owned flow may be enough', detail: 'Illustrative operational interpretation.' },
      { icon: Activity, label: 'Conversation rhythm', value: calls > 90 ? 'High-volume call context' : calls > 35 ? 'Repeatable follow-up rhythm' : 'Selective account workflow', detail: 'Use this to frame a product walkthrough.' },
    ];
  }, [agents, leads, calls]);

  return (
    <section id="value" className="section-wrapper">
      <div className="container-wide">
        <SectionHeading eyebrow="Operational value explorer" eyebrowIcon="BarChart3" title="Describe the operation." highlightText="See what should become visible." description="Adjust the inputs to explore descriptive workflow priorities. Results are illustrative and do not represent financial or performance guarantees." />
        <div className="value-explorer">
          <div className="value-controls">
            {[
              ['Agents', agents, setAgents, 2, 150, 'people'],
              ['Leads per month', leads, setLeads, 100, 10000, 'leads'],
              ['Calls per agent / day', calls, setCalls, 5, 150, 'calls'],
            ].map(([label,value,setter,min,max,suffix])=><label key={label}><span><strong>{label}</strong><em>{Number(value).toLocaleString()} {suffix}</em></span><input type="range" min={min} max={max} value={value} onChange={(event)=>setter(Number(event.target.value))}/><small><i>{Number(min).toLocaleString()}</i><i>{Number(max).toLocaleString()}</i></small></label>)}
          </div>
          <div className="value-results">
            <span className="badge badge-subtle">Illustrative interpretation</span>
            {insights.map(({icon:Icon,label,value,detail})=><article key={label}><i><Icon size={19}/></i><div><small>{label}</small><h3>{value}</h3><p>{detail}</p></div></article>)}
            <Button to="/get-started" iconRight="ArrowRight">Map your real workflow</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
