"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { processLede, processSteps } from "./process";

export default function ProcessSection() {
  const timelineRef = useRef(null);
  const stepRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lineStyle, setLineStyle] = useState({ top: 0, height: 0, progress: 0 });

  const measureTimeline = useCallback(() => {
    const timeline = timelineRef.current;
    const steps = stepRefs.current.filter(Boolean);
    if (!timeline || steps.length === 0) return;

    const timelineRect = timeline.getBoundingClientRect();
    const markerCenter = (marker) => {
      const rect = marker.getBoundingClientRect();
      return rect.top + rect.height / 2 - timelineRect.top;
    };

    const firstMarker = steps[0].querySelector(".process-step-marker");
    const lastMarker = steps[steps.length - 1].querySelector(".process-step-marker");
    const activeMarker = steps[activeIndex]?.querySelector(".process-step-marker");

    if (!firstMarker || !lastMarker || !activeMarker) return;

    const lineTop = markerCenter(firstMarker);
    const lineEnd = markerCenter(lastMarker);
    const activeCenter = markerCenter(activeMarker);
    const lineHeight = Math.max(lineEnd - lineTop, 0);
    const progress = Math.min(Math.max(activeCenter - lineTop, 0), lineHeight);

    setLineStyle({ top: lineTop, height: lineHeight, progress });
  }, [activeIndex]);

  const updateActiveFromScroll = useCallback(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const sectionRect = timeline.getBoundingClientRect();
    if (sectionRect.bottom < window.innerHeight * 0.15 || sectionRect.top > window.innerHeight * 0.85) {
      return;
    }

    const focusLine = window.innerHeight * 0.42;
    let nextIndex = 0;
    let closestDistance = Infinity;

    stepRefs.current.forEach((step, index) => {
      if (!step) return;
      const marker = step.querySelector(".process-step-marker");
      if (!marker) return;
      const rect = marker.getBoundingClientRect();
      const anchor = rect.top + rect.height / 2;
      const distance = Math.abs(anchor - focusLine);
      if (distance < closestDistance) {
        closestDistance = distance;
        nextIndex = index;
      }
    });

    setActiveIndex(nextIndex);
  }, []);

  useEffect(() => {
    measureTimeline();
    updateActiveFromScroll();

    const timeline = timelineRef.current;
    if (!timeline) return undefined;

    const resizeObserver = new ResizeObserver(() => {
      measureTimeline();
      updateActiveFromScroll();
    });

    resizeObserver.observe(timeline);
    window.addEventListener("resize", measureTimeline);
    window.addEventListener("scroll", updateActiveFromScroll, { passive: true });
    window.addEventListener("scroll", measureTimeline, { passive: true });

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measureTimeline);
      window.removeEventListener("scroll", updateActiveFromScroll);
      window.removeEventListener("scroll", measureTimeline);
    };
  }, [measureTimeline, updateActiveFromScroll]);

  function setStepActive(index) {
    setActiveIndex(index);
    requestAnimationFrame(measureTimeline);
  }

  function jumpToStep(index) {
    setStepActive(index);

    const step = stepRefs.current[index];
    if (!step) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    step.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "center",
    });
  }

  return (
    <div className="process">
      <div className="process-layout">
        <div className="process-intro">
          <h2 className="section-title process-heading">Design &amp; development process</h2>
          <p className="process-lede">{processLede}</p>
        </div>

        <div className="process-timeline" ref={timelineRef}>
          <span
            className="process-track-line"
            aria-hidden="true"
            style={{ top: `${lineStyle.top}px`, height: `${lineStyle.height}px` }}
          />
          <span
            className="process-track-progress"
            aria-hidden="true"
            style={{ top: `${lineStyle.top}px`, height: `${lineStyle.progress}px` }}
          />

          <ol className="process-steps">
            {processSteps.map((step, index) => {
              const isActive = activeIndex === index;
              const isOpen = index <= activeIndex;

              return (
                <li
                  key={step.id}
                  id={`process-${step.id}`}
                  ref={(node) => {
                    stepRefs.current[index] = node;
                  }}
                  className={`process-step${isOpen ? " is-open" : ""}${isActive ? " is-active" : ""}`}
                >
                  <div className="process-step-marker" aria-hidden="true">
                    {step.number}
                  </div>

                  <div className="process-step-content">
                    <button
                      type="button"
                      className="process-step-trigger"
                      aria-expanded={isOpen}
                      aria-controls={`process-panel-${step.id}`}
                      onClick={() => jumpToStep(index)}
                      onFocus={() => setStepActive(index)}
                    >
                      <span className="process-step-title">{step.title}</span>
                    </button>

                    <div
                      id={`process-panel-${step.id}`}
                      className="process-step-body"
                      aria-hidden={!isOpen}
                    >
                      <div className="process-step-body-inner">
                        <ul className="process-points">
                          {step.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
