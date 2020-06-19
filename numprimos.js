let num= parseInt(prompt("Ingrese un numero mayor a 1"));
if (num<=1) {
  alert("Ingrese un numero mayor a uno.");
  let num= prompt("Ingrese un numero mayor a 1");
}
let arr= [];
function esPrimo(i) {
  if ( i == 0 || i == 1 || i == 4) {
    return false;
  }
	for (let x = 2; x < i / 2; x++) {
		if (i % x == 0) {
      return false;
    }
	}
	arr.push(i);
}

for (let i = 0; i <num; i++) {
    esPrimo(i);
}
let resultado=arr.filter((x)=> num % x === 0);
console.log(resultado);
