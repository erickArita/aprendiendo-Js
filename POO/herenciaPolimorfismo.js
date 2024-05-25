//Herencia y polimorfismo
class Vehiculo {
  constructor(marca, modelo, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
  }

  acelerar() {
    console.log("Acelerando...");
  }

  frenar() {
    console.log("Frenando...");
  }
}

//se hereda con extends
class Auto extends Vehiculo {
  constructor(marca, modelo, precio, puertas) {
    //se llama al constructor de la clase padre con super
    super(marca, modelo, precio);
  }
}

class Moto extends Vehiculo {
  constructor(marca, modelo, precio, cilindrada) {
    super(marca, modelo, precio);
    this.cilindrada = cilindrada;
  }
}

const auto = new Auto("Ford", "Fiesta", 150000, 5);
const moto = new Moto("Honda", "Titan", 60000, "125cc");

console.log(auto);
console.log(moto);
//Polimorfismo

// auto.acelerar();
// moto.acelerar();

class Transporte {
  constructor(vehiculo) {
    this.vehiculo = vehiculo;
  }

  acelerar() {
    this.vehiculo.acelerar();
  }

  frenar() {
    this.vehiculo.frenar();
  }
}

const transporteElegido = new Transporte(auto);
transporteElegido.acelerar();

//polimorfismo sin herencia
class Auto2 {
  constructor(marca, modelo, precio, puertas) {
    //se llama al constructor de la clase padre con super
  }

  acelerar() {
    console.log("Acelerando el auto...");
  }

  frenar() {
    console.log("Frenando el auto...");
  }
}

class Moto2 {
  constructor(marca, modelo, precio, cilindrada) {
    this.cilindrada = cilindrada;
  }

  acelerar() {
    console.log("Acelerando la moto...");
  }

  frenar() {
    console.log("Frenando la moto...");
  }
}
const auto2 = new Auto2("Ford", "Fiesta", 150000, 5);
const moto2 = new Moto2("Honda", "Titan", 60000, "125cc");

const transporteElegido2 = new Transporte(auto2);

// transporteElegido2.acelerar();

class AzureStorage {
  constructor() {}
  upload() {
    console.log("Subiendo archivo a Azure");
  }
  download() {
    console.log("Descargando archivo de Azure");
  }
}

class GoogleStorage {
  constructor() {}
  upload() {
    console.log("Subiendo archivo a Google");
  }
  download() {
    console.log("Descargando archivo de Google");
  }
}

class AmazonStorage {
  constructor() {}
  upload() {
    console.log("Subiendo archivo a Amazon");
  }
  download() {
    console.log("Descargando archivo de Amazon");
  }
}
//clase que usamos para el polimorfismo
//ya que todos los servicios de almacenamiento tienen los mismos metodos
//abstraemos los metodos y simplemente nos enfocamos en subir y descargar sin importar el storage(azure, google, amazon)
class StorageService {
  //se inyecta la dependencia
  constructor(provider) {
    this.provider = provider;
  }

  upload() {
    this.provider.upload();
  }

  download() {
    this.provider.download();
  }
}

const azureStorage = new AzureStorage();
const googleStorage = new GoogleStorage();
const amazonStorage = new AmazonStorage();
// se pasa la dependencia
const storageService = new StorageService(azureStorage);
const storageService2 = new StorageService(googleStorage);
const storageService3 = new StorageService(amazonStorage);

storageService.upload();
storageService2.upload();
storageService3.upload();
