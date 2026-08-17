import React, { useState } from 'react';
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
} from 'lucide-react';

export const ManagerDashboardMockup = () => {
  const [selectedAgent, setSelectedAgent] = useState('Alex Rivera');
  const [coachingMode, setCoachingMode] = useState('whisper'); // 'listen' | 'whisper' | 'barge'
  const [selectedSquad, setSelectedSquad] = useState('all');

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
    <div className="dashboard-mockup-frame">
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
          <span className="badge badge-emerald" style={{ fontSize: '0.6875rem' }}>
            Floor Queue: 0s Delay • Optimal
          </span>
        </div>
      </div>

      {/* Main Container */}
      <div style={{ padding: '20px', background: '#070a12', fontSize: '0.8125rem' }}>
        
        {/* Top Metric Strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '20px' }}>
          
          <div style={{ background: 'rgba(14, 19, 32, 0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ color: '#94a3b8', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Floor Pickup Ratio</span>
              <Activity size={13} color="#10b981" />
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fff' }}>78.4%</div>
            <div style={{ color: '#34d399', fontSize: '0.7rem', marginTop: '2px' }}>+6.2% vs target benchmark</div>
          </div>

          <div style={{ background: 'rgba(14, 19, 32, 0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ color: '#94a3b8', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Active Concurrent Calls</span>
              <PhoneCall size={13} color="#38bdf8" />
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#38bdf8' }}>18 Calls</div>
            <div style={{ color: '#94a3b8', fontSize: '0.7rem', marginTop: '2px' }}>24 Reps clocked in</div>
          </div>

          <div style={{ background: 'rgba(14, 19, 32, 0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ color: '#94a3b8', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Floor Queue Load</span>
              <Users size={13} color="#fbbf24" />
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fbbf24' }}>0 Waiting</div>
            <div style={{ color: '#34d399', fontSize: '0.7rem', marginTop: '2px' }}>Avg answer speed: 9.4s</div>
          </div>

          <div style={{ background: 'rgba(14, 19, 32, 0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ color: '#94a3b8', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Today Closed ARR</span>
              <TrendingUp size={13} color="#34d399" />
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#34d399' }}>$94,200</div>
            <div style={{ color: '#60a5fa', fontSize: '0.7rem', marginTop: '2px' }}>112% quota pacing</div>
          </div>

        </div>

        {/* Middle Grid: Live Agent Roster + Live Supervision Console */}
        <div className="mockup-grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '16px' }}>
          
          {/* Agent Live Status Grid */}
          <div style={{ background: 'rgba(14, 19, 31, 0.6)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
              <div style={{ fontWeight: '700', color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Radio size={14} color="#10b981" />
                <span>Live Sales Floor Roster</span>
              </div>
              <div style={{ display: 'flex', gap: '6px' }}>
                <button
                  onClick={() => setSelectedSquad('all')}
                  style={{
                    padding: '3px 8px',
                    borderRadius: '4px',
                    fontSize: '0.6875rem',
                    fontWeight: '600',
                    background: selectedSquad === 'all' ? 'rgba(37, 99, 235, 0.3)' : 'rgba(255,255,255,0.04)',
                    color: selectedSquad === 'all' ? '#38bdf8' : '#94a3b8',
                  }}
                >
                  All (24)
                </button>
                <button
                  onClick={() => setSelectedSquad('inside')}
                  style={{
                    padding: '3px 8px',
                    borderRadius: '4px',
                    fontSize: '0.6875rem',
                    fontWeight: '600',
                    background: selectedSquad === 'inside' ? 'rgba(37, 99, 235, 0.3)' : 'rgba(255,255,255,0.04)',
                    color: selectedSquad === 'inside' ? '#38bdf8' : '#94a3b8',
                  }}
                >
                  Inside Pod
                </button>
                <button
                  onClick={() => setSelectedSquad('enterprise')}
                  style={{
                    padding: '3px 8px',
                    borderRadius: '4px',
                    fontSize: '0.6875rem',
                    fontWeight: '600',
                    background: selectedSquad === 'enterprise' ? 'rgba(37, 99, 235, 0.3)' : 'rgba(255,255,255,0.04)',
                    color: selectedSquad === 'enterprise' ? '#38bdf8' : '#94a3b8',
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
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1.4fr 1.2fr 1fr 100px',
                    alignItems: 'center',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: selectedAgent === agent.name ? 'rgba(37, 99, 235, 0.18)' : 'rgba(255,255,255,0.02)',
                    border: selectedAgent === agent.name ? '1px solid rgba(59, 130, 246, 0.45)' : '1px solid rgba(255,255,255,0.04)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
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
                      <div style={{ fontWeight: '600', color: '#fff' }}>{agent.name}</div>
                      <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Score: {agent.score}/100</div>
                    </div>
                  </div>

                  <div>
                    <div style={{ color: agent.state === 'on-call' ? '#34d399' : '#94a3b8', fontSize: '0.75rem', fontWeight: '500' }}>
                      {agent.status}
                    </div>
                    <div style={{ color: '#64748b', fontSize: '0.7rem' }}>{agent.lead}</div>
                  </div>

                  <div>
                    <div style={{ color: '#fff', fontSize: '0.75rem', fontWeight: '600' }}>{agent.calls} Dials</div>
                    <div style={{ color: '#38bdf8', fontSize: '0.7rem' }}>{agent.conv} Conv</div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    {agent.state === 'on-call' ? (
                      <button style={{ padding: '4px 10px', borderRadius: '4px', background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.3)', color: '#38bdf8', fontSize: '0.7rem', fontWeight: '600' }}>
                        Supervise
                      </button>
                    ) : (
                      <span style={{ fontSize: '0.7rem', color: '#64748b' }}>Standby</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live Supervisor Coaching Station */}
          <div style={{ background: 'rgba(11, 15, 23, 0.85)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '10px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontWeight: '700', color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Headphones size={15} color="#38bdf8" />
                <span>Live Supervisor Console</span>
              </div>
              <span className="badge badge-emerald" style={{ fontSize: '0.65rem' }}>Active Stream</span>
            </div>

            {/* Target Agent Card */}
            <div style={{ background: 'rgba(14, 23, 42, 0.8)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '12px' }}>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Supervising Agent:</div>
              <div style={{ fontSize: '1rem', fontWeight: '700', color: '#fff', marginTop: '2px' }}>{selectedAgent}</div>
              <div style={{ fontSize: '0.75rem', color: '#38bdf8', marginTop: '2px' }}>Live Call with: Sarah Jenkins (Logix)</div>
              <div style={{ fontSize: '0.7rem', color: '#34d399', marginTop: '4px' }}>Audio: 24ms WebRTC • Dual Stream</div>
            </div>

            {/* Mode selector */}
            <div>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '6px', fontWeight: '600' }}>Supervision Mode</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
                <button
                  onClick={() => setCoachingMode('listen')}
                  style={{
                    padding: '8px 4px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    textAlign: 'center',
                    background: coachingMode === 'listen' ? 'rgba(56, 189, 248, 0.25)' : 'rgba(255,255,255,0.04)',
                    color: coachingMode === 'listen' ? '#38bdf8' : '#94a3b8',
                    border: coachingMode === 'listen' ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  Listen
                </button>
                <button
                  onClick={() => setCoachingMode('whisper')}
                  style={{
                    padding: '8px 4px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    textAlign: 'center',
                    background: coachingMode === 'whisper' ? 'rgba(37, 99, 235, 0.35)' : 'rgba(255,255,255,0.04)',
                    color: coachingMode === 'whisper' ? '#93c5fd' : '#94a3b8',
                    border: coachingMode === 'whisper' ? '1px solid rgba(59, 130, 246, 0.5)' : '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  Whisper
                </button>
                <button
                  onClick={() => setCoachingMode('barge')}
                  style={{
                    padding: '8px 4px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    textAlign: 'center',
                    background: coachingMode === 'barge' ? 'rgba(239, 68, 68, 0.25)' : 'rgba(255,255,255,0.04)',
                    color: coachingMode === 'barge' ? '#fca5a5' : '#94a3b8',
                    border: coachingMode === 'barge' ? '1px solid rgba(239, 68, 68, 0.4)' : '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  Barge In
                </button>
              </div>
            </div>

            {/* Whisper Cue */}
            <div style={{ marginTop: 'auto', background: 'rgba(14, 19, 32, 0.9)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '12px' }}>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginBottom: '6px' }}>Direct Rep Headset Whisper</div>
              <div style={{ background: 'rgba(0,0,0,0.4)', padding: '8px', borderRadius: '6px', fontSize: '0.75rem', color: '#cbd5e1', marginBottom: '8px' }}>
                "Ask for the 2-year upfront commitment to waive setup fee."
              </div>
              <button style={{ width: '100%', padding: '8px', borderRadius: '6px', background: 'var(--grad-primary)', color: '#fff', fontWeight: '600', fontSize: '0.75rem' }}>
                Send Live Audio Whisper
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
