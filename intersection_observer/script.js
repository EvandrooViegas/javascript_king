const cardsContainerElem = document.querySelector("#cards-container")
const navbarElem = document.querySelector("nav")

const oddsCards = document.querySelectorAll(".card:nth-child(odd)")
const evensCards = document.querySelectorAll(".card:nth-child(even)")

let alreadyAnimated = false

const animateCards = (isIntersecting) => {

    if(!alreadyAnimated) {
        oddsCards.forEach(oddCard => {
            oddCard.classList.toggle("animationOdd", isIntersecting)
        })
        evensCards.forEach(evenCard => {
            evenCard.classList.toggle("animationEven", isIntersecting)
        })
        alreadyAnimated = true
    }
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        navbarElem.classList.toggle("active", entry.isIntersecting)
        entry.isIntersecting && animateCards(entry.isIntersecting)
    })
    }, 
    {
        threshold: 0.8
    }
)


observer.observe(cardsContainerElem)