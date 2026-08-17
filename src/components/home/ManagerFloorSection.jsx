import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ManagerDashboardMockup } from '../mockups/ManagerDashboardMockup';
import {
  LayoutDashboard,
  Headphones,
  Activity,
  Users,
  Eye,
  CheckCircle2,
} from 'lucide-react';

export const ManagerFloorSection = () => {
  return (
    <section id="manager-section" className="section-wrapper" style={{ background: '#05070c' }}>
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="Manager Command Center"
          eyebrowIcon="LayoutDashboard"
          title="Run the entire sales floor with"
          highlightText="real-time precision."
          description="Supervisors get complete live visibility into active concurrent calls, floor queue loads, rep statuses, and team pickup ratios. Whisper coach reps during high-stakes calls without the client ever knowing."
        />

        {/* Manager Console Mockup */}
        <div style={{ maxWidth: '1100px', margin: '0 auto 48px auto' }}>
          <ManagerDashboardMockup />
        </div>

        {/* 3 Pillars of Floor Management */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', maxWidth: '1100px', margin: '0 auto' }}>
          
          <div className="card-saas">
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8', marginBottom: '16px' }}>
              <Headphones size={20} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>
              Live Whisper Coaching & Barging
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.6' }}>
              Listen in silently, whisper direct coaching cues into an agent’s headset, or barge in to turn a pivotal conversation around. Zero software installs required.
            </p>
          </div>

          <div className="card-saas">
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981', marginBottom: '16px' }}>
              <Activity size={20} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>
              Real-Time Pickup Telemetry
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.6' }}>
              Track answer rates across carrier routes, area code pools, and rep squads. Instantly detect carrier dips and re-route traffic to protect floor throughput.
            </p>
          </div>

          <div className="card-saas">
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fbbf24', marginBottom: '16px' }}>
              <Users size={20} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>
              Dynamic Squad & Queue Balancing
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.6' }}>
              Reallocate inbound and outbound call loads across SDR pods based on rep availability, shift schedules, and historical closing efficiency.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
