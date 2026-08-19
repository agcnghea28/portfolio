"use client";

import { useEffect, useRef } from "react";

export default function PageAtmosphere() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const canvas = node.closest(".page");
    if (!canvas) return;

    const onMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
        node.classList.remove("is-lit");
        return;
      }

      node.classList.add("is-lit");
      node.style.setProperty("--mx", `${x}px`);
      node.style.setProperty("--my", `${y}px`);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="page-atmosphere" ref={ref} aria-hidden="true">
      <span className="page-gradient" />
      <span className="page-orb page-orb-a" />
      <span className="page-orb page-orb-b" />
      <span className="page-orb page-orb-c" />
      <span className="page-glow" />
      <span className="page-grid" />
    </div>
  );
}
