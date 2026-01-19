    import "bootstrap/dist/js/bootstrap.bundle.min.js";
    import "bootstrap-icons/font/bootstrap-icons.css";
    import "./styles.scss";
    import './menu.js';


    // ===== Legacy inline scripts migrated from base.html =====
    const switcher = document.getElementById("themeSwitcher");
    const themeIcon = document.getElementById("themeIcon");
    const root = document.documentElement;

    let savedTheme = localStorage.getItem("theme") || "dark";
    root.setAttribute("data-bs-theme", savedTheme);
    updateIcon(savedTheme);

    switcher.addEventListener("click", () => {
        let current = root.getAttribute("data-bs-theme");
        let next = current === "dark" ? "light" : "dark";

        root.setAttribute("data-bs-theme", next);
        localStorage.setItem("theme", next);
        updateIcon(next);
    });

    function updateIcon(theme) {
        if (theme === "light") {
            themeIcon.className = "bi bi-sun-fill";
        } else {
            themeIcon.className = "bi bi-moon-fill";
        }
    }

document.querySelectorAll('.nav-item.dropdown').forEach(function (item) {

    let timer;

    item.addEventListener('mouseenter', () => {
        clearTimeout(timer);
        const menu = item.querySelector('.dropdown-menu');
        if (menu) {
            menu.classList.add('show');
            menu.style.opacity = "1";
            menu.style.transform = "translateY(0)";
            menu.style.pointerEvents = "auto";
        }
    });

    item.addEventListener('mouseleave', () => {
        const menu = item.querySelector('.dropdown-menu');
        if (menu) {
            timer = setTimeout(() => {
                menu.classList.remove('show');
                menu.style.opacity = "0";
                menu.style.transform = "translateY(8px)";
                menu.style.pointerEvents = "none";
            }, 180); // ← достаточно чтобы пользователь успел дойти
        }
    });

    // Если мышь заходит назад в меню — не закрываем
    const menu = item.querySelector('.dropdown-menu');
    if (menu) {
        menu.addEventListener('mouseenter', () => {
            clearTimeout(timer);
        });
        menu.addEventListener('mouseleave', () => {
            timer = setTimeout(() => {
                menu.classList.remove('show');
                menu.style.opacity = "0";
                menu.style.transform = "translateY(8px)";
                menu.style.pointerEvents = "none";
            }, 180);
        });
    }

});
