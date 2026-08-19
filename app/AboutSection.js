"use client";

import { useEffect, useRef, useState } from "react";
import { about } from "./about";
import ProfileCard from "./ProfileCard";

export default function AboutSection() {
  const [activeId, setActiveId] = useState(about.approach.items[0]?.id ?? null);
  const stageRef = useRef(null);
  const active =
    about.approach.items.find((item) => item.id === activeId) ??
    about.approach.items[0];

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    const onMove = (event) => {
      const rect = stage.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      stage.style.setProperty("--about-tilt-x", `${(x * 14).toFixed(2)}px`);
      stage.style.setProperty("--about-tilt-y", `${(y * 10).toFixed(2)}px`);
      stage.style.setProperty("--about-photo-x", `${(x * 8).toFixed(2)}px`);
      stage.style.setProperty("--about-photo-y", `${(y * 6).toFixed(2)}px`);
    };

    const onLeave = () => {
      stage.style.setProperty("--about-tilt-x", "0px");
      stage.style.setProperty("--about-tilt-y", "0px");
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
      <div className="about-heading">
        <span className="tag">01</span>
        <h2 className="about-title">About ME</h2>
      </div>

      <div className="about-grid">
        <p className="about-backdrop" aria-hidden="true">
          About ME
        </p>
        <article className="about-copy about-copy-left">
          <div className="about-block">
            <h3>{about.who.title}</h3>
            <p>{about.who.body}</p>
          </div>
        </article>

        <div className="about-visual">
          <ProfileCard />
        </div>

        <article className="about-copy about-copy-right">
          <div className="about-block">
            <h3>{about.approach.title}</h3>
            <div className="about-pills" role="group" aria-label="Approach ideas">
              {about.approach.items.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`about-pill${isActive ? " is-active" : ""}`}
                    aria-pressed={isActive}
                    onMouseEnter={() => setActiveId(item.id)}
                    onFocus={() => setActiveId(item.id)}
                    onClick={() => setActiveId(item.id)}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
            {active && (
              <p className="about-approach-body" key={active.id}>
                {active.body}
              </p>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
