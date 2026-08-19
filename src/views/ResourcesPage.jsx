'use client';

import React from 'react';
import { Link } from '../lib/navigation';
import { ArrowRight, BookOpen, CircleHelp, Info, LifeBuoy, Mail, PanelsTopLeft } from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { EditorialResourcesVisual } from '../components/visuals/EditorialResourcesVisual';
import { FaqAccordion } from '../components/home/FaqAccordion';
import { Button } from '../components/common/Button';

const resources = [
  ['documentation', 'Documentation', 'Explore ODA7 modules, terminology and connected product areas.', BookOpen, '/product'],
  ['guides', 'Product guides', 'Follow practical lead, call, people and platform workflows.', PanelsTopLeft, '/product/leads'],
  ['support', 'Help & Support', 'Find the right path for product, implementation and account questions.', LifeBuoy, '/contact'],
  ['system-information', 'System information', 'Review the role of platform controls, audit visibility and administration.', Info, '/platform#super-admin'],
  ['contact', 'Contact ODA7', 'Share your operating workflow and plan a relevant product walkthrough.', Mail, '/contact'],
];

export const ResourcesPage = ({ onOpenDemo }) => (
  <div>
    <PageHeader badge="Learn, explore and get support" badgeIcon="HelpCircle" title="Resources for understanding" highlight="the ODA7 workspace." description="Explore product guides, common questions, platform information and the routes available for direct support." />
    <section className="container-wide page-reveal" style={{ paddingBottom: 'clamp(24px, 3.5vw, 44px)' }}>
      <EditorialResourcesVisual />
    </section>
    <section className="section-wrapper"><div className="container-wide resources-grid">{resources.map(([id,title,description,Icon,path])=><Link id={id} to={path} key={id}><i><Icon size={20}/></i><div><h2>{title}</h2><p>{description}</p></div><ArrowRight size={17}/></Link>)}</div></section>
    <FaqAccordion />
    <section className="detail-final-cta"><div className="container-narrow"><span className="section-eyebrow">Need a closer look?</span><h2>Experience the workflow inside ODA7.</h2><p>Share your team’s current operating flow and get started.</p><div><Button to="/get-started" size="lg" iconRight="ArrowRight">Get started</Button></div></div></section>
  </div>
);
