"use client";

import { useState } from "react";
import { processSteps } from "./process";

function StepVisual({ number }) {
  return (
    <div className="process-visual" aria-hidden="true">
      <span className="process-visual-mark">{number}</span>
    </div>
  );
}

export default function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = processSteps[activeIndex] ?? processSteps[0];
  const progress =
    processSteps.length > 1 ? (activeIndex / (processSteps.length - 1)) * 100 : 0;

  function goTo(index) {
    setActiveIndex(index);
  }

  function onTrackKeyDown(event) {
    let next = activeIndex;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      next = (activeIndex + 1) % processSteps.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = (activeIndex - 1 + processSteps.length) % processSteps.length;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = processSteps.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActiveIndex(next);
    requestAnimationFrame(() => {
      document.getElementById(`process-step-${processSteps[next].id}`)?.focus();
    });
  }

  return (
    <div className="process">
      <p className="process-lede">
        Placeholder — a short note on how a project typically moves from first
        conversation to a live site. Steps can be added or rewritten later.
      </p>

      <div className="process-stage" id="process-panel" role="tabpanel" aria-labelledby={`process-step-${active.id}`} key={active.id}>
        <StepVisual number={active.number} />
        <div className="process-copy">
          <span className="process-badge">{active.number}</span>
          <h3 className="process-title">{active.title}</h3>
          <p className="process-desc">{active.desc}</p>
        </div>
      </div>

      <div
        className="process-track"
        role="tablist"
        aria-label="Design process steps"
        onKeyDown={onTrackKeyDown}
      >
        <span className="process-track-line" aria-hidden="true" />
        <span
          className="process-track-progress"
          aria-hidden="true"
          style={{ width: `${progress}%` }}
        />
        {processSteps.map((step, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={step.id}
              id={`process-step-${step.id}`}
              type="button"
              role="tab"
              className={`process-dot${isActive ? " is-active" : ""}`}
              aria-selected={isActive}
              aria-controls="process-panel"
              tabIndex={isActive ? 0 : -1}
              onMouseEnter={() => goTo(index)}
              onFocus={() => goTo(index)}
              onClick={() => goTo(index)}
            >
              {step.number}
            </button>
          );
        })}
      </div>
    </div>
  );
}
