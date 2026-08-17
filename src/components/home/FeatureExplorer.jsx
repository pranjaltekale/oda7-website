import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { featureCategories, featuresByModule } from '../../data/featuresData';
import { Button } from '../common/Button';
import {
  PhoneCall,
  Sparkles,
  Users,
  DollarSign,
  Trophy,
  BarChart3,
  Settings,
  ShieldCheck,
  Inbox,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const iconComponents = {
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

export const FeatureExplorer = () => {
  const [selectedCatId, setSelectedCatId] = useState('sales');

  const currentModule = featuresByModule[selectedCatId] || featuresByModule.sales;

  return (
    <section id="features" className="section-wrapper">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="Interactive Feature Explorer"
          eyebrowIcon="Sparkles"
          title="Engineered with depth across"
          highlightText="all 9 core modules."
          description="Explore the comprehensive capability matrix of oda7. Every tool is integrated into one high-velocity operating database."
        />

        {/* Category Pills Slider */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '16px',
            marginBottom: '36px',
            justifyContent: 'flex-start',
            maxWidth: '100%',
          }}
        >
          {featureCategories.map((cat) => {
            const IconComp = iconComponents[cat.icon] || Sparkles;
            const isSelected = selectedCatId === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCatId(cat.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  borderRadius: 'var(--radius-full)',
                  background: isSelected ? 'var(--accent-primary)' : 'rgba(14, 19, 31, 0.8)',
                  border: isSelected ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(255, 255, 255, 0.08)',
                  color: isSelected ? '#ffffff' : '#cbd5e1',
                  fontWeight: '600',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-heading)',
                  whiteSpace: 'nowrap',
                  transition: 'all var(--transition-fast)',
                  boxShadow: isSelected ? '0 0 20px rgba(37, 99, 235, 0.4)' : 'none',
                }}
              >
                <IconComp size={15} />
                <span>{cat.label}</span>
                <span
                  style={{
                    fontSize: '0.6875rem',
                    padding: '2px 6px',
                    borderRadius: '10px',
                    background: isSelected ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.06)',
                    color: isSelected ? '#fff' : '#94a3b8',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Module Header */}
        <div style={{ marginBottom: '28px', textAlign: 'left' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#fff', marginBottom: '6px' }}>
            {currentModule.title}
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
            {currentModule.subtitle}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginBottom: '40px',
          }}
          key={selectedCatId}
          className="animate-fadeIn"
        >
          {currentModule.items.map((feat, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(14, 19, 31, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                borderRadius: '12px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#ffffff' }}>
                    {feat.name}
                  </h4>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.825rem', lineHeight: '1.5', marginBottom: '16px' }}>
                  {feat.desc}
                </p>
              </div>

              <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="badge badge-subtle" style={{ fontSize: '0.6875rem' }}>
                  {feat.highlight}
                </span>
                <CheckCircle2 size={15} color="#34d399" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Features Button */}
        <div style={{ textAlign: 'center' }}>
          <Button to="/features" variant="secondary" iconRight="ArrowRight">
            Explore complete 65+ feature catalog
          </Button>
        </div>

      </div>
    </section>
  );
};
