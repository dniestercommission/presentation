// Background Switcher

const hero = document.getElementById('hero');
const defaultBg = "images/default.jpg";

function changeHero(img) {
    hero.style.backgroundImage = `url('${img}')`;
}

function resetHero() {
    hero.style.backgroundImage = `url('${defaultBg}')`;
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
