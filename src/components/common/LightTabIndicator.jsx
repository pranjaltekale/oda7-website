'use client';

import React, { useRef, useState, useEffect } from 'react';

/**
 * LightTabIndicator
 * Implements "Tap a tab and the light reaches for it"
 * Glides the glowing pill/indicator smoothly between tabs with spring physics.
 */
export const LightTabIndicator = ({
  tabs = [],
  activeTab,
  onChange,
  className = '',
  orientation = 'horizontal', // 'horizontal' | 'vertical'
  variant = 'pill', // 'pill' | 'underline' | 'ghost'
  renderTab,
  glow = true,
  ariaLabel = 'Tab navigation',
}) => {
  const containerRef = useRef(null);
  const tabRefs = useRef([]);
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    opacity: 0,
  });
  const [isReady, setIsReady] = useState(false);

  // Update indicator position based on the currently active tab
  const updateIndicator = (shouldScroll = true) => {
    const activeIndex = tabs.findIndex((t) => (typeof t === 'object' ? t.id === activeTab : t === activeTab));
    const activeEl = tabRefs.current[activeIndex];
    const containerEl = containerRef.current;

    if (activeEl && containerEl) {
      const left = activeEl.offsetLeft;
      const top = activeEl.offsetTop;
      const width = activeEl.offsetWidth;
      const height = activeEl.offsetHeight;

      setIndicatorStyle({
        left,
        top,
        width,
        height,
        opacity: 1,
      });

      if (!isReady) setIsReady(true);

      // Smooth auto-scroll active tab into view on mobile if container overflows
      if (shouldScroll && containerEl.scrollWidth > containerEl.clientWidth) {
        const activeCenter = activeEl.offsetLeft + activeEl.offsetWidth / 2;
        const containerCenter = containerEl.clientWidth / 2;
        const targetScroll = activeCenter - containerCenter;

        containerEl.scrollTo({
          left: Math.max(0, targetScroll),
          behavior: 'smooth',
        });
      }
    }
  };

  useEffect(() => {
    updateIndicator();

    const handleResize = () => {
      updateIndicator();
    };

    window.addEventListener('resize', handleResize, { passive: true });
    
    // Also observe container resize
    let observer;
    if (typeof ResizeObserver !== 'undefined' && containerRef.current) {
      observer = new ResizeObserver(() => {
        updateIndicator();
      });
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (observer) observer.disconnect();
    };
  }, [activeTab, tabs]);

  return (
    <div
      ref={containerRef}
      className={`light-tab-container light-tab-${orientation} light-tab-${variant} ${className}`}
      role="tablist"
      aria-label={ariaLabel}
      style={{ position: 'relative' }}
    >
      {/* Gliding illuminated indicator */}
      <div
        className={`light-tab-indicator ${glow ? 'light-tab-glow' : ''} ${isReady ? 'is-ready' : ''}`}
        style={{
          position: 'absolute',
          left: `${indicatorStyle.left}px`,
          top: `${indicatorStyle.top}px`,
          width: `${indicatorStyle.width}px`,
          height: `${indicatorStyle.height}px`,
          opacity: indicatorStyle.opacity,
          pointerEvents: 'none',
          zIndex: 1,
          transition: isReady
            ? 'left 300ms cubic-bezier(0.16, 1, 0.3, 1), top 300ms cubic-bezier(0.16, 1, 0.3, 1), width 300ms cubic-bezier(0.16, 1, 0.3, 1), height 300ms cubic-bezier(0.16, 1, 0.3, 1), opacity 200ms ease'
            : 'none',
        }}
        aria-hidden="true"
      />

      {/* Tab Buttons */}
      {tabs.map((tab, idx) => {
        const id = typeof tab === 'object' ? tab.id : tab;
        const label = typeof tab === 'object' ? tab.label || tab.title : tab;
        const icon = typeof tab === 'object' ? tab.icon : null;
        const count = typeof tab === 'object' ? tab.count : null;
        const badge = typeof tab === 'object' ? tab.badge : null;
        const isActive = id === activeTab;

        if (renderTab) {
          return (
            <React.Fragment key={id}>
              {renderTab({
                tab,
                idx,
                isActive,
                ref: (el) => (tabRefs.current[idx] = el),
                onClick: () => onChange(id),
              })}
            </React.Fragment>
          );
        }

        const renderIcon = (iconItem) => {
          if (!iconItem) return null;
          if (React.isValidElement(iconItem)) return iconItem;
          if (typeof iconItem === 'function' || (typeof iconItem === 'object' && iconItem !== null && (iconItem.$$typeof || iconItem.render))) {
            const IconComp = iconItem;
            return <IconComp size={16} />;
          }
          return null;
        };

        return (
          <button
            key={id}
            ref={(el) => (tabRefs.current[idx] = el)}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={`light-tab-btn ${isActive ? 'is-active' : ''}`}
            onClick={() => onChange(id)}
            style={{ position: 'relative', zIndex: 2 }}
          >
            {icon && (
              <span className="light-tab-icon">
                {renderIcon(icon)}
              </span>
            )}
            <span className="light-tab-label">{label}</span>
            {badge && <span className="light-tab-badge">{badge}</span>}
            {count !== null && count !== undefined && <span className="light-tab-count">{count}</span>}
          </button>
        );
      })}
    </div>
  );
};
