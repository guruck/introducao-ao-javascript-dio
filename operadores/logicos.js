//Operadores Logicos
// Negação (!)
let verdade = true;
let falso = !verdade;
let result = '';

// E
(verdade && true) ? result = 'verdadeiro' : result = 'falso';
console.log(`verdadeiro E verdadeiro : ${result}`);
(verdade && false) ? result = 'verdadeiro' : result = 'falso';
console.log(`verdadeiro E falso : ${result}`);
(falso && true) ? result = 'verdadeiro' : result = 'falso';
console.log(`falso E verdadeiro : ${result}`);
(falso && false) ? result = 'verdadeiro' : result = 'falso';
console.log(`falso E falso : ${result}\n`);

// OU
(verdade || true) ? result = 'verdadeiro' : result = 'falso';
console.log(`verdadeiro OU verdadeiro : ${result}`);
(verdade || false) ? result = 'verdadeiro' : result = 'falso';
console.log(`verdadeiro OU falso : ${result}`);
(falso || true) ? result = 'verdadeiro' : result = 'falso';
console.log(`falso OU verdadeiro : ${result}`);
(falso || false) ? result = 'verdadeiro' : result = 'falso';
console.log(`falso OU falso : ${result}`);
console.log(`\n3 == '3' : ${3 == '3'}`);
console.log(`true && '3' : ${true && '3'}`);
console.log(`true && (3 == 4) : ${true && (3 == 4)}`);
console.log(`'Gato' && 'Cão' : ${'Gato' && 'Cão'}`);
console.log(`true || '3' : ${true || '3'}`);
console.log(`true || (3 == 4) : ${true || (3 == 4)}`);
console.log(`'Gato' || 'Cão' : ${'Gato' || 'Cão'}\n`);

// Maior (>) Menor (<) {inclusivos (>=)(<=)}
//igual (==) não igual (!=) extritamente (=== ou !==)
for(let x = 1; x <= 4; x++){
  for(let y = 1; y <= 4; y++){
    console.log(`${x} >= ${y} : ${x >= y}`);
    console.log(`${x} <= ${y} : ${x <= y}`);
    console.log(`${x} > ${y} : ${x > y}`);
    console.log(`${x} < ${y} : ${x < y}`);
    console.log(`${x} == ${y} : ${x == y}`);
    console.log(`${x} === ${y} : ${x === y}`);
    console.log(`${x} != ${y} : ${x != y}`);
    console.log(`${x} !== ${y} : ${x !== y}`);
  }
}

