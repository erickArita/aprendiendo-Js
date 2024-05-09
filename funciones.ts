// funciones puras
// funciones que no tienen efectos secundarios y siempre devuelven
// el mismo resultado para los mismos parámetros
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

// higher-order functions
// funciones que reciben funciones como parámetros y/o devuelven funciones
function llamarOperacion(tipo) {
  if (tipo === "sumar") return sumar;

  if (tipo === "restar") return restar;
}

const sumarNueva = llamarOperacion("sumar");

const res = llamarOperacion("sumar")(1, 2);

const respuesta = sumarNueva(1, 2);

//callbacks es una función que se pasa como argumento a otra función
function operar(a, b, operacion) {
  return operacion(a, b);
}

const resOperacion = operar(2, 1, restar);

console.log(resOperacion);

