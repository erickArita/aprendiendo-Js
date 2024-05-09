const edades = [12, 13, 14, 15, 16, 17, 18, 19];

const estudiantes = [
  {nombre: 'Juan', edad: 20, curso: 'JS Avanzado'},
  {nombre: 'Pedro', edad: 21, curso: 'JS Avanzado'},
  {nombre: 'Maria', edad: 22, curso: 'JS Avanzado'}
];

//propiedades
// - tiene un indice de 0 a n
// - tiene un ancho fijo
// - se puede agregar elementos duplicados

// acceder a lso elementos del array por su indice
console.log(edades[0])
console.log(edades[1])
// modificar elementos del array por su indice
edades[0] = 13
// borrar elementos del array por su indice
edades[0] = null

//agregar elementos al final
edades.push(20);
// agregar en una posicion especifica
edades.splice(2, 0, 13.5)
//eliminar elementos en x posicion
edades.splice(0, 2)
//editar elementos
edades.splice(2, 1, 13.5)
//agragar al inicio
edades.unshift(11)
//eliminar al final
edades.pop()

//Operaciones con el array
// iterar sobre los elementos sin modificar el array

edades.forEach((value) => {
  console.log(value)
})


console.log(edades)
