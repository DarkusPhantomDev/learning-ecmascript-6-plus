//Includes (mejor que usar indexOf)
const numbers = [1, 2, 3, 7, 8];

if (numbers.includes(7)) {
  console.log("Se encuentra el 7");
} else {
  console.log("No se encuenta el 7");
}

const nombres = ["Nelcys", "Angelo", "Luis", "Ana", "Leonardo"];

if (nombres.includes("Nelcys")) {
  console.log("Nelcys");
} else {
  console.log(...nombres);
}

//Metodo para elevar a la potencia

let base = 4;
let exponente = 3;
let result = base ** exponente;
console.log(result);
