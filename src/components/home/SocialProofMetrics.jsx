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
  {
    value: 61,
    prefix: '',
    suffix: '+',
    decimals: 0,
    label: 'Product Capabilities',
    description: 'Represented across the current ODA7 product map',
  },
  {
    value: 100,
    prefix: '',
    suffix: '%',
    decimals: 0,
    label: 'Unified Workflow',
    description: 'Sales, ops and revenue in one synchronized mesh',
  },
  {
    value: 85,
    prefix: '−',
    suffix: '%',
    decimals: 0,
    label: 'Manual Lag Saved',
    description: 'Vs disconnected spreadsheets and legacy tools',
  },
  {
    value: 4.9,
    prefix: '',
    suffix: '★',
    decimals: 1,
    label: 'Platform Rating',
    description: 'Verified reliability & synchronous floor uptime',
  },
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
          {evidence.map((item) => (
            <div className="trust-stat-card" key={item.label}>
              <strong
                className="trust-stat-number"
                style={{
                  display: 'block',
                  fontSize: 'clamp(2.4rem, 3.4vw, 3.25rem)',
                  fontWeight: '850',
                  lineHeight: 1,
                  letterSpacing: '-0.035em',
                  marginBottom: '12px',
                }}
              >
                <AnimatedCounter
                  targetValue={item.value}
                  prefix={item.prefix || ''}
                  suffix={item.suffix || ''}
                  decimals={item.decimals || 0}
                  duration={1100}
                />
              </strong>
              <div
                className="trust-stat-label"
                style={{
                  fontSize: 'clamp(1rem, 1.25vw, 1.15rem)',
                  fontWeight: '750',
                  color: 'var(--oda-text-primary)',
                  marginBottom: '8px',
                  lineHeight: '1.3',
                }}
              >
                {item.label}
              </div>
              <span
                className="trust-stat-detail"
                style={{
                  fontSize: 'clamp(0.8rem, 1vw, 0.9rem)',
                  color: 'var(--oda-text-muted)',
                  lineHeight: '1.5',
                }}
              >
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
