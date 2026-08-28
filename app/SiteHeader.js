"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#tools", label: "Tools" },
  { href: "#process", label: "Process" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 901px)").matches) setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const navClass = `nav${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`;

  return (
    <nav className={navClass} aria-label="Primary">
      <div className="wrap nav-inner">
        <a className="nav-brand" href="#home">
          GHEA.
        </a>

        <ul className="nav-links" id="site-nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-end">
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="site-nav-links"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
          <a
            className="nav-cv"
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View My CV
          </a>
        </div>
      </div>
    </nav>
  );
}
