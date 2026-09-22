function LogoShell({ className, label, children }: { className?: string; label: string; children: React.ReactNode }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={label}>
      {children}
    </svg>
  );
}

function WordmarkShell({
  className,
  label,
  viewBox = "0 0 140 40",
  children,
}: {
  className?: string;
  label: string;
  viewBox?: string;
  children: React.ReactNode;
}) {
  return (
    <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={label}>
      {children}
    </svg>
  );
}

export function HtmlLogo({ className }: { className?: string }) {
  return (
    <LogoShell className={className} label="HTML5">
      <path d="M6 4h28l-2.5 29L20 37l-11.5-4L6 4z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M12 11h16l-1 8.5H14.3l.4 4 5.3 1.5 5.3-1.5.4-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
    </LogoShell>
  );
}

export function CssLogo({ className }: { className?: string }) {
  return (
    <LogoShell className={className} label="CSS3">
      <path d="M6 4h28l-2.5 29L20 37l-11.5-4L6 4z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M28 11H12l.5 5H27l-.7 7-6.3 2-6.3-2-.3-3.2" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
    </LogoShell>
  );
}

export function JsLogo({ className }: { className?: string }) {
  return (
    <LogoShell className={className} label="JavaScript">
      <rect x="4" y="4" width="32" height="32" rx="5" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.6" />
      <text x="20" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="currentColor" fontFamily="sans-serif">JS</text>
    </LogoShell>
  );
}

export function ReactLogo({ className }: { className?: string }) {
  return (
    <LogoShell className={className} label="React">
      <circle cx="20" cy="20" r="3.2" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.6">
        <ellipse cx="20" cy="20" rx="15" ry="6" />
        <ellipse cx="20" cy="20" rx="15" ry="6" transform="rotate(60 20 20)" />
        <ellipse cx="20" cy="20" rx="15" ry="6" transform="rotate(120 20 20)" />
      </g>
    </LogoShell>
  );
}

export function TsLogo({ className }: { className?: string }) {
  return (
    <LogoShell className={className} label="TypeScript">
      <rect x="4" y="4" width="32" height="32" rx="5" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.6" />
      <text x="20" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="currentColor" fontFamily="sans-serif">TS</text>
    </LogoShell>
  );
}

export function NodeLogo({ className }: { className?: string }) {
  return (
    <LogoShell className={className} label="Node.js">
      <path d="M20 4l14 8v16l-14 8-14-8V12l14-8z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <text x="20" y="25" textAnchor="middle" fontSize="12" fontWeight="700" fill="currentColor" fontFamily="sans-serif">N</text>
    </LogoShell>
  );
}

export function AngularLogo({ className }: { className?: string }) {
  return (
    <LogoShell className={className} label="Angular">
      <path d="M20 4l15 5.3-2.3 19L20 36l-12.7-7.7L5 9.3 20 4z" fill="currentColor" />
      <path d="M20 10l8 18h-3l-1.6-4h-7l-1.6 4h-3l8-18zm0 5.5l-2.6 6h5.2l-2.6-6z" fill="var(--c-background)" />
    </LogoShell>
  );
}

export function VueLogo({ className }: { className?: string }) {
  return (
    <LogoShell className={className} label="Vue.js">
      <path d="M4 7h6.2L20 23l9.8-16H36L20 34 4 7z" fill="currentColor" />
      <path d="M12.2 7h4.9L20 12l2.9-5h4.9L20 21.6 12.2 7z" fill="var(--c-background)" />
    </LogoShell>
  );
}

export function SanityLogo({ className }: { className?: string }) {
  return (
    <WordmarkShell className={className} label="Sanity" viewBox="0 0 110 32">
      <text x="0" y="23" fontSize="20" fontWeight="700" letterSpacing="1" fill="currentColor" fontFamily="sans-serif">SANITY</text>
    </WordmarkShell>
  );
}

