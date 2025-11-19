import React, { useEffect, useState } from 'react';

const pageLinks = [
  { id: 'home', label: 'Beranda' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'integrations', label: 'Integrasi' },
  { id: 'docs', label: 'Docs' },
  { id: 'status', label: 'Status' },
];

const sectionLinks = [
  { id: 'features', label: 'Fitur' },
  { id: 'showcase', label: 'Demo' },
  { id: 'stories', label: 'Cerita pelanggan' },
  { id: 'pricing', label: 'Harga' },
  { id: 'faq', label: 'FAQ' },
];

function Navbar({ activeSection, currentPage, onNavClick, onPageChange }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSectionClick = id => {
    onNavClick(id);
    setOpen(false);
  };

  const handlePageClick = id => {
    if (onPageChange) {
      onPageChange(id);
    }
    setOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-30">
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`mt-4 flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${
            isScrolled ? 'glass-panel shadow-soft-glow' : 'bg-transparent'
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-400 to-brand-600 shadow-soft-glow">
              <span className="text-lg font-bold">N</span>
            </div>
            <div>
              <div className="text-sm font-semibold tracking-tight">NovaSuite</div>
              <div className="text-xs text-slate-400">Realtime Analytics OS</div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
            <div className="flex items-center gap-4">
              {pageLinks.map(link => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handlePageClick(link.id)}
                  className={`relative text-xs transition-colors hover:text-slate-50 ${
                    currentPage === link.id ? 'text-slate-50' : ''
                  }`}
                >
                  {currentPage === link.id && (
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600" />
                  )}
                  <span className="relative">{link.label}</span>
                </button>
              ))}
            </div>
            <div className="h-4 w-px bg-slate-700/70" />
            <div className="flex items-center gap-4">
              {sectionLinks.map(link => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleSectionClick(link.id)}
                  className={`relative text-xs transition-colors hover:text-slate-50 ${
                    activeSection === link.id && currentPage === 'home'
                      ? 'text-slate-50'
                      : ''
                  }`}
                >
                  {activeSection === link.id && currentPage === 'home' && (
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600" />
                  )}
                  <span className="relative">{link.label}</span>
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => handleSectionClick('pricing')}
              className="rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-4 py-2 text-xs font-semibold text-slate-950 shadow-soft-glow"
            >
              Coba gratis
            </button>
          </nav>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700/70 md:hidden"
            onClick={() => setOpen(prev => !prev)}
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="flex flex-col gap-1.5">
              <span className="h-0.5 w-4 rounded-full bg-slate-100" />
              <span className="h-0.5 w-4 rounded-full bg-slate-100" />
            </div>
          </button>
        </div>
        {open && (
          <div className="mt-2 space-y-3 rounded-2xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-sm font-medium text-slate-300 md:hidden">
            <div className="space-y-1">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Navigasi utama
              </div>
              {pageLinks.map(link => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handlePageClick(link.id)}
                  className={`block w-full rounded-xl px-2 py-2 text-left text-xs transition-colors hover:bg-slate-800/70 ${
                    currentPage === link.id ? 'text-slate-50' : ''
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="space-y-1">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Bagian di beranda
              </div>
              {sectionLinks.map(link => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleSectionClick(link.id)}
                  className={`block w-full rounded-xl px-2 py-2 text-left text-xs transition-colors hover:bg-slate-800/70 ${
                    activeSection === link.id && currentPage === 'home'
                      ? 'text-slate-50'
                      : ''
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => handleSectionClick('pricing')}
              className="mt-2 block w-full rounded-xl bg-gradient-to-r from-brand-400 to-brand-600 px-3 py-2 text-xs font-semibold text-slate-950 shadow-soft-glow"
            >
              Coba NovaSuite sekarang
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
