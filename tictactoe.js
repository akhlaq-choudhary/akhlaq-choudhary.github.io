// dom object and variable
const row1 = document.querySelectorAll(".row1");
const row2 = document.querySelectorAll(".row2");
const row3 = document.querySelectorAll(".row3");
const player1Score = document.getElementById("player1value");
const player2Score = document.getElementById("player2value");
const player1Name = document.getElementById("playername1");
const player2Name = document.getElementById("playername2");
const XandOMatrix = [];
let value = "O";
let row = 0;
let colown = 0;
XandOMatrix.push(row1);
XandOMatrix.push(row2);
XandOMatrix.push(row3);
let count = 0;
let name1 = prompt("Enter the player 1 name");
let name2 = prompt("Enter the player 2 name");
if (name1) {
  name1 += " score : ";
  player1Name.textContent = name1;
}
if (name2) {
  name2 += " score : ";
  player2Name.textContent = name2;
}
// clearing the board
function clearBoard() {
  let row = 0;
  let colown = 0;
  count = 0;
  value = "O";
  while (row < XandOMatrix.length) {
    XandOMatrix[row][colown].textContent = "";
    colown++;
    if (colown === XandOMatrix[0].length) {
      colown = 0;
      row++;
    }
  }
}

//adding event to the board
while (row < XandOMatrix.length) {
  XandOMatrix[row][colown].addEventListener("click", function (e) {
    if (value === "O" && !e.path[0].textContent) {
      value = "X";
      e.path[0].textContent = value;
      count++;
    } else if (value === "X" && !e.path[0].textContent) {
      value = "O";
      e.path[0].textContent = value;
      count++;
    }
    if (count === 9) {
      setTimeout(clearBoard, 350);
    }
    //win conditons
    for (let i = 0; i < XandOMatrix.length; i++) {
      if (
        (XandOMatrix[i][0].textContent === "X" &&
          XandOMatrix[i][1].textContent === "X" &&
          XandOMatrix[i][2].textContent === "X") ||
        (XandOMatrix[i][0].textContent === "O" &&
          XandOMatrix[i][1].textContent === "O" &&
          XandOMatrix[i][2].textContent === "O")
      ) {
        if (value === "X") {
          player1Score.textContent = parseInt(player1Score.textContent) + 1;
        }
        if (value === "O") {
          player2Score.textContent = parseInt(player2Score.textContent) + 1;
        }
        setTimeout(clearBoard, 350);
      }
      if (
        (XandOMatrix[0][i].textContent === "X" &&
          XandOMatrix[1][i].textContent === "X" &&
          XandOMatrix[2][i].textContent === "X") ||
        (XandOMatrix[0][i].textContent === "O" &&
          XandOMatrix[1][i].textContent === "O" &&
          XandOMatrix[2][i].textContent === "O")
      ) {
        if (value === "X") {
          player1Score.textContent = parseInt(player1Score.textContent) + 1;
        }
        if (value === "O") {
          player2Score.textContent = parseInt(player2Score.textContent) + 1;
        }
        setTimeout(clearBoard, 350);
      }
    }
    if (
      (XandOMatrix[0][0].textContent === "X" &&
        XandOMatrix[1][1].textContent === "X" &&
        XandOMatrix[2][2].textContent === "X") ||
      (XandOMatrix[0][0].textContent === "O" &&
        XandOMatrix[1][1].textContent === "O" &&
        XandOMatrix[2][2].textContent === "O")
    ) {
      if (value === "X") {
        player1Score.textContent = parseInt(player1Score.textContent) + 1;
      }
      if (value === "O") {
        player2Score.textContent = parseInt(player2Score.textContent) + 1;
      }
      setTimeout(clearBoard, 350);
    }
    if (
      (XandOMatrix[0][2].textContent === "X" &&
        XandOMatrix[1][1].textContent === "X" &&
        XandOMatrix[2][0].textContent === "X") ||
      (XandOMatrix[0][2].textContent === "O" &&
        XandOMatrix[1][1].textContent === "O" &&
        XandOMatrix[2][0].textContent === "O")
    ) {
      if (value === "X") {
        player1Score.textContent = parseInt(player1Score.textContent) + 1;
      }
      if (value === "O") {
        player2Score.textContent = parseInt(player2Score.textContent) + 1;
      }
      setTimeout(clearBoard, 350);
    }
  });
  colown++;
  if (colown === XandOMatrix[0].length) {
    colown = 0;
    row++;
  }
}
