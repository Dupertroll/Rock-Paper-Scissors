import "./normalize.css";
import "./style.css";
import { juego, resultado, rock1, paper1, scissors1 } from "../src/function";
const root: Element | null = document.querySelector("#app");
let containerbuttons: Element | null = document.createElement("div");
let containermenu: Element | null = document.createElement("div");
let rock: Element | null = document.createElement("button");
let paper: Element | null = document.createElement("button");
let scissors: Element | null = document.createElement("button");
let restart: Element | null = document.createElement("button");
let imagenfondo = document.createElement("img");
let imagenarriba = document.createElement("img");

imagenfondo.src = "../src/images/bg-triangle.svg";
imagenarriba.src = "../src/images/logo.svg";
restart.textContent = "PLAY AGAIN";

containerbuttons.classList.add("containerbuttons");
containermenu.classList.add("containermenu");
resultado.classList.add("resultado");
rock.classList.add("rock");
paper.classList.add("paper");
scissors.classList.add("scissors");
imagenfondo.classList.add("imagen");
imagenarriba.classList.add("imagenarriba");
restart.classList.add("restart");
root?.classList.add("root");

containerbuttons.appendChild(rock);
containerbuttons.appendChild(paper);
containerbuttons.appendChild(scissors);
containerbuttons.appendChild(rock1);
containerbuttons.appendChild(paper1);
containerbuttons.appendChild(scissors1);
containerbuttons.appendChild(imagenfondo);
containermenu.appendChild(restart);
containermenu.appendChild(imagenarriba);
root?.appendChild(containerbuttons);
root?.appendChild(containermenu);
root?.appendChild(resultado);

rock.addEventListener("click", () => {
  rock?.setAttribute(
    "style",
    "transform: translate(-380px, -100px) scale(1.4);"
  );
  juego(1);
  imagenfondo?.setAttribute("style", "opacity: -100%; z-index: -1");
  restart?.setAttribute("style", "width: 12rem; z-index: 1");
});

paper.addEventListener("click", () => {
  paper?.setAttribute(
    "style",
    "transform: translate(-280px, 90px) scale(1.4);"
  );
  juego(2);
  imagenfondo?.setAttribute("style", "opacity: -100%; z-index: -1");
  restart?.setAttribute("style", "width: 12rem; z-index: 1");
});

scissors.addEventListener("click", () => {
  scissors?.setAttribute(
    "style",
    "transform: translate(-490px, 90px) scale(1.4);"
  );
  juego(3);
  imagenfondo?.setAttribute("style", "opacity: -100%; z-index: -1");
  restart?.setAttribute("style", "width: 12rem; z-index: 1");
});

export { rock, paper, scissors, root };
