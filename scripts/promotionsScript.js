import { toggleSticky } from "./stickyNavbarModule.js";
import { promotionData } from "./ramenData.js";
import { generatePromotions } from "./createListModule.js";

window.addEventListener("scroll", toggleSticky);

generatePromotions(promotionData)

const navbar = document.querySelector(".nav-container-right");
const navigate = e => {
    if (e.target.tagName === 'BUTTON') {
        const navButton = e.target.textContent;
        window.history.pushState({}, '', 'promotions.html');
        switch(navButton) {
            case 'Home':
                window.location.href = "Eramen.html";
                break;
            case 'Menu':
                window.location.href = 'menu.html'
                break;
            case 'About Us':
                window.location.href = "aboutUs.html";
                break;
            case 'Contact Us':
                window.location.href = "contactUs.html"
                break
        }
    }
}

const burger = document.getElementById("burger-icon")
const mobileNav = document.querySelector(".nav-mobile")
burger.addEventListener("click", () => {
    let checked = mobileNav.style.display === "flex";
    mobileNav.style.display = checked ? "none" : "flex";
})

navbar.addEventListener("click", navigate);
mobileNav.addEventListener("click", navigate);


