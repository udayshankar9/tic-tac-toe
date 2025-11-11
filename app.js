let boxes = document.querySelectorAll(".box");
let winnerDisplay = document.querySelector("#pr");
let msgcon = document.querySelector(".msg"); 
let turnO = true;
const winPatterns = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
        box.innerText = "O";
        turnO = false;
    } else {
        box.innerText = "X";
        turnO = true;
    } box.disabled = true;
    checkWin(); 
  });
});
const disableboxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};
const showWinner = (winner) => {
        winnerDisplay.innerText = `Winner of the Game is ${winner}`
        msgcon.classList.remove("hide");
         disableboxes();
}
const checkWin = () => { 
  let isDraw = true;
  boxes.forEach((box) => {
    if(box.innerText===""){
        isDraw = false;
    }
  });
  if(isDraw){
    winnerDisplay.innerText = `It's a Draw!`;
    msgcon.classList.remove("hide");
    disableboxes();
    return;
  } 
  for(let pattern of winPatterns){
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;
    if(val1!=="" && val2!=="" && val3!==""){
        if(val1===val2 && val2===val3){
          showWinner(val1);
        }
    };
  };
};
const resetgame = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    }); 
    turnO = true;
    msgcon.classList.add("hide");
};
let resetButton = document.querySelector(".rst");
resetButton.addEventListener("click", resetgame);
let newGameButton = document.querySelector(".nw");
newGameButton.addEventListener("click", resetgame);