const questionEl = document.querySelector("#question")
const formEl = document.querySelector("#form")
const inputEl = document.querySelector("#input")
const scoreEl = document.querySelector("#score")

const num1 = Math.ceil(Math.random() * 10)
const num2 = Math.ceil(Math.random() * 10)
const correctAnswer = num1 * num2

let score =  JSON.parse(localStorage.getItem("score"))
if(!score) {
    score = 0
}
scoreEl.innerText = "score: " + score


questionEl.innerText = `What is ${num1} times ${num2}?`



formEl.addEventListener("submit", () => {

    const userAns = Number(inputEl.value)
    
    if(userAns === correctAnswer) {
        score++ 
    } else {
        score--        
    }

    useLocalStorge()
    
})

function useLocalStorge() {
    localStorage.setItem("score", JSON.stringify(score))
}

