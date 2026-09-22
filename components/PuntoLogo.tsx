export default function PuntoLogo({ className, inverse = false }: { className?: string; inverse?: boolean }) {
  const outer = inverse ? "#fff" : "var(--c-text)";
  const middle = inverse ? "var(--c-text)" : "#fff";

  return (
    <svg className={className} width="26" height="26" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="punto.">
      <rect x="1" y="3" width="6" height="26" rx="1.2" fill={outer} />
      <circle cx="15" cy="11" r="10" fill={outer} />
      <circle cx="15" cy="11" r="3.6" fill={middle} />
      <circle cx="15" cy="11" r="1.9" fill="var(--c-primary)" />
    </svg>
  );
}
