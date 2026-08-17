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
    <section className="section-wrapper">
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
                style={{
                  background: 'rgba(14, 19, 31, 0.6)',
                  border: isOpen ? '1px solid rgba(59, 130, 246, 0.4)' : '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'all var(--transition-fast)',
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
                    color: '#ffffff',
                    fontWeight: '700',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-heading)',
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
                      color: isOpen ? '#38bdf8' : '#94a3b8',
                    }}
                  />
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 24px 20px 24px',
                      color: '#94a3b8',
                      fontSize: '0.9rem',
                      lineHeight: '1.6',
                    }}
                    className="animate-fadeIn"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
