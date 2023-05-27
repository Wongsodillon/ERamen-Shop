import { toggleSticky } from "./stickyNavbarModule.js";

window.addEventListener("scroll", toggleSticky);

const navigate = e => {
    console.log("Hello")
    if (e.target.tagName === 'BUTTON') {
        const navButton = e.target.textContent;
        window.history.pushState({}, '', 'contactUs.html');
        switch(navButton) {
            case 'Home':
                window.location.href = "Eramen.html";
                break;
            case 'Menu':
                window.location.href = "menu.html";
                break;
            case 'Promotions':
                window.location.href = 'promotions.html'
                break;
            case 'About Us':
                window.location.href = "aboutUs.html"
                break
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

const checkPhn = number => {
    for (let i = 0; i < number.length; i++) {
        if (isNaN(number[i])) {
            return false
        }
    }
    return true
}

function formValidation(e) {
    const firstName = document.getElementById("first-name").value
    const firstNameForm = document.getElementById("first-name")
    const lastName = document.getElementById("last-name").value
    const lastNameForm = document.getElementById("last-name")
    const email = document.getElementById("email-form").value
    const emailForm = document.getElementById("email-form")
    const phnNumber = document.getElementById("phn-form").value
    const phnNumberForm = document.getElementById("phn-form")
    const agreeTo = document.getElementById("agree-to").checked
    const checkbox = document.getElementById("agree-to")
    const agreeToForm = document.getElementById("newsletter-container")
    const label = document.getElementById("newsletter-label")
    const messages = document.querySelectorAll(".error")
    let invalid = false
    if (firstName.length == 0 || firstName == null)
    {
        messages[0].textContent = "Please Enter Your First Name"
        firstNameForm.style.borderColor = "#cf0d37"
        // firstNameForm.placeholder.style.color = "#cf0d37"
        invalid = true
    }
    if (lastName.length == 0 || lastName == null)
    {
        messages[1].textContent = "Please Enter Your Last Name"
        lastNameForm.style.borderColor = "#cf0d37"
        invalid = true
    }
    if (email.length == 0)
    {
        messages[2].textContent = "Please Enter Your Email"
        emailForm.style.borderColor = "#cf0d37"
        invalid = true
    }
    else if (email.indexOf("@") == -1)
    {
        messages[2].textContent = "Email in Format: yourname@example.com"
        emailForm.style.borderColor = "#cf0d37"
        invalid = true
    }
    if (phnNumber.length == 0) {
        messages[3].textContent = "Please Enter Your Phone Number"
        phnNumberForm.style.borderColor = "#cf0d37"
        invalid = true
    }
    else if (checkPhn(phnNumber) == false) {
        messages[3].textContent = "Phone Number must all be numbers"
        phnNumberForm.style.borderColor = "#cf0d37"
        invalid = true
    }
    if (agreeTo == false)
    {
        invalid = true
        label.style.color = '#cf0d37';
        checkbox.style.borderColor = '#cf0d37'
        // messages[4].textContent = "Must agree to receive newsletter"
    }
    if (!invalid) console.log("Submitted")
    else if (invalid) e.preventDefault()
}

const form = document.getElementById("form")
form.addEventListener("submit", formValidation)

