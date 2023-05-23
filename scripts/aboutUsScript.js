import { toggleSticky } from "./stickyNavbarModule.js";

window.addEventListener("scroll", toggleSticky);

const navigate = e => {
    console.log("Hello")
    if (e.target.tagName === 'BUTTON') {
        const navButton = e.target.textContent;
        window.history.pushState({}, '', 'aboutUs.html');
        switch(navButton) {
            case 'Home':
                window.location.href = "Eramen.html";
                break;
            case 'Menu':
                window.location.href = "menu.html";
                break;
            case 'Contact Us':
                window.location.href = "contactUs.html"
        }
    }
}

const navbar = document.querySelector(".nav-container-right")
const mobileNav = document.querySelector(".nav-mobile")
mobileNav.addEventListener("click", navigate);
navbar.addEventListener("click", navigate);

const burger = document.querySelector(".burger-icon")
burger.addEventListener("click", () => {
    console.log("check")
    let checked = mobileNav.style.display === "flex";
    mobileNav.style.display = checked ? "none" : "flex";
})

