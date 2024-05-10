const $aumentarBtn = document.querySelector("#aumentar");
const $disminuirBtn = document.querySelector("#disminuir");
const $contador = document.querySelector("#counter");

let contador = 0;

$aumentarBtn.addEventListener("click", () => {
  contador++;
  render();
});

$disminuirBtn.addEventListener("click", () => {
  contador--;
  render();
});

function render() {
  $contador.innerHTML = '<h1>' + contador + '</h1>';
}
