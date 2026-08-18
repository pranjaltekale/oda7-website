'use client';

import React from 'react';
import { Link } from '../../lib/navigation';
import { ShieldCheck, Lock } from 'lucide-react';

export const Footer = ({ onOpenDemo }) => {
  const columns = [
    {
      title: 'PRODUCT',
      links: [
        { label: 'Dashboard', path: '/dashboard' },
        { label: 'Leads', path: '/leads' },
        { label: 'Dialer', path: '/dialer' },
        { label: 'Analytics', path: '/analytics' },
        { label: 'AI Assistant', path: '/superadmin/ai-assistant' },
      ],
    },
    {
      title: 'SOLUTIONS',
      links: [
        { label: 'Sales Teams', path: '/solutions' },
        { label: 'Marketing & Growth', path: '/campaigns' },
        { label: 'Managers & Floor Ops', path: '/managers' },
        { label: 'Agencies & BPO', path: '/solutions' },
        { label: 'Enterprise Platforms', path: '/solutions' },
      ],
    },
    {
      title: 'PLATFORM',
      links: [
        { label: 'Organizations', path: '/superadmin/organizations' },
        { label: 'Plans', path: '/superadmin/plans' },
        { label: 'Subscriptions', path: '/superadmin/subscriptions' },
        { label: 'Admin', path: '/superadmin' },
        { label: 'Security', path: '/about' },
      ],
    },
    {
      title: 'RESOURCES',
      links: [
        { label: 'Documentation', path: '/features' },
        { label: 'Help Center', path: '/contact' },
        { label: 'Interactive FAQ', path: '/#faq' },
        { label: 'API & Webhooks', path: '/features' },
        { label: 'Product Tour', action: onOpenDemo },
      ],
    },
    {
      title: 'COMPANY',
      links: [
        { label: 'About ODA7', path: '/about' },
        { label: 'Contact Sales', path: '/contact' },
        { label: 'Security & Compliance', path: '/about' },
        { label: 'Privacy Policy', path: '/about' },
        { label: 'Terms of Service', path: '/about' },
      ],
    },
  ];

  return (
    <footer className="oda7-premium-footer" id="site-footer">
      {/* 1. Top Curved Floating Ribbon */}
      <div className="footer-top-ribbon-container">
        <div className="footer-top-ribbon">
          <span>Built around the way your teams work.</span>
        </div>
      </div>

      {/* Decorative Geometric Background Shapes */}
      <div className="footer-geom-bg-layer" aria-hidden="true">
        <div className="footer-geom-facet-1" />
        <div className="footer-geom-facet-2" />
        <div className="footer-geom-glow" />
      </div>

      {/* Main Content Container */}
      <div className="footer-inner-container">
        <div className="footer-main-grid">
          {/* LEFT COLUMN: Brand, Socials, Download Badges & Payments */}
          <div className="footer-brand-area">
            {/* Logo */}
            <Link to="/" className="footer-logo-wrap" aria-label="ODA7 Home">
              <div className="footer-logo-mark">
                <span>o7</span>
              </div>
              <div className="footer-logo-text">
                <span className="footer-brand-name">oda7</span>
                <span className="footer-brand-tag">BIZZFLY OS</span>
              </div>
            </Link>

            {/* Mission Statement */}
            <p className="footer-mission-text">
              One connected business workspace for sales execution, people operations and performance intelligence.
            </p>

            {/* Social Icons Row */}
            <div className="footer-social-row" aria-label="Social media links">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn btn-facebook"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn btn-instagram"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn btn-linkedin"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn btn-x"
                aria-label="X (formerly Twitter)"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn btn-youtube"
                aria-label="YouTube"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            {/* App / Extension / Partner Badges 2x2 Grid */}
            <div className="footer-badges-grid">
              {/* 1. Install Chrome Extension */}
              <a
                href="#extension"
                onClick={(e) => { e.preventDefault(); if (onOpenDemo) onOpenDemo(); }}
                className="footer-app-badge badge-chrome"
                title="Install Extension Now"
              >
                <img src="/brand-icons/chrome.svg" alt="Chrome" width="22" height="22" />
                <div className="badge-text-wrap">
                  <span className="badge-chrome-title">Install Extension</span>
                  <span className="badge-chrome-sub">Now</span>
                </div>
              </a>

              {/* 2. Google Play */}
              <a
                href="#google-play"
                onClick={(e) => { e.preventDefault(); if (onOpenDemo) onOpenDemo(); }}
                className="footer-app-badge badge-play"
                title="Get it on Google Play"
              >
                <img src="/brand-icons/googleplay.svg" alt="Google Play" width="20" height="20" />
                <div className="badge-text-wrap">
                  <span className="badge-tiny-muted">GET IT ON</span>
                  <span className="badge-store-title">Google Play</span>
                </div>
              </a>

              {/* 3. App Store */}
              <a
                href="#app-store"
                onClick={(e) => { e.preventDefault(); if (onOpenDemo) onOpenDemo(); }}
                className="footer-app-badge badge-appstore"
                title="Download on the App Store"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.66-.82 1.11-1.96.99-3.1-.96.04-2.13.64-2.81 1.45-.6.69-1.13 1.83-.99 2.94 1.07.08 2.16-.54 2.81-1.29z"/>
                </svg>
                <div className="badge-text-wrap">
                  <span className="badge-tiny-muted">DOWNLOAD ON THE</span>
                  <span className="badge-store-title">App Store</span>
                </div>
              </a>

              {/* 4. Business Partner */}
              <div className="footer-app-badge badge-meta" title="Business Partner">
                <img src="/brand-icons/meta.svg" alt="Business Partner" width="24" height="16" />
                <div className="badge-text-wrap">
                  <span className="badge-meta-label">Business</span>
                  <span className="badge-meta-label">Partner</span>
                </div>
              </div>
            </div>

            {/* Payment Row */}
            <div className="footer-payment-row" aria-label="Accepted payment methods">
              <div className="footer-pay-chip" title="Mastercard">
                <img src="/brand-icons/mastercard.svg" alt="Mastercard" width="34" height="20" />
              </div>
              <div className="footer-pay-chip" title="Diners Club">
                <img src="/brand-icons/dinersclub.svg" alt="Diners Club" width="34" height="20" />
              </div>
              <div className="footer-pay-chip" title="PayPal">
                <img src="/brand-icons/paypal.svg" alt="PayPal" width="34" height="20" />
              </div>
              <div className="footer-pay-chip" title="American Express">
                <img src="/brand-icons/amex.svg" alt="AMEX" width="34" height="20" />
              </div>
              <div className="footer-pay-chip" title="VISA">
                <img src="/brand-icons/visa.svg" alt="VISA" width="34" height="20" />
              </div>
            </div>
          </div>

          {/* RIGHT 5 NAVIGATION COLUMNS */}
          <nav className="footer-nav-columns" aria-label="Footer navigation">
            {columns.map((col) => (
              <div key={col.title} className="footer-nav-col">
                <h3 className="footer-col-heading">{col.title}</h3>
                <ul className="footer-links-list">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.action ? (
                        <button
                          type="button"
                          onClick={link.action}
                          className="footer-nav-link footer-btn-link"
                        >
                          {link.label}
                        </button>
                      ) : (
                        <Link to={link.path} className="footer-nav-link">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Badges & Get Free Access button under COMPANY column */}
                {col.title === 'COMPANY' && (
                  <div className="footer-company-action-area">
                    <div className="footer-compliance-pills">
                      <div className="compliance-pill">
                        <ShieldCheck size={14} className="compliance-icon-green" />
                        <span>SOC2 Type II</span>
                      </div>
                      <div className="compliance-pill">
                        <Lock size={14} className="compliance-icon-blue" />
                        <span>ISO 27001</span>
                      </div>
                    </div>

                    <Link to="/get-started" className="footer-cta-primary">
                      Get Free Access
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* BOTTOM BAR: Copyright & Disclaimer */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright-text">
            &copy; 2026 ODA7. All rights reserved. Built for modern sales &amp; workforce teams.
          </div>
          <div className="footer-disclaimer-text">
            Illustrative product data is used in interactive previews.
          </div>
        </div>
      </div>

      {/* Embedded Component Styles for Maximum Visual Fidelity */}
      <style>{`
        .oda7-premium-footer {
          position: relative;
          z-index: 20;
          isolation: isolate;
          overflow: hidden;
          background-color: #05070d;
          background-image:
            radial-gradient(circle at 50% 0%, rgba(14, 116, 144, 0.15) 0%, transparent 45%),
            radial-gradient(circle at 85% 40%, rgba(37, 99, 235, 0.08) 0%, transparent 50%);
          border-top: 1px solid rgba(56, 189, 248, 0.15);
          padding-top: 110px;
          padding-bottom: 32px;
          color: #94a3b8;
          font-family: var(--font-body, system-ui, -apple-system, sans-serif);
        }

        /* Top Curved Statement Ribbon */
        .footer-top-ribbon-container {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 660px;
          display: flex;
          justify-content: center;
          z-index: 10;
          pointer-events: none;
        }

        .footer-top-ribbon {
          width: calc(100% - 32px);
          min-height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 32px;
          border-radius: 0 0 36px 36px;
          background: linear-gradient(90deg, #1d4ed8 0%, #0284c7 45%, #06b6d4 100%);
          box-shadow: 0 10px 30px rgba(2, 132, 199, 0.35), 0 0 20px rgba(6, 182, 212, 0.2);
          border-left: 1px solid rgba(255, 255, 255, 0.3);
          border-right: 1px solid rgba(255, 255, 255, 0.3);
          border-bottom: 1px solid rgba(255, 255, 255, 0.35);
          color: #ffffff;
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(1.05rem, 1.8vw, 1.32rem);
          font-weight: 800;
          font-style: italic;
          letter-spacing: -0.02em;
          text-align: center;
          pointer-events: auto;
        }

        /* Decorative Geometric Background Shapes */
        .footer-geom-bg-layer {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: -1;
        }

        .footer-geom-facet-1 {
          position: absolute;
          width: 52%;
          height: 135%;
          right: -5%;
          top: -10%;
          background: linear-gradient(145deg, rgba(15, 23, 42, 0.7) 0%, rgba(8, 13, 26, 0.9) 100%);
          clip-path: polygon(32% 0, 100% 0, 100% 100%, 0 100%, 42% 48%);
          opacity: 0.85;
        }

        .footer-geom-facet-2 {
          position: absolute;
          width: 38%;
          height: 130%;
          right: -6%;
          bottom: -28%;
          background: linear-gradient(155deg, rgba(22, 32, 53, 0.6) 0%, rgba(10, 15, 29, 0.8) 100%);
          clip-path: polygon(55% 0, 100% 0, 100% 100%, 0 100%);
          opacity: 0.65;
        }

        .footer-geom-glow {
          position: absolute;
          width: 500px;
          height: 400px;
          right: 0;
          bottom: 0;
          background: radial-gradient(ellipse at 80% 80%, rgba(37, 99, 235, 0.12), transparent 70%);
        }

        /* Inner Content */
        .footer-inner-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 clamp(20px, 4.5vw, 64px);
        }

        /* Main Grid: Left Brand area + 5 Columns */
        .footer-main-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.45fr) minmax(0, 4.55fr);
          gap: clamp(32px, 4vw, 68px);
          padding-bottom: 48px;
        }

        /* Brand Area */
        .footer-brand-area {
          max-width: 340px;
        }

        .footer-logo-wrap {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          margin-bottom: 18px;
        }

        .footer-logo-mark {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #ffffff;
          border: 1px solid rgba(2, 132, 199, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0284c7;
          font-family: var(--font-heading, sans-serif);
          font-size: 1.35rem;
          font-weight: 900;
          letter-spacing: -0.05em;
          box-shadow: 0 4px 14px rgba(2, 132, 199, 0.18);
        }

        .footer-logo-text {
          display: flex;
          flex-direction: column;
        }

        .footer-brand-name {
          font-family: var(--font-heading, sans-serif);
          font-size: 1.6rem;
          font-weight: 850;
          color: #ffffff;
          line-height: 1;
          letter-spacing: -0.03em;
        }

        .footer-brand-tag {
          font-family: var(--font-mono, monospace);
          font-size: 0.62rem;
          font-weight: 700;
          color: #64748b;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-top: 4px;
        }

        .footer-mission-text {
          color: #94a3b8;
          font-size: 0.885rem;
          line-height: 1.6;
          margin: 0 0 20px 0;
        }

        /* Social Icons Row */
        .footer-social-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 22px;
        }

        .footer-social-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
          flex-shrink: 0;
        }

        .footer-social-btn:hover {
          transform: translateY(-2.5px);
        }

        .btn-facebook {
          background-color: #1877F2;
          box-shadow: 0 4px 10px rgba(24, 119, 242, 0.35);
        }

        .btn-instagram {
          background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
          box-shadow: 0 4px 10px rgba(214, 36, 159, 0.35);
        }

        .btn-linkedin {
          background-color: #0A66C2;
          box-shadow: 0 4px 10px rgba(10, 102, 194, 0.35);
        }

        .btn-x {
          background-color: #000000;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
        }

        .btn-youtube {
          background-color: #FF0000;
          box-shadow: 0 4px 10px rgba(255, 0, 0, 0.35);
        }

        /* App Store / Partner Badges Grid (2x2) */
        .footer-badges-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-bottom: 20px;
        }

        .footer-app-badge {
          min-height: 52px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          border-radius: 9px;
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .footer-app-badge:hover {
          transform: translateY(-2px);
        }

        /* 1. Chrome Badge */
        .badge-chrome {
          background: linear-gradient(135deg, #0284c7 0%, #2563eb 100%);
          border: 1px solid rgba(255, 255, 255, 0.25);
          box-shadow: 0 4px 14px rgba(2, 132, 199, 0.35);
        }

        .badge-chrome-title {
          font-size: 0.73rem;
          font-weight: 750;
          color: #ffffff;
          line-height: 1.15;
          display: block;
        }

        .badge-chrome-sub {
          font-size: 0.75rem;
          font-weight: 850;
          color: #ffffff;
          line-height: 1.15;
          display: block;
        }

        /* 2 & 3. Google Play & App Store */
        .badge-play,
        .badge-appstore {
          background: #000000;
          border: 1px solid #2d3748;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        .badge-tiny-muted {
          font-size: 0.5rem;
          color: #a0aec0;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          line-height: 1;
        }

        .badge-store-title {
          font-size: 0.8rem;
          color: #ffffff;
          font-weight: 750;
          line-height: 1.15;
          margin-top: 2px;
        }

        /* 4. Meta Business Partner */
        .badge-meta {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .badge-meta-label {
          font-size: 0.74rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.15;
          display: block;
        }

        .badge-text-wrap {
          display: flex;
          flex-direction: column;
        }

        /* Payment Row */
        .footer-payment-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 6px;
        }

        .footer-pay-chip {
          width: 44px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3px 5px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.12);
          transition: transform 0.2s ease;
        }

        .footer-pay-chip:hover {
          transform: translateY(-1px);
        }

        .footer-pay-chip img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        /* Navigation Columns */
        .footer-nav-columns {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: clamp(16px, 2.2vw, 32px);
        }

        .footer-nav-col {
          display: flex;
          flex-direction: column;
        }

        .footer-col-heading {
          font-family: var(--font-heading, sans-serif);
          font-size: 0.82rem;
          font-weight: 850;
          color: #38bdf8;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin: 0 0 18px 0;
        }

        .footer-links-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .footer-nav-link {
          display: inline-block;
          color: #cbd5e1;
          font-size: 0.875rem;
          line-height: 1.45;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .footer-nav-link:hover {
          color: #ffffff;
          transform: translateX(4px);
        }

        .footer-btn-link {
          background: none;
          border: none;
          padding: 0;
          font-family: inherit;
          text-align: left;
          cursor: pointer;
        }

        /* Company Column Action Area (SOC2, ISO, Green CTA) */
        .footer-company-action-area {
          margin-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-compliance-pills {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .compliance-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: rgba(30, 41, 59, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          font-size: 0.75rem;
          color: #e2e8f0;
          font-weight: 600;
        }

        .compliance-icon-green {
          color: #10b981;
          flex-shrink: 0;
        }

        .compliance-icon-blue {
          color: #38bdf8;
          flex-shrink: 0;
        }

        .footer-cta-primary,
        .footer-cta-green {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 11px 18px;
          border-radius: 9999px;
          background: linear-gradient(135deg, #1d4ed8 0%, #0284c7 48%, #06b6d4 100%);
          color: #ffffff;
          font-weight: 750;
          font-size: 0.875rem;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.22);
          box-shadow: 0 4px 18px rgba(2, 132, 199, 0.38), 0 0 14px rgba(6, 182, 212, 0.22);
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
          text-align: center;
          margin-top: 4px;
        }

        .footer-cta-primary:hover,
        .footer-cta-green:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 26px rgba(2, 132, 199, 0.52), 0 0 20px rgba(6, 182, 212, 0.35);
          color: #ffffff;
        }

        /* Bottom Bar */
        .footer-bottom-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding-top: 28px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          color: #64748b;
          font-size: 0.8rem;
        }

        .footer-copyright-text {
          color: #94a3b8;
        }

        .footer-disclaimer-text {
          color: #64748b;
          font-size: 0.75rem;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1180px) {
          .footer-main-grid {
            grid-template-columns: minmax(260px, 1fr) minmax(0, 2.8fr);
            gap: 36px;
          }
          .footer-nav-columns {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 36px 24px;
          }
        }

        @media (max-width: 860px) {
          .oda7-premium-footer {
            padding-top: 100px;
          }
          .footer-main-grid {
            grid-template-columns: 1fr;
            gap: 44px;
          }
          .footer-brand-area {
            max-width: 100%;
          }
          .footer-badges-grid {
            max-width: 380px;
          }
          .footer-nav-columns {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 32px 20px;
          }
          .footer-geom-facet-1,
          .footer-geom-facet-2 {
            display: none !important;
          }
        }

        @media (max-width: 540px) {
          .oda7-premium-footer {
            padding-top: 88px;
          }
          .footer-top-ribbon {
            min-height: 48px;
            padding: 0 16px;
            font-size: 0.95rem;
            border-radius: 0 0 24px 24px;
          }
          .footer-nav-columns {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .footer-badges-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }

        /* Light Theme Overrides (matching clean white/light styling from screenshot) */
        [data-theme="light"] .oda7-premium-footer,
        .theme-light .oda7-premium-footer {
          background-color: #f8fafc;
          background-image:
            radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.08) 0%, transparent 45%),
            linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border-top: 1px solid #e2e8f0;
          color: #475569;
        }

        [data-theme="light"] .footer-geom-facet-1,
        .theme-light .footer-geom-facet-1 {
          background: linear-gradient(145deg, #e2e8f0 0%, #f1f5f9 100%);
          opacity: 0.6;
        }

        [data-theme="light"] .footer-geom-facet-2,
        .theme-light .footer-geom-facet-2 {
          background: linear-gradient(155deg, #cbd5e1 0%, #e2e8f0 100%);
          opacity: 0.45;
        }

        [data-theme="light"] .footer-brand-name,
        .theme-light .footer-brand-name {
          color: #0f172a;
        }

        [data-theme="light"] .footer-brand-tag,
        .theme-light .footer-brand-tag {
          color: #64748b;
        }

        [data-theme="light"] .footer-mission-text,
        .theme-light .footer-mission-text {
          color: #475569;
        }

        [data-theme="light"] .footer-col-heading,
        .theme-light .footer-col-heading {
          color: #0284c7;
        }

        [data-theme="light"] .footer-nav-link,
        .theme-light .footer-nav-link {
          color: #475569;
        }

        [data-theme="light"] .footer-nav-link:hover,
        .theme-light .footer-nav-link:hover {
          color: #0284c7;
        }

        [data-theme="light"] .compliance-pill,
        .theme-light .compliance-pill {
          background: #334155;
          border-color: #475569;
          color: #ffffff;
        }

        [data-theme="light"] .footer-bottom-bar,
        .theme-light .footer-bottom-bar {
          border-top-color: #e2e8f0;
          color: #64748b;
        }

        [data-theme="light"] .footer-copyright-text,
        .theme-light .footer-copyright-text {
          color: #64748b;
        }

        [data-theme="light"] .footer-disclaimer-text,
        .theme-light .footer-disclaimer-text {
          color: #94a3b8;
        }

        [data-theme="light"] .footer-cta-primary,
        .theme-light .footer-cta-primary,
        [data-theme="light"] .footer-cta-green,
        .theme-light .footer-cta-green {
          background: linear-gradient(135deg, #0284c7 0%, #2563eb 100%);
          border-color: rgba(255, 255, 255, 0.4);
          box-shadow: 0 4px 18px rgba(37, 99, 235, 0.3);
          color: #ffffff;
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-social-btn,
          .footer-app-badge,
          .footer-nav-link,
          .footer-cta-primary,
          .footer-cta-green {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </footer>
  );
};
