export function DiscoveryScene({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 180 150" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Keşif illüstrasyonu">
      <rect x="18" y="16" width="120" height="94" rx="12" fill="var(--c-illus-b)" stroke="var(--c-text)" strokeOpacity="0.85" strokeWidth="2.5" />
      <rect x="34" y="36" width="70" height="9" rx="4.5" fill="var(--c-primary)" />
      <rect x="34" y="54" width="88" height="7" rx="3.5" fill="var(--c-text)" fillOpacity="0.18" />
      <rect x="34" y="68" width="60" height="7" rx="3.5" fill="var(--c-text)" fillOpacity="0.18" />
      <rect x="34" y="82" width="74" height="7" rx="3.5" fill="var(--c-text)" fillOpacity="0.18" />
      <g>
        <circle cx="128" cy="94" r="24" fill="var(--c-background)" stroke="var(--c-primary)" strokeWidth="4" />
        <path d="M146 112l14 14" stroke="var(--c-primary)" strokeWidth="5" strokeLinecap="round" />
      </g>
      <circle cx="150" cy="30" r="8" fill="var(--c-accent-orange)" />
    </svg>
  );
}

export function DesignScene({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 180 150" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tasarım illüstrasyonu">
      <rect x="18" y="14" width="130" height="100" rx="12" fill="var(--c-illus-b)" stroke="var(--c-text)" strokeOpacity="0.85" strokeWidth="2.5" />
      <rect x="36" y="32" width="40" height="40" rx="8" fill="var(--c-primary)" />
      <rect x="84" y="32" width="46" height="18" rx="6" fill="var(--c-accent-pink)" />
      <rect x="84" y="54" width="46" height="18" rx="6" fill="var(--c-accent-orange)" />
      <rect x="36" y="84" width="94" height="8" rx="4" fill="var(--c-text)" fillOpacity="0.15" />
      <g>
        <path d="M138 96l24-24 10 10-24 24-14 4z" fill="var(--c-accent-orange)" stroke="var(--c-text)" strokeOpacity="0.7" strokeWidth="2" strokeLinejoin="round" />
        <path d="M152 82l10 10" stroke="var(--c-text)" strokeOpacity="0.5" strokeWidth="2" />
      </g>
    </svg>
  );
}

export function ProductionScene({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 180 150" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Üretim illüstrasyonu">
      <rect x="18" y="14" width="144" height="100" rx="12" fill="var(--c-text)" />
      <rect x="18" y="14" width="144" height="26" rx="12" fill="var(--c-illus-a)" />
      <circle cx="34" cy="27" r="4" fill="var(--c-accent-orange)" />
      <circle cx="48" cy="27" r="4" fill="var(--c-accent-pink)" />
      <path d="M38 66l14 14 30-30" stroke="var(--c-primary)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="100" y="56" width="46" height="8" rx="4" fill="#ffffff" fillOpacity="0.18" />
      <rect x="100" y="70" width="34" height="8" rx="4" fill="#ffffff" fillOpacity="0.18" />
      <rect x="34" y="90" width="112" height="8" rx="4" fill="#ffffff" fillOpacity="0.12" />
    </svg>
  );
}

export function DeliveryScene({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 180 150" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Teslim illüstrasyonu">
      <ellipse cx="90" cy="128" rx="60" ry="9" fill="var(--c-text)" fillOpacity="0.06" />
      <path
        d="M90 18c16 12 26 32 26 54 0 9-5 18-9 23l-5 9-9-13-13 4 4-13-9-5-13 4 9-9c5-5 13-9 22-9 18 0 36 9 45 23"
        fill="var(--c-primary)"
      />
      <circle cx="97" cy="52" r="8" fill="var(--c-background)" />
      <path d="M30 78l18-4M24 94l16-2M32 110l14-2" stroke="var(--c-accent-orange)" strokeWidth="3.4" strokeLinecap="round" />
      <circle cx="150" cy="40" r="7" fill="var(--c-accent-pink)" />
    </svg>
  );
}
