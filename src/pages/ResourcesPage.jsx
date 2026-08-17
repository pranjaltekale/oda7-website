import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CircleHelp, Info, LifeBuoy, Mail, PanelsTopLeft } from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
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
  <div style={{ paddingTop: '20px', paddingBottom: '100px' }}>
    <PageHeader badge="Learn, explore and get support" badgeIcon="HelpCircle" title="Resources for understanding" highlight="the ODA7 workspace." description="Explore product guides, common questions, platform information and the routes available for direct support." />
    <section className="section-wrapper"><div className="container-wide resources-grid">{resources.map(([id,title,description,Icon,path])=><Link id={id} to={path} key={id}><i><Icon size={20}/></i><div><h2>{title}</h2><p>{description}</p></div><ArrowRight size={17}/></Link>)}</div></section>
    <section id="faqs" className="section-wrapper section-dark"><div className="container-wide"><div className="detail-section-heading"><span className="section-eyebrow"><CircleHelp size={14}/> FAQs</span><h2>Common questions, answered clearly.</h2><p>Review how ODA7 approaches product workflows, administration and implementation conversations.</p></div><FaqAccordion /></div></section>
    <section className="detail-final-cta"><div className="container-narrow"><span className="section-eyebrow">Need a closer look?</span><h2>Experience the workflow inside ODA7.</h2><p>Open the interactive demo or share your team’s current operating flow.</p><div><Button onClick={onOpenDemo} size="lg" iconLeft="PlayCircle">See ODA7 in action</Button><Button to="/get-started" variant="secondary" size="lg" iconRight="ArrowRight">Get started</Button></div></div></section>
  </div>
);
