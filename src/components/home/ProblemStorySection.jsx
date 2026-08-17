import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { FragmentationComparison } from '../mockups/FragmentationComparison';

export const ProblemStorySection = () => {
  return (
    <section className="section-wrapper" style={{ background: '#05070c' }}>
      <div className="container">
        
        <SectionHeading
          eyebrow="The Fragmentation Problem"
          eyebrowIcon="Layers"
          title="Sales teams are drowning in"
          highlightText="10+ disconnected silos."
          description="Reps spend 45% of their day switching between CRM, VoIP dialers, WhatsApp tabs, spreadsheets, and AI tools. Leads go cold, supervisors are blind, and commission disputes are constant. oda7 changes everything."
        />

        <FragmentationComparison />

      </div>
    </section>
  );
};
