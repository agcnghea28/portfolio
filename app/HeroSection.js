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
      node.style.setProperty("--hx", `${(x * 32).toFixed(1)}px`);
      node.style.setProperty("--hy", `${(y * 20).toFixed(1)}px`);
      node.style.setProperty("--ha", `${(x * 12).toFixed(2)}deg`);
    };

    const onLeave = () => {
      node.style.setProperty("--hx", "0px");
      node.style.setProperty("--hy", "0px");
      node.style.setProperty("--ha", "0deg");
    };

    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", onLeave);
    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <header className="hero" ref={ref}>
      <div className="hero-burst" aria-hidden="true" />
      <p className="hero-mark" aria-hidden="true">
        Ghea
      </p>

      <div className="wrap hero-inner">
        <span className="tag hero-item" style={{ "--d": "0.08s" }}>
          UI/UX Designer · Website Developer
        </span>
        <h1 className="hero-title hero-item" style={{ "--d": "0.18s" }}>
          I design and build
          <br />
          interfaces.
        </h1>
        <p className="hero-sub hero-item" style={{ "--d": "0.3s" }}>
          From research and wireframes in Figma to shipped, working websites —
          moving between the design tool and the code editor.
        </p>
        <div className="hero-cta hero-item" style={{ "--d": "0.4s" }}>
          <a className="btn btn-solid" href="#projects">View projects</a>
          <a className="btn btn-ghost" href="#contact">Get in touch</a>
        </div>
      </div>
    </header>
  );
}
