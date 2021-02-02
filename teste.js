const colaboradores = [
  { nome: "Cris", horasTrabalhadas: 220 },
  { nome: "Rebeca", horasTrabalhadas: 210 }
];

function adicionaSalario(colaborador) {
  const salario = colaborador.horasTrabalhadas * 50;
  colaborador.salario = salario;

  return {
    salario: salario
  };
}

const colaboradoresComSalario = colaboradores.map(adicionaSalario);

console.log(colaboradoresComSalario);

const frutas = ["amora", "laranja", "melancia", "acerola"];

frutas.sort();
frutas.reverse();
console.log(frutas);

const person = ["Cris"];

person.push("James", "Jenny");
person.push("John");

console.log(person);

const familiaPai = ["Avó Zeca", "Avô Aroldo"];
const familiaMae = ["Avô Carlos", "Primo João Paulo"];

const familiaFilho = familiaPai.concat(familiaMae);

console.log(familiaPai);
console.log(familiaMae);
console.log(familiaFilho);

const pessoas = ["Cris", "Alexandre", "Pablo", "Cris"];

console.log(pessoas.indexOf("Cris"));
console.log(pessoas.findIndex(nome => nome === "Cris"));
console.log(pessoas.lastIndexOf("Cris"));
console.log(pessoas.find(nome => nome === "Cris"));

const frutas = ["amora", ["laranja", ["melancia"], "acerola"]];

console.log(frutas.flat(2));

const alunos = [
  { nome: "Cris", nota: 10 },
  { nome: "Alexandre", nota: 7 },
  { nome: "Pablo", nota: 4 }
];

function alunoAprovado(aluno) {
  return aluno.nota >= 7;
}

console.log(alunos.filter(alunoAprovado));
console.log(alunos.some(alunoAprovado));
console.log(alunos.every(alunoAprovado));

let arr1 = [2];
let arr2 =  Array.from(2);
let arr3 =  Array.of(2);
let arr4 =  Array(2);
let arr5 =  new Array(2);

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);


var obj = {
  sleep: function() {
    setTimeout(() => {
      console.log(this);
    }, 1000);
  }
}

obj.sleep();