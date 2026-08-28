"use client";

import { useEffect, useRef } from "react";
import { scrollToSection } from "./scrollToSection";

export default function HeroSection() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const onMove = (event) => {
      const rect = node.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      node.style.setProperty("--hx", `${(x * 14).toFixed(1)}px`);
      node.style.setProperty("--hy", `${(y * 10).toFixed(1)}px`);
    };

    const onLeave = () => {
      node.style.setProperty("--hx", "0px");
      node.style.setProperty("--hy", "0px");
    };

    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", onLeave);
    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <header className="hero section--dark" id="home" ref={ref}>
      <div className="hero-atmosphere" aria-hidden="true">
        <span className="hero-glow hero-glow-a" />
        <span className="hero-field" />
        <span className="hero-speck is-1" />
        <span className="hero-speck is-2" />
        <span className="hero-speck is-3" />
        <span className="hero-speck is-4" />
        <span className="hero-speck is-5" />
        <span className="hero-speck is-6" />
        <span className="hero-speck is-7" />
        <span className="hero-speck is-8" />
        <span className="hero-orbit" />
        <span className="hero-orbit is-low" />
        <span className="hero-scan" />
        <span className="hero-tick is-tl" />
        <span className="hero-tick is-tr" />
      </div>

      <div className="wrap hero-inner">
        <span className="hero-roles hero-item" style={{ "--d": "0.08s" }}>
          UI/UX Designer
          <span className="hero-roles-divider" aria-hidden="true" />
          Website Developer
        </span>
        <h1 className="hero-title hero-item" style={{ "--d": "0.18s" }}>
          <span className="hero-title-desktop">
            <span className="hero-title-line">
              I <span className="hero-accent">design</span> and
            </span>
            <span className="hero-title-line">
              <span className="hero-accent hero-accent-build">build</span> interfaces.
            </span>
          </span>
          <span className="hero-title-mobile">
            <span className="hero-title-line">
              I <span className="hero-accent">design</span>
            </span>
            <span className="hero-title-line">
              and <span className="hero-accent hero-accent-build">build</span>
            </span>
            <span className="hero-title-line">interfaces.</span>
          </span>
        </h1>
        <p className="hero-sub hero-item" style={{ "--d": "0.3s" }}>
          From research and wireframes in Figma to building the website and bringing
          the designs to life.
        </p>
        <div className="hero-cta hero-item" style={{ "--d": "0.4s" }}>
          <a
            className="btn btn-solid"
            href="#projects"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("projects");
              window.history.replaceState(null, "", "#projects");
            }}
          >
            View projects
          </a>
          <a className="btn btn-ghost" href="#contact">Get in touch</a>
        </div>
      </div>
    </header>
  );
}
