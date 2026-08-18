import React from 'react';
import { Link } from '../lib/navigation';
import { ArrowUpRight, CalendarDays, Circle, FileText, GitBranch, Headphones, Inbox, Megaphone, Package, PhoneCall, ReceiptText, Users } from 'lucide-react';
import { productPages } from '../data/marketingPages';
import { PageHeader } from '../components/layout/PageHeader';
import { ProductUIFrame } from '../components/marketing/ProductUIFrame';
import { Button } from '../components/common/Button';

const iconMap = { CalendarDays, FileText, GitBranch, Headphones, Inbox, Megaphone, Package, PhoneCall, ReceiptText, Users };

export const ProductPage = ({ onOpenDemo }) => (
  <div style={{ paddingTop: '20px', paddingBottom: '100px' }}>
    <PageHeader badge="Connected product system" badgeIcon="Layers" title="Explore the ODA7" highlight="product workspace." description="Each module has a focused job. Together, they preserve context from first lead to business insight." />
    <section className="container-wide page-reveal" style={{ paddingBottom: '80px' }}>
      <ProductUIFrame title="Connected workspace" steps={['Capture', 'Connect', 'Execute', 'Measure', 'Improve']} icon="LayoutDashboard" />
    </section>
    <section className="section-wrapper section-dark">
      <div className="container-wide">
        <div className="detail-section-heading"><span className="section-eyebrow">Product modules</span><h2>Start anywhere. Keep the workflow connected.</h2><p>Open a module to see the problem it solves, the workflow it supports and how it connects to the wider platform.</p></div>
        <div className="product-index-grid">
          {Object.entries(productPages).map(([slug, page], index) => {
            const Icon = iconMap[page.icon] || Circle;
            return <Link key={slug} to={`/product/${slug}`}><span>{String(index + 1).padStart(2,'0')}</span><i><Icon size={19} /></i><div><h2>{page.label}</h2><p>{page.intro}</p></div><ArrowUpRight size={17} /></Link>;
          })}
        </div>
      </div>
    </section>
    <section className="detail-final-cta"><div className="container-narrow"><span className="section-eyebrow">Try the workflow</span><h2>See how the modules move together.</h2><p>Follow an illustrative lead from arrival through calling, follow-up and manager visibility.</p><div><Button demo size="lg" iconLeft="PlayCircle">See ODA7 in action</Button><Button to="/platform" variant="secondary" size="lg" iconRight="ArrowRight">Explore the platform</Button></div></div></section>
  </div>
);
