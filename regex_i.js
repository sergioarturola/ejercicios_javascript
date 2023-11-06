const reg_one = /hello/;
const reg_two = /hello/i;//i para ignorar entre mayusuculas y minusculas

const cadena = 'Hello World!';

//probando la cadena

console.log(reg_one.test(cadena));//false
console.log(reg_two.test(cadena));//true

