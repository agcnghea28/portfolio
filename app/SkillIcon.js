function IconLayers() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="8" y="10" width="32" height="28" rx="3" stroke="currentColor" strokeWidth="2.2" />
      <path d="M8 18h32M20 18v20" stroke="currentColor" strokeWidth="2.2" />
      <path d="M24 24h12M24 29h8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function IconSpark() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M24 8v6M24 34v6M8 24h6M34 24h6M14 14l4 4M30 30l4 4M34 14l-4 4M18 30l-4 4"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  );
}

function IconWindow() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="8" y="10" width="32" height="28" rx="3" stroke="currentColor" strokeWidth="2.2" />
      <path d="M8 18h32" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M18 24 13 28l5 4M30 24l5 4-5 4M26 22 22 34"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconKanban() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="8" y="10" width="9" height="28" rx="2" stroke="currentColor" strokeWidth="2.2" />
      <rect x="19.5" y="10" width="9" height="18" rx="2" stroke="currentColor" strokeWidth="2.2" />
      <rect x="31" y="10" width="9" height="23" rx="2" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  );
}

const icons = {
  "ui-ux-design": IconLayers,
  "ai-tools": IconSpark,
  "web-dev-automation": IconWindow,
  "project-management": IconKanban,
};

export default function SkillIcon({ id }) {
  const Glyph = icons[id] || IconSpark;
  return <Glyph />;
}
