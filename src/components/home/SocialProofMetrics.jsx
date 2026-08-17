import React from 'react';
import { AnimatedCounter } from '../common/AnimatedCounter';
import { metricsCounters, proofPillars, productProof } from '../../data/testimonialsData';
import { Workflow, LayoutDashboard, ShieldCheck, ArrowUpRight } from 'lucide-react';

const proofIcons = [Workflow, LayoutDashboard, ShieldCheck];

export const SocialProofMetrics = () => (
  <section className="section-wrapper section-dark" aria-labelledby="product-proof-heading">
    <div className="container-wide">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: '28px', flexWrap: 'wrap', marginBottom: '36px' }}>
        <div style={{ maxWidth: '720px' }}>
          <div className="section-eyebrow">Product proof, not invented claims</div>
          <h2 id="product-proof-heading" className="section-title" style={{ marginBottom: '12px' }}>
            One operating picture, from first lead to executive decision.
          </h2>
          <p className="section-description">
            ODA7’s value is visible in the connected product itself: shared workflows, role-based views and a platform layer built to keep work accountable.
          </p>
        </div>
        <span className="badge badge-subtle">Illustrative product data throughout</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '20px' }}>
        {metricsCounters.map((metric) => (
          <div key={metric.id} className="card-saas" style={{ padding: '24px' }}>
            <div className="text-gradient-accent" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, lineHeight: 1, marginBottom: '10px' }}>
              {metric.value > 0 ? <AnimatedCounter targetValue={metric.value} suffix={metric.suffix} /> : metric.format}
            </div>
            <div style={{ fontWeight: 700, color: '#f8fafc', marginBottom: '6px' }}>{metric.label}</div>
            <p style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.55 }}>{metric.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', overflow: 'hidden', marginBottom: '72px' }}>
        {proofPillars.map((item) => (
          <div key={item.label} style={{ background: '#080b12', padding: '16px 18px' }}>
            <div style={{ color: '#64748b', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>{item.label}</div>
            <div style={{ color: '#dbeafe', fontWeight: 700, fontSize: '0.88rem' }}>{item.value}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
        {productProof.map((item, index) => {
          const Icon = proofIcons[index];
          return (
            <article key={item.title} className="card-saas" style={{ padding: '28px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', display: 'grid', placeItems: 'center', color: '#38bdf8', background: 'rgba(56,189,248,0.1)', marginBottom: '18px' }}><Icon size={20} /></div>
              <h3 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6 }}>{item.description}</p>
              <ArrowUpRight size={16} color="#64748b" style={{ marginTop: '18px' }} aria-hidden="true" />
            </article>
          );
        })}
      </div>
    </div>
  </section>
);
