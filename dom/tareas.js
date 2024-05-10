const $input = document.querySelector("#tarea");
const $btnAgregar = document.querySelector("#agregar");
const $lista = document.querySelector("#tareas");

const tareas = [];

const agregarTarea = (tarea) => {
  tareas.push(tarea);
};

// const agregarLiALista = (tarea) => {
//   const $li = `<li>${tarea}</li>`;
//   $lista.innerHTML = $lista.innerHTML + $li;
// };

const obtenerTarea = () => {
  return $input.value;
};

const limpiarInput = () => {
  $input.value = "";
};

$btnAgregar.addEventListener("click", () => {
  const value = obtenerTarea();
  agregarTarea(value);
  // agregarLiALista(value);
  limpiarInput();
  render();
});

const render = () => {
  const items = tareas.map((tarea) => `<li>${tarea}</li>`);
  $lista.innerHTML = items.join("");
};
