const edades = [20, 100, 10, 20, 30, 40, 50, 60, 70, 80, 90];

//mutabilidad
// es cuando se modifica la variable original
// i= i + 1;

// inmutabilidad
// es cuando se crea una nueva variable y no se modifica la original
// const newVariable = i + 1;

//como copiar un array
//Spread operator
const edadesCopia = [...edades];

// ordenar array

//sort modificar el array original
const edadesOrdenadas = [...edades].sort((a, b) => a - b);

console.log(edadesOrdenadas);
console.log(edades);

//map nos sirve para modificar los elementos de un array y devolver un nuevo array

const edadesIncrementadas = edades.map((edad) => edad + 1);
console.log(edadesIncrementadas);

//ejemplo map
const tareas = ["limpiar", "comer", "estudiar"];

const tareaCard = tareas.map((tarea) => {
  return `
    <div>${tarea}</div>
    <input type="checkbox" value={false} />
  `;
});

//Filtar elementos de un array
const edadesValidasa = edades.filter((edad) => edad >= 18);

//verificar si un string incluye otro string o array

//ejemplo de búsqueda básica
console.log("erick".includes("ek"));

let terminosBusqueda = "ar";

const tareasEncontradasd = tareas.filter((tarea) =>
  tarea.includes(terminosBusqueda)
);

//suma de edades con reduce
const sumaEdades = edades.reduce((acumulador, edad) => acumulador + edad, 0);
