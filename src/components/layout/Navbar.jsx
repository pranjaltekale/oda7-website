'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from '../../lib/navigation';
import { ArrowRight, ChevronDown, Menu, PlayCircle, X } from 'lucide-react';
import { navLinks } from '../../data/navigation';
import { Button } from '../common/Button';
import { ThemeToggle } from '../common/ThemeToggle';
import { MegaMenu } from './MegaMenu';
import { MobileNav } from './MobileNav';

export const Navbar = ({ onOpenDemo }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const menuButtonRefs = useRef({});
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onPointerDown = (event) => {
      if (openMenu && navRef.current && !navRef.current.contains(event.target)) setOpenMenu(null);
    };
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (openMenu) menuButtonRefs.current[openMenu]?.focus();
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [openMenu]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1181px)');
    const closeMobileNav = (event) => {
      if (event.matches) setMobileOpen(false);
    };
    desktopQuery.addEventListener('change', closeMobileNav);
    return () => desktopQuery.removeEventListener('change', closeMobileNav);
  }, []);

  return (
    <header ref={navRef} className={`site-navbar ${scrolled ? 'is-scrolled' : ''}`} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpenMenu(null); }}>
      <div className="container-wide navbar-inner">
        <Link to="/" className="oda-brand" aria-label="ODA7 home">
          <span className="oda-brand-mark">o7</span>
          <span className="oda-brand-copy"><strong>oda<span>7</span></strong><small>Business OS</small></span>
        </Link>

        <nav className="navbar-desktop" aria-label="Primary navigation">
          {navLinks.map((link) => link.items ? (
            <div className="navbar-menu-wrap" key={link.label}>
              <button
                ref={(node) => { menuButtonRefs.current[link.label] = node; }}
                className={`navbar-link ${openMenu === link.label ? 'is-active' : ''}`}
                onClick={() => setOpenMenu(openMenu === link.label ? null : link.label)}
                aria-expanded={openMenu === link.label}
                aria-haspopup="true"
              >
                {link.label}<ChevronDown size={14} className={openMenu === link.label ? 'is-open' : ''} />
              </button>
              {openMenu === link.label && <MegaMenu label={link.label} items={link.items} onClose={() => setOpenMenu(null)} />}
            </div>
          ) : (
            <Link key={link.path} to={link.path} className={`navbar-link ${location.pathname === link.path ? 'is-active' : ''}`}>{link.label}</Link>
          ))}
        </nav>

        <div className="navbar-actions">
          {/* Global Theme Toggle */}
          <ThemeToggle />

          <button className="navbar-demo" onClick={onOpenDemo}><PlayCircle size={15} /> See in action</button>
          <Link className="navbar-signin" to="/sign-in">Sign in</Link>
          <Button to="/get-started" variant="primary" size="sm" iconRight="ArrowRight" className="navbar-get-started">Get started</Button>
          
          <button
            className="navbar-mobile-toggle"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <>
          <button className="mobile-nav-backdrop" onClick={() => setMobileOpen(false)} aria-label="Close navigation menu" />
          <MobileNav links={navLinks} onClose={() => setMobileOpen(false)} onOpenDemo={onOpenDemo} />
        </>
      )}
    </header>
  );
};
