import { recommend } from "./createListModule.js";
import { menu } from "./ramenData.js";

const navbar = document.getElementById('nav-bar')
const navLeft = navbar.querySelector(".nav-left")
const navRight = document.getElementById("menu")
const footerNav = document.querySelector(".nav-footer")
const seeMore = document.getElementById("see-more-button")
const orderNow = document.querySelector(".order-now-button")
const mobileNav = document.getElementById("menu-mobile")
const viewMoreOn = document.querySelector(".aboutus-viewmore")

let checked = false;
const burger = document.getElementById("burger-icon")
burger.addEventListener("click", () => {
    let checked = mobileNav.style.display === "flex";
    mobileNav.style.display = checked ? "none" : "flex";
})

const navigateMenu = () => {
    window.history.pushState({}, '', 'Eramen.html')
    window.location.href = 'menu.html';
}

const sticky = () => {
    navbar.classList.toggle("sticky", window.scrollY > 96);
    navLeft.classList.toggle("sticky", window.scrollY > 96);
    navRight.classList.toggle("sticky", window.scrollY > 96);
    mobileNav.classList.toggle("sticky", window.scrollY > 96);
    if (checked == true && window.scrollY < 96) {
        mobileNav.style.display = "none";
        checked = false;
    }
}

window.addEventListener("scroll", sticky);

seeMore.addEventListener('click', navigateMenu);
orderNow.addEventListener('click', navigateMenu);

export const navigationsHandler = e => {
    if (e.target.tagName === 'LI' || e.target.tagName === 'BUTTON') {
        const button = e.target.textContent;
        window.history.pushState({}, '', 'Eramen.html');
        switch (button) {
            case 'Menu' || 'See More Menu':
                window.location.href = 'menu.html';
                break
            case 'About Us':
                window.location.href = 'aboutUs.html';
                break
            case 'Promotions':
                window.location.href = 'promotions.html'
                break
            case 'Contact Us':
                window.location.href = 'contactUs.html'
                break
        }
    }
}

navRight.addEventListener('click', navigationsHandler);
footerNav.addEventListener('click', navigationsHandler);
mobileNav.addEventListener('click', navigationsHandler);

viewMoreOn.addEventListener("click", () => {
    window.history.pushState({}, '', 'Eramen.html')
    window.location.href = 'aboutUs.html'
})

const recommendations = menu.slice(0,3)
recommend(recommendations);