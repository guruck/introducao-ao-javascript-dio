let partes = ['ombro','joelhos'];
let musica = ['cabeça',...partes, 'e','pés'];

const fn = (x,y,z) => {
  console.log(partes[x]);
  console.log(partes[y]);
  console.log(musica[z]);
}
let args = [0,1,2];
fn (...args);