import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import {
  Users,
  PhoneCall,
  Activity,
  DollarSign,
  TrendingUp,
  Award,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export const ConnectedFloorVisualSection = () => {
  return (
    <section className="section-wrapper" id="floor-operating-picture">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="Shared Operating Reality"
          eyebrowIcon="Activity"
          title="Everyone sees the same"
          highlightText="operating picture."
          description="When sales reps, managers, marketers, and platform executives share the same real-time data mesh, handoffs are instantaneous and execution velocity skyrockets."
        />

        {/* Large Cinematic Hero Composition (Floor Photo with Layered ODA7 Telemetry & Dashboard Window) */}
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            position: 'relative',
            borderRadius: '28px',
            overflow: 'hidden',
            border: '1px solid var(--oda-border-blue)',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.4)',
          }}
        >
          {/* Main Sales Floor Background Photo */}
          <div style={{ position: 'relative', height: '560px' }}>
            <img
              src="/oda7-team-story.jpg"
              alt="Connected Revenue Floor in Action"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 30%',
                display: 'block',
                filter: 'brightness(0.7) contrast(1.1)',
              }}
            />

            {/* Ambient Dark Gradient Layer */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse at 50% 60%, rgba(7, 10, 18, 0.5) 0%, rgba(3, 5, 10, 0.92) 100%)',
              }}
            />

            {/* Overlaid Central ODA7 Dashboard Window */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 'min(900px, calc(100% - 36px))',
                background: 'rgba(11, 15, 23, 0.95)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(59, 130, 246, 0.4)',
                borderRadius: '20px',
                padding: 'clamp(20px, 3vw, 32px)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(37, 99, 235, 0.2)',
                zIndex: 10,
              }}
            >
              {/* Header Bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', paddingBottom: '14px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(37, 99, 235, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8' }}>
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <div style={{ fontWeight: '800', color: '#fff', fontSize: '0.95rem' }}>ODA7 Enterprise Telemetry Mesh</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Synchronized Real-Time Operations • BIZZFLY OS</div>
                  </div>
                </div>

                <span className="badge badge-emerald">
                  All Pods Live
                </span>
              </div>

              {/* 5 Synchronous Indicators Grid (Sales, People, Attendance, Revenue, Performance) */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '14px' }}>
                
                {/* 1. Sales Indicator */}
                <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#38bdf8', fontSize: '0.75rem', fontWeight: '750', textTransform: 'uppercase', marginBottom: '4px' }}>
                    <PhoneCall size={13} />
                    <span>Sales Floor</span>
                  </div>
                  <div style={{ fontSize: '1.15rem', fontWeight: '850', color: '#fff' }}>18 Active Calls</div>
                  <div style={{ color: '#34d399', fontSize: '0.7rem', marginTop: '2px' }}>96/100 Intent Score</div>
                </div>

                {/* 2. People Indicator */}
                <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', fontSize: '0.75rem', fontWeight: '750', textTransform: 'uppercase', marginBottom: '4px' }}>
                    <Users size={13} />
                    <span>People Roster</span>
                  </div>
                  <div style={{ fontSize: '1.15rem', fontWeight: '850', color: '#fff' }}>24 Reps Active</div>
                  <div style={{ color: '#38bdf8', fontSize: '0.7rem', marginTop: '2px' }}>Zero Floor Idle Lag</div>
                </div>

                {/* 3. Attendance Indicator */}
                <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#fbbf24', fontSize: '0.75rem', fontWeight: '750', textTransform: 'uppercase', marginBottom: '4px' }}>
                    <Activity size={13} />
                    <span>Shift Attendance</span>
                  </div>
                  <div style={{ fontSize: '1.15rem', fontWeight: '850', color: '#fff' }}>98.4% On Floor</div>
                  <div style={{ color: '#34d399', fontSize: '0.7rem', marginTop: '2px' }}>Geolocation Verified</div>
                </div>

                {/* 4. Revenue Indicator */}
                <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#34d399', fontSize: '0.75rem', fontWeight: '750', textTransform: 'uppercase', marginBottom: '4px' }}>
                    <DollarSign size={13} />
                    <span>Revenue Pacing</span>
                  </div>
                  <div style={{ fontSize: '1.15rem', fontWeight: '850', color: '#fff' }}>$184.2k MRR</div>
                  <div style={{ color: '#34d399', fontSize: '0.7rem', marginTop: '2px' }}>114% to Target</div>
                </div>

                {/* 5. Performance Indicator */}
                <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#a855f7', fontSize: '0.75rem', fontWeight: '750', textTransform: 'uppercase', marginBottom: '4px' }}>
                    <TrendingUp size={13} />
                    <span>Floor Lift</span>
                  </div>
                  <div style={{ fontSize: '1.15rem', fontWeight: '850', color: '#fff' }}>+34.8% Pickup</div>
                  <div style={{ color: '#38bdf8', fontSize: '0.7rem', marginTop: '2px' }}>Instant Whisper Active</div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
