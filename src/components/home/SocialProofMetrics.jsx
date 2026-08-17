import React from 'react';
import { Activity, Award, Layers, ShieldCheck } from 'lucide-react';
import { AnimatedCounter } from '../common/AnimatedCounter';
import { SectionHeading } from '../common/SectionHeading';

const capabilities = [
  { title: 'One Connected Workspace', desc: 'Sales, people, compensation, insights and administration share operating context.', icon: Layers, color: '#38bdf8' },
  { title: 'Live Floor Context', desc: 'Agent state, queues and manager workflows remain visible in the same operating model.', icon: Activity, color: '#10b981' },
  { title: 'Connected Operations', desc: 'Closed-won activity can flow into incentives, payroll preparation and performance review.', icon: Award, color: '#fbbf24' },
  { title: 'Platform Controls', desc: 'Organization, plan, subscription, audit and administrative controls live in a distinct layer.', icon: ShieldCheck, color: '#34d399' },
];

const evidence = [
  ['61+', 61, '+', 'Capabilities represented across the current ODA7 product map'],
  ['9', 9, '', 'Core business areas connected by the platform experience'],
  ['1', 1, '', 'Unified workspace connecting the operating journey'],
];

export const SocialProofMetrics = () => (
  <section className="section-wrapper section-alt" id="trust">
    <div className="container-wide">
      <SectionHeading
        eyebrow="Product Scope & Trust"
        eyebrowIcon="ShieldCheck"
        title="Trust starts with"
        highlightText="clear, verifiable scope."
        description="ODA7 presents the product capabilities represented in this experience without invented customer logos, testimonials or unsupported performance claims."
      />

      <div className="trust-capability-grid">
        {capabilities.map((item) => {
          const Icon = item.icon;
          return (
            <article className="card-saas trust-capability-card" key={item.title}>
              <span className="trust-capability-icon" style={{ '--trust-color': item.color }}><Icon size={20} /></span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <small>Represented in the ODA7 product experience</small>
            </article>
          );
        })}
      </div>

      <div className="trust-evidence-panel">
        <div className="trust-evidence-copy">
          <span className="badge badge-cyan">Product evidence</span>
          <h3>Depth you can explore, not claims you have to take on faith.</h3>
          <p>Use the capability explorer and interactive product tour to review how ODA7 connects each operating layer.</p>
        </div>
        <div className="trust-evidence-metrics">
          {evidence.map(([label, value, suffix, description]) => (
            <div key={label}><strong><AnimatedCounter targetValue={value} suffix={suffix} duration={1100} /></strong><span>{description}</span></div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
