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
    <section className="section-wrapper" id="integrations">
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
          className="feature-showcase-panel"
          style={{
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
                background: 'var(--oda-surface)',
                border: '2px solid var(--oda-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 30px rgba(37, 99, 235, 0.3)',
                color: 'var(--oda-accent)',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.75rem',
                fontWeight: '900',
                marginBottom: '12px',
              }}
            >
              o7
            </div>
            <div style={{ fontWeight: '800', color: 'var(--oda-text-primary)', fontSize: '1.25rem' }}>
              oda7 Core Sales OS
            </div>
            <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.8125rem' }}>
              Sub-second synchronous data mesh
            </div>
          </div>

          {/* Grid of Integrated Tools */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
            }}
          >
            {filtered.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.name}
                  style={{
                    background: 'var(--oda-surface)',
                    border: '1px solid var(--oda-border)',
                    borderRadius: '12px',
                    padding: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    textAlign: 'left',
                    transition: 'all var(--transition-fast)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  }}
                  className="integration-card animate-fadeIn"
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'var(--oda-primary-soft)',
                      border: '1px solid var(--oda-border-blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--oda-accent)',
                      flexShrink: 0,
                    }}
                  >
                    <IconComp size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: '700', color: 'var(--oda-text-primary)', fontSize: '0.85rem' }}>
                      {item.name}
                    </div>
                    <div style={{ color: 'var(--oda-text-muted)', fontSize: '0.72rem' }}>
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
