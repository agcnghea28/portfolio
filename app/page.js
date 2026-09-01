import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import RecommendationSection from "./RecommendationSection";
import HeroSection from "./HeroSection";
import ProcessSection from "./ProcessSection";
import ProjectsSection from "./ProjectsSection";
import Reveal from "./Reveal";
import SectionAtmosphere from "./SectionAtmosphere";
import SectionObserve from "./SectionObserve";
import SiteHeader from "./SiteHeader";
import SkillsAccordion from "./SkillsAccordion";
import ToolsGrid from "./ToolsGrid";

export default function Home() {
  return (
    <>
      <SectionObserve />
      <SiteHeader />

      <HeroSection />

      <section className="section section--dark about-section" id="about">
        <SectionAtmosphere label="About" mark="right" />
        <div className="wrap">
          <Reveal>
            <AboutSection />
          </Reveal>
        </div>
      </section>

      <section className="section section--accent tools-section" id="tools">
        <SectionAtmosphere label="Tools" mark="left" />
        <ToolsGrid />
      </section>

      <section className="section section--dark" id="process">
        <SectionAtmosphere label="Process" mark="left" />
        <div className="wrap">
          <Reveal>
            <ProcessSection />
          </Reveal>
        </div>
      </section>

      <section className="section section--accent" id="projects">
        <SectionAtmosphere label="Work" mark="right" />
        <div className="wrap">
          <Reveal className="section-head">
            <h2 className="section-title">Projects</h2>
          </Reveal>
          <Reveal>
            <ProjectsSection />
          </Reveal>
        </div>
      </section>

      <section className="section section--dark" id="skills">
        <SectionAtmosphere label="Skills" mark="right" />
        <div className="wrap">
          <Reveal className="section-head">
            <h2 className="section-title">Skills</h2>
          </Reveal>
          <Reveal>
            <SkillsAccordion />
          </Reveal>
        </div>
      </section>

      <section className="section section--dark recommendation-section" id="recommendation">
        <SectionAtmosphere label="Recommend" mark="left" />
        <div className="wrap">
          <Reveal>
            <RecommendationSection />
          </Reveal>
        </div>
      </section>

      <section className="section section--accent" id="contact">
        <SectionAtmosphere label="Hello" mark="left" />
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
