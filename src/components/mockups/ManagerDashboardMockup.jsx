import React, { useState, useEffect } from 'react';
import {
  Users,
  PhoneCall,
  Headphones,
  Eye,
  Radio,
  Clock,
  TrendingUp,
  Activity,
  AlertCircle,
  Filter,
  CheckCircle,
  Sparkles,
  Volume2,
} from 'lucide-react';

export const ManagerDashboardMockup = () => {
  const [selectedAgent, setSelectedAgent] = useState('Alex Rivera');
  const [coachingMode, setCoachingMode] = useState('whisper'); // 'listen' | 'whisper' | 'barge'
  const [selectedSquad, setSelectedSquad] = useState('all');
  const [whisperFeedback, setWhisperFeedback] = useState(null);

  const handleSendWhisper = () => {
    setWhisperFeedback(`Streaming 24ms audio cue to ${selectedAgent}'s headset...`);
    setTimeout(() => {
      setWhisperFeedback(`✓ Cue delivered to ${selectedAgent}!`);
      setTimeout(() => setWhisperFeedback(null), 2500);
    }, 400);
  };

  const agents = [
    { name: 'Alex Rivera', squad: 'inside', status: 'On Call (02:45)', state: 'on-call', lead: 'Sarah Jenkins (Logix)', score: 96, calls: 68, conv: '41%' },
    { name: 'Marcus Chen', squad: 'enterprise', status: 'On Call (05:12)', state: 'on-call', lead: 'David Ross (Apex)', score: 88, calls: 74, conv: '38%' },
    { name: 'Elena Vance', squad: 'inside', status: 'Available', state: 'available', lead: 'Next in Queue', score: 92, calls: 61, conv: '45%' },
    { name: 'Samira Khan', squad: 'inbound', status: 'In Wrap-Up', state: 'wrap-up', lead: 'Auto-logging CRM', score: 85, calls: 59, conv: '34%' },
    { name: 'Tyler Reed', squad: 'inside', status: 'Available', state: 'available', lead: 'Next in Queue', score: 79, calls: 52, conv: '30%' },
    { name: 'Chloe Dubois', squad: 'enterprise', status: 'On Break', state: 'break', lead: 'Shift Resumes 2:30 PM', score: 91, calls: 48, conv: '42%' },
  ];

  const filteredAgents = selectedSquad === 'all'
    ? agents
    : agents.filter(a => a.squad === selectedSquad);

  return (
    <div className="dashboard-mockup-frame card-interactive-lift">
      {/* Header bar */}
      <div className="mockup-header-bar">
        <div className="mockup-dots">
          <div className="mockup-dot red" />
          <div className="mockup-dot yellow" />
          <div className="mockup-dot green" />
        </div>
        <div className="mockup-title-bar">
          <span className="pulse-dot" />
          <span>oda7 // BIZZFLY Manager Floor Command — Inside Sales Pod Alpha</span>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <div className="audio-wave-live" style={{ filter: 'brightness(1.4)' }}>
            <span />
            <span />
            <span />
            <span />
          </div>
          <span className="badge badge-emerald" style={{ fontSize: '0.6875rem' }}>
            Floor Queue: 0s Delay • Optimal
          </span>
        </div>
      </div>

      {/* Main Container */}
      <div style={{ padding: '20px', background: 'var(--oda-surface)', fontSize: '0.8125rem' }}>
        
        {/* Top Metric Strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '20px' }}>
          
          <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Floor Pickup Ratio</span>
              <Activity size={13} color="var(--oda-success)" />
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--oda-success)' }}>78.4%</div>
            <div style={{ color: 'var(--oda-success)', fontSize: '0.7rem', marginTop: '2px' }}>+6.2% vs target benchmark</div>
          </div>

          <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Active Concurrent Calls</span>
              <PhoneCall size={13} color="var(--oda-primary)" />
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--oda-primary)' }}>18 Calls</div>
            <div style={{ color: 'var(--oda-text-secondary)', fontSize: '0.7rem', marginTop: '2px' }}>24 Reps clocked in</div>
          </div>

          <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Floor Queue Load</span>
              <Users size={13} color="#fbbf24" />
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fbbf24' }}>0 Waiting</div>
            <div style={{ color: 'var(--oda-success)', fontSize: '0.7rem', marginTop: '2px' }}>Avg answer speed: 9.4s</div>
          </div>

          <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Today Closed ARR</span>
              <TrendingUp size={13} color="var(--oda-success)" />
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--oda-success)' }}>$94,200</div>
            <div style={{ color: 'var(--oda-primary)', fontSize: '0.7rem', marginTop: '2px' }}>112% quota pacing</div>
          </div>

        </div>

        {/* Middle Grid: Live Agent Roster + Live Supervision Console */}
        <div className="mockup-grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '16px' }}>
          
          {/* Agent Live Status Grid */}
          <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border)', borderRadius: '10px', padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
              <div style={{ fontWeight: '700', color: 'var(--oda-text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Radio size={14} color="var(--oda-success)" />
                <span>Live Sales Floor Roster</span>
              </div>
              <div style={{ display: 'flex', gap: '6px' }}>
                <button
                  onClick={() => setSelectedSquad('all')}
                  className="tab-pill-interactive"
                  style={{
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '0.6875rem',
                    fontWeight: '600',
                    background: selectedSquad === 'all' ? 'var(--oda-primary-soft)' : 'var(--oda-surface)',
                    color: selectedSquad === 'all' ? 'var(--oda-primary)' : 'var(--oda-text-muted)',
                    border: selectedSquad === 'all' ? '1px solid var(--oda-border-blue)' : '1px solid var(--oda-border)',
                  }}
                >
                  All (24)
                </button>
                <button
                  onClick={() => setSelectedSquad('inside')}
                  className="tab-pill-interactive"
                  style={{
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '0.6875rem',
                    fontWeight: '600',
                    background: selectedSquad === 'inside' ? 'var(--oda-primary-soft)' : 'var(--oda-surface)',
                    color: selectedSquad === 'inside' ? 'var(--oda-primary)' : 'var(--oda-text-muted)',
                    border: selectedSquad === 'inside' ? '1px solid var(--oda-border-blue)' : '1px solid var(--oda-border)',
                  }}
                >
                  Inside Pod
                </button>
                <button
                  onClick={() => setSelectedSquad('enterprise')}
                  className="tab-pill-interactive"
                  style={{
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '0.6875rem',
                    fontWeight: '600',
                    background: selectedSquad === 'enterprise' ? 'var(--oda-primary-soft)' : 'var(--oda-surface)',
                    color: selectedSquad === 'enterprise' ? 'var(--oda-primary)' : 'var(--oda-text-muted)',
                    border: selectedSquad === 'enterprise' ? '1px solid var(--oda-border-blue)' : '1px solid var(--oda-border)',
                  }}
                >
                  Enterprise
                </button>
              </div>
            </div>

            {/* Table */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {filteredAgents.map((agent) => (
                <div
                  key={agent.name}
                  onClick={() => setSelectedAgent(agent.name)}
                  className="tab-pill-interactive"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1.4fr 1.2fr 1fr 100px',
                    alignItems: 'center',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: selectedAgent === agent.name ? 'var(--oda-primary-soft)' : 'var(--oda-surface)',
                    border: selectedAgent === agent.name ? '1px solid var(--oda-border-blue)' : '1px solid var(--oda-border)',
                    boxShadow: selectedAgent === agent.name ? '0 2px 10px rgba(37, 99, 235, 0.12)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: agent.state === 'on-call' ? '#10b981' : agent.state === 'available' ? '#38bdf8' : agent.state === 'wrap-up' ? '#f59e0b' : '#64748b',
                    }} />
                    <div>
                      <div style={{ fontWeight: '600', color: 'var(--oda-text-primary)' }}>{agent.name}</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--oda-text-muted)' }}>Score: {agent.score}/100</div>
                    </div>
                  </div>

                  <div>
                    <div style={{ color: agent.state === 'on-call' ? 'var(--oda-success)' : 'var(--oda-text-secondary)', fontSize: '0.75rem', fontWeight: '500' }}>
                      {agent.status}
                    </div>
                    <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.7rem' }}>{agent.lead}</div>
                  </div>

                  <div>
                    <div style={{ color: 'var(--oda-text-primary)', fontSize: '0.75rem', fontWeight: '600' }}>{agent.calls} Dials</div>
                    <div style={{ color: 'var(--oda-primary)', fontSize: '0.7rem' }}>{agent.conv} Conv</div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    {agent.state === 'on-call' ? (
                      <button className="btn-tactile" style={{ padding: '4px 10px', borderRadius: '4px', background: 'var(--oda-primary-soft)', border: '1px solid var(--oda-border-blue)', color: 'var(--oda-primary)', fontSize: '0.7rem', fontWeight: '600', cursor: 'pointer' }}>
                        Supervise
                      </button>
                    ) : (
                      <span style={{ fontSize: '0.7rem', color: 'var(--oda-text-muted)' }}>Standby</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live Supervisor Coaching Station */}
          <div style={{ background: 'var(--oda-bg-alt)', border: '1px solid var(--oda-border)', borderRadius: '10px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontWeight: '700', color: 'var(--oda-text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Headphones size={15} color="var(--oda-primary)" />
                <span>Live Supervisor Console</span>
              </div>
              <span className="badge badge-emerald" style={{ fontSize: '0.65rem' }}>Active Stream</span>
            </div>

            {/* Target Agent Card */}
            <div style={{ background: 'var(--oda-surface)', border: '1px solid var(--oda-border)', borderRadius: '8px', padding: '12px' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--oda-text-muted)' }}>Supervising Agent:</div>
              <div style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--oda-text-primary)', marginTop: '2px' }}>{selectedAgent}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--oda-primary)', marginTop: '2px' }}>Live Call with: Sarah Jenkins (Logix)</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--oda-success)', marginTop: '4px' }}>Audio: 24ms WebRTC • Dual Stream Active</div>
            </div>

            {/* Mode selector */}
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--oda-text-muted)', textTransform: 'uppercase', marginBottom: '6px', fontWeight: '600' }}>Supervision Mode</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
                <button
                  onClick={() => setCoachingMode('listen')}
                  className="tab-pill-interactive"
                  style={{
                    padding: '8px 4px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    textAlign: 'center',
                    background: coachingMode === 'listen' ? 'var(--oda-primary-soft)' : 'var(--oda-surface)',
                    color: coachingMode === 'listen' ? 'var(--oda-primary)' : 'var(--oda-text-muted)',
                    border: coachingMode === 'listen' ? '1px solid var(--oda-border-blue)' : '1px solid var(--oda-border)',
                  }}
                >
                  Listen
                </button>
                <button
                  onClick={() => setCoachingMode('whisper')}
                  className="tab-pill-interactive"
                  style={{
                    padding: '8px 4px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    textAlign: 'center',
                    background: coachingMode === 'whisper' ? 'var(--oda-primary-soft)' : 'var(--oda-surface)',
                    color: coachingMode === 'whisper' ? 'var(--oda-primary)' : 'var(--oda-text-muted)',
                    border: coachingMode === 'whisper' ? '1px solid var(--oda-border-blue)' : '1px solid var(--oda-border)',
                  }}
                >
                  Whisper
                </button>
                <button
                  onClick={() => setCoachingMode('barge')}
                  className="tab-pill-interactive"
                  style={{
                    padding: '8px 4px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    textAlign: 'center',
                    background: coachingMode === 'barge' ? 'rgba(239, 68, 68, 0.15)' : 'var(--oda-surface)',
                    color: coachingMode === 'barge' ? '#ef4444' : 'var(--oda-text-muted)',
                    border: coachingMode === 'barge' ? '1px solid rgba(239, 68, 68, 0.4)' : '1px solid var(--oda-border)',
                  }}
                >
                  Barge In
                </button>
              </div>
            </div>

            {/* Whisper Cue */}
            <div style={{ marginTop: 'auto', background: 'var(--oda-surface)', border: '1px solid var(--oda-border)', borderRadius: '8px', padding: '12px' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--oda-text-muted)', marginBottom: '6px' }}>Direct Rep Headset Whisper</div>
              <div style={{ background: 'var(--oda-bg-alt)', padding: '8px', borderRadius: '6px', fontSize: '0.75rem', color: 'var(--oda-text-secondary)', marginBottom: '8px', border: '1px solid var(--oda-border)' }}>
                "Ask for the 2-year upfront commitment to waive setup fee."
              </div>
              <button
                onClick={handleSendWhisper}
                className="btn-tactile"
                style={{ width: '100%', padding: '8px', borderRadius: '6px', background: 'var(--oda-primary)', color: '#fff', fontWeight: '700', fontSize: '0.75rem', border: 'none', cursor: 'pointer' }}
              >
                Send Live Audio Whisper
              </button>

              {whisperFeedback && (
                <div className="animate-fadeIn" style={{ marginTop: '8px', fontSize: '0.72rem', color: 'var(--oda-success)', fontWeight: '700', textAlign: 'center' }}>
                  {whisperFeedback}
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
