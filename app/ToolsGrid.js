"use client";

import { useMemo, useState } from "react";
import ToolIcon from "./ToolIcon";
import { toolCategories, tools } from "./tools";

function fillRow(row) {
  if (row.length === 0) return row;
  const filled = [...row];
  while (filled.length < 8) {
    filled.push(...row);
  }
  return filled;
}

function splitRows(list, category) {
  if (category === "All") {
    return [
      fillRow(list.filter((tool) => tool.category === "Design" || tool.category === "AI & Automation")),
      fillRow(list.filter((tool) => tool.category === "Development" || tool.category === "Workflow & Ops")),
    ];
  }

  if (list.length <= 3) {
    const filled = fillRow(list);
    return [filled, filled];
  }

  const mid = Math.ceil(list.length / 2);
  return [fillRow(list.slice(0, mid)), fillRow(list.slice(mid))];
}

function ToolPills({ tools, duplicate = false }) {
  return tools.map((tool, i) => (
    <a
      key={`${tool.name}-${i}${duplicate ? "-dup" : ""}`}
      className="tool-pill"
      href={tool.href}
      target="_blank"
      rel="noreferrer"
      aria-label={duplicate ? undefined : `${tool.name} website`}
      tabIndex={duplicate ? -1 : undefined}
    >
      <span className="tool-pill-icon">
        <ToolIcon slug={tool.slug} name={tool.name} href={tool.href} />
      </span>
      <h3>{tool.name}</h3>
    </a>
  ));
}

function MarqueeRow({ tools, direction }) {
  return (
    <div className={`tool-marquee tool-marquee-${direction}`}>
      <div className="tool-track">
        <div className="tool-group">
          <ToolPills tools={tools} />
        </div>
        <div className="tool-group" aria-hidden="true">
          <ToolPills tools={tools} duplicate />
        </div>
      </div>
    </div>
  );
}

export default function ToolsGrid() {
  const [active, setActive] = useState("All");

  const visible = useMemo(
    () => (active === "All" ? tools : tools.filter((tool) => tool.category === active)),
    [active]
  );

  const [rowLeft, rowRight] = useMemo(
    () => splitRows(visible, active),
    [visible, active]
  );

  return (
    <>
      <div className="wrap">
        <div className="tool-filters" role="tablist" aria-label="Tool categories">
          {toolCategories.map((category) => {
            const isActive = category === active;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                className={`tool-filter${isActive ? " is-active" : ""}`}
                aria-selected={isActive}
                onClick={() => setActive(category)}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className="tool-marquee-wrap" key={active}>
        <MarqueeRow tools={rowLeft} direction="left" />
        <MarqueeRow tools={rowRight} direction="right" />
      </div>
    </>
  );
}
