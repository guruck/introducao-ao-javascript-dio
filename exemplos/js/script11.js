'use strict'; // O JavaScript acusa mais erros
window.addEventListener('load', () => {
  console.log('pagina carregada');
  doMap();
  doFilter();
  doForEach();
  doReduce();
  doFind();
  doSome();
  doEvery();
  doSort();
  doSortSimple();
});

// sorteando com regras implementadas em objetos
function doSort() {
  const mapNames = people.results
    .map((person) => {
      return {
        name: person.name.first,
      };
    })
    .filter((person) => {
      return person.name.startsWith('B');
    })
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
      // return a.name.length - b.name.length;
    });

  console.log(mapNames);
}

// sorteando elementos puro em array
function doSortSimple() {
  const mapNames = people.results
    .map((person) => {
      return person.name.first;
    })
    .filter((person) => person.startsWith('B'))
    .sort();

  console.log(mapNames);
}

//verifica se todos os elementos atendem a proposicao, retorna true ou false
function doEvery() {
  const everybody = people.results.every((person) => {
    return person.location.country === 'Brazils';
  });
  console.log(everybody);
}

// verifica se há pelo menos um elemento que atenda a proposicao, retorna true ou false
function doSome() {
  const someState = people.results.some((person) => {
    return person.location.state === 'Illinois';
  });

  console.info(someState);
}

// encontra o primeiro elemento com base em proposicao
function doFind() {
  const found = people.results.find((person) => {
    return person.location.state === 'Missouri';
  });

  console.log(found);
}

// realiza calculo iterativo com base nos elementos
function doReduce() {
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.age;
  }, 0);
  console.log('Total de idades: ' + totalAges);
}

// percorre todos os elementos do array aplicando logica
function doForEach() {
  const mappedPeople = doMap();

  mappedPeople.forEach((person) => {
    person.nameSize =
      person.name.title.length +
      person.name.first.length +
      person.name.last.length;
  });
  console.log(mappedPeople);
}

// gera um novo Array filtrando elementos com base na proposicao
function doFilter() {
  const olderThan45 = people.results.filter((person) => {
    return person.age > 32;
  });
  console.log(olderThan45);
}

// gera um novo array transformando os dados
function doMap() {
  const nameEmailArray = people.results.map((person) => {
    return {
      name: person.name,
      email: person.email,
    };
  });
  console.log(nameEmailArray);
  return nameEmailArray;
}
