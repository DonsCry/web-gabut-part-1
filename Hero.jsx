import React from 'react';

function Hero({ onCtaClick }) {
  return (
    <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
      <div className="space-y-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-200">
          <span>Live metrics</span>
          <span className="h-1 w-1 rounded-full bg-brand-200" />
          <span>AI insights</span>
          <span className="h-1 w-1 rounded-full bg-brand-200" />
          <span>Multi-cloud</span>
        </span>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          Kendalikan semua
          <span className="block bg-gradient-to-r from-brand-200 via-white to-brand-400 bg-clip-text text-transparent">
            data bisnis dalam satu dashboard.
          </span>
        </h1>
        <p className="max-w-xl text-sm text-slate-300 sm:text-base">
          NovaSuite menggabungkan data produk, keuangan, dan marketing ke dalam satu tampilan realtime yang super cepat. Tanpa query rumit, tanpa spreadsheet berantakan.
        </p>
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-950/80 px-3 py-1 text-[11px] text-slate-400 ring-1 ring-slate-800/80">
          <span>by</span>
          <span className="font-semibold text-slate-200">GITHUB DONSCRY REVAL</span>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={onCtaClick}
            className="rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-soft-glow"
          >
            Mulai uji coba gratis
          </button>
          <button
            type="button"
            className="rounded-full border border-slate-700/80 px-5 py-2.5 text-sm font-medium text-slate-200 hover:border-slate-500/80"
          >
            Lihat live demo
          </button>
          <span className="text-xs text-slate-400">
            Tidak perlu kartu kredit. 14 hari full fitur.
          </span>
        </div>
        <dl className="grid gap-4 text-xs text-slate-300 sm:grid-cols-3 sm:text-sm">
          <div>
            <dt className="text-slate-400">Rata-rata hemat waktu analisis</dt>
            <dd className="text-lg font-semibold text-slate-50">-47%</dd>
          </div>
          <div>
            <dt className="text-slate-400">Pengguna aktif global</dt>
            <dd className="text-lg font-semibold text-slate-50">32k+</dd>
          </div>
          <div>
            <dt className="text-slate-400">Integrasi siap pakai</dt>
            <dd className="text-lg font-semibold text-slate-50">120+</dd>
          </div>
        </dl>
      </div>
      <div className="relative">
        <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-brand-500/30 blur-3xl" />
        <div className="glass-panel relative z-10 rounded-3xl p-4 shadow-soft-glow">
          <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div>
              <div className="text-xs font-medium text-slate-300">Realtime revenue</div>
              <div className="text-2xl font-semibold text-slate-50">$184,920</div>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-[11px] font-medium text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>+38.4%</span>
            </span>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-900/70 p-3">
              <div className="text-[11px] text-slate-400">Conversion funnel</div>
              <div className="mt-2 flex items-end gap-1.5">
                {['20', '38', '55', '80'].map((height, index) => (
                  <div key={index} className="flex-1">
                    <div
                      className="w-full rounded-full bg-gradient-to-t from-brand-500 to-brand-300"
                      style={{ height: height + 'px' }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2 rounded-2xl bg-slate-900/70 p-3">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Latency p95</span>
                <span className="text-emerald-300">99.2% uptime</span>
              </div>
              <div className="h-20 rounded-xl bg-gradient-to-r from-emerald-400/20 via-sky-400/20 to-brand-400/20" />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>asia-southeast1</span>
                <span>us-central1</span>
                <span>europe-west2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
