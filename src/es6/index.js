//Default Params y Concatenacion

//Default Params
function newFunction(name, age, country) {
  var name = name || "oscar";
  var age = age || "oscar";
  var country = country || "oscar";
  console.log(name, age, country);
}

// es6

function newFunction2(name = "Luis", age = 22, country = "Vzl") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Dorime", 23, "COL");

//---------------------------------------------------
//Concatenacion
let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

//es6
console.log(`${hello} ${world}`);
let dorime = "dorime";
let ameno = "ameno";
console.log(`${dorime} ${ameno}`);

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

//------------------------------------
//Arrow Functions, Promesas y Parametros en objetos
//Parametros en Objetos
//let name = "Luis";
//let age = 22;

//es5
obj = { name: name, age: age };
//es6 (mejor forma)
obj2 = { name, age };
console.log(obj2);

//Arrow Functions
const names = [
  { name: "Piplup", tipo: "agua" },
  { name: "Pikachu", tipo: "electrico" },
];

let listOfNames = names.map(function (item) {
  console.log(item.name);
});

//es6
let listOfNames2 = names.map((item) => console.log(item.name));
const listOfNames3 = (name, age, country) => {
  //....
};

const listOfNames4 = (name) => {
  //....
};

const square = (num) => num * num;

//Promesas
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Ups!");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .then(() => console.log("Holaaa"))
  .catch((error) => console.log(error));
