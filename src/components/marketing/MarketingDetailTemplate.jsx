'use client';

import React from 'react';
import { Link } from '../../lib/navigation';
import { ArrowRight, CheckCircle2, PlayCircle, Sparkles, ShieldCheck, Zap, Layers } from 'lucide-react';
import { Button } from '../common/Button';
import { getDomainVisual } from '../visuals/DomainVisualPrimitives';

export const MarketingDetailTemplate = ({ type, slug, page, onOpenDemo }) => {
  const steps = page.steps || page.workflow || [];
  const features = page.features || (page.benefits || []).map((item) => [item, `Keep ${item.toLowerCase()} connected to the wider operating workflow.`]);
  const overviewPath = type === 'Product' ? '/product' : '/solutions';
  const storyImage = {
    leads: '/oda7-scenario-insidesales.jpg',
    dialer: '/oda7-scenario-callcenter.jpg',
    calls: '/oda7-sales-conversation.png',
    inbox: '/oda7-team-story.jpg',
    calendar: '/oda7-module-people.jpg',
    campaigns: '/oda7-scenario-agency.jpg',
    products: '/oda7-module-engagement.jpg',
    scripts: '/oda7-manager-coaching.png',
    sequences: '/oda7-sales-conversation.png',
    quotes: '/oda7-module-compensation.jpg',
    sales: '/oda7-module-sales.jpg',
    manager: '/oda7-manager-coaching.png',
    marketing: '/oda7-scenario-agency.jpg',
    operations: '/oda7-scenario-saasplatform.jpg',
    hr: '/oda7-people-operations.png',
    people: '/oda7-module-people.jpg',
    leadership: '/oda7-leadership-analytics.jpg',
    analytics: '/oda7-module-insights.jpg',
  }[slug] || {
    sales: '/oda7-module-sales.jpg',
    leads: '/oda7-scenario-insidesales.jpg',
    manager: '/oda7-scenario-callcenter.jpg',
    operations: '/oda7-scenario-saasplatform.jpg',
    people: '/oda7-module-people.jpg',
    marketing: '/oda7-scenario-agency.jpg',
    inbox: '/oda7-team-story.jpg',
    calendar: '/oda7-module-people.jpg',
    sequences: '/oda7-sales-conversation.png',
    products: '/oda7-module-engagement.jpg',
    quotes: '/oda7-module-compensation.jpg',
    analytics: '/oda7-module-insights.jpg',
  }[page.visual] || '/oda7-final-cta-team.jpg';

  return (
    <div className="marketing-detail-page">
      <section className="detail-hero">
        <div className="container-wide">
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span>/</span><Link to={overviewPath}>{type}</Link><span>/</span><strong>{page.label}</strong></nav>
          <div className="detail-hero-grid">
            <div className="detail-hero-copy">
              <span className="section-eyebrow"><Sparkles size={14} /> {page.eyebrow || `${page.label} solution`}</span>
              <h1>{page.headline}</h1>
              <p>{page.intro}</p>
              <div className="detail-hero-actions">
                <Button to="/get-started" variant="primary" size="lg" iconRight="ArrowRight">Get started</Button>
              </div>
              <div className="detail-proof-line"><span>One workspace</span><i /><span>Role-aware workflow</span><i /><span>Illustrative product data</span></div>
            </div>
            {getDomainVisual(slug, type, { compact: true })}
          </div>
        </div>
      </section>

      <section className="section-wrapper section-dark">
        <div className="container">
          <div className="detail-problem-grid">
            <div><span className="detail-number">01</span><small>The operating problem</small><h2>{page.problem || `The ${page.label.toLowerCase()} view becomes less useful when its context lives elsewhere.`}</h2></div>
            <div><span className="detail-number is-accent">02</span><small>How ODA7 responds</small><h2>{page.solution || page.intro}</h2></div>
          </div>
        </div>
      </section>

      <section className="section-wrapper">
        <div className="container-wide">
          <div className="detail-section-heading"><span className="section-eyebrow">How it works</span><h2>From first signal to visible outcome.</h2><p>The interface changes as the work moves forward, while ownership and context remain connected.</p></div>
          <div className="detail-workflow" style={{ '--step-count': steps.length, gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}>
            {steps.map((step, index) => (
              <div key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <i />
                <strong>{step}</strong>
                <small>{index === steps.length - 1 ? 'The outcome becomes part of the shared operating picture.' : 'The next responsible action stays visible.'}</small>
              </div>
            ))}
          </div>

          {/* Structured Operational Architecture Matrix (Text-Based Contextual Breakdown) */}
          <div
            className="detail-context-matrix"
            style={{
              marginTop: '28px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '16px',
            }}
          >
            {steps.map((step, idx) => (
              <div
                key={step}
                className="card-saas card-interactive-lift"
                style={{
                  padding: '20px 22px',
                  borderRadius: '16px',
                  background: 'var(--oda-surface)',
                  border: '1px solid var(--oda-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--oda-accent)', font: '700 0.72rem/1 var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Phase {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="badge badge-emerald" style={{ fontSize: '0.62rem' }}>
                    Synchronized
                  </span>
                </div>
                <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: '800', color: 'var(--oda-text-primary)', lineHeight: '1.3' }}>
                  {step}
                </h3>
                <p style={{ margin: 0, color: 'var(--oda-text-secondary)', fontSize: '0.8125rem', lineHeight: '1.55', flexGrow: 1 }}>
                  {idx === 0
                    ? `Intake signals and origin context are attached directly to the active record before routing.`
                    : idx === steps.length - 1
                    ? `Verified outcomes, notes, and activity log seamlessly feed downstream compensation and reporting.`
                    : `Active customer history, scripts, and previous touchpoints remain visible without switching tools.`}
                </p>
                <div style={{ paddingTop: '10px', borderTop: '1px solid var(--oda-border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.68rem', color: 'var(--oda-text-muted)' }}>
                  <span>Operational Status</span>
                  <strong style={{ color: 'var(--oda-accent)' }}>Real-Time Mesh</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrapper section-alt">
        <div className="container-wide detail-feature-story">
          <div className="detail-feature-copy">
            <span className="section-eyebrow"><Sparkles size={13} /> Feature storytelling</span>
            <h2>Built around the work, not around a feature checklist.</h2>
            <p>Each capability helps the team preserve context as responsibility moves from one role or action to another.</p>

            {/* Architecture Guarantees Matrix Card */}
            <div
              style={{
                marginTop: '28px',
                padding: '20px 22px',
                background: 'var(--oda-surface)',
                border: '1px solid var(--oda-border)',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--oda-accent)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={14} /> Operating Guarantees
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div style={{ background: 'var(--oda-bg-alt)', padding: '10px 12px', borderRadius: '10px', border: '1px solid var(--oda-border-subtle)' }}>
                  <div style={{ fontSize: '0.68rem', color: 'var(--oda-text-muted)', fontWeight: '600' }}>Context Continuity</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: '800', color: 'var(--oda-text-primary)' }}>100% Lossless Sync</div>
                </div>
                <div style={{ background: 'var(--oda-bg-alt)', padding: '10px 12px', borderRadius: '10px', border: '1px solid var(--oda-border-subtle)' }}>
                  <div style={{ fontSize: '0.68rem', color: 'var(--oda-text-muted)', fontWeight: '600' }}>Event Automation</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: '800', color: 'var(--oda-text-primary)' }}>&lt; 1.2s Latency</div>
                </div>
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--oda-text-muted)', lineHeight: '1.45', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Zap size={13} color="var(--oda-accent)" style={{ flexShrink: 0 }} /> Native orchestration across queues, calls, playbooks and compensation.
              </div>
            </div>
          </div>

          <div className="detail-feature-list">
            {features.map(([title, description, tag], index) => (
              <article key={title} style={{ padding: '20px 8px', borderBottom: '1px solid var(--oda-border-subtle)', display: 'grid', gridTemplateColumns: '36px minmax(0, 1fr)', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--oda-accent)', font: '700 0.8rem/1.2 var(--font-mono)', marginTop: '2px' }}>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap', marginBottom: '8px' }}>
                    <h3 style={{ margin: 0, fontSize: '1.18rem', fontWeight: '800', color: 'var(--oda-text-primary)' }}>{title}</h3>
                    {tag && (
                      <span className="badge badge-cyan" style={{ fontSize: '0.72rem', padding: '3px 10px', borderRadius: '6px', fontWeight: '750' }}>
                        {tag}
                      </span>
                    )}
                  </div>
                  <p style={{ margin: 0, color: 'var(--oda-text-secondary)', fontSize: '0.88rem', lineHeight: '1.65' }}>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrapper">
        <div className="container-wide real-scenario-grid">
          <div className="real-scenario-image"><img src={storyImage} loading="lazy" decoding="async" alt={`${page.label} workflow in a modern operations environment`} /><span>Real work. Relevant context.</span></div>
          <div className="real-scenario-copy"><span className="section-eyebrow">A real-world scenario</span><h2>See where {page.label.toLowerCase()} fits in the day.</h2><p>{page.scenario || `${page.intro} The team can see what changed, who owns the next action and how the workflow continues.`}</p><ul>{(page.benefits || features.map(([title]) => title)).slice(0,3).map((item) => <li key={item}><CheckCircle2 size={17} /> {item}</li>)}</ul><Button to={type === 'Product' ? `/solutions/sales` : '/platform'} variant="secondary" iconRight="ArrowRight">Explore the connected platform</Button></div>
        </div>
      </section>

      <section className="detail-final-cta">
        <div className="container-narrow">
          <span className="section-eyebrow">Experience ODA7</span>
          <h2>Bring {page.label.toLowerCase()} into one operating picture.</h2>
          <p>{page.intro || 'Explore the connected workflow or talk with ODA7 about the way your team works today.'}</p>
          
          {/* Contextual Text Highlights Row */}
          <div
            style={{
              margin: '20px auto 24px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
              gap: '12px',
              maxWidth: '780px',
              textAlign: 'left',
            }}
          >
            <div style={{ background: 'var(--oda-surface)', border: '1px solid var(--oda-border)', borderRadius: '12px', padding: '12px 16px' }}>
              <div style={{ fontSize: '0.68rem', fontWeight: '750', color: 'var(--oda-accent)', textTransform: 'uppercase' }}>Zero Data Loss</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--oda-text-secondary)', marginTop: '2px' }}>Continuous contextual sync across all active teams</div>
            </div>
            <div style={{ background: 'var(--oda-surface)', border: '1px solid var(--oda-border)', borderRadius: '12px', padding: '12px 16px' }}>
              <div style={{ fontSize: '0.68rem', fontWeight: '750', color: 'var(--oda-accent)', textTransform: 'uppercase' }}>Rapid Onboarding</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--oda-text-secondary)', marginTop: '2px' }}>Ready-to-use role workspaces and guided setup</div>
            </div>
            <div style={{ background: 'var(--oda-surface)', border: '1px solid var(--oda-border)', borderRadius: '12px', padding: '12px 16px' }}>
              <div style={{ fontSize: '0.68rem', fontWeight: '750', color: 'var(--oda-accent)', textTransform: 'uppercase' }}>Enterprise Grade</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--oda-text-secondary)', marginTop: '2px' }}>SOC-2 Type II standards & granular role security</div>
            </div>
          </div>

          <div>
            <Button to="/get-started" size="lg" iconRight="ArrowRight">Get started</Button>
          </div>
        </div>
      </section>
    </div>
  );
};
