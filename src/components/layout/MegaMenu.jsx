import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, BarChart3, BookOpen, Building2, CalendarDays, ChartNoAxesCombined, Circle, CircleHelp, FileText, GitBranch, Headphones, Inbox, Info, LayoutDashboard, LifeBuoy, Mail, Megaphone, Package, PanelsTopLeft, PhoneCall, ReceiptText, Settings2, ShieldCheck, Sparkles, UserRoundCheck, Users } from 'lucide-react';

const iconMap = { BarChart3, BookOpen, Building2, CalendarDays, ChartNoAxesCombined, CircleHelp, FileText, GitBranch, Headphones, Inbox, Info, LayoutDashboard, LifeBuoy, Mail, Megaphone, Package, PanelsTopLeft, PhoneCall, ReceiptText, Settings2, ShieldCheck, Sparkles, UserRoundCheck, Users };

const menuHeadlines = {
  Product: 'Work through ODA7',
  Solutions: 'Start with your role',
  Platform: 'Connect the operating layers',
  Resources: 'Learn and get support',
  Pricing: 'Choose a starting scope',
};

export const MegaMenu = ({ label, items, onClose }) => (
  <div className="mega-menu" role="region" aria-label={`${label} navigation`}>
    <div className="mega-menu-head">
      <div>
        <span className="mega-menu-kicker">Explore {label}</span>
        <strong>{menuHeadlines[label]}</strong>
      </div>
      <Link to={`/${label.toLowerCase()}`} onClick={onClose} className="mega-menu-overview">
        View overview <ArrowRight size={15} />
      </Link>
    </div>
    <div className={`mega-menu-grid mega-menu-${label.toLowerCase()}`}>
      {items.map((item) => {
        const Icon = iconMap[item.icon] || Circle;
        return (
          <Link key={item.path} to={item.path} onClick={onClose} className="mega-menu-item">
            <span className="mega-menu-icon"><Icon size={17} /></span>
            <span className="mega-menu-copy">
              <strong>{item.name}</strong>
              <small>{item.desc}</small>
            </span>
            <ArrowUpRight className="mega-menu-arrow" size={15} />
          </Link>
        );
      })}
    </div>
    <div className="mega-menu-foot">
      <span><Sparkles size={14} /> See the connected workflow, not a list of isolated features.</span>
      <Link to="/get-started" onClick={onClose}>Talk to ODA7 <ArrowRight size={14} /></Link>
    </div>
  </div>
);
