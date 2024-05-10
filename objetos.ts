//dfeinir un objeto
const estudiante = {
  nombre: "Juan",
  edad: 20,
  curso: "JS Avanzado",
};

const estudiante2 = {
  nombre: "Juan",
  edad: 20,
  curso: "JS Avanzado",
  aumentarEdad: function () {
    this.edad++;
  },
};

//propiedades
// no se puede agregar elementos duplicados

// //agregar propiedades
// estudiante.matriculado = true
//
// //editar propiedades
// estudiante.nombre = 'Pedro'
//
// //eliminar valores
// // estudiante.nombre = null
// // estudiante.nombre = undefined
// //eliminando la propiedad
// // delete estudiante.nombre
//
// const intputPropiedad = 'nombre'
//
// //agregar propiedades dinamicamente const sintaxis de corchetes
// estudiante[intputPropiedad] = 'Maria'

// console.log(estudiante === estudiante2)

//Como copiar un objeto
const estudianteCopia = { ...estudiante };
