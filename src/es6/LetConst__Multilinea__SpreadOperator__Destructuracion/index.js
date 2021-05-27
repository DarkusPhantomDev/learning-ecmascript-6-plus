//Let y Const, Multilinea, Spread Operator y Destructuracion
//Multilinea
let lorem = "Lroemdaom dasda \n" + "Frase epica";

//es6
let lorem2 = `Òtra frase app.put('route', handler);
para practicar es6`;

//Destructuracion
let person = {
  name: "Luis",
  age: 22,
  country: "Vzl",
};
console.log(person.name, person.age, person.country);

//es6
let { name, age, country } = person;
console.log(name, age, country);

//Spread Operator
let team1 = ["oscar", "julian", "ricardo"];
let team2 = ["valeria", "yesica", "camila"];

//es6
let eduaction = ["David", ...team1, ...team2];

console.log(eduaction);
