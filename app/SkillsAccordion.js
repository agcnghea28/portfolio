"use client";

import { useState } from "react";
import SkillIcon from "./SkillIcon";
import { skills } from "./skills";

export default function SkillsAccordion() {
  const [activeId, setActiveId] = useState(skills[0]?.id ?? null);
  const active = skills.find((skill) => skill.id === activeId) ?? skills[0];

  function activate(id) {
    setActiveId(id);
  }

  function onNavKeyDown(event) {
    const index = skills.findIndex((skill) => skill.id === activeId);
    if (index < 0) return;

    let next = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      next = (index + 1) % skills.length;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      next = (index - 1 + skills.length) % skills.length;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = skills.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    const nextId = skills[next].id;
    setActiveId(nextId);
    requestAnimationFrame(() => {
      document.getElementById(`skill-tab-${nextId}`)?.focus();
    });
  }

  return (
    <div className="skill-stage">
      <div
        className="skill-nav"
        role="tablist"
        aria-label="Skills"
        aria-orientation="vertical"
        onKeyDown={onNavKeyDown}
      >
        {skills.map((skill) => {
          const isActive = skill.id === activeId;

          return (
            <button
              key={skill.id}
              type="button"
              role="tab"
              id={`skill-tab-${skill.id}`}
              className={`skill-nav-item${isActive ? " is-active" : ""}`}
              aria-selected={isActive}
              aria-controls="skill-panel"
              tabIndex={isActive ? 0 : -1}
              onMouseEnter={() => activate(skill.id)}
              onFocus={() => activate(skill.id)}
              onClick={() => activate(skill.id)}
            >
              <span className="skill-index">({skill.number})</span>
              <span className="skill-title">{skill.title}</span>
            </button>
          );
        })}
      </div>

      {active && (
        <div
          className="skill-board"
          id="skill-panel"
          role="tabpanel"
          aria-labelledby={`skill-tab-${active.id}`}
          key={active.id}
        >
          <div className="skill-board-icon" aria-hidden="true">
            <SkillIcon id={active.id} />
          </div>
          <h3 className="skill-board-title">{active.title}</h3>
          <p className="skill-summary">{active.summary}</p>
          <ul className="skill-practice">
            {active.practice.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <div className="skill-chips" aria-label={`Tools used for ${active.title}`}>
            {active.tools.map((tool) => (
              <span key={tool} className="skill-chip">
                {tool}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
