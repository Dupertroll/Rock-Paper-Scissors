import { juego, disablebuttons } from "./functions";
import fondo from "./images/bg-triangle.svg";
import logo from "./images/logo.svg";
const root: Element | null = document.querySelector("#app");
let containerbuttons: Element | null = document.createElement("div");
let containermenu: Element | null = document.createElement("div");
let rock: Element | null = document.createElement("button");
let paper: Element | null = document.createElement("button");
let scissors: Element | null = document.createElement("button");
let rock1: Element | null = document.createElement("button");
let paper1: Element | null = document.createElement("button");
let scissors1: Element | null = document.createElement("button");
let restartbutton: Element | null = document.createElement("button");
let resultado = document.createElement("p");
let imagenfondo = document.createElement("img");
let imagenlogo = document.createElement("img");

imagenfondo.src = fondo;
imagenlogo.src = logo;
restartbutton.textContent = "PLAY AGAIN";

containerbuttons.classList.add("containerbuttons");
containermenu.classList.add("containermenu");
resultado.classList.add("resultado");
rock.classList.add("rock");
paper.classList.add("paper");
scissors.classList.add("scissors");
rock1!.classList.add("rock1");
paper1!.classList.add("paper1");
scissors1!.classList.add("scissors1");
imagenfondo.classList.add("imagen");
imagenlogo.classList.add("imagenlogo");
restartbutton.classList.add("restartbutton");
root?.classList.add("root");

containerbuttons.appendChild(rock);
containerbuttons.appendChild(paper);
containerbuttons.appendChild(scissors);
containerbuttons.appendChild(rock1);
containerbuttons.appendChild(paper1);
containerbuttons.appendChild(scissors1);
containerbuttons.appendChild(imagenfondo);
containermenu.appendChild(restartbutton);
containermenu.appendChild(imagenlogo);
root?.appendChild(containerbuttons);
root?.appendChild(containermenu);
root?.appendChild(resultado);

export {
  root,
  juego,
  disablebuttons,
  imagenfondo,
  restartbutton,
  scissors,
  paper,
  rock,
  rock1,
  paper1,
  scissors1,
  resultado,
};
