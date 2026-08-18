import React from 'react';
import { Link } from '../../lib/navigation';
import { ArrowRight, CheckCircle2, PlayCircle, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';
import { ProductUIFrame } from './ProductUIFrame';

export const MarketingDetailTemplate = ({ type, slug, page, onOpenDemo }) => {
  const steps = page.steps || page.workflow || [];
  const features = page.features || (page.benefits || []).map((item) => [item, `Keep ${item.toLowerCase()} connected to the wider operating workflow.`]);
  const overviewPath = type === 'Product' ? '/product' : '/solutions';
  const storyImage = {
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
                <Button demo variant="secondary" size="lg" iconLeft="PlayCircle">See ODA7 in action</Button>
              </div>
              <div className="detail-proof-line"><span>One workspace</span><i /><span>Role-aware workflow</span><i /><span>Illustrative product data</span></div>
            </div>
            <ProductUIFrame title={page.label} steps={steps} icon={page.icon} compact />
          </div>
        </div>
      </section>

      <section className="section-wrapper section-dark">
        <div className="container detail-problem-grid">
          <div><span className="detail-number">01</span><small>The operating problem</small><h2>{page.problem || `The ${page.label.toLowerCase()} view becomes less useful when its context lives elsewhere.`}</h2></div>
          <div><span className="detail-number is-accent">02</span><small>How ODA7 responds</small><h2>{page.solution || page.intro}</h2></div>
        </div>
      </section>

      <section className="section-wrapper">
        <div className="container-wide">
          <div className="detail-section-heading"><span className="section-eyebrow">How it works</span><h2>From first signal to visible outcome.</h2><p>The interface changes as the work moves forward, while ownership and context remain connected.</p></div>
          <div className="detail-workflow">
            {steps.map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, '0')}</span><i /><strong>{step}</strong><small>{index === steps.length - 1 ? 'The outcome becomes part of the shared operating picture.' : 'The next responsible action stays visible.'}</small></div>)}
          </div>
          <ProductUIFrame title={`${page.label} workflow`} steps={steps} icon={page.icon} />
        </div>
      </section>

      <section className="section-wrapper section-alt">
        <div className="container-wide detail-feature-story">
          <div className="detail-feature-copy"><span className="section-eyebrow">Feature storytelling</span><h2>Built around the work, not around a feature checklist.</h2><p>Each capability helps the team preserve context as responsibility moves from one role or action to another.</p></div>
          <div className="detail-feature-list">
            {features.map(([title, description], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{description}</p></div><ArrowRight size={17} /></article>)}
          </div>
        </div>
      </section>

      <section className="section-wrapper">
        <div className="container-wide real-scenario-grid">
          <div className="real-scenario-image"><img src={storyImage} loading="lazy" decoding="async" alt={`${page.label} workflow in a modern operations environment`} /><span>Real work. Relevant context.</span></div>
          <div className="real-scenario-copy"><span className="section-eyebrow">A real-world scenario</span><h2>See where {page.label.toLowerCase()} fits in the day.</h2><p>{page.scenario || `${page.intro} The team can see what changed, who owns the next action and how the workflow continues.`}</p><ul>{(page.benefits || features.map(([title]) => title)).slice(0,3).map((item) => <li key={item}><CheckCircle2 size={17} /> {item}</li>)}</ul><Button to={type === 'Product' ? `/solutions/sales` : '/platform'} variant="secondary" iconRight="ArrowRight">Explore the connected platform</Button></div>
        </div>
      </section>

      <section className="detail-final-cta"><div className="container-narrow"><span className="section-eyebrow">Experience ODA7</span><h2>Bring {page.label.toLowerCase()} into one operating picture.</h2><p>Explore the interactive workflow or talk with ODA7 about the way your team works today.</p><div><Button to="/get-started" size="lg" iconRight="ArrowRight">Get started</Button><Button demo variant="secondary" size="lg" iconLeft="PlayCircle">See ODA7 in action</Button></div></div></section>
    </div>
  );
};
