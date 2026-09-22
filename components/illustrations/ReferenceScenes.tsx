export function BoatTourScene({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tekne turu illüstrasyonu">
      <rect width="240" height="160" fill="var(--c-illus-b)" />
      <circle cx="196" cy="34" r="20" fill="var(--c-accent-orange)" />
      <path d="M0 96h240v10c-20 8-40 8-60 0s-40-8-60 0-40 8-60 0-40-8-60 0z" fill="var(--c-primary)" fillOpacity="0.35" />
      <path d="M0 112h240v10c-20 7-40 7-60 0s-40-7-60 0-40 7-60 0-40-7-60 0z" fill="var(--c-primary)" fillOpacity="0.55" />
      <path d="M60 96V70a6 6 0 016-6h40a6 6 0 016 6v26" stroke="var(--c-text)" strokeWidth="3" fill="var(--c-background)" />
      <path d="M40 96l10-30h80l10 30z" fill="var(--c-background)" stroke="var(--c-text)" strokeWidth="3" strokeLinejoin="round" />
      <rect x="78" y="46" width="4" height="40" fill="var(--c-text)" />
      <path d="M82 48l30 10-30 8z" fill="var(--c-accent-pink)" />
      <path d="M22 96h196l-14 20a10 10 0 01-8 4H44a10 10 0 01-8-4z" fill="var(--c-background)" stroke="var(--c-text)" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
}

export function FitnessAppScene({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fitness uygulaması illüstrasyonu">
      <rect width="240" height="160" fill="var(--c-illus-b)" />
      <rect x="88" y="20" width="64" height="122" rx="16" fill="var(--c-background)" stroke="var(--c-text)" strokeWidth="3" />
      <rect x="98" y="36" width="44" height="72" rx="8" fill="var(--c-primary)" />
      <path d="M104 78l10-16 8 10 10-18 8 12" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="120" cy="122" r="8" fill="var(--c-accent-pink)" />
      <path d="M116 122l3 3 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <g>
        <rect x="30" y="70" width="14" height="30" rx="5" fill="var(--c-accent-orange)" />
        <rect x="44" y="78" width="24" height="14" rx="4" fill="var(--c-accent-orange)" />
        <rect x="68" y="70" width="14" height="30" rx="5" fill="var(--c-accent-orange)" />
      </g>
      <g>
        <rect x="158" y="70" width="14" height="30" rx="5" fill="var(--c-primary)" />
        <rect x="172" y="78" width="24" height="14" rx="4" fill="var(--c-primary)" />
        <rect x="196" y="70" width="14" height="30" rx="5" fill="var(--c-primary)" />
      </g>
    </svg>
  );
}

export function YachtScene({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Yat kiralama illüstrasyonu">
      <rect width="240" height="160" fill="var(--c-illus-b)" />
      <circle cx="44" cy="30" r="16" fill="var(--c-accent-orange)" fillOpacity="0.7" />
      <path d="M0 108h240v8c-24 9-48 9-72 0s-48-9-72 0-48 9-72 0z" fill="var(--c-primary)" fillOpacity="0.4" />
      <path d="M0 124h240v8c-24 8-48 8-72 0s-48-8-72 0-48 8-72 0z" fill="var(--c-primary)" fillOpacity="0.6" />
      <rect x="116" y="30" width="4" height="78" fill="var(--c-text)" />
      <path d="M120 36l52 66h-52z" fill="var(--c-background)" stroke="var(--c-text)" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M116 46l-36 56h36z" fill="var(--c-accent-pink)" fillOpacity="0.85" stroke="var(--c-text)" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M34 108l16-38h124l20 38z" fill="var(--c-background)" stroke="var(--c-text)" strokeWidth="3" strokeLinejoin="round" />
      <rect x="90" y="82" width="50" height="18" rx="4" fill="var(--c-primary)" fillOpacity="0.25" />
      <path d="M20 108h200l-14 22a12 12 0 01-10 5H44a12 12 0 01-10-5z" fill="var(--c-text)" />
    </svg>
  );
}

export function FerryScene({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Feribot illüstrasyonu">
      <rect width="240" height="160" fill="var(--c-illus-b)" />
      <path d="M0 118h240v8c-24 8-48 8-72 0s-48-8-72 0-48 8-72 0z" fill="var(--c-primary)" fillOpacity="0.4" />
      <path d="M0 132h240v8c-24 7-48 7-72 0s-48-7-72 0-48 7-72 0z" fill="var(--c-primary)" fillOpacity="0.6" />
      <rect x="46" y="66" width="148" height="52" rx="6" fill="var(--c-background)" stroke="var(--c-text)" strokeWidth="3" />
      <rect x="58" y="76" width="26" height="18" rx="3" fill="var(--c-primary)" fillOpacity="0.3" />
      <rect x="92" y="76" width="26" height="18" rx="3" fill="var(--c-primary)" fillOpacity="0.3" />
      <rect x="126" y="76" width="26" height="18" rx="3" fill="var(--c-primary)" fillOpacity="0.3" />
      <rect x="160" y="76" width="26" height="18" rx="3" fill="var(--c-primary)" fillOpacity="0.3" />
      <rect x="80" y="42" width="40" height="24" rx="4" fill="var(--c-background)" stroke="var(--c-text)" strokeWidth="3" />
      <rect x="150" y="30" width="14" height="36" rx="3" fill="var(--c-accent-orange)" />
      <path d="M30 118l14-24h176l14 24z" fill="var(--c-text)" />
      <circle cx="196" cy="30" r="10" fill="var(--c-accent-pink)" />
    </svg>
  );
}

export function StudioScene({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fotoğraf stüdyosu illüstrasyonu">
      <rect width="240" height="160" fill="var(--c-illus-b)" />
      <rect x="70" y="30" width="100" height="76" rx="10" fill="var(--c-background)" stroke="var(--c-text)" strokeWidth="3" />
      <circle cx="120" cy="68" r="24" fill="var(--c-primary)" />
      <circle cx="120" cy="68" r="12" fill="var(--c-background)" />
      <circle cx="120" cy="68" r="5" fill="var(--c-primary)" />
      <rect x="140" y="42" width="16" height="10" rx="3" fill="var(--c-accent-orange)" />
      <path d="M92 30l6-10h44l6 10z" fill="var(--c-background)" stroke="var(--c-text)" strokeWidth="3" strokeLinejoin="round" />
      <rect x="40" y="116" width="46" height="34" rx="4" fill="var(--c-accent-pink)" fillOpacity="0.8" transform="rotate(-6 63 133)" />
      <rect x="150" y="118" width="46" height="34" rx="4" fill="var(--c-accent-orange)" fillOpacity="0.8" transform="rotate(5 173 135)" />
    </svg>
  );
}
