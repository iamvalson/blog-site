(function () {
  const STORAGE_KEY = "theme";
  const root = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");

  function updateHamburgerColor(theme) {
    const hamburgerIcon = document.querySelector('.hamburger i');
    if (hamburgerIcon) {
      hamburgerIcon.style.color = theme === "dark" ? "#fff" : "#222";
    }
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    updateHamburgerColor(theme);
    if (toggleBtn) {
      const icon = toggleBtn.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-moon", theme !== "dark");
        icon.classList.toggle("fa-sun", theme === "dark");
        icon.classList.toggle("fa-regular", theme !== "dark");
        icon.classList.toggle("fa-solid", theme === "dark");
      }
    }
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (_) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (_) {}
  }

  document.addEventListener("DOMContentLoaded", function () {
    const saved = getStoredTheme();
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (prefersDark ? "dark" : "light");
    applyTheme(initial);

    if (toggleBtn) {
      toggleBtn.addEventListener("click", function () {
        const current = root.getAttribute("data-theme") || "light";
        const next = current === "dark" ? "light" : "dark";
        applyTheme(next);
        setStoredTheme(next);
      });
    }
  });

  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
  });
})();

