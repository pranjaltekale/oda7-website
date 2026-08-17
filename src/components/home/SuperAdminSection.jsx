import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { SuperAdminMockup } from '../mockups/SuperAdminMockup';
import {
  ShieldCheck,
  Building2,
  Lock,
  Globe,
  DollarSign,
  TrendingUp,
  Server,
  Zap,
} from 'lucide-react';

export const SuperAdminSection = () => {
  return (
    <section id="super-admin" className="section-wrapper" style={{ background: '#05070c' }}>
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="Enterprise & Multi-Tenant Architecture"
          eyebrowIcon="ShieldCheck"
          title="Operate oda7 as your own"
          highlightText="multi-tenant SaaS platform."
          description="Built for agencies, enterprise conglomerates, and SaaS resellers who need to provision and govern dozens of isolated client sales organizations from a single master control plane."
        />

        {/* Master Console Mockup */}
        <div style={{ maxWidth: '1100px', margin: '0 auto 48px auto' }}>
          <SuperAdminMockup />
        </div>

        {/* 4 Multi-Tenant Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', maxWidth: '1100px', margin: '0 auto' }}>
          
          <div className="card-saas">
            <Building2 size={22} color="#38bdf8" style={{ marginBottom: '14px' }} />
            <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>
              Multi-Tenant Provisioning
            </h4>
            <p style={{ color: '#94a3b8', fontSize: '0.8125rem', lineHeight: '1.6' }}>
              Create and manage customer organizations, plans and platform access from one administrative view.
            </p>
          </div>

          <div className="card-saas">
            <DollarSign size={22} color="#10b981" style={{ marginBottom: '14px' }} />
            <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>
              SaaS Billing & Invoicing
            </h4>
            <p style={{ color: '#94a3b8', fontSize: '0.8125rem', lineHeight: '1.6' }}>
              Configure subscription tiers, seat limits, telephony minute packages, coupon discounts, and automated VAT invoices.
            </p>
          </div>

          <div className="card-saas">
            <Lock size={22} color="#fbbf24" style={{ marginBottom: '14px' }} />
            <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>
              Global IP & Threat Defense
            </h4>
            <p style={{ color: '#94a3b8', fontSize: '0.8125rem', lineHeight: '1.6' }}>
              Use IP controls, audit visibility and role-aware settings to support platform governance.
            </p>
          </div>

          <div className="card-saas">
            <Globe size={22} color="#a855f7" style={{ marginBottom: '14px' }} />
            <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>
              White-Label Custom Branding
            </h4>
            <p style={{ color: '#94a3b8', fontSize: '0.8125rem', lineHeight: '1.6' }}>
              Deliver custom branded portals with customer logos, custom domains (CNAME), and tailored email invitation styling.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
