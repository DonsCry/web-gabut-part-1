import React from 'react';

const topics = [
  'Getting started',
  'SDK & tracking event',
  'Model data rekomendasi',
  'Integrasi billing',
  'Keamanan & compliance',
];

function DocsPage() {
  return (
    <div className="grid gap-8 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
          Dokumentasi
        </p>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Mulai dalam hitungan menit.
        </h2>
        <nav className="mt-4 space-y-1 text-xs text-slate-300">
          {topics.map((topic, index) => (
            <div
              key={topic}
              className={`flex items-center justify-between rounded-xl px-3 py-2 ${
                index === 0 ? 'bg-slate-900/80' : 'hover:bg-slate-900/60'
              }`}
            >
              <span>{topic}</span>
              {index === 0 && (
                <span className="rounded-full bg-brand-500/20 px-2 py-1 text-[10px] font-semibold text-brand-100">
                  Disarankan
                </span>
              )}
            </div>
          ))}
        </nav>
      </div>
      <div className="glass-panel rounded-3xl p-4 text-xs text-slate-300 sm:text-sm">
        <div className="flex items-center justify-between">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-200">
            Langkah pertama
          </div>
          <span className="rounded-full bg-slate-900/80 px-2 py-1 text-[10px]">
            Docs ringkas
          </span>
        </div>
        <ol className="mt-4 space-y-3 list-decimal pl-4">
          <li>
            Install SDK NovaSuite di aplikasi Anda dan mulai kirimkan event penting (login, checkout,
            dan lain-lain).
          </li>
          <li>
            Hubungkan sumber data lain seperti billing dan CRM untuk membangun profil pelanggan yang
            utuh.
          </li>
          <li>
            Buat dashboard pertama Anda dari template yang sudah disediakan atau mulai dari nol.
          </li>
          <li>
            Atur alert untuk metrik kritis agar tim Anda langsung tahu saat terjadi anomali.
          </li>
        </ol>
        <p className="mt-4 text-[11px] text-slate-400">
          Dokumentasi lengkap tersedia dalam format Markdown, OpenAPI, dan guide interaktif di dalam
          produk.
        </p>
      </div>
    </div>
  );
}

export default DocsPage;
