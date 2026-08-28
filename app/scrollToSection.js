export function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;

  const styles = getComputedStyle(document.documentElement);
  const navH = Number.parseFloat(styles.getPropertyValue("--nav-h")) || 80;
  const y = target.getBoundingClientRect().top + window.scrollY - navH - 12;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.scrollTo({
    top: Math.max(0, y),
    behavior: reduce ? "auto" : "smooth",
  });
}
