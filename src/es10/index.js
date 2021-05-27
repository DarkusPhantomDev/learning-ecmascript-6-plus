//Array flat
let array = [1, 2, 3, 4, [1, 2, 3, 4, [1, 2, 3]]];

//.flat(valor_profundidad)
console.log(array.flat()); // [ 1, 2, 3, 4, 1, 2, 3, 4, [ 1, 2, 3 ] ]
console.log(array.flat(2)); /*
[
  1, 2, 3, 4, 1,
  2, 3, 4, 1, 2,
  3
]
*/

let array1 = [1, 2, 3, 4, 5];
console.log(array1.flatMap((value) => [value, value * 2]));
/*
[
  1, 2, 2, 4,  3,
  6, 4, 8, 5, 10
]
  */

//Eliminar espaciados
//trimStart
let hello = "           aaaaaaaaa";
let hello2 = "aaaaaaaaa           ";

console.log(hello); //      aaaaaaaaa
console.log(hello.trimStart()); // aaaaaaaaa
console.log(hello2); // aaaaaaaaa
console.log(hello2.trimEnd()); //aaaaaaaaa

//Otra manera de escribir try catch
/*
try {
  
} catch {
  error
}
  */

// Convertir arreglos en objetos
let entries = [
  ["name", "luis"],
  ["age", 22],
];
console.log(Object.fromEntries(entries));

//Acceder a la descripcion de un objeto
let mySymbol = `My Symbol`;
const symbol = Symbol(mySymbol);
console.log(symbol.description);
