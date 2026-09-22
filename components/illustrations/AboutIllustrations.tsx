export function AboutHeroIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 420 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Gösterge panelini işaret eden bir kişiyi gösteren illüstrasyon"
    >
      <path d="M120 40 L120 190" stroke="var(--c-text)" strokeOpacity="0.7" strokeWidth="3" fill="none" />
      <rect x="8" y="14" width="224" height="204" rx="12" fill="var(--c-background)" stroke="var(--c-text)" strokeWidth="3" />

      <rect x="150" y="70" width="240" height="180" rx="14" fill="var(--c-illus-b)" stroke="var(--c-text)" strokeOpacity="0.9" strokeWidth="3" />
      <rect x="172" y="96" width="196" height="46" rx="8" fill="var(--c-primary)" />
      <circle cx="192" cy="119" r="5" fill="#fff" fillOpacity="0.6" />
      <circle cx="230" cy="112" r="4" fill="#fff" fillOpacity="0.9" />
      <circle cx="260" cy="122" r="4" fill="#fff" fillOpacity="0.9" />
      <path d="M182 122l14-10 12 8 20-14 14 6" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      <rect x="172" y="154" width="196" height="16" rx="8" fill="var(--c-primary)" fillOpacity="0.5" />
      <circle cx="360" cy="162" r="10" fill="var(--c-primary)" />
      <path d="M356 162l3 3 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="172" y="182" width="196" height="16" rx="8" fill="var(--c-text)" fillOpacity="0.14" />
      <circle cx="360" cy="190" r="10" fill="var(--c-accent-pink)" />
      <path d="M356 190l3 3 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="172" y="210" width="196" height="16" rx="8" fill="var(--c-text)" fillOpacity="0.14" />
      <circle cx="360" cy="218" r="10" fill="var(--c-accent-orange)" />
      <path d="M356 218l3 3 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      <ellipse cx="150" cy="360" rx="120" ry="12" fill="var(--c-text)" fillOpacity="0.06" />
      <rect x="118" y="258" width="30" height="82" rx="15" fill="var(--c-primary)" />
      <rect x="150" y="258" width="30" height="82" rx="15" fill="var(--c-accent-pink)" />
      <rect x="112" y="322" width="20" height="46" rx="9" fill="var(--c-text)" fillOpacity="0.85" />
      <rect x="168" y="322" width="20" height="46" rx="9" fill="var(--c-text)" fillOpacity="0.85" />
      <circle cx="150" cy="228" r="30" fill="#f3c9a1" />
      <path d="M120 224c0-18 14-32 30-32s30 14 30 32c0-6-14-10-30-10s-30 4-30 10z" fill="var(--c-text)" />
      <rect x="106" y="244" width="88" height="34" rx="17" fill="var(--c-primary)" />
      <path d="M178 260l30-24" stroke="var(--c-text)" strokeOpacity="0.85" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function ContactIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 360 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Dizüstü bilgisayarında mesaj yazan bir kişiyi gösteren illüstrasyon"
    >
      <ellipse cx="180" cy="300" rx="140" ry="14" fill="var(--c-text)" fillOpacity="0.06" />

      <rect x="70" y="150" width="220" height="110" rx="10" fill="var(--c-illus-b)" stroke="var(--c-text)" strokeOpacity="0.85" strokeWidth="3" />
      <rect x="60" y="252" width="240" height="16" rx="6" fill="var(--c-text)" />
      <rect x="90" y="172" width="160" height="10" rx="5" fill="var(--c-primary)" fillOpacity="0.5" />
      <rect x="90" y="192" width="120" height="8" rx="4" fill="var(--c-text)" fillOpacity="0.18" />
      <rect x="90" y="208" width="140" height="8" rx="4" fill="var(--c-text)" fillOpacity="0.18" />

      <g>
        <rect x="196" y="46" width="140" height="96" rx="14" fill="var(--c-background)" stroke="var(--c-text)" strokeWidth="3" />
        <path d="M196 60l70 44 70-44" stroke="var(--c-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      <g>
        <circle cx="70" cy="70" r="26" fill="var(--c-accent-orange)" />
        <path d="M60 70l7 7 13-15" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <rect x="130" y="180" width="30" height="80" rx="15" fill="var(--c-primary)" />
      <rect x="160" y="180" width="30" height="80" rx="15" fill="var(--c-accent-pink)" />
      <rect x="124" y="242" width="20" height="46" rx="9" fill="var(--c-text)" fillOpacity="0.85" />
      <rect x="176" y="242" width="20" height="46" rx="9" fill="var(--c-text)" fillOpacity="0.85" />
      <circle cx="160" cy="150" r="28" fill="#f3c9a1" />
      <path d="M132 146c0-17 13-30 28-30s28 13 28 30c0-6-13-10-28-10s-28 4-28 10z" fill="var(--c-text)" />
      <rect x="118" y="166" width="84" height="32" rx="16" fill="var(--c-primary)" />
    </svg>
  );
}

