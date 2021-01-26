'use strict';
// const myText = String('Hello prototype');
const myText = 'Hello prototype';
console.log(myText.__proto__.split); // f split() {[native code]}
console.log(String.prototype.split); // f split() {[native code]}
console.log(myText.__proto__.split === String.prototype.split); // true
console.log(myText.construtor === String.construtor); // true

// '__proto__' aponta para 'prototype' que é criado a partir de um 'construtor'

function animal(patas){
  this.qtdePatas = patas;
};

const cao = new animal(4);
console.log(cao.qtdePatas);
console.log(cao.__proto__); // f split() {[native code]}
console.log(cao.construtor); // true
console.log(typeof cao); // true

function animal2(patas){
  this.qtdePatas = patas;
  return {
    qtdePatas : 10
  };
};

const cao2 = new animal2(4);
console.log(cao2.qtdePatas);
console.log(cao2.__proto__); // f split() {[native code]}
console.log(cao2.construtor); // true
console.log(typeof cao2); // true

function cachorro(morde){
  animal.call(this,4);
  this.morde = morde;
}

const pug = new cachorro(false);
console.log(pug);