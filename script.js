const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

function handleTryCLick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")
        
        if (xAttempts == 1) {
            document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativa!`
        }
        else {
            document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas!`
        }
    }

    inputNumber.value = ""

    xAttempts++
}

function handleAgainClick() {
    screen1.classList.remove("hide")
    screen2.classList.add("hide")

    xAttempts = 1

    randomNumber = Math.round(Math.random() * 10)
}

const btnTry = document.querySelector("#btnTry")
const btnAgain = document.querySelector("#btnAgain")

btnTry.addEventListener('click', handleTryCLick)
btnAgain.addEventListener('click', handleAgainClick)
