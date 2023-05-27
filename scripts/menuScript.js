import { generateMenu } from "./createListModule.js";
import { menu } from "./ramenData.js";
import { toggleSticky } from "./stickyNavbarModule.js";

window.addEventListener("scroll", toggleSticky);
// menu.sort((a, b) => {
//     if (a.price < b.price) {
//         return 1;
//     }
//     else return -1;
// })
generateMenu(menu);

const form = document.getElementById("form");
const searchBar = document.getElementById("search-bar");
const cards = document.querySelectorAll(".point");
const result = document.getElementById("result");
const searchContainer = document.querySelector(".search-container");
const noramen = document.querySelector(".noramen");

// searchBar.addEventListener("input", e => {
//     const query = e.target.value;
//     Array.from(cards).forEach(card => {
//         const name = card.querySelector(".ramen-name").textContent.toLowerCase();
//         const type = card.querySelector(".ramen-type").textContent.toLowerCase();
//         const visible = name.includes(query) || type.includes(query);
//         card.classList.toggle("hide", !visible);
//     });
// })

const burger = document.getElementById("burger-icon")
const mobileNav = document.querySelector(".nav-mobile")
burger.addEventListener("click", () => {
    let checked = mobileNav.style.display === "flex";
    mobileNav.style.display = checked ? "none" : "flex";
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let empty = 0;
    const value2 = searchBar.value.trim();
    const value = searchBar.value.trim().toLowerCase();
    Array.from(cards).forEach(card => {
        const name = card.querySelector(".ramen-name").textContent.toLowerCase();
        const type = card.querySelector(".ramen-type").textContent.toLowerCase();
        const visible = name.includes(value) || type.includes(value);
        card.classList.toggle("hide", !visible);
        if (visible == true) {
            empty = 1;
        }
    });
    searchBar.value = "";

    if (value !== "") {
        result.style.display = "inline-block";
        result.textContent = `Search Result for "${value2}"`;
        searchContainer.style.paddingBottom = "2.25rem";
        result.style.marginTop = "0";
        if (empty == 0) {
            noramen.style.display = "block";
        } else {
            noramen.style.display = "none";
        }
    }
    else {
        noramen.style.display = "none";
        searchContainer.style.paddingBottom = "2rem";
        result.style.display = "none";
    }
})

const navbar = document.querySelector(".nav-container-right");
const navigate = e => {
    console.log("Hello")
    if (e.target.tagName === 'BUTTON') {
        const navButton = e.target.textContent;
        window.history.pushState({}, '', 'menu.html');
        switch(navButton) {
            case 'Home':
                window.location.href = "Eramen.html";
                break;
            case 'Promotions':
                window.location.href = 'promotions.html'
                break;
            case 'About Us':
                window.location.href = "aboutUs.html";
                break;
            case 'Contact Us':
                window.location.href = "contactUs.html"
        }
    }
}

navbar.addEventListener("click", navigate);
mobileNav.addEventListener("click", navigate);