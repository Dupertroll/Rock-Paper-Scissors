import {
  rock,
  paper,
  scissors,
  resultado,
  rock1,
  paper1,
  scissors1,
  score,
  restartscore,
} from "./create";

let scorenum = localStorage.getItem("score");
let scorenum1 = 0;
scorenum1 = parseInt(scorenum!, 10);

function juego(comprobar: number) {
  restartscore.addEventListener("click", () => {
    scorenum1 = 0;
    score.textContent = `${scorenum1}`;
    localStorage.setItem("score", `${scorenum1}`);
  });
  if (comprobar == 1) {
    let rival: number = Math.random() * (3 - 0) + 0;

    if (rival < 1) {
      rock1.setAttribute(
        "style",
        "z-index: 1; transform: translate(380px, -100px) scale(1.4);"
      );
      rock.setAttribute(
        "style",
        "transform: translate(-380px, -100px) scale(1.4);"
      );
      paper.setAttribute("style", "opacity: -100%; z-index: -1");
      scissors.setAttribute("style", "opacity: -100%; z-index: -1");

      resultado.textContent = "TIE";
      resultado.setAttribute("style", "z-index: 0; opacity:100%;");
      score.textContent = `${scorenum1}`;
    } else if (rival < 2) {
      paper.setAttribute(
        "style",
        "z-index: 1; transform: translate(530px, 95px) scale(1.4); filter: drop-shadow(0 0 9.5rem rgba(255, 255, 255, 0.896));"
      );
      rock.setAttribute(
        "style",
        "transform: translate(-380px, -100px) scale(1.4);"
      );
      scissors.setAttribute("style", "opacity: -100%; z-index: -1");
      resultado.textContent = "YOU LOST";
      scorenum1 -= 1;
      localStorage.setItem("score", `${scorenum1}`);
      resultado.setAttribute("style", "z-index: 0; opacity:100%;");
      score.textContent = `${scorenum1}`;
    } else if (rival > 2) {
      scissors.setAttribute(
        "style",
        "z-index: 1; transform: translate(250px, 100px) scale(1.4);"
      );
      rock.setAttribute(
        "style",
        "transform: translate(-380px, -100px) scale(1.4); filter: drop-shadow(0 0 9.5rem rgba(255, 255, 255, 0.896));"
      );
      paper.setAttribute("style", "opacity: -100%; z-index: -1");
      resultado.textContent = "YOU WIN";
      scorenum1 += 1;
      localStorage.setItem("score", `${scorenum1}`);
      resultado.setAttribute("style", "z-index: 0; opacity:100%;");
      score.textContent = `${scorenum1}`;
    }
  }
  if (comprobar == 2) {
    let rival: number = Math.random() * (3 - 0) + 0;

    if (rival < 1) {
      rock.setAttribute(
        "style",
        "z-index: 1; transform: translate(400px, -100px) scale(1.4); filter: drop-shadow(0 0 9.5rem rgba(255, 255, 255, 0.896));"
      );
      paper.setAttribute(
        "style",
        "transform: translate(-230px, 90px) scale(1.4);"
      );
      scissors.setAttribute("style", "opacity: -100%; z-index: -1");
      resultado.textContent = "YOU WIN";
      scorenum1 += 1;
      localStorage.setItem("score", `${scorenum1}`);
      resultado.setAttribute("style", "z-index: 0; opacity:100%;");
      score.textContent = `${scorenum1}`;
    } else if (rival < 2) {
      paper1.setAttribute(
        "style",
        "z-index: 1; transform: translate(530px, 90px) scale(1.4);"
      );
      paper.setAttribute(
        "style",
        "transform: translate(-230px, 90px) scale(1.4);"
      );
      rock.setAttribute("style", "opacity: -100%; z-index: -1");
      scissors.setAttribute("style", "opacity: -100%; z-index: -1");
      resultado.textContent = "TIE";
      resultado.setAttribute("style", "z-index: 0; opacity:100%;");
      score.textContent = `${scorenum1}`;
    } else if (rival > 2) {
      scissors.setAttribute(
        "style",
        "z-index: 1; transform: translate(260px, 95px) scale(1.4); filter: drop-shadow(0 0 9.5rem rgba(255, 255, 255, 0.896));"
      );
      paper.setAttribute(
        "style",
        "transform: translate(-230px, 90px) scale(1.4);"
      );
      rock.setAttribute("style", "opacity: -100%; z-index: -1");
      resultado.textContent = "YOU LOST";
      scorenum1 -= 1;
      localStorage.setItem("score", `${scorenum1}`);
      resultado.setAttribute("style", "z-index: 0; opacity:100%;");
      score.textContent = `${scorenum1}`;
    }
  }
  if (comprobar == 3) {
    let rival: number = Math.random() * (3 - 0) + 0;
    if (rival < 1) {
      rock.setAttribute(
        "style",
        "z-index: 1; transform: translate(380px, -95px) scale(1.4); filter: drop-shadow(0 0 9.5rem rgba(255, 255, 255, 0.896));"
      );
      scissors.setAttribute(
        "style",
        "transform: translate(-490px, 90px) scale(1.4);"
      );
      paper.setAttribute("style", "opacity: -100%; z-index: -1");
      resultado.textContent = "YOU LOST";
      scorenum1 -= 1;
      localStorage.setItem("score", `${scorenum1}`);
      resultado.setAttribute("style", "z-index: 0; opacity:100%;");
      score.textContent = `${scorenum1}`;
    } else if (rival < 2) {
      paper.setAttribute(
        "style",
        "z-index: 1; transform: translate(500px, 100px) scale(1.4);"
      );
      scissors.setAttribute(
        "style",
        "transform: translate(-490px, 90px) scale(1.4); filter: drop-shadow(0 0 9.5rem rgba(255, 255, 255, 0.896));"
      );
      rock.setAttribute("style", "opacity: -100%; z-index: -1");
      resultado.textContent = "YOU WIN";
      scorenum1 += 1;
      localStorage.setItem("score", `${scorenum1}`);
      resultado.setAttribute("style", "z-index: 0; opacity:100%;");
      score.textContent = `${scorenum1}`;
    } else if (rival > 2) {
      scissors1.setAttribute(
        "style",
        "z-index: 1; transform: translate(230px, 95px) scale(1.4);"
      );
      scissors.setAttribute(
        "style",
        "transform: translate(-490px, 90px) scale(1.4);"
      );
      rock.setAttribute("style", "opacity: -100%; z-index: -1");
      paper.setAttribute("style", "opacity: -100%; z-index: -1");
      resultado.textContent = "TIE";
      resultado.setAttribute("style", "z-index: 0; opacity:100%;");
      score.textContent = `${scorenum1}`;
    }
  }
}

function disablebuttons() {
  rock.setAttribute("disabled", "rock");
  paper.setAttribute("disabled", "paper");
  scissors.setAttribute("disabled", "scissors");
}

export {
  juego,
  disablebuttons,
  resultado,
  rock1,
  paper1,
  scissors1,
  scorenum,
  scorenum1,
};
