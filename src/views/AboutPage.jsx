import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import {
  ShieldCheck,
  Cpu,
  Lock,
  Globe,
  Server,
  Zap,
  CheckCircle2,
  Users,
  Award,
  ArrowRight,
} from 'lucide-react';

export const AboutPage = ({ onOpenDemo }) => {
  return (
    <div>
      
      <PageHeader
        badge="Mission & Architecture"
        badgeIcon="ShieldCheck"
        title="We are building the intelligent"
        highlight="operating layer for sales."
        description="ODA7 starts from a simple operating problem: talented teams lose context when customer work, people operations, and performance live in separate systems."
      />

      <div className="container" style={{ paddingBottom: 'clamp(40px, 5vw, 68px)' }}>
        
        {/* Core Mission Banner */}
        <div
          className="feature-showcase-panel"
          style={{
            borderRadius: '20px',
            padding: 'clamp(32px, 4.5vw, 48px) clamp(20px, 3.5vw, 36px)',
            marginBottom: 'clamp(36px, 5vw, 64px)',
          }}
        >
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
            <span className="badge badge-emerald" style={{ marginBottom: '16px' }}>Our Engineering Thesis</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--oda-text-primary)', marginBottom: '20px', lineHeight: '1.2' }}>
              One connected operating context across the business.
            </h2>
            <p style={{ color: 'var(--oda-text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '24px' }}>
              Customer records, conversations, team availability, and compensation context often sit in different systems. ODA7 is designed to keep those operating layers connected while each role stays focused on its own work.
            </p>
          </div>
        </div>

        {/* 3 Core Architecture Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: 'clamp(36px, 5vw, 64px)' }}>
          
          <div className="card-saas">
            <Cpu size={24} color="#38bdf8" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--oda-text-primary)', marginBottom: '10px' }}>
              In-Workflow Calling
            </h3>
            <p style={{ color: 'var(--oda-text-secondary)', fontSize: '0.875rem', lineHeight: '1.6' }}>
              Bring configured calling controls, customer context, and available conversation assistance into the same sales workflow.
            </p>
          </div>

          <div className="card-saas">
            <Server size={24} color="#10b981" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--oda-text-primary)', marginBottom: '10px' }}>
              Connected Activity Context
            </h3>
            <p style={{ color: 'var(--oda-text-secondary)', fontSize: '0.875rem', lineHeight: '1.6' }}>
              When activity changes, the related sales, people and management views can reflect the same workflow state.
            </p>
          </div>

          <div className="card-saas">
            <Lock size={24} color="#fbbf24" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--oda-text-primary)', marginBottom: '10px' }}>
              Multi-Tenant Data Isolation
            </h3>
            <p style={{ color: 'var(--oda-text-secondary)', fontSize: '0.875rem', lineHeight: '1.6' }}>
              Organization controls and platform administration help operators manage how workspaces are structured and accessed.
            </p>
          </div>

        </div>

        {/* Security & Compliance Section */}
        <div
          id="security"
          className="feature-showcase-panel"
          style={{
            borderRadius: '20px',
            padding: 'clamp(32px, 4.5vw, 48px) clamp(20px, 3.5vw, 36px)',
            marginBottom: 'clamp(36px, 5vw, 64px)',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px auto' }}>
            <span className="badge badge-primary" style={{ marginBottom: '12px' }}>Security & Governance</span>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--oda-text-primary)', marginBottom: '10px' }}>
              Platform controls that support responsible operations
            </h2>
            <p style={{ color: 'var(--oda-text-secondary)', fontSize: '0.95rem' }}>
              Review the access, activity, and platform controls represented in the current ODA7 product experience.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            <div style={{ background: 'var(--oda-surface)', padding: '20px', borderRadius: '12px', border: '1px solid var(--oda-border)', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <ShieldCheck size={28} color="#10b981" style={{ margin: '0 auto 8px auto' }} />
              <div style={{ fontWeight: '700', color: 'var(--oda-text-primary)', fontSize: '1rem' }}>Role-based access</div>
              <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.75rem', marginTop: '4px' }}>Shape workspaces around responsibilities</div>
            </div>

            <div style={{ background: 'var(--oda-surface)', padding: '20px', borderRadius: '12px', border: '1px solid var(--oda-border)', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <Lock size={28} color="#38bdf8" style={{ margin: '0 auto 8px auto' }} />
              <div style={{ fontWeight: '700', color: 'var(--oda-text-primary)', fontSize: '1rem' }}>Audit visibility</div>
              <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.75rem', marginTop: '4px' }}>Review platform and login activity</div>
            </div>

            <div style={{ background: 'var(--oda-surface)', padding: '20px', borderRadius: '12px', border: '1px solid var(--oda-border)', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <Award size={28} color="#fbbf24" style={{ margin: '0 auto 8px auto' }} />
              <div style={{ fontWeight: '700', color: 'var(--oda-text-primary)', fontSize: '1rem' }}>IP controls</div>
              <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.75rem', marginTop: '4px' }}>Manage allowed and blocked network access</div>
            </div>

            <div style={{ background: 'var(--oda-surface)', padding: '20px', borderRadius: '12px', border: '1px solid var(--oda-border)', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <Server size={28} color="#a855f7" style={{ margin: '0 auto 8px auto' }} />
              <div style={{ fontWeight: '700', color: 'var(--oda-text-primary)', fontSize: '1rem' }}>Admin notifications</div>
              <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.75rem', marginTop: '4px' }}>Keep platform operators aware of changes</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center' }}>
          <Button demo variant="primary" size="lg" iconLeft="Sparkles">
            Experience the oda7 Platform Tour
          </Button>
        </div>

      </div>

    </div>
  );
};
