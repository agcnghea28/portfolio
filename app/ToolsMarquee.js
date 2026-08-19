import ToolIcon from "./ToolIcon";
import { toolsRowLeft, toolsRowRight } from "./tools";

function ToolPills({ tools, duplicate = false }) {
  return tools.map((tool) => (
    <a
      key={`${tool.name}${duplicate ? "-dup" : ""}`}
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

export default function ToolsMarquee() {
  return (
    <div className="tool-marquee-wrap">
      <MarqueeRow tools={toolsRowLeft} direction="left" />
      <MarqueeRow tools={toolsRowRight} direction="right" />
    </div>
  );
}
