import AboutSection from "./AboutSection";
import Image from "next/image";
import HeroSection from "./HeroSection";
import ProcessSection from "./ProcessSection";
import ProjectsSection from "./ProjectsSection";
import Reveal from "./Reveal";
import SkillsAccordion from "./SkillsAccordion";
import ToolsGrid from "./ToolsGrid";

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

      <section className="section section--dark about-section" id="about">
        <div className="wrap">
          <Reveal>
            <AboutSection />
          </Reveal>
        </div>
      </section>

      <section className="section section--accent tools-section" id="tools">
        <div className="wrap">
          <Reveal className="section-head">
            <h2 className="section-title">Tools I work with</h2>
          </Reveal>
        </div>
        <ToolsGrid />
      </section>

      <section className="section section--dark" id="process">
        <div className="wrap">
          <Reveal className="section-head">
            <h2 className="section-title">Design process</h2>
          </Reveal>
          <Reveal>
            <ProcessSection />
          </Reveal>
        </div>
      </section>

      <section className="section section--accent" id="projects">
        <div className="wrap">
          <Reveal className="section-head">
            <h2 className="section-title">Projects</h2>
          </Reveal>
          <ProjectsSection />
        </div>
      </section>

      <section className="section section--dark" id="skills">
        <div className="wrap">
          <Reveal className="section-head">
            <h2 className="section-title">Skills</h2>
          </Reveal>
          <Reveal>
            <SkillsAccordion />
          </Reveal>
        </div>
      </section>

      <section className="section section--accent" id="contact">
        <div className="wrap">
          <Reveal as="div" className="frame contact-frame">
            <span className="handle-tl" />
            <span className="handle-tr" />
            <div className="contact-grid">
              <div className="contact-main">
                <h2 className="contact-title">Have a project in mind? Let&apos;s build it right.</h2>
                <p className="contact-sub">
                  I partner with founders and teams to shape clean, user-focused experiences from first
                  concept to launch-ready screens and code.
                </p>
                <div className="contact-links">
                  <a className="btn btn-solid" href="mailto:agcangghea@gmail.com">Start via email</a>
                  <a className="btn btn-ghost" href="https://www.linkedin.com/in/ghea-agcang/" target="_blank" rel="noreferrer">LinkedIn</a>
                  <a className="btn btn-ghost" href="https://github.com/agcnghea28" target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>

              <div className="contact-visual" aria-hidden="true">
                <Image
                  className="contact-illustration"
                  src="/contact-illustration.svg"
                  alt=""
                  width={520}
                  height={520}
                  sizes="(max-width: 768px) 70vw, 320px"
                  unoptimized
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="footer section--dark">
        © {new Date().getFullYear()} Ghea J. Agcang — built with Next.js, deployed on Vercel.
      </footer>
    </>
  );
}
