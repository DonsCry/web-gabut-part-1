import React from 'react';

const items = [
  {
    q: 'Apakah NovaSuite bisa jalan di infra on-premise?',
    a: 'Bisa. Untuk paket Enterprise kami mendukung deployment di VPC Anda sendiri dengan dukungan dari tim solution engineering kami.',
  },
  {
    q: 'Integrasi apa saja yang didukung?',
    a: 'Kami terhubung dengan tool populer seperti Segment, Snowflake, BigQuery, Stripe, PostgreSQL, dan ratusan sumber data lain via konektor standar.',
  },
  {
    q: 'Berapa lama proses implementasi?',
    a: 'Untuk tim kecil biasanya kurang dari 1 minggu. Untuk enterprise bergantung pada kompleksitas data dan kebutuhan compliance.',
  },
  {
    q: 'Bagaimana model keamanan data?',
    a: 'Semua data dienkripsi in transit dan at rest, dengan kontrol akses berbasis peran, audit trail penuh, dan opsi SSO SAML.',
  },
];

function Faq() {
  return (
    <div className="grid gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
          Pertanyaan umum
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          Jawaban cepat sebelum Anda mulai.
        </h2>
        <p className="mt-3 text-xs text-slate-300 sm:text-sm">
          Masih ada pertanyaan lain? Kirim email ke hello@novasuite.app atau jadwalkan sesi demo 30 menit dengan tim kami.
        </p>
      </div>
      <dl className="space-y-3">
        {items.map(item => (
          <div
            key={item.q}
            className="glass-panel rounded-2xl px-4 py-3 text-xs sm:text-sm"
          >
            <dt className="font-semibold text-slate-50">{item.q}</dt>
            <dd className="mt-1 text-slate-300">{item.a}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default Faq;
