class Auto {
  // Propiedades
  #vim;
  marca;
  
  constructor(marca, modelo, color, vim) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.#vim = vim;
  }
  // getters y setters
  get marca() {
    return this.marca;
  }

  set marca(nuevaMarca) {
    this.marca = nuevaMarca;
  }

  // Metodos
  acelerar(velocidad) {
    console.log(`Acelerando a ${velocidad} km/h`);
  }

  frenar() {
    console.log("Frenando");
  }

  encender() {
    console.log("Encendiendo");
    this.#encenderRadio();
  }

  apagar() {
    console.log("Apagando");
  }

  mostrarInfo() {
    console.log("la marca es:" + this.marca);
    console.log("El vin es:" + this.#vim);
  }

  #encenderRadio() {
    console.log("radio Encendida");
  }
}

const autoToyota = new Auto("Toyota", "Corolla", "Rojo");
autoToyota.encender();
autoToyota.acelerar(100);
autoToyota.frenar();
autoToyota.apagar();
autoToyota.mostrarInfo();
autoToyota.marca = "hola";
console.log(autoToyota);

//TODO hacer un ejemplo con el dom y clases