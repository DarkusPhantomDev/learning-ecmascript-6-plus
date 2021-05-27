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
