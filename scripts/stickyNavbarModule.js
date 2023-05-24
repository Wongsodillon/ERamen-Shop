export const toggleSticky = () => {
    let navbar = document.getElementById("navbar");
    let navbarLeft = document.getElementsByClassName("nav-container-left")[0];
    let navbarRight = document.getElementsByClassName("nav-container-right")[0];
    let btn = document.querySelectorAll("nav-button");
    let prime = document.querySelector("nav-button-prime");
    if (window.scrollY > 90)
    {
        navbarRight.classList.add("sticky");
        navbarLeft.classList.add("sticky");
        navbar.classList.add("sticky");
        prime.classList.add("sticky");
    }
    else
    {
        navbarRight.classList.remove("sticky");
        navbarLeft.classList.remove("sticky");
        navbar.classList.remove("sticky"); 
        btn.classList.remove("sticky");
        prime.classList.remove("sticky");
    }
}
