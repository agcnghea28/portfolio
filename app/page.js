import AboutSection from "./AboutSection";
import Image from "next/image";
import HeroSection from "./HeroSection";
import ProcessSection from "./ProcessSection";
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
              <li><a href="#about">About</a></li>
              <li><a href="#tools">Tools</a></li>
              <li><a href="#process">Process</a></li>
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
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><span className="nav-link-placeholder">CV</span></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <HeroSection />

      <section className="section about-section" id="about">
        <div className="wrap">
          <Reveal>
            <AboutSection />
          </Reveal>
        </div>
      </section>

      <section className="section tools-section" id="tools">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="tag">02</span>
            <h2 className="section-title">Tools I work with</h2>
          </Reveal>
        </div>
        <ToolsGrid />
      </section>

      <section className="section" id="process">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="tag">03</span>
            <h2 className="section-title">Design process</h2>
          </Reveal>
          <Reveal>
            <ProcessSection />
          </Reveal>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="tag">04</span>
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
            <span className="tag">05</span>
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
