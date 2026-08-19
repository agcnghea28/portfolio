import Image from "next/image";
import Reveal from "./Reveal";
import SkillsAccordion from "./SkillsAccordion";
import ToolsGrid from "./ToolsGrid";

const projects = [
  {
    name: "Project One",
    desc: "Placeholder case study — a UX redesign focused on simplifying a multi-step booking flow.",
    color: "var(--lavender)",
    status: "Case study · coming soon",
  },
  {
    name: "Project Two",
    desc: "Placeholder case study — a marketing site built and launched end-to-end on WordPress.",
    color: "var(--pink)",
    status: "Case study · coming soon",
  },
  {
    name: "Project Three",
    desc: "Placeholder case study — a design system built in Figma and handed off for development.",
    color: "var(--yellow)",
    status: "Case study · coming soon",
  },
  {
    name: "Project Four",
    desc: "Placeholder case study — a small business site rebuilt on Next.js and deployed on Vercel.",
    color: "var(--lavender)",
    status: "Case study · coming soon",
  },
];

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="wrap">
          <div className="nav-pill">
            <ul className="nav-links nav-links-left">
              <li><a href="https://portfolio-ghea.vercel.app/">Home</a></li>
              <li><a href="#tools">Tools</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
            <a className="nav-brand" href="https://portfolio-ghea.vercel.app/">
              <Image
                className="nav-logo"
                src="/ghea-avatar.png"
                alt="Ghea"
                width={34}
                height={34}
              />
              <span className="nav-name">Ghea</span>
            </a>
            <ul className="nav-links nav-links-right">
              <li><a href="#skills">Skills</a></li>
              <li><span className="nav-link-placeholder">CV</span></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-title hero-item" style={{ "--d": "0.2s" }}>
                Hello 👋<br />
                I&apos;m Ghea!
              </h1>
              <p className="hero-sub hero-item" style={{ "--d": "0.32s" }}>
                I design and build interfaces end to end — from research and
                wireframes in Figma to shipped, working websites. Comfortable
                moving between the design tool and the code editor.
              </p>
              <div className="hero-cta hero-item" style={{ "--d": "0.42s" }}>
                <a className="btn btn-solid" href="#projects">View projects</a>
                <a className="btn btn-ghost" href="#contact">Get in touch</a>
              </div>
            </div>

            <div className="hero-visual hero-item" style={{ "--d": "0.15s" }}>
              <aside className="hero-card">
                <div className="hero-card-photo-wrap">
                  <div className="hero-card-photo-inner">
                    <Image
                      className="hero-card-photo"
                      src="/ghea-avatar.png"
                      alt="Ghea Agcang"
                      width={400}
                      height={320}
                    />
                  </div>
                </div>
                <div className="hero-card-body">
                  <p className="hero-card-name">Ghea Agcang</p>
                  <p className="hero-card-location">
                    <svg className="hero-card-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5z" fill="currentColor" />
                    </svg>
                    Philippines
                  </p>
                  <p className="hero-card-comment">
                    <svg className="hero-card-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="currentColor" />
                    </svg>
                    Thank you so much for showing interest and for viewing my portfolio!
                  </p>
                </div>
              </aside>
              <span className="hero-card-tag hero-card-tag-left">UI/UX Designer</span>
              <span className="hero-card-tag hero-card-tag-right">Website Developer</span>
            </div>
          </div>
        </div>
      </header>

      <section className="section tools-section" id="tools">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="tag">01</span>
            <h2 className="section-title">Tools I work with</h2>
          </Reveal>
        </div>
        <ToolsGrid />
      </section>

      <section className="section" id="projects">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="tag">02</span>
            <h2 className="section-title">Projects</h2>
          </Reveal>
          <div className="project-grid">
            {projects.map((p, i) => (
              <Reveal
                key={p.name}
                className={`project-card project-card-${(i % 4) + 1}`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="project-swatch" style={{ background: p.color }} />
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <span className="project-status">{p.status}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="tag">03</span>
            <h2 className="section-title">Skills</h2>
          </Reveal>
          <Reveal>
            <SkillsAccordion />
          </Reveal>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="wrap">
          <Reveal as="div" className="frame contact-frame">
            <span className="handle-tl" />
            <span className="handle-tr" />
            <h2 className="contact-title">Let&apos;s work together.</h2>
            <p className="contact-sub">
              Open to freelance, contract, and full-time opportunities.
            </p>
            <div className="contact-links">
              <a className="btn btn-solid" href="mailto:agcangghea@gmail.com">Email</a>
              <a className="btn btn-ghost" href="https://www.linkedin.com/in/ghea-agcang/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn btn-ghost" href="https://github.com/agcnghea28" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Ghea J. Agcang — built with Next.js, deployed on Vercel.
      </footer>
    </>
  );
}
