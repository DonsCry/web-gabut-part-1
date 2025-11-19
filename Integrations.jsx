import React from 'react';

const integrations = [
  'Stripe',
  'Slack',
  'PostgreSQL',
  'Snowflake',
  'BigQuery',
  'Segment',
  'Kafka',
  'S3',
  'HubSpot',
  'Salesforce',
];

function IntegrationsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
            Integrasi
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Sambungkan NovaSuite ke stack data yang sudah Anda gunakan.
          </h2>
        </div>
        <p className="max-w-md text-xs text-slate-300 sm:text-sm">
          Integrasi siap pakai dengan sistem pembayaran, data warehouse, messaging, dan CRM populer.
        </p>
      </div>
      <div className="glass-panel rounded-3xl p-4">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {integrations.map(name => (
            <div
              key={name}
              className="flex items-center justify-between rounded-2xl bg-slate-950/70 px-3 py-3 text-xs text-slate-200 transition hover:bg-slate-900/80"
            >
              <span>{name}</span>
              <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-[10px] font-semibold text-emerald-300">
                Ready
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-400">
          <span>Gunakan webhook standar, konektor ETL, atau integrasi langsung ke warehouse.</span>
          <span className="rounded-full bg-slate-900/80 px-2 py-1">
            Tambah integrasi kustom via API.
          </span>
        </div>
      </div>
    </div>
  );
}

export default IntegrationsPage;
