const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");

window.addEventListener("load", startGame);

function startGame() {
  //   game.fillRect(0, 50, 100, 100);
  game.font = "25px Helvetica";
  game.fillStyle = "red";
  game.textAlign = "center";
  game.fillText("HOLA", 100, 100);
}
