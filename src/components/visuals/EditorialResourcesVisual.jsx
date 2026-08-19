'use client';

import React, { useState } from 'react';
import {
  BookOpen,
  FileText,
  Bookmark,
  Search,
  ArrowRight,
  Clock,
  Download,
  Sparkles,
  Layers,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { Link } from '../../lib/navigation';

const resourceCategories = [
  { id: 'all', label: 'All Knowledge' },
  { id: 'blueprints', label: 'Architecture & Blueprints' },
  { id: 'playbooks', label: 'Sales Playbooks' },
  { id: 'operations', label: 'Workforce & People Ops' },
  { id: 'security', label: 'Security & Compliance' },
];

const editorialArticles = [
  {
    id: 'blueprint-2026',
    category: 'blueprints',
    tag: 'Executive Report',
    title: 'The 2026 Connected Sales Operations Blueprint',
    desc: 'A comprehensive guide to eliminating the 7-tool sales stack and uniting inbound routing, power dialing, coaching, and payroll into one synchronous engine.',
    readTime: '8 min read',
    pages: '18 Pages • PDF',
    date: 'August 2026 Edition',
    featured: true,
    highlights: ['Multi-tool latency cost benchmarks', 'Synchronous CRM event architecture', 'Zero-leakage inbound routing framework'],
    path: '/product/leads',
  },
  {
    id: 'dialer-coaching-playbook',
    category: 'playbooks',
    tag: 'Operational Playbook',
    title: 'Real-Time Objection Coaching in High-Velocity Call Centers',
    desc: 'How AI Whisper cues and dynamic objection battlecards lift SDR-to-AE demo conversion rates by over 34% in 30 days.',
    readTime: '5 min read',
    pages: '12 Pages • Playbook',
    date: 'Updated Weekly',
    featured: false,
    highlights: ['Top 10 enterprise objection scripts', 'Mid-call whisper protocols'],
    path: '/product/scripts',
  },
  {
    id: 'attendance-comp-sync',
    category: 'operations',
    tag: 'Implementation Guide',
    title: 'Unifying Attendance, Shift Governance & Commission Payouts',
    desc: 'Automating the bridge between floor shift attendance, dial hours, deal closures, and accurate monthly payroll calculations.',
    readTime: '6 min read',
    pages: '14 Pages • Guide',
    date: 'Best Practice',
    featured: false,
    highlights: ['Eliminating dispute cycles', 'Automated commission tier rules'],
    path: '/solutions/operations',
  },
  {
    id: 'soc2-enterprise-readiness',
    category: 'security',
    tag: 'Technical Spec',
    title: 'Enterprise Multi-Tenant Security & SOC2 Type II Architecture',
    desc: 'Technical breakdown of ODA7 tenant data isolation, end-to-end call recording encryption, SAML SSO, and immutable audit logs.',
    readTime: '7 min read',
    pages: '22 Pages • Whitepaper',
    date: 'Security Standard',
    featured: false,
    highlights: ['Row-level tenant isolation', 'Granular RBAC role policies'],
    path: '/platform',
  },
  {
    id: 'omnichannel-triage-sop',
    category: 'playbooks',
    tag: 'Tactical SOP',
    title: 'Omnichannel Inbound Triage: WhatsApp, Email & Phone SOP',
    desc: 'Standard operating procedures for managing multi-channel customer communications without dropping context or duplicating outreach.',
    readTime: '4 min read',
    pages: '9 Pages • SOP',
    date: 'Operations Kit',
    featured: false,
    highlights: ['Sub-2-minute response timers', 'Unified thread ownership'],
    path: '/product/inbox',
  },
];

export const EditorialResourcesVisual = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredDoc = editorialArticles.find((a) => a.featured) || editorialArticles[0];

  const filteredArticles = editorialArticles.filter((article) => {
    const matchesCat = activeCategory === 'all' || article.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="editorial-resources-system">
      {/* Featured Resource Hero Banner */}
      <div className="editorial-featured-card">
        <div className="featured-card-badge-row">
          <span className="badge badge-primary">
            <Sparkles size={12} style={{ marginRight: 4 }} /> Featured Dossier
          </span>
          <span className="editorial-date">{featuredDoc.date}</span>
        </div>

        <div className="featured-card-grid">
          <div className="featured-card-copy">
            <span className="featured-category-tag">{featuredDoc.tag}</span>
            <h3 className="featured-headline">{featuredDoc.title}</h3>
            <p className="featured-desc">{featuredDoc.desc}</p>

            <div className="featured-highlights-list">
              {featuredDoc.highlights.map((h, i) => (
                <div key={i} className="featured-highlight-item">
                  <span className="highlight-dot" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="featured-footer-row">
              <div className="featured-meta">
                <span><Clock size={13} /> {featuredDoc.readTime}</span>
                <span><FileText size={13} /> {featuredDoc.pages}</span>
              </div>
              <Link to={featuredDoc.path} className="btn btn-primary btn-sm">
                Explore blueprint <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="featured-card-visual-stack">
            <div className="document-cover-mockup">
              <div className="cover-spine" />
              <div className="cover-body">
                <div className="cover-logo">ODA7 Research</div>
                <h4>{featuredDoc.title}</h4>
                <div className="cover-meta-box">
                  <small>Enterprise Architecture & Best Practices</small>
                  <span>Validated by 40+ Operations Teams</span>
                </div>
                <div className="cover-bottom-bar">
                  <span className="cover-code">DOC-2026-OPS-01</span>
                  <BookOpen size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resource Explorer Controls */}
      <div className="editorial-explorer-bar">
        {/* Category Pills */}
        <div className="editorial-filter-tabs">
          {resourceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`editorial-filter-pill ${activeCategory === cat.id ? 'is-active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="editorial-search-box">
          <Search size={15} className="editorial-search-icon" />
          <input
            type="text"
            placeholder="Search guides, SOPs, blueprints..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="editorial-search-input"
          />
        </div>
      </div>

      {/* Editorial Document Grid */}
      <div className="editorial-articles-grid">
        {filteredArticles.map((item) => (
          <Link to={item.path} key={item.id} className="editorial-article-card">
            <div className="article-card-header">
              <span className="badge badge-subtle">{item.tag}</span>
              <span className="article-read-time"><Clock size={12} /> {item.readTime}</span>
            </div>

            <h4 className="article-title">{item.title}</h4>
            <p className="article-desc">{item.desc}</p>

            <div className="article-highlights-mini">
              {item.highlights.slice(0, 2).map((hl, idx) => (
                <span key={idx} className="article-mini-pill">✓ {hl}</span>
              ))}
            </div>

            <div className="article-card-footer">
              <span className="article-doc-type"><FileText size={13} /> {item.pages}</span>
              <span className="article-action-link">
                Read resource <ArrowRight size={13} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
