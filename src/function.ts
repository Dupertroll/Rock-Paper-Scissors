let resultado = document.createElement("p");

function juego(comprobar: number) {
  if (comprobar == 1) {
    let rival: number = Math.random() * (3 - 0) + 0;
    if (rival < 1) {
      resultado.textContent = "empate";
    } else if (rival < 2) {
      resultado.textContent = "perdiste";
    } else if (rival > 2) {
      resultado.textContent = "ganaste";
    }
  }
  if (comprobar == 2) {
    let rival: number = Math.random() * (3 - 0) + 0;
    if (rival < 1) {
      resultado.textContent = "ganaste";
    } else if (rival < 2) {
      resultado.textContent = "empate";
    } else if (rival > 2) {
      resultado.textContent = "perdiste";
    }
  }
  if (comprobar == 3) {
    let rival: number = Math.random() * (3 - 0) + 0;
    if (rival < 1) {
      resultado.textContent = "perdiste";
    } else if (rival < 2) {
      resultado.textContent = "ganaste";
    } else if (rival > 2) {
      resultado.textContent = "empate";
    }
  }
}
export { juego, resultado };
