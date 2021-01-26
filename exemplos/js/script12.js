'use strict'; // O JavaScript acusa mais erros
window.addEventListener('load', () => {
  console.log('pagina carregada');
  doSpread();
  doDestructuring();
});

function doSpread() {
  const a = people.results.filter((person) => person.favoriteFruit === 'apple');
  const b = people.results.filter((person) => person.gender === 'male');

  console.log('apple');
  console.log(a);
  console.log('male');
  console.log(b);
  const c = [...a, ...b, { msg: 'oi' }];
  console.log(c);
}

// soma elementos de um array de numeros.
const infSum = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);

function doDestructuring() {
  const { title, first, last } = people.results[0].name;
  const str = `Olá ${title} ${first} ${last}`;
  console.log(str);
}
