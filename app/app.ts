import { Negociacao } from "./models/negociacao.js";
import { NegaciacaoController } from "./controllers/negaciacao-controller.js";

const controller = new NegaciacaoController();
const form = document.querySelector('.form');
form.addEventListener("submit", (event) => {
  event.preventDefault();
  controller.adiciona();
});

