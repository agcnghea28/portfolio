export default function SectionAtmosphere({
  label,
  mark = "right",
}) {
  return (
    <div
      className={`section-atmosphere mark-${mark}`}
      aria-hidden="true"
    >
      {label ? <span className="section-atmosphere-mark">{label}</span> : null}
      <span className="section-atmosphere-corner is-tl" />
      <span className="section-atmosphere-corner is-br" />
    </div>
  );
}
