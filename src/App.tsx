import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { QuoteModal } from './components/QuoteModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.pathname || '/'
  );
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteServiceTarget, setQuoteServiceTarget] = useState<string | undefined>(undefined);

  // Hook to handle smooth scroll-reveal animations across routes
  useScrollReveal(currentPath);

  // Handle browser back / forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [currentPath]);

  // Navigate handler with pushState
  const navigateTo = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
    } else if (path === '/' || path === '') {
      // If user clicks home/logo while already on home, smoothly scroll right to hero
      const heroEl = document.getElementById('hero');
      if (heroEl) {
        heroEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleOpenQuoteModal = (serviceName?: string) => {
    setQuoteServiceTarget(serviceName);
    setQuoteModalOpen(true);
  };

  // Route Dispatcher (Reviews, Service Areas, and FAQ are integrated directly on HomePage)
  const renderRoute = () => {
    // 1. Home
    if (currentPath === '/' || currentPath === '' || currentPath === '/reviews' || currentPath === '/service-areas' || currentPath === '/faq') {
      return (
        <HomePage
          onNavigate={navigateTo}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    // 2. Services Overview
    if (currentPath === '/services') {
      return (
        <ServicesPage
          onNavigate={navigateTo}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    // 3. Individual Service Details (/services/:slug)
    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '').replace(/\/$/, '');
      return (
        <ServiceDetailPage
          slug={slug}
          onNavigate={navigateTo}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    // 4. Projects Gallery
    if (currentPath === '/projects') {
      return (
        <ProjectsPage
          onNavigate={navigateTo}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      );
    }

    // 5. About
    if (currentPath === '/about') {
      return (
        <AboutPage
          onNavigate={navigateTo}
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />
      );
    }

    // 6. Contact / Estimate Form
    if (currentPath === '/contact') {
      return <ContactPage onNavigate={navigateTo} />;
    }

    // 7. Legal Pages
    if (currentPath === '/privacy') {
      return <PrivacyPage onNavigate={navigateTo} />;
    }
    if (currentPath === '/terms') {
      return <TermsPage onNavigate={navigateTo} />;
    }

    // 8. 404 Fallback
    return <NotFoundPage onNavigate={navigateTo} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EE] text-[#142B3A] selection:bg-[#D96B32] selection:text-white">
      {/* Global Sticky Navigation */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Main View Container */}
      <div className="flex-1 pb-16 lg:pb-0">
        {renderRoute()}
      </div>

      {/* Reusable Global Footer with YouTube and X icons */}
      <Footer
        onNavigate={navigateTo}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Mobile Persistent Floating CTA */}
      <MobileStickyCTA
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onNavigate={navigateTo}
      />

      {/* Reusable Global Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        serviceName={quoteServiceTarget}
      />
    </div>
  );
}
