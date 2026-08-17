import React, { useState } from 'react';
import {
  XCircle,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Layers,
  Clock,
  ArrowRight,
  TrendingDown,
  TrendingUp,
} from 'lucide-react';

export const BeforeAfterSlider = () => {
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);

  const handleSliderMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(10, Math.min((x / rect.width) * 100, 90));
    setSliderPos(percent);
  };

  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percent = Math.max(10, Math.min((x / rect.width) * 100, 90));
    setSliderPos(percent);
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      
      {/* Quick Mode Toggle buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
        <button
          onClick={() => setSliderPos(15)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 18px',
            borderRadius: 'var(--radius-full)',
            background: sliderPos < 40 ? 'rgba(239, 68, 68, 0.2)' : 'rgba(255,255,255,0.05)',
            border: sliderPos < 40 ? '1px solid rgba(239, 68, 68, 0.4)' : '1px solid rgba(255,255,255,0.08)',
            color: sliderPos < 40 ? '#fca5a5' : '#94a3b8',
            fontSize: '0.8125rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all var(--transition-fast)',
          }}
        >
          <XCircle size={15} color="#ef4444" />
          <span>Show "Without ODA7"</span>
        </button>

        <button
          onClick={() => setSliderPos(50)}
          style={{
            padding: '8px 18px',
            borderRadius: 'var(--radius-full)',
            background: sliderPos >= 40 && sliderPos <= 60 ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255,255,255,0.05)',
            border: sliderPos >= 40 && sliderPos <= 60 ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid rgba(255,255,255,0.08)',
            color: sliderPos >= 40 && sliderPos <= 60 ? '#38bdf8' : '#94a3b8',
            fontSize: '0.8125rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all var(--transition-fast)',
          }}
        >
          <span>50 / 50 Comparison</span>
        </button>

        <button
          onClick={() => setSliderPos(85)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 18px',
            borderRadius: 'var(--radius-full)',
            background: sliderPos > 60 ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255,255,255,0.05)',
            border: sliderPos > 60 ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid rgba(255,255,255,0.08)',
            color: sliderPos > 60 ? '#34d399' : '#94a3b8',
            fontSize: '0.8125rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all var(--transition-fast)',
          }}
        >
          <CheckCircle2 size={15} color="#10b981" />
          <span>Show "With ODA7"</span>
        </button>
      </div>

      {/* Interactive Split Comparison Box */}
      <label style={{ display: 'block', maxWidth: '520px', margin: '0 auto 16px', color: '#94a3b8', fontSize: '0.75rem', textAlign: 'center' }}>
        Comparison position
        <input
          type="range"
          min="10"
          max="90"
          value={sliderPos}
          onChange={(event) => setSliderPos(Number(event.target.value))}
          aria-label="Adjust the before and after ODA7 comparison"
          style={{ width: '100%', marginTop: '8px', accentColor: '#2563eb' }}
        />
      </label>
      <div
        onMouseMove={(e) => {
          if (isDragging) handleSliderMove(e);
        }}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        style={{
          position: 'relative',
          background: '#0a0e17',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          borderRadius: '20px',
          overflow: 'hidden',
          minHeight: '440px',
          boxShadow: '0 25px 60px rgba(0,0,0,0.7)',
          userSelect: 'none',
          cursor: isDragging ? 'ew-resize' : 'default',
        }}
      >
        {/* Right Side / Background: WITH ODA7 */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(14, 23, 42, 0.95) 0%, rgba(7, 10, 18, 0.98) 100%)',
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ maxWidth: '460px', marginLeft: 'auto', textAlign: 'left' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: 'var(--radius-full)', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.35)', color: '#34d399', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '14px' }}>
              <CheckCircle2 size={14} />
              <span>With ODA7 Unified System</span>
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#fff', marginBottom: '12px' }}>
              One Synchronous Operating Mesh
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1' }}>
                <CheckCircle2 size={15} color="#10b981" />
                <span><strong>Centralized Workflow:</strong> Dialer, CRM, WhatsApp, and quotes in 1 tab.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1' }}>
                <CheckCircle2 size={15} color="#10b981" />
                <span><strong>Real-Time Visibility:</strong> Live floor queues with 1-click whisper coaching.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1' }}>
                <CheckCircle2 size={15} color="#10b981" />
                <span><strong>Role-Based Workspaces:</strong> Custom screens for Sales, Mgr, Admin, Super Admin.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1' }}>
                <CheckCircle2 size={15} color="#10b981" />
                <span><strong>Automated Processes:</strong> Instant commissions, auto notes, and sequences.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1' }}>
                <CheckCircle2 size={15} color="#10b981" />
                <span><strong>Actionable Insights:</strong> "Explain My Numbers" natural language BI.</span>
              </div>
            </div>

            <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
              <span className="badge badge-emerald">Connected workflow</span>
              <span className="badge badge-cyan">&lt;15s Speed-to-Lead</span>
            </div>
          </div>
        </div>

        {/* Left Side / Clip: WITHOUT ODA7 */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            width: `${sliderPos}%`,
            background: 'linear-gradient(135deg, rgba(26, 12, 16, 0.98) 0%, rgba(15, 8, 12, 0.98) 100%)',
            borderRight: '2px solid #38bdf8',
            padding: '36px',
            overflow: 'hidden',
            boxShadow: '10px 0 30px rgba(0,0,0,0.8)',
            zIndex: 5,
          }}
        >
          <div style={{ width: '460px', textAlign: 'left' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: 'var(--radius-full)', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.35)', color: '#fca5a5', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '14px' }}>
              <XCircle size={14} color="#ef4444" />
              <span>Without ODA7 (Fragmented Silos)</span>
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#fff', marginBottom: '12px' }}>
              10+ Disjointed Tool Subscriptions
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1' }}>
                <XCircle size={15} color="#ef4444" />
                <span><strong>Scattered Activity:</strong> Reps toggle between 5+ browser tabs constantly.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1' }}>
                <XCircle size={15} color="#ef4444" />
                <span><strong>Manual Follow-ups:</strong> Leads sit cold for 20+ mins before contact.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1' }}>
                <XCircle size={15} color="#ef4444" />
                <span><strong>Poor Floor Visibility:</strong> Managers blind to live queue volume until EOD.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1' }}>
                <XCircle size={15} color="#ef4444" />
                <span><strong>Disconnected Teams:</strong> Inaccurate spreadsheet commissions cause disputes.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1' }}>
                <XCircle size={15} color="#ef4444" />
                <span><strong>Delayed Reporting:</strong> Weekly CSV exports with zero live AI coaching.</span>
              </div>
            </div>

            <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
              <span className="badge badge-amber" style={{ color: '#fca5a5', background: 'rgba(239, 68, 68, 0.15)', borderColor: 'rgba(239, 68, 68, 0.3)' }}>-45% Rep Productivity</span>
              <span className="badge badge-amber" style={{ color: '#fca5a5', background: 'rgba(239, 68, 68, 0.15)', borderColor: 'rgba(239, 68, 68, 0.3)' }}>Duplicated effort</span>
            </div>
          </div>
        </div>

        {/* Draggable Divider Handle */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: `${sliderPos}%`,
            width: '4px',
            transform: 'translateX(-50%)',
            background: '#38bdf8',
            zIndex: 10,
            cursor: 'ew-resize',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(56, 189, 248, 0.6)',
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#0e1320',
              border: '2px solid #38bdf8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#38bdf8',
              fontSize: '0.75rem',
              fontWeight: '700',
              boxShadow: '0 4px 12px rgba(0,0,0,0.6)',
            }}
          >
            ↔
          </div>
        </div>

      </div>

    </div>
  );
};
