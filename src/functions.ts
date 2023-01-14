import { rock, paper, scissors } from "./main";
let resultado = document.createElement("p");
let rock1 = document.createElement("button");
let paper1 = document.createElement("button");
let scissors1 = document.createElement("button");
rock1.classList.add("rock1");
paper1.classList.add("paper1");
scissors1.classList.add("scissors1");

function juego(comprobar: number) {
  if (comprobar == 1) {
    let rival: number = Math.random() * (3 - 0) + 0;

    if (rival < 1) {
      rock1.setAttribute(
        "style",
        "z-index: 1; transform: translate(380px, -100px) scale(1.4);"
      );
      paper?.setAttribute("style", "opacity: -100%; z-index: -1");
      scissors?.setAttribute("style", "opacity: -100%; z-index: -1");

      resultado.textContent = "TIE";
      resultado.setAttribute("style", "z-index: 1;opacity:100%;");
    } else if (rival < 2) {
      paper?.setAttribute(
        "style",
        "z-index: 1; transform: translate(530px, 95px) scale(1.4);"
      );
      scissors?.setAttribute("style", "opacity: -100%; z-index: -1");
      resultado.textContent = "YOU LOST";
      resultado.setAttribute("style", "z-index: 1;opacity:100%;");
    } else if (rival > 2) {
      scissors?.setAttribute(
        "style",
        "z-index: 1; transform: translate(250px, 100px) scale(1.4);"
      );
      paper?.setAttribute("style", "opacity: -100%; z-index: -1");
      resultado.textContent = "YOU WIN";
      resultado.setAttribute("style", "z-index: 1;opacity:100%;");
    }
  }
  if (comprobar == 2) {
    let rival: number = Math.random() * (3 - 0) + 0;

    if (rival < 1) {
      rock?.setAttribute(
        "style",
        "z-index: 1; transform: translate(400px, -100px) scale(1.4);"
      );
      scissors?.setAttribute("style", "opacity: -100%; z-index: -1");
      resultado.textContent = "YOU WIN";
      resultado.setAttribute("style", "z-index: 1;opacity:100%;");
    } else if (rival < 2) {
      paper1.setAttribute(
        "style",
        "z-index: 1; transform: translate(530px, 90px) scale(1.4);"
      );
      rock?.setAttribute("style", "opacity: -100%; z-index: -1");
      scissors?.setAttribute("style", "opacity: -100%; z-index: -1");
      resultado.textContent = "TIE";
      resultado.setAttribute("style", "z-index: 1;opacity:100%;");
    } else if (rival > 2) {
      scissors?.setAttribute(
        "style",
        "z-index: 1; transform: translate(260px, 95px) scale(1.4);"
      );
      rock?.setAttribute("style", "opacity: -100%; z-index: -1");
      resultado.textContent = "YOU LOST";
      resultado.setAttribute("style", "z-index: 1;opacity:100%;");
    }
  }
  if (comprobar == 3) {
    let rival: number = Math.random() * (3 - 0) + 0;
    if (rival < 1) {
      rock?.setAttribute(
        "style",
        "z-index: 1; transform: translate(380px, -95px) scale(1.4);"
      );
      paper?.setAttribute("style", "opacity: -100%; z-index: -1");
      resultado.textContent = "YOU LOST";
      resultado.setAttribute("style", "z-index: 1;opacity:100%;");
    } else if (rival < 2) {
      paper?.setAttribute(
        "style",
        "z-index: 1; transform: translate(500px, 100px) scale(1.4);"
      );
      rock?.setAttribute("style", "opacity: -100%; z-index: -1");
      resultado.textContent = "YOU WIN";
      resultado.setAttribute("style", "z-index: 1;opacity:100%;");
    } else if (rival > 2) {
      scissors1.setAttribute(
        "style",
        "z-index: 1; transform: translate(230px, 95px) scale(1.4);"
      );
      rock?.setAttribute("style", "opacity: -100%; z-index: -1");
      paper?.setAttribute("style", "opacity: -100%; z-index: -1");
      resultado.textContent = "TIE";
      resultado.setAttribute("style", "z-index: 1;opacity:100%;");
    }
  }
}
function disablebuttons() {
  rock?.setAttribute("disabled", "rock");
  paper?.setAttribute("disabled", "paper");
  scissors?.setAttribute("disabled", "scissors");
}
export { juego, disablebuttons, resultado, rock1, paper1, scissors1 };
