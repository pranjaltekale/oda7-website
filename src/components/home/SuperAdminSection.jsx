import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { SuperAdminMockup } from '../mockups/SuperAdminMockup';
import { ShieldCheck, Building2, Layers, Globe, CheckCircle2 } from 'lucide-react';

export const SuperAdminSection = () => {
  return (
    <section id="super-admin" className="section-wrapper section-alt">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="Multi-Tenant SaaS Platform"
          eyebrowIcon="ShieldCheck"
          title="Operate every organization"
          highlightText="from one platform."
          description="Provision client organizations with 100% data isolation, configure recurring subscription tiers, monitor consolidated ARR telemetry, and enforce global IP threat defense under the BIZZFLY master console."
        />

        {/* Super Admin Executive Story Strip */}
        <div
          style={{
            maxWidth: '1180px',
            margin: '0 auto 32px auto',
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 340px) 1fr',
            gap: '32px',
            alignItems: 'center',
            borderRadius: '20px',
            padding: '28px',
          }}
          className="feature-showcase-panel mockup-grid-2col"
        >
          {/* Executive Leadership Photo */}
          <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <img
              src="/oda7-leadership-analytics.jpg"
              alt="Platform Executive Leadership"
              style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(7, 9, 14, 0.85) 100%)' }} />
            <div style={{ position: 'absolute', bottom: '12px', left: '12px', right: '12px', background: 'rgba(11, 15, 23, 0.92)', backdropFilter: 'blur(10px)', padding: '8px 12px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#cbd5e1', fontSize: '0.72rem', fontWeight: '600' }}>BIZZFLY SaaS Platform Root</span>
              <span className="badge badge-emerald" style={{ fontSize: '0.6rem', padding: '1px 6px' }}>48 Active Tenants</span>
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="badge badge-emerald">Platform Multi-Tenancy</span>
              <span className="badge badge-cyan">SOC2 Type II & GDPR</span>
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: '800', color: 'var(--oda-text-primary)', marginBottom: '10px' }}>
              Enterprise Data Isolation & White-Label Provisioning
            </h3>
            <p style={{ color: 'var(--oda-text-secondary)', fontSize: '0.885rem', lineHeight: '1.6', margin: 0 }}>
              Each customer organization operates in its own isolated database partition with dedicated telephony routing, custom CNAME white-label branding, and automated recurring billing meters.
            </p>
          </div>
        </div>

        {/* Super Admin Mockup */}
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <SuperAdminMockup />
        </div>

      </div>
    </section>
  );
};
