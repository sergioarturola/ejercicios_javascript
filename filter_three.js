//Dado un array [1,3,5,33] retornar solamente [3, 33] USAR FUNCIONES


function filterTree(numbers){

	return numbers.filter((x) => x%3 === 0);
}

let list = [1,3,5,33];

console.log(filterTree(list));


