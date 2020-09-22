import {home} from "./home";
import {menu} from "./menu";
import {about} from "./about";


home();

document.querySelectorAll("a")[1].addEventListener('click', (e) => {
    document.querySelector(".active").classList.toggle("active");
    menu();
    e.target.className = "active"
})

document.querySelectorAll("a")[0].addEventListener('click', (e) => {
    document.querySelector(".active").classList.toggle("active");
    home();
    e.target.className = "active"
})


document.querySelectorAll("a")[2].addEventListener('click', (e) => {
    document.querySelector(".active").classList.toggle("active");
    about();
    e.target.className = "active"
})
