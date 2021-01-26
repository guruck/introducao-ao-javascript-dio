// in , verifica a existencia de algo ou propriedade
let arvores = new Array('pau-brasil','loureiro','cedro','carvalho','sicomoro');
console.log(`0 in arvores : ${0 in arvores}`);
console.log(`'cedro' in arvores : ${'cedro' in arvores}`);
console.log(`'PI' in Math : ${'PI' in Math}`);
console.log(`'length' in arvores : ${'length' in arvores}`);

let dia = new Date(2021,01,25);
if(dia instanceof Date){
  console.log(`dia instanceof Date : ${dia instanceof Date}`);
}

console.log(`"marca" instanceof String : ${"marca" instanceof String}`);
console.log(`typeof "marca" : ${ typeof "marca"}`);

/**
 * Loop for...of percorre objetos iterativos (incluindo Array, Map, Set, 
 * o objeto arguments e assim por diante), chamando uma função personalizada 
 * com instruções a serem executadas para o valor de cada objeto distinto.
 */
let iterable = [10, 20, 30];

for (let value of iterable) {
  console.log(value);
}