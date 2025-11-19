import React from 'react';

const services = [
  { name: 'API publik', status: 'Operational', color: 'bg-emerald-500' },
  { name: 'Data ingest', status: 'Operational', color: 'bg-emerald-500' },
  { name: 'Dashboards', status: 'Degraded performance', color: 'bg-amber-400' },
  { name: 'Notifikasi & alert', status: 'Operational', color: 'bg-emerald-500' },
];

function StatusPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
            Status sistem
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Pantau kesehatan platform NovaSuite.
          </h2>
        </div>
        <p className="max-w-md text-xs text-slate-300 sm:text-sm">
          Halaman ini mencontohkan tampilan status publik dengan ringkasan komponen utama dan riwayat
          insiden.
        </p>
      </div>
      <div className="glass-panel rounded-3xl p-4 text-xs text-slate-300 sm:text-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Semua sistem utama berjalan normal dengan beberapa degradasi minor.</span>
          </div>
          <span className="hidden rounded-full bg-slate-900/80 px-2 py-1 text-[10px] md:inline">
            Update setiap 30 detik
          </span>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {services.map(service => (
            <div
              key={service.name}
              className="flex items-center justify-between rounded-2xl bg-slate-950/80 px-3 py-3"
            >
              <span>{service.name}</span>
              <span className="inline-flex items-center gap-2 text-[11px]">
                <span className={`h-2 w-2 rounded-full ${service.color}`} />
                <span>{service.status}</span>
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-2xl bg-slate-950/80 p-3 text-[11px] text-slate-400">
          <div className="font-semibold text-slate-200">Riwayat insiden singkat</div>
          <ul className="mt-2 space-y-1">
            <li>3 hari lalu 		- Lonjakan error rate API dius caused oleh deploy feature baru.</li>
            <li>1 minggu lalu - Gangguan singkat ingest di cluster europe-west2.</li>
            <li>2 minggu lalu - Maintenance terjadwal pada sistem notifikasi.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StatusPage;
