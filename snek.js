let grid = document.querySelector(".grid")
let scoreDisplay = document.querySelector(".scoreDisplay")
let up = document.querySelector(".up")
let bottom = document.querySelector(".bottom")
let left = document.querySelector(".left")
let right = document.querySelector("right")

let width = 10
let currentIndex = 0
let appleIndex = 0 
let currentSnake = [2,1,0]
let direction = 1
let score = 0
let speed = 0.8
let intervalTime = 0
let interval = 0


document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("keyup", control);
    createBoard();
    startGame();
    playAgain.addEventListener("click", replay)
})

function createBoard () {
    popup.style.display = "none";
    for(let i = 0; i<100; i++){
        let div = document.createElement("div");
        grid.appendChild(div)
    }
}

function startGame(){
    let squares = document.querySelectorAll(".grid div");
    randomApple(squares)
    direction = 1
    scoreDisplay.innerHTML = score
    intervalTime = 1000
    currentSnake = [2,1,0]
    currentIndex = 0
    currentSnake.forEach((index)=> squares[index].classList.add("snake"))
    interval = setInterval(moveOutcome, intervalTime)
}

function moveOutcome() {
    let squares = document.querySelectorAll
}