import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { AiCopilotMockup } from '../mockups/AiCopilotMockup';

export const AiIntelligenceSection = () => {
  return (
    <section className="section-wrapper section-dark" id="ai-intelligence">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="Pervasive Intelligence"
          eyebrowIcon="Sparkles"
          title="Turn sales data into"
          highlightText="instant revenue decisions."
          description="Click any question below to simulate how ODA7's real-time AI speech engine and natural language BI synthesize millions of telephony events into plain-English root causes and 1-click execution."
        />

        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <AiCopilotMockup />
        </div>

      </div>
    </section>
  );
};
