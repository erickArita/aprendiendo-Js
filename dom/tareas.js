const $input = document.querySelector("#tarea");
const $btnAgregar = document.querySelector("#agregar");
const $lista = document.querySelector("#tareas");

const tareas = [];
let seEstaEditando = false;
let valorAnterior = "";

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

const render = () => {
  const items = tareas.map((tarea) => `<li>${tarea}</li>`);
  $lista.innerHTML = items.join("");
};

const onDelete = (e) => {
  const text = e.target.textContent;
  const index = tareas.indexOf(text);
  tareas.splice(index, 1);
};

$btnAgregar.addEventListener("click", () => {
  if (seEstaEditando) {
    onEdit();
  } else {
    const value = obtenerTarea();
    agregarTarea(value);
  }
  limpiarInput();
  render();
});

$lista.addEventListener("click", (e) => {
  //si ctrlKey es true, entonces edita
  if (e.ctrlKey) {
    onInitEdit(e);
    seEstaEditando = true;
  } else {
    onDelete(e);
  }
  render();
});

const onInitEdit = (e) => {
  const text = e.target.textContent;
  $btnAgregar.textContent = "Editar";
  $input.value = text;
  valorAnterior = text;
};

const onEdit = () => {
  const nuevoValor = $input.value;

  const posicion = tareas.indexOf(valorAnterior);
  tareas.splice(posicion, 1, nuevoValor);

  $btnAgregar.textContent = "Crear";
  seEstaEditando = false;
};
