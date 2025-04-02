let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let newGame = document.querySelector(".new-game")
let turnO = true;
const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach ((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O"
            turnO = false;
        } else {
           box.innerText = "X"
           turnO = true ;
        }
        box.disabled = true ;

        checkWin ();
    })
})

const boxDisable = () => {
       for (let box of boxes){
        box.disabled = true;
       };
};
const enable = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    };
};

const showWinner = (winner) => {
      msg.innerText = `Congrats, The winner is...  "${winner}"`;
      msgContainer.classList.remove("hide");
      boxDisable();
}

const checkWin = () => {
    for (let pattern of winpattern) {
   let pos1 = boxes[pattern[0]].innerText;
   let pos2 = boxes[pattern[1]].innerText;
   let pos3 = boxes[pattern[2]].innerText

   if (pos1 != "" && pos2 != "" && pos3 != "") {
    if (pos1 == pos2 && pos2 == pos3) {
        console.log("winner", pos1)
        showWinner(pos1);
    };
   };
};
};

let resetGame = () => {
    turnO = true;
    enable();
    msgContainer.classList.add("hide")
}
newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
