'use client';

import React, { useState } from 'react';
import { InteractiveDemoModal } from '../demo/InteractiveDemoModal';
import { ScrollToTop } from '../common/ScrollToTop';
import { AppWorkspacePage } from '../../views/AppWorkspacePage';
import { DemoProvider } from '../../context/DemoContext';

export function WorkspaceShell() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  return (
    <DemoProvider openDemo={() => setIsDemoOpen(true)}>
      <div className="workspace-app-root">
        <ScrollToTop />
        <AppWorkspacePage onOpenDemo={() => setIsDemoOpen(true)} />
        <InteractiveDemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
      </div>
    </DemoProvider>
  );
}
