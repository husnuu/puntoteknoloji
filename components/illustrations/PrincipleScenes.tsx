export function OriginalDesignScene({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Özgün tasarım illüstrasyonu">
      <rect x="14" y="14" width="132" height="96" rx="12" fill="var(--c-illus-b)" stroke="var(--c-text)" strokeOpacity="0.85" strokeWidth="2.5" />
      <circle cx="60" cy="58" r="22" fill="var(--c-primary)" />
      <rect x="88" y="36" width="34" height="34" rx="8" fill="var(--c-accent-orange)" />
      <path d="M40 92l14-14 10 8 20-20" stroke="var(--c-accent-pink)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="118" cy="26" r="6" fill="var(--c-text)" fillOpacity="0.25" />
    </svg>
  );
}

export function MobileFirstScene({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mobile-first yaklaşım illüstrasyonu">
      <ellipse cx="80" cy="126" rx="52" ry="8" fill="var(--c-text)" fillOpacity="0.06" />
      <rect x="30" y="10" width="70" height="112" rx="14" fill="var(--c-background)" stroke="var(--c-text)" strokeWidth="2.5" />
      <rect x="40" y="26" width="50" height="70" rx="6" fill="var(--c-illus-b)" />
      <rect x="46" y="34" width="38" height="8" rx="4" fill="var(--c-primary)" />
      <rect x="46" y="48" width="38" height="20" rx="5" fill="var(--c-primary)" fillOpacity="0.18" />
      <rect x="46" y="74" width="24" height="6" rx="3" fill="var(--c-text)" fillOpacity="0.25" />
      <circle cx="65" cy="108" r="6" fill="var(--c-accent-pink)" />
      <circle cx="112" cy="60" r="18" fill="var(--c-accent-orange)" />
      <path d="M105 60l4 4 8-9" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FastDeliveryScene({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hızlı teslimat illüstrasyonu">
      <ellipse cx="80" cy="122" rx="46" ry="8" fill="var(--c-text)" fillOpacity="0.06" />
      <path
        d="M80 16c14 10 22 28 22 46 0 8-4 16-8 20l-4 8-8-12-12 4 4-12-8-4-12 4 8-8c4-4 12-8 20-8 16 0 32 8 40 20"
        fill="var(--c-primary)"
      />
      <circle cx="86" cy="46" r="7" fill="var(--c-background)" />
      <path d="M28 70l16-4M24 84l14-2M30 98l12-2" stroke="var(--c-accent-orange)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function AestheticScene({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Estetik disiplin illüstrasyonu">
      <rect x="16" y="16" width="128" height="98" rx="12" fill="var(--c-illus-b)" stroke="var(--c-text)" strokeOpacity="0.85" strokeWidth="2.5" />
      <rect x="32" y="32" width="34" height="34" rx="6" fill="var(--c-primary)" />
      <rect x="74" y="32" width="34" height="16" rx="6" fill="var(--c-accent-pink)" />
      <rect x="74" y="52" width="34" height="14" rx="6" fill="var(--c-accent-orange)" />
      <rect x="32" y="76" width="76" height="8" rx="4" fill="var(--c-text)" fillOpacity="0.15" />
      <rect x="32" y="90" width="50" height="8" rx="4" fill="var(--c-text)" fillOpacity="0.15" />
    </svg>
  );
}

export function MaintainableScene({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bakımı kolay çözümler illüstrasyonu">
      <ellipse cx="80" cy="122" rx="46" ry="8" fill="var(--c-text)" fillOpacity="0.06" />
      <path
        d="M80 18l32 12v22c0 22-14 36-32 44-18-8-32-22-32-44V30z"
        fill="var(--c-primary)"
      />
      <path d="M66 62l10 10 20-22" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="120" cy="100" r="14" fill="var(--c-accent-orange)" />
      <path d="M120 94v6l4 3" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
