'use strict'; // O JavaScript acusa mais erros
window.addEventListener('load', start);

function start() {
  console.log('pagina carregada');
  withVar();
  withLet();
}

function withVar() {
  for (var i = 0; i < 5; i++) {
    console.log('var' + i);
  }
  i += 20;
  console.log('var' + i);
}

function withLet() {
  for (let i = 0; i < 5; i++) {
    console.log('let' + i);
  }
  // i += 20;
  // console.log('let' + i);
}

const c = 20;
// c = 10; //  isso da erro Assignment to constant variable.

const d = [];
// d = 10; //  isso da erro Assignment to constant variable.
d.push(10); // isso pode!

function sum(a, b) {
  return a + b;
}

const sum2 = function (a, b) {
  // função anônima
  return a + b;
};

const sum3 = (a, b) => {
  // arrow function
  return a + b;
};

// arrow function reduzida
const sum4 = (a, b) => a + b;

console.log(sum(2, 3));
console.log(sum2(2, 3));
console.log(sum3(2, 3));
console.log(sum4(2, 3));

// Template Literals
const givenName = 'Tiago';
const middleName = 'Ferreira';
const lastName = 'Rodrigues';

const fullName = 'Meu nome é ' + givenName + ' ' + middleName + ' ' + lastName;
const fullName2 = `Meu nome é ${givenName} ${middleName} ${lastName}`;

console.log(fullName);
console.log(fullName2);

const sum5 = (a, b = 0) => a + b;
console.log(sum5(2));
console.log(sum5(2, 3));
