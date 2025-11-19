import React, { useEffect, useState } from 'react';

const slides = [
  {
    company: 'AuroraPay',
    role: 'VP Data',
    quote:
      'Dengan NovaSuite, tim kami bisa melihat performa funnel lintas produk hanya dalam satu layar.',
    metricLabel: 'Waktu analisis turun',
    metricValue: '46%',
    region: 'Asia-Pacific',
    gradient: 'from-brand-500/40 via-sky-400/30 to-emerald-400/30',
  },
  {
    company: 'Northwind Mobility',
    role: 'Head of Product',
    quote:
      'Eksperimen bisa diluncurkan lebih cepat karena semua metrik sudah otomatis tersedia.',
    metricLabel: 'Kecepatan eksperimen naik',
    metricValue: '3x',
    region: 'Europe',
    gradient: 'from-violet-500/40 via-brand-500/30 to-sky-400/30',
  },
  {
    company: 'Atlas Logistics',
    role: 'Operations Lead',
    quote:
      'Alert realtime membantu kami mencegah insiden sebelum berdampak ke pelanggan.',
    metricLabel: 'Insiden kritis turun',
    metricValue: '29%',
    region: 'Global',
    gradient: 'from-emerald-500/40 via-teal-400/30 to-brand-500/30',
  },
];

function Stories() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  const active = slides[index];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
            Cerita pelanggan
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Lihat dampak nyata di bisnis mereka.
          </h2>
        </div>
        <p className="max-w-md text-xs text-slate-300 sm:text-sm">
          Slider ini akan otomatis berganti setiap beberapa detik. Gunakan kontrol di bawah untuk
          memilih cerita tertentu.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-center">
        <div className="relative h-56 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-4">
          {slides.map((slide, i) => (
            <article
              key={slide.company}
              className={`absolute inset-0 flex flex-col justify-between rounded-2xl bg-gradient-to-br ${
                slide.gradient
              } p-4 transition-all duration-500 ${
                i === index ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-3'
              }`}
            >
              <div className="flex items-center justify-between text-xs text-slate-100">
                <div>
                  <div className="font-semibold">{slide.company}</div>
                  <div className="text-[11px] text-slate-100/80">{slide.role}</div>
                </div>
                <span className="rounded-full bg-slate-950/40 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide">
                  {slide.region}
                </span>
              </div>
              <p className="mt-4 text-sm text-slate-50 sm:text-base">{slide.quote}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-100">
                <div>
                  <div className="text-[11px] text-slate-100/80">{slide.metricLabel}</div>
                  <div className="text-xl font-semibold">{slide.metricValue}</div>
                </div>
                <div className="flex gap-1.5">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setIndex(i)}
                      className={`h-1.5 w-5 rounded-full transition-colors ${
                        i === index ? 'bg-slate-100' : 'bg-slate-900/70'
                      }`}
                    >
                      <span className="sr-only">Pilih cerita {i + 1}</span>
                    </button>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="space-y-4 text-xs text-slate-300 sm:text-sm">
          <div className="glass-panel rounded-2xl p-4">
            <div className="text-[11px] uppercase tracking-[0.18em] text-brand-200">
              Snapshot aktif
            </div>
            <div className="mt-2 text-sm font-semibold text-slate-50">
              {active.company}
            </div>
            <p className="mt-1 text-xs text-slate-300">{active.quote}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="glass-panel rounded-2xl p-3">
              <div className="text-[11px] text-slate-400">Organisasi tersambung</div>
              <div className="mt-1 text-lg font-semibold text-slate-50">250+</div>
            </div>
            <div className="glass-panel rounded-2xl p-3">
              <div className="text-[11px] text-slate-400">Rata-rata event harian</div>
              <div className="mt-1 text-lg font-semibold text-slate-50">18M</div>
            </div>
            <div className="glass-panel rounded-2xl p-3">
              <div className="text-[11px] text-slate-400">Zona global aktif</div>
              <div className="mt-1 text-lg font-semibold text-slate-50">6</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stories;