export function ContentfulLogo({ className }: { className?: string }) {
  return (
    <WordmarkShell className={className} label="Contentful" viewBox="0 0 150 32">
      <circle cx="14" cy="16" r="12" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="14" cy="16" r="4" fill="currentColor" />
      <text x="34" y="22" fontSize="18" fontWeight="600" fill="currentColor" fontFamily="sans-serif">contentful</text>
    </WordmarkShell>
  );
}

export function StoryblokLogo({ className }: { className?: string }) {
  return (
    <WordmarkShell className={className} label="Storyblok" viewBox="0 0 140 32">
      <rect x="2" y="4" width="24" height="24" rx="6" fill="currentColor" />
      <text x="14" y="22" textAnchor="middle" fontSize="15" fontWeight="700" fill="var(--c-background)" fontFamily="sans-serif">B</text>
      <text x="34" y="22" fontSize="18" fontWeight="600" fill="currentColor" fontFamily="sans-serif">storyblok</text>
    </WordmarkShell>
  );
}

export function NextjsLogo({ className }: { className?: string }) {
  return (
    <WordmarkShell className={className} label="Next.js" viewBox="0 0 120 32">
      <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M10 9v14M10 9l13 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <text x="36" y="22" fontSize="18" fontWeight="600" fill="currentColor" fontFamily="serif">Next<tspan fontSize="12" dy="2">.js</tspan></text>
    </WordmarkShell>
  );
}

export function VercelLogo({ className }: { className?: string }) {
  return (
    <WordmarkShell className={className} label="Vercel" viewBox="0 0 120 32">
      <path d="M14 6l12 20H2L14 6z" fill="currentColor" />
      <text x="32" y="22" fontSize="18" fontWeight="600" fill="currentColor" fontFamily="sans-serif">Vercel</text>
    </WordmarkShell>
  );
}

export function NetlifyLogo({ className }: { className?: string }) {
  return (
    <WordmarkShell className={className} label="Netlify" viewBox="0 0 120 32">
      <path d="M6 22l7-16 7 16h-5l-2-5-2 5H6z" fill="currentColor" />
      <text x="24" y="22" fontSize="18" fontWeight="700" fill="currentColor" fontFamily="sans-serif">netlify</text>
    </WordmarkShell>
  );
}

export function FirebaseLogo({ className }: { className?: string }) {
  return (
    <WordmarkShell className={className} label="Firebase" viewBox="0 0 140 32">
      <path d="M9 27l3.5-23 6 11-9.5 12z" fill="currentColor" />
      <path d="M9 27l14-19 4 22-18-3z" fill="currentColor" fillOpacity="0.6" />
      <text x="34" y="22" fontSize="18" fontWeight="600" fill="currentColor" fontFamily="sans-serif">Firebase</text>
    </WordmarkShell>
  );
}

export function AwsLogo({ className }: { className?: string }) {
  return (
    <WordmarkShell className={className} label="AWS" viewBox="0 0 90 32">
      <text x="0" y="22" fontSize="20" fontWeight="700" fill="currentColor" fontFamily="sans-serif">aws</text>
      <path d="M2 27c14 6 30 6 44 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </WordmarkShell>
  );
}

export function CloudflareLogo({ className }: { className?: string }) {
  return (
    <WordmarkShell className={className} label="Cloudflare" viewBox="0 0 170 32">
      <path
        d="M20 20c0-4.4 3.6-8 8-8 3.4 0 6.3 2.2 7.4 5.2.6-.3 1.3-.5 2.1-.5 2.5 0 4.5 2 4.5 4.5 0 .3 0 .6-.1.8H12c0-3.3 2.7-6 6-6 .7 0 1.4.1 2 .4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <text x="46" y="21" fontSize="14" fontWeight="700" letterSpacing="0.5" fill="currentColor" fontFamily="sans-serif">CLOUDFLARE</text>
    </WordmarkShell>
  );
}
