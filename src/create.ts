import { juego, disablebuttons, scorenum1 } from "./functions";
import fondo from "./images/bg-triangle.svg";
import logo from "./images/logo.svg";
const root: Element | null = document.querySelector("#app");
let containerbuttons: Element = document.createElement("div");
let containermenu: Element = document.createElement("div");
let rules: Element = document.createElement("div");
let score: Element = document.createElement("p");
let resultado: Element = document.createElement("p");
let rock: Element = document.createElement("button");
let paper: Element = document.createElement("button");
let scissors: Element = document.createElement("button");
let rock1: Element = document.createElement("button");
let paper1: Element = document.createElement("button");
let scissors1: Element = document.createElement("button");
let restartbutton: Element = document.createElement("button");
let restartscore: Element = document.createElement("button");
let showrules: Element = document.createElement("button");
let imagenfondo = document.createElement("img");
let imagenlogo = document.createElement("img");

imagenfondo.src = fondo;
imagenlogo.src = logo;
restartbutton.textContent = "PLAY AGAIN";
restartscore.textContent = "RESTART";
showrules.textContent = "RULES";

containerbuttons.classList.add("containerbuttons");
containermenu.classList.add("containermenu");
resultado.classList.add("resultado");
showrules.classList.add("showrules");
rules.classList.add("rules");
rock.classList.add("rock");
paper.classList.add("paper");
scissors.classList.add("scissors");
rock1.classList.add("rock1");
paper1.classList.add("paper1");
scissors1.classList.add("scissors1");
imagenfondo.classList.add("imagen");
imagenlogo.classList.add("imagenlogo");
restartbutton.classList.add("restartbutton");
restartscore.classList.add("restartscore");
root?.classList.add("root");

containerbuttons.appendChild(rock);
containerbuttons.appendChild(paper);
containerbuttons.appendChild(scissors);
containerbuttons.appendChild(rock1);
containerbuttons.appendChild(paper1);
containerbuttons.appendChild(scissors1);
containerbuttons.appendChild(imagenfondo);
containermenu.appendChild(restartbutton);
containermenu.appendChild(restartscore);
containermenu.appendChild(showrules);
containermenu.appendChild(rules);
containermenu.appendChild(imagenlogo);
containermenu.appendChild(score);
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
  score,
  restartscore,
  showrules,
  rules,
  scorenum1,
};
