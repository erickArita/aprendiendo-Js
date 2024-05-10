// tipos de for
//suistituir el reduce por un for each
let sumaEdades2 = 0;
edades.forEach((edad) => {
  sumaEdades2 = sumaEdades2 + edad;
});

for (let index = 0; index < array.length; index++) {
  const element = array[index];
}

for (let edad of edades) {
  console.log(edad);
}

const object = {
  nombre: "erick",
  edad: 20,
};

for (const key in object) {
  console.log(object[key]);
}
