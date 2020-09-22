function home () {
    if (document.querySelector(".topnav")) {
        const myNode = document.querySelector(".about")
        myNode.textContent = ""
    }
    
  
    const content = document.querySelector(".content");
if (!document.querySelector(".topnav")) {
    console.log("NOT EXIST")
    const div = document.createElement("div");
    div.classList.add(`topnav`);
    const a1 = document.createElement("a");
    a1.href="#home"
    a1.classList.add(`active`)
    a1.textContent="Home"
 
    const a3 = document.createElement("a");
    a3.href="#menu"
    a3.textContent="Menu"
    const a4 = document.createElement("a");
    a4.href="#about"
    a4.textContent="About"
    div.appendChild(a1)

    div.appendChild(a3)
    div.appendChild(a4)
    content.appendChild(div)
}
    const section = document.querySelector(".about") || document.createElement("section");
    section.classList.add('about')
    const img = document.createElement("img");
    console.log(section)

    img.src = "https://rb.gy/nogwrf"
    img.alt = "Food"
    img.classList.add(`img-restaraunt`)

    const divAbout = document.createElement("div");
    divAbout.classList.add(`about-text`)
    divAbout.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
    maiores earum ipsam blanditiis, modi temporibus minus mollitia
    accusantium rem sit. Nobis adipisci officiis in id, aut
    dignissimos porro blanditiis, temporibus vel quidem soluta minus
    ipsa a? Beatae incidunt voluptas fugiat?`

    section.appendChild(img)
    section.appendChild(divAbout)
    content.appendChild(section)

    
}

export {home};