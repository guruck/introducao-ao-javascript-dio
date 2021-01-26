const CachorroLoco = require('./Cachorro.js');

const newPug = new CachorroLoco(false);
const newPitbull = new CachorroLoco(true);

CachorroLoco.movimentar();
newPug.latir();
newPug.setMovimento(true);
console.log(newPug.getMovimento(),newPitbull.getMovimento());
newPitbull.latir();
CachorroLoco.parar();