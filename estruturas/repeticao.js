/**
 * continue :>> pula o valor no laço
 * break    :>> para a execução
 */
/**
 * For (start, condicao, incremento)
 */
for(let x = 1; x <= 4; x++){
  if (x%3 === 0) continue;
  for(let y = 1; y <= 4; y++){
    if (y%2 === 0) continue;
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
/**
 * While (condicao)
 */
let loop = true;
let n = 0;
while(loop && true){
  console.log(`valor de n: ${++n}`);
  if (n%3 === 0) continue;
  if (n%5 === 0) loop = false;
}

/**
 * Do ... While (condicao)
 */

 do{
  console.log(`valor de n: ${++n}`);
  if (n>6) break;
  console.log(`valor de loop: ${loop}`);
  loop = true;
 }while(loop && true);