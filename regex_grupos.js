//los grupos nos pueden ayudar a encontrar ciertas palabras en una cadena

const regx = /(javascript|python)/;//javascript o python

console.log(regx.test('me gusta javascript'));
console.log(regx.test('me gusta c#'));
console.log(regx.test('me gusta python'));