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
