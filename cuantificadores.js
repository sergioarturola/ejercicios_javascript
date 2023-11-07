const followed = /ad+/; //a seguido de una o mas d
const repeat = /a{3,5}/;//a repetido de 3 a 5 veces

console.log(followed.test('aaaa'));//false
console.log(followed.test('aaddd'));//true
console.log(repeat.test('aa'));//false
console.log(repeat.test('aaaa'));//true;