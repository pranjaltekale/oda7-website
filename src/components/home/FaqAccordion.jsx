'use client';

import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { homepageFaqs } from '../../data/faqData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqAccordion = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="section-wrapper" id="faq">
      <div className="container-narrow">
        
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          eyebrowIcon="HelpCircle"
          title="Everything you need to know about"
          highlightText="oda7."
          description="Clear answers on system migration, SIP trunking, AI accuracy, live coaching, and multi-tenant security."
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {homepageFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="faq-item-card"
                style={{
                  background: 'var(--oda-surface)',
                  border: isOpen ? '1px solid var(--oda-border-active)' : '1px solid var(--oda-border)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'all var(--transition-fast)',
                  boxShadow: isOpen ? '0 4px 18px rgba(37, 99, 235, 0.12)' : 'none',
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '16px',
                    textAlign: 'left',
                    color: 'var(--oda-text-primary)',
                    fontWeight: '700',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-heading)',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.2s ease',
                      flexShrink: 0,
                      color: isOpen ? 'var(--oda-primary)' : 'var(--oda-text-muted)',
                    }}
                  />
                </button>

                <div className={`faq-answer-grid ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
                  <div>
                    <div style={{ padding: '0 24px 20px 24px', color: 'var(--oda-text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
