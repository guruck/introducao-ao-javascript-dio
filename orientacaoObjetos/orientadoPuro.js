function Animalia(patas){
  this.qtdePatas = patas;
  this.movimento = false;
} 
  
Object.defineProperty(Animalia.prototype, 'patas', {
  get: function() {
      return qtdePatas;
  },
  set: function(i) {
      this.qtdePatas = i;
  }
});
Object.defineProperty(Animalia.prototype, 'move', {
  get: function() {
      return movimento;
  },
  set: function(value) {
      this.movimento = value;
      if (value)
        console.log('em movimento...')
      else
        console.log('paradao...')
  }
});
Animalia.prototype.movimentar = () => console.log('animal em movimento...');
Animalia.prototype.parar = function(){
  console.log('animal parado...');
}

function Cachorrao(morde){
  this.qtdePatas = 4;
  this.movimento = false;
  this.morde = morde;
}
Cachorrao.prototype = Object.create(Animalia.prototype);
Cachorrao.prototype.latir = function(latido = 'au! au! auauau!...'){
  console.log(latido);
}

console.log("------------------------------"); 
const pugao = new Cachorrao(false);
const pitbuzao = new Cachorrao(true);
console.log(pugao.__proto__); // f split() {[native code]}
console.log(pugao.__proto__.__proto__); // f split() {[native code]}
console.log(pugao.construtor); // true
console.log(pugao.prototype); // true
console.log(pugao); // true
pugao.patas = 8;
pugao.move = true;
console.log(pugao); // true
pugao.move = false;

Cachorrao.prototype.movimentar();

pugao.latir();
console.log(pugao.movimento,pitbuzao.movimento);
pitbuzao.latir('au au au au au au au ....');
Cachorrao.prototype.parar();
