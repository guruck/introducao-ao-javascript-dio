'use strict';
const animal = require('./Animal.js');

class Cachorro extends animal{
  
  constructor(morde){
    super(4);
    this.morde = morde;  
  }

  latir(){
    console.log('au! au! au!...');
  }
}
module.exports = Cachorro;