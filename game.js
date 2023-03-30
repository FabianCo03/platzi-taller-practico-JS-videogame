const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");
let canvasSize;
let elementsSize;

window.addEventListener("load", setCanvasSize);
window.addEventListener("resize", setCanvasSize);

function setCanvasSize() {
  elementsSize = canvasSize / 10;

  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }

  canvas.setAttribute("width", canvasSize);
  canvas.setAttribute("height", canvasSize);

  console.log({ canvasSize, elementsSize });

  startGame();
}

function startGame() {
  elementsSize = canvasSize / 10;

  game.font = elementsSize + "px Helvetica";
  game.textAlign = "end";

  const mapa = maps[2];
  const mapRows = mapa.trim().split("\n");
  const mapRowCols = mapRows.map((row) => row.trim().split(""));
  console.log(mapa, mapRows, mapRowCols);

  for (let row = 1; row <= 10; row++) {
    for (let col = 1; col <= 10; col++) {
      game.fillText(
        emojis[mapRowCols[row - 1][col - 1]],
        elementsSize * col,
        elementsSize * row
      );
    }
  }
}
