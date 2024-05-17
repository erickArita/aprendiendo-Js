// que es recursividad
// es una funcion que se llama a si misma

//para que hacer una funcion recursiva
// para hacer un ciclo de manera mas sencilla

//para que nos ayuda una funcion recursiva casos practicos
// iterar objetos anidados
// iterar estructuras de datos anidadas

// hacer serie de fibonacci con un ciclo
const serieFibonacciCiclo = (n) => {
  let a = 0;
  let b = 1;
  let c = 0;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    [a, b] = [b, c];
  }

  return c;
};

//pasos para hacer una funcion recursiva

//1.- definir el caso base (cuando la funcion deja de llamarse a si misma)
//2.- definir el caso recursivo (cuando la funcion se llama a si misma)
//3.- llamar a la funcion recursiva

const easyRecursiva = (n) => {
  if (n === 0) return 0;

  const returnNumber = easyRecursiva(n - 1);
  
  return returnNumber;
};
console.log(easyRecursiva(10));

const serieFibonacciRecursiva = (n) => {
  let a = 0;
  let b = 1;
  let c = 0;

  if (n === 0) return a;
  if (n === 1) return b;

  const primerNumero = serieFibonacciRecursiva(n - 1); //1
  const segundoNumero = serieFibonacciRecursiva(n - 2); //0

  c = primerNumero + segundoNumero;

  return c;
};


