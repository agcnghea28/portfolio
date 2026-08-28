export default function SectionAtmosphere({
  label,
  panel = false,
  mark = "right",
}) {
  return (
    <div
      className={`section-atmosphere${panel ? " has-panel" : ""} mark-${mark}`}
      aria-hidden="true"
    >
      {label ? <span className="section-atmosphere-mark">{label}</span> : null}
      {panel ? <span className="section-atmosphere-panel" /> : null}
      <span className="section-atmosphere-corner is-tl" />
      <span className="section-atmosphere-corner is-br" />
    </div>
  );
}
