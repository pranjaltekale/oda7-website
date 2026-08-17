import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { SocialProofMetrics } from '../components/home/SocialProofMetrics';
import { BeforeAfterSection } from '../components/home/BeforeAfterSection';
import { OneWorkspaceExplorer } from '../components/home/OneWorkspaceExplorer';
import { ProductLifecycleSection } from '../components/home/ProductLifecycleSection';
import { FiveRoleShowcase } from '../components/home/FiveRoleShowcase';
import { AiIntelligenceSection } from '../components/home/AiIntelligenceSection';
import { StickyStorySection } from '../components/home/StickyStorySection';
import { SalesWorkflowSection } from '../components/home/SalesWorkflowSection';
import { ManagerFloorSection } from '../components/home/ManagerFloorSection';
import { AgencyOpsSection } from '../components/home/AgencyOpsSection';
import { SuperAdminSection } from '../components/home/SuperAdminSection';
import { FeatureExplorer } from '../components/home/FeatureExplorer';
import { IntegrationsOrbit } from '../components/home/IntegrationsOrbit';
import { PricingSection } from '../components/home/PricingSection';
import { FaqAccordion } from '../components/home/FaqAccordion';
import { FinalCtaSection } from '../components/home/FinalCtaSection';

export const HomePage = ({ onOpenDemo }) => {
  return (
    <div className="home-page-container">
      {/* 1. Living Hero Section with Simulated Product Events */}
      <HeroSection onOpenDemo={onOpenDemo} />

      {/* 2. Platform Social Proof & Verified Metrics */}
      <SocialProofMetrics />

      {/* 3. Transformation Section: Chaos → Control (Without ODA7 vs With ODA7) */}
      <BeforeAfterSection />

      {/* 4. One Workspace Story Section (14 ODA7 Core Capabilities) */}
      <OneWorkspaceExplorer onOpenDemo={onOpenDemo} />

      {/* 5. 4-Stage Product Lifecycle (Capture → Connect → Convert → Improve) */}
      <ProductLifecycleSection />

      {/* 6. 5-Role Interactive Product Showcase (Admin, Super Admin, Manager, Sales, Marketing) */}
      <FiveRoleShowcase />

      {/* 7. AI Intelligence: "Turn sales data into decisions" (Explain My Numbers) */}
      <AiIntelligenceSection />

      {/* 8. 7-Stage Scroll Storytelling Narrative */}
      <StickyStorySection onOpenDemo={onOpenDemo} />

      {/* 9. Dedicated Sales Rep Velocity Workflow */}
      <SalesWorkflowSection />

      {/* 10. Live Sales Floor Visualization & Floor Command */}
      <ManagerFloorSection />

      {/* 11. Agency & People Operations (Run the floor, Manage people, Automate ops) */}
      <AgencyOpsSection />

      {/* 12. Super Admin Multi-Tenant SaaS Platform */}
      <SuperAdminSection />

      {/* 13. Interactive 6-Pillar Feature Explorer */}
      <FeatureExplorer />

      {/* 14. Synchronous Integrations Ecosystem */}
      <IntegrationsOrbit />

      {/* 15. Transparent Pricing & ROI Calculator */}
      <PricingSection />

      {/* 16. Frequently Asked Questions */}
      <FaqAccordion />

      {/* 17. Final Closing CTA */}
      <FinalCtaSection onOpenDemo={onOpenDemo} />
    </div>
  );
};
