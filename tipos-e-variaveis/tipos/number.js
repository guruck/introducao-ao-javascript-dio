const myNumber = 12.4032;

// Transformar número para string
const numberAsString = myNumber.toString();
console.log("Número transformado em string: ", typeof numberAsString);

// Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log("\nNúmero com duas casas decimais:", fixedTwoDecimals);

// Transforma uma string em float
const floatN = parseFloat("13.20");
console.log("\nString parseada para float: ", floatN , typeof floatN);

// Transforma uma string em int
const intN = parseInt("13.20");
console.log("\nString parseada para int:", intN, typeof intN);

const numeroPi = 3.1415161789;
console.log(numeroPi.toFixed(2));