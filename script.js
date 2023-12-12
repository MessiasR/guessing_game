const btnTry = document.querySelector("#btnTry")
const btnAgain = document.querySelector("#btnAgain")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

btnTry.addEventListener('click', handleTryCLick)
btnAgain.addEventListener('click', handleAgainClick)
document.addEventListener('keydown', enterKey)

function handleTryCLick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        
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
    toggleScreen()
    xAttempts = 1

    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function enterKey(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleAgainClick()
    }
}
