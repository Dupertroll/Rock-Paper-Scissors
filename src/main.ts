import "./normalize.css";
import "./style.css";
import { juego, resultado } from "../src/function";
const root: Element | null = document.querySelector("#app");
let containerbuttons: Element | null = document.createElement("div");
let containermenu: Element | null = document.createElement("div");
let imagen = document.createElement("img");
let rock: Element | null = document.createElement("button");
let paper: Element | null = document.createElement("button");
let scissors: Element | null = document.createElement("button");

imagen.src = "../src/images/bg-triangle.svg";

imagen.classList.add("imagen");
containerbuttons.classList.add("containerbuttons");
rock.classList.add("rock");
paper.classList.add("paper");
scissors.classList.add("scissors");
resultado.classList.add("resultado");
root?.classList.add("root");

containerbuttons.appendChild(rock);
containerbuttons.appendChild(paper);
containerbuttons.appendChild(scissors);
containerbuttons.appendChild(imagen);
root?.appendChild(containerbuttons);
root?.appendChild(resultado);

rock.addEventListener("click", () => {
  juego(1);
  rock?.setAttribute(
    "style",
    "transform: translate(-380px, -100px) scale(1.4);"
  );
  paper?.setAttribute("style", "opacity: -100%; z-index: -1");
  scissors?.setAttribute("style", "opacity: -100%; z-index: -1");
  imagen?.setAttribute("style", "opacity: -100%; z-index: -1");
});

paper.addEventListener("click", () => {
  juego(2);
  paper?.setAttribute(
    "style",
    "transform: translate(-280px, 90px) scale(1.4);"
  );
  rock?.setAttribute("style", "opacity: -100%; z-index: -1");
  scissors?.setAttribute("style", "opacity: -100%; z-index: -1");
  imagen?.setAttribute("style", "opacity: -100%; z-index: -1");
});

scissors.addEventListener("click", () => {
  juego(3);
  scissors?.setAttribute(
    "style",
    "transform: translate(-460px, 90px) scale(1.4);"
  );
  paper?.setAttribute("style", "opacity: -100%; z-index: -1");
  rock?.setAttribute("style", "opacity: -100%; z-index: -1");
  imagen?.setAttribute("style", "opacity: -100%; z-index: -1");
});
