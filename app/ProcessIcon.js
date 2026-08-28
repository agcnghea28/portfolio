function iconProps(prominent) {
  return prominent ? { strokeWidth: "2.8" } : { strokeWidth: "2.4" };
}

function IconResearch({ prominent = false }) {
  const stroke = iconProps(prominent).strokeWidth;
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="21" cy="21" r="9" stroke="currentColor" strokeWidth={stroke} />
      <path d="M28 28 36 36" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
      <path d="M18 21h6M21 18v6" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
    </svg>
  );
}

function IconStructure({ prominent = false }) {
  const stroke = iconProps(prominent).strokeWidth;
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="18" y="8" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth={stroke} />
      <path d="M24 16v6" stroke="currentColor" strokeWidth={stroke} />
      <path d="M24 22H12v6M24 22h12v6" stroke="currentColor" strokeWidth={stroke} />
      <rect x="8" y="28" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth={stroke} />
      <rect x="30" y="28" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth={stroke} />
      <path d="M13 36v4M35 36v4" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
    </svg>
  );
}

function IconDesign({ prominent = false }) {
  const stroke = iconProps(prominent).strokeWidth;
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="9" y="10" width="30" height="28" rx="2" stroke="currentColor" strokeWidth={stroke} />
      <path d="M9 18h30" stroke="currentColor" strokeWidth={stroke} />
      <path d="M16 26h10M16 31h16" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
      <path
        d="m31 24 5 5-8 8h-5v-5l8-8Z"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBuild({ prominent = false }) {
  const stroke = iconProps(prominent).strokeWidth;
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M17 14 12 19l14 14 8-8-14-14Z"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinejoin="round"
      />
      <path
        d="m27 16 5 5M14 31l-2 7 7-2"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M30 12h6v6" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
    </svg>
  );
}

function IconTest({ prominent = false }) {
  const stroke = iconProps(prominent).strokeWidth;
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="10" y="12" width="28" height="24" rx="2" stroke="currentColor" strokeWidth={stroke} />
      <path
        d="M17 24l4 4 10-10"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLaunch({ prominent = false }) {
  const stroke = iconProps(prominent).strokeWidth;
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M24 8c-2 8-8 14-16 16 6 1 11 4 14 9 3-5 8-8 14-9-8-2-14-8-16-16Z"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinejoin="round"
      />
      <path
        d="M22 33v7l2-2 2 2v-7"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 36h20" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
    </svg>
  );
}

const icons = {
  research: IconResearch,
  structure: IconStructure,
  design: IconDesign,
  build: IconBuild,
  test: IconTest,
  launch: IconLaunch,
};

export default function ProcessIcon({ id, prominent = false }) {
  const Glyph = icons[id] || IconResearch;
  return <Glyph prominent={prominent} />;
}
