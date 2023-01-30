import "./normalize.css";
import "./style.css";
import {
  root,
  juego,
  disablebuttons,
  imagenfondo,
  restartbutton,
  rock,
  paper,
  scissors,
  rock1,
  paper1,
  scissors1,
  resultado,
  score,
  scorenum1,
  showrules,
  rules,
} from "./create";
localStorage.setItem("score", `${scorenum1}`);
juego(0);

let detector: boolean = false;
score.textContent = `${scorenum1}`;
rock.addEventListener("click", () => {
  disablebuttons();
  juego(1);

  imagenfondo?.setAttribute("style", "opacity: -100%; opacity:0%; z-index: -1");
  restartbutton?.setAttribute("style", "width: 12rem; z-index: 1");
  console.log(localStorage.getItem("score"));
});

paper.addEventListener("click", () => {
  disablebuttons();
  juego(2);

  imagenfondo?.setAttribute("style", "opacity: -100%; opacity:0%; z-index: -1");
  restartbutton?.setAttribute("style", "width: 12rem; z-index: 1");
  console.log(localStorage.getItem("score"));
});

scissors.addEventListener("click", () => {
  disablebuttons();
  juego(3);

  imagenfondo?.setAttribute("style", "opacity: -100%; opacity:0%; z-index: -1");
  restartbutton?.setAttribute("style", "width: 12rem; z-index: 1");
  console.log(localStorage.getItem("score"));
});

restartbutton.addEventListener("click", () => {
  rock?.setAttribute("style", "z-index: 1;top: 485px;left: 150px;");
  paper?.setAttribute("style", "z-index: 1;top: 280px;right: 150px;");
  scissors?.setAttribute("style", "z-index: 1;top: 280px;right: 10px;");
  rock1.setAttribute("style", "");
  paper1.setAttribute("style", "");
  scissors1.setAttribute("style", "");

  restartbutton?.setAttribute(
    "style",
    "z-index: -1;width: 7rem;left: 145px;top: 385px;"
  );

  resultado.setAttribute("style", "top: 160px;");
  imagenfondo.setAttribute("style", "z-index: 0;");
  rock?.removeAttribute("disabled");
  paper?.removeAttribute("disabled");
  scissors?.removeAttribute("disabled");
});
showrules.addEventListener("click", () => {
  if (detector == true) {
    rules.setAttribute(
      "style",
      "transition: 1s; transform: scale(0.05); z-index: -1;"
    );
    detector = false;
  } else if (detector == false) {
    detector = true;
    rules.setAttribute("style", "transform: scale(1); z-index: 1; ");
  }
});
export { rock, paper, scissors, root };
