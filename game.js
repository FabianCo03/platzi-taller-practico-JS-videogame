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

  //   for (let i = 1; i <= 10; i++) {
  //     game.fillText(emojis["X"], elementsSize, elementsSize * i);
  //   }
  arrayBidimensional();
}

function arrayBidimensional() {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      game.fillText(emojis["X"], elementsSize * i, elementsSize * j);
    }
  }
}
