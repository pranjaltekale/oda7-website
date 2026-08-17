import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ManagerDashboardMockup } from '../mockups/ManagerDashboardMockup';
import {
  Radio,
  Headphones,
  Eye,
  TrendingUp,
  Activity,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export const ManagerFloorSection = () => {
  return (
    <section className="section-wrapper section-alt" id="manager-section">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="Real-Time Floor Visibility"
          eyebrowIcon="Radio"
          title="See the floor. Coach the team."
          highlightText="Move faster."
          description="Give your sales supervisors real-time telemetry across concurrent call queues, rep availability states, and live objection fumbles with 1-click silent listening and headset whisper coaching."
        />

        {/* Manager Real-World Story Strip */}
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
          {/* Manager Photography with Floating Whisper Badge */}
          <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=80"
              alt="Floor Operations Manager Coaching"
              style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(7, 9, 14, 0.85) 100%)' }} />
            <div style={{ position: 'absolute', bottom: '12px', left: '12px', right: '12px', background: 'rgba(11, 15, 23, 0.92)', backdropFilter: 'blur(10px)', padding: '8px 12px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#cbd5e1', fontSize: '0.72rem', fontWeight: '600' }}>Live Supervision Console</span>
              <span className="badge badge-emerald" style={{ fontSize: '0.6rem', padding: '1px 6px' }}>Whisper Active</span>
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="badge badge-primary">Supervisor Command</span>
              <span className="badge badge-emerald">24ms WebRTC Stream</span>
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: '800', color: 'var(--oda-text-primary)', marginBottom: '10px' }}>
              Sub-Second Live Headset Coaching
            </h3>
            <p style={{ color: 'var(--oda-text-secondary)', fontSize: '0.885rem', lineHeight: '1.6', margin: 0 }}>
              Supervisors can monitor active floor queues and whisper direct winning talk tracks into a rep’s headset during high-stakes enterprise negotiations without the client hearing a sound.
            </p>
          </div>
        </div>

        {/* Manager Live Dashboard Frame */}
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <ManagerDashboardMockup />
        </div>

      </div>
    </section>
  );
};
