import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Showcase from './components/Showcase.jsx';
import Stories from './components/Stories.jsx';
import Pricing from './components/Pricing.jsx';
import Faq from './components/Faq.jsx';
import Footer from './components/Footer.jsx';
import DashboardPage from './components/pages/Dashboard.jsx';
import IntegrationsPage from './components/pages/Integrations.jsx';
import DocsPage from './components/pages/Docs.jsx';
import StatusPage from './components/pages/Status.jsx';

const sections = ['hero', 'features', 'showcase', 'stories', 'pricing', 'faq'];

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    if (currentPage !== 'home') {
      return undefined;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [currentPage]);

  const scrollToSection = id => {
    const performScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const top = element.offsetTop - offset;
        window.scrollTo({
          top,
          behavior: 'smooth',
        });
      }
    };

    if (currentPage !== 'home') {
      setCurrentPage('home');
      window.setTimeout(performScroll, 120);
    } else {
      performScroll();
    }
  };

  return (
    <div className="min-h-screen gradient-bg text-slate-50">
      <div className="pointer-events-none absolute inset-x-0 -z-10 h-[500px] bg-gradient-to-b from-brand-500/20 via-slate-950 to-slate-950 blur-3xl opacity-70" />
      <Navbar
        activeSection={currentPage === 'home' ? activeSection : null}
        currentPage={currentPage}
        onNavClick={scrollToSection}
        onPageChange={setCurrentPage}
      />
      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-28">
        <div key={currentPage} className="page-transition space-y-32">
          {currentPage === 'home' && (
            <>
              <section id="hero">
                <Hero onCtaClick={() => scrollToSection('pricing')} />
              </section>
              <section id="features">
                <Features />
              </section>
              <section id="showcase">
                <Showcase />
              </section>
              <section id="stories">
                <Stories />
              </section>
              <section id="pricing">
                <Pricing />
              </section>
              <section id="faq">
                <Faq />
              </section>
            </>
          )}
          {currentPage === 'dashboard' && <DashboardPage />}
          {currentPage === 'integrations' && <IntegrationsPage />}
          {currentPage === 'docs' && <DocsPage />}
          {currentPage === 'status' && <StatusPage />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
