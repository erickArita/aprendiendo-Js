import { Counter, CounterView } from "./counter.js";

const counter = new Counter();
const counterView = new CounterView(counter, 50);

counterView.decrementarAutomatico(1000);
