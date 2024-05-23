export class Counter {
  #contador = 0;

  get contador() {
    return this.#contador;
  }

  set contador(value) {
    if (typeof value !== "number") alert("El contador debe ser un número");

    if (value < 0) {
      alert("El contador no puede ser menor a 0");
      return;
    }
    this.#contador = value;
  }

  incrementar() {
    this.#contador++;
  }

  decrementar() {
    if (this.#isMenorACero(this.#contador)) return;
    this.#contador--;
  }

  #isMenorACero(contador) {
    if (contador <= 0) {
      alert("El contador no puede ser menor a 0");
      return true;
    } else {
      return false;
    }
  }
}

export class CounterView {
  #$aumentarBtn;
  #$disminuirBtn;
  #$contador;
  #conterInstance;

  constructor(conterInstance, valorInicial = 0) {
    this.#conterInstance = conterInstance;
    this.#conterInstance.contador = valorInicial;
    this.#inicializarReferenciasDom();
    this.#initEventListeners();
    this.render();
  }

  render() {
    this.#$contador.textContent = this.#conterInstance.contador;
  }

  decrementarAutomatico(timeMs = 1000) {
    setInterval(() => {
      if (this.#conterInstance.contador > 0) {
        this.#conterInstance.decrementar();
        this.render();
      }
    }, timeMs);
  }

  #inicializarReferenciasDom() {
    this.#$aumentarBtn = document.querySelector("#aumentar");
    this.#$disminuirBtn = document.querySelector("#disminuir");
    this.#$contador = document.querySelector("#counter");
  }

  #initEventListeners() {
    this.#$aumentarBtn.addEventListener("click", () => {
      this.#conterInstance.incrementar();
      this.render();
    });

    this.#$disminuirBtn.addEventListener("click", () => {
      this.#conterInstance.decrementar();
      this.render();
    });
  }
}
