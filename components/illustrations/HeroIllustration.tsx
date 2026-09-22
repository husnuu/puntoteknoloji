export default function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 560 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Kod ekranı önünde çalışan bir geliştiriciyi gösteren illüstrasyon"
    >
      <rect x="60" y="30" width="460" height="320" rx="18" fill="var(--c-illus-b)" />
      <rect x="60" y="30" width="460" height="320" rx="18" stroke="var(--c-text)" strokeOpacity="0.9" strokeWidth="3" />
      <rect x="60" y="30" width="460" height="48" rx="18" fill="var(--c-illus-a)" />
      <circle cx="88" cy="54" r="6" fill="var(--c-accent-orange)" />
      <circle cx="108" cy="54" r="6" fill="var(--c-accent-pink)" />
      <circle cx="128" cy="54" r="6" fill="var(--c-primary)" />

      <rect x="88" y="104" width="120" height="216" rx="10" fill="var(--c-primary)" />
      <rect x="106" y="128" width="84" height="10" rx="5" fill="#ffffff" fillOpacity="0.85" />
      <rect x="106" y="150" width="60" height="8" rx="4" fill="#ffffff" fillOpacity="0.55" />
      <rect x="106" y="184" width="84" height="8" rx="4" fill="#ffffff" fillOpacity="0.55" />
      <rect x="106" y="204" width="70" height="8" rx="4" fill="#ffffff" fillOpacity="0.55" />
      <rect x="106" y="224" width="84" height="8" rx="4" fill="#ffffff" fillOpacity="0.55" />
      <rect x="106" y="268" width="84" height="34" rx="8" fill="#ffffff" fillOpacity="0.18" />

      <rect x="232" y="104" width="256" height="94" rx="10" fill="var(--c-surface)" stroke="var(--c-border)" strokeWidth="2" />
      <rect x="252" y="124" width="90" height="10" rx="5" fill="var(--c-primary)" />
      <rect x="252" y="146" width="160" height="8" rx="4" fill="var(--c-text)" fillOpacity="0.25" />
      <rect x="252" y="164" width="130" height="8" rx="4" fill="var(--c-text)" fillOpacity="0.15" />

      <rect x="232" y="212" width="122" height="108" rx="10" fill="var(--c-surface)" stroke="var(--c-border)" strokeWidth="2" />
      <rect x="252" y="232" width="82" height="8" rx="4" fill="var(--c-accent-orange)" />
      <rect x="252" y="252" width="60" height="46" rx="6" fill="var(--c-primary)" fillOpacity="0.18" />

      <rect x="366" y="212" width="122" height="108" rx="10" fill="var(--c-surface)" stroke="var(--c-border)" strokeWidth="2" />
      <rect x="386" y="232" width="82" height="8" rx="4" fill="var(--c-accent-pink)" />
      <rect x="386" y="252" width="60" height="46" rx="6" fill="var(--c-accent-pink)" fillOpacity="0.18" />

      <rect x="300" y="356" width="130" height="22" rx="11" fill="var(--c-text)" fillOpacity="0.12" />

      <g>
        <rect x="330" y="300" width="176" height="140" rx="14" fill="var(--c-background)" stroke="var(--c-text)" strokeWidth="3" />
        <circle cx="358" cy="326" r="7" fill="var(--c-accent-orange)" />
        <rect x="378" y="320" width="90" height="10" rx="5" fill="var(--c-text)" fillOpacity="0.5" />
        <rect x="350" y="348" width="130" height="9" rx="4.5" fill="var(--c-primary)" />
        <rect x="350" y="368" width="130" height="9" rx="4.5" fill="var(--c-text)" fillOpacity="0.18" />
        <rect x="350" y="388" width="90" height="9" rx="4.5" fill="var(--c-text)" fillOpacity="0.18" />
        <circle cx="358" cy="412" r="9" fill="var(--c-primary)" />
        <path d="M354 412l3 3 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <g>
        <ellipse cx="150" cy="432" rx="70" ry="10" fill="var(--c-text)" fillOpacity="0.08" />
        <rect x="118" y="330" width="30" height="80" rx="15" fill="var(--c-primary)" />
        <rect x="150" y="330" width="30" height="80" rx="15" fill="var(--c-accent-pink)" />
        <rect x="112" y="392" width="20" height="46" rx="9" fill="var(--c-text)" fillOpacity="0.85" />
        <rect x="168" y="392" width="20" height="46" rx="9" fill="var(--c-text)" fillOpacity="0.85" />
        <circle cx="150" cy="300" r="30" fill="#f3c9a1" />
        <path d="M120 296c0-18 14-32 30-32s30 14 30 32c0-6-14-10-30-10s-30 4-30 10z" fill="var(--c-text)" />
        <rect x="106" y="316" width="88" height="34" rx="17" fill="var(--c-primary)" />
      </g>
    </svg>
  );
}
