import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import {
  MessageSquare,
  PhoneCall,
  Mail,
  Calendar,
  Database,
  Hash,
  CreditCard,
  Zap,
  Globe,
  Share2,
} from 'lucide-react';

export const IntegrationsOrbit = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const integrations = [
    { name: 'WhatsApp Business', cat: 'comms', icon: MessageSquare, status: 'Native 2-Way API' },
    { name: 'Twilio Carrier', cat: 'voice', icon: PhoneCall, status: 'Direct SIP' },
    { name: 'Google Calendar', cat: 'calendar', icon: Calendar, status: 'Bidirectional Sync' },
    { name: 'Slack Alerts', cat: 'comms', icon: Hash, status: 'Instant Channel Bot' },
    { name: 'Stripe Billing', cat: 'finance', icon: CreditCard, status: 'Automated Invoices' },
    { name: 'Snowflake / BigQuery', cat: 'data', icon: Database, status: 'Scheduled ETL' },
    { name: 'Zapier / Make', cat: 'automation', icon: Zap, status: 'Webhook Engine' },
    { name: 'Custom REST API', cat: 'automation', icon: Globe, status: 'GraphQL & REST' },
  ];

  const filtered = activeFilter === 'all'
    ? integrations
    : integrations.filter((item) => item.cat === activeFilter);

  return (
    <section className="section-wrapper" style={{ background: '#05070c' }}>
      <div className="container">
        
        <SectionHeading
          eyebrow="Ecosystem & Integrations"
          eyebrowIcon="Share2"
          title="Connect seamlessly to your"
          highlightText="existing business stack."
          description="oda7 operates as the central intelligence engine while connecting natively to official WhatsApp APIs, telephony carriers, data warehouses, and webhooks."
        />

        {/* Category Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '6px' }}>
          <div className="tab-group">
            <button
              className={`tab-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Integrations (8+)
            </button>
            <button
              className={`tab-btn ${activeFilter === 'comms' ? 'active' : ''}`}
              onClick={() => setActiveFilter('comms')}
            >
              Communication
            </button>
            <button
              className={`tab-btn ${activeFilter === 'voice' ? 'active' : ''}`}
              onClick={() => setActiveFilter('voice')}
            >
              Telephony
            </button>
            <button
              className={`tab-btn ${activeFilter === 'data' ? 'active' : ''}`}
              onClick={() => setActiveFilter('data')}
            >
              Data & BI
            </button>
          </div>
        </div>

        {/* Visual Central Orbit Display */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(14, 23, 42, 0.7) 0%, rgba(7, 10, 18, 0.9) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '20px',
            padding: '40px 24px',
            maxWidth: '1000px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          {/* Center Hub */}
          <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', marginBottom: '36px' }}>
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                border: '2px solid #38bdf8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 40px rgba(56, 189, 248, 0.4)',
                marginBottom: '10px',
              }}
              className="animate-pulse-glow"
            >
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '900', fontSize: '2rem', color: '#38bdf8' }}>
                o7
              </span>
            </div>
            <div style={{ fontWeight: '800', fontSize: '1.2rem', color: '#fff' }}>
              oda7 Core Sales OS
            </div>
            <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>
              Sub-second synchronous data mesh
            </div>
          </div>

          {/* Connected Integrations Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '16px' }}>
            {filtered.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(14, 19, 31, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '12px',
                    padding: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    textAlign: 'left',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8', flexShrink: 0 }}>
                    <IconComp size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: '700', color: '#fff', fontSize: '0.875rem' }}>
                      {item.name}
                    </div>
                    <div style={{ color: '#34d399', fontSize: '0.7rem', fontWeight: '500' }}>
                      {item.status}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
