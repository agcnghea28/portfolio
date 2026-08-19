"use client";

import { useEffect, useId, useRef, useState } from "react";
import Reveal from "./Reveal";
import { PROJECTS_PAGE_SIZE, projects } from "./projects";

function ChevronIcon({ direction }) {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
      <path
        d={direction === "up" ? "M3.5 10.25 8 5.75l4.5 4.5" : "M3.5 5.75 8 10.25l4.5-4.5"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProjectsSection() {
  const dialogId = useId();
  const closeRef = useRef(null);
  const lastFocusRef = useRef(null);
  const sectionRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(
    Math.min(PROJECTS_PAGE_SIZE, projects.length)
  );
  const [activeId, setActiveId] = useState(null);
  const [shotIndex, setShotIndex] = useState(0);

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;
  const canCollapse = visibleCount > PROJECTS_PAGE_SIZE;
  const activeIndex = projects.findIndex((project) => project.id === activeId);
  const active = activeIndex >= 0 ? projects[activeIndex] : null;
  const shots = active?.screenshots?.length ? active.screenshots : [];

  function openProject(id, event) {
    lastFocusRef.current = event?.currentTarget ?? document.activeElement;
    setShotIndex(0);
    setActiveId(id);
  }

  function closeProject() {
    setActiveId(null);
    setShotIndex(0);
  }

  function showPrev() {
    if (!active) return;
    const next = (activeIndex - 1 + projects.length) % projects.length;
    setShotIndex(0);
    setActiveId(projects[next].id);
  }

  function showNext() {
    if (!active) return;
    const next = (activeIndex + 1) % projects.length;
    setShotIndex(0);
    setActiveId(projects[next].id);
  }

  function revealMore() {
    setVisibleCount((count) => Math.min(count + PROJECTS_PAGE_SIZE, projects.length));
  }

  function collapseList() {
    if (activeIndex >= PROJECTS_PAGE_SIZE) closeProject();
    setVisibleCount(Math.min(PROJECTS_PAGE_SIZE, projects.length));

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    sectionRef.current?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
  }

  useEffect(() => {
    if (!activeId) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function step(direction) {
      setShotIndex(0);
      setActiveId((current) => {
        const index = projects.findIndex((project) => project.id === current);
        if (index < 0) return current;
        const next = (index + direction + projects.length) % projects.length;
        return projects[next].id;
      });
    }

    function onKey(event) {
      if (event.key === "Escape") {
        setActiveId(null);
        setShotIndex(0);
      }
      if (event.key === "ArrowLeft") step(-1);
      if (event.key === "ArrowRight") step(1);
    }

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      lastFocusRef.current?.focus?.();
    };
  }, [activeId]);

  return (
    <div ref={sectionRef}>
      <div className="project-grid">
        {visibleProjects.map((project, index) => {
          const appended = index >= PROJECTS_PAGE_SIZE;
          const Card = (
            <button
              type="button"
              className="project-card"
              style={{
                "--folder-accent": project.accent,
                "--peek-rot": index % 2 === 0 ? "-1.5deg" : "1.4deg",
              }}
              onClick={(event) => openProject(project.id, event)}
              aria-haspopup="dialog"
            >
              <span className="project-folder-tab">
                {project.shared ? (
                  <span className="project-card-badge">Shared</span>
                ) : null}
              </span>
              <span className="project-folder-body">
                <span className="project-folder-peek">
                  <span
                    className="project-card-media"
                    style={{
                      backgroundColor: project.accent,
                      backgroundImage: project.cover ? `url(${project.cover})` : "none",
                    }}
                  />
                </span>
                <span className="project-folder-flap">
                  <span className="project-card-copy">
                    <span className="project-card-title">{project.title}</span>
                    <span className="project-client-pill">{project.client}</span>
                  </span>
                </span>
              </span>
            </button>
          );

          if (appended) {
            return (
              <div
                key={project.id}
                className="project-card-wrap is-appended"
                style={{ animationDelay: `${(index % PROJECTS_PAGE_SIZE) * 70}ms` }}
              >
                {Card}
              </div>
            );
          }

          return (
            <Reveal
              key={project.id}
              className="project-card-wrap"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              {Card}
            </Reveal>
          );
        })}
      </div>

      {hasMore || canCollapse ? (
        <div className="project-more">
          <button
            type="button"
            className="btn btn-ghost project-more-btn"
            aria-expanded={canCollapse}
            onClick={hasMore ? revealMore : collapseList}
          >
            {hasMore ? "Show more" : "Show less"}
            <ChevronIcon direction={hasMore ? "down" : "up"} />
          </button>
        </div>
      ) : null}

      {active ? (
        <div
          className="project-modal-root"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeProject();
          }}
        >
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogId}
          >
            <button
              ref={closeRef}
              type="button"
              className="project-modal-close"
              onClick={closeProject}
              aria-label="Close project details"
            >
              Close
            </button>

            <div className="project-modal-gallery">
              {shots[shotIndex] ? (
                <img
                  src={shots[shotIndex].src}
                  alt={shots[shotIndex].alt}
                  className="project-modal-shot"
                />
              ) : (
                <div
                  className="project-modal-shot is-empty"
                  style={{ background: active.accent }}
                >
                  Placeholder screenshot
                </div>
              )}
              {shots.length > 1 ? (
                <div className="project-modal-thumbs" role="tablist" aria-label="Screenshots">
                  {shots.map((shot, index) => (
                    <button
                      key={`${shot.src}-${index}`}
                      type="button"
                      className={`project-modal-thumb${index === shotIndex ? " is-active" : ""}`}
                      aria-label={`Show screenshot ${index + 1}`}
                      onClick={() => setShotIndex(index)}
                    >
                      <img src={shot.src} alt="" />
                    </button>
                  ))}
                </div>
              ) : (
                <p className="project-modal-note">Placeholder screenshot — add more in projects.js</p>
              )}
            </div>

            <div className="project-modal-body">
              <div className="project-modal-kicker">
                <span className="tag">{String(activeIndex + 1).padStart(2, "0")}</span>
                {active.shared ? <span className="tag">Shared project</span> : null}
                {active.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <h3 id={dialogId} className="project-modal-title">
                {active.title}
              </h3>
              <p className="project-modal-client">{active.client}</p>
              <p className="project-modal-summary">{active.summary}</p>

              <div className="project-modal-meta">
                <div>
                  <p className="project-modal-label">Tools used</p>
                  <ul className="project-modal-tools">
                    {active.tools.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="project-modal-label">Client / company</p>
                  <p className="project-modal-value">{active.client}</p>
                </div>
              </div>

              <div className="project-modal-actions">
                {active.figmaUrl ? (
                  <a
                    className="btn btn-solid"
                    href={active.figmaUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open in Figma
                  </a>
                ) : (
                  <span className="btn btn-ghost is-disabled" aria-disabled="true">
                    Figma link · placeholder
                  </span>
                )}
                <div className="project-modal-nav">
                  <button type="button" className="btn btn-ghost" onClick={showPrev}>
                    Previous
                  </button>
                  <button type="button" className="btn btn-ghost" onClick={showNext}>
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
