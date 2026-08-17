import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { ScrollMotion } from './components/common/ScrollMotion';
import { InteractiveDemoModal } from './components/demo/InteractiveDemoModal';

// Marketing Pages
import { HomePage } from './pages/HomePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { SignInPage } from './pages/SignInPage';
import { ProductPage } from './pages/ProductPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { SolutionDetailPage } from './pages/SolutionDetailPage';
import { PlatformPage } from './pages/PlatformPage';
import { ResourcesPage } from './pages/ResourcesPage';

// Interactive App Workspace Page
import { AppWorkspacePage } from './pages/AppWorkspacePage';

// Import dashboard styling
import './styles/dashboard.css';

export const App = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const location = useLocation();

  const handleOpenDemo = () => setIsDemoOpen(true);
  const handleCloseDemo = () => setIsDemoOpen(false);

  // Check if current route is a product app workspace route
  const isWorkspaceRoute = [
    '/dashboard',
    '/dialer',
    '/calendar',
    '/inbox',
    '/leads',
    '/campaigns',
    '/calls',
    '/companies',
    '/products',
    '/scripts',
    '/sequences',
    '/quotes',
    '/agents',
    '/managers',
    '/teams',
    '/departments',
    '/salary',
    '/payroll',
    '/incentives',
    '/contests',
    '/leaderboard',
    '/achievements',
    '/analytics',
    '/heatmap',
    '/executive',
    '/superadmin',
  ].some((route) => location.pathname === route || location.pathname.startsWith('/superadmin/'));

  if (isWorkspaceRoute) {
    return (
      <div className="workspace-app-root">
        <ScrollToTop />
        <AppWorkspacePage onOpenDemo={handleOpenDemo} />
        <InteractiveDemoModal isOpen={isDemoOpen} onClose={handleCloseDemo} />
      </div>
    );
  }

  return (
    <div className="ambient-bg" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className="grid-overlay" />
      <ScrollToTop />
      <ScrollMotion />

      {/* Global Sticky Navbar */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Main Content Viewport */}
      <main key={location.pathname} className="page-transition-shell" style={{ flex: 1, position: 'relative', zIndex: 10 }}>
        <Routes>
          <Route path="/" element={<HomePage onOpenDemo={handleOpenDemo} />} />
          <Route path="/features" element={<FeaturesPage onOpenDemo={handleOpenDemo} />} />
          <Route path="/product" element={<ProductPage onOpenDemo={handleOpenDemo} />} />
          <Route path="/product/:slug" element={<ProductDetailPage onOpenDemo={handleOpenDemo} />} />
          <Route path="/solutions" element={<SolutionsPage onOpenDemo={handleOpenDemo} />} />
          <Route path="/solutions/:slug" element={<SolutionDetailPage onOpenDemo={handleOpenDemo} />} />
          <Route path="/platform" element={<PlatformPage onOpenDemo={handleOpenDemo} />} />
          <Route path="/resources" element={<ResourcesPage onOpenDemo={handleOpenDemo} />} />
          <Route path="/pricing" element={<PricingPage onOpenDemo={handleOpenDemo} />} />
          <Route path="/about" element={<AboutPage onOpenDemo={handleOpenDemo} />} />
          <Route path="/contact" element={<ContactPage onOpenDemo={handleOpenDemo} />} />
          <Route path="/get-started" element={<ContactPage onOpenDemo={handleOpenDemo} />} />
          <Route path="/sign-in" element={<SignInPage onOpenDemo={handleOpenDemo} />} />
          <Route path="/how-it-works" element={<Navigate to="/#how-it-works" replace />} />
          <Route path="/scenarios" element={<Navigate to="/#scenarios" replace />} />
          <Route path="/get-the-app" element={<Navigate to="/get-started" replace />} />
          <Route path="/faq" element={<Navigate to="/#faq" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer onOpenDemo={handleOpenDemo} />

      {/* Global 5-Step Interactive Product Demo Modal */}
      <InteractiveDemoModal isOpen={isDemoOpen} onClose={handleCloseDemo} />
    </div>
  );
};
