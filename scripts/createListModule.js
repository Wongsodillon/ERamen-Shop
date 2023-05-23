export const generateMenu = (menu) => {
    let menuList = document.getElementById("menu-list");
    for (let i = 0; i < menu.length; i++)
    {
        const newRamen = document.createElement("li");
        newRamen.classList.add("point");
        const mainDiv = document.createElement("div");
        mainDiv.classList.add("ramen");
        const figure = document.createElement("figure");
        figure.classList.add("ramen-figure");
        const ramenImage = document.createElement("img");
        figure.appendChild(ramenImage);
        ramenImage.src = menu[i].img;
        ramenImage.classList.add("ramen-pic");

        const outerInfo = document.createElement("div");
        outerInfo.classList.add("outer-info")
        const infoContainer = document.createElement("div");
        infoContainer.classList.add("info-container")
        const ramenName = document.createElement("p");
        ramenName.classList.add("ramen-name");
        ramenName.textContent = menu[i].name;
        const lines = document.createElement("span");
        lines.classList.add("lines");
        const ramenPrice = document.createElement("p");
        ramenPrice.classList.add("ramen-price");
        ramenPrice.textContent = menu[i].price;
        infoContainer.append(ramenName)
        if (menu[i].promo == true) {
            const specialBadge = document.createElement("p");
            specialBadge.textContent = "Special Promo";
            specialBadge.classList.add("special-badge");
            infoContainer.appendChild(specialBadge)
        }
        infoContainer.append(lines, ramenPrice);
        const ramenType = document.createElement("p")
        ramenType.classList.add("ramen-type")
        ramenType.textContent = menu[i].type;
        const ramenDesc = document.createElement("p")
        ramenDesc.classList.add("ramen-desc")
        ramenDesc.textContent = menu[i].desc;
        outerInfo.append(infoContainer, ramenType, ramenDesc)
        mainDiv.append(figure, outerInfo)
        newRamen.appendChild(mainDiv)
        menuList.appendChild(newRamen)
    }
}
export const recommend = (menu) => {
    let menuList = document.getElementById("menu-list");
    for (let i = 0; i < 3; i++)
    {
        let newRamen = document.createElement("div");
        let type = document.createElement("p");
        let name = document.createElement("p");
        let price = document.createElement("p");

        type.textContent = menu[i].type;
        type.classList.add("ramen-type");
        name.textContent = menu[i].name;
        name.classList.add("ramen-name");
        price.textContent = menu[i].price;
        price.classList.add("ramen-price");
        let ramenImage = document.createElement('img');
        ramenImage.src = menu[i].img;
        ramenImage.classList.add("ramen-pic");
        newRamen.appendChild(ramenImage);
        newRamen.appendChild(type);
        newRamen.appendChild(name);
        newRamen.appendChild(price);
        newRamen.classList.add("ramen");
        menuList.appendChild(newRamen);
    }
}