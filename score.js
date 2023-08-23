// Iteration 5: Store the player score and display it on the game over screen
const playAgainButton = document.getElementById("play-again-button")

const scoreBoard = document.getElementById("score-board")
scoreBoard.innerText = localStorage.getItem('score')

playAgainButton.addEventListener('click',()=>{
    window.location.href="game.html"
})