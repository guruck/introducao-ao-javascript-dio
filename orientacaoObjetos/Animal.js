'use strict';
class Animal{
  #qtdePatas = 0;
  #movimento = false;

  constructor(qtdePatas) {
    this.#qtdePatas = qtdePatas;
  }

  setQtdePatas(qtdePatas){
    this.#qtdePatas = qtdePatas;
  }

  getQtdePatas(){
    return this.#qtdePatas;
  }

  setMovimento(movimento){
    this.#movimento = movimento;
  }

  getMovimento(){
    return this.#movimento;
  }

  static movimentar(){

      console.log('animal em movimento...');

  }

  static parar(){

      console.log('animal parado...');

  }
}
module.exports = Animal;