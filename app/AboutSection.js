"use client";

import { useEffect, useRef } from "react";
import { about } from "./about";
import AboutCollage from "./AboutCollage";

export default function AboutSection() {
  const stageRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    const onMove = (event) => {
      const rect = stage.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      stage.style.setProperty("--about-photo-x", `${(x * 8).toFixed(2)}px`);
      stage.style.setProperty("--about-photo-y", `${(y * 6).toFixed(2)}px`);
    };

    const onLeave = () => {
      stage.style.setProperty("--about-photo-x", "0px");
      stage.style.setProperty("--about-photo-y", "0px");
    };

    stage.addEventListener("mousemove", onMove);
    stage.addEventListener("mouseleave", onLeave);
    return () => {
      stage.removeEventListener("mousemove", onMove);
      stage.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="about" ref={stageRef}>
      <div className="about-grid">
        <div className="about-visual">
          <AboutCollage />
        </div>

        <div className="about-content">
          <div className="about-heading">
            <h2 className="about-title">
              <span className="about-title-line">Hello!</span>
              <span className="about-title-line">
                I&apos;m Ghea
                <svg
                  className="about-title-icon"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M12 1.2 13.8 9.4 22 12 13.8 14.6 12 22.8 10.2 14.6 2 12l8.2-2.6L12 1.2Z"
                  />
                </svg>
              </span>
            </h2>
          </div>

          <div className="about-copy">
            <article className="about-block">
              <p>{about.intro}</p>
            </article>

            <hr className="about-divider" />

            <article className="about-block">
              <h3>{about.drives.title}</h3>
              {about.drives.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
