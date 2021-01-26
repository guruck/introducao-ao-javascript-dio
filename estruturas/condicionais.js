/** Se (condicao), senão se (condicao), senão
 * If ... else if ... else ....
 */
const lista = [0,1,2,3,4,5,6,7,8,9];
lista.forEach(item => (item%2 === 0) ? console.log(`${item} é par`) : console.log(`${item} é impar`));
lista.forEach(item => {
  if (item%2 === 0) {
    console.log(`${item} é par, divisivel por 2`) ;
  }else if (item%3 === 0){ 
    console.log(`${item} é impar, divisivel por 3`);
  }else{
    console.log(`${item} é impar`);
  }
});

/** Switch (condicao)
 *  caso... caso... default...
 */
const fruta = 'pera';
switch (fruta){
  case 'banana':
    console.log('R$4,50/kg');
    break;
  case 'abacate':
  case 'pera':
    console.log('R$2,50/kg');
    break;
  case 'jaca':
    console.log('R$10,50/kg');
    break;
  default :
    console.log('fruta não cadastrada');
    break;
}