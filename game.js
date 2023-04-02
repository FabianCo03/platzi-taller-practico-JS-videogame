const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");

const teclas = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39 };
window.addEventListener("keydown", playerMoving);

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

  mapRowCols.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      const emoji = emojis[col];
      const elementPositionX = elementsSize * (colIndex + 1);
      const elementPositionY = elementsSize * (rowIndex + 1);

      game.fillText(emoji, elementPositionX, elementPositionY);
      console.log({ row, rowIndex, col, colIndex });
    });
  });
}

// Movimientos por clicks
function moveUp() {
  console.log("Arriba");
}
function moveLeft() {
  console.log("Izquierda");
}
function moveRight() {
  console.log("Derecha");
}
function moveDown() {
  console.log("Abajo");
}

// Movimientos por teclado
function playerMoving(evento) {
  switch (evento.keyCode) {
    case teclas.UP:
      moveUp();
      break;

    case teclas.DOWN:
      moveDown();
      break;

    case teclas.RIGHT:
      moveRight();
      break;

    case teclas.LEFT:
      moveLeft();
      break;
    default:
      console.log("Tecla inservible");
  }
}
