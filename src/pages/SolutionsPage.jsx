import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, BarChart3, ChartNoAxesCombined, LayoutDashboard, Megaphone, PhoneCall, Settings2, UserRoundCheck } from 'lucide-react';
import { solutionPages } from '../data/marketingPages';
import { PageHeader } from '../components/layout/PageHeader';
import { ProductUIFrame } from '../components/marketing/ProductUIFrame';
import { Button } from '../components/common/Button';

const iconMap = { BarChart3, ChartNoAxesCombined, LayoutDashboard, Megaphone, PhoneCall, Settings2, UserRoundCheck };

export const SolutionsPage = ({ onOpenDemo }) => (
  <div style={{ paddingTop: '20px', paddingBottom: '100px' }}>
    <PageHeader badge="Role-based operating views" badgeIcon="Users" title="ODA7 changes with the role." highlight="The context stays connected." description="Explore how sales, management, marketing, operations, people teams and leadership work from the same operating picture." />
    <section className="container-wide page-reveal" style={{ paddingBottom: '80px' }}><ProductUIFrame title="Role-based workspace" steps={['See', 'Act', 'Coordinate', 'Improve']} icon="LayoutDashboard" /></section>
    <section className="section-wrapper section-dark"><div className="container-wide"><div className="detail-section-heading"><span className="section-eyebrow">Solutions by role</span><h2>Focused experiences for every team that moves the business.</h2><p>Choose a role to explore its workflow, operating problem and ODA7 product view.</p></div><div className="product-index-grid">{Object.entries(solutionPages).map(([slug,page],index)=>{const Icon=iconMap[page.icon]||LayoutDashboard;return <Link to={`/solutions/${slug}`} key={slug}><span>{String(index+1).padStart(2,'0')}</span><i><Icon size={19}/></i><div><h2>{page.label}</h2><p>{page.intro}</p></div><ArrowUpRight size={17}/></Link>;})}</div></div></section>
    <section className="detail-final-cta"><div className="container-narrow"><span className="section-eyebrow">See the handoffs</span><h2>Experience how the roles move together.</h2><p>Open the interactive workflow or start mapping your organization with ODA7.</p><div><Button onClick={onOpenDemo} size="lg" iconLeft="PlayCircle">See ODA7 in action</Button><Button to="/get-started" variant="secondary" size="lg" iconRight="ArrowRight">Get started</Button></div></div></section>
  </div>
);
