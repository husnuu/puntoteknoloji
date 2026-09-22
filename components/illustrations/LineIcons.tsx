function IconBase({ className, label, children }: { className?: string; label: string; children: React.ReactNode }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={label}
    >
      {children}
    </svg>
  );
}

export function SearchIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className} label="Keşif">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M20 20l-4.8-4.8" />
    </IconBase>
  );
}

export function PenIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className} label="Tasarım">
      <path d="M14.5 4.5l5 5L8 21H3v-5z" />
      <path d="M12.5 6.5l5 5" />
    </IconBase>
  );
}

export function CodeIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className} label="Üretim">
      <path d="M9 8L4 12l5 4" />
      <path d="M15 8l5 4-5 4" />
    </IconBase>
  );
}

export function RocketIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className} label="Teslim">
      <path d="M12 2c3 2 5 6 5 10 0 2-1 4-2 5l-1 2-2-3-3 1 1-3-2-1-3 1 2-2c1-1 3-2 5-2 4 0 8 2 10 5" />
      <path d="M12 2c-3 2-5 6-5 10 0 2 1 4 2 5" />
      <circle cx="12" cy="9" r="1.6" />
    </IconBase>
  );
}

export function SparkleIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className} label="Özgün tasarım">
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
    </IconBase>
  );
}

export function PhoneIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className} label="Mobile-first yaklaşım">
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </IconBase>
  );
}

export function BoltIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className} label="Hızlı teslimat">
      <path d="M13 2L4 14h6l-1 8 9-12h-6z" />
    </IconBase>
  );
}

export function PaletteIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className} label="Estetik disiplin">
      <path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2s-.5-1.5-.5-2 1-1.5 2-1.5H17a4 4 0 0 0 4-4c0-4.5-4-8.5-9-8.5z" />
      <circle cx="7.5" cy="10.5" r="1" fill="currentColor" />
      <circle cx="11" cy="7" r="1" fill="currentColor" />
      <circle cx="15.5" cy="8" r="1" fill="currentColor" />
    </IconBase>
  );
}

export function ShieldIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className} label="Bakımı kolay çözümler">
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <path d="M9.5 12l1.8 1.8L15 10" />
    </IconBase>
  );
}
