const buttons = document.getElementById("buttons")
const num1 = document.getElementById("number1")
const num2 = document.getElementById("number2")
const timer = document.getElementById("timer")
let number1;
let number2;
let score = 0


// Iteration 2: Generate 2 random number and display it on the screen

function displayRandomNumber(){
    number1 = randomNumber() 
    number2 = randomNumber()
    console.log(number1,number2)
    num1.innerHTML = number1
    num2.innerHTML = number2
}


function randomNumber(){
    let x = Math.floor(Math.random()*100) + 1
    return x
}

//Timer functionality
let time = 6
function stopWatch(){
    if(time==1){
        gameover()
    }
    time--
    timer.innerHTML = time
}
setInterval(stopWatch,1000)

// Iteration 3: Make the options button functional

buttons.addEventListener('click',(e) => {
    compareNumbers(e.target.id)
})

//Comparing two numbers

function compareNumbers(operation){
    if(operation=="greater-than" && number1>number2 || operation=="equal-to" && number1==number2 || operation=="lesser-than" && number1<number2){
        time = 6
        score++
        displayRandomNumber()
    }else{
        gameover()
    }
    
}

displayRandomNumber()

function gameover(){
    window.location.href="gameover.html"
    localStorage.setItem("score",score)
}


// Iteration 4: Build a timer for the game
