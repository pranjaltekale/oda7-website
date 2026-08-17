import React, { useState } from 'react';
import { Check, MessageSquare } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { pricingPlans } from '../../data/pricingData';

export const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState('business');

  return (
  <section id="pricing" className="section-wrapper section-alt pricing-decision-section">
    <div className="container-wide">
      <SectionHeading
        eyebrow="Pricing shaped around your operation"
        eyebrowIcon="DollarSign"
        title="Start with the workspace you need."
        highlightText="Connect more when you’re ready."
        description="ODA7 pricing depends on team shape, modules and platform requirements. Choose a starting point and we’ll scope it against the way your organization actually works."
      />

      <div className="pricing-scope-selector" aria-label="Choose a pricing scope">
        {pricingPlans.map((plan) => <button type="button" className={selectedPlan === plan.id ? 'is-active' : ''} onClick={() => setSelectedPlan(plan.id)} key={plan.id}>{plan.name}</button>)}
      </div>

      <div id="comparison" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', maxWidth: '1120px', margin: '0 auto' }}>
        {pricingPlans.map((plan) => (
          <article id={plan.id} key={plan.id} onPointerEnter={() => setSelectedPlan(plan.id)} className={`card-saas pricing-decision-card ${selectedPlan === plan.id ? 'is-selected' : ''}`} style={{ display: 'flex', flexDirection: 'column', padding: '30px', borderColor: plan.highlight ? 'var(--oda-primary-light)' : undefined, scrollMarginTop: '110px' }}>
            {plan.highlight && <span className="badge badge-primary" style={{ marginBottom: '16px' }}>Most connected</span>}
            <h3 style={{ color: 'var(--oda-text-primary)', fontSize: '1.35rem', marginBottom: '8px' }}>{plan.name}</h3>
            <p style={{ color: 'var(--oda-text-secondary)', fontSize: '0.87rem', lineHeight: 1.6, minHeight: '66px', marginBottom: '22px' }}>{plan.tagline}</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '24px' }}>
              <span style={{ color: 'var(--oda-text-primary)', fontSize: '1.75rem', fontWeight: 800 }}>Custom</span>
              <span style={{ color: 'var(--oda-text-muted)', fontSize: '0.8rem' }}>based on scope</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '11px', marginBottom: '28px', flex: 1 }}>
              {plan.features.map((feature) => (
                <div key={feature} style={{ display: 'flex', gap: '9px', alignItems: 'flex-start', color: 'var(--oda-text-secondary)', fontSize: '0.84rem' }}>
                  <Check size={16} color="var(--oda-success)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Button to="/get-started" variant={plan.highlight ? 'primary' : 'secondary'} style={{ width: '100%' }}>{plan.ctaText}</Button>
          </article>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: 'var(--oda-text-muted)', fontSize: '0.84rem', marginTop: '28px', textAlign: 'center' }}>
        <MessageSquare size={16} color="var(--oda-primary)" />
        <span>No public price or entitlement is implied until confirmed in an ODA7 proposal.</span>
      </div>
    </div>
  </section>
  );
};
