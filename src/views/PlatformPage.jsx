'use client';

import React from 'react';
import { Link } from '../lib/navigation';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { platformCapabilities } from '../data/marketingPages';
import { PageHeader } from '../components/layout/PageHeader';
import { PlatformEcosystemVisual } from '../components/visuals/PlatformEcosystemVisual';
import { SuperAdminMockup } from '../components/mockups/SuperAdminMockup';
import { Button } from '../components/common/Button';

export const PlatformPage = ({ onOpenDemo }) => (
  <div>
    <PageHeader badge="The connected operating layer" badgeIcon="Layers" title="Sales, people and performance." highlight="One platform." description="ODA7 connects focused role-based workspaces to a shared business operating context." />
    <section className="container-wide page-reveal" style={{ paddingBottom: 'clamp(24px, 3.5vw, 44px)' }}><PlatformEcosystemVisual /></section>
    <section className="section-wrapper section-dark"><div className="container-wide"><div className="detail-section-heading"><span className="section-eyebrow">Platform capabilities</span><h2>The operating system behind the work.</h2><p>Each area remains focused while ownership, activity and performance stay connected.</p></div><div className="platform-capability-grid">{platformCapabilities.map(([title,description],index)=><article id={title.toLowerCase().split(' ')[0]} key={title}><span>{String(index+1).padStart(2,'0')}</span><h2>{title}</h2><p>{description}</p><CheckCircle2 size={18} /></article>)}</div></div></section>
    <section id="super-admin" className="section-wrapper"><div className="container-wide"><div className="detail-section-heading"><span className="section-eyebrow">Super Admin</span><h2>Operate the platform behind every organization.</h2><p>Manage organizations, plans, subscriptions, invoices, audit context, branding and platform settings from a separate administrative layer.</p></div><SuperAdminMockup /></div></section>
    <section className="detail-final-cta"><div className="container-narrow"><span className="section-eyebrow">Explore ODA7</span><h2>Bring the whole operating picture together.</h2><p>Start with the team and modules you need, then scope the wider platform with ODA7.</p><div><Button to="/get-started" size="lg" iconRight="ArrowRight">Get started</Button></div></div></section>
  </div>
);
