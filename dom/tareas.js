import {
  getItemFromLocalStorage,
  setItemInLocalStorage,
} from "./utils/localStorage.js";

const $input = document.querySelector("#tarea");
const $btnAgregar = document.querySelector("#agregar");
const $lista = document.querySelector("#tareas");

const render = () => {
  const items = tareas.map((tarea) => `<li>${tarea}</li>`);
  $lista.innerHTML = items.join("");
};

const getInicialState = () => {
  return getItemFromLocalStorage("tareas") ?? [];
};
const tareas = getInicialState();

let seEstaEditando = false;
let valorAnterior = "";
render();

const esTareaVacia = (tarea) => {
  const esVacia = tarea.trim() === "";

  if (esVacia) {
    alert("La tarea no puede estar vacía");
    return true;
  } else {
    return false;
  }
};

const agregarTarea = (tarea) => {
  if (!esTareaVacia(tarea)) {
    tareas.unshift(tarea);
    setItemInLocalStorage("tareas", tareas);
  }
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

const onDelete = (e) => {
  const text = e.target.textContent;
  const index = tareas.indexOf(text);
  tareas.splice(index, 1);

  setItemInLocalStorage("tareas", tareas);
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
  setItemInLocalStorage("tareas", tareas);
  $btnAgregar.textContent = "Crear";
  seEstaEditando = false;
};

// la fuente de nuestra información inicialmente será localStorage y luego será nuestro array en memoria
// 1. obtener datos de local storage si hay, obtener un estado inicial
// 2.por cada operacion que se haga al array, tambien hacerlo en localStorage
//   1. guardar cada tarea en local storage
//   2. guardar en memoria cada tarea nuestro array en memoria
//   3. eliminar en ambos lugares
//   4. editar en ambos lugares
// 3. renderizar las tareas
