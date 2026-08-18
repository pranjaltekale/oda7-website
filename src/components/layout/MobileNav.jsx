'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from '../../lib/navigation';
import { ChevronDown, PlayCircle, ArrowRight, ArrowLeft, Home } from 'lucide-react';
import { Button } from '../common/Button';
import { ThemeToggle } from '../common/ThemeToggle';

export const MobileNav = ({ links, onClose, onOpenDemo }) => {
  const [expanded, setExpanded] = useState('Product');
  const firstTriggerRef = useRef(null);
  const navigate = useNavigate();

  const handleBack = () => {
    onClose();
    if (window.history.length > 1) navigate(-1);
    else navigate('/');
  };

  useEffect(() => { firstTriggerRef.current?.focus(); }, []);

  return (
    <div className="mobile-nav-drawer" id="mobile-navigation" aria-label="Mobile navigation">
      <div className="mobile-nav-scroll">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <div className="mobile-nav-label" style={{ margin: 0 }}>Navigation</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--oda-text-muted)' }}>Theme</span>
            <ThemeToggle />
          </div>
        </div>

        <div className="mobile-nav-utility" aria-label="Navigation shortcuts">
          <button type="button" onClick={handleBack}>
            <ArrowLeft size={16} />
            <span>Back</span>
          </button>
          <Link to="/" onClick={onClose}>
            <Home size={16} />
            <span>Home</span>
          </Link>
        </div>

        {links.map((link) => link.items ? (
          <div className="mobile-nav-section" key={link.label}>
            <button
              ref={link.label === 'Product' ? firstTriggerRef : undefined}
              className="mobile-nav-section-trigger"
              onClick={() => setExpanded(expanded === link.label ? null : link.label)}
              aria-expanded={expanded === link.label}
            >
              <span>{link.label}</span>
              <ChevronDown size={17} className={expanded === link.label ? 'is-open' : ''} />
            </button>
            {expanded === link.label && (
              <div className="mobile-nav-submenu">
                <Link to={link.path} onClick={onClose} className="mobile-nav-overview">{link.label} overview <ArrowRight size={14} /></Link>
                {link.items.map((item) => (
                  <Link key={item.path} to={item.path} onClick={onClose}>
                    <strong>{item.name}</strong>
                    <small>{item.desc}</small>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <Link key={link.path} to={link.path} onClick={onClose} className="mobile-nav-direct">{link.label}</Link>
        ))}
      </div>

      <div className="mobile-nav-actions">
        <button onClick={() => { onClose(); onOpenDemo(); }} className="mobile-demo-button"><PlayCircle size={17} /> See ODA7 in action</button>
        <div className="mobile-nav-action-row">
          <Link to="/sign-in" onClick={onClose}>Sign in</Link>
          <Button to="/get-started" onClick={onClose} variant="primary" size="sm" iconRight="ArrowRight">Get started</Button>
        </div>
      </div>
    </div>
  );
};
