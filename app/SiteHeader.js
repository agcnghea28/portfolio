"use client";

import { useEffect, useState } from "react";
import { scrollToSection } from "./scrollToSection";

const links = [
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#projects", label: "Projects" },
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
    document.body.classList.toggle("is-nav-open", open);
    return () => document.body.classList.remove("is-nav-open");
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 1101px)").matches) setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return undefined;

    const frame = window.requestAnimationFrame(() => scrollToSection(id));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const navClass = `nav${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`;

  function onSectionLink(event, href) {
    const id = href.startsWith("#") ? href.slice(1) : "";
    if (!id || !document.getElementById(id)) return;

    event.preventDefault();
    setOpen(false);
    scrollToSection(id);
    window.history.replaceState(null, "", href);
  }

  return (
    <nav className={navClass} aria-label="Primary">
      <div className="wrap nav-inner">
        <a
          className="nav-brand"
          href="#home"
          onClick={(event) => onSectionLink(event, "#home")}
        >
          GHEA.
        </a>

        <ul className="nav-links" id="site-nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(event) => onSectionLink(event, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-end">
          <button
            className={`nav-toggle${open ? " is-open" : ""}`}
            type="button"
            aria-expanded={open}
            aria-controls="site-nav-links"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>
          <a
            className="nav-cv"
            href="https://canva.link/agcang-cv"
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
