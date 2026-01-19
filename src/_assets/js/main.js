// Main site JS (theme + hover dropdowns)
(function() {
  // ===== Theme switcher =====
  const root = document.documentElement;
  const btn = document.getElementById("themeSwitcher");
  const icon = document.getElementById("themeIcon");

  function applyTheme(theme) {
    root.setAttribute("data-bs-theme", theme);
    if (icon) {
      icon.classList.remove("bi-sun-fill", "bi-moon-fill");
      icon.classList.add(theme === "light" ? "bi-moon-fill" : "bi-sun-fill");
    }
  }

  function getStoredTheme() {
    try { return localStorage.getItem("theme"); } catch (e) { return null; }
  }
  function setStoredTheme(theme) {
    try { localStorage.setItem("theme", theme); } catch (e) {}
  }

  // initial
  const initial = getStoredTheme() || root.getAttribute("data-bs-theme") || "light";
  applyTheme(initial);

  if (btn) {
    btn.addEventListener("click", () => {
      const current = root.getAttribute("data-bs-theme") || "light";
      const next = current === "light" ? "dark" : "light";
      applyTheme(next);
      setStoredTheme(next);
    });
  }

  // ===== Desktop hover dropdowns with a small delay =====
  // (keeps UX stable; on touch devices Bootstrap click behaviour remains)
  const dropdownItems = document.querySelectorAll(".nav-item.dropdown");
  dropdownItems.forEach((item) => {
    let timer;
    const menu = item.querySelector(".dropdown-menu");

    item.addEventListener("mouseenter", () => {
      if (!menu) return;
      if (window.matchMedia("(max-width: 991.98px)").matches) return;
      clearTimeout(timer);
      menu.classList.add("show");
      menu.style.opacity = "1";
      menu.style.transform = "translateY(0) scale(1)";
      menu.style.pointerEvents = "auto";
    });

    item.addEventListener("mouseleave", () => {
      if (!menu) return;
      if (window.matchMedia("(max-width: 991.98px)").matches) return;
      timer = setTimeout(() => {
        menu.classList.remove("show");
        menu.style.opacity = "";
        menu.style.transform = "";
        menu.style.pointerEvents = "";
      }, 160);
    });
  });
})();


(() => {
  function getMegaData(root, id) {
    const script = root.querySelector(`.mega-data[data-mega-json="${id}"]`);
    if (!script) return [];
    try { return JSON.parse(script.textContent); } catch { return []; }
  }

  function setPreview(menu, item) {
    const img = menu.querySelector('.mega-preview-img');
    const title = menu.querySelector('.mega-preview-title');
    const desc = menu.querySelector('.mega-preview-desc');
    const links = menu.querySelector('.mega-preview-links');

    if (img) { img.src = item.image || ''; img.alt = item.label || ''; }
    if (title) title.textContent = item.label || '';
    if (desc) desc.textContent = item.desc || '';

    if (links) {
      links.innerHTML = '';
      (item.links || []).slice(0, 5).forEach(l => {
        const li = document.createElement('li');
        li.className = 'mb-2';
        li.innerHTML = `<a class="link-primary text-decoration-none" href="${l.url}">${l.label}</a>`;
        links.appendChild(li);
      });
    }
  }

  function initDropdown(dropdown) {
    const menu = dropdown.querySelector('.dropdown-menu.mega-menu');
    if (!menu) return;
    const id = dropdown.querySelector('.mega-item')?.getAttribute('data-mega');
    if (!id) return;

    const items = getMegaData(menu, id);
    const buttons = menu.querySelectorAll('.mega-item');
    if (!items.length || !buttons.length) return;

    const preferHover = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
    const toggle = dropdown.querySelector('[data-bs-toggle="dropdown"]');

    function activate(btn) {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const key = btn.dataset.key;
      const item = items.find(x => x.key === key) || items[0];
      setPreview(menu, item);
    }

    if (toggle) {
      toggle.addEventListener('shown.bs.dropdown', () => {
        const active = menu.querySelector('.mega-item.active') || buttons[0];
        activate(active);
      });
    }

    buttons.forEach(btn => {
      btn.addEventListener('click', () => activate(btn));
      if (preferHover) btn.addEventListener('mouseenter', () => activate(btn));
    });
  }

  document.querySelectorAll('.mega-dropdown').forEach(initDropdown);
})();
