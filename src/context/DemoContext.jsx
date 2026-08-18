'use client';

import React, { createContext, useContext } from 'react';

const DemoContext = createContext(null);

export function DemoProvider({ openDemo, children }) {
  return <DemoContext.Provider value={openDemo}>{children}</DemoContext.Provider>;
}

export function useDemo() {
  const openDemo = useContext(DemoContext);
  if (!openDemo) throw new Error('useDemo must be used within DemoProvider');
  return openDemo;
}
