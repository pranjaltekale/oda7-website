import React from 'react';
import { Link } from 'react-router-dom';
import { footerLinks } from '../../data/navigation';
import { Button } from '../common/Button';

const columns = [
  ['Product', footerLinks.product],
  ['Solutions', footerLinks.solutions],
  ['Platform', footerLinks.platform],
  ['Resources', footerLinks.resources],
  ['Company', footerLinks.company],
];

export const Footer = ({ onOpenDemo }) => (
  <footer style={{ background: '#04060a', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '72px 0 32px', position: 'relative', overflow: 'hidden' }}>
    <div className="container-wide page-reveal">
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1.4fr) repeat(5, minmax(120px, 1fr))', gap: '30px', paddingBottom: '48px' }} className="footer-main-grid">
        <div style={{ maxWidth: '360px' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }} aria-label="ODA7 home">
            <div style={{ width: 38, height: 38, borderRadius: 10, display: 'grid', placeItems: 'center', border: '1px solid rgba(59,130,246,0.4)', background: '#0f172a', color: '#38bdf8', fontWeight: 900 }}>o7</div>
            <span style={{ color: '#fff', fontSize: '1.35rem', fontWeight: 800 }}>oda<span style={{ color: '#38bdf8' }}>7</span></span>
          </Link>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '22px' }}>
            One connected business workspace for sales execution, people operations and performance intelligence.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <Button to="/get-started" variant="primary" size="sm">Get started</Button>
            <Button onClick={onOpenDemo} variant="secondary" size="sm">Try ODA7</Button>
          </div>
        </div>

        {columns.map(([title, links]) => (
          <div key={title}>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '16px' }}>{title}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
              {links.slice(0, 5).map((link) => link.path === '#demo-trigger' ? (
                <button key={link.label} onClick={onOpenDemo} style={{ color: '#94a3b8', fontSize: '0.84rem', textAlign: 'left' }}>{link.label}</button>
              ) : (
                <Link key={link.label} to={link.path} style={{ color: '#94a3b8', fontSize: '0.84rem' }}>{link.label}</Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', color: '#64748b', fontSize: '0.78rem', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <span>© {new Date().getFullYear()} ODA7. All rights reserved.</span>
        <span>Illustrative product data is used in interactive previews.</span>
      </div>
    </div>
    <style>{`
      @media (max-width: 980px) { .footer-main-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; } }
      @media (max-width: 560px) { .footer-main-grid { grid-template-columns: 1fr !important; } }
    `}</style>
  </footer>
);
