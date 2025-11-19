import React from 'react';

const tiers = [
  {
    name: 'Starter',
    price: 'Gratis',
    description: 'Untuk tim kecil yang ingin mulai menyatukan analytics.',
    highlights: ['3 anggota tim', '500k event per bulan', 'Dashboard dasar'],
    popular: false,
  },
  {
    name: 'Growth',
    price: '$249/bulan',
    description: 'Semua yang dibutuhkan product-led team untuk scale.',
    highlights: [
      'Tak terbatas anggota',
      '5M event per bulan',
      'Segmentasi lanjutan',
      'Alert ke Slack & PagerDuty',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Hubungi kami',
    description: 'Untuk kebutuhan compliance dan skala besar.',
    highlights: [
      'Dedicated cluster',
      'SAML SSO & audit lengkap',
      'Support 24/7',
    ],
    popular: false,
  },
];

function Pricing() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
            Harga
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Transparan. Tanpa biaya tersembunyi.
          </h2>
        </div>
        <p className="max-w-md text-xs text-slate-300 sm:text-sm">
          Mulai gratis, dan upgrade saat Anda siap. Semua paket termasuk audit log, backup harian, dan enkripsi end-to-end.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {tiers.map(tier => (
          <div
            key={tier.name}
            className={`glass-panel flex flex-col rounded-2xl p-4 ${
              tier.popular ? 'ring-1 ring-brand-400/70 shadow-soft-glow' : ''
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-slate-50">{tier.name}</div>
              {tier.popular && (
                <span className="rounded-full bg-brand-500/20 px-2 py-1 text-[11px] font-semibold text-brand-100">
                  Paling populer
                </span>
              )}
            </div>
            <div className="mt-3 text-lg font-semibold text-slate-50">
              {tier.price}
            </div>
            <p className="mt-2 text-xs text-slate-300">{tier.description}</p>
            <ul className="mt-4 space-y-2 text-xs text-slate-200">
              {tier.highlights.map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="mt-5 w-full rounded-full bg-slate-50/5 px-3 py-2 text-xs font-semibold text-slate-50 hover:bg-slate-50/10">
              {tier.name === 'Starter' ? 'Mulai tanpa kartu kredit' : 'Hubungi tim sales'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
