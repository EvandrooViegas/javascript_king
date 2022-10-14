const navbarEl = document.querySelector("#navbar")

const bottomContainerEl = document.querySelector(".bottom-container")
const body = document.body


window.addEventListener("scroll", () => {
    const yPos = window.scrollY
    
    if(window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50) {
        navbarEl.classList.add("active")
    } else {
        navbarEl.classList.remove("active")

    }
})