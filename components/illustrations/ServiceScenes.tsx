export function WebScene({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 340 300" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Web sitesi illüstrasyonu">
      <rect x="30" y="60" width="150" height="190" rx="14" fill="var(--c-illus-b)" stroke="var(--c-text)" strokeOpacity="0.85" strokeWidth="2.5" />
      <rect x="52" y="86" width="70" height="10" rx="5" fill="var(--c-primary)" />
      <circle cx="52" cy="118" r="5" fill="var(--c-text)" fillOpacity="0.3" />
      <rect x="66" y="113" width="90" height="10" rx="5" fill="var(--c-text)" fillOpacity="0.18" />
      <circle cx="52" cy="140" r="5" fill="var(--c-text)" fillOpacity="0.3" />
      <rect x="66" y="135" width="90" height="10" rx="5" fill="var(--c-text)" fillOpacity="0.18" />
      <rect x="52" y="162" width="46" height="46" rx="8" fill="var(--c-primary)" fillOpacity="0.14" />
      <rect x="106" y="162" width="46" height="46" rx="8" fill="var(--c-accent-orange)" fillOpacity="0.16" />
      <path d="M58 198l12-14 8 8 16-18" stroke="var(--c-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="176" y="30" width="132" height="94" rx="10" fill="var(--c-background)" stroke="var(--c-text)" strokeWidth="2.5" />
      <circle cx="192" cy="46" r="4" fill="var(--c-accent-orange)" />
      <circle cx="204" cy="46" r="4" fill="var(--c-accent-pink)" />
      <rect x="190" y="64" width="100" height="8" rx="4" fill="var(--c-primary)" />
      <rect x="190" y="80" width="80" height="7" rx="3.5" fill="var(--c-text)" fillOpacity="0.2" />
      <rect x="190" y="96" width="90" height="7" rx="3.5" fill="var(--c-text)" fillOpacity="0.2" />

      <ellipse cx="230" cy="272" rx="80" ry="10" fill="var(--c-text)" fillOpacity="0.06" />
      <rect x="205" y="188" width="26" height="70" rx="13" fill="var(--c-primary)" />
      <rect x="232" y="188" width="26" height="70" rx="13" fill="var(--c-accent-pink)" />
      <rect x="199" y="244" width="18" height="40" rx="8" fill="var(--c-text)" fillOpacity="0.85" />
      <rect x="248" y="244" width="18" height="40" rx="8" fill="var(--c-text)" fillOpacity="0.85" />
      <circle cx="230" cy="162" r="24" fill="#f3c9a1" />
      <path d="M204 158c0-15 12-27 26-27s26 12 26 27c0-5-12-9-26-9s-26 4-26 9z" fill="var(--c-text)" />
      <path d="M180 220l25 -32" stroke="var(--c-text)" strokeOpacity="0.85" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function MobileScene({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 340 300" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mobil uygulama illüstrasyonu">
      <ellipse cx="170" cy="272" rx="120" ry="10" fill="var(--c-text)" fillOpacity="0.06" />

      <rect x="120" y="34" width="100" height="196" rx="18" fill="var(--c-background)" stroke="var(--c-text)" strokeWidth="2.5" />
      <rect x="132" y="54" width="76" height="122" rx="8" fill="var(--c-illus-b)" />
      <rect x="140" y="64" width="60" height="9" rx="4.5" fill="var(--c-primary)" />
      <rect x="140" y="82" width="60" height="34" rx="6" fill="var(--c-primary)" fillOpacity="0.18" />
      <rect x="140" y="122" width="40" height="7" rx="3.5" fill="var(--c-text)" fillOpacity="0.25" />
      <rect x="140" y="136" width="50" height="7" rx="3.5" fill="var(--c-text)" fillOpacity="0.25" />
      <rect x="140" y="150" width="34" height="7" rx="3.5" fill="var(--c-text)" fillOpacity="0.25" />
      <circle cx="170" cy="198" r="12" fill="var(--c-accent-pink)" />
      <path d="M165 198l4 4 8-9" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="46" y="120" width="60" height="46" rx="10" fill="var(--c-illus-a)" stroke="var(--c-text)" strokeOpacity="0.6" strokeWidth="2" />
      <circle cx="66" cy="138" r="7" fill="var(--c-accent-orange)" />
      <rect x="80" y="134" width="16" height="6" rx="3" fill="var(--c-text)" fillOpacity="0.35" />
      <rect x="80" y="145" width="16" height="6" rx="3" fill="var(--c-text)" fillOpacity="0.2" />

      <rect x="238" y="150" width="30" height="76" rx="15" fill="var(--c-primary)" />
      <rect x="212" y="196" width="20" height="42" rx="9" fill="var(--c-text)" fillOpacity="0.85" />
      <circle cx="253" cy="126" r="24" fill="#e7ab7c" />
      <path d="M229 122c0-15 11-27 24-27s24 12 24 27c0-5-11-9-24-9s-24 4-24 9z" fill="var(--c-text)" />
      <path d="M243 165l14 -16" stroke="var(--c-text)" strokeOpacity="0.85" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function SoftwareScene({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 340 300" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Özel yazılım illüstrasyonu">
      <rect x="30" y="40" width="280" height="196" rx="14" fill="var(--c-text)" />
      <rect x="30" y="40" width="72" height="196" rx="14" fill="var(--c-primary)" />
      <rect x="48" y="66" width="36" height="10" rx="5" fill="#fff" fillOpacity="0.85" />
      <rect x="48" y="90" width="36" height="26" rx="6" fill="#fff" fillOpacity="0.85" />
      <rect x="48" y="90" width="36" height="26" rx="6" fill="var(--c-accent-orange)" />
      <rect x="48" y="124" width="36" height="26" rx="6" fill="#fff" fillOpacity="0.18" />
      <rect x="48" y="158" width="36" height="26" rx="6" fill="#fff" fillOpacity="0.18" />
      <rect x="48" y="192" width="36" height="26" rx="6" fill="#fff" fillOpacity="0.18" />

      <rect x="118" y="66" width="70" height="46" rx="8" fill="var(--c-primary)" />
      <rect x="196" y="66" width="70" height="46" rx="8" fill="var(--c-accent-pink)" />
      <rect x="274" y="66" width="20" height="46" rx="8" fill="#ffffff" fillOpacity="0.12" />
      <rect x="118" y="122" width="176" height="14" rx="7" fill="#ffffff" fillOpacity="0.16" />
      <rect x="118" y="144" width="176" height="10" rx="5" fill="#ffffff" fillOpacity="0.1" />
      <rect x="118" y="162" width="140" height="10" rx="5" fill="#ffffff" fillOpacity="0.1" />
      <rect x="118" y="180" width="160" height="10" rx="5" fill="#ffffff" fillOpacity="0.1" />
      <rect x="118" y="198" width="120" height="10" rx="5" fill="#ffffff" fillOpacity="0.1" />

      <ellipse cx="170" cy="272" rx="90" ry="8" fill="var(--c-text)" fillOpacity="0.06" />
    </svg>
  );
}

export function ChatbotScene({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 340 300" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chatbot ve AI asistanı illüstrasyonu">
      <rect x="70" y="30" width="220" height="150" rx="16" fill="var(--c-illus-b)" stroke="var(--c-text)" strokeOpacity="0.85" strokeWidth="2.5" />
      <path d="M150 180l-8 26 26-26z" fill="var(--c-illus-b)" stroke="var(--c-text)" strokeOpacity="0.85" strokeWidth="2.5" strokeLinejoin="round" />

      <rect x="94" y="54" width="110" height="28" rx="14" fill="var(--c-background)" stroke="var(--c-text)" strokeOpacity="0.5" strokeWidth="2" />
      <rect x="108" y="64" width="70" height="8" rx="4" fill="var(--c-text)" fillOpacity="0.3" />

      <rect x="156" y="92" width="110" height="28" rx="14" fill="var(--c-primary)" />
      <rect x="170" y="102" width="80" height="8" rx="4" fill="#fff" fillOpacity="0.85" />

      <rect x="94" y="130" width="90" height="28" rx="14" fill="var(--c-background)" stroke="var(--c-text)" strokeOpacity="0.5" strokeWidth="2" />
      <circle cx="112" cy="144" r="4" fill="var(--c-accent-orange)" />
      <circle cx="126" cy="144" r="4" fill="var(--c-accent-orange)" />
      <circle cx="140" cy="144" r="4" fill="var(--c-accent-orange)" />

      <circle cx="252" cy="46" r="20" fill="var(--c-accent-pink)" />
      <circle cx="245" cy="43" r="3" fill="#fff" />
      <circle cx="259" cy="43" r="3" fill="#fff" />
      <path d="M245 51q7 5 14 0" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <path d="M252 26v-8" stroke="var(--c-accent-pink)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="252" cy="15" r="3" fill="var(--c-accent-pink)" />

      <ellipse cx="120" cy="272" rx="100" ry="10" fill="var(--c-text)" fillOpacity="0.06" />
      <rect x="88" y="196" width="30" height="76" rx="15" fill="var(--c-primary)" />
      <rect x="118" y="196" width="30" height="76" rx="15" fill="var(--c-accent-orange)" />
      <rect x="82" y="252" width="20" height="42" rx="9" fill="var(--c-text)" fillOpacity="0.85" />
      <rect x="132" y="252" width="20" height="42" rx="9" fill="var(--c-text)" fillOpacity="0.85" />
      <circle cx="120" cy="166" r="26" fill="#f3c9a1" />
      <path d="M92 162c0-16 13-28 28-28s28 12 28 28c0-5-13-9-28-9s-28 4-28 9z" fill="var(--c-text)" />
      <rect x="76" y="184" width="88" height="30" rx="15" fill="var(--c-primary)" />
    </svg>
  );
}

export function VoiceAssistantScene({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 340 300" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ses asistanı illüstrasyonu">
      <circle cx="230" cy="110" r="90" fill="var(--c-illus-b)" />
      <circle cx="230" cy="110" r="66" fill="none" stroke="var(--c-primary)" strokeOpacity="0.3" strokeWidth="2.5" />
      <circle cx="230" cy="110" r="46" fill="none" stroke="var(--c-primary)" strokeOpacity="0.5" strokeWidth="2.5" />

      <rect x="214" y="76" width="32" height="52" rx="16" fill="var(--c-primary)" />
      <path d="M200 104v6a30 30 0 0060 0v-6" stroke="var(--c-primary)" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M230 140v14" stroke="var(--c-primary)" strokeWidth="4" strokeLinecap="round" />
      <rect x="216" y="154" width="28" height="8" rx="4" fill="var(--c-primary)" />

      <rect x="270" y="90" width="6" height="18" rx="3" fill="var(--c-accent-orange)" />
      <rect x="282" y="78" width="6" height="42" rx="3" fill="var(--c-accent-orange)" />
      <rect x="294" y="96" width="6" height="10" rx="3" fill="var(--c-accent-orange)" />
      <rect x="160" y="94" width="6" height="14" rx="3" fill="var(--c-accent-pink)" />
      <rect x="172" y="82" width="6" height="38" rx="3" fill="var(--c-accent-pink)" />

      <ellipse cx="120" cy="272" rx="100" ry="10" fill="var(--c-text)" fillOpacity="0.06" />
      <rect x="88" y="196" width="30" height="76" rx="15" fill="var(--c-accent-pink)" />
      <rect x="118" y="196" width="30" height="76" rx="15" fill="var(--c-primary)" />
      <rect x="82" y="252" width="20" height="42" rx="9" fill="var(--c-text)" fillOpacity="0.85" />
      <rect x="132" y="252" width="20" height="42" rx="9" fill="var(--c-text)" fillOpacity="0.85" />
      <circle cx="120" cy="166" r="26" fill="#e7ab7c" />
      <path d="M92 162c0-16 13-28 28-28s28 12 28 28c0-5-13-9-28-9s-28 4-28 9z" fill="var(--c-text)" />
      <path d="M108 176q12 8 24 0" stroke="var(--c-text)" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <rect x="76" y="184" width="88" height="30" rx="15" fill="var(--c-accent-pink)" />
    </svg>
  );
}

export function EcommerceScene({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 340 300" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="E-ticaret illüstrasyonu">
      <rect x="118" y="34" width="192" height="150" rx="12" fill="var(--c-background)" stroke="var(--c-text)" strokeOpacity="0.85" strokeWidth="2.5" />
      <circle cx="136" cy="50" r="4" fill="var(--c-accent-orange)" />
      <circle cx="148" cy="50" r="4" fill="var(--c-accent-pink)" />
      <path d="M140 78a16 16 0 0132 0v10h-32z" fill="none" stroke="var(--c-primary)" strokeWidth="3" strokeLinejoin="round" />
      <rect x="132" y="88" width="48" height="40" rx="6" fill="var(--c-primary)" fillOpacity="0.16" />
      <rect x="192" y="70" width="98" height="9" rx="4.5" fill="var(--c-text)" fillOpacity="0.3" />
      <rect x="192" y="88" width="98" height="7" rx="3.5" fill="var(--c-text)" fillOpacity="0.18" />
      <rect x="192" y="102" width="70" height="7" rx="3.5" fill="var(--c-text)" fillOpacity="0.18" />
      <rect x="192" y="120" width="60" height="20" rx="10" fill="var(--c-accent-orange)" />

      <rect x="132" y="150" width="158" height="10" rx="5" fill="var(--c-text)" fillOpacity="0.1" />
      <rect x="132" y="166" width="120" height="10" rx="5" fill="var(--c-text)" fillOpacity="0.1" />

      <ellipse cx="130" cy="272" rx="90" ry="10" fill="var(--c-text)" fillOpacity="0.06" />
      <rect x="96" y="196" width="20" height="46" rx="9" fill="var(--c-text)" fillOpacity="0.85" />
      <rect x="140" y="196" width="20" height="46" rx="9" fill="var(--c-text)" fillOpacity="0.85" />
      <rect x="76" y="150" width="106" height="60" rx="12" fill="var(--c-accent-pink)" />
      <path d="M100 150v-14a14 14 0 0128 0v14" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" fill="none" />
      <circle cx="98" cy="184" r="5" fill="#fff" />
      <circle cx="160" cy="184" r="5" fill="#fff" />
      <circle cx="112" cy="122" r="24" fill="#f3c9a1" />
      <path d="M88 118c0-15 11-27 24-27s24 12 24 27c0-5-11-9-24-9s-24 4-24 9z" fill="var(--c-text)" />
    </svg>
  );
}
