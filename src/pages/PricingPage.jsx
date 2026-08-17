import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { PricingSection } from '../components/home/PricingSection';
import { FaqAccordion } from '../components/home/FaqAccordion';

export const PricingPage = () => (
  <div style={{ paddingTop: '20px', paddingBottom: '100px' }}>
    <PageHeader
      badge="Workspace-based pricing"
      badgeIcon="DollarSign"
      title="Choose the operating scope."
      highlight="We’ll shape the plan."
      description="Tell us which teams, modules and platform controls you need. ODA7 will confirm pricing and entitlements in a tailored proposal."
    />
    <PricingSection />
    <div className="container-wide"><FaqAccordion /></div>
  </div>
);
