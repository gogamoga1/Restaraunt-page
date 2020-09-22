import { createElement, getElement } from "./domMan";

function menu () {
const content = getElement(".content");


const section = getElement(".about");
section.textContent = "";


const div = createElement("div", "main")
const h1 = createElement("h1", undefined, "Exquisite kitchen")
const h2 = createElement("h2", undefined, "Exquisite Kitchen Daily Special Menu")
const p = createElement("p", undefined, `For anyone who shares the same passion as me and would love to watch
and learn more, do well to subscribe (so you will be the first to be
notified when I upload a new video), share and give my videos a
thumbs up. Checkout my YouTube Channel`)
section.appendChild(div)
div.appendChild(h1)
div.appendChild(h2)
div.appendChild(p)

let stuff = [
["https://acushlakoncept.github.io/restaurant-page/imgs/parfait.jpg", "Mountains", "Parfait", "₦1,500.00/Cup"],
["https://acushlakoncept.github.io/restaurant-page/imgs/banana_bread.jpg", "Lights", "Banana Bread", "₦1,000.00/loaf"],
["https://acushlakoncept.github.io/restaurant-page/imgs/beef_sauce.jpg", "Nature", "Beef Sauce", "₦2,500.00/plate"],
["https://acushlakoncept.github.io/restaurant-page/imgs/fried_rice_asun.jpg", "Mountains", "Fried Rice with Asun", "₦3,500.00/plate"]
]
const divRow = createElement("div", "row")
for (let i = 0; i <= 3; i++) {
    let divColumn = createElement("div", "column")
    let divImg = createElement("div", "img-content")
    let img = createElement("img")
    img.src = stuff[i][0]
    img.alt = stuff[i][1]
    let h3 = createElement("h3", undefined, stuff[i][2])
    let p = createElement("p", undefined, stuff[i][3])
    divImg.appendChild(img)
    divImg.appendChild(h3)
    divImg.appendChild(p)
    divColumn.appendChild(divImg)
    divRow.appendChild(divColumn)
}

section.appendChild(divRow)


}
    export {menu};