export function CollaborationIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Birlikte çalışan iki kişiyi gösteren illüstrasyon"
    >
      <ellipse cx="160" cy="230" rx="130" ry="12" fill="var(--c-text)" fillOpacity="0.06" />

      <rect x="30" y="120" width="70" height="90" rx="14" fill="var(--c-primary)" />
      <circle cx="65" cy="96" r="24" fill="#f3c9a1" />
      <path d="M41 92c0-15 11-27 24-27s24 12 24 27c0-5-11-9-24-9s-24 4-24 9z" fill="var(--c-text)" />
      <rect x="86" y="150" width="46" height="30" rx="6" fill="var(--c-background)" stroke="var(--c-primary)" strokeWidth="3" />

      <rect x="220" y="120" width="70" height="90" rx="14" fill="var(--c-accent-pink)" />
      <circle cx="255" cy="96" r="24" fill="#e7ab7c" />
      <path d="M231 92c0-15 11-27 24-27s24 12 24 27c0-5-11-9-24-9s-24 4-24 9z" fill="var(--c-text)" />
      <rect x="188" y="150" width="46" height="30" rx="6" fill="var(--c-background)" stroke="var(--c-accent-pink)" strokeWidth="3" />

      <rect x="130" y="140" width="60" height="42" rx="8" fill="var(--c-illus-a)" stroke="var(--c-text)" strokeOpacity="0.7" strokeWidth="2.5" />
      <rect x="140" y="150" width="40" height="6" rx="3" fill="var(--c-primary)" />
      <rect x="140" y="162" width="30" height="5" rx="2.5" fill="var(--c-text)" fillOpacity="0.3" />
      <rect x="140" y="171" width="34" height="5" rx="2.5" fill="var(--c-text)" fillOpacity="0.3" />
    </svg>
  );
}

export function BuildIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ekrana bakarak sistem kuran bir kişiyi gösteren illüstrasyon"
    >
      <ellipse cx="160" cy="234" rx="130" ry="12" fill="var(--c-text)" fillOpacity="0.06" />

      <rect x="90" y="30" width="180" height="130" rx="14" fill="var(--c-illus-b)" stroke="var(--c-text)" strokeWidth="3" />
      <rect x="90" y="30" width="180" height="30" rx="14" fill="var(--c-illus-a)" />
      <circle cx="108" cy="45" r="5" fill="var(--c-accent-orange)" />
      <circle cx="124" cy="45" r="5" fill="var(--c-accent-pink)" />

      <rect x="112" y="78" width="60" height="60" rx="8" fill="var(--c-primary)" />
      <path d="M124 108l8 8 16-18" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="184" y="78" width="66" height="16" rx="8" fill="var(--c-text)" fillOpacity="0.15" />
      <rect x="184" y="102" width="66" height="10" rx="5" fill="var(--c-accent-orange)" />
      <rect x="184" y="120" width="46" height="10" rx="5" fill="var(--c-text)" fillOpacity="0.15" />

      <rect x="30" y="150" width="34" height="84" rx="17" fill="var(--c-accent-pink)" />
      <rect x="60" y="150" width="34" height="84" rx="17" fill="var(--c-primary)" />
      <circle cx="62" cy="120" r="26" fill="#f3c9a1" />
      <path d="M36 116c0-16 12-29 26-29s26 13 26 29c0-6-12-10-26-10s-26 4-26 10z" fill="var(--c-text)" />
      <rect x="24" y="140" width="76" height="28" rx="14" fill="var(--c-primary)" />
    </svg>
  );
}
