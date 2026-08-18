import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { HumanProblemStorySection } from '../components/home/HumanProblemStorySection';
import { ProductModuleStorySection } from '../components/home/ProductModuleStorySection';
import { ConnectedOperatingStory } from '../components/home/ConnectedOperatingStory';
import { SalesWorkflowSection } from '../components/home/SalesWorkflowSection';
import { AiIntelligenceSection } from '../components/home/AiIntelligenceSection';
import { PeopleOperationsStorySection } from '../components/home/PeopleOperationsStorySection';
import { BeforeAfterSection } from '../components/home/BeforeAfterSection';
import { FeatureExplorer } from '../components/home/FeatureExplorer';
import { IndustryScenariosSection } from '../components/home/IndustryScenariosSection';
import { SocialProofMetrics } from '../components/home/SocialProofMetrics';
import { PricingSection } from '../components/home/PricingSection';
import { FaqAccordion } from '../components/home/FaqAccordion';
import { FinalCtaSection } from '../components/home/FinalCtaSection';

export const HomePage = ({ onOpenDemo }) => (
  <div className="home-page-container">
    {/* Product first: establish ODA7 and show the live operating workspace. */}
    <HeroSection />

    {/* Human problem: establish why disconnected operations matter. */}
    <HumanProblemStorySection />

    {/* Solution: introduce the connected operating model without a feature dump. */}
    <ProductModuleStorySection />

    {/* Product interaction: scroll changes the operating state. */}
    <ConnectedOperatingStory />

    {/* Sales story: human situation, product action and outcome. */}
    <SalesWorkflowSection />

    {/* AI story: continue the workflow with assisted decisions. */}
    <AiIntelligenceSection />

    {/* People and operations: move from selling into team execution. */}
    <PeopleOperationsStorySection />

    {/* Transformation beat: scattered tools converge into one platform. */}
    <BeforeAfterSection />

    {/* Capability depth remains available through one focused explorer. */}
    <FeatureExplorer />

    {/* Human scenarios reset the visual rhythm after the product explorer. */}
    <IndustryScenariosSection />

    {/* Verifiable product evidence and memorable platform metrics. */}
    <SocialProofMetrics />

    {/* Conversion decision. */}
    <PricingSection />

    {/* Resolve final concerns without another feature section. */}
    <FaqAccordion />

    {/* Conclusion. */}
    <FinalCtaSection />
  </div>
);
