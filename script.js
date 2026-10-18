// Projects are written directly in index.html, so they show up even
// without an internet connection. This file only adds small enhancements.

document.documentElement.classList.add("js");

const root = document.documentElement;
const menuToggle = document.getElementById("menu-toggle");
const siteNav = document.getElementById("site-nav");
const themeToggle = document.getElementById("theme-toggle");
const yearEl = document.getElementById("year");

if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---------- Mobile menu ---------- */
function closeMenu() {
  siteNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "Menu";
}

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "Close" : "Menu";
});
siteNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

/* ---------- Light / dark theme ---------- */
function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", theme === "dark" ? "#0f0f0f" : "#f6f5f1");
}

let savedTheme = null;
try { savedTheme = localStorage.getItem("theme"); } catch (e) { /* storage unavailable */ }
const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

themeToggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  try { localStorage.setItem("theme", next); } catch (e) { /* ignore */ }
});

/* ---------- Project filters ---------- */
const filterButtons = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll("#project-grid .project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((b) => b.classList.toggle("is-active", b === button));
    projectCards.forEach((card) => {
      const cats = (card.dataset.cat || "").split(" ");
      card.hidden = !(filter === "all" || cats.includes(filter));
    });
  });
});

/* ---------- Reveal on scroll ---------- */
const revealTargets = document.querySelectorAll(
  ".feature-card, .project-card, .cert-item, .research-item, .intro-content, .stats > div"
);
revealTargets.forEach((el) => el.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add("in"));
}
