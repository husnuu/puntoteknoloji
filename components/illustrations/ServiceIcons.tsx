function IconShell({
  className,
  label,
  children,
}: {
  className?: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={label}
    >
      <rect x="4" y="4" width="112" height="112" rx="26" fill="var(--c-illus-a)" />
      {children}
    </svg>
  );
}

export function WebIcon({ className }: { className?: string }) {
  return (
    <IconShell className={className} label="Web sitesi ikonu">
      <rect x="28" y="32" width="64" height="48" rx="8" fill="var(--c-background)" stroke="var(--c-primary)" strokeWidth="3" />
      <rect x="28" y="32" width="64" height="14" rx="8" fill="var(--c-primary)" />
      <circle cx="37" cy="39" r="2.4" fill="#fff" />
      <circle cx="45" cy="39" r="2.4" fill="#fff" />
      <path d="M42 62l10-10 8 8 12-14" stroke="var(--c-accent-orange)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="46" y="84" width="28" height="6" rx="3" fill="var(--c-text)" fillOpacity="0.5" />
    </IconShell>
  );
}

export function MobileIcon({ className }: { className?: string }) {
  return (
    <IconShell className={className} label="Mobil uygulama ikonu">
      <rect x="42" y="24" width="36" height="72" rx="9" fill="var(--c-background)" stroke="var(--c-primary)" strokeWidth="3" />
      <rect x="49" y="34" width="22" height="42" rx="4" fill="var(--c-primary)" fillOpacity="0.16" />
      <rect x="49" y="40" width="22" height="6" rx="3" fill="var(--c-primary)" />
      <rect x="49" y="52" width="16" height="5" rx="2.5" fill="var(--c-text)" fillOpacity="0.3" />
      <rect x="49" y="61" width="18" height="5" rx="2.5" fill="var(--c-text)" fillOpacity="0.3" />
      <circle cx="60" cy="87" r="4" fill="var(--c-accent-pink)" />
    </IconShell>
  );
}

export function SoftwareIcon({ className }: { className?: string }) {
  return (
    <IconShell className={className} label="Özel yazılım ikonu">
      <circle cx="60" cy="60" r="24" fill="var(--c-background)" stroke="var(--c-primary)" strokeWidth="3" />
      <path
        d="M52 50l-8 10 8 10M68 50l8 10-8 10M63 47l-6 26"
        stroke="var(--c-accent-orange)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconShell>
  );
}

export function ChatbotIcon({ className }: { className?: string }) {
  return (
    <IconShell className={className} label="Chatbot ve AI asistanı ikonu">
      <rect x="30" y="34" width="60" height="42" rx="12" fill="var(--c-background)" stroke="var(--c-primary)" strokeWidth="3" />
      <path d="M46 76l-4 12 14-12" fill="var(--c-background)" stroke="var(--c-primary)" strokeWidth="3" strokeLinejoin="round" />
      <circle cx="48" cy="55" r="3.4" fill="var(--c-accent-orange)" />
      <circle cx="60" cy="55" r="3.4" fill="var(--c-accent-orange)" />
      <circle cx="72" cy="55" r="3.4" fill="var(--c-accent-orange)" />
    </IconShell>
  );
}

export function AiIcon({ className }: { className?: string }) {
  return (
    <IconShell className={className} label="Yapay zeka entegrasyonları ikonu">
      <path d="M60 30l6 15 15 6-15 6-6 15-6-15-15-6 15-6z" fill="var(--c-background)" stroke="var(--c-primary)" strokeWidth="3" strokeLinejoin="round" />
      <circle cx="84" cy="34" r="4.5" fill="var(--c-accent-pink)" />
      <circle cx="36" cy="82" r="4.5" fill="var(--c-accent-orange)" />
    </IconShell>
  );
}

export function EcommerceIcon({ className }: { className?: string }) {
  return (
    <IconShell className={className} label="E-ticaret ikonu">
      <path d="M38 46h44l-5 32a6 6 0 01-6 5H49a6 6 0 01-6-5l-5-32z" fill="var(--c-background)" stroke="var(--c-primary)" strokeWidth="3" strokeLinejoin="round" />
      <path d="M48 46v-6a12 12 0 0124 0v6" stroke="var(--c-primary)" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="52" cy="86" r="4" fill="var(--c-accent-pink)" />
      <circle cx="70" cy="86" r="4" fill="var(--c-accent-pink)" />
      <path d="M48 60h24" stroke="var(--c-accent-orange)" strokeWidth="3" strokeLinecap="round" />
    </IconShell>
  );
}
