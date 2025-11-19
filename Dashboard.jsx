import React from 'react';

function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
            Live dashboard
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Satu tempat untuk memantau semua metrik inti.
          </h2>
        </div>
        <p className="max-w-md text-xs text-slate-300 sm:text-sm">
          Tampilan ini mencontohkan seperti apa dashboard operasional di NovaSuite: kombinasi metrik
          produk, pendapatan, dan reliabilitas.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
        <div className="glass-panel rounded-3xl p-4">
          <div className="flex items-center justify-between text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Realtime overview</span>
            </div>
            <div className="flex items-center gap-2 text-[11px]">
              <span className="rounded-full bg-slate-900/80 px-2 py-1">Last 24h</span>
              <span className="rounded-full bg-slate-900/80 px-2 py-1">Segment: All users</span>
            </div>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-slate-900/70 p-3">
              <div className="text-[11px] text-slate-400">Active users</div>
              <div className="mt-1 text-2xl font-semibold text-slate-50">8,492</div>
              <div className="mt-1 text-[11px] text-emerald-300">+18% vs minggu lalu</div>
            </div>
            <div className="rounded-2xl bg-slate-900/70 p-3">
              <div className="text-[11px] text-slate-400">MRR</div>
              <div className="mt-1 text-2xl font-semibold text-slate-50">$312k</div>
              <div className="mt-1 text-[11px] text-emerald-300">+11% vs bulan lalu</div>
            </div>
            <div className="rounded-2xl bg-slate-900/70 p-3">
              <div className="text-[11px] text-slate-400">Error rate</div>
              <div className="mt-1 text-2xl font-semibold text-slate-50">0.14%</div>
              <div className="mt-1 text-[11px] text-amber-300">Alert di beberapa zona</div>
            </div>
          </div>
          <div className="mt-4 h-40 rounded-2xl bg-gradient-to-r from-brand-500/10 via-sky-400/20 to-emerald-400/20" />
          <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
            <span>Timeline aktivitas</span>
            <span>Data disimulasikan untuk demo</span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="glass-panel rounded-2xl p-4 text-xs text-slate-300">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-200">
                Stream yang aktif
              </span>
              <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-[10px] font-semibold text-emerald-300">
                12 stream
              </span>
            </div>
            <ul className="mt-3 space-y-2">
              <li className="flex items-center justify-between">
                <span>Product events</span>
                <span className="text-emerald-300">7.2k/s</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Billing events</span>
                <span className="text-emerald-300">1.1k/s</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Infrastructure logs</span>
                <span className="text-emerald-300">3.8k/s</span>
              </li>
            </ul>
          </div>
          <div className="glass-panel rounded-2xl p-4 text-xs text-slate-300">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-200">
                Antrian alert
              </span>
              <span className="rounded-full bg-slate-900/80 px-2 py-1 text-[10px]">5 aktif</span>
            </div>
            <ul className="mt-3 space-y-2">
              <li className="flex items-center justify-between">
                <span>Latency checkout naik di region asia-southeast1</span>
                <span className="text-amber-300">Investigasi</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Penurunan konversi onboarding cohort baru</span>
                <span className="text-emerald-300">Teratasi</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Peningkatan error rate API publik</span>
                <span className="text-emerald-300">Stabil</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
