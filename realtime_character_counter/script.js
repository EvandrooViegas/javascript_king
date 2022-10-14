const textareaEl = document.querySelector("#textarea")
const totalCounterEl = document.querySelector("#total-counter")
const remainingCounter = document.querySelector("#remaining-counter")

textareaEl.addEventListener("keyup", () => {
    updateCounter()
})


const updateCounter = () => {
    totalCounterEl.innerText = textareaEl.value.length
    remainingCounter.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length
}