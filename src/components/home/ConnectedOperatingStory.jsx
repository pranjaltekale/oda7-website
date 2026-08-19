'use client';

import React, { useEffect, useRef, useState } from 'react';
import { BarChart3, DollarSign, PhoneCall, Users, UserRoundCheck } from 'lucide-react';
import { getDomainVisual } from '../visuals/DomainVisualPrimitives';

const story = [
  { id: 'leads', label: 'Leads', icon: Users, iconName: 'Users', title: 'The opportunity enters the operating picture.', text: 'Source, qualification context and ownership become visible before the next action begins.', flow: ['Capture', 'Qualify', 'Assign'] },
  { id: 'calls', label: 'Calls', icon: PhoneCall, iconName: 'PhoneCall', title: 'The conversation happens with context.', text: 'The agent works from the lead, script and calling view instead of reconstructing context across tools.', flow: ['Review', 'Call', 'Capture'] },
  { id: 'people', label: 'People', icon: UserRoundCheck, iconName: 'Users', title: 'Team structure stays connected to activity.', text: 'Managers, teams, departments and attendance become part of how the work is understood.', flow: ['Agent', 'Team', 'Attendance'] },
  { id: 'quotes', label: 'Compensation', icon: DollarSign, iconName: 'ReceiptText', title: 'Performance connects to recognition and pay.', text: 'Salary, payroll, incentives and contests can reference the operating context behind them.', flow: ['Performance', 'Review', 'Incentive'] },
  { id: 'leadership', label: 'Analytics', icon: BarChart3, iconName: 'BarChart3', title: 'The pattern becomes visible to leadership.', text: 'Analytics, heatmaps and executive views turn connected activity into a clearer decision context.', flow: ['Measure', 'Understand', 'Improve'] },
];

export const ConnectedOperatingStory = () => {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger threshold: An option opens sequentially as upper cards scroll up
      const triggerLine = window.innerHeight * 0.44;
      let activeIndex = 0;

      refs.current.forEach((node, idx) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        if (rect.top <= triggerLine) {
          activeIndex = idx;
        }
      });

      setActive(activeIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStepClick = (index) => {
    setActive(index);
    refs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const current = story[active];

  return (
    <section id="how-it-works" className="connected-story section-dark">
      <div className="container-wide connected-story-grid">
        <div className="connected-story-copy">
          <div className="connected-story-intro">
            <span className="section-eyebrow">One operating picture</span>
            <h2>Watch the context travel through ODA7.</h2>
            <p>Scroll through the workflow. The product view changes as responsibility moves across the business.</p>
          </div>
          <div className="connected-story-articles">
            {story.map((item, index) => {
              const Icon = item.icon;
              const isActive = active === index;
              return (
                <div key={item.id} className="connected-step-wrapper">
                  <article
                    data-index={index}
                    ref={(node) => { refs.current[index] = node; }}
                    className={`connected-step-article ${isActive ? 'is-active' : ''}`}
                    onClick={() => handleStepClick(index)}
                    tabIndex={0}
                    role="button"
                    aria-pressed={isActive}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleStepClick(index); }}
                  >
                    <span>
                      <Icon size={17} />
                    </span>
                    <div>
                      <small>{String(index + 1).padStart(2, '0')} / {item.label}</small>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                  {/* Mobile-only in-flow preview */}
                  {isActive && (
                    <div className="mobile-step-visual-drawer">
                      <span className="badge badge-subtle">Live Context: {item.label}</span>
                      {getDomainVisual(item.id, 'Product', { compact: true })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {/* Desktop & Tablet Sticky Visual Container */}
        <div className="connected-story-visual desktop-story-visual">
          <div className="story-visual-sticky">
            <div key={current.id} className="story-visual-container">
              <span className="badge badge-subtle">Now viewing: {current.label}</span>
              {getDomainVisual(current.id, 'Product', { compact: true })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
