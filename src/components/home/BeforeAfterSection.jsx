import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { BeforeAfterSlider } from '../common/BeforeAfterSlider';

export const BeforeAfterSection = () => {
  return (
    <section className="section-wrapper section-dark">
      <div className="container-wide">
        
        <SectionHeading
          eyebrow="The Transformation"
          eyebrowIcon="Sparkles"
          title="From tool fragmentation to a"
          highlightText="high-velocity system."
          description="Drag the slider below to compare the chaotic, disconnected sales floor of yesterday with the synchronous intelligence of ODA7."
        />

        <BeforeAfterSlider />

      </div>
    </section>
  );
};
