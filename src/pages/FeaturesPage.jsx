import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionHeading } from '../components/common/SectionHeading';
import { featureCategories, featuresByModule } from '../data/featuresData';
import { Button } from '../components/common/Button';
import {
  Search,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  Users,
  DollarSign,
  Trophy,
  BarChart3,
  Settings,
  ShieldCheck,
  Inbox,
  ArrowRight,
} from 'lucide-react';

const iconMap = {
  PhoneCall,
  Sparkles,
  Users,
  DollarSign,
  Trophy,
  BarChart3,
  Settings,
  ShieldCheck,
  Inbox,
};

export const FeaturesPage = ({ onOpenDemo }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModule, setSelectedModule] = useState('all');

  // Flatten all features for search
  const allFeatures = Object.entries(featuresByModule).flatMap(([modKey, modData]) =>
    modData.items.map((item) => ({
      ...item,
      moduleKey: modKey,
      moduleTitle: modData.title,
    }))
  );

  const filteredFeatures = allFeatures.filter((feat) => {
    const matchesCategory = selectedModule === 'all' || feat.moduleKey === selectedModule;
    const matchesSearch =
      searchQuery === '' ||
      feat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feat.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feat.highlight.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ paddingTop: '20px', paddingBottom: '100px' }}>
      
      {/* Header */}
      <PageHeader
        badge="Complete Capability Matrix"
        badgeIcon="Sparkles"
        title="Everything you need to run high-velocity"
        highlight="sales operations."
        description="Explore ODA7 capabilities across sales, people, compensation, engagement, insights, AI and platform administration."
      />

      <div className="container-wide">
        
        {/* Search Bar & Category Filter Strip */}
        <div style={{ maxWidth: '800px', margin: '0 auto 40px auto' }}>
          
          {/* Search Input */}
          <div style={{ position: 'relative', marginBottom: '20px' }}>
            <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
            <input
              type="text"
              placeholder="Search features (e.g. dialer, objection, payroll, multi-tenant, whatsapp)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-control"
              style={{ paddingLeft: '46px', fontSize: '1rem', height: '52px', borderRadius: '12px' }}
            />
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '10px' }}>
            <button
              onClick={() => setSelectedModule('all')}
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                background: selectedModule === 'all' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)',
                border: selectedModule === 'all' ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(255,255,255,0.08)',
                color: selectedModule === 'all' ? '#fff' : '#cbd5e1',
                fontSize: '0.8125rem',
                fontWeight: '600',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
              }}
            >
              All Modules ({allFeatures.length})
            </button>

            {featureCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedModule(cat.id)}
                style={{
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-full)',
                  background: selectedModule === cat.id ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)',
                  border: selectedModule === cat.id ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(255,255,255,0.08)',
                  color: selectedModule === cat.id ? '#fff' : '#cbd5e1',
                  fontSize: '0.8125rem',
                  fontWeight: '600',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                }}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>

        </div>

        {/* Feature Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginBottom: '60px' }}>
          {filteredFeatures.map((feat, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(14, 19, 31, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '14px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.7rem', color: '#38bdf8', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
                    {feat.moduleTitle}
                  </span>
                  <span className="badge badge-emerald" style={{ fontSize: '0.65rem' }}>
                    {feat.highlight}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#ffffff', marginBottom: '10px' }}>
                  {feat.name}
                </h3>

                <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '16px' }}>
                  {feat.desc}
                </p>
              </div>

              <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#64748b', fontSize: '0.75rem' }}>
                <span>Native Synchronous Feature</span>
                <CheckCircle2 size={15} color="#10b981" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', background: 'rgba(14, 19, 31, 0.8)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '16px', padding: '40px' }}>
          <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#fff', marginBottom: '12px' }}>
            Want to see these features in action?
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '1rem', maxWidth: '600px', margin: '0 auto 24px auto' }}>
            Experience the guided interactive product tour or contact ODA7 to scope your workspace.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px' }}>
            <Button onClick={onOpenDemo} variant="primary" iconLeft="Sparkles">
              Launch Interactive Tour
            </Button>
            <Button to="/contact" variant="secondary">
              Talk to Solutions Engineer
            </Button>
          </div>
        </div>

      </div>

    </div>
  );
};
