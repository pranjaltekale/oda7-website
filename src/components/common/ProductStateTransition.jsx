'use client';

import React, { useState, useEffect, useRef } from 'react';

/**
 * ProductStateTransition
 * Wraps content that changes based on activeKey (tab, stage, module).
 * Animates spatial transition so the user clearly perceives the product state changing.
 */
export const ProductStateTransition = ({
  activeKey,
  children,
  className = '',
  style = {},
}) => {
  const [displayedKey, setDisplayedKey] = useState(activeKey);
  const [animState, setAnimState] = useState('active'); // 'active' | 'animating'
  const prevKeyRef = useRef(activeKey);

  useEffect(() => {
    if (activeKey !== displayedKey) {
      setAnimState('animating');
      const timer = setTimeout(() => {
        setDisplayedKey(activeKey);
        setAnimState('active');
        prevKeyRef.current = activeKey;
      }, 70);

      return () => clearTimeout(timer);
    }
  }, [activeKey, displayedKey]);

  return (
    <div
      key={displayedKey}
      className={`product-state-transition ${animState === 'active' ? 'state-active' : 'state-entering'} ${className}`}
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  );
};
