const gameBoard = document.querySelector("#gameboard");
const info = document.querySelector("#info");

const startCells = ["", "", "", "", "", "", "", "", ""];

let mark = "X";

info.textContent = "X goes first";

creatBoard = () => {
  startCells.forEach((_cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("cell");
    cellElement.id = index;

    cellElement.addEventListener("click", addXO);
    gameBoard.appendChild(cellElement);
  });
};
creatBoard();

function addXO(e) {
  let clickedCell = e.target;
  clickedCell.textContent = mark;
  clickedCell.classList.add(mark);

  mark = mark === "X" ? "o" : "X";

  info.textContent = "it is now " + mark + " turn";
  clickedCell.removeEventListener("click", addXO);

  checkScore();
}

checkScore = () => {
  const allCelles = document.querySelectorAll(".cell");
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winningCombos.forEach((array) => {
    const XWins = array.every((c) => allCelles[c]?.classList.contains("X"));

    if (XWins) {
      info.textContent = "X Wins";
      allCelles.forEach((c) => c.replaceWith(c.cloneNode(true)));
      return;
    }
  });
  winningCombos.forEach((array) => {
    const oWins = array.every((c) => allCelles[c]?.classList.contains("o"));

    if (oWins) {
      info.textContent = "o Wins";
      allCelles.forEach((c) => c.replaceWith(c.cloneNode(true)));
      return;
    }
  });
};
