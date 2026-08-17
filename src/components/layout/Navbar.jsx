import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../../data/navigation';
import { Button } from '../common/Button';
import {
  Menu,
  X,
  ChevronDown,
  PhoneCall,
  LayoutDashboard,
  Users,
  ShieldCheck,
  Sparkles,
  PlayCircle,
  ArrowRight,
} from 'lucide-react';

const iconMap = {
  PhoneCall,
  LayoutDashboard,
  Users,
  ShieldCheck,
  Sparkles,
  PlayCircle,
};

export const Navbar = ({ onOpenDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
  }, [location.pathname]);

  // Handle ESC key for mobile menu and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setMegaMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 'var(--nav-height)',
          zIndex: 900,
          transition: 'all var(--transition-normal)',
          background: isScrolled
            ? 'rgba(7, 9, 14, 0.88)'
            : 'rgba(7, 9, 14, 0.4)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isScrolled
            ? '1px solid rgba(255, 255, 255, 0.08)'
            : '1px solid transparent',
          boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.5)' : 'none',
        }}
      >
        <div className="container-wide" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Brand Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
              border: '1px solid rgba(59, 130, 246, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(37, 99, 235, 0.3)',
            }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '900', fontSize: '1.2rem', color: '#38bdf8' }}>
                o7
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '800', fontSize: '1.35rem', letterSpacing: '-0.03em', color: '#ffffff', lineHeight: 1 }}>
                oda<span style={{ color: '#38bdf8' }}>7</span>
              </span>
              <span style={{ fontSize: '0.625rem', fontFamily: 'var(--font-mono)', color: '#64748b', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Sales OS
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '4px' }} className="desktop-nav">
            {navLinks.map((link) => {
              if (link.hasMegaMenu) {
                return (
                  <div
                    key={link.label}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setMegaMenuOpen(true)}
                    onMouseLeave={() => setMegaMenuOpen(false)}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget)) setMegaMenuOpen(false);
                    }}
                  >
                    <button
                      onClick={() => setMegaMenuOpen((open) => !open)}
                      aria-expanded={megaMenuOpen}
                      aria-haspopup="true"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '8px 14px',
                        borderRadius: '6px',
                        color: megaMenuOpen ? '#ffffff' : '#cbd5e1',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        fontFamily: 'var(--font-heading)',
                        transition: 'all var(--transition-fast)',
                      }}
                    >
                      <span>{link.label}</span>
                      <ChevronDown size={14} style={{ transform: megaMenuOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                    </button>

                    {/* Mega Menu Dropdown */}
                    {megaMenuOpen && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: '-100px',
                          width: '640px',
                          background: '#0a0e17',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: 'var(--radius-lg)',
                          padding: '20px',
                          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8), 0 0 30px rgba(37, 99, 235, 0.15)',
                          display: 'grid',
                          gridTemplateColumns: '1.2fr 1fr',
                          gap: '20px',
                          animation: 'fadeInUp 0.2s ease-out',
                        }}
                      >
                        {link.groups.map((group) => (
                          <div key={group.title}>
                            <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                              {group.title}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                              {group.items.map((item) => {
                                const IconComp = iconMap[item.icon] || Sparkles;
                                const isDemo = item.path === '#demo-trigger';

                                return (
                                  <a
                                    key={item.name}
                                    href={item.path}
                                    onClick={(e) => {
                                      if (isDemo) {
                                        e.preventDefault();
                                        onOpenDemo();
                                        setMegaMenuOpen(false);
                                      }
                                    }}
                                    style={{
                                      display: 'flex',
                                      alignItems: 'flex-start',
                                      gap: '12px',
                                      padding: '8px 10px',
                                      borderRadius: '8px',
                                      textDecoration: 'none',
                                      background: 'transparent',
                                      transition: 'background var(--transition-fast)',
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                                  >
                                    <div style={{
                                      width: '32px',
                                      height: '32px',
                                      borderRadius: '6px',
                                      background: 'rgba(37, 99, 235, 0.12)',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      color: '#38bdf8',
                                      flexShrink: 0,
                                      marginTop: '2px',
                                    }}>
                                      <IconComp size={16} />
                                    </div>
                                    <div>
                                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <span style={{ fontWeight: '600', color: '#f8fafc', fontSize: '0.85rem' }}>
                                          {item.name}
                                        </span>
                                        {item.tag && (
                                          <span style={{ fontSize: '0.625rem', padding: '1px 6px', borderRadius: '4px', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>
                                            {item.tag}
                                          </span>
                                        )}
                                      </div>
                                      <p style={{ color: '#94a3b8', fontSize: '0.75rem', lineHeight: '1.4', marginTop: '2px' }}>
                                        {item.desc}
                                      </p>
                                    </div>
                                  </a>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  to={link.path}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '6px',
                    color: location.pathname === link.path ? '#ffffff' : '#cbd5e1',
                    fontSize: '0.9rem',
                    fontWeight: location.pathname === link.path ? '600' : '500',
                    fontFamily: 'var(--font-heading)',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = location.pathname === link.path ? '#ffffff' : '#cbd5e1')}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={onOpenDemo}
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#f8fafc',
                fontSize: '0.85rem',
                fontWeight: '600',
                fontFamily: 'var(--font-heading)',
                transition: 'all var(--transition-fast)',
              }}
              className="desktop-cta"
            >
              <PlayCircle size={15} color="#38bdf8" />
              <span>See ODA7 in action</span>
            </button>

            <Link
              to="/sign-in"
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: 'var(--radius-sm)',
                color: '#cbd5e1',
                fontSize: '0.85rem',
                fontWeight: '500',
              }}
              className="desktop-cta"
            >
              Sign in
            </Link>

            <Button
              to="/get-started"
              variant="primary"
              size="sm"
              iconRight="ArrowRight"
              className="desktop-cta-primary"
            >
              Get started
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
              }}
              className="mobile-hamburger"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Slide-Over Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 890,
            background: 'rgba(4, 6, 10, 0.95)',
            backdropFilter: 'blur(20px)',
            padding: '90px 24px 32px 24px',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            animation: 'fadeIn 0.2s ease-out',
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Navigation
            </div>

            <Link
              to="/"
              style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/features"
              style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Platform
            </Link>
            <Link
              to="/solutions"
              style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              to="/pricing"
              style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/about"
              style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              to="/contact"
              style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Sales
            </Link>

            <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.08)', margin: '16px 0' }} />

            <Link
              to="/sign-in"
              style={{ fontSize: '1rem', fontWeight: '600', color: '#cbd5e1' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign in
            </Link>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '8px',
                background: 'rgba(37, 99, 235, 0.15)',
                border: '1px solid rgba(59, 130, 246, 0.4)',
                color: '#38bdf8',
                fontWeight: '700',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              <PlayCircle size={18} />
              <span>Try ODA7</span>
            </button>

            <Button
              to="/get-started"
              variant="primary"
              size="lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}

      {/* Desktop Responsive Helpers */}
      <style>{`
        @media (min-width: 1080px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-cta {
            display: flex !important;
          }
          .desktop-cta-primary {
            display: inline-flex !important;
          }
          .mobile-hamburger {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
