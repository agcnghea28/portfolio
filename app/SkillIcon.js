function IconSearch() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="21" cy="21" r="11" stroke="currentColor" strokeWidth="2.2" />
      <path d="M29.5 29.5 38 38" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="21" cy="21" r="4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function IconLayout() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="8" y="10" width="32" height="28" rx="4" stroke="currentColor" strokeWidth="2.2" />
      <path d="M8 18h32M20 18v20" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  );
}

function IconPen() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M30.5 10.5 37.5 17.5 19 36H12v-7z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M27 14.5 33.5 21" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2.2" />
      <path d="M10 24h28M24 10c4 4.5 6 9.5 6 14s-2 9.5-6 14c-4-4.5-6-9.5-6-14s2-9.5 6-14Z" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  );
}

function IconCode() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M18 16 10 24l8 8M30 16l8 8-8 8M27 14 21 34" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
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

const icons = {
  "ux-research": IconSearch,
  wireframing: IconLayout,
  "visual-ui": IconPen,
  "website-builds": IconGlobe,
  frontend: IconCode,
  "ai-workflows": IconSpark,
};

export default function SkillIcon({ id }) {
  const Glyph = icons[id] || IconSpark;
  return <Glyph />;
}
