import { createElement, getElement } from "./domMan";

function about () {
const content = getElement(".content");


const section = getElement(".about");
section.textContent = "";


const div = createElement("div", "about-section")
const h1 = createElement("h1", undefined, "Contact form")
const p = createElement("p", undefined, `Got a question? Give us a call!`)
section.appendChild(div)
div.appendChild(h1)
div.appendChild(p)

const div2 = createElement("div", "align")
const h2 = createElement("h2", undefined, "Contact Us")
const p2 = createElement("p", undefined, `Swing by for a cup of coffee, or leave us a message:`)
const h22 = createElement("h2", undefined, "Telephone")
const h3 = createElement("h3", undefined, "+235-665-5512-4")
section.appendChild(div2)
div2.appendChild(h2)
div2.appendChild(p2)
div2.appendChild(h22)
div2.appendChild(h3)


const divRow = createElement("div", "row")
const column3 = createElement("div", "column3")
const form = createElement("form", "form")
const label1 = createElement("label")
label1.setAttribute("for","fname");
label1.textContent = "First Name"
const input1 = createElement("input", undefined, undefined, "fname")
input1.setAttribute("type","text");
input1.setAttribute("name","firstname");
input1.setAttribute("placeholder","Your name..");
const label2 = createElement("label")
label2.setAttribute("for","lname");
label2.textContent = "Last Name"
const input2 = createElement("input", undefined, undefined, "lname")
input2.setAttribute("type","text");
input2.setAttribute("name","lastname");
input2.setAttribute("placeholder","Your last name..");
const label3 = createElement("label")
label3.setAttribute("for","country");
label3.textContent = "Country"
const selectList = createElement("select", undefined, undefined, "country")
selectList.setAttribute("name","country");

const array = ["Australia","Canada","USA"];

//Create and append the options
for (var i = 0; i < array.length; i++) {
    var option = createElement("option");
    option.value = array[i];
    option.text = array[i];
    selectList.appendChild(option);
}

const label4 = createElement("label")
label4.setAttribute("for","subject");
label4.textContent = "Subject"

const textArea = createElement("textarea", undefined, undefined, "subject")
textArea.name = "subject";
textArea.placeholder= "Write something.."

const input3 = createElement("input")
input3.setAttribute("type","submit");
input3.setAttribute("value","Submit");

section.appendChild(divRow)
divRow.appendChild(column3)
column3.appendChild(form)
form.appendChild(label1)
form.appendChild(input1)
form.appendChild(label2)
form.appendChild(input2)
form.appendChild(label3)





form.appendChild(selectList);
form.appendChild(label4)
form.appendChild(textArea)
form.appendChild(input3)

}
    export {about};