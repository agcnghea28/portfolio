import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import ProcessSection from "./ProcessSection";
import ProjectsSection from "./ProjectsSection";
import Reveal from "./Reveal";
import SiteHeader from "./SiteHeader";
import SkillsAccordion from "./SkillsAccordion";
import ToolsGrid from "./ToolsGrid";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <HeroSection />

      <section className="section section--dark about-section" id="about">
        <div className="wrap">
          <Reveal>
            <AboutSection />
          </Reveal>
        </div>
      </section>

      <section className="section section--accent tools-section" id="tools">
        <ToolsGrid />
      </section>

      <section className="section section--dark" id="process">
        <div className="wrap">
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
          <Reveal>
            <ContactSection />
          </Reveal>
        </div>
      </section>

      <footer className="footer section--accent">
        Designed & built by Ghea Agcang © 2026
      </footer>
    </>
  );
}
