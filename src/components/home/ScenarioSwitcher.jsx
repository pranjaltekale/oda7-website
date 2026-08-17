import React, { useState } from 'react';
import { ArrowRight, Building2, CheckCircle2 } from 'lucide-react';
import { industryScenarios } from '../../data/marketingPages';
import { SectionHeading } from '../common/SectionHeading';
import { ProductUIFrame } from '../marketing/ProductUIFrame';
import { Button } from '../common/Button';

export const ScenarioSwitcher = () => {
  const [activeId, setActiveId] = useState(industryScenarios[0].id);
  const scenario = industryScenarios.find((item) => item.id === activeId) || industryScenarios[0];

  return (
    <section id="scenarios" className="section-wrapper section-dark">
      <div className="container-wide">
        <SectionHeading eyebrow="Business scenarios" eyebrowIcon="Layers" title="Different motions." highlightText="One connected operating model." description="Choose a scenario to see how ODA7 adapts the workflow without inventing performance claims." />
        <div className="scenario-tabs" role="tablist" aria-label="Business scenarios">
          {industryScenarios.map((item) => <button key={item.id} role="tab" aria-selected={item.id === activeId} className={item.id === activeId ? 'is-active' : ''} onClick={() => setActiveId(item.id)}>{item.label}</button>)}
        </div>
        <div className="scenario-stage" key={scenario.id}>
          <div className="scenario-copy">
            <span className="badge badge-cyan"><Building2 size={13} /> {scenario.label}</span>
            <h2>{scenario.headline}</h2>
            <p>{scenario.benefit}</p>
            <div className="scenario-flow">{scenario.flow.map((step,index)=><div key={step}><span>{String(index+1).padStart(2,'0')}</span><strong>{step}</strong>{index < scenario.flow.length - 1 && <ArrowRight size={14}/>}</div>)}</div>
            <ul><li><CheckCircle2 size={16}/> Clear ownership between steps</li><li><CheckCircle2 size={16}/> Role-aware views of the same work</li><li><CheckCircle2 size={16}/> Descriptive, illustrative workflow outcomes</li></ul>
            <Button to="/solutions" variant="secondary" iconRight="ArrowRight">Explore role solutions</Button>
          </div>
          <ProductUIFrame title={scenario.label} steps={scenario.flow} icon="LayoutDashboard" compact />
        </div>
      </div>
    </section>
  );
};
