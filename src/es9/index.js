const obj = {
  name: "luis",
  age: 22,
  country: "Vzla",
};

//let { name, ...all } = obj;
let { country, ...all } = obj;

//console.log(name, all);
console.log(all);

//Propiedades de propagacion. Unir elementos de un objeto a otro objeto
const obj1 = {
  name: "luis",
  age: 22,
};

const obj2 = {
  ...obj,
  country: "Vzla",
};

console.log(obj1);

//Promise.finally
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve("Hello");
        }, 3000)
      : reject(new Error("test error"));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finally"));

//regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/; //año, mes, dia
const match = regexData.exec("2018-04-20");
const year = match[1]; //Accede a la primer elemento
const month = match[2]; //Accede a la segundo elemento
const day = match[3]; //Accede a la tercer elemento
console.log(year, month, day);
