'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from '../common/ScrollToTop';
import { ScrollMotion } from '../common/ScrollMotion';
import { InteractiveDemoModal } from '../demo/InteractiveDemoModal';
import { DemoProvider } from '../../context/DemoContext';

export function MarketingShell({ children }) {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const pathname = usePathname();
  const openDemo = () => setIsDemoOpen(true);

  return (
    <DemoProvider openDemo={openDemo}>
      <div className="ambient-bg" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div className="grid-overlay" />
        <ScrollToTop />
        <ScrollMotion />
        <Navbar onOpenDemo={openDemo} />
        <main key={pathname} className="page-transition-shell" style={{ flex: 1, position: 'relative', zIndex: 10 }}>
          {children}
        </main>
        <Footer onOpenDemo={openDemo} />
        <InteractiveDemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
      </div>
    </DemoProvider>
  );
}
