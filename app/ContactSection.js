const channels = [
  {
    label: "Email",
    value: "agcangghea@gmail.com",
    href: "mailto:agcangghea@gmail.com",
    note: "Best for projects, collaborations, or a quick hello.",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "ghea-agcang",
    href: "https://www.linkedin.com/in/ghea-agcang/",
    note: "For professional conversations and updates.",
    external: true,
  },
  {
    label: "GitHub",
    value: "agcnghea28",
    href: "https://github.com/agcnghea28",
    note: "Selected code and experiments.",
    external: true,
  },
];

function ContactMark() {
  return (
    <svg
      className="contact-mark"
      viewBox="0 0 48 48"
      width="72"
      height="72"
      aria-hidden="true"
    >
      <rect
        x="7"
        y="13"
        width="34"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="miter"
      />
      <path
        d="M7 13l17 13 17-13"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="contact-card-arrow" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <div className="contact">
      <div className="contact-head">
        <ContactMark />
        <h2 className="section-title contact-heading">Let&apos;s talk</h2>
        <p className="contact-lede">
          I&apos;m always happy to chat about design, development, or a new idea. The easiest way
          to reach me is email — I read every message myself.
        </p>
        <p className="contact-meta">Cebu, Philippines · Open to remote work</p>
      </div>

      <ul className="contact-cards">
        {channels.map((channel) => (
          <li key={channel.label}>
            <a
              className="contact-card"
              href={channel.href}
              {...(channel.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <span className="contact-card-top">
                <span className="contact-card-label">{channel.label}</span>
                <ArrowIcon />
              </span>
              <span className="contact-card-value">{channel.value}</span>
              <span className="contact-card-note">{channel.note}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
