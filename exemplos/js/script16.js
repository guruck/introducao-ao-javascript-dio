window.addEventListener('load', function () {
  console.log('carregado com sucesso.');

  const guruckFetch = this.fetch('https://api.github.com/users/guruck');
  divFetch.textContent += guruckFetch;

  const guruckResponse = this.fetch(
    'https://api.github.com/users/guruck'
  ).then(function (res) {
    divFetch.textContent += res;
    console.log('Promisse Resolvida');
    console.log(res);
    // return Response;
  });
  console.log('depois da Promisse');

  const finalResponse = this.fetch('https://api.github.com/users/guruck').then(
    function (res) {
      return res.json().then(function (dados) {
        showDados(dados);
      });
    }
  );

  // doFetch();
  doFetchAsync();

  execDivPromisse(2, 1);
  execDivPromisse(2, 0);

  execDivPromisseAsync(2, 1);
  execDivPromisseAsync(2, 0);
});

function doFetch() {
  const resAula = fetch('https://api.github.com/users/guruck')
    .then((res) => {
      res.json().then((data) => {
        showDados(data);
      });
    })
    .catch((error) => {
      console.log('Erro na requisição.');
    });
}
async function doFetchAsync() {
  const res = await fetch('https://api.github.com/users/guruck');
  const json = await res.json();
  console.log('async');
  console.log(json);
}

function execDivPromisse(a, b) {
  divPromisse(a, b)
    .then((result) => {
      console.log(result);
    })
    .catch((reject) => {
      console.log(reject);
    });
}

async function execDivPromisseAsync(a, b) {
  const division = await divPromisse(a, b);
  console.log(division);
}

let divFetch = document.querySelector('#fetch');

function showDados(dados) {
  let sp1 = createSpan('data: ' + dados.login + ' ' + dados.name, 1);
  let newBR = document.createElement('br');
  divFetch.appendChild(newBR);
  divFetch.appendChild(sp1);
}

function createSpan(name, index) {
  let newSpan = document.createElement('span');
  newSpan.textContent = name;
  newSpan.classList.add('clickable');
  return newSpan;
}

function divPromisse(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject('Nao dividiras por zero');
    }
    resolve(a / b);
  });
}
