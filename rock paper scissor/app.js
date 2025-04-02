let userScore = 0;
let compScore = 0;
let option = document.querySelectorAll(".opt");
let msg = document.querySelector(".message");
let user = document.querySelector("#user-score");
let comp = document.querySelector("#comp-score")

let compOpt = () => {
const choice = ["rock", "paper", "scissor"];
const randIdx = Math.floor(Math.random() * 3);
return choice[randIdx];
}

const showWinner = (userWin, optionId, compChoice) => {
    if (userWin) {
        userScore++;
        user.innerText = userScore;
        console.log(`you win ${optionId} beats ${compChoice}`) ;
        msg.innerText = `You Win ${optionId} beats ${compChoice}` ;
        msg.style.backgroundColor = "#2D9596" ;
    } else {
        compScore++;
        comp.innerText = compScore ;
        msg.innerText = `You Lose ${compChoice} beats ${optionId}`;
        msg.style.backgroundColor = "#FF204E" ;
    }
}

const drawGame = () => {
    console.log("game draw");
    msg.innerText = "Game Draw !! Try Again";
    msg.style.backgroundColor = "#201658" ;
}
const playGame = (optionId) => {
    console.log("user select =", optionId)
    const compChoice = compOpt();
    console.log("computer select =", compChoice);
    if (optionId === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (optionId === "rock") {
           userWin = compChoice === "paper" ? false : true ;
        } else if (optionId === "paper") {
            userWin = compChoice === "scissor" ? false : true ;
        } else  {
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin, optionId, compChoice);
    }
}

option.forEach((option) => {
    option.addEventListener("click", () => {
        let optionId = option.getAttribute("id")
        playGame(optionId);
    })
})