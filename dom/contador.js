const $aumentarBtn = document.querySelector("#aumentar");
const $disminuirBtn = document.querySelector("#disminuir");
const $contador = document.querySelector("#counter");

let contador = 0;

$aumentarBtn.addEventListener("click", () => {
  contador++;
  render();
});

const isMenorACero = (contador) => {
  if (contador <= 0) {
    alert("El contador no puede ser menor a 0");
    return true;
  } else {
    return false;
  }
};

$disminuirBtn.addEventListener("click", () => {
  if (isMenorACero(contador)) return;
  contador--;
  render();
});

function render() {
  $contador.textContent = contador;
}

function func(name) {
  return {
    nombre: name,
    saludar: function() {
      console.log(`Hola ${this.nombre}`);
    }
  };
}
