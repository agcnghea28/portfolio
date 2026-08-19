"use client";

import { useState } from "react";

const badges = {
  Photoshop: { bg: "#31A8FF", letters: "Ps" },
  Illustrator: { bg: "#FF9A00", letters: "Ai" },
  Firefly: { bg: "#FF3366", letters: "Ff" },
  Canva: { bg: "#00C4CC", letters: "Ca" },
  ChatGPT: { bg: "#10A37F", letters: "GPT", size: "11px" },
  Balsamiq: { bg: "#C8E000", letters: "Bq", color: "#17141f" },
  Visily: { bg: "#6D4FC4", letters: "Vi" },
  Composio: { bg: "#17141F", letters: "Co" },
  Divi: { bg: "#5A2D82", letters: "Dv" },
  Midjourney: { bg: "#17141F", letters: "Mj" },
  Office: { bg: "#D83B01", letters: "365", size: "11px" },
  Loop: { bg: "#0078D4", letters: "Lp" },
  Claude: { bg: "#D97757", letters: "Cl" },
};

function Badge({ name }) {
  const badge = badges[name];
  if (!badge) return null;

  return (
    <span
      className="tool-badge"
      style={{
        background: badge.bg,
        color: badge.color || "#fff",
        fontSize: badge.size || "13px",
      }}
      aria-hidden="true"
    >
      {badge.letters}
    </span>
  );
}

function ToolImage({ src, onError }) {
  return (
    <img
      className="tool-pill-icon-img"
      src={src}
      alt=""
      width={36}
      height={36}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={onError}
    />
  );
}

export default function ToolIcon({ slug, name, href }) {
  const [source, setSource] = useState(() => {
    if (badges[name]) return "badge";
    if (slug) return "cdn";
    return "favicon";
  });
  const [cdnIndex, setCdnIndex] = useState(0);

  const cdnUrls = slug
    ? [
        `https://cdn.simpleicons.org/${slug}`,
        `https://cdn.jsdelivr.net/npm/simple-icons@14/icons/${slug}.svg`,
      ]
    : [];

  if (source === "badge") {
    return <Badge name={name} />;
  }

  if (source === "cdn" && cdnUrls[cdnIndex]) {
    return (
      <ToolImage
        src={cdnUrls[cdnIndex]}
        onError={() => {
          if (cdnIndex + 1 < cdnUrls.length) {
            setCdnIndex((index) => index + 1);
            return;
          }
          if (badges[name]) {
            setSource("badge");
            return;
          }
          setSource("favicon");
        }}
      />
    );
  }

  if (source === "favicon" && href) {
    let domain = "";
    try {
      domain = new URL(href).hostname;
    } catch {
      domain = "";
    }

    if (domain) {
      return (
        <ToolImage
          src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
          onError={() => setSource("mono")}
        />
      );
    }
  }

  return (
    <span className="tool-monogram" aria-hidden="true">
      {name.charAt(0)}
    </span>
  );
}
