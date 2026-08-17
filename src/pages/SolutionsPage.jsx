import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { solutionsData } from '../data/solutionsData';
import { Button } from '../components/common/Button';
import {
  PhoneForwarded,
  Headphones,
  Rocket,
  Building2,
  CheckCircle2,
  XCircle,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

const iconMap = {
  PhoneForwarded,
  Headphones,
  Rocket,
  Building2,
};

export const SolutionsPage = ({ onOpenDemo }) => {
  return (
    <div style={{ paddingTop: '20px', paddingBottom: '100px' }}>
      
      <PageHeader
        badge="Tailored Operating Playbooks"
        badgeIcon="Rocket"
        title="Engineered for your exact"
        highlight="sales model."
        description="Whether you run a 50-person high-velocity inside sales floor, a distributed BPO call center, or a multi-tenant agency, oda7 eliminates friction at every touchpoint."
      />

      <div className="container">
        
        {/* Solution Cards Vertical Flow */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', marginBottom: '80px' }}>
          {solutionsData.map((sol, idx) => {
            const IconComp = iconMap[sol.icon] || Rocket;

            return (
              <div
                id={sol.id}
                key={sol.id}
                style={{
                  background: 'linear-gradient(135deg, rgba(14, 23, 42, 0.85) 0%, rgba(7, 10, 18, 0.95) 100%)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '20px',
                  padding: '40px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(37, 99, 235, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8' }}>
                      <IconComp size={22} />
                    </div>
                    <div>
                      <span className="badge badge-cyan" style={{ marginBottom: '4px' }}>{sol.badge}</span>
                      <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#ffffff' }}>{sol.title}</h2>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    {sol.stats.map((stat, sIdx) => (
                      <div key={sIdx} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '8px 14px', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#34d399', fontFamily: 'var(--font-mono)' }}>{stat.value}</div>
                        <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '32px' }}>
                  {sol.tagline}
                </p>

                {/* Split: Old Challenges vs oda7 Solution */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '32px' }}>
                  
                  {/* Common Roadblocks */}
                  <div style={{ background: 'rgba(239, 68, 68, 0.04)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '12px', padding: '20px' }}>
                    <div style={{ color: '#fca5a5', fontWeight: '700', fontSize: '0.9rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <XCircle size={16} />
                      <span>Traditional Roadblocks</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {sol.challenges.map((c, cIdx) => (
                        <div key={cIdx} style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: '1.5' }}>
                          • {c}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* oda7 Solution */}
                  <div style={{ background: 'rgba(16, 185, 129, 0.04)', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: '12px', padding: '20px' }}>
                    <div style={{ color: '#34d399', fontWeight: '700', fontSize: '0.9rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle2 size={16} />
                      <span>The oda7 Solution</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {sol.solutions.map((s, sIdx) => (
                        <div key={sIdx} style={{ color: '#e2e8f0', fontSize: '0.85rem', lineHeight: '1.5' }}>
                          ✓ {s}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Solution CTA */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                  <Button onClick={onOpenDemo} variant="secondary" size="sm">
                    Watch Demo for {sol.badge}
                  </Button>
                  <Button to="/contact" variant="primary" size="sm" iconRight="ArrowRight">
                    Deploy {sol.badge} Stack
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
};
