// Background Switcher

const hero = document.getElementById('hero');
const defaultBg = "images/default.jpg";

let bgTimeout;

function changeHero(img) {
    clearTimeout(bgTimeout);
    bgTimeout = setTimeout(() => {
        hero.style.backgroundImage = `url('${img}')`;
    }, 50);
}

function resetHero() {
    clearTimeout(bgTimeout);
    bgTimeout = setTimeout(() => {
        hero.style.backgroundImage = `url('${defaultBg}')`;
    }, 50);
}


// Parallax Effect
// window.addEventListener('scroll', function() {
//         let offset = window.pageYOffset;
//         hero.style.backgroundPositionY = (offset * 0.3) + "px";
// });



// Smooth scrolling to next section
document.querySelector(".scroll-down a").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector("#news-section").scrollIntoView({
        behavior: "smooth"
    });
});



document.querySelector(".scroll-down a").addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector("#news-section");
    const offsetTop = target.offsetTop;

    window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
    });
});


// Reveal on scroll
const revealElements = document.querySelectorAll(".reveal-on-scroll");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
        }
    });
}, { threshold: 0.2 });

revealElements.forEach(el => observer.observe(el));
