import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Array<Negociacao> = [];

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  // ReadonlyArray => Array de somente leitura
  lista(): ReadonlyArray<Negociacao> {
    return this.negociacoes;
  }
}
