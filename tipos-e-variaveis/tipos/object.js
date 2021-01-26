let user = {
  name: "Joao",
  //lastName: "Doriana"
};

// Alterando a propriedade de um objeto
user.name = "Outro nome 1";
user["name"] = "Outro nome 2";

const prop = "name";
user[prop] = "Outro nome 3";

function getProp(prop) {
    return user[prop];
}
console.log(getProp('name'));

// Criando uma propriedade
user.lastName = "Cabrini da Silva";

// Deletando uma propriedade
//delete user.name;

//==================Objetos parte 2 =================
//Recuperar as chaves do objeto
console.log('Propriedades do objeto user: ', Object.keys(user));

//Recuperar os valores do objeto
console.log('Valores do objeto user: ', Object.values(user));

//Recuperar um array de dos pares do objeto
console.log('Array do objeto user: ', Object.entries(user));

//Mergear propriedades de objetos
Object.assign(user, {fullName:'Joao Doriana'});

console.log('\nAdiciona a propriedade fullName no Objeto User',user);
console.log('\nRetorna um novo Objeto mergeando dois ou mais objetos',Object.assign({},user, {age:'66'}));

//Previne todas as alterações do objeto
const newObject = {foo:'bar'};
Object.freeze(newObject);

newObject.foo = 'changes';
delete newObject.foo;
newObject.bar = 'foo';

console.log('\nVariavel newObject apos alteracoes: ',newObject);

//permitindo apenas as alterações de propriedades existentes em um objeto
const person = {name:'Zulu'};
Object.seal(person);

person.name = 'changes';
delete person.name 
person.fullName  = 'changes changes changes';

console.log('\nVariavel person apos alteracoes: ',person);
