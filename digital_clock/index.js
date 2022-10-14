const hourEl = document.querySelector("#hour")
const minuteEl = document.querySelector("#minutes")
const secondEl = document.querySelector("#seconds")
const ampmEl = document.querySelector("#ampm")

const dayEl = document.querySelector("#day")
const monthEl = document.querySelector("#month")
const yearEl = document.querySelector("#year")


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
"November", "December"]

function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    let day = new Date().getDate()
    let month = new Date().getMonth()
    let year = new Date().getFullYear()

    let ampm = "AM"
    
    if(h > 12) {
        h = h - 12
        ampm = "PM"
    }

    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s
    hourEl.innerText = h
    minuteEl.innerText = m
    secondEl.innerText = s
    ampmEl.innerText = ampm



    dayEl.innerText = day
    monthEl.innerText = months[month]
    yearEl.innerText = year

}

setInterval(() => {
    
    updateClock()
}, 1000)