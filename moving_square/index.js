const squareEl = document.querySelector("#square")
const containerEl = document.querySelector("#container")
const body = document.body
const scoreEl = document.querySelector("#score")

let SPEED = 15
let SCORE = 0

const containerPosition = {
    top: topContainerValue = Number(Math.ceil((getComputedStyle(containerEl).top.split("p")[0]))),
    bottom: bottomContainerValue = Number(getComputedStyle(containerEl).bottom.split("p")[0]),
    left: leftContainerValue = Number(getComputedStyle(containerEl).left.split("p")[0]),
    right: rightContainerValue = Number(getComputedStyle(containerEl).right.split("p")[0]),
}

const bodyWidth = getComputedStyle(body).width.split("p")[0]


body.addEventListener("keydown", (e) => {
    const key = e.key
    const bottomSquareValue = Number(getComputedStyle(squareEl).bottom.split("p")[0])
    const leftSquareValue = Number(getComputedStyle(squareEl).left.split("p")[0])



    if (key === "a") {
        squareEl.style["left"] = leftSquareValue - SPEED + "px"
    } else if (key == "d") {
        squareEl.style["left"] = leftSquareValue + SPEED + "px"
    }


})   

const getRandomNumber = (min, max) => {
    let res;
    const randomInt = Math.random() * max
    res = Math.ceil(randomInt) 
    if(res => min) {
        return res
    } else {
        getRandomNumber(min, max)
    }
}

const updateScore = () => {
    SCORE++
    scoreEl.innerText = "Score: " + SCORE
    
}

const makeFood = () => {
    const foodPositionX = getRandomNumber(0, bodyWidth)
    const foodEl = document.createElement("div")

    foodEl.addEventListener("web", () => {
        console.log("aaaaaa")
    })

    const square = {
    
    }
    const food = {
        
    }
    setInterval(() => {
        square.x = leftSquareValue = Number(getComputedStyle(squareEl).left.split("p")[0])
        square.y = bottomSquareValue = Number(Math.ceil(getComputedStyle(squareEl).bottom.split("p")[0]))

        food.x = leftSquareValue = Number(getComputedStyle(foodEl).left.split("p")[0]),
        food.y = bottomSquareValue = Number(Math.ceil(getComputedStyle(foodEl).bottom.split("p")[0]))

    }, 100)

    if(square.y == food.y) {
        updateScore()
    }

    foodEl.style["left"] = foodPositionX + "px"
    foodEl.className = "food"
    body.append(foodEl)
    setTimeout(() => {
        body.removeChild(foodEl)
    }, 2000)

}


setInterval(() => {
    
    makeFood()

}, 2000)