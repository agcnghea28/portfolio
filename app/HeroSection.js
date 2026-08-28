"use client";

import { useEffect, useRef } from "react";

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
        <span className="hero-glow hero-glow-b" />
        <span className="hero-join" />
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
              <span className="hero-accent">build</span> interfaces.
            </span>
          </span>
          <span className="hero-title-mobile">
            <span className="hero-title-line">
              I <span className="hero-accent">design</span>
            </span>
            <span className="hero-title-line">
              and <span className="hero-accent">build</span>
            </span>
            <span className="hero-title-line">interfaces.</span>
          </span>
        </h1>
        <p className="hero-sub hero-item" style={{ "--d": "0.3s" }}>
          From research and wireframes in Figma to building the website and bringing
          the designs to life.
        </p>
        <div className="hero-cta hero-item" style={{ "--d": "0.4s" }}>
          <a className="btn btn-solid" href="#projects">View projects</a>
          <a className="btn btn-ghost" href="#contact">Get in touch</a>
        </div>
      </div>
    </header>
  );
}
