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
    <div style={{ paddingTop: '20px', paddingBottom: '100px' }}>
      
      <PageHeader
        badge="Mission & Architecture"
        badgeIcon="ShieldCheck"
        title="We are building the intelligent"
        highlight="operating layer for sales."
        description="oda7 was born from a simple realization: high-velocity revenue teams are failing not from a lack of talent, but because their tools are fragmented into 10+ disjointed silos."
      />

      <div className="container">
        
        {/* Core Mission Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(14, 23, 42, 0.9) 0%, rgba(7, 10, 18, 0.95) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.35)',
            borderRadius: '20px',
            padding: '48px 36px',
            marginBottom: '80px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
          }}
        >
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
            <span className="badge badge-emerald" style={{ marginBottom: '16px' }}>Our Engineering Thesis</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#fff', marginBottom: '20px', lineHeight: '1.2' }}>
              One Synchronous Database. Sub-Second Execution. Zero Context Loss.
            </h2>
            <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '24px' }}>
              Traditional CRMs treat telephony as an afterthought plugin. Standalone VoIP dialers know nothing about deal stages. Payroll systems have no direct link to Closed-Won timestamps. oda7 re-architects the entire revenue stack from the ground up on an event-driven real-time mesh.
            </p>
          </div>
        </div>

        {/* 3 Core Architecture Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '80px' }}>
          
          <div className="card-saas">
            <Cpu size={24} color="#38bdf8" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#fff', marginBottom: '10px' }}>
              Low-Latency WebRTC Core
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.6' }}>
              Sub-second global telephony routes ensure crisp, crystal-clear audio with dual-channel speech streaming for instant live AI sentiment analysis.
            </p>
          </div>

          <div className="card-saas">
            <Server size={24} color="#10b981" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#fff', marginBottom: '10px' }}>
              Synchronous Event Mesh
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.6' }}>
              When a call completes, CRM stages update, commissions calculate, and manager queue loads rebalance simultaneously across all connected devices in under 50ms.
            </p>
          </div>

          <div className="card-saas">
            <Lock size={24} color="#fbbf24" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#fff', marginBottom: '10px' }}>
              Multi-Tenant Data Isolation
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.6' }}>
              Encrypted PostgreSQL schemas and dedicated vector namespaces ensure zero cross-tenant contamination for enterprise and agency deployments.
            </p>
          </div>

        </div>

        {/* Security & Compliance Section */}
        <div
          id="security"
          style={{
            background: 'rgba(14, 19, 31, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '48px 36px',
            marginBottom: '80px',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px auto' }}>
            <span className="badge badge-primary" style={{ marginBottom: '12px' }}>Security & Governance</span>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#fff', marginBottom: '10px' }}>
              Platform controls that support responsible operations
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
              ODA7 surfaces administration capabilities without claiming certifications that have not been verified in the project source.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            <div style={{ background: 'rgba(7, 10, 18, 0.8)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
              <ShieldCheck size={28} color="#10b981" style={{ margin: '0 auto 8px auto' }} />
              <div style={{ fontWeight: '700', color: '#fff', fontSize: '1rem' }}>Role-based access</div>
              <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '4px' }}>Shape workspaces around responsibilities</div>
            </div>

            <div style={{ background: 'rgba(7, 10, 18, 0.8)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
              <Lock size={28} color="#38bdf8" style={{ margin: '0 auto 8px auto' }} />
              <div style={{ fontWeight: '700', color: '#fff', fontSize: '1rem' }}>Audit visibility</div>
              <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '4px' }}>Review platform and login activity</div>
            </div>

            <div style={{ background: 'rgba(7, 10, 18, 0.8)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
              <Award size={28} color="#fbbf24" style={{ margin: '0 auto 8px auto' }} />
              <div style={{ fontWeight: '700', color: '#fff', fontSize: '1rem' }}>IP controls</div>
              <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '4px' }}>Manage allowed and blocked network access</div>
            </div>

            <div style={{ background: 'rgba(7, 10, 18, 0.8)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
              <Server size={28} color="#a855f7" style={{ margin: '0 auto 8px auto' }} />
              <div style={{ fontWeight: '700', color: '#fff', fontSize: '1rem' }}>Admin notifications</div>
              <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '4px' }}>Keep platform operators aware of changes</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center' }}>
          <Button onClick={onOpenDemo} variant="primary" size="lg" iconLeft="Sparkles">
            Experience the oda7 Platform Tour
          </Button>
        </div>

      </div>

    </div>
  );
};